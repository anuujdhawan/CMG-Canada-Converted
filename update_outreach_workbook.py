from copy import copy
from datetime import date
from pathlib import Path

from openpyxl import load_workbook

path = Path("outputs/backlink-outreach-progress-2026-09-23.xlsx")
wb = load_workbook(path)
ws = wb["Submission Log"]
headers = [c.value for c in ws[1]]
rows = [tuple(c.value for c in row) for row in ws.iter_rows(min_row=2)]
existing_keys = {(r[0], r[1], r[2], r[3]) for r in rows}

def append_if_missing(values):
    key = (values[0], values[1], values[2], values[3])
    if key in existing_keys:
        return
    r = ws.max_row + 1
    for i, value in enumerate(values, start=1):
        cell = ws.cell(r, i, value)
        if r > 2:
            src = ws.cell(r - 1, i)
            if src.has_style:
                cell._style = copy(src._style)
            if src.number_format:
                cell.number_format = src.number_format
    ws.row_dimensions[r].height = ws.row_dimensions[r - 1].height
    existing_keys.add(key)

append_if_missing((
    "CIHE", "https://cihe.ca", "https://cihe.ca/telling-canadas-stories/",
    "Mary Ann Shadd Cary and the Work of Building Canada", "",
    date(2026, 9, 23), "blocked", "https://cihe.ca/telling-canadas-stories/",
    "No backlink submitted. The form's Written Post Upload validator rejected DOCX, PDF, and TXT files; user chose to move on.", False,
))
append_if_missing((
    "TravelPulse Canada", "https://www.travelpulse.ca", "https://www.travelpulse.ca/write-for-us",
    "The questions travel advisors should ask when clients plan family visits to Canada",
    "https://commonwealthmigration.ca/visit/visitor-visa-trv-standalone-page", date(2026, 9, 24),
    "researched", "https://www.travelpulse.ca/write-for-us",
    "Current TravelPulse Canada pitch guidance accepts original, timely travel-trade stories and requires a headline, summary, reporting sources, and why-now hook; it rejects advertorials and PR-driven content. A tailored family-visit information pitch was prepared in Gmail with CMG affiliation and the contextual visitor-visa destination disclosed; it remains unsent and no public article or backlink exists.", False,
))
append_if_missing((
    "The Local", "https://thelocal.to", "https://thelocal.to/tips/",
    "Not submitted — investigative tip channel, not an article-contributor route", "", date(2026, 9, 24),
    "unsuitable", "https://thelocal.to/tips/",
    "Current route is a secure anonymous tip channel for suspected illegal, unethical, harmful, or document-backed matters. It is not a general article-pitch route and is not appropriate for a CMG promotional backlink submission. No submission made and no backlink claimed.", False,
))
append_if_missing((
    "Situation237", "https://situation237.com", "https://situation237.com/contact",
    "How Cameroonian families can check Canadian immigration information before sharing it",
    "https://commonwealthmigration.ca/visit/visitor-visa-trv-and-super-visa-combined", date(2026, 9, 24),
    "researched", "https://situation237.com/contact",
    "Current Cameroon-focused publication accepts English or French story pitches through a public contact form, asks for who/what/where/when, and states a two-business-day response target. A diaspora-relevant, source-backed Canada-information pitch is queued for the form with CMG affiliation and the visitor/super-visa destination disclosed; it remains unsent and no public article or backlink exists.", False,
))
append_if_missing((
    "StudioX News", "https://studioxnews.ca", "https://studioxnews.ca/canada/share-your-story-studiox-news-multilingual-canada/",
    "How multilingual communities can verify Canadian immigration information before sharing it",
    "https://commonwealthmigration.ca/visit/visitor-visa-trv-and-super-visa-combined", date(2026, 9, 24),
    "researched", "https://studioxnews.ca/canada/share-your-story-studiox-news-multilingual-canada/",
    "Current Canadian multilingual newsroom invites community stories and editorial submissions at editor@studioxnews.ca and says relevant submissions may be considered for coverage. A source-backed newcomer-information story is queued for Gmail with CMG affiliation and the visitor/super-visa destination disclosed; it remains unsent and no public article or backlink exists.", False,
))
append_if_missing((
    "The Bridge News", "https://thebridgenews.ca", "https://thebridgenews.ca/join-us/",
    "How newcomer information becomes a neighbourhood resource in Toronto’s Downtown East",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "researched", "https://thebridgenews.ca/join-us/",
    "Current Toronto Downtown East route invites story inquiries at editor@thebridgenews.ca, limits articles to 700 words, and says successful contributors are contacted within 1-2 weeks. A local newcomer-information pitch is queued for Gmail with CMG affiliation and the Express Entry destination disclosed; it remains unsent and no public article or backlink exists.", False,
))
append_if_missing((
    "TDot News", "https://tdotnews.com", "https://tdotnews.com/contact/",
    "The information handoff gap facing newcomers across the GTA",
    "https://commonwealthmigration.ca/visit/visitor-visa-trv-standalone-page", date(2026, 9, 23),
    "researched", "https://tdotnews.com/contact/",
    "Current independent Toronto/GTA newsroom accepts pitches by email with PITCH in the subject line and directs contributors to its current writing guidance. A factual GTA newcomer-information pitch is queued for Gmail with CMG affiliation and the visitor-visa destination disclosed; it remains unsent and no public article or backlink exists.", False,
))
append_if_missing((
    "Spacing", "https://spacing.ca", "https://spacing.ca/contribute/",
    "How newcomer wayfinding shapes access to public space in Toronto",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "researched", "https://spacing.ca/contribute/",
    "Current contributor guidance welcomes Toronto/GTA issue pitches about public space and lists pitch@spacing.ca. A Toronto-centred, non-promotional newcomer-wayfinding pitch is queued for Gmail with CMG affiliation and the Express Entry destination disclosed; it remains unsent and no public article or backlink exists.", False,
))
append_if_missing((
    "ToVancouver", "https://tovancouver.com", "https://tovancouver.com/write-for-us",
    "A Newcomer's First Rainy Season in Vancouver: A Practical Preparation Guide",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "mailto:admin@tovancouver.com",
    "Original Vancouver-specific article sent from seolaunchers@gmail.com. The route accepts relevant links and plain-text email submissions. No public article or backlink yet.", False,
))
append_if_missing((
    "Canooq", "https://www.canooq.ca", "https://www.canooq.ca/contact",
    "The Newcomer Paperwork Map: What to Organize First in Canada",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "https://www.canooq.ca/contact",
    "Direct no-CAPTCHA contact form returned: Thanks. Canooq received your message. Article suggestion was submitted under Other; no public article or backlink yet.", False,
))
append_if_missing((
    "Relo.AI", "https://relo.ai", "https://relo.ai/write-for-us/",
    "How Canadian newcomers can evaluate settlement costs before choosing a city", "https://commonwealthmigration.ca/",
    date(2026, 9, 23), "submitted/pending", "https://relo.ai/write-for-us/",
    "Direct pitch form displayed: Your pitch was successfully submitted. Submitted as Relocation Professional with the CMG site as portfolio. Relo.AI charges for commercial or brand/resource links in article body; no paid placement requested and no article/backlink yet.", False,
))
append_if_missing((
    "Super Packers Movers", "https://superpackersmovers.com", "https://superpackersmovers.com/write-for-us/",
    "Moving from India to Canada: a practical household relocation checklist",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Guest article proposal: moving from India to Canada",
    "Pitch sent to info@digiintern.com from seolaunchers@gmail.com. Current policy allows one relevant backlink per post; full article awaits editorial response. No public article or backlink yet.", False,
))
append_if_missing((
    "Moving2Canada", "https://moving2canada.com", "https://moving2canada.com/about-us/become-our-partner/share-your-experience/",
    "A newcomer's first 30 days in Canada: a practical settlement checklist", "https://commonwealthmigration.ca/immigrate/express-entry",
    date(2026, 9, 23), "submitted/pending", "mailto:editor@moving2canada.com",
    "Tailored pitch sent from seolaunchers@gmail.com. Route allows 1-2 branded links in contributor bio; no public article or backlink yet.", False,
))
append_if_missing((
    "LapaStory", "https://lapastory.com", "https://www.lapastory.com/guest-posting-canada/",
    "The First 30 Days in Canada: A Practical Newcomer Planning Guide",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Guest Post Submission - The First 30 Days in Canada",
    "Original Canada-focused article sent to info@lapastory.com from seolaunchers@gmail.com. Submission rules allow up to two relevant external links; no public article or backlink yet.", False,
))
append_if_missing((
    "LendingArch", "https://lendingarch.ca", "https://lendingarch.ca/blog/lendingarch-we-invite-you-to-write-for-us/",
    "How Newcomers Can Start Building Credit in Canada Without Rushing Into Debt",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Article Draft - How Newcomers Can Start Building Credit in Canada",
    "Original 500-2000 word Canada-focused financial draft sent to hello@lendingarch.ca from seolaunchers@gmail.com. Contributor page explicitly allows a backlink to the author's site; no public article or backlink yet.", False,
))
append_if_missing((
    "Orbus Canada", "https://orbus.ca", "https://orbus.ca/write-for-us/",
    "A Practical Job-Search Plan for Newcomers to Canada",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "blocked", "https://orbus.ca/write-for-us/",
    "Form accepted the article after trimming it below the 5000-character limit, but the final submission required security verification. No CAPTCHA/security verification was bypassed; no submission receipt or public backlink.", False,
))
append_if_missing((
    "CoverMove", "https://covermove.com", "https://covermove.com/write-for-us/",
    "How to Organize an International Move When Every Detail Feels New",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Guest Article Submission - How to Organize an International Move",
    "Original relocation article sent to lesley.official47@gmail.com from seolaunchers@gmail.com. Current guidelines allow one relevant backlink; Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "The Relocation Ecosystem", "https://relocationecosystem.com", "https://relocationecosystem.com/contribute/",
    "The Information Handoff Gap in International Relocation",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Perspective pitch - The Information Handoff Gap in International Relocation",
    "Original non-promotional pitch sent to contribute@relocationecosystem.com from seolaunchers@gmail.com. Company affiliation and the CMG resource were disclosed; publication and backlink are not guaranteed. No public article or backlink yet.", False,
))
append_if_missing((
    "All Around Moving", "https://www.allaroundmoving.com", "https://www.allaroundmoving.com/write-for-us/",
    "How to Organize an International Move When Every Detail Feels New",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Guest Post Submission - How to Organize an International Move",
    "Original Word article sent to info@allaroundmoving.com from seolaunchers@gmail.com. Current guidelines allow one relevant website link and require an original 850-1000+ word article. Gmail displayed Message sent; no public article or backlink yet. No rights-cleared photo was attached; this was disclosed in the email.", False,
))
append_if_missing((
    "RealEstaterr", "https://realestaterr.com", "https://realestaterr.com/write-for-us/",
    "Renting in Canada Before Permanent Housing: A Newcomer's Decision Checklist",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "blocked", "https://realestaterr.com/contact/",
    "Contributor page requires contacting the site before sending a full article. Contact form accepted the pitch fields but the final step exposed a reCAPTCHA iframe and showed no success receipt. No CAPTCHA was solved or bypassed; no public article or backlink.", False,
))
append_if_missing((
    "Khabar Bandhan", "https://khabarbandhan.in", "https://khabarbandhan.in/write-for-us/",
    "How to Verify Canadian Immigration Information Before You Apply",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Write For Us — Anooj Dhawan — How to Verify Canadian Immigration Information Before You Apply",
    "Original 400+ word education/career article sent to khabar.bandhan@gmail.com from seolaunchers@gmail.com. Current guidelines allow one relevant backlink and request a 50-100 word bio; Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Knowledge Border", "https://knowledgeborder.com", "https://knowledgeborder.com/write-for-us/",
    "A Newcomer's Source-Checking Toolkit for Canadian Immigration and Jobs",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Guest Post Submission – A Newcomer’s Source-Checking Toolkit for Canadian Immigration and Jobs",
    "Original 800+ word immigration/jobs article sent to info@knowledgeborder.com from seolaunchers@gmail.com. Current guidelines request 800-1500 words, author bio, and relevant links; Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Bravo Immigration", "https://bravoimmigration.com", "https://bravoimmigration.com/write-for-us/",
    "Not submitted — route unavailable",
    "", date(2026, 9, 23),
    "not suitable/inactive", "https://bravoimmigration.com/write-for-us/",
    "The current contributor page was found in search, but direct access returned Cloudflare Error 523 (origin unreachable). No email was sent and no backlink is claimed.", False,
))
append_if_missing((
    "BetterPlace Immigration", "https://www.betterplaceimmigration.com", "https://www.betterplaceimmigration.com/write-for-us/",
    "A Newcomer's First 90 Days After Canadian Immigration Approval",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Feature Submission: A Newcomer’s First 90 Days After Canadian Immigration Approval",
    "Original Canadian immigration feature sent to info@betterplaceimmigration.com from seolaunchers@gmail.com. Current page welcomes well-researched Canadian immigration features and expert viewpoints; Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "The Muslim Vibe", "https://themuslimvibe.com", "https://themuslimvibe.com/write",
    "Building a Trusted Information Network as a Muslim Newcomer in Canada",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Article Submission — Building a Trusted Information Network as a Muslim Newcomer in Canada",
    "Original 1000+ word community/immigration article emailed to editor@themuslimvibe.com from seolaunchers@gmail.com after the page provided a direct email fallback. Current guidelines request original 1000-word articles and welcome hyperlinks; Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "IndoCanadians", "https://indocanadians.ca", "https://indocanadians.ca/submit",
    "Not submitted — required assets and security check",
    "", date(2026, 9, 23),
    "blocked", "https://indocanadians.ca/submit",
    "Live form requires 2-3 rights-cleared photos and a visible security-check answer before continuing. No suitable licensed photos were available and no verification step was bypassed; no article or backlink claimed.", False,
))
append_if_missing((
    "Canada Careers Conversation", "https://canadacareersconversation.com", "https://canadacareersconversation.com/submit-content",
    "Not submitted — route did not render",
    "", date(2026, 9, 23),
    "not suitable/inactive", "https://canadacareersconversation.com/submit-content",
    "The current submission URL returned a blank page in the live browser and no usable form or contact route was exposed. No submission made and no backlink claimed.", False,
))
append_if_missing((
    "Muslim Link", "https://muslimlink.ca", "https://muslimlink.ca/write-for-us",
    "Building a Reliable Immigration Information Plan for Muslim Newcomers in Canada",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Contributor Pitch — Practical Immigration Information for Muslim Newcomers in Canada",
    "Tailored pitch sent to write@muslimlink.ca from seolaunchers@gmail.com. Current guidelines explicitly allow up to two do-follow links but require a pitch before a 1,500+ word draft and 3+ images; Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Today in Canada", "https://todayincanada.ca", "https://todayincanada.ca/contact/",
    "A Practical First 90 Days for Newcomers to Canada",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "blocked", "https://todayincanada.ca/contact/",
    "Current guidelines accept original 800-1200-word Canada articles through the online form. Name, email, subject, and a tailored article pitch were prefilled, but the form exposes a reCAPTCHA checkbox. No CAPTCHA was solved or bypassed and the form was not submitted.", False,
))
append_if_missing((
    "LMIC-CIMT", "https://lmic-cimt.ca", "https://lmic-cimt.ca/blog/guest-blog-submission-guidelines/",
    "From Immigration Approval to Employment: How Newcomers Can Use Labour Market Information Before Arrival",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Article Idea — Using Labour Market Information Before Moving to Canada",
    "Original tailored idea pitch sent to communications@lmic-cimt.ca from seolaunchers@gmail.com. Current guidelines invite optional idea pitches before a 1,000-1,500-word Word draft and request a bio/photo; Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "S EduWorld", "https://seduworld.com", "https://seduworld.com/write-for-us/",
    "How Newcomers Can Verify Canada Immigration Information Before Applying",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Guest Post Pitch — How Newcomers Can Verify Canada Immigration Information Before Applying",
    "Original tailored pitch sent to info@seduworld.com from seolaunchers@gmail.com. Current guidelines cover Canada Immigration and allow one do-follow link after pitch approval; Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Jaunting", "https://jaunting.com", "https://jaunting.com/write-for-us/",
    "Planning an Exploratory Trip Before Moving to Canada",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Article Idea — Planning an Exploratory Trip Before Moving to Canada",
    "Original travel/relocation idea pitch sent to paul@pence.com from seolaunchers@gmail.com. Current guidelines invite planned-article pitches and permit For More Information links; a full draft would require rights-cleared photos. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "The Newcomer", "https://thenewcomer.ca", "https://thenewcomer.ca/submissions/",
    "How Newcomers Can Check Immigration Information Before They Act",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Submission inquiry — a clear information checklist for Canadian newcomers",
    "Tailored availability inquiry sent to thenewcomermagazine@gmail.com from seolaunchers@gmail.com. The publication is highly relevant, but the public submissions page still displays a Fall 2024 call; full article not sent until current availability is confirmed. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "TravelWarm", "https://travelwarm.com", "https://travelwarm.com/write-for-us/",
    "Planning a Canadian Exploratory Trip Before Applying for Permanent Residence",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending",
    "Gmail Sent mail: Guest article submission: Planning a Canadian exploratory trip before applying for permanent residence",
    "Original tailored travel/visa article sent to miskaeducation@gmail.com from seolaunchers@gmail.com. Current guidelines accept 800-1500-word travel/visa articles and state that two dofollow links are allowed; Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "ImmoMulti", "https://www.immomulti.com", "https://www.immomulti.com/en/write-for-us-real-estate-guest-posting",
    "From immigration planning to housing readiness: a newcomer checklist before choosing a Canadian rental market",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "https://www.immomulti.com/en/write-for-us-real-estate-guest-posting#pitch-form",
    "Original tailored proposal submitted through the live pitch form as Anooj Dhawan using seolaunchers@gmail.com. The site requires editorial approval before a full article and describes a reciprocal content exchange; the form displayed Proposal sent and Thank you. No public article or backlink yet.", False,
))
append_if_missing((
    "The Offers Guy", "https://theoffersguy.com", "https://theoffersguy.com/write-for-us/",
    "How to Plan a Practical First Trip to Canada",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending",
    "Gmail Sent mail: Article submission: How to Plan a Practical First Trip to Canada",
    "Original tailored Canada travel article sent to hello@theoffersguy.com from seolaunchers@gmail.com as Anooj Dhawan. Current guidelines state there is no submission fee and accept original travel-planning articles by email; Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "New Canadian Media", "https://newcanadianmedia.ca", "https://newcanadianmedia.ca/wp-content/uploads/2021/05/Guidelines.pdf",
    "Before You Act on Immigration Advice: A Newcomer’s Verification Checklist",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Pitch: A newcomer checklist for verifying Canadian immigration information",
    "Original transparent pitch sent to admin@newcanadianmedia.ca from seolaunchers@gmail.com. Current contributor guidance requests immigrant-focused, source-backed pitches of about 800 words; the email disclosed the CMG affiliation and asked whether one contextual link is acceptable. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Ottawa Business Journal", "https://obj.ca", "https://obj.ca/submit/blog/",
    "A Practical Information Checklist for Ottawa Employers Supporting Newcomer Talent",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "unsuitable", "https://obj.ca/submit/blog/",
    "Current page describes the Guest Blog as a marketing feature for Ottawa-based experts and presents payment and credit-card fields in the submission flow. This route was not submitted because the goal excludes paid placements.", False,
))
append_if_missing((
    "99List", "https://www.99list.ca", "https://www.99list.ca/submit-guest-post-for-property-car-jobs.html",
    "Renting a Home in Canada Before You Move: A Newcomer’s Real-Estate Checklist",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: guest post - Renting a Home in Canada Before You Move: A Newcomer’s Real-Estate Checklist",
    "Original 800+ word real-estate article sent to 99listcanada@gmail.com from seolaunchers@gmail.com as Anooj Dhawan. Current rules accept free English real-estate articles by email and allow quality contextual links; Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Here Magazine", "https://www.heremagazine.ca", "https://www.heremagazine.ca/contact/contact-us/",
    "The Five-Question Source Check Every Newcomer Can Use Before Acting on Immigration Advice",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Story pitch: A source-check guide for newcomers navigating immigration advice",
    "Original transparent pitch sent to ideas@heremagazine.ca from seolaunchers@gmail.com. Current contact page identifies a submissions address and the publication welcomes newcomer and immigrant writers; the pitch disclosed the CMG affiliation and asked whether one contextual link is acceptable. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "BestStartup Canada", "https://beststartup.ca", "https://beststartup.ca/contributing-articles/",
    "How Immigrant Founders Can Build a Practical First-Year Operating Plan in Canada",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "unsuitable", "https://beststartup.ca/contributing-articles/",
    "Current contributor rules say a small processing fee may apply and that business-submitted posts receive a sponsored-post banner. No submission was made because the goal excludes paid placements and sponsored link placement.", False,
))
append_if_missing((
    "Red Pepper", "https://www.redpepper.org.uk", "https://www.redpepper.org.uk/get-involved/write-for-us/",
    "How migration policy debates shape newcomers’ access to trustworthy information",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "unsuitable", "https://www.redpepper.org.uk/get-involved/write-for-us/",
    "Current guidelines require a short pitch and explicitly state that Red Pepper does not publish articles generated, co-authored or aided by AI. No pitch was submitted because the available draft workflow cannot truthfully meet that requirement.", False,
))
append_if_missing((
    "The Immigrant Stories", "https://theimmigrantstories.com", "https://theimmigrantstories.com/write-for-us/",
    "A newcomer’s practical guide to checking immigration information before acting",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "unsuitable", "https://theimmigrantstories.com/write-for-us/",
    "Current rules require a genuine first-person immigration experience and explicitly reject promotion of paid immigration consultancy services. No submission was made because a fictional or fabricated personal story would not be appropriate.", False,
))
append_if_missing((
    "MigrantIQ", "https://migrantiq.com", "https://migrantiq.com/write-for-us/",
    "How newcomers can verify Canadian immigration information before acting",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "unsuitable", "https://migrantiq.com/write-for-us/",
    "Current guidelines require a 1,500+ word draft, Google Docs access, original images, and reject AI-only drafts. Their link policy names personal blogs/social profiles plus MigrantIQ or official sources, not a commercial immigration-service backlink. No submission was made because the requested backlink would not fit the stated rules.", False,
))
append_if_missing((
    "PeopleTalk Online", "https://peopletalkonline.ca", "https://peopletalkonline.ca/submit-a-story/",
    "A Practical Guide to Hiring and Onboarding Skilled Newcomers in Canada",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "blocked", "https://peopletalkonline.ca/submit-a-story/",
    "Newcomer-employment pitch fields were filled with transparent affiliation details and the form was submitted twice. The live form rejected the authorized seolaunchers@gmail.com address with “Please enter a valid email address.” No CAPTCHA was bypassed and no submission receipt was produced.", False,
))
append_if_missing((
    "Toronto Times", "https://totimes.ca", "https://totimes.ca/write-for-us/",
    "The First Toronto Housing Questions Newcomers Should Ask Before Signing a Lease",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Pitch: The first Toronto housing questions newcomers should ask before signing a lease",
    "Original Toronto-focused pitch sent to editor@totimes.ca from seolaunchers@gmail.com. Current guidelines request pitches only, require a strong Toronto angle, and invite local sources; the email disclosed the CMG affiliation and asked whether one contextual informational link is acceptable. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Fireside Publishing House", "https://firesidepublishinghouse.ca", "https://firesidepublishinghouse.ca/contribute.html",
    "A newcomer’s first year building community in Kawartha Lakes",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "unsuitable", "https://firesidepublishinghouse.ca/contribute.html",
    "Current contribution rules require a genuine connection to Kawartha Lakes and locally rooted reporting or lived experience. That connection is not established for this submission, so no pitch was sent.", False,
))
append_if_missing((
    "South Asian Herald", "https://southasianherald.com", "https://southasianherald.com/advertorial-submission-guidelines/",
    "A practical Canada immigration information checklist for South Asian families",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "unsuitable", "https://southasianherald.com/advertorial-submission-guidelines/",
    "Current guidelines identify business/service submissions as paid advertorials, with publication-ready rates starting at $750. No submission was made because the goal excludes paid placements.", False,
))
append_if_missing((
    "BizzQuébec", "https://bizzquebec.com", "https://bizzquebec.com/en/write-for-us",
    "What Quebec small businesses should know before hiring newcomer founders and professionals",
    "https://commonwealthmigration.ca/", date(2026, 9, 23),
    "submitted/pending", "https://bizzquebec.com/en/write-for-us",
    "Original tailored pitch submitted through the live BizzQuébec form as Anooj Dhawan using seolaunchers@gmail.com. Current guidelines accept 800-2,000-word Quebec small-business articles and permit one site link in the author bio; the page confirmed: “Thank you — your pitch is in” and promised a reply within seven business days. No public article or backlink yet.", False,
))
append_if_missing((
    "LawBhoomi", "https://lawbhoomi.com", "https://lawbhoomi.com/write-for-us-immigration/",
    "How Newcomers Can Build a Reliable Canadian Immigration Information Plan",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Immigration article submission: How Newcomers Can Build a Reliable Canadian Immigration Information Plan",
    "Original approximately 1,100-word immigration article sent as a DOCX to lawbhoomi@gmail.com from seolaunchers@gmail.com. Current guidelines accept 800-1,500-word original articles, allow one relevant in-body link, and request Word-compatible format; Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Canadian Immigration Lawyers Association (CILA)", "https://cila.co", "https://cila.co/write/",
    "How Newcomers Can Build a Reliable Canadian Immigration Information Plan",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "unsuitable", "https://cila.co/write/",
    "CILA's current contributor page says guest articles are welcomed from members and invites non-members to become members before writing. No membership was established, so no submission was made and no attempt was logged as submitted.", False,
))
append_if_missing((
    "Policy Options", "https://policyoptions.irpp.org", "https://policyoptions.irpp.org/about/article-submission/",
    "Canada’s Immigration Information System Needs a Public-Interest Upgrade",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Article submission: Canada’s Immigration Information System Needs a Public-Interest Upgrade",
    "Original approximately 900-word immigration-policy op-ed sent as a Word document to policyoptions@irpp.org from seolaunchers@gmail.com. The article follows the current 750-1,200-word guidance, uses linked sources, includes transparent Commonwealth Migration Group affiliation and an AI-use disclosure, and contains one contextual CMG resource link. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "The Migrationist", "https://themigrationist.net", "https://themigrationist.net/contributors/become-a-contributor/",
    "The Information Gap in Migration Policy: Why Clear Public Guidance Is a Settlement Tool",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Guest contribution proposal: The information gap in migration policy",
    "Original tailored guest-contribution proposal sent to themigrationist.net@gmail.com from seolaunchers@gmail.com. The live contributor page requests a narrow topic, brief bio, previous writing context, citations/links, and rejects how-to or individualized immigration-advice articles. The pitch proposed a 1,100-1,300-word policy/public-discourse essay, disclosed Commonwealth Migration Group affiliation, and asked whether one contextual resource link is acceptable. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Canadian Internet Registration Authority (CIRA)", "https://www.cira.ca", "https://www.cira.ca/en/?p=41678",
    "Building Trustworthy Canadian Websites for Newcomers: Five Practical Signals That Matter",
    "https://commonwealthmigration.ca/", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Contributor pitch: Building trustworthy Canadian websites for newcomers",
    "Original tailored pitch sent to spencer.callaghan@cira.ca from seolaunchers@gmail.com. Current CIRA guidelines accept original 500-1,200-word Canadian-internet articles, require a Canadian focus and relevant author expertise, and explicitly allow/encourage relevant .CA website links while rejecting affiliate/skim links. The pitch proposed a distinct newcomer-facing website trust article, disclosed Commonwealth Migration Group affiliation, and offered one contextual link. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "CIC News", "https://www.cicnews.com", "https://www.cicnews.com/guest.html",
    "The Information Gap in Canadian Immigration Policy: Why Clear Public Guidance Is a Settlement Tool",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: OPINION PIECE SUBMISSION: The information gap in Canadian immigration policy",
    "Original tailored analysis/opinion pitch sent to derek@canadavisa.com from seolaunchers@gmail.com. Current CIC News guidance accepts immigration analysis/opinion, requires factual sourcing and usefulness to newcomers, and emphasizes editorial integrity. The pitch disclosed Commonwealth Migration Group affiliation and asked whether one contextual link would be acceptable rather than assuming it. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Canadian International Council — Signal", "https://thecic.org", "https://thecic.org/signal/submission-guidelines/",
    "Immigration Information Is Part of Canada’s Global Policy Infrastructure",
    "https://commonwealthmigration.ca/", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Signal pitch: Immigration information as part of Canada’s global policy infrastructure",
    "Original tailored analytical pitch sent to opencanada@thecic.org from seolaunchers@gmail.com. Current Signal guidelines accept 700-1,200-word analysis on international relations/global trends, request full contact details and a short bio, encourage hyperlinks, and allow consideration of cross-publication with institutional or personal websites. The pitch disclosed Commonwealth Migration Group affiliation and asked whether a contextual link would fit. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "rabble.ca", "https://rabble.ca", "https://rabble.ca/about/submit-a-story/",
    "Newcomers need policy communication they can actually use",
    "https://commonwealthmigration.ca/", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Opinion pitch: Newcomers need policy communication they can actually use",
    "Original under-200-word opinion pitch sent to editor@rabble.ca from seolaunchers@gmail.com. Current rabble.ca guidance welcomes pitches on Canadian politics, equality rights, labour activism and social change, requests a concise focus/relevance/author-history explanation, and accepts new writers. The pitch disclosed Commonwealth Migration Group affiliation and explicitly stated that no commercial link would be included unless editorially appropriate. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "The Resolve", "https://theresolve.ca", "https://theresolve.ca/pitch-the-resolve/",
    "Newcomers need policy communication they can actually use",
    "https://commonwealthmigration.ca/", date(2026, 9, 23),
    "unsuitable", "https://theresolve.ca/pitch-the-resolve/",
    "Current form requires a CAPTCHA, address, pronouns, community-positioning explanation and writing samples. The outlet centres Black, Indigenous and racialized voices and stories; that specific community connection is not established for this submission. No form was submitted and no CAPTCHA was bypassed.", False,
))
append_if_missing((
    "The Tyee", "https://thetyee.ca", "https://www.thetyee.ca/submissions/",
    "Newcomers need policy communication they can actually use",
    "https://commonwealthmigration.ca/", date(2026, 9, 23),
    "unsuitable", "https://www.thetyee.ca/submissions/",
    "Current submissions guidance expressly says The Tyee does not publish journalism written or generated by AI. No pitch was sent because the prepared material used AI assistance and the route requires authentic non-AI writing.", False,
))
append_if_missing((
    "Canadian Dimension", "https://canadiandimension.com", "https://canadiandimension.com/about/submissions",
    "Newcomers need policy communication they can actually use",
    "https://commonwealthmigration.ca/", date(2026, 9, 23),
    "unsuitable", "https://canadiandimension.com/about/submissions",
    "Current submission policy expressly rejects written work composed in whole or in part by large language models. No article was sent because the prepared material used AI assistance.", False,
))
append_if_missing((
    "CanConnect", "https://canconnect.ca", "https://canconnect.ca/get-involved",
    "How Newcomer-Facing Websites Can Make Canadian Immigration Information Easier to Verify",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "https://canconnect.ca/get-involved",
    "Contribution interest submitted through the live no-CAPTCHA form as Anooj Dhawan using seolaunchers@gmail.com. The confirmation states the contribution interest was received and CanConnect will be in touch within a few days. CMG affiliation and the possible contextual link were disclosed; no public article or backlink yet.", False,
))
append_if_missing((
    "VanCityGuide", "https://vancityguide.ca", "https://vancityguide.ca/contact",
    "The Five-Question Source Check Every Newcomer Can Use Before Acting on Immigration Advice",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Story idea: making newcomer immigration information easier to verify",
    "Original, fact-checkable story idea emailed to hello@vancityguide.ca from seolaunchers@gmail.com. The current contact page accepts story ideas, requires independent verification, and says newcomer-guide content is not a paid-partner route. CMG affiliation and the non-guaranteed-link approach were disclosed; Gmail confirmed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Torch & Maple", "https://torchandmaple.ca", "https://torchandmaple.ca/write-with-us",
    "Not submitted — advertised writing route is inactive",
    "", date(2026, 9, 23), "not suitable/inactive", "https://torchandmaple.ca/write-with-us",
    "The live site advertises a Write With Us route, but the linked URL currently returns a Page not found/404 response. No submission made and no backlink claimed.", False,
))
append_if_missing((
    "The McGill International Review", "https://mironline.ca", "https://mironline.ca/contribute/",
    "Immigration Information Is Part of Canada’s Global Policy Infrastructure",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Contribution: Immigration information as global policy infrastructure",
    "Original unpublished 800-1200-word policy article emailed to contributors.mir@irsam.ca from seolaunchers@gmail.com. Current guidelines accept one-time contributions from non-McGill professionals and prefer complete drafts; the CMG affiliation and contextual link were disclosed for editorial approval. Gmail confirmed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Settlement.Org", "https://settlement.org", "https://settlement.org/outreach/",
    "Not submitted — partner eligibility not established", "", date(2026, 9, 23),
    "unsuitable", "https://settlement.org/outreach/",
    "Current partnership route requires an Ontario organization offering free services or programs to newcomers and evaluates content for non-promotional, unbiased use. CMG eligibility for that partner category was not established, so no submission was made.", False,
))
append_if_missing((
    "SettlementAtWork", "https://settlementatwork.org", "https://settlementatwork.org/en/submit-content/submission-guidelines",
    "Not submitted — commercial promotion excluded", "", date(2026, 9, 23),
    "unsuitable", "https://settlementatwork.org/en/submit-content/submission-guidelines",
    "Current guidelines require content for settlement workers/newcomers in Ontario and expressly exclude promotion of a particular for-profit company or service. No submission made and no backlink claimed.", False,
))
append_if_missing((
    "Zolo Homebase", "https://www.zolo.ca", "https://www.zolo.ca/blog/contribute-to-zolo",
    "Not submitted — embedded form unavailable and fees may apply", "", date(2026, 9, 23),
    "unsuitable", "https://www.zolo.ca/blog/contribute-to-zolo",
    "Current guidelines accept homeowner/renter topics through an embedded form and state that fees may apply. The live form was not exposed in the browser, and a free submission route could not be verified. No submission made and no backlink claimed.", False,
))
append_if_missing((
    "Local News", "https://local-news.ca", "https://local-news.ca/contribute/",
    "Not submitted — local-business promotion excluded", "", date(2026, 9, 23),
    "unsuitable", "https://local-news.ca/contribute/",
    "Current contribution rules accept 600-800-word articles and one website link, but expressly exclude content written for the benefit of a paid contractor/employee or defined to a writer’s company or clients. A CMG backlink submission would not fit that rule, so no article was sent.", False,
))
append_if_missing((
    "The Otter", "https://theotter.ca", "https://theotter.ca/contact/",
    "Not submitted — contributor eligibility not established", "", date(2026, 9, 23),
    "unsuitable", "https://theotter.ca/contact/",
    "Current submission rules are for post-secondary students worldwide or pieces written while the author was a student, and require long-form narrative journalism with reportable sources and scenes. That eligibility and reporting basis were not established, so no submission was made.", False,
))
append_if_missing((
    "This Magazine", "https://this.org", "https://this.org/contribute/",
    "Not submitted — residency and simultaneous-submission constraints", "", date(2026, 9, 23),
    "unsuitable", "https://this.org/contribute/",
    "Current guidelines accept queries only, publish Canadian residents, and do not accept queries currently under consideration elsewhere. The related relocation-policy concept is already under active editorial review and the author’s individual residency was not independently established, so no duplicate query was sent.", False,
))
append_if_missing((
    "GTA Weekly", "https://www.gtaweekly.ca", "https://www.gtaweekly.ca/contact/",
    "The newcomer information gap in Brampton",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Story pitch: the newcomer information gap in Brampton",
    "Original Brampton-focused editorial pitch sent to alwin.squire@gtaweekly.ca from seolaunchers@gmail.com. The current contact page invites community issue/story pitches and freelance contributors; CMG affiliation and the non-paid, non-promotional approach were disclosed. Gmail confirmed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "CanadianYardie", "https://canadianyardie.com", "https://canadianyardie.com/contact/",
    "Before You Forward It: A Diaspora Guide to Checking Canadian Immigration Information",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Story idea: how diaspora networks can verify Canadian immigration information",
    "Original diaspora-relevant editorial pitch sent to canadianyardie@gmail.com from seolaunchers@gmail.com. The current editorial route accepts news tips, stories, and media; its page emphasizes independent verification. CMG affiliation and the non-paid, non-promotional approach were disclosed. Gmail confirmed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "The Bramptonian", "https://thebramptonian.wordpress.com", "https://thebramptonian.wordpress.com/contact/",
    "Before You Forward It: How Newcomers Can Check Canadian Immigration Information",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "https://thebramptonian.wordpress.com/contact/?contact-form-id=97&contact-form-sent=751",
    "Original Brampton-focused story suggestion submitted through the live no-CAPTCHA contact form as Anooj Dhawan using seolaunchers@gmail.com. The page returned THANK YOU FOR YOUR RESPONSE and displayed the submitted fields. CMG affiliation and the non-paid, non-promotional approach were disclosed; no public article or backlink yet.", False,
))
append_if_missing((
    "Brampton News", "https://brampton-news.com", "https://brampton-news.com/contact-us/",
    "Not submitted — reCAPTCHA required", "", date(2026, 9, 23),
    "blocked", "https://brampton-news.com/contact-us/",
    "The live contact form exposes a reCAPTCHA iframe. No fields were submitted and no CAPTCHA was solved or bypassed; no article or backlink claimed.", False,
))
append_if_missing((
    "StudioX News", "https://studioxnews.ca", "https://studioxnews.ca/news-tips/",
    "How newcomer communities can verify Canadian immigration information",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Story tip: verifying Canadian immigration information in newcomer communities",
    "The live no-CAPTCHA tip form did not display a success receipt, so no form submission is claimed. The page explicitly provides news@studioxnews.ca for tips; the same original, transparent immigration/community tip was sent there from seolaunchers@gmail.com and Gmail confirmed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "905hub", "https://905hub.ca", "https://905hub.ca/",
    "Before You Sign the Lease: How to Verify Housing and Immigration Information",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Story tip for Mississauga newcomers: verifying housing and immigration information",
    "The current Mississauga-focused site accepts story tips at hello@905hub.ca and states a 24-hour response target. Its contact form did not display a receipt, so no form submission is claimed; the distinct Mississauga-specific pitch was sent directly by Gmail and Message sent was confirmed. CMG affiliation and the non-paid, non-promotional approach were disclosed. No public article or backlink yet.", False,
))
append_if_missing((
    "MPulse", "https://mpulse.ca", "https://mpulse.ca/about-mpulse/",
    "The First 90 Days in Mississauga: A Newcomer’s Practical Map of Services, Costs, and Questions",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Story idea: the first 90 days of settling into Mississauga",
    "Original Mississauga-focused community pitch sent to info@mpulse.ca from seolaunchers@gmail.com. The current publication invites local story, event, and community-issue submissions by email; CMG affiliation and the non-paid, non-promotional approach were disclosed. Gmail confirmed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "Outcome Canada", "https://outcomecanada.ca", "https://outcomecanada.ca/submit",
    "Making Canadian Immigration Information Auditable for Newcomer Decision-Makers",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "researched", "https://outcomecanada.ca/submit",
    "Current submission form accepts original, evidence-based Canadian policy analysis of 800-2,500 words, including immigration, and requires affiliation/conflict disclosure. A tailored article is prepared in the live form, but no submission has been made pending action-time confirmation; no public article or backlink yet.", False,
))
append_if_missing((
    "Vietnam Meets Canada", "https://www.vietfederation.ca", "https://www.vietfederation.ca/write-for-us/",
    "How Vietnamese newcomers can verify Canadian immigration updates before acting",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "researched", "https://www.vietfederation.ca/write-for-us/",
    "Current Write for Us page provides a direct form for original immigration/community contributions with name, email, subject, and message fields. The site has an active Coming to Canada section and recent immigration coverage. A Vietnamese-community-specific pitch is suitable, but no form submission has been made pending action-time confirmation; no public article or backlink yet.", False,
))
append_if_missing((
    "Immigrant Muse", "https://immigrantmuse.ca", "https://immigrantmuse.ca/contact-us/",
    "A practical source-checking guide for immigrants making Canadian settlement decisions",
    "https://commonwealthmigration.ca/immigrate/express-entry", date(2026, 9, 23),
    "researched", "https://immigrantmuse.ca/contact-us/",
    "Current immigrant-focused publication covers settlement, careers, finance, business, and current affairs and provides a dedicated editorial email at editor@immigrantmuse.ca. A tailored, non-promotional pitch is prepared, but no message has been sent yet; no public article or backlink.", False,
))
append_if_missing((
    "HerSide Magazine", "https://hersidemagazine.com", "https://hersidemagazine.com/",
    "How immigrant women can build a trustworthy first-year information network in Canada",
    "https://commonwealthmigration.ca/sponsor/family-sponsorship-overview-all-categories", date(2026, 9, 23),
    "researched", "https://hersidemagazine.com/",
    "Current Canadian diaspora and multicultural publication has active News, HerSuccess, HerPOV, lifestyle, and motherhood coverage and explicitly invites story or pitch submissions at editor@hersidemagazine.com. A tailored pitch using a distinct CMG family-sponsorship destination is suitable, but no message has been sent; no public article or backlink yet.", False,
))
append_if_missing((
    "Afri-CAN Magazine", "https://afri-can.ca", "https://afri-can.ca/contact-us/",
    "How African newcomers and students can verify Canadian study-permit information before acting",
    "https://commonwealthmigration.ca/work-and-study/canada-study-permit", date(2026, 9, 23),
    "researched", "https://afri-can.ca/contact-us/",
    "Current publication describes itself as a platform built by and for the African diaspora in Canada and lists editor@afri-can.ca for newsworthy stories and community achievements. A tailored, source-backed newcomer/study-permit pitch is relevant, but no message has been sent; no public article or backlink yet.", False,
))
append_if_missing((
    "Vision Newspaper", "https://visionnewspaper.ca", "https://visionnewspaper.ca/contact/",
    "What newcomers should know before choosing a provincial immigration pathway",
    "https://commonwealthmigration.ca/immigrate/provincial-nominee-program-all-provinces-consolidated", date(2026, 9, 23),
    "researched", "https://visionnewspaper.ca/contact/",
    "Current Canadian digital news publication covers Canadian, Caribbean, African, African-American, business, politics, arts, culture, and diaspora news and lists info@visionnewspaper.ca as a public contact. A tailored provincial-immigration explainer could fit its newcomer and diaspora audience, but no message has been sent; no public article or backlink yet.", False,
))
append_if_missing((
    "Diaspora Digital News", "https://diasporadigitalnews.com", "https://diasporadigitalnews.com/contact/",
    "How diaspora families can verify Canadian visitor-visa information before making travel plans",
    "https://commonwealthmigration.ca/visit/visitor-visa-trv-and-super-visa-combined", date(2026, 9, 23),
    "researched", "https://diasporadigitalnews.com/contact/",
    "Current publication identifies itself as a digital voice for the global diaspora and publicly invites stories and content by email at media@diasporadigitalnews.com. A tailored, source-backed visitor-visa explainer is relevant to diaspora readers, but no message has been sent; no public article or backlink yet.", False,
))
append_if_missing((
    "Open Canada", "https://opencanada.org", "https://opencanada.org/open-canada-author-writing-guide/",
    "When an immigration mistake becomes a credibility problem: understanding misrepresentation in Canadian applications",
    "https://commonwealthmigration.ca/inadmissibility-and-appeals/misrepresentation", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Pitch: When an immigration mistake becomes a credibility problem",
    "Tailored pitch sent to opencanada@thecic.org from seolaunchers@gmail.com as Anooj Dhawan. The email disclosed the CMG affiliation, proposed an original 1,000-2,500-word policy analysis, and requested editorial approval for one contextual link to the CMG misrepresentation page. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "rabble.ca", "https://rabble.ca", "https://rabble.ca/about/submit-a-story/",
    "Citizenship information as an equality issue: reducing avoidable barriers for newcomers",
    "https://commonwealthmigration.ca/citizenship/adult-grant-of-citizenship", date(2026, 9, 23),
    "researched", "https://rabble.ca/about/submit-a-story/",
    "Current pitch page welcomes writers and covers politics, equality rights, labour activism, and social change; it requests pitches of no more than 200 words at editor@rabble.ca and distinguishes news, long-form, and opinion. A transparent citizenship-policy pitch could fit, but no message has been sent; no public article or backlink yet.", False,
))
append_if_missing((
    "WestCoast Families Magazine", "https://westcoastfamilies.com", "https://westcoastfamilies.com/editorial/",
    "The newcomer family travel checklist: keeping PR documents current before leaving Canada",
    "https://commonwealthmigration.ca/citizenship/pr-card-renewal-standalone-page", date(2026, 9, 23),
    "researched", "https://westcoastfamilies.com/editorial/",
    "Current Canadian family and parenting magazine publishes eight issues per year and explicitly accepts story ideas and queries, with an editor-set deadline after assignment. A practical newcomer-family travel/document angle could fit its readership, but no message has been sent; no public article or backlink yet.", False,
))
append_if_missing((
    "Daily Hive", "https://dailyhive.com", "https://dailyhive.com/page/tips",
    "The first 90 days of finding work in Canada: a newcomer’s local guide",
    "https://commonwealthmigration.ca/work-and-study/canada-work-permit-overview", date(2026, 9, 23),
    "researched", "https://dailyhive.com/page/tips",
    "Current Daily Hive tips page is indexed as a story-idea submission route for its Canadian hyperlocal news platform. The route could fit a city-specific newcomer employment explainer, but live page inspection returned an access error, so no form submission or email is claimed and no access control was bypassed; no public article or backlink yet.", False,
))
append_if_missing((
    "Afro Diaspora Pulse", "https://afrodiasporapulse.com", "https://afrodiasporapulse.com/contact/",
    "Reliable information for diaspora communities supporting refugee claimants in Canada",
    "https://commonwealthmigration.ca/immigrate/refugee-travel-document", date(2026, 9, 23),
    "researched", "https://afrodiasporapulse.com/contact/",
    "Current Black-led media platform amplifies African and immigrant diaspora voices and welcomes news tips, story ideas, and community insights at newsdesk@afrodiasporapulse.com. A transparent, source-backed refugee-information story could fit its audience, but no message has been sent; no public article or backlink yet.", False,
))
append_if_missing((
    "Local Canadian News", "https://lcn.today", "https://lcn.today/contact-us/",
    "Citizenship documents and identity checks: a practical guide for newcomers in Canada",
    "https://commonwealthmigration.ca/citizenship/citizenship-certificate", date(2026, 9, 23),
    "researched", "https://lcn.today/contact-us/",
    "Current Canadian local-news site publicly invites people to submit a story or become a contributor at editorial@lcn.today and lists Toronto as its location. A practical newcomer citizenship-document explainer could fit its general Canadian audience, but no message has been sent; no public article or backlink yet.", False,
))
append_if_missing((
    "The Masthead News", "https://themastheadnews.ca", "https://themastheadnews.ca/contact-us/",
    "A short guide for newcomer families planning Canadian visits and reunions",
    "https://commonwealthmigration.ca/visit/visitor-visa-trv-standalone-page", date(2026, 9, 23),
    "researched", "https://themastheadnews.ca/contact-us/",
    "Current community-news site invites story content or letters to the editor up to 350 words at stories@themastheadnews.ca and identifies its purpose as connecting and strengthening the community. A concise newcomer-family visitor-visa explainer could fit, but no message has been sent; no public article or backlink yet.", False,
))
append_if_missing((
    "ITC News", "https://www.immigratetocanada.com", "https://www.immigratetocanada.com/about-us/",
    "How refugee claimants can distinguish official Canadian requirements from online immigration myths",
    "https://commonwealthmigration.ca/immigrate/in-canada-refugee-claim", date(2026, 9, 23),
    "researched", "https://www.immigratetocanada.com/about-us/",
    "Current site describes its writers as experienced in the Canadian immigration sector and provides an editorial-team contact. A source-backed refugee-information explainer is directly relevant, but no message has been sent; no public article or backlink yet.", False,
))
append_if_missing((
    "Spheres of Influence", "https://spheresofinfluence.ca", "https://spheresofinfluence.ca/guest-submissions/",
    "Family reunification policy and the human consequences of sponsorship delays",
    "https://commonwealthmigration.ca/sponsor/spousal-and-partner-sponsorship-overview", date(2026, 9, 23),
    "submitted/pending", "Gmail Sent mail: Pitch: Family reunification policy and the human cost of sponsorship delays",
    "Tailored pitch sent to editor@spheresofinfluence.ca from seolaunchers@gmail.com as Anooj Dhawan. The email disclosed the CMG affiliation, proposed an original 800-1,200-word policy analysis aligned with the publication's progressive/intersectional brief, and requested editorial approval for one contextual link to the CMG spousal-sponsorship overview. Gmail displayed Message sent. No public article or backlink yet.", False,
))
append_if_missing((
    "IRCC.com", "https://ircc.com", "https://ircc.com/masthead",
    "Medical inadmissibility in Canada: how applicants can separate current rules from online myths",
    "https://commonwealthmigration.ca/inadmissibility-and-appeals/medical-inadmissibility", date(2026, 9, 23),
    "researched", "https://ircc.com/masthead",
    "Current independent Canadian immigration-news site lists public contributor profiles and contact paths, including coverage of citizenship policy, Express Entry, study permits, and family sponsorship. A source-backed medical-inadmissibility explainer could fit its specialist audience, but no message has been sent; no public article or backlink yet.", False,
))
append_if_missing((
    "The Immigrant Stories", "https://theimmigrantstories.com", "https://theimmigrantstories.com/write-for-us/",
    "Not suitable — genuine first-person story and no paid-consultancy promotion",
    "", date(2026, 9, 23),
    "unsuitable", "https://theimmigrantstories.com/write-for-us/",
    "Current guidelines require a genuine first-person immigration experience and explicitly reject promotion of paid immigration consultancy services. No personal story was represented and no submission was made; no backlink claimed.", False,
))
append_if_missing((
    "Meridian Source", "https://meridiansource.ca", "https://meridiansource.ca/submit-your-story/",
    "How newcomers can find reliable local information after arriving in Canada",
    "https://commonwealthmigration.ca/visit/visitor-visa-trv-standalone-page", date(2026, 9, 23),
    "researched", "https://meridiansource.ca/submit-your-story/",
    "Current community publication invites readers to submit stories, events, photos, or video through a live form and states that submissions may be featured. A locally grounded newcomer-information story may fit, but the page does not promise external links or accept promotional copy. The form was inspected and prefilled with a disclosed, non-promotional draft; it remains unsent and no public article or backlink exists.", False,
))
append_if_missing((
    "Refugee Story Bank of Canada", "https://www.refugeestorybank.ca", "https://www.refugeestorybank.ca/shareyourstory",
    "Not submitted — requires an authentic refugee experience",
    "", date(2026, 9, 23),
    "unsuitable", "https://www.refugeestorybank.ca/shareyourstory",
    "Current route invites refugees to share their own stories for a research and public resource. An organizational immigration-information article would not meet the first-person eligibility and authenticity requirement; no submission made and no backlink claimed.", False,
))
append_if_missing((
    "The Diaspolitan Magazine", "https://diaspolitan.com", "https://diaspolitan.com/form/contribute-a-story",
    "Not submitted — Cloudflare Turnstile human verification",
    "", date(2026, 9, 23),
    "blocked", "https://diaspolitan.com/form/contribute-a-story",
    "Current editorial form welcomes original articles, research, commentary, and stories, but requires Cloudflare Turnstile security verification before submission. No human verification was bypassed and no submission or backlink was claimed.", False,
))
append_if_missing((
    "Sanj Talks", "https://sanjtalks.com", "https://sanjtalks.com/featured-article/",
    "Not submitted — route includes paid-interview packages",
    "", date(2026, 9, 23),
    "unsuitable", "https://sanjtalks.com/featured-article/",
    "Current featured-article route offers editorial story creation from supplied materials but the site separately advertises pay-for-interview packages and bartering options. Because the unpaid editorial status and external-link policy are unclear, no submission was made and no backlink claimed.", False,
))
append_if_missing((
    "Chinatown Storytelling Centre", "https://www.chinatownstorytellingcentre.org", "https://www.chinatownstorytellingcentre.org/submit-your-story/",
    "Not submitted — antispam challenge and culturally specific story requirement",
    "", date(2026, 9, 23),
    "blocked", "https://www.chinatownstorytellingcentre.org/submit-your-story/",
    "The indexed route requests a story connected to Vancouver's Chinatown or Chinese Canadian culture, requires an antispam arithmetic challenge, and asks for an image. No eligibility was assumed and no human verification was bypassed; no submission or backlink claimed.", False,
))
append_if_missing((
    "Christian Courier", "https://www.christiancourier.ca", "https://www.christiancourier.ca/write-for-us/",
    "Not submitted — AI and self-organization restrictions",
    "", date(2026, 9, 23),
    "unsuitable", "https://www.christiancourier.ca/write-for-us/",
    "Current guidelines prohibit AI-assisted writing or sentence editing and exclude articles supplied by authors reporting on their own organizations. A CMG-authored backlink article would not meet those conditions; no submission made and no backlink claimed.", False,
))
append_if_missing((
    "Black Canadian Creators", "https://blackcanadiancreators.ca", "https://blackcanadiancreators.ca/submit-your-story/",
    "Not submitted — no verified Black Canadian cultural fit",
    "", date(2026, 9, 23),
    "unsuitable", "https://blackcanadiancreators.ca/submit-your-story/",
    "Current guidelines focus on Black Canadian creator experiences, cultural commentary rooted in Black perspectives, and Black-led or culturally aligned work. No such personal or organizational connection was established, so no submission was made and no backlink claimed.", False,
))
append_if_missing((
    "Dromline", "https://dromline.ca", "https://dromline.ca/submissions/",
    "When health screening becomes an information barrier for newcomers",
    "https://commonwealthmigration.ca/inadmissibility-and-appeals/medical-inadmissibility", date(2026, 9, 23),
    "researched", "https://dromline.ca/submissions/",
    "Current Toronto-based, community-rooted magazine welcomes political analysis, local reporting, commentary, and resource writing from writers and organizers. It accepts either a 500-2,000-word completed piece or a 1-2 paragraph pitch at info@dromline.ca. A non-promotional newcomer-information explainer could fit, but no message has been sent and no public article or backlink exists.", False,
))
append_if_missing((
    "The Independent", "https://theindependent.ca", "https://theindependent.ca/submissions/",
    "What Atlantic newcomers need from immigration information after approval",
    "https://commonwealthmigration.ca/immigrate/provincial-nominee-program-all-provinces-consolidated", date(2026, 9, 23),
    "researched", "https://theindependent.ca/submissions/",
    "Current Newfoundland and Labrador publication invites concise pitches by email at pitches@theindependent.ca, accepts analysis and reported pieces, and publishes community-focused news and analysis. A clearly Atlantic, source-backed newcomer-information angle could fit, but no message has been sent and no public article or backlink exists.", False,
))
append_if_missing((
    "Pulse", "https://pulsenews.ca", "https://pulsenews.ca/submissions/",
    "How newcomers build trusted information networks in Toronto’s Downtown East",
    "https://commonwealthmigration.ca/work-and-study/canada-work-permit-overview", date(2026, 9, 23),
    "researched", "https://pulsenews.ca/submissions/",
    "Current publication invites diverse voices from Toronto’s Downtown East to submit stories, articles, photographs, artwork, and other work for possible print or website publication. A locally reported newcomer-work-information story could fit, but no message or form submission was made and no public article or backlink exists.", False,
))
append_if_missing((
    "Toronto Review", "https://thetorontoreview.ca", "https://thetorontoreview.ca/pitch/",
    "Citizenship paperwork and the lived meaning of belonging in Toronto",
    "https://commonwealthmigration.ca/citizenship/citizenship-certificate", date(2026, 9, 23),
    "researched", "https://thetorontoreview.ca/pitch/",
    "Current pitch guidance asks for a section-specific pitch before submission and welcomes accessible, rigorous writing by experts. A Toronto-centred essay on citizenship documentation and belonging could fit, but no message has been sent and no public article or backlink exists.", False,
))
append_if_missing((
    "The Media Co-op", "https://mediacoop.ca", "https://toronto.mediacoop.ca/contributors2021",
    "What refugee claimants need from community information networks",
    "https://commonwealthmigration.ca/immigrate/in-canada-refugee-claim", date(2026, 9, 23),
    "researched", "https://toronto.mediacoop.ca/contributors2021",
    "Current contributor guidance asks for a pitch to info@mediacoop.ca and centres grassroots Canadian journalism, housing, labour, anti-racism, and community struggles. A source-backed refugee-information story could fit if it centres ordinary people and community voices; no message has been sent and no public article or backlink exists.", False,
))
append_if_missing((
    "WTFTO.ca", "https://wtfto.ca", "https://wtfto.ca/submit/",
    "How newcomers find reliable public information across the GTA",
    "https://commonwealthmigration.ca/visit/visitor-visa-trv-standalone-page", date(2026, 9, 23),
    "researched", "https://wtfto.ca/submit/",
    "Current GTA submission form accepts story, opinion, and issue reports, asks for sources/evidence, and states that every submission is reviewed rather than published automatically. A factual newcomer-information story could fit, but no form submission was made and no public article or backlink exists.", False,
))
append_if_missing((
    "The Hub", "https://thehub.ca", "https://thehub.ca/hubguidelines/",
    "Not submitted — AI-generated writing prohibited",
    "", date(2026, 9, 23),
    "unsuitable", "https://thehub.ca/hubguidelines/",
    "Current opinion-submission guidelines accept timely policy commentary but explicitly state that The Hub does not accept AI-generated written submissions. No submission made and no backlink claimed.", False,
))
append_if_missing((
    "Toronto Business Journal", "https://tobj.ca", "https://tobj.ca/news/market_insider/2026/08/27/35355-call-for-submissions-share-your-toronto-stories-with-us.html",
    "Not submitted — press-release and promotional route",
    "", date(2026, 9, 23),
    "unsuitable", "https://tobj.ca/news/market_insider/2026/08/27/35355-call-for-submissions-share-your-toronto-stories-with-us.html",
    "Current call is for Toronto-focused press releases, business announcements, events, and brand or community promotion rather than independent editorial articles. No submission made and no backlink claimed.", False,
))

