const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function capture(url, outPath){
  const browser = await puppeteer.launch({args:['--no-sandbox']});
  const page = await browser.newPage();
  await page.setViewport({width:1280,height:800});
  await page.goto(url, {waitUntil:'networkidle2'});
  await page.waitForTimeout(300);
  await page.screenshot({path: outPath, fullPage: true});
  await browser.close();
}

if(require.main === module){
  const url = process.argv[2] || 'http://localhost:3000';
  const out = process.argv[3] || path.join(__dirname,'capture.png');
  capture(url, out).then(()=>console.log('Saved',out)).catch(e=>{console.error(e);process.exit(1)});
}
