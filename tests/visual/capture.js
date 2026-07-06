const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function capture(url, outPath){
  console.log('Launching browser...');
  const browser = await puppeteer.launch({args:['--no-sandbox'],headless:true});
  const page = await browser.newPage();
  await page.setViewport({width:1280,height:800});
  console.log('Navigating to', url);
  await page.goto(url, {waitUntil:'networkidle2',timeout:30000});
  console.log('Waiting for page load...');
  await new Promise(r => setTimeout(r, 500));
  console.log('Taking screenshot to', outPath);
  const dir = path.dirname(outPath);
  if(!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive:true});
  await page.screenshot({path: outPath, fullPage: false});
  console.log('Screenshot saved');
  await browser.close();
  console.log('Browser closed');
}

if(require.main === module){
  const url = process.argv[2] || 'http://localhost:3000';
  const out = process.argv[3] || path.join(__dirname,'capture.png');
  capture(url, out)
    .then(()=>{ console.log('Saved',out); process.exit(0); })
    .catch(e=>{ console.error('Error:',e); process.exit(1); });
}
