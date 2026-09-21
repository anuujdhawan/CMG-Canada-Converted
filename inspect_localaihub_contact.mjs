import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const b=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const p=await b.newPage();
for (const u of ['https://localaihub.ca/contact?topic=missing-business&city=Brampton&province=ON','https://localaihub.ca/claim']) {
  try { await p.goto(u,{waitUntil:'domcontentloaded',timeout:25000}); await p.waitForTimeout(900); console.log('URL',p.url(),'TITLE',await p.title()); console.log('FIELDS',await p.locator('input,textarea,select,button').evaluateAll(es=>es.map(e=>({tag:e.tagName,type:e.type||'',name:e.name||'',id:e.id||'',text:(e.innerText||e.value||'').trim().slice(0,80)})).slice(0,100))); console.log('BODY',(await p.locator('body').innerText()).slice(0,2200)); } catch(e) { console.log('ERROR',u,e.message); }
}
await b.close();
