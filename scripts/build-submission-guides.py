#!/usr/bin/env python3
"""
Build genuinely useful, submission-ready PDF guides for free document hosts.
Each guide is standalone educational content with contextual links back to
commonwealthmigration.ca. No keyword stuffing; links appear where relevant.
"""
from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, HRFlowable,
)

OUT = Path(__file__).resolve().parent.parent / "output" / "pdf" / "submission-guides"
OUT.mkdir(parents=True, exist_ok=True)

SITE = "https://commonwealthmigration.ca"

NAVY = colors.HexColor("#0B2545")
RED = colors.HexColor("#D02818")
MUTED = colors.HexColor("#5B6470")

ss = getSampleStyleSheet()
styles = {
    "title": ParagraphStyle("t", parent=ss["Title"], fontName="Helvetica-Bold",
                            fontSize=22, leading=27, textColor=NAVY, spaceAfter=6),
    "sub": ParagraphStyle("s", parent=ss["Normal"], fontName="Helvetica",
                          fontSize=10, leading=14, textColor=MUTED, spaceAfter=14),
    "h2": ParagraphStyle("h2", parent=ss["Heading2"], fontName="Helvetica-Bold",
                         fontSize=14, leading=18, textColor=NAVY, spaceBefore=14, spaceAfter=6),
    "body": ParagraphStyle("b", parent=ss["Normal"], fontName="Helvetica",
                           fontSize=10, leading=15, spaceAfter=8),
    "bullet": ParagraphStyle("bu", parent=ss["Normal"], fontName="Helvetica",
                             fontSize=10, leading=14),
    "footer": ParagraphStyle("f", parent=ss["Normal"], fontName="Helvetica",
                             fontSize=8, leading=11, textColor=MUTED),
}

LINK = '<a href="{u}" color="#0B2545"><u>{t}</u></a>'


def para(text):
    return Paragraph(text, styles["body"])


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(i, styles["bullet"]), leftIndent=12) for i in items],
        bulletType="bullet", bulletColor=RED, leftIndent=14, bulletFontSize=8,
    )


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 12 * mm,
                      "General information only — not legal advice. Confirm current requirements with IRCC.")
    canvas.drawRightString(A4[0] - 18 * mm, 12 * mm, "Commonwealth Migration Group Inc. · Brampton, ON")
    canvas.setStrokeColor(colors.HexColor("#D8DEE6"))
    canvas.line(18 * mm, 15 * mm, A4[0] - 18 * mm, 15 * mm)
    canvas.restoreState()


def build(filename, title, subtitle, blocks):
    path = OUT / filename
    doc = SimpleDocTemplate(
        str(path), pagesize=A4,
        leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=18 * mm, bottomMargin=20 * mm,
        title=title, author="Commonwealth Migration Group Inc.",
        subject=subtitle,
    )
    story = [
        Paragraph(title, styles["title"]),
        Paragraph(subtitle, styles["sub"]),
        HRFlowable(width="100%", thickness=1.2, color=RED, spaceAfter=10),
    ]
    for kind, value in blocks:
        if kind == "h2":
            story.append(Paragraph(value, styles["h2"]))
        elif kind == "p":
            story.append(para(value))
        elif kind == "bullets":
            story.append(bullets(value))
            story.append(Spacer(1, 6))
        elif kind == "space":
            story.append(Spacer(1, value))
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(f"built {path}")