for row in range(2, ws.max_row + 1):
    if ws.cell(row, 1).value == "Canada Careers Conversation":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "not suitable/inactive"
        ws.cell(row, 8).value = "https://canadacareersconversation.com/submit-content"
        ws.cell(row, 9).value = "Rechecked the current live route after newer search evidence; the page still rendered blank with no usable form, fields, or confirmation path. No submission made and no backlink claimed."
        ws.cell(row, 10).value = False
        break

for row in range(2, ws.max_row + 1):
    if ws.cell(row, 1).value == "The Relocation Ecosystem":
        ws.cell(row, 4).value = "The Information Handoff Gap in International Relocation"
        ws.cell(row, 5).value = "https://commonwealthmigration.ca/immigrate/express-entry"
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "submitted/pending"
        ws.cell(row, 8).value = "Gmail Sent mail: Full draft: The Information Handoff Gap in International Relocation"
        ws.cell(row, 9).value = "Editor Scott Hampton requested the full editable draft after approving the outline. Original DOCX sent to mobility@relocationecosystem.com from seolaunchers@gmail.com; source links and check dates included, role accurately stated as content and outreach, and link disclosed for editorial review. Gmail confirmed Message sent. No public article or backlink yet."
        ws.cell(row, 10).value = False
        break

for row in range(2, ws.max_row + 1):
    site = ws.cell(row, 1).value
    if site == "Situation237":
        ws.cell(row, 6).value = date(2026, 9, 24)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://situation237.com/contact"
        ws.cell(row, 9).value = "The public no-login contact form was inspected and prefilled as Anooj Dhawan with seolaunchers@gmail.com, topic Story tip / news lead, and a transparent Cameroon-diaspora newcomer-information pitch containing the contextual CMG visitor/super-visa destination. The Send message control was left untouched; no submission receipt or public article/backlink exists."
        ws.cell(row, 10).value = False
    if site == "Daily Hive":
        ws.cell(row, 6).value = date(2026, 9, 24)
        ws.cell(row, 7).value = "blocked"
        ws.cell(row, 8).value = "https://dailyhive.com/page/tips"
        ws.cell(row, 9).value = "Current public tips route could not be inspected because the live page returned HTTP 403. No form submission or email is claimed and no access control was bypassed; no article or public backlink exists."
        ws.cell(row, 10).value = False
    if site == "New Canadian Media" and ws.cell(row, 3).value == "Pitch form rendered without form controls":
        ws.cell(row, 6).value = date(2026, 9, 24)
        ws.cell(row, 7).value = "blocked"
        ws.cell(row, 8).value = "https://newcanadianmedia.ca/pitch-form/"
        ws.cell(row, 9).value = "The current pitch page still displays submission instructions but no visible form controls or working submission path in the browser. No fields were submitted and no CAPTCHA was bypassed; the separate Gmail pitch already logged below remains the only submission record, with no public article or backlink yet."
        ws.cell(row, 10).value = False
    if site == "Outcome Canada":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "submitted/pending"
        ws.cell(row, 8).value = "https://outcomecanada.ca/submit"
        ws.cell(row, 9).value = "Tailored original policy article submitted through the live form as Anooj Dhawan using seolaunchers@gmail.com, with affiliation/conflict disclosure and a contextual CMG Express Entry link. The page displayed Submission received and said the editorial team will respond within 5 business days. No public article or backlink yet."
        ws.cell(row, 10).value = False
    elif site == "Vietnam Meets Canada":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "submitted/pending"
        ws.cell(row, 8).value = "https://www.vietfederation.ca/write-for-us/"
        ws.cell(row, 9).value = "Tailored Vietnamese-community newcomer pitch submitted through the live no-CAPTCHA form as Anooj Dhawan using seolaunchers@gmail.com, with affiliation disclosure and a contextual CMG Express Entry link. The page displayed Thanks for contacting us! We will be in touch with you shortly. No public article or backlink yet."
        ws.cell(row, 10).value = False
    elif site == "Immigrant Muse":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "submitted/pending"
        ws.cell(row, 8).value = "Gmail Sent mail: Pitch: A source-checking guide for immigrants making Canadian settlement decisions"
        ws.cell(row, 9).value = "Original tailored pitch sent to editor@immigrantmuse.ca from seolaunchers@gmail.com as Anooj Dhawan. The pitch disclosed the CMG affiliation, requested one contextual Express Entry link, and offered a full draft after angle approval. Gmail displayed Message sent. No public article or backlink yet."
        ws.cell(row, 10).value = False
    elif site == "HerSide Magazine":
        ws.cell(row, 4).value = "How immigrant women can build a trustworthy first-year information network in Canada"
        ws.cell(row, 5).value = "https://commonwealthmigration.ca/sponsor/family-sponsorship-overview-all-categories"
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://hersidemagazine.com/"
        ws.cell(row, 9).value = "Current Canadian diaspora and multicultural publication has active News, HerSuccess, HerPOV, lifestyle, and motherhood coverage and explicitly invites story or pitch submissions at editor@hersidemagazine.com. A tailored family-information pitch was prepared in Gmail with CMG affiliation and the family-sponsorship destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "Open Canada":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "submitted/pending"
        ws.cell(row, 8).value = "Gmail Sent mail: Pitch: When an immigration mistake becomes a credibility problem"
        ws.cell(row, 9).value = "Tailored pitch sent to opencanada@thecic.org from seolaunchers@gmail.com as Anooj Dhawan. The email disclosed the CMG affiliation, proposed an original 1,000-2,500-word policy analysis, and requested editorial approval for one contextual link to the CMG misrepresentation page. Gmail displayed Message sent. No public article or backlink yet."
        ws.cell(row, 10).value = False
    elif site == "Spheres of Influence":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "submitted/pending"
        ws.cell(row, 8).value = "Gmail Sent mail: Pitch: Family reunification policy and the human cost of sponsorship delays"
        ws.cell(row, 9).value = "Tailored pitch sent to editor@spheresofinfluence.ca from seolaunchers@gmail.com as Anooj Dhawan. The email disclosed the CMG affiliation, proposed an original 800-1,200-word policy analysis aligned with the publication's progressive/intersectional brief, and requested editorial approval for one contextual link to the CMG spousal-sponsorship overview. Gmail displayed Message sent. No public article or backlink yet."
        ws.cell(row, 10).value = False
    elif site == "Meridian Source":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://meridiansource.ca/submit-your-story/"
        ws.cell(row, 9).value = "Current community publication invites readers to submit stories, events, photos, or video through a live form and states that submissions may be featured. A locally grounded newcomer-information story may fit, but the page does not promise external links or accept promotional copy. The form was inspected and prefilled with a disclosed, non-promotional draft; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "Dromline":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://dromline.ca/submissions/"
        ws.cell(row, 9).value = "Current Toronto-based, community-rooted magazine welcomes political analysis, local reporting, commentary, and resource writing and accepts a short pitch or 500-2,000-word piece at info@dromline.ca. A tailored medical-information pitch was prepared in Gmail with CMG affiliation and the contextual destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "The Independent":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://theindependent.ca/submissions/"
        ws.cell(row, 9).value = "Current Newfoundland and Labrador publication invites concise pitches at pitches@theindependent.ca and accepts analysis and reported pieces. A tailored Atlantic newcomer-information pitch was prepared in Gmail with CMG affiliation and a provincial-nominee destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "Pulse":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://pulsenews.ca/submissions/"
        ws.cell(row, 9).value = "Current publication invites diverse voices from Toronto’s Downtown East to submit stories and articles for possible print or website publication. A tailored local newcomer-information pitch was prepared in Gmail with CMG affiliation and a work-permit destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "Toronto Review":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://thetorontoreview.ca/pitch/"
        ws.cell(row, 9).value = "Current pitch guidance requests a 200-300-word essay pitch before any full submission and lists essays@thetorontoreview.ca. A tailored Toronto-centred essay pitch was prepared in Gmail with CMG affiliation and a citizenship-certificate destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "The Media Co-op":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://toronto.mediacoop.ca/contributors2021"
        ws.cell(row, 9).value = "Current contributor guidance asks for a pitch to info@mediacoop.ca and centres grassroots Canadian journalism and community voices. A tailored refugee-information pitch was prepared in Gmail with CMG affiliation and the destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "WTFTO.ca":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://wtfto.ca/submit/"
        ws.cell(row, 9).value = "Current GTA form accepts story and opinion submissions with source notes and states that every submission is reviewed before publication. A factual newcomer-information opinion was prefilled with CMG affiliation and the contextual destination disclosed; the required consent checkbox was left untouched. The browser tab is now closed, so no submission occurred and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "rabble.ca":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://rabble.ca/about/submit-a-story/"
        ws.cell(row, 9).value = "Current pitch guidance invites news, long-form, and opinion ideas by email at editor@rabble.ca. A progressive equality-focused citizenship-information pitch was prepared in Gmail with CMG affiliation and the contextual destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "HerSide Magazine":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://hersidemagazine.com/"
        ws.cell(row, 9).value = "Current publication invites stories and pitches at editor@hersidemagazine.com and covers diaspora identity, ambition, motherhood, and multicultural communities. A tailored family-information pitch was prepared in Gmail with CMG affiliation and the family-sponsorship destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "Diaspora Digital News":
        ws.cell(row, 6).value = date(2026, 9, 23)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://diasporadigitalnews.com/contact/"
        ws.cell(row, 9).value = "Current publication identifies itself as a digital voice for the global diaspora and publicly invites stories and content by email at media@diasporadigitalnews.com. A tailored visitor-information explainer was prepared in Gmail with CMG affiliation and the visitor/super-visa destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False

