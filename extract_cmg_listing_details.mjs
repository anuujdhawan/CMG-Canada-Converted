import { createRequire } from 'node:module'; const {chromium}=createRequire(import.meta.url)('playwright-core');
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const page=await browser.newPage(); await page.goto('https://commonwealthmigration.ca/contact/',{waitUntil:'domcontentloaded',timeout:30000}).catch(()=>{});
const links=await page.locator('a').evaluateAll(as=>as.map(a=>({text:(a.innerText||'').trim(),href:a.href})).filter(x=>x.text||x.href));
console.log(JSON.stringify({url:page.url(),title:await page.title(),text:(await page.locator('body').innerText()).slice(0,5000),links},null,2)); await browser.close();
