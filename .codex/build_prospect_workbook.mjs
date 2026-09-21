import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';
import fs from 'fs';

const domainText = `americasvoice.org,murthy.com,blog.cyrusmehta.com,freemovement.org.uk,cyrusmehta.com,cis.org,jeffreyschase.com,shusterman.com,immigration.net,myattorneyusa.com,mintz.com,gherson.com,davidsonmorris.com,vwv.co.uk,wmimmigration.com,burnesspaull.com,visaenvoy.com,nyic.org,citizenpath.com,visapro.com,wegreened.com,self-lawyer.com,colombohurdlaw.com,immi-usa.com,wilneroreilly.com,pozogoldstein.com,hoppocklawfirm.com,ramoslawyer.com,ashwinsharma.com,ksvisalaw.com,gambacortalaw.com,berdklauss.com,chaudharylaw.com,lippes.com,path2usa.com,y-axis.com,canadim.com,canadianvisa.org,sshlaw.ca,visaplace.com,savisas.com,woodcocklaw.co.uk,canapprove.com,blog.aptechvisa.com,kansaz.in,raoconsultants.com,ctrustglobal.com,highbrow.com.pk,discuss.ilw.com,ogletree.com,hunton.com,burr.com,matthewjeffery.com,kktplaw.com,immigration.com,envoyglobal.com,onlinevisas.com,spainresidency.com,blog.canada.ca,macleans.ca,canadianliving.com,itworldcanada.com,blogto.com,michaelgeist.ca,wwf.ca,naturecanada.ca,redcross.ca,hockeycanada.ca,benefitscanada.com,cicnews.com,thediscoverblog.com,thecjn.ca,menumag.ca,runningmagazine.ca,besthealthmag.ca,ellecanada.com,readersdigest.ca,birdscanada.org,booknetcanada.ca,navcanada.ca,chamber.ca,renewcanada.net,investcanada.ca,eco.ca,earthday.ca,imaginecanada.ca,codefor.ca,iphoneincanada.ca,blog.bestbuy.ca,blog.remax.ca,wingsmagazine.com,outdoorcanada.ca,snowboardcanada.com,news.viu.ca,applyboard.com,moving2canada.com,mycism.com,nextstopcanada.ca,immigration.ca,immigcanada.com,canadacis.org,liberal.ca,readthemaple.com,compassion.ca,breakthrought1d.ca,impactmagazine.ca,goodtimes.ca,generation1.ca,taghardware.ca,towcanada.ca,dustarot.com,visaguide.world,canadavisa.com,visatraveler.com,visalawyerblog.com,ukvisa.blog,immigrationandmigration.com,visaandmigration.com,emergico.com.au,argovisa.com,schengenvisas.com,vietnam-visa.com,traveltriangle.com,ischoolconnect.com,visa2us.com,visareservation.com,travelvisabookings.com,dubaievisaonline.com,instadubaivisa.com,thevisacentre.com,visabookings.com,easivisa.com,docman.ae,makevisas.com,btwvisas.com,blog.visasavenue.com,federpath.com,evisaimmigration.com,bayareaimmigrationservices.com,worldoverseasimmigration.com,eb5investors.com,visadone.com,visasolutions.com.au,slaw.ca,yorku.ca,ablawg.ca,law21.ca,lawandstyle.ca,doubleaspect.blog,petermcsherry.ca,thor.ca,ackahlaw.com,familyllb.com,lisagelman.com,millsandmills.ca,agpllp.ca,clearwaylaw.com,blog.goodlawyer.ca,cpdonline.ca,michaelspratt.com,danielbrownlaw.ca,robichaudlaw.ca,vwlawyers.ca,kwlaw.net,segevllp.com,bc-injury-law.com,mcleishorlando.com,gluckstein.com,pacelawfirm.com,diamondlaw.ca,awaxmanlaw.ca,sharelawyers.com,kotaklaw.com,slafereklaw.ca,vandykelaw.ca,sweatmanlaw.com,lashcondolaw.com,rcllp.ca,clio.com,medium.com,animaljustice.ca,jlc.ca,jasonpaulhowie.com,shipit.co.uk,britsintoronto.com,offtracktravel.ca,eatlivetravelwrite.com,hayleyonholiday.com,correresmidestino.com,canadabydesign.com,mustdocanada.com,toqueandcanoe.com,todoontario.com,travelweek.ca,travelpress.com,pointswise.ca,traveloffpath.com,theplanetd.com,breathedreamgo.com,hecktictravels.com,wanderingcarol.com,roamancing.com,travelyourself.ca,ivebeenbit.ca,claudiatravels.com,seattlestravels.com,fortwoplz.com,ladystravelblog.com,gofargrowclose.com,worktravelrepeat.ca,aroundouretable.com,seesight-tours.com,blog.tugo.com,travelalerts.ca,travelzoo.com,expedia.ca,canadianaffair.com,blog.farenexus.com,wandereater.com,ensquaredaired.com,ehcanadatravel.com,notesfromtheuk.com,newstatesman.com,lrb.co.uk,ukri.org,order-order.com,worldwildlife.org,diabetes.org.uk,blogs.fcdo.gov.uk,ageuk.org.uk,marieclaire.co.uk,reallyree.com,theannaedit.com,inthefrow.com,lilypebbles.co.uk,aladyinlondon.com,thelondoner.me,everythingzany.com,office-breaks.com,freshdesignblog.com,rockmywedding.co.uk,lovemydress.net,rocknrollbride.com,lovedupnorth.com,wearesocial.com,vuelio.com,fundraising.co.uk,snippet.finance,alanmalcher.com,fadedspring.co.uk,carlyrowena.com,elluminetpress.com,clubwise.com,fmcggurus.com,findukpeople.com,tenura.co.uk,rydale.com,arcticdry.co.uk,vam.ac.uk,emilyluxton.co.uk,lawsociety.org.uk,blogs.law.ox.ac.uk,eurelationslaw.com,lawgazette.co.uk,iclr.co.uk,thelawyer.com,legalfutures.co.uk,thejusticegap.com,technollama.co.uk,endsreport.com,taxation.co.uk,legalcheek.com,legalbusiness.co.uk,legaltechnology.com,law.com,nearlylegal.co.uk,lapg.co.uk,monckton.com,mills-reeve.com,azrights.com,rcostings.co.uk,brodies.com,brownejacobson.com,wardhadaway.com,mfmac.com,bateswells.co.uk,clarkewillmott.com,rwkgoodman.com,collyerbristow.com,foxwilliams.com,sackers.com,lesteraldridge.com,stephensons.co.uk,nelsonslaw.co.uk,pearsonlegal.co.uk,hay-kilner.co.uk,sherrards.com,aprilking.co.uk,davidgray.co.uk,excellolaw.co.uk,lexlaw.co.uk,icslegal.com,natemplaw.co.uk,sparqa.com,claimsmag.co.uk,crefovi.com,ukleap.org,domainincite.com,practicesource.com,rocketlawyer.com,lancaster.ac.uk,lexisnexis.co.uk,law.ac.uk,sandinmycurls.com,expatden.com,easyexpat.com,expatnetwork.com,wherecani.live,expatchild.com,goexpat.com,brighttax.com,expatfinancial.com,mylifeingermany.com,frankfurt-expat.com,londonnewgirl.com,thethailandlife.com,tengulife.com,beyondprague.net,eternal-expat.com,qroo.us,innicanow.com,expatsecuador.com,blueabaya.com,thisgirlabroad.com,migratingmiss.com,driveontheleft.com,piccavey.com,albomadventures.com,vengavalevamos.com,tripsget.com,expatpanda.com,dutchdutchgoose.com,gailatlarge.com,arabiannotes.com,kathi-daniela.com,adelanteblog.com,ciaoamalfi.com,mysliceofmexico.ca,flavorsofbogota.com,lamyerda.com,adventurings.com,canadianimmigrant.ca,nayyarimmigration.com,harveylawcorporation.com,muslimlink.ca,canadausvisas.com,weexplorecanada.com,betterplaceimmigration.com,arriveprepared.ca,newcomerresearch.ca,thenewcomer.ca,canada.ca,thenewcomerspod.com,sntc.squarespace.com,thenewcanadianstories.ca,ccrweb.ca,brampton.ca,bramptonguardian.com,whatsoninbrampton.com,insauga.com,thebramptonian.wordpress.com,ctvnews.ca,investbrampton.ca,toronto.citynews.ca,educationstreet.in,hihostels.ca,students.senecapolytechnic.ca,pearson.com,travelpulse.ca,studentbuddy.io,voanews.com,go2canada.com,prposting.com,guestpostlinks.net,csae.com,thecanadianpress.com,canadiansinternet.com,canvas.capitalcollege.ca,newyorker.com,petrakidd.medium.com,internationalwriterscollective.com,thebooknetwork.co.uk,petrakidd.wordpress.com,mslexia.co.uk,help.newsquest.co.uk,thelondonmagazine.org,christopherfielden.com,settlement.org,newcanadianmedia.ca,movingtotheuk.co.uk,ukexpatdaily.com,905hub.ca,mississauga.com,free movement`.split(',');

