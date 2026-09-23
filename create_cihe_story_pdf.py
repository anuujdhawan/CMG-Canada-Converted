from pathlib import Path

from docx import Document
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


root = Path(__file__).parent
source = root / "outputs" / "cihe-mary-ann-shadd-cary-story.docx"
target = root / "outputs" / "cihe-mary-ann-shadd-cary-story.pdf"

docx = Document(source)
styles = getSampleStyleSheet()
title = ParagraphStyle(
    "StoryTitle", parent=styles["Title"], alignment=TA_CENTER,
    fontName="Helvetica-Bold", fontSize=18, leading=22, spaceAfter=14,
)
heading = ParagraphStyle(
    "StoryHeading", parent=styles["Heading2"], fontName="Helvetica-Bold",
    fontSize=12, leading=15, spaceBefore=8, spaceAfter=6,
)
body = ParagraphStyle(
    "StoryBody", parent=styles["BodyText"], fontName="Helvetica",
    fontSize=10.5, leading=15, spaceAfter=9,
)
small = ParagraphStyle(
    "StorySmall", parent=body, fontSize=8.5, leading=11,
)

story = []
for p in docx.paragraphs:
    text = p.text.strip()
    if not text:
        continue
    safe = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    if p.style.name.startswith("Title"):
        story.append(Paragraph(safe, title))
    elif p.style.name.startswith("Heading"):
        story.append(Paragraph(safe, heading))
    elif p.style.name in {"List Bullet", "List Number"}:
        story.append(Paragraph("• " + safe, body))
    else:
        story.append(Paragraph(safe, small if "Source" in p.style.name else body))

pdf = SimpleDocTemplate(
    str(target), pagesize=LETTER, rightMargin=0.8 * inch,
    leftMargin=0.8 * inch, topMargin=0.7 * inch, bottomMargin=0.7 * inch,
    title="Mary Ann Shadd Cary: A Life of Courage and Civic Leadership",
)
pdf.build(story)
print(target)
