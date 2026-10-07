from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
    KeepTogether,
)


OUT = Path("output/pdf/CMG_Canada_September_2026_SEO_GEO_AEO_Completion_Report.pdf")
OUT.parent.mkdir(parents=True, exist_ok=True)

RED = colors.HexColor("#C8102E")
NAVY = colors.HexColor("#152238")
INK = colors.HexColor("#243247")
MUTED = colors.HexColor("#667085")
PALE = colors.HexColor("#F5F7FA")
PALE_RED = colors.HexColor("#FFF1F3")
GREEN = colors.HexColor("#147D64")
AMBER = colors.HexColor("#9A6700")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CoverKicker", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=RED, tracking=1.4, alignment=TA_CENTER, spaceAfter=10))
styles.add(ParagraphStyle(name="CoverTitle", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=28, leading=32, textColor=NAVY, alignment=TA_CENTER, spaceAfter=10))
styles.add(ParagraphStyle(name="CoverSub", parent=styles["Normal"], fontName="Helvetica", fontSize=12, leading=18, textColor=MUTED, alignment=TA_CENTER, spaceAfter=18))
styles.add(ParagraphStyle(name="H1x", parent=styles["Heading1"], fontName="Helvetica-Bold", fontSize=18, leading=22, textColor=NAVY, spaceBefore=4, spaceAfter=10))
styles.add(ParagraphStyle(name="H2x", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=RED, spaceBefore=8, spaceAfter=5))
styles.add(ParagraphStyle(name="Bodyx", parent=styles["BodyText"], fontName="Helvetica", fontSize=9.1, leading=13.5, textColor=INK, spaceAfter=6))
styles.add(ParagraphStyle(name="Smallx", parent=styles["BodyText"], fontName="Helvetica", fontSize=7.8, leading=10.5, textColor=MUTED, spaceAfter=4))
styles.add(ParagraphStyle(name="Tablex", parent=styles["BodyText"], fontName="Helvetica", fontSize=7.7, leading=10.2, textColor=INK))
styles.add(ParagraphStyle(name="TableHead", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=7.8, leading=10.2, textColor=colors.white))
styles.add(ParagraphStyle(name="Callout", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=9.2, leading=13.5, textColor=NAVY, leftIndent=8, rightIndent=8, spaceAfter=4))


def P(text, style="Bodyx"):
    return Paragraph(text, styles[style])


def bullet(text):
    return P(f"&#8226; {text}", "Bodyx")


def status_table(rows, widths):
    data = [[P(c, "TableHead") for c in rows[0]]]
    for row in rows[1:]:
        data.append([P(c, "Tablex") for c in row])
    t = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#D9E0EA")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, PALE]),
    ]))
    return t


def callout(text, bg=PALE_RED):
    t = Table([[P(text, "Callout")]], colWidths=[170 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg),
        ("BOX", (0, 0), (-1, -1), 0.6, RED if bg == PALE_RED else colors.HexColor("#C9D5E5")),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return t


def header_footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setStrokeColor(colors.HexColor("#E2E8F0"))
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, h - 16 * mm, w - 18 * mm, h - 16 * mm)
    canvas.setFont("Helvetica-Bold", 8)
    canvas.setFillColor(RED)
    canvas.drawString(18 * mm, h - 12 * mm, "COMMONWEALTH MIGRATION")
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(w - 18 * mm, h - 12 * mm, "September 2026 SEO, GEO & AEO report")
    canvas.line(18 * mm, 15 * mm, w - 18 * mm, 15 * mm)
    canvas.drawString(18 * mm, 9.5 * mm, "Prepared from the September action plan and documented project evidence")
    canvas.drawRightString(w - 18 * mm, 9.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


doc = BaseDocTemplate(
    str(OUT), pagesize=A4,
    leftMargin=18 * mm, rightMargin=18 * mm,
    topMargin=23 * mm, bottomMargin=22 * mm,
    title="Commonwealth Migration Canada - September 2026 SEO GEO AEO Report",
    author="Loud Launchers",
)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
doc.addPageTemplates([PageTemplate(id="main", frames=frame, onPage=header_footer)])

story = []

# Cover
story += [Spacer(1, 28 * mm), P("MONTHLY COMPLETION REPORT", "CoverKicker"), P("Commonwealth Migration Canada", "CoverTitle"), P("SEO, GEO & AEO Services", "CoverSub"), Spacer(1, 8 * mm)]
cover = Table([
    [P("WEBSITE", "TableHead"), P("https://commonwealthmigration.ca", "Tablex")],
    [P("REPORT PERIOD", "TableHead"), P("September 2026", "Tablex")],
    [P("SERVICE PLAN", "TableHead"), P("Advanced SEO + Maintenance", "Tablex")],
    [P("REPORT STATUS", "TableHead"), P("Client-ready completion report", "Tablex")],
], colWidths=[42 * mm, 128 * mm])
cover.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (0, -1), NAVY), ("BACKGROUND", (1, 0), (1, -1), PALE),
    ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#D9E0EA")),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("LEFTPADDING", (0, 0), (-1, -1), 8), ("RIGHTPADDING", (0, 0), (-1, -1), 8),
    ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
]))
story += [cover, Spacer(1, 18 * mm), callout("Purpose: document the September SEO, GEO and AEO programme delivered for commonwealthmigration.ca, including the additional work completed beyond the core monthly action list.")]
story += [Spacer(1, 8 * mm), P("Reporting basis", "H2x"), P("The supplied completion report is for the UAE website, cwmigrationgroup.ae. It was used only as a format and level-of-detail reference. The Canada findings below are based on the September 2026 action plan, the current project repository, September commit history, and local build checks. Platform-level outcomes such as Search Console performance, live indexation, analytics and accepted third-party placements are separated in the verification section so the report remains evidence-led.", "Bodyx")]
story += [PageBreak()]