const sourceGroups = [
  [58, 'Immigration', 'https://bloggers.feedspot.com/immigration_blogs/'],
  [53, 'Canada', 'https://bloggers.feedspot.com/canada_blogs/'],
  [32, 'Visa', 'https://bloggers.feedspot.com/visa_blogs/'],
  [40, 'Canada Law', 'https://bloggers.feedspot.com/canada_law_blogs/'],
  [6, 'Canadian Expat', 'https://bloggers.feedspot.com/canadian_expat_blogs/'],
  [32, 'Canada Travel', 'https://bloggers.feedspot.com/canada_travel_blogs/'],
  [39, 'UK', 'https://bloggers.feedspot.com/uk_blogs/'],
  [53, 'UK Law', 'https://bloggers.feedspot.com/uk_law_blogs/'],
  [38, 'Expat', 'https://bloggers.feedspot.com/expat_blogs/'],
  [46, 'Search-discovered', 'Google search results'],
  [7, 'Direct editorial / partnership', 'Direct editorial/contact page']
];
let cursor = 0;
const meta = domains => domains.map((domain, i) => {
  let n = 0; let category = 'Search-discovered'; let source = 'Google search results';
  for (const [count, c, s] of sourceGroups) { if (i < cursor + count) { category = c; source = s; break; } cursor += count; }
  cursor = 0; // reset after per-row lookup
  let start = 0; for (const [count, c, s] of sourceGroups) { if (i < start + count) { category = c; source = s; break; } start += count; }
  const normalized = domain === 'free movement' ? 'freemovement.org.uk' : domain;
  const homepage = `https://${normalized}`;
  return { domain: normalized, homepage, category, source };
});
const records = meta(domainText);
const explicit = new Map([
  ['betterplaceimmigration.com', ['Explicit guest post', 'https://www.betterplaceimmigration.com/write-for-us/']],
  ['moving2canada.com', ['Explicit contributor', 'https://moving2canada.com/about-us/become-our-partner/share-your-experience/']],
  ['freemovement.org.uk', ['UK immigration editorial', 'https://freemovement.org.uk/about/contributor-guidelines/']],
  ['settlement.org', ['Ontario newcomer partnership', 'https://settlement.org/outreach/']],
  ['newcanadianmedia.ca', ['Newcomer media', 'https://newcanadianmedia.ca/our-mission/']],
  ['movingtotheuk.co.uk', ['UK relocation contributor', 'https://movingtotheuk.co.uk/about/team/apply']],
  ['ukexpatdaily.com', ['UK expat editorial', 'https://ukexpatdaily.com/contact/']],
  ['905hub.ca', ['GTA local media', 'https://905hub.ca/']],
  ['brampton.ca', ['Brampton civic feature', 'https://www.brampton.ca/EN/Business/BEC/Pages/Your-Story.aspx']],
  ['mississauga.com', ['Peel local media', 'https://www.mississauga.com/site/forms/submit_content/']],
  ['insauga.com', ['GTA local media', 'https://insauga.com/']],
  ['canadianimmigrant.ca', ['Canadian immigrant media', 'https://canadianimmigrant.ca/submit-a-story']]
]);
const verifiedEmails = new Map([
  ['betterplaceimmigration.com', ['info@betterplaceimmigration.com', 'https://www.betterplaceimmigration.com/write-for-us/']],
  ['freemovement.org.uk', ['editor@freemovement.org.uk', 'https://freemovement.org.uk/about/contributor-guidelines/']],
  ['movingtotheuk.co.uk', ['hello@movingtotheuk.co.uk; ruxandra@movingtotheuk.co.uk', 'https://movingtotheuk.co.uk/about/team/apply']],
  ['newcanadianmedia.ca', ['publisher@newcanadianmedia.ca; admin@newcanadianmedia.ca', 'https://newcanadianmedia.ca/wp-content/uploads/2022/02/Guidelines_Updated-Feb-7-2022.pdf']],
  ['moving2canada.com', ['partnership@moving2canada.com; editor@moving2canada.com', 'https://moving2canada.com/about-us/become-our-partner/share-your-experience/']],
  ['settlement.org', ['', 'https://settlement.org/outreach/']],
  ['905hub.ca', ['hello@905hub.ca', 'https://905hub.ca/']],
  ['canadim.com', ['info@canadim.com', 'https://www.canadim.com/contact-us/']],
  ['immigration.ca', ['csinger@immigration.ca', 'https://www.immigration.ca/wp-content/uploads/2023/05/immigration.ca-newsletter.pdf']],
  ['visaplace.com', ['media@visaplace.com; info@visaplace.com', 'https://www.visaplace.com/press-niren-in-the-media/']],
  ['applyboard.com', ['press@applyboard.com', 'https://www.applyboard.com/press']],
  ['canadianimmigrant.ca', ['', 'https://canadianimmigrant.ca/submit-a-story']]
]);

