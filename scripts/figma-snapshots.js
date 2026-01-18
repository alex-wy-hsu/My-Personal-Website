// scripts/figma-snapshots.js
// Usage: FIGMA_TOKEN=<token> FILE_KEY=<file_key> node scripts/figma-snapshots.js
const fs = require('fs');
const path = require('path');
const https = require('https');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FILE_KEY;

if (!FIGMA_TOKEN || !FILE_KEY) {
  console.error('Missing FIGMA_TOKEN or FILE_KEY. Usage: FIGMA_TOKEN=... FILE_KEY=... node scripts/figma-snapshots.js');
  process.exit(1);
}

function apiGet(pathname) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: pathname,
      method: 'GET',
      headers: { 'X-Figma-Token': FIGMA_TOKEN }
    };
    const req = https.request(options, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

function downloadUrl(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode !== 200) return reject(new Error('Failed to download: ' + res.statusCode));
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', err => {
      fs.unlink(dest, ()=>{});
      reject(err);
    });
  });
}

(async () => {
  try {
    console.log('Fetching file document...');
    const doc = await apiGet(`/v1/files/${FILE_KEY}`);
    const pages = doc.document.children || [];
    const frameMap = {};

    pages.forEach(page => {
      const pageName = (page.name || 'page').replace(/[<>:"/\\|?*]+/g, '_').trim() || 'page';
      (page.children || []).forEach(child => {
        const collect = (node) => {
          if (!node) return;
          const type = node.type;
          if (type === 'FRAME' || type === 'COMPONENT' || type === 'INSTANCE' || type === 'GROUP' || type === 'CANVAS' || type === 'RECT') {
            const id = node.id;
            const frameName = (node.name || id).replace(/[<>:"/\\|?*]+/g, '_').trim() || id;
            frameMap[id] = { pageName, frameName };
          }
          (node.children || []).forEach(collect);
        };
        collect(child);
      });
    });

    const ids = Object.keys(frameMap);
    if (ids.length === 0) {
      console.log('No frames found to export.');
      return;
    }

    const chunkSize = 80;
    for (let i = 0; i < ids.length; i += chunkSize) {
      const chunk = ids.slice(i, i + chunkSize);
      const idsParam = chunk.join(',');
      console.log(`Requesting image URLs for ${chunk.length} nodes...`);
      const imagesResp = await apiGet(`/v1/images/${FILE_KEY}?ids=${encodeURIComponent(idsParam)}&format=png&scale=2`);
      const images = imagesResp.images || {};
      for (const id of Object.keys(images)) {
        const url = images[id];
        if (!url) continue;
        const meta = frameMap[id];
        const outDir = path.join(process.cwd(), 'figma-snapshots', meta.pageName);
        fs.mkdirSync(outDir, { recursive: true });
        const outPath = path.join(outDir, `${meta.frameName}.png`);
        console.log(`Downloading ${meta.pageName}/${meta.frameName}`);
        await downloadUrl(url, outPath);
      }
    }

    console.log('All snapshots saved to figma-snapshots/');
  } catch (err) {
    console.error('Error:', err && err.message ? err.message : err);
    process.exit(1);
  }
})();