# ---------------------------------------------------------------------------
# Guide 1 — the Brampton choice checklist. Targets the exact money keyword.
# ---------------------------------------------------------------------------
build(
    "Choosing-a-Licensed-Immigration-Consultant-in-Brampton.pdf",
    "Choosing a Licensed Immigration Consultant in Brampton",
    "A practical checklist for comparing authorized representatives in Ontario · November 2026",
    [
        ("h2", "Why authorization comes first"),
        ("p", "In Canada, only a small set of people may represent you for a fee in immigration matters: "
              "regulated Canadian immigration consultants (RCICs), licensed immigration lawyers, and "
              "notaries in Quebec. A consultant must be in good standing with the College of Immigration "
              "and Citizenship Consultants (CICC). Checking that status takes two minutes and prevents "
              "most of the serious problems people encounter."),
        ("p", "Our own guide to " +
              LINK.format(u=f"{SITE}/blog/immigration-consultant-brampton", t="choosing an immigration consultant in Brampton") +
              " walks through the same questions in more detail, including what a written service scope should contain."),
        ("h2", "Six checks before you sign anything"),
        ("bullets", [
            "<b>CICC register.</b> Search the public register by name or College ID. The record should say the person is eligible to provide service.",
            "<b>Name matching.</b> The name on the contract must match the licence record, not just the brand name on the website.",
            "<b>Written scope.</b> Get the exact services, the application types, and what is excluded, in writing.",
            "<b>Fee structure.</b> Ask what the fee covers and what happens if the application is refused or processing takes longer than expected.",
            "<b>No guarantees.</b> Nobody can promise a visa, a work permit or permanent residence. A guarantee is a warning sign.",
            "<b>Records and updates.</b> Ask how you receive copies of what is filed and how progress is reported.",
        ]),
        ("h2", "Questions worth asking in the first call"),
        ("bullets", [
            "How many files like mine have you handled in the past year?",
            "Which IRCC program are you proposing, and why that one rather than the alternatives?",
            "What documents will I need, and what is likely to be the slowest part?",
            "Who will actually prepare and submit my application?",
            "What is your process if I receive a procedural fairness letter or a refusal?",
        ]),
        ("h2", "A note on location"),
        ("p", "You do not need to meet in person to work with a licensed consultant. Most files are handled by "
              "video, phone and email. If you do want a local office, check the " +
              LINK.format(u=f"{SITE}/about/immigration-office-brampton-ontario", t="Brampton office details") +
              " and confirm the address independently before travelling."),
        ("h2", "About this guide"),
        ("p", "Prepared by Commonwealth Migration Group Inc., a Brampton-based practice led by Pankaj Khanna, "
              "RCIC (CICC R711256). General information only; it is not legal advice and does not create a "
              "client relationship. Requirements change — always confirm with current IRCC instructions."),
        ("p", LINK.format(u=SITE, t="commonwealthmigration.ca")),
    ],
)

# ---------------------------------------------------------------------------
# Guide 2 — work permit types. Targets the article we linked to Attorneys Mag.
# ---------------------------------------------------------------------------
build(
    "Open-vs-Employer-Specific-Work-Permits-Canada-2026.pdf",
    "Open vs Employer-Specific Work Permits in Canada",
    "A plain-language comparison of the two work permit categories · updated November 2026",
    [
        ("h2", "The core distinction"),
        ("p", "Every Canadian work permit is either open or employer-specific. An open permit does not name an "
              "employer, so the holder can usually change jobs without applying for a new permit. An "
              "employer-specific permit names one employer, and often one role and location, so changing "
              "jobs generally means applying again."),
        ("p", "Our full guide to " +
              LINK.format(u=f"{SITE}/blog/canada-work-permit-types-2026", t="Canadian work permit types in 2026") +
              " explains the evidence and conditions that attach to each category."),
        ("h2", "Side by side"),
        ("bullets", [
            "<b>Open permits</b> — common for spouses and partners of students or workers, post-graduation "
            "work permit holders, and some applicants with a permanent residence application in progress.",
            "<b>Employer-specific permits</b> — usually require a job offer plus either a positive Labour "
            "Market Impact Assessment (LMIA) or a valid LMIA exemption code.",
            "<b>LMIA route</b> — sits under the Temporary Foreign Worker Program. The employer carries the "
            "recruitment and compliance obligations.",
            "<b>LMIA-exempt route</b> — sits under the International Mobility Program. Intra-company "
            "transfers and many trade-agreement workers fall here.",
            "<b>Global Talent Stream</b> — a faster, employer-driven stream inside the Temporary Foreign "
            "Worker Program for specific technology and specialised occupations. It still requires an "
            "employer and a Labour Market Benefits Plan; it is not an open permit.",
        ]),
        ("h2", "What happens when the job ends"),
        ("p", "Losing a job does not automatically cancel status, but an employer-specific permit no longer "
              "covers work for a different employer. In some cases a worker can ask IRCC for authorization "
              "to start a new job while a new application is processed. The request has to be made before "
              "starting the new role."),
        ("h2", "Common mistakes"),
        ("bullets", [
            "Starting a new job before the new permit or written authorization is in place.",
            "Assuming a positive LMIA guarantees a work permit — it does not; eligibility is still assessed.",
            "Letting status expire while waiting for a new decision without checking maintained status rules.",
            "Using an old permit condition after a role or employer change.",
        ]),
        ("h2", "About this guide"),
        ("p", "Prepared by Commonwealth Migration Group Inc., Brampton, Ontario. Pankaj Khanna, RCIC "
              "(CICC R711256). General information only — not legal advice. Verify all requirements "
              "against current IRCC and ESDC guidance."),
        ("p", LINK.format(u=f"{SITE}/work-and-study/tfwp-employer-compliance", t="Employer compliance guidance") +
              " · " + LINK.format(u=SITE, t="commonwealthmigration.ca")),
    ],
)