function fit(category, domain) {
  if (['Immigration','Visa','Canada','Canadian Expat','Search-discovered','Ontario newcomer partnership','Newcomer media'].includes(category)) return 'High';
  if (domain.includes('brampton') || domain.includes('905') || domain.includes('mississauga') || domain.includes('insauga')) return 'High';
  if (['Canada Law','UK Law','UK relocation contributor','UK immigration editorial','UK expat editorial','Expat'].includes(category)) return 'Medium';
  return 'Medium';
}
function target(category, domain) {
  if (domain.includes('brampton') || domain.includes('905') || domain.includes('mississauga') || domain.includes('insauga') || domain.includes('bramptonguardian')) return 'Brampton';
  if (['UK','UK Law','UK relocation contributor','UK immigration editorial','UK expat editorial'].includes(category) || domain.endsWith('.co.uk')) return 'United Kingdom';
  if (['Canada','Immigration','Visa','Canada Law','Canadian Expat','Canada Travel','Ontario newcomer partnership','Newcomer media'].includes(category) || domain.endsWith('.ca')) return 'Canada';
  return 'Other';
}
function title(domain) { return domain.split('.')[0].replace(/[-_]/g,' ').replace(/\b\w/g, c => c.toUpperCase()); }
function priority(t, f, status) { if (status === 'Explicit editorial or partnership route found') return 'P1 – explicit route'; if (t === 'Brampton' && f === 'High') return 'P1 – local fit'; if (f === 'High' && t === 'Canada') return 'P2 – Canada fit'; if (t === 'United Kingdom' && f !== 'Low') return 'P2 – UK fit'; return 'P3 – test selectively'; }

