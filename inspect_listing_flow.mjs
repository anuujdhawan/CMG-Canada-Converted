import {createRequire} from 'node:module'; const {chromium}=createRequire(import.meta.url)('playwright-core');
const b=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'}); const p=await b.newPage();
await p.goto('https://phreemarketplace.com/classifieds?post=true',{waitUntil:'domcontentloaded',timeout:20000});
console.log('URL',p.url(),'TITLE',await p.title()); console.log((await p.locator('body').innerText()).slice(0,6000));
console.log('LINKS',await p.locator('a').evaluateAll(as=>as.map(a=>({text:(a.innerText||'').trim(),href:a.href})).filter(x=>/post|add|create|list|sign|register/i.test(x.text+' '+x.href)).slice(0,40)));
console.log('FORMS',await p.locator('form').count()); await b.close();
