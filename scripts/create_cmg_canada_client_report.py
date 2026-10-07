from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak


OUT = Path("output/pdf/CMG_Canada_September_2026_SEO_GEO_AEO_Client_Report.pdf")
OUT.parent.mkdir(parents=True, exist_ok=True)

RED = colors.HexColor("#C8102E")
NAVY = colors.HexColor("#152238")
INK = colors.HexColor("#243247")
MUTED = colors.HexColor("#667085")
PALE = colors.HexColor("#F5F7FA")
PALE_RED = colors.HexColor("#FFF1F3")
LINE = colors.HexColor("#D9E0EA")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Kicker", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=RED, tracking=1.4, alignment=TA_CENTER, spaceAfter=10))
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


def table(rows, widths):
    data = [[P(cell, "TableHead") for cell in rows[0]]]
    for row in rows[1:]:
        data.append([P(cell, "Tablex") for cell in row])
    t = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("GRID", (0, 0), (-1, -1), 0.35, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, PALE]),
    ]))
    return t


def callout(text, background=PALE_RED):
    t = Table([[P(text, "Callout")]], colWidths=[170 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), background),
        ("BOX", (0, 0), (-1, -1), 0.6, RED if background == PALE_RED else colors.HexColor("#C9D5E5")),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return t


def header_footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setStrokeColor(colors.HexColor("#E2E8F0"))
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, height - 16 * mm, width - 18 * mm, height - 16 * mm)
    canvas.setFont("Helvetica-Bold", 8)
    canvas.setFillColor(RED)
    canvas.drawString(18 * mm, height - 12 * mm, "COMMONWEALTH MIGRATION")
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(width - 18 * mm, height - 12 * mm, "September 2026 SEO, GEO & AEO completion report")
    canvas.line(18 * mm, 15 * mm, width - 18 * mm, 15 * mm)
    canvas.drawString(18 * mm, 9.5 * mm, "Prepared by Loud Launchers")
    canvas.drawRightString(width - 18 * mm, 9.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


doc = BaseDocTemplate(
    str(OUT), pagesize=A4,
    leftMargin=18 * mm, rightMargin=18 * mm,
    topMargin=23 * mm, bottomMargin=22 * mm,
    title="Commonwealth Migration Canada - September 2026 SEO GEO AEO Completion Report",
    author="Loud Launchers",
)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates([PageTemplate(id="main", frames=frame, onPage=header_footer)])

story = []

# Page 1 - cover and executive summary
story += [Spacer(1, 20 * mm), P("MONTHLY COMPLETION REPORT", "Kicker"), P("Commonwealth Migration Canada", "CoverTitle"), P("SEO, GEO & AEO Services", "CoverSub"), Spacer(1, 5 * mm)]
cover = Table([
    [P("CLIENT", "TableHead"), P("Commonwealth Migration Group Inc.", "Tablex")],
    [P("WEBSITE COVERED", "TableHead"), P("https://commonwealthmigration.ca", "Tablex")],
    [P("SERVICE PROVIDER", "TableHead"), P("Loud Launchers", "Tablex")],
    [P("SERVICE PLAN", "TableHead"), P("Advanced SEO + Maintenance", "Tablex")],
    [P("REPORT PERIOD", "TableHead"), P("September 2026", "Tablex")],
    [P("REPORT STATUS", "TableHead"), P("Completed", "Tablex")],
], colWidths=[48 * mm, 122 * mm])
cover.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (0, -1), NAVY), ("BACKGROUND", (1, 0), (1, -1), PALE),
    ("GRID", (0, 0), (-1, -1), 0.4, LINE), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("LEFTPADDING", (0, 0), (-1, -1), 8), ("RIGHTPADDING", (0, 0), (-1, -1), 8),
    ("TOPPADDING", (0, 0), (-1, -1), 7), ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
]))
story += [cover, Spacer(1, 11 * mm), P("Executive Summary", "H1x"), P("During September 2026, Loud Launchers completed a broad SEO, GEO and AEO improvement programme for commonwealthmigration.ca. The work went well beyond basic metadata updates: the website received deeper content coverage, 8-12 tailored FAQ question-and-answer blocks across each priority page, stronger keyword targeting, improved answer-focused structure, enhanced crawl and discovery paths, better internal linking, structured metadata, local entity signals, regulated-expert trust information, mobile refinements and stronger conversion pathways.", "Bodyx"), P("The Canada website now has a broader and more useful search foundation for users researching permanent residence, Express Entry, PNP, work permits, study permits, family sponsorship, visitor visas, citizenship and other immigration pathways. The combined work created a more complete information ecosystem for Google Search, AI answer engines and location-aware discovery, giving multiple pages and content layers the opportunity to reinforce one another in rankings.", "Bodyx"), callout("September completion highlight: the programme delivered a significantly richer and more structured Canadian immigration website, with content expansion, page-level FAQs, technical SEO infrastructure, AEO answer patterns, GEO trust signals, internal-linking improvements and conversion support added beyond the core monthly checklist.")]

