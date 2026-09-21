import {FileBlob,SpreadsheetFile} from '@oai/artifact-tool';
const path='outputs/2026-09-20-directory-prospects/commonwealth-migration-free-directory-prospects.xlsx';
const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(path));
const sh=wb.worksheets.getItem('Directory Prospects');
for (let r=5;r<=73;r++) {
  const status=sh.getRange(`K${r}`).values[0][0] ?? '';
  const note=sh.getRange(`O${r}`).values[0][0] ?? '';
  if (status !== 'Submitted') {
    sh.getRange(`P${r}`).values=[['']];
    if (note && !String(note).toLowerCase().includes('not backlink proof')) {
      sh.getRange(`O${r}`).values=[[`${note} Inspection/route URL only; not backlink proof.`]];
    }
  }
}
const out=await SpreadsheetFile.exportXlsx(wb); await out.save(path); console.log('normalized');
