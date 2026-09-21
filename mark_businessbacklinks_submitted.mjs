import {FileBlob,SpreadsheetFile} from '@oai/artifact-tool';
const path='outputs/2026-09-20-directory-prospects/commonwealth-migration-free-directory-prospects.xlsx'; const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(path)); const sh=wb.worksheets.getItem('Directory Prospects');
sh.getRange('K33').values=[['Submitted']]; sh.getRange('O33').values=[['Submitted successfully; directory reports advert added and login available']]; sh.getRange('P33').values=[['https://www.businessbacklinks.co.uk/addbusiness/submit.php']];
const out=await SpreadsheetFile.exportXlsx(wb); await out.save(path); console.log('updated');
