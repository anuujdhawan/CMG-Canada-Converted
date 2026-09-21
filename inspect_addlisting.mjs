import {createRequire} from 'node:module'; const {chromium}=createRequire(import.meta.url)('playwright-core');
const b=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'}); const p=await b.newPage();
await p.goto('https://addlisting.co.uk/',{waitUntil:'domcontentloaded',timeout:25000}); await p.waitForTimeout(2500);
console.log('URL',p.url(),'TITLE',await p.title()); console.log('BODY',(await p.locator('body').innerText()).slice(0,2500)); console.log('LINKS',await p.locator('a').evaluateAll(es=>es.map(e=>({text:(e.innerText||'').trim(),href:e.href})).filter(x=>x.text||x.href).slice(0,40))); await b.close();