for row in range(2, ws.max_row + 1):
    site = ws.cell(row, 1).value
    if site == "Vision Newspaper":
        ws.cell(row, 6).value = date(2026, 9, 24)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://visionnewspaper.ca/contact/"
        ws.cell(row, 9).value = "Current Canadian digital news publication covers Canadian, Caribbean, African, African-American, business, politics, arts, culture, and diaspora news and lists info@visionnewspaper.ca as a public contact. A tailored provincial-immigration explainer was prepared in Gmail with CMG affiliation and the contextual destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "Afro Diaspora Pulse":
        ws.cell(row, 6).value = date(2026, 9, 24)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://afrodiasporapulse.com/contact/"
        ws.cell(row, 9).value = "Current Black-led media platform amplifies African and immigrant diaspora voices and lists editorial/news and opinion/contribution routes. A transparent, source-backed refugee-information pitch was prepared in Gmail with CMG affiliation and the contextual destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "Local Canadian News":
        ws.cell(row, 6).value = date(2026, 9, 24)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://lcn.today/contact-us/"
        ws.cell(row, 9).value = "Current Canadian local-news site publicly invites original, factual contributions at editorial@lcn.today. A practical newcomer citizenship-document explainer was prepared in Gmail with CMG affiliation and the contextual destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "The Masthead News":
        ws.cell(row, 6).value = date(2026, 9, 24)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://themastheadnews.ca/contact-us/"
        ws.cell(row, 9).value = "Current community-news site invites story content or letters to the editor up to 350 words at stories@themastheadnews.ca. A concise Atlantic newcomer-family visitor-information pitch was prepared in Gmail with CMG affiliation and the contextual destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "WestCoast Families Magazine":
        ws.cell(row, 6).value = date(2026, 9, 24)
        ws.cell(row, 7).value = "researched"
        ws.cell(row, 8).value = "https://westcoastfamilies.com/editorial/"
        ws.cell(row, 9).value = "Current family/parenting magazine accepts email queries with a brief proposal, relevant experience, writing sample, and source list, and requires objective, balanced material rather than business promotion. A tailored newcomer-family travel/document query was prepared in Gmail with CMG affiliation and the contextual PR-card destination disclosed; it remains unsent and no public article or backlink exists."
        ws.cell(row, 10).value = False
    elif site == "Meridian Source":
        ws.cell(row, 6).value = date(2026, 9, 24)
        ws.cell(row, 7).value = "blocked"
        ws.cell(row, 8).value = "https://meridiansource.ca/submit-your-story/"
        ws.cell(row, 9).value = "The current Share Your Story form requires a Visual Code/security-verification field. No fields were submitted and no verification was solved or bypassed; no article receipt or public backlink exists."
        ws.cell(row, 10).value = False

