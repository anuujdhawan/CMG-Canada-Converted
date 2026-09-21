import {createRequire} from 'node:module'; const {chromium}=createRequire(import.meta.url)('playwright-core');
const urls=['https://www.bingplaces.com/','https://businessconnect.apple.com/','https://canadabusinessowners.ca/','https://getlisted.business/','https://www.zipleaf.ca/Add-Your-Business','https://plist.ca/','https://phreemarketplace.com/classifieds/category/services','https://migrationalliance.com.au/find/rma/','https://findmigrationagents.com/','https://www.bramptonbot.com/'];
const b=await chromium.launchPersistentContext('/private/tmp/commonwealth-playwright-profile',{headless:false,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--new-window']});
for(const u of urls){const p=await b.newPage(); await p.goto(u,{waitUntil:'domcontentloaded',timeout:20000}).catch(()=>{});}
console.log('Opened 10 Playwright tabs. Keep this process running while you review the pages.');
await new Promise(()=>{});