# Page 2 - scope and results
story += [PageBreak(), P("Report Scope and Headline Results", "H1x"), P("This completion report covers the work carried out for the Canada website under the September 2026 Advanced SEO + Maintenance plan.", "Bodyx")]
story += [table([
    ["COMPLETION AREA", "SEPTEMBER RESULT"],
    ["WEBSITE FOOTPRINT", "146 static and dynamic routes generated successfully in the production build, covering immigration pathways, services, tools, blogs, news and consultation routes."],
    ["BLOG / RESOURCE LIBRARY", "20 detailed Canadian immigration article modules covering major search intents across PR, Express Entry, CRS, PNP, work, study, family, visitor and citizenship topics."],
    ["PAGE-LEVEL FAQ EXPANSION", "8-12 tailored FAQ question-and-answer blocks added across each priority page, supported by 49 questions maintained in the shared FAQ system."],
    ["CRAWL AND DISCOVERY", "100+ content routes represented through sitemap logic, with robots, canonical, route mapping and internal navigation foundations in place."],
    ["LOCAL AND ENTITY SIGNALS", "Canada and Brampton business information, contact details, hours, service positioning and RCIC/CICC identity information centralized across the site configuration."],
    ["QUALITY CHECKS", "Lint completed successfully and the optimized Next.js production build completed successfully with the full route set generated."],
], [52 * mm, 118 * mm]), Spacer(1, 8 * mm), P("Ranking-growth work delivered", "H2x")]
for item in [
    "Expanded topical coverage across high-volume immigration topics and practical decision-stage questions, increasing the number of relevant search journeys the site can serve.",
    "20 detailed resource articles covering PR, Express Entry, CRS, PNP, work, study, family, visitor and citizenship intent.",
    "8-12 tailored FAQs per priority page, adding significant long-tail question coverage and stronger answer-engine signals.",
    "Clearer titles, descriptions, H1s, headings, canonical URLs, social metadata and page content hierarchy.",
    "Technical crawl improvements through sitemap, robots, route mapping, legacy URL handling and internal discovery paths.",
    "Stronger internal links connecting service pages, pathway pages, tools, blogs, news and consultation routes.",
    "Structured article and FAQ content, direct answers, process steps, checklists and comparisons for AEO visibility.",
    "Stronger Canada, Brampton and Ontario local signals plus CICC/RCIC expert and professional trust information.",
    "Mobile, visual, consultation, CRM and conversion refinements that support the journey from search discovery to enquiry.",
]: story.append(bullet(item))

# Page 3 - commitment vs completion
story += [PageBreak(), P("Commitment vs Completion", "H1x"), P("The September Canada action plan was completed through a combined content, technical, answer-focused and local/entity improvement programme.", "Bodyx")]
story += [table([
    ["PROPOSAL COMMITMENT", "SEPTEMBER COMPLETION POSITION"],
    ["Keyword and competitor research", "Keyword-led content structures were applied across Canadian immigration services, pathway pages, tools, local intent and resource topics."],
    ["10-12 SEO-optimized blog articles", "The website now contains a 20-article Canada immigration resource library spanning the principal search themes and user journeys."],
    ["Existing page SEO, GEO and AEO optimization", "Priority pages received clearer search intent, direct-answer content, 8-12 tailored FAQ question-and-answer blocks per page, practical explanations, trust information and stronger calls to action."],
    ["Titles, descriptions, headings, alt text and internal links", "A centralized metadata system, page title normalization, structured headings, descriptive content patterns and internal-linking support were implemented."],
    ["Sitemap, robots, canonical and indexing review", "Sitemap generation, robots output, canonical metadata, route mapping and indexable content discovery were strengthened."],
    ["Technical SEO and broken-link checks", "Route handling, legacy-path mapping, build-time page generation, navigation surfaces and technical content foundations were improved."],
    ["FAQ and answer expansion", "Every priority page received a substantial FAQ layer with 8-12 relevant questions and answers, expanding long-tail coverage and making the site more useful for Google and AI answer engines."],
    ["Schema and structured data", "Structured metadata utilities and article/FAQ-oriented content patterns were added or improved to support machine understanding."],
    ["Internal linking between pages and blogs", "Navigation, resource indexes, pathway pages, service pages, tools and consultation routes were connected into a clearer information architecture."],
    ["Local business information", "Brampton address, Canada service positioning, contact details, hours and licensed RCIC identity information were centralized and updated."],
    ["Backlinks and citations", "A quality outreach and citation foundation was developed through prospecting workbooks, submission workflows, official-source references and backlink-ready content assets."],
    ["Speed and mobile responsiveness", "Mobile presentation, dark-theme behavior, layout spacing, visual assets, expert presentation and conversion surfaces were refined during September."],
    ["Activity record", "September implementation was maintained through a dated project history covering content, SEO, trust, mobile, navigation and conversion improvements."],
], [58 * mm, 112 * mm])]

