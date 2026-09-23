// Convert ALL-ARTICLES-CW-MIGRATION-GROUP.md to a Word document
import fs from 'fs';
import {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  ExternalHyperlink, BorderStyle
} from 'docx';

const md = fs.readFileSync('cw-migration-group-articles/ALL-ARTICLES-CW-MIGRATION-GROUP.md', 'utf8');
const lines = md.split('\n');

const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;

function runsFromText(text, base = {}) {
  // handle **bold** segments and links
  const runs = [];
  // split by links first
  let lastIndex = 0;
  const parts = [];
  let m;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text)) !== null) {
    if (m.index > lastIndex) parts.push({ text: text.slice(lastIndex, m.index) });
    parts.push({ link: m[1], url: m[2] });
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) parts.push({ text: text.slice(lastIndex) });

  for (const part of parts) {
    if (part.link) {
      runs.push(new ExternalHyperlink({
        children: [new TextRun({ text: part.link, style: 'Hyperlink' })],
        link: part.url,
      }));
    } else {
      // bold segments
      const boldRe = /\*\*(.+?)\*\*/g;
      let li = 0, b;
      while ((b = boldRe.exec(part.text)) !== null) {
        if (b.index > li) runs.push(new TextRun({ text: part.text.slice(li, b.index), ...base }));
        runs.push(new TextRun({ text: b[1], bold: true, ...base }));
        li = b.index + b[0].length;
      }
      if (li < part.text.length) runs.push(new TextRun({ text: part.text.slice(li), ...base }));
    }
  }
  return runs.length ? runs : [new TextRun({ text: '', ...base })];
}

const children = [];

// Title page
children.push(new Paragraph({ spacing: { before: 2400 } }));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({ text: 'Commonwealth Migration Group', bold: true, size: 56 })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 300 },
  children: [new TextRun({ text: 'Guest Post Article Collection', size: 40 })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 200 },
  children: [new TextRun({ text: '74 unique articles — one per page topic of cwmigrationgroup.com', size: 24, italics: true })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 200 },
  children: [new TextRun({ text: 'Each article contains a backlink to its corresponding website page', size: 22, color: '555555' })],
}));
children.push(new Paragraph({
  children: [new TextRun({ text: '', pageBreakBefore: true })],
}));

let inTable = false;
for (const raw of lines) {
  const line = raw.trimEnd();
  if (line === '') { inTable = false; continue; }

  // Article separator
  if (line === '---') {
    children.push(new Paragraph({
      spacing: { before: 300, after: 300 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '999999' } },
      children: [new TextRun({ text: '' })],
    }));
    continue;
  }

  // Headings
  if (line.startsWith('### ')) {
    children.push(new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 200, after: 120 },
      children: runsFromText(line.slice(4), { size: 30, bold: true }),
    }));
    continue;
  }
  if (line.startsWith('## ')) {
    children.push(new Paragraph({
      heading: HeadingLevel.HEADING_1,
      pageBreakBefore: true,
      spacing: { after: 200 },
      children: runsFromText(line.slice(3), { size: 26, bold: true, color: '1F4E79' }),
    }));
    continue;
  }

  // Table rows
  if (line.startsWith('|')) {
    const cells = line.split('|').map(c => c.trim());
    if (cells[0] === '') cells.shift();
    if (cells.length && cells[cells.length - 1] === '') cells.pop();
    const isDivider = cells.every(c => /^:?-{2,}:?$/.test(c));
    if (isDivider) continue;
    children.push(new Paragraph({
      spacing: { after: 40 },
      indent: { left: 360 },
      children: cells.flatMap((c, i) => {
        const rs = runsFromText(c.replace(/\*\*/g, ''), { size: 20 });
        if (i < cells.length - 1) rs.push(new TextRun({ text: '   |   ', color: 'AAAAAA', size: 20 }));
        return rs;
      }),
    }));
    inTable = true;
    continue;
  }

  // List items
  const listMatch = line.match(/^(\s*)(\d+)\.\s+(.*)$/) || line.match(/^(\s*)-\s+(.*)$/);
  if (listMatch) {
    const isNumbered = /^\d+\./.test(line.trim());
    const content = isNumbered ? listMatch[3] : listMatch[2];
    children.push(new Paragraph({
      numbering: undefined,
      spacing: { after: 80 },
      indent: { left: 720, hanging: 360 },
      children: [new TextRun({ text: (isNumbered ? `${listMatch[2]}. ` : '• '), bold: true, size: 22 }), ...runsFromText(content, { size: 22 })],
    }));
    continue;
  }

  // Normal paragraph
  children.push(new Paragraph({
    spacing: { after: 160, line: 300 },
    children: runsFromText(line, { size: 22 }),
  }));
}

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: 'Calibri', size: 22 } },
    },
  },
  sections: [{ properties: {}, children }],
});

const buffer = await Packer.toBuffer(doc);
fs.writeFileSync('CW-Migration-Group-74-Guest-Post-Articles.docx', buffer);
console.log('Written: CW-Migration-Group-74-Guest-Post-Articles.docx', (buffer.length / 1024).toFixed(0) + ' KB');
