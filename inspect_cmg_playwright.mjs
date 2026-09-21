import { createRequire } from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const page=await browser.newPage();
await page.goto('https://commonwealthmigration.ca/',{waitUntil:'domcontentloaded',timeout:30000});
console.log((await page.title())+'\n'+(await page.locator('body').innerText()).slice(0,12000));
await browser.close();
