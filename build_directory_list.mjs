import fs from 'node:fs/promises';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

const outDir = 'outputs/2026-09-20-directory-prospects';
await fs.mkdir('node_modules', {recursive:true});
try { await fs.symlink('/Users/themacintosh/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules', 'node_modules', 'dir'); } catch {}

const rows = [
['Priority','Google Business Profile','https://business.google.com/ca/business-profile/','https://business.google.com/','Canada / local','Free','Create or claim a verified profile; service-area businesses may qualify','High-authority entity/citation profile; website field available','Google states Business Profile is free.','https://business.google.com/in/business-profile/','Not started'],
['Priority','Bing Places for Business','https://www.bingplaces.com/','https://www.bingplaces.com/','Canada / local','Free','Microsoft account and business verification','Local search profile; add website and service areas','Free listing platform; verify current onboarding flow.','https://www.bingplaces.com/','Not started'],
['Priority','Apple Business Connect','https://businessconnect.apple.com/','https://businessconnect.apple.com/','Canada / local','Free','Apple ID and business verification','Apple Maps place card; website and contact details','Free business place-card management; verify eligibility.','https://businessconnect.apple.com/','Not started'],
['Priority','Yelp Canada','https://biz.yelp.ca/','https://biz.yelp.ca/','Canada / local','Free claim','Claim an existing business page or add a new business','Reputation/citation profile; website field may be available','Free business account/claim; paid ads are optional.','https://biz.yelp.ca/','Not started'],
['Priority','YellowPages Canada','https://www.yellowpages.ca/en/business/','https://www.yellowpages.ca/','Canada / local','Free basic listing','Business details and verification; paid upgrades may be offered','Established Canadian directory/citation; confirm website field','Free listing language should be confirmed during signup; avoid paid upsells unless wanted.','https://www.yellowpages.ca/','Not started'],
['Priority','CanadaBusinessOwners.ca','https://canadabusinessowners.ca/','https://canadabusinessowners.ca/','Canada','Free','Genuine Canadian business; email verification/review','Public business profile with website and bilingual profile option','Site states registration and ongoing free listing cost nothing.','https://canadabusinessowners.ca/','Not started'],
['Priority','GetListed.business','https://getlisted.business/','https://getlisted.business/','Canada / USA','Free with same-domain email','Verify ownership using an email at commonwealthmigration.ca','Business profile and website link; same-domain email required for free plan','Site states free publication requires same-domain email.','https://getlisted.business/','Not started'],
['Priority','ZipLeaf Canada','https://www.zipleaf.ca/Add-Your-Business','https://www.zipleaf.ca/','Canada','Free','Real business; review before publication','Business profile with service areas, photos and website','Site describes free listings and profile management.','https://www.zipleaf.ca/Add-Your-Business','Not started'],
['Priority','Canada Business Directory','https://canadabusinessdirectory.net/submit-listing/','https://canadabusinessdirectory.net/','Canada','Free for 180 days','Complete listing and category selection; approval may apply','Directory profile with website/social fields','Submission page states free listing for 6 months.','https://canadabusinessdirectory.net/submit-listing/','Not started'],
['Priority','PList.ca','https://plist.ca/','https://plist.ca/','Canada / professional services','Free profile','Create a professional profile and select relevant services','Professional profile page; suitable for immigration/legal services','Site states professionals can create a free profile.','https://plist.ca/','Not started'],
['Priority','MarketLister.ca','https://www.marketlister.ca/public/get-your-free-business-page-canada','https://www.marketlister.ca/','Canada / local','Free','Business details and approval/creation flow','Public business page with website link','Site states creating and managing a business page is free.','https://www.marketlister.ca/public/get-your-free-business-page-canada','Not started'],
['Priority','ImmigrateAlberta','https://immigratealberta.ca/','https://immigratealberta.ca/','Alberta immigration','Free / verification','Must be a verified RCIC practicing in Alberta; claim or correct firm listing','Highly relevant niche trust/citation opportunity if the firm qualifies','Directory says consultants are manually checked against CICC public registry and offers list/correct firm path.','https://immigratealberta.ca/','Not started'],
['Priority','RCIC.link','https://rcic.link/','https://rcic.link/','Canada immigration','Free claim','Must appear in CICC public register; claim and complete profile','Highly relevant niche entity profile; listing is based on CICC data','Site states appearing and claiming a listing is free.','https://rcic.link/','Not started'],
['Priority','TrustImmi','https://trustimmi.ca/','https://trustimmi.ca/','Canada immigration','Free / verify','Must be licensed/eligible; verify profile data and contact directory','Highly relevant immigration professional profile','Site says profiles are sourced from CICC data and service is free to search; confirm claim process.','https://trustimmi.ca/','Not started'],
['Secondary','Hotfrog Canada','https://www.hotfrog.ca/','https://www.hotfrog.ca/','Canada / local','Free basic listing','Business registration and verification; optional paid visibility may appear','General business citation with website field','Free basic listing availability should be checked at submission.','https://www.hotfrog.ca/','Not started'],
['Secondary','Cylex Canada','https://www.cylex-canada.ca/','https://www.cylex-canada.ca/','Canada / local','Free listing','Business details and email verification','General directory profile; website field commonly available','Free listing flow should be confirmed before publishing.','https://www.cylex-canada.ca/','Not started'],
['Secondary','n49 Canada','https://www.n49.com/','https://www.n49.com/','Canada / local','Free listing','Account and business details; approval may apply','Canadian local business citation/review profile','Confirm current free-plan terms and website-link treatment.','https://www.n49.com/','Not started'],
['Secondary','Phree Marketplace','https://phreemarketplace.com/classifieds/category/services','https://phreemarketplace.com/','Canada / services','Free listing','Account; service location and description','Service listing with website/contact opportunity; listings renew after 30 days','Site states service listings are 100% free and renew free.','https://phreemarketplace.com/classifieds/category/services','Not started'],
['Secondary','CanadaOne Business Directory','https://www.canadaone.com/','https://www.canadaone.com/','Canada / small business','Free profile opportunity','Business details and account; confirm current directory entry path','Canadian small-business publication/directory citation','Known Canadian business resource; verify active free directory submission path.','https://www.canadaone.com/','Not started'],
['Secondary','The Generall Store','https://thegenerall.store/list-your-shop/','https://thegenerall.store/','Canada / local','Free','Business and community listing information','Community directory profile; useful for local entity discovery if region is covered','Public posts describe free business listings; confirm coverage and website field.','https://thegenerall.store/list-your-shop/','Not started'],
['Secondary','Made in Canada Eh','https://madeincanada-eh.ca/add-listing/listings/','https://madeincanada-eh.ca/','Canada','Free / fit required','Business should fit Canadian-made or Canadian-focused criteria','Niche Canadian business listing; use only if business positioning fits','Community directory; confirm acceptance criteria and link policy.','https://madeincanada-eh.ca/add-listing/listings/','Not started'],
];