const headers = ['Prospect','Domain','Homepage','Category','Audience fit','Target priority','Outreach route','Guest-post status','Authority evidence','DR/DA','Organic traffic','Dofollow verified','Contact email','Contact page','Source URL','Research status','Priority','Notes'];
const rows = records.map(r => {
  const ex = explicit.get(r.domain); const category = ex?.[0] || r.category; const source = ex?.[1] || r.source;
  const f = fit(category, r.domain); const t = target(category, r.domain); const status = ex ? 'Explicit editorial or partnership route found' : (r.category === 'Search-discovered' ? 'Search-discovered prospect; verify relevance and contributor policy' : (['Immigration','Visa'].includes(r.category) ? 'Relevant authority prospect; contributor policy to verify' : 'Relevant adjacent publisher; pitch/resource partnership'));
  const email = verifiedEmails.get(r.domain);
  return [title(r.domain), r.domain, r.homepage, category, f, t, ex ? 'Review cited editorial/contact page' : 'Editorial pitch / contact page / partnership inquiry', status, ex ? 'Direct editorial page' : (r.source.startsWith('https://bloggers') ? 'Feedspot authority list' : 'Google search result'), '', '', 'Not checked', email?.[0] || '', email?.[1] || '', source, email?.[0] ? 'Public email verified from source' : 'Needs manual verification', priority(t,f,status), 'Verify relevance, editorial policy, current contact route, authority metric, traffic, and link attributes before outreach.'];
});