# Executive summary
story += [P("1. Executive summary", "H1x"), P("During September 2026, Commonwealth Migration Canada's website received a substantial SEO, GEO and AEO improvement programme. The work strengthened the site's content depth, search-intent coverage, technical crawl foundations, answer-focused content, internal discovery, local/entity signals and conversion pathways.", "Bodyx"), P("The programme delivered more than a basic metadata refresh. It combined a large Canada immigration content footprint, a 20-article blog library, a structured route and sitemap foundation, improved canonical and social metadata, enhanced FAQ and direct-answer patterns, stronger RCIC trust information, local Brampton signals, mobile refinements and conversion-supporting consultation paths.", "Bodyx"), callout("Client-facing conclusion: September created a stronger, broader and more machine-readable search foundation for commonwealthmigration.ca, with extra work extending beyond the minimum action-plan checklist.")]
story += [Spacer(1, 6 * mm), P("Headline evidence", "H2x")]
story += [status_table([
    ["Area", "September evidence", "Draft status"],
    ["Content footprint", "20 blog article modules are present in src/data/blog-articles; the September build generated 146 pages/routes.", "Evidenced"],
    ["On-page SEO", "SEO content and keyword expansion libraries were changed; a September commit records SEO-optimized content added across pages.", "Evidenced"],
    ["Technical SEO", "Metadata builder, canonical URLs, sitemap generation, robots route and legacy-to-current route mapping are present.", "Evidenced"],
    ["AEO / FAQ", "FAQ content and structured, question-led content libraries were expanded in September changes.", "Evidenced"],
    ["Local / entity GEO", "Canada, Brampton, address, hours and CICC/RCIC identity details are centralized in site configuration.", "Evidenced"],
    ["GSC / indexing", "Action plan requires review and submissions; no Search Console export was supplied.", "To verify"],
    ["Backlinks / citations", "Outreach and submission scripts/workbooks exist, but live accepted placements are not proven by the supplied evidence.", "To verify"],
], [37 * mm, 97 * mm, 36 * mm])]

story += [PageBreak(), P("2. Action plan completion matrix", "H1x"), P("The matrix below maps the 14 Canada action-plan commitments to the evidence currently available. This is intentionally conservative: repository evidence supports on-site implementation, but it cannot independently prove off-site publication or Search Console submission.", "Bodyx")]
matrix = [
    ["Action-plan item", "September completion view", "Status"],
    ["1-2. Keyword and competitor research", "Keyword-led page and blog structures are evidenced through SEO content, keyword framing and expansion files. Competitor research deliverable is not separately present in the supplied materials.", "Partial / verify"],
    ["3. 10-12 SEO blogs", "20 blog article modules are present, including topics covering PR pathways, work permits, study permits, family sponsorship, visitor visas, CRS and IRCC updates.", "Evidenced"],
    ["4-5. Page, metadata and internal-link optimization", "Central metadata builder, normalized page titles, descriptions, canonical URLs and broad SEO content changes are present; internal-linking helpers are also present.", "Evidenced"],
    ["6. Sitemap, robots, canonical and indexing files", "Sitemap generation, robots route and canonical metadata are implemented. Sitemap logic includes 100+ content routes plus tools and consultation routes.", "Evidenced"],
    ["7. Google Search Console review", "Required by plan, but no GSC screenshot/export or submission log was provided.", "To verify"],
    ["8. Technical SEO, broken links and redirects", "Legacy/current route mapping, build-time route generation and September route/content work are evidenced. A separate broken-link crawl result was not supplied.", "Partial / verify"],
    ["9. Schema and structured data", "Blog/article schema utilities and structured metadata foundations are present; page-level schema coverage should be checked in the rendered site.", "Partial / verify"],
    ["10. Internal linking", "Navigation, route map, blog index and content expansion libraries support internal discovery between service, tool, consultation and blog pages.", "Evidenced"],
    ["11. Local business information", "Brampton address, hours, contact details, Canada locale and licensed RCIC identity are centralized and updated.", "Evidenced"],
    ["12. Backlinks or citations", "Backlink/outreach workbooks and submission scripts are present; accepted live placements are not independently confirmed.", "To verify"],
    ["13. Speed and mobile responsiveness", "September commit history includes mobile and dark-theme fixes; production performance metrics were not supplied.", "Partial / verify"],
    ["14. Activity record", "Git history provides a dated implementation record across September, including SEO, blog, metadata, trust and mobile changes.", "Evidenced"],
]
story += [status_table(matrix, [48 * mm, 99 * mm, 23 * mm]), PageBreak()]

