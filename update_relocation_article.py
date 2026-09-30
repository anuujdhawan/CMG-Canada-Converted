from docx import Document
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Pt, RGBColor

SRC = '/Users/themacintosh/Downloads/relocation-ecosystem-information-infrastructure.docx'
OUT = '/Users/themacintosh/Downloads/relocation-ecosystem-information-infrastructure_UPDATED.docx'
REGISTER_URL = 'https://register.college-ic.ca/Public-Register-EN/Licensee/Profile.aspx?ID=14725'

doc = Document(SRC)

def add_hyperlink(paragraph, text, url):
    part = paragraph.part
    rid = part.relate_to(url, 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink', is_external=True)
    hyperlink = OxmlElement('w:hyperlink')
    hyperlink.set(qn('r:id'), rid)
    run = OxmlElement('w:r')
    rPr = OxmlElement('w:rPr')
    color = OxmlElement('w:color'); color.set(qn('w:val'), '1F5A7A'); rPr.append(color)
    underline = OxmlElement('w:u'); underline.set(qn('w:val'), 'single'); rPr.append(underline)
    run.append(rPr)
    t = OxmlElement('w:t'); t.text = text; run.append(t)
    hyperlink.append(run)
    paragraph._p.append(hyperlink)

def insert_after(paragraph, text='', bold=False, italic=False, size=None):
    new_p = OxmlElement('w:p')
    paragraph._p.addnext(new_p)
    p = paragraph._parent.add_paragraph()
    paragraph._p.addnext(p._p)
    if text:
        r = p.add_run(text); r.bold=bold; r.italic=italic
        if size: r.font.size=Pt(size)
    return p

# Add a clear expert-review line under the subtitle.
paras = doc.paragraphs
subtitle = next((p for p in paras if 'A practical coordination model' in p.text), None)
if subtitle:
    p = insert_after(subtitle)
    p.paragraph_format.space_after = Pt(8)
    r = p.add_run('Prepared by Anooj Dhawan | Professional review by Pankaj Khanna, Principal Immigration Consultant (RCIC R711256)')
    r.bold = True; r.font.size = Pt(10); r.font.color.rgb = RGBColor(70,70,70)

replacements = {
    'A Canadian immigration question goes to current IRCC instructions or an authorized representative engaged for Noor’s case.':
    'A Canadian immigration question goes to current IRCC instructions or to an authorized representative engaged for Noor’s case. In the Commonwealth Migration Canadian practice, Pankaj Khanna, Principal Immigration Consultant (RCIC R711256), is the licensed professional responsible for regulated immigration services and professional review.'
}
for p in doc.paragraphs:
    if p.text in replacements:
        p.text = replacements[p.text]

# Make the representative row identify the expert while preserving the fictional scenario.
for table in doc.tables:
    for row in table.rows:
        for cell in row.cells:
            if cell.text.strip() == 'Immigration professional':
                cell.paragraphs[0].text = 'Immigration professional (Pankaj Khanna, RCIC R711256)'

# Replace the contributor section with verifiable role and employment information.
for p in doc.paragraphs:
    if p.text.startswith('Contributor. Anooj Dhawan works in content and outreach'):
        p.text = ('Contributor. Anooj Dhawan works in content and outreach with Commonwealth Migration Group Inc. '
                  'and prepared this article in an editorial capacity. Professional review was provided by Pankaj Khanna, '
                  'Principal Immigration Consultant at Commonwealth Migration Group Inc. She is a Regulated Canadian '
                  'Immigration Consultant (RCIC), licence number R711256. Her CICC Public Register record is listed under '
                  'SIEC Canada Consultants and SPAZE Immigration Services Inc.: ')
        add_hyperlink(p, REGISTER_URL, REGISTER_URL)
        p.add_run('. Her signed employment offer identifies her as a full-time employee of Commonwealth Migration Group Inc. '
                  'in the role of Principal Immigration Consultant, effective 24 September 2026. This article provides '
                  'general education, not personalized immigration advice.')
        break

doc.save(OUT)
print(OUT)