for row in range(2, ws.max_row + 1):
    site = ws.cell(row, 1).value
    if site == "LawBhoomi":
        ws.cell(row, 7).value = "unsuitable"
        ws.cell(row, 8).value = "Gmail reply from LawBhoomi: paid publication offer"
        ws.cell(row, 9).value = "LawBhoomi replied that standard guest post/link insertion is $80 USD non-negotiable. No payment authorized or made; the submitted article was not accepted under the unpaid-placement scope. No public article or backlink."
        ws.cell(row, 10).value = False
    elif site == "The Offers Guy":
        ws.cell(row, 7).value = "blocked"
        ws.cell(row, 8).value = "Gmail delivery failure"
        ws.cell(row, 9).value = "Gmail reported that the message to hello@theoffersguy.com was not delivered because the remote server is misconfigured. No public article or backlink."
        ws.cell(row, 10).value = False
    elif site == "LendingArch":
        ws.cell(row, 7).value = "blocked"
        ws.cell(row, 8).value = "Gmail delivery failure"
        ws.cell(row, 9).value = "Gmail reported that the message to hello@lendingarch.ca was blocked. No public article or backlink."
        ws.cell(row, 10).value = False

for row in range(2, ws.max_row + 1):
    if ws.cell(row, 1).value == "Moving2Canada":
        ws.cell(row, 4).value = "A Newcomer's First 30 Days in Canada: A Practical Settlement Checklist"
        ws.cell(row, 5).value = "https://commonwealthmigration.ca/immigrate/express-entry"
        ws.cell(row, 7).value = "submitted/pending"
        ws.cell(row, 8).value = "mailto:editor@moving2canada.com"
        ws.cell(row, 9).value = "Full original article sent from seolaunchers@gmail.com after the initial pitch. Backlink is in the author bio, as allowed by the site's guidelines. No public article or backlink yet."
        ws.cell(row, 10).value = False
        break