# ---------------------------------------------------------------------------
# Guide 3 — newcomer settlement / information gap. Broad topical relevance.
# ---------------------------------------------------------------------------
build(
    "Newcomer-Information-Checklist-Arriving-in-Canada.pdf",
    "A Newcomer's Information Checklist for Canada",
    "What to verify after arrival — and which sources to trust · November 2026",
    [
        ("h2", "Why the information gap matters"),
        ("p", "Most newcomers do not arrive with the wrong documents. They arrive with outdated ones, or "
              "with advice that was accurate for someone else's situation. Immigration rules change often, "
              "and the consequences of acting on last year's guidance can be serious."),
        ("p", "The same problem is explored in our article on " +
              LINK.format(u=f"{SITE}/blog/immigration-consultant-brampton", t="how to choose an immigration consultant in Brampton") +
              ", which focuses on verifying advice before relying on it."),
        ("h2", "A reliable information hierarchy"),
        ("bullets", [
            "<b>Official sources first.</b> IRCC, CBSA, ESDC and provincial nomination websites are the "
            "authoritative starting point for rules and forms.",
            "<b>Regulated professionals second.</b> An RCIC or lawyer can interpret how rules apply to your "
            "specific file. Check their licence on the CICC public register.",
            "<b>Community advice last.</b> Helpful for day-to-day settlement, but verify anything about "
            "status, deadlines or eligibility before acting.",
            "<b>Keep a dated record.</b> Save the page or email you relied on, with the date you read it.",
        ]),
        ("h2", "First-month checklist"),
        ("bullets", [
            "Confirm your status documents and expiry dates; diarise renewals early.",
            "Check whether your work or study conditions match what you actually plan to do.",
            "Set up a file for immigration correspondence — never rely only on a phone photo.",
            "Verify any agent or representative before paying a fee.",
            "Learn which decisions can be appealed or reconsidered and what the deadlines are.",
        ]),
        ("h2", "Red flags"),
        ("bullets", [
            "A promise of a guaranteed result.",
            "Pressure to pay immediately or to hand over original documents permanently.",
            "Advice that cannot be tied to a named government source.",
            "A representative who is not on the CICC register and is not a lawyer or notary.",
        ]),
        ("h2", "About this guide"),
        ("p", "Prepared by Commonwealth Migration Group Inc., based in Brampton, Ontario. General "
              "information only — not legal advice. Confirm current requirements with IRCC."),
        ("p", LINK.format(u=SITE, t="commonwealthmigration.ca")),
    ],
)

print("done")