const wb = Workbook.create();
const main = wb.worksheets.add('Directory Prospects');
const notes = wb.worksheets.add('How to Use');
main.showGridLines = false; notes.showGridLines = false;
main.getRange('A1:K1').values = [['Free directory listing prospects for commonwealthmigration.ca','','','','','','','','','','']];
main.getRange('A2:K2').values = [['Research date: 2026-09-20. Prioritize relevance and legitimacy; do not submit duplicate, inaccurate, or keyword-stuffed profiles.','', '', '', '', '', '', '', '', '', '']];
main.getRange('A4:K4').values = [['Priority','Directory','Submission / claim URL','Directory homepage','Market / niche','Free access type','Eligibility / requirements','Expected SEO / trust value','Notes / caveats','Source URL','Status']];
main.getRange(`A5:K${rows.length+4}`).values = rows;
main.getRange('A1:K1').format = {font:{bold:true,size:16,color:'#17365D'},rowHeight:28};
main.getRange('A2:K2').format = {font:{italic:true,color:'#666666',size:10},wrapText:true,rowHeight:30};
main.getRange('A4:K4').format = {fill:'#17365D',font:{bold:true,color:'#FFFFFF'},wrapText:true,verticalAlignment:'center',rowHeight:32,borders:{preset:'outside',style:'thin',color:'#17365D'}};
main.getRange(`A5:K${rows.length+4}`).format = {font:{size:10,color:'#222222'},wrapText:true,verticalAlignment:'top'};
main.getRange(`A5:A${rows.length+4}`).format.font = {bold:true,color:'#1F4E78'};
main.getRange(`K5:K${rows.length+4}`).dataValidation = {rule:{type:'list',values:['Not started','In progress','Submitted','Live','Rejected','Not eligible','Skip']}};
main.getRange(`K5:K${rows.length+4}`).format = {fill:'#FFF2CC',font:{bold:true,color:'#7F6000'},horizontalAlignment:'center'};
main.getRange(`A4:K${rows.length+4}`).format.borders = {insideHorizontal:{style:'thin',color:'#E6E6E6'},bottom:{style:'thin',color:'#B7C9E2'}};
main.freezePanes.freezeRows(4);
const widths = {A:12,B:24,C:38,D:30,E:23,F:18,G:38,H:42,I:50,J:38,K:16};
for (const [col,w] of Object.entries(widths)) main.getRange(`${col}:${col}`).format.columnWidth = w;
main.getRange(`C5:D${rows.length+4}`).format.font = {color:'#0563C1',underline:'single',size:10};
main.getRange(`J5:J${rows.length+4}`).format.font = {color:'#0563C1',underline:'single',size:10};
main.getRange(`A5:K${rows.length+4}`).format.rowHeight = 72;