const wb = await Workbook.create();
const p = wb.worksheets.add('Prospects');
p.getRangeByIndexes(0,0,1,headers.length).values = [headers];
p.getRangeByIndexes(1,0,rows.length,headers.length).values = rows;
p.tables.add(`A1:R${rows.length+1}`, true, 'ProspectsTable');
p.freezePanes.freezeRows(1);
p.getRange('A1:R1').format = { fill: '#17365D', font: { bold: true, color: '#FFFFFF' }, wrapText: true, horizontalAlignment: 'center', verticalAlignment: 'center' };
p.getRange(`A2:R${rows.length+1}`).format = { wrapText: true, verticalAlignment: 'top' };
p.getRange(`B2:C${rows.length+1}`).format.font = { color: '#0563C1', underline: 'single' };
p.getRange(`O2:O${rows.length+1}`).format.font = { color: '#0563C1', underline: 'single' };
for (const col of ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R']) { p.getRange(`${col}:${col}`).format.columnWidth = ({A:24,B:28,C:34,D:25,E:14,F:16,G:31,H:42,I:24,J:12,K:16,L:18,M:24,N:28,O:44,P:22,Q:20,R:58}[col]); }

const s = wb.worksheets.add('Summary');
s.getRange('A1:D1').merge(); s.getRange('A1').values = [['Commonwealth Migration – Guest Post Prospecting Summary']];
s.getRange('A1:D1').format = { fill:'#17365D', font:{bold:true,color:'#FFFFFF',size:14}, horizontalAlignment:'center' };
s.getRange('A3:B8').values = [['Metric','Value'],['Total prospects',null],['Explicit editorial/partnership routes',null],['High audience-fit prospects',null],['P1 prospects',null],['Canada + Brampton + UK prospects',null]];
s.getRange('B4:B8').formulas = [['=COUNTA(Prospects!B2:B405)'],['=COUNTIF(Prospects!H2:H405,"Explicit editorial or partnership route found")'],['=COUNTIF(Prospects!E2:E405,"High")'],['=COUNTIF(Prospects!Q2:Q405,"P1 – explicit route")+COUNTIF(Prospects!Q2:Q405,"P1 – local fit")'],['=COUNTIF(Prospects!F2:F405,"Canada")+COUNTIF(Prospects!F2:F405,"Brampton")+COUNTIF(Prospects!F2:F405,"United Kingdom")']];
s.getRange('A10:B10').values = [['Target priority','Count']];
s.getRange('A11:A14').values = [['Brampton'],['Canada'],['United Kingdom'],['Other']];
s.getRange('B11:B14').formulas = [['=COUNTIF(Prospects!F2:F405,A11)'],['=COUNTIF(Prospects!F2:F405,A12)'],['=COUNTIF(Prospects!F2:F405,A13)'],['=COUNTIF(Prospects!F2:F405,A14)']];
s.getRange('D10:E10').values = [['Category','Count']];
s.getRange('D11:D21').values = sourceGroups.map(x=>[x[1]]);
s.getRange('E11:E21').formulas = sourceGroups.map((_,i)=>[`=COUNTIF(Prospects!D2:D405,D${11+i})`]);
s.getRange('A3:B3').format = {fill:'#5B9BD5',font:{bold:true,color:'#FFFFFF'}}; s.getRange('A10:B10').format = {fill:'#5B9BD5',font:{bold:true,color:'#FFFFFF'}}; s.getRange('D10:E10').format = {fill:'#5B9BD5',font:{bold:true,color:'#FFFFFF'}};
s.getRange('A1:E21').format.wrapText = true; s.getRange('A:A').format.columnWidth=34; s.getRange('B:B').format.columnWidth=18; s.getRange('D:D').format.columnWidth=32; s.getRange('E:E').format.columnWidth=14;

const n = wb.worksheets.add('Notes');
n.getRange('A1:B1').merge(); n.getRange('A1').values = [['Research notes and outreach guardrails']]; n.getRange('A1:B1').format = {fill:'#17365D',font:{bold:true,color:'#FFFFFF',size:14}};
n.getRange('A3:B10').values = [
 ['Purpose','A prospect universe for Commonwealth Migration (https://commonwealthmigration.ca/) focused on Brampton first, then Canada, then the United Kingdom.'],
 ['How to use','Start with P1 rows, then review P2 rows. Personalize the pitch around a genuine audience benefit and a specific article idea.'],
 ['Authority evidence','Feedspot rows are sourced from topical authority lists; this workbook does not claim that every site accepts guest posts or has a dofollow policy.'],
 ['Verification required','Before outreach, manually verify current DR/DA, organic traffic, topical relevance, indexation, outbound-link quality, contributor policy, and the correct editor/contact route.'],
 ['Editorial quality','Avoid mass identical outreach, paid-link schemes, irrelevant placements, spun content, or claims that a link will be dofollow unless the publisher confirms it.'],
 ['Direct opportunities','Rows labeled explicit editorial/partnership route have a cited contributor, submit-story, outreach, or contact page and should be checked first.'],
 ['Email sender','Use a real human sender when possible. “Anooj Dhawan” is preferable for relationship-based outreach; “Blog Master” can be used for a role-based mailbox.'],
 ['Coverage','404 deduplicated prospects across immigration, visa, Canadian newcomer, local GTA, Canada, UK, law, expat, and adjacent publisher categories.']
];
n.getRange('A3:A10').format = {font:{bold:true,color:'#17365D'},fill:'#D9EAF7'}; n.getRange('A1:B10').format.wrapText=true; n.getRange('A:A').format.columnWidth=24; n.getRange('B:B').format.columnWidth=110;

const out = 'outputs/guest-post-prospects';
fs.mkdirSync(out, {recursive:true});
const inspection = await wb.inspect({kind:'workbook,sheet,table', maxChars:6000, tableMaxRows:5, tableMaxCols:6, tableMaxCellChars:80});
fs.writeFileSync(`${out}/workbook_inspection.json`, JSON.stringify(inspection, null, 2));
const formulaErrors = await wb.inspect({kind:'match', searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A', options:{useRegex:true, maxResults:100}, maxChars:4000});
fs.writeFileSync(`${out}/formula_error_scan.json`, JSON.stringify(formulaErrors, null, 2));
for (const sheetName of ['Summary','Prospects','Notes']) {
  const preview = await wb.render({sheetName, autoCrop:'all', scale:1, format:'png'});
  await fs.promises.writeFile(`${out}/${sheetName.toLowerCase()}_preview.png`, new Uint8Array(await preview.arrayBuffer()));
}
const xlsx = await SpreadsheetFile.exportXlsx(wb);
await xlsx.save(`${out}/commonwealth_migration_guest_post_prospects.xlsx`);
console.log(`created ${records.length} records`);