# Remove duplicate rows created by repeated continuation runs for this prospect,
# keeping the first historical record and updating it above.
moving_rows = [row for row in range(2, ws.max_row + 1) if ws.cell(row, 1).value == "Moving2Canada"]
for row in reversed(moving_rows[1:]):
    ws.delete_rows(row, 1)

def dedupe_exact(key_columns):
    seen = set()
    delete = []
    for row in range(2, ws.max_row + 1):
        key = tuple(ws.cell(row, c).value for c in key_columns)
        if key in seen:
            delete.append(row)
        else:
            seen.add(key)
    for row in reversed(delete):
        ws.delete_rows(row, 1)

dedupe_exact((1, 2, 3, 4))

wb.save(path)
print(path)
print(ws.max_row)

# Keep the dedicated two-column backlink-submission workbook in sync. These are
# submission records, not claims that the links are already public.
detail_path = Path("outputs/backlink-created-details.xlsx")
detail_wb = load_workbook(detail_path)
detail_ws = detail_wb["Backlink Details"]
detail_rows = {(detail_ws.cell(r, 1).value, detail_ws.cell(r, 2).value) for r in range(2, detail_ws.max_row + 1)}
for site_url in [
    "https://moving2canada.com/about-us/become-our-partner/share-your-experience/",
    "https://tovancouver.com/write-for-us",
    "https://www.canooq.ca/contribute",
    "https://www.lapastory.com/guest-posting-canada/",
    "https://lendingarch.ca/blog/lendingarch-we-invite-you-to-write-for-us/",
    "https://covermove.com/write-for-us/",
    "https://www.allaroundmoving.com/write-for-us/",
    "https://khabarbandhan.in/write-for-us/",
    "https://knowledgeborder.com/write-for-us/",
    "https://www.betterplaceimmigration.com/write-for-us/",
    "https://themuslimvibe.com/write",
    "https://travelwarm.com/write-for-us/",
    "https://theoffersguy.com/write-for-us/",
    "https://www.99list.ca/submit-guest-post-for-property-car-jobs.html",
    "https://lawbhoomi.com/write-for-us-immigration/",
    "https://policyoptions.irpp.org/about/article-submission/",
    "https://relocationecosystem.com/contribute/",
    "https://outcomecanada.ca/submit",
    "https://www.vietfederation.ca/write-for-us/",
    "https://immigrantmuse.ca/contact-us/",
    "https://opencanada.org/open-canada-author-writing-guide/",
    "https://spheresofinfluence.ca/guest-submissions/",
]:
    destination = {
        "https://opencanada.org/open-canada-author-writing-guide/": "https://commonwealthmigration.ca/inadmissibility-and-appeals/misrepresentation",
        "https://spheresofinfluence.ca/guest-submissions/": "https://commonwealthmigration.ca/sponsor/spousal-and-partner-sponsorship-overview",
    }.get(site_url, "https://commonwealthmigration.ca/immigrate/express-entry")
    pair = (site_url, destination)
    if pair not in detail_rows:
        r = detail_ws.max_row + 1
        for c, value in enumerate(pair, start=1):
            cell = detail_ws.cell(r, c, value)
            src = detail_ws.cell(r - 1, c)
            if src.has_style:
                cell._style = copy(src._style)
        detail_rows.add(pair)