notes.getRange('A1:B1').values = [['How to use this workbook','']];
notes.getRange('A3:B8').values = [
 ['Step','Guidance'],
 ['1','Start with Priority rows. Open the Submission / claim URL, create or claim the profile, and use accurate NAP and service information.'],
 ['2','Use a business-domain email where a directory requires ownership proof. Do not use a personal email for regulated-professional verification.'],
 ['3','Record the outcome in Status. Add the live profile URL in a new column if you want a permanent tracking record.'],
 ['4','Keep name, address/service area, phone, hours, and website consistent across profiles. Avoid duplicate profiles and exact-match anchor-text overuse.'],
 ['5','A listing can help entity consistency, discovery, and referral traffic. It does not guarantee a dofollow backlink or ranking improvement.'],
 ['6','For immigration-related directories, only list the firm/consultant if the relevant Canadian licensing and directory eligibility requirements are met.'],
];
notes.getRange('A1:B1').format = {font:{bold:true,size:16,color:'#17365D'},rowHeight:28};
notes.getRange('A3:B3').format = {fill:'#17365D',font:{bold:true,color:'#FFFFFF'}};
notes.getRange('A4:B9').format = {wrapText:true,verticalAlignment:'top',font:{size:11,color:'#222222'},rowHeight:44};
notes.getRange('A:A').format.columnWidth = 10; notes.getRange('B:B').format.columnWidth = 110;

const output = await SpreadsheetFile.exportXlsx(wb);
await fs.mkdir(outDir,{recursive:true});
await output.save(`${outDir}/commonwealth-migration-free-directory-prospects.xlsx`);
const check = await wb.inspect({kind:'table',range:`Directory Prospects!A1:K12`,include:'values,formulas',tableMaxRows:12,tableMaxCols:11});
console.log(check.ndjson);
const errors = await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:100},summary:'final formula error scan'});
console.log(errors.ndjson);
const blob = await wb.render({sheetName:'Directory Prospects',range:'A1:K12',scale:1,format:'png'});
await fs.writeFile(`${outDir}/directory-prospects-preview.png`,new Uint8Array(await blob.arrayBuffer()));
console.log(`saved ${outDir}/commonwealth-migration-free-directory-prospects.xlsx`);