# Work completed
story += [P("3. Work completed and website improvements", "H1x"), P("The September programme improved both the visible user experience and the underlying information architecture used by search engines and answer systems.", "Bodyx"), P("Content and search intent", "H2x")]
for x in [
    "Expanded Canada immigration content across service, pathway, tool and guide areas, with keyword-focused content modules in the source project.",
    "Maintained a substantial blog library of 20 article modules covering high-intent Canadian immigration topics, including Express Entry, CRS, PNP, study, work, family, visitor and post-graduation pathways.",
    "Added question-led and explanatory content patterns intended to improve direct-answer extraction and user understanding.",
    "Added or maintained Canada-specific calls to action for consultation, assessment, payment and free tools.",
]: story.append(bullet(x))
story += [P("Technical SEO and crawlability", "H2x")]
for x in [
    "Implemented a central metadata builder with concise title normalization, descriptions, canonical URLs, Open Graph and Twitter metadata.",
    "Maintained sitemap generation based on page records and source-file/git dates, with additional tool and consultation routes included.",
    "Maintained route normalization and legacy-path mapping so older URLs can resolve to current keyword-led paths.",
    "Built the site successfully with Next.js 16.3.0; local lint and production build checks completed without reported errors.",
]: story.append(bullet(x))
story += [P("GEO, trust and conversion signals", "H2x")]
for x in [
    "Centralized Commonwealth Migration Group Inc. identity, Brampton/Canada location, opening hours, contact information and service positioning.",
    "Added a single-source regulated representative record for Pankaj Khanna, RCIC, including CICC registration details and eligibility wording.",
    "Improved homepage expert placement, favicon/serp presentation, consultation flow and mobile presentation during September commits.",
]: story.append(bullet(x))

story += [PageBreak(), P("4. September implementation record", "H1x"), P("The project history shows a concentrated September delivery period. The entries below are grouped into client-friendly themes rather than presented as a raw engineering log.", "Bodyx")]
story += [status_table([
    ["Date", "Implementation evidence", "SEO relevance"],
    ["Sep 1-7", "Homepage and consultation presentation updates, tool/navigation improvements, payment-flow work and CRM lead handoff changes.", "Improved crawl paths, conversion paths and lead capture."],
    ["Sep 9-12", "Homepage heading, consultant display, contact details and broad SEO-optimized page content changes; mobile CSS and watermark fixes.", "Improved page relevance, trust and responsive presentation."],
    ["Sep 16-23", "Official address replacement, resource/blog navigation, blog/news pages, favicon/serp work, RCIC details and local contact updates.", "Improved local/entity consistency, discoverability and regulated-practice trust signals."],
    ["Sep 24-30", "RCIC details refined, homepage expert section placement adjusted, article images applied and consultation calendar link added.", "Improved E-E-A-T signals, content presentation and consultation conversion."],
], [25 * mm, 91 * mm, 54 * mm])]
story += [Spacer(1, 7 * mm), P("Quality checks completed locally", "H2x"), bullet("npm run lint completed successfully."), bullet("npm run build completed successfully, compiling and generating 146 static/dynamic routes without reported build errors."), bullet("The generated route set includes sitemap.xml, robots.txt, consultation, assessment, tool, blog, immigration pathway and news routes."), callout("These checks confirm the implemented website project is internally healthy. Live production metrics and off-site publication evidence are documented separately as measurement items.", PALE)]

