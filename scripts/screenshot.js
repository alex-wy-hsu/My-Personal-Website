const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function capture(file, out) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  const url = 'file://' + path.resolve(file);
  await page.goto(url, { waitUntil: 'networkidle0' }).catch(() => {});
  await page.screenshot({ path: out, fullPage: true });
  await browser.close();
}

async function main() {
  const outDir = path.join(__dirname, '..', 'assets', 'images');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const pages = [
    { file: 'index.html', out: path.join(outDir, 'snapshot-index.png') },
    { file: 'about.html', out: path.join(outDir, 'snapshot-about.png') },
    { file: 'projects.html', out: path.join(outDir, 'snapshot-projects.png') }
  ];

  for (const p of pages) {
    console.log('Capturing', p.file, '->', p.out);
    await capture(p.file, p.out);
  }
  console.log('All snapshots saved to', outDir);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