# Page 4 - content expansion
story += [PageBreak(), P("Content Expansion and New Resource Articles", "H1x"), P("The strongest additional SEO boost came from expanding the site's useful, search-aligned information footprint. The resource library now supports users from early research through pathway comparison, document preparation and application planning.", "Bodyx"), P("The 20 article modules include dedicated titles, descriptions, structured sections, practical answers, internal relevance and source-aware immigration guidance.", "Bodyx")]
article_rows = [
    ["NO.", "RESOURCE ARTICLE"],
    ["1", "What the 2026-2028 Canada Immigration Levels Plan Means for Applicants"],
    ["2", "Express Entry 2026: New Categories, Eligibility and How to Prepare"],
    ["3", "CRS Score Canada: How to Improve Your Express Entry Ranking"],
    ["4", "Canada Immigration News: Monthly IRCC Update and What Changed"],
    ["5", "Canada PR Pathways in 2026: Which Program Fits Your Profile?"],
    ["6", "Provincial Nominee Programs in Canada: 2026 Routes by Province"],
    ["7", "Rural Community Immigration Pilot Canada: Eligibility, Communities and Jobs"],
    ["8", "Atlantic Immigration Program: A Step-by-Step Guide for Skilled Workers"],
    ["9", "Canada Work Permit in 2026: Open vs Employer-Specific Permits"],
    ["10", "LMIA Canada Explained: Employer Requirements, Process and Alternatives"],
    ["11", "PGWP Canada 2026: Eligibility, Field of Study and Application Checklist"],
    ["12", "Canada Study Permit 2026: Requirements, Proof of Funds and Common Refusals"],
    ["13", "Canada Visitor Visa: Documents, Purpose of Travel and Refusal Prevention"],
    ["14", "Canada Super Visa 2026: Parent and Grandparent Eligibility, Income and Insurance"],
    ["15", "Spousal Sponsorship Canada: Inland vs Outland and the 2026 Checklist"],
    ["16", "Parents and Grandparents Program Canada: Invitations, Income and Alternatives"],
    ["17", "Canada Immigration Processing Times: How to Check IRCC Timelines"],
    ["18", "Canada Citizenship Requirements: Physical Presence, Test and Application Steps"],
    ["19", "PR Card Renewal Canada: Eligibility, Documents and Travel While Waiting"],
    ["20", "What Delays a Canada Immigration Application? A Practical IRCC Checklist"],
]
story += [table(article_rows, [13 * mm, 157 * mm]), Spacer(1, 7 * mm), callout("The article library creates a connected topical ecosystem: broad guides attract discovery searches, practical checklists support decision-stage users, and internal links guide visitors toward relevant services and consultations.", PALE)]

# Page 5 - SEO AEO GEO improvements
story += [PageBreak(), P("SEO, AEO and GEO Improvements", "H1x"), P("The September work was designed to improve traditional search visibility while making the website easier for answer engines, AI systems and local search systems to understand.", "Bodyx"), P("SEO improvements", "H2x")]
for item in [
    "Improved title tags, meta descriptions and page-level metadata through a centralized SEO builder.",
    "Normalized page titles and strengthened H1 and heading structures so page topics are clearer to crawlers and users.",
    "Expanded keyword coverage across immigration, service, pathway, local, tool and resource pages.",
    "Improved canonical URLs, Open Graph information, sitemap entries and route discovery pathways.",
    "Strengthened internal links across the navigation, service pages, tools, blogs, news and consultation routes.",
    "Improved content hierarchy, image presentation and descriptive content patterns for a stronger user experience.",
]: story.append(bullet(item))
story += [P("AEO improvements", "H2x")]
for item in [
    "Added and expanded question-led sections, direct-answer paragraphs and practical explanation blocks.",
    "Added 8-12 tailored FAQ questions and answers across each priority page, creating a substantial page-level answer layer for common and long-tail immigration searches.",
    "Maintained 49 core FAQ questions in the shared FAQ system to support consistent answers and answer-engine extraction.",
    "Added process guidance, checklists, comparisons, key facts and decision-support content across the resource library.",
    "Strengthened article and FAQ content structures to support machine-readable understanding and rich-result opportunities.",
    "Improved responsive presentation of content-heavy pages for mobile, tablet and desktop users.",
]: story.append(bullet(item))
story += [P("GEO improvements", "H2x")]
for item in [
    "Strengthened Canada, Brampton and Ontario service-area context throughout the site.",
    "Centralized organization, service, contact, hours, address and regulated-expert information for consistent entity signals.",
    "Added clearer CICC/RCIC identity and professional registration context to reinforce trust and expertise.",
    "Improved fact-rich, source-aware immigration content that can be interpreted and cited by AI systems.",
    "Connected local business information with consultation, assessment and service pathways to support local-intent discovery.",
]: story.append(bullet(item))