story += [PageBreak(), P("5. Extra work delivered beyond the core action plan", "H1x"), P("The September implementation went beyond the minimum list of page edits and technical checks. The following additions materially increase the site's ability to attract, answer and convert relevant Canadian immigration searches.", "Bodyx")]
story += [status_table([
    ["Extra work", "SEO / AEO / GEO benefit"],
    ["20-article Canada immigration content library", "Creates a broader topical footprint across skilled migration, Express Entry, CRS, PNP, study, work, family, visitor, post-graduation and current IRCC information needs."],
    ["Keyword-led content expansion layer", "Adds reusable page-level content frameworks that improve topical depth, semantic coverage and the ability to match users at different stages of the immigration journey."],
    ["Direct-answer and FAQ patterns", "Makes important pages easier for users, Google and AI answer systems to scan, understand and extract into concise responses."],
    ["Centralized metadata and canonical system", "Improves consistency of titles, descriptions, canonical URLs, Open Graph and social previews while reducing repetitive or over-length metadata."],
    ["Expanded crawl and discovery architecture", "Connects pathway pages, tools, consultation routes, blogs, news and legacy URLs through route mapping, navigation and sitemap generation."],
    ["Regulated expert and CICC trust layer", "Strengthens entity clarity and E-E-A-T signals by presenting the RCIC identity, registration details, regulator relationship and eligibility wording consistently."],
    ["Canada and Brampton local context", "Improves relevance for local-intent searches through address, hours, contact details, Canada locale and Brampton service positioning."],
    ["Mobile, visual and conversion refinements", "Improves the experience on smaller screens, strengthens expert presentation, refines branding/serp assets and supports consultation actions."],
    ["Reusable SEO infrastructure", "Creates a maintainable foundation for future content, internal linking, sitemap updates, structured data and ongoing SEO maintenance rather than one-off edits."],
], [55 * mm, 115 * mm]), Spacer(1, 8 * mm), callout("Why this matters: the site now has a broader set of useful pages and supporting signals that can reinforce one another. A blog can support a service page; a service page can support a consultation route; and clear entity, location and expert information can help both traditional and AI-driven discovery.", PALE_RED)]

story += [PageBreak(), P("6. Measurement and verification items", "H1x"), P("The implementation work is documented above. The following platform-level measurements should be appended when available to quantify search visibility, live deployment quality and business impact.", "Bodyx")]
story += [status_table([
    ["Verification item", "What to confirm", "Why it matters"],
    ["Google Search Console", "Coverage/indexing status, submitted sitemap, clicks, impressions, CTR and average position for September.", "Shows whether the on-site work was discovered and visible in Google."],
    ["Live crawl", "HTTP 200/3xx/4xx results, canonical output, robots directives, sitemap URL count and broken links on production.", "Confirms implementation survived deployment."],
    ["Schema validation", "Rendered Organization, LocalBusiness, Article, Breadcrumb, FAQ and service markup where applicable.", "Confirms machine-readable entity and answer signals."],
    ["Performance", "Mobile and desktop Lighthouse/PageSpeed results, especially LCP, INP and CLS.", "Quantifies the performance commitment in the plan."],
    ["Backlinks/citations", "Final accepted URLs, live status, target page and anchor/citation context for each placement.", "Separates prepared outreach from published authority."],
    ["Analytics/conversions", "Consultation clicks, assessment starts, form submissions, WhatsApp/call clicks and qualified leads.", "Connects SEO work to business outcomes."],
], [40 * mm, 78 * mm, 52 * mm])]
story += [Spacer(1, 7 * mm), P("Recommended October follow-up", "H2x"), bullet("Export September Search Console and analytics data and add a one-page performance appendix."), bullet("Run a production crawl and validate sitemap, canonical, robots, redirects, schema and broken links."), bullet("Turn the outreach workbook into a verified backlink/citation register with live URL evidence."), bullet("Refresh time-sensitive immigration content against current IRCC sources and record review dates."), bullet("Use page-level impressions and conversions to prioritize the next content expansion cycle.")]

story += [Spacer(1, 8 * mm), P("Source and scope note", "H2x"), P("This report was prepared from: (1) the September 2026 combined SEO/GEO/AEO action plan for commonwealthmigration.ca and cwmigrationgroup.ae; (2) the supplied September 2026 completion report for cwmigrationgroup.ae, used as a structure/reference model; and (3) the commonwealthmigration.ca project files and September git history available in the working repository. The UAE completion report is not treated as evidence of Canada-site results.", "Smallx")]

doc.build(story)
print(OUT)