url_ws = detail_wb["Backlink Submission URLs"] if "Backlink Submission URLs" in detail_wb.sheetnames else None
if url_ws is not None:
    url_rows = {(url_ws.cell(r, 1).value, url_ws.cell(r, 2).value) for r in range(2, url_ws.max_row + 1)}
    for pair in [
        ("https://moving2canada.com/about-us/become-our-partner/share-your-experience/", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://tovancouver.com/write-for-us", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://www.canooq.ca/contribute", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://www.lapastory.com/guest-posting-canada/", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://lendingarch.ca/blog/lendingarch-we-invite-you-to-write-for-us/", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://covermove.com/write-for-us/", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://www.allaroundmoving.com/write-for-us/", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://travelwarm.com/write-for-us/", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://theoffersguy.com/write-for-us/", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://www.99list.ca/submit-guest-post-for-property-car-jobs.html", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://lawbhoomi.com/write-for-us-immigration/", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://policyoptions.irpp.org/about/article-submission/", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://relocationecosystem.com/contribute/", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://outcomecanada.ca/submit", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://www.vietfederation.ca/write-for-us/", "https://commonwealthmigration.ca/immigrate/express-entry"),
        ("https://immigrantmuse.ca/contact-us/", "https://commonwealthmigration.ca/immigrate/express-entry"),
    ]:
        if pair not in url_rows:
            r = url_ws.max_row + 1
            url_ws.cell(r, 1, pair[0]); url_ws.cell(r, 2, pair[1])
            url_rows.add(pair)
detail_wb.save(detail_path)
print(detail_path)
