import {FileBlob,SpreadsheetFile} from '@oai/artifact-tool';
const path='outputs/2026-09-20-directory-prospects/commonwealth-migration-free-directory-prospects.xlsx';
const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(path));
const sh=wb.worksheets.getItem('Directory Prospects');
sh.getRange('K47').values=[['Submitted for editorial review']];
sh.getRange('O47').values=[['Playwright submitted the official free missing-business proposal; the site confirmed it was durably recorded for review. This is not a published listing and no backlink or response time is promised.']];
sh.getRange('P47').values=[['https://localaihub.ca/contact?topic=missing-business&city=Brampton&province=ON']];
const out=await SpreadsheetFile.exportXlsx(wb); await out.save(path); console.log('updated');
