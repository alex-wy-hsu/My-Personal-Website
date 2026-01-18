// scripts/screenshot-site.js
// Usage: node scripts/screenshot-site.js <startUrl>
// Saves screenshots into ./figma-site-snapshots/
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { URL } = require('url');

if (process.argv.length < 3) {
  console.error('Usage: node scripts/screenshot-site.js <startUrl>');
  process.exit(1);
}

const startUrl = process.argv[2];
const origin = new URL(startUrl).origin;
const outBase = path.join(process.cwd(), 'figma-site-snapshots');

function sanitizeFilename(s) {
  return s.replace(/[^a-z0-9-_\.]/gi, '_').replace(/_+/g, '_').replace(/^_+|_+$/g, '').slice(0,200) || 'page';
}

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const visited = new Set();
  const queue = [startUrl];

  while (queue.length) {
    const url = queue.shift();
    if (visited.has(url)) continue;
    try {
      const u = new URL(url);
      if (u.origin !== origin) continue; // skip external
    } catch (e) { continue; }
    console.log('Visiting', url);
    visited.add(url);
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      // wait a moment for dynamic content
      await new Promise(r => setTimeout(r, 800));
      const title = await page.title();
      const pathname = new URL(url).pathname || '/';
      const name = sanitizeFilename((title || pathname));
      const dir = path.join(outBase);
      fs.mkdirSync(dir, { recursive: true });
      const outPath = path.join(dir, `${name}.png`);
      await page.screenshot({ path: outPath, fullPage: true });
      console.log('Saved', outPath);

      // extract same-origin links
      const links = await page.$$eval('a[href]', as => as.map(a => a.href));
      for (const l of links) {
        try {
          const nu = new URL(l);
          if (nu.origin === origin) {
            const href = nu.href.split('#')[0];
            if (!visited.has(href) && !queue.includes(href)) queue.push(href);
          }
        } catch (e) { }
      }

    } catch (err) {
      console.error('Error visiting', url, err && err.message ? err.message : err);
    }
  }

  await browser.close();
  console.log('Done. Screenshots saved to', outBase);
})();
