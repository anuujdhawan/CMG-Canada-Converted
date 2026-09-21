import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require('playwright-core');
const {FileBlob,SpreadsheetFile}=require('@oai/artifact-tool');
const path='outputs/2026-09-20-directory-prospects/commonwealth-migration-free-directory-prospects.xlsx';
const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(path));
const sh=wb.worksheets.getItem('Directory Prospects');
const urls=sh.getRange('C5:C54').values.flat();
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const page=await browser.newPage({userAgent:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/140 Safari/537.36'});
const results=[];
for (let i=0;i<urls.length;i++) {
  const url=urls[i];
  if(!url){results.push(['','No URL']); continue;}
  const started=Date.now(); let status=''; let finalUrl=''; let title=''; let text=''; let forms=0;
  try {
    const resp=await page.goto(url,{waitUntil:'domcontentloaded',timeout:20000});
    await page.waitForTimeout(500);
    finalUrl=page.url(); title=await page.title(); text=(await page.locator('body').innerText().catch(()=>'' )).slice(0,4000); forms=await page.locator('form').count().catch(()=>0);
    const low=(title+' '+text).toLowerCase();
    if(resp && resp.status()>=400) status=`HTTP ${resp.status()}`;
    else if(/captcha|recaptcha|hcaptcha|verify you are human/.test(low)) status='CAPTCHA / human verification';
    else if(/sign in|log in|login|create an account|register/.test(low) && forms>0) status='Account or login flow detected';
    else if(/submit|add your business|claim your business|list your business|add listing|create profile/.test(low)) status='Listing/claim flow detected';
    else status='Page reachable; flow needs review';
  } catch(e){ status=`Playwright error: ${String(e.message).slice(0,180)}`; }
  results.push([new Date().toISOString(),status,finalUrl,title,forms,`${Date.now()-started} ms`]);
  console.log(`${i+1}/${urls.length} ${status} ${url}`);
}
await browser.close();
sh.getRange('N4:S4').values=[['Playwright checked at','Playwright result','Final URL','Page title','Forms found','Duration']];
sh.getRange('N5:S54').values=results;
sh.getRange('N4:S4').format={fill:'#17365D',font:{bold:true,color:'#FFFFFF'},wrapText:true,verticalAlignment:'center',rowHeight:32};
sh.getRange('N5:S54').format={font:{size:9,color:'#222222'},wrapText:true,verticalAlignment:'top',rowHeight:44};
sh.getRange('N:N').format.columnWidth=22; sh.getRange('O:O').format.columnWidth=30; sh.getRange('P:P').format.columnWidth=38; sh.getRange('Q:Q').format.columnWidth=38; sh.getRange('R:R').format.columnWidth=10; sh.getRange('S:S').format.columnWidth=14;
const out=await SpreadsheetFile.exportXlsx(wb); await out.save(path);
const err=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:100},summary:'final formula error scan'}); console.log(err.ndjson);
console.log('saved',path);