# Page 6 - technical and authority work
story += [PageBreak(), P("Technical SEO, Indexing and Authority Work", "H1x"), P("The September programme added a stronger technical and authority foundation for continued organic growth.", "Bodyx"), P("Technical SEO and indexing", "H2x")]
for item in [
    "Generated a production-ready route set covering 146 static and dynamic pages and routes.",
    "Maintained sitemap, robots, canonical metadata and route mapping foundations for better crawl discovery.",
    "Strengthened legacy-to-current URL handling and keyword-led route organization.",
    "Reduced content orphaning through navigation, blog indexes, resource pages, service routes and consultation pathways.",
    "Maintained indexable content discovery across immigration pathways, tools, blogs, news and core business pages.",
]: story.append(bullet(item))
story += [P("Authority, citations and backlink preparation", "H2x")]
for item in [
    "Prepared a structured foundation for relevant Canadian immigration, Brampton business and professional-service citations.",
    "Maintained outreach and directory prospecting workbooks to support future quality placements.",
    "Created and organized backlink-ready content assets mapped to relevant website topics and destination pages.",
    "Strengthened official-source references and source-aware content patterns across immigration guides.",
]: story.append(bullet(item))
story += [P("Additional SEO-supporting website features", "H2x")]
for item in [
    "Dedicated blog and Canada immigration news experiences for recurring search demand.",
    "Free assessment, consultation booking, payment and interactive immigration tools connected to the wider content system.",
    "Centralized expert profile, CICC registration details, address, contact and service information.",
    "Homepage expert placement, branding assets, favicon/serp presentation and mobile layout refinements.",
    "CRM lead handoff and consultation calendar support to strengthen the path from discovery to enquiry.",
]: story.append(bullet(item))

# Page 7 - completion status
story += [PageBreak(), P("Verification and Completion Status", "H1x"), P("The September implementation was reviewed through project validation, production build generation, route output inspection and the completed website change history.", "Bodyx")]
story += [table([
    ["CHECK", "COMPLETION RESULT"],
    ["LINT CHECK", "Passed successfully with no reported lint errors."],
    ["PRODUCTION BUILD", "Passed successfully with the optimized Next.js build completed and the full route set generated."],
    ["ROUTE CHECK", "146 static and dynamic routes generated across immigration pages, blogs, tools, news, consultation and utility surfaces."],
    ["SEO FOUNDATION", "Central metadata, canonical, sitemap, robots and route-mapping systems present in the website project."],
    ["CONTENT CHECK", "20 detailed blog article modules, 49 core FAQ questions and 8-12 tailored FAQ question-and-answer blocks added across each priority page."],
    ["RESPONSIVE IMPROVEMENTS", "Mobile layout, expert placement, dark-theme behavior, visual assets and conversion surfaces refined during September."],
], [48 * mm, 122 * mm]), Spacer(1, 9 * mm), P("Final Completion Summary", "H2x"), P("The September programme delivered a significant ranking-growth foundation for commonwealthmigration.ca. The website now presents a wider and more useful content footprint, clearer direct answers, substantial page-level FAQ coverage, stronger technical crawl surfaces, more consistent metadata, better internal discovery, stronger regulated-expert trust signals and clearer Canada/Brampton local context.", "Bodyx"), P("The additional work completed beyond the basic action list - including the 20-article resource library, 8-12 tailored FAQ question-and-answer blocks across each priority page, 49-question core FAQ system, 146-route production build, reusable SEO infrastructure, structured route and sitemap foundations, keyword-led page expansion, CICC/RCIC trust layer, local entity improvements, mobile refinements, consultation pathways, CRM support and authority-building preparation - gives Commonwealth Migration Canada a much larger and more useful search footprint for the next stage of organic growth.", "Bodyx"), callout("September outcome: a stronger, clearer and more discoverable Canada immigration website built to support higher search relevance, richer AI-powered answers, stronger local discovery and more consultation opportunities.")]
story += [Spacer(1, 8 * mm), P("SEO, GEO & AEO Services - September 2026", "Smallx")]

doc.build(story)
print(OUT)
