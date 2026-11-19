# Submission tracker — 16 Nov 2026

## Executed today (live, verified)

| # | Platform | Live URL | Assets | Links to CMG | rel | Verified |
|---|---|---|---|---|---|---|
| 1 | Telegraph | https://telegra.ph/How-to-Check-an-Immigration-Consultant-Before-You-Hire-One-in-Canada-11-16 | Original article | `/blog/immigration-consultant-brampton`, home | nofollow | HTTP 200, 2 anchors, `index,follow` |
| 2 | Telegraph | https://telegra.ph/Open-vs-Employer-Specific-Work-Permits-A-Canadian-Guide-for-2026-11-16 | Original article | `/blog/canada-work-permit-types-2026`, `/work-and-study/tfwp-employer-compliance`, home | nofollow | HTTP 200, 3 anchors |
| 3 | Telegraph | https://telegra.ph/A-Newcomers-Information-Checklist-After-Arriving-in-Canada-11-16 | Original article | `/blog/immigration-consultant-brampton`, home | nofollow | HTTP 200, 2 anchors |

Total: **3 live pages, 7 contextual backlinks**. All are nofollow — Web 2.0 platforms set
`rel=nofollow` on external links by default. Their value is referral traffic, brand/citation
footprint and indexable content, **not** PageRank transfer. Do not count these as authority links.

## Content assets created

`output/pdf/submission-guides/`
- `Choosing-a-Licensed-Immigration-Consultant-in-Brampton.pdf` — 3 clickable links
- `Open-vs-Employer-Specific-Work-Permits-Canada-2026.pdf` — 3 clickable links
- `Newcomer-Information-Checklist-Arriving-in-Canada.pdf` — 2 clickable links

Generator: `scripts/build-submission-guides.py` (reportlab). Verified with pypdf: 1 page each,
text extracts correctly, link annotations intact. Original human-readable content, NAP
consistent, no keyword stuffing, disclaimer on every page.

## Tested and rejected (no viable anonymous path)

| Platform | Result |
|---|---|
| DocDroid | Upload works but sharing requires a paid Pro subscription ("Restricted Demo Mode") |
| SlideServe | Upload page offline for maintenance |
| HeyZine | Flipbook created but **deleted in 1 week** without a free account — not durable |
| vdocuments.mx | Cookie/security challenge, no anonymous upload |
| pdfslide.net | Domain now serves unrelated content — dead as an SEO target |
| Quora / Reddit / ProductHunt / E27 | HTTP 403 from this environment; also require accounts |

## Ready to execute — needs credentials (no gatekeeper once logged in)

These need **no publisher approval** — you create/claim the profile yourself and add the site
link. I cannot create accounts using your identity without login access. Give me access (or do
these yourself) and each is a 2–5 minute task:

| Priority | Platform | Exact URL | Action |
|---|---|---|---|
| P0 | Google Business Profile | https://www.google.com/business/ | Verify ownership, add website + services + posts |
| P0 | Bing Places | https://www.bingplaces.com/ | Claim + website link |
| P0 | Apple Business Connect | https://businessconnect.apple.com/ | Claim + website link |
| P0 | LinkedIn Company Page | https://www.linkedin.com/company/setup/new/ | Create, add website; then set `site.social.linkedin` |
| P1 | Yelp / BBB / Yellow Pages CA / 411.ca | see listing-sites CSV | Claim and normalise NAP |
| P1 | Crunchbase / Manta / Foursquare | respective sites | Free business profiles with website fields |
| P1 | Scribd / SlideShare / Issuu / Calameo | respective sites | Upload the 3 PDFs above (one per platform) |
| P2 | Medium / Substack / Blogger / WordPress.com | respective sites | Republish the 3 original articles with canonical link back |

**Important:** the templates in `Worldwide_High_Authority_Backlink_Targets.xlsx` and the
guest-post lists still require a third party to accept or publish. They are Tier 3, not Tier 1.
Per the audit in `BACKLINK-AND-RANKING-ACTION-PLAN.md`, self-publish platforms are nofollow —
real ranking authority comes from the P0/P1 citation work above plus the free editorial deals
already in the mailbox.

## Scripts

- `scripts/telegraph-post.js` — first article publisher (kept as a working example)
- `scripts/telegraph-publish.js` — batch publisher for the other two articles
- `scripts/build-submission-guides.py` — regenerates all three PDFs

## Editorial follow-up sent — Pankaj Khanna author photo + bio (16 Nov 2026)

| Prospect | Thread reply | Asset supplied | Status |
|---|---|---|---|
| Law360 Canada / LexisNexis Canada (Richard Skinulis) | `1a1e3feb598b0943` in thread `1a15debe5090078f` | Live JPEG URL + short bio + CICC profile + website | Reply sent; contributor agreement still pending Pankaj's review/signature. No publication or byline claim asserted as approved. |
| Vantage Magazine (Victor) | `1a1e3feb83b5af3b` in thread `1a15db634ca3cb9f` | Live JPEG URL + short bio + website | Reply sent; clarified this is the Canada-based consultant image and that the original byline stands unless editors request otherwise. |

Asset: `public/images/team/pankaj-khanna.jpg` — converted from the homepage WebP, 900 x 1125,
131,003 bytes, committed as `7ff8fb1` and pushed to `main`. Verified in local Chrome before push
(HTTP 200, 900 x 1125), then verified on production (`image/jpeg`, HTTP 200, SHA-256 identical to
the local file): https://commonwealthmigration.ca/images/team/pankaj-khanna.jpg

---

# Update — 17 Nov 2026 (SEO PDF rebuild + mass distribution)

Target: Brampton immigration keywords. All three guides rebuilt with SEO metadata
(keyword-rich `/Title`, `/Subject`, `/Keywords`, `/Creator`), clickable links preserved.
Generator: `scripts/build-submission-guides.py`.

## A. Own domain — highest value (first-party, indexable)
Copied to `public/guides/` for serving on next deploy:
- `/guides/Choosing-a-Licensed-Immigration-Consultant-in-Brampton.pdf` (3 links)
- `/guides/Open-vs-Employer-Specific-Work-Permits-Canada-2026.pdf` (3 links)
- `/guides/Newcomer-Information-Checklist-Arriving-in-Canada.pdf` (2 links)

To do: add an indexable "Free Guides" page linking these three PDFs (not added —
could not build-verify in this sandbox).

## B. Rentry.co — LIVE, indexable, content + links in HTML
Verified HTTP 200, 4× commonwealthmigration.ca links on each:
- https://rentry.co/cmg-licensed-immigration-consultant-brampton
- https://rentry.co/cmg-open-vs-employer-specific-work-permits-canada
- https://rentry.co/cmg-newcomer-information-checklist-canada

## C. Gofile.io — LIVE, indexable landing pages (`x-robots-tag: all`)
- https://gofile.io/d/YZAk3d97 — Brampton licensed consultant
- https://gofile.io/d/gWAMcWmt — Work permits
- https://gofile.io/d/EKKpkf76 — Newcomer checklist
PDF links are inside the file, not the landing HTML — footprint, not crawlable backlinks.

## D. Anonymous file hosts — low/no SEO value (noindex / crawler-blocked)
- https://tmpfiles.org/woAmtmnZYxmr/choosing-a-licensed-immigration-consultant-in-brampton.pdf (short-lived)
- https://pomf2.lain.la/f/4j83z1eq.pdf (robots.txt disallows all)
- https://filebin.net/cmg-brampton-guide-2026/Choosing-a-Licensed-Immigration-Consultant-in-Brampton.pdf (noindex)

## Tested and rejected on 17 Nov
write.as (blocks SEO content outright); justpaste.it (anti-robot CAPTCHA);
Scribd / SlideShare / Issuu / Calameo / Yumpu / epdf / pdfcoffee / docslib /
studylib / Studocu (login or CAPTCHA required); idoc.pub (domain for sale);
pdfslide.net (domain repurposed); 0x0.st / litterbox.catbox.moe / bashupload /
transfer.sh / catbox.moe (unreachable); pixeldrain / 1fichier / file.io / uguu /
oshi (API auth / redirect / 405).

## Honest SEO assessment
Fire-and-forget PDF uploads rarely produce ranking authority: document hosts set
links nofollow, anonymous hosts are usually noindex. The three Rentry pages are the
only truly indexable third-party placements with content + links in HTML. Highest
value remains own-domain hosting with an indexable linking page (A above) plus the
P0 citation work in `BACKLINK-AND-RANKING-ACTION-PLAN.md`.

---

# Update — 17 Nov 2026 (second pass: two supplied workbooks)

## E. `immigration_backlink_submission_prospects (1).xlsx`
- 226 unique routes; `Priority 30` (30) and `Round 2` (100) are duplicates inside `Prospects`.
  No email addresses are stored — only submission/contributor URLs.
- Deduped against all 201 sent messages. 111 of the 114 rows in the other final workbook were
  already pitched; this workbook's A-tier list is similarly pre-contacted.
- New standalone pitch sent: **Escape Artist** (`editors@escapeartist.com`), message
  `1a1ea890647272fb` — "Renting in Brampton after arrival", a non-promotional relocation guide.
- Earlier same-day new pitches (from `CMG-Canada-Final.xlsx`): BetterPlace Immigration
  (`1a1e90a03e8115fa`), Legal Line (`1a1e90a1d7f34bfc`), Calgary's Child (`1a1e90a366d20c16`).
- Rejected after checking live guidelines: IMI Daily (requires paid IMI Pro membership),
  Expat Info Desk (explicitly rejects SEO firms; $450 SEO-placement fee), New Canadian Media
  (form behind Cloudflare "Verify you are human" — not bypassed), GoAbroad (`write-for-us` 404),
  Study International / Expat Focus / Expat Arrivals / Go Overseas (bot challenge, personal-story
  only, or no usable contact), legal/academic outlets (require a qualified-lawyer or academic
  author — would mean false bylines), AILA/US and Australia-only routes (off-niche).

## F. `Worldwide_High_Authority_Backlink_Targets.xlsx`
- 126 rows / 121 unique target URLs across 7 categories. Reachability scan: **84 returned HTTP
  success, 37 returned errors or bot challenges**. `HTTPError` here usually means 403/429
  anti-bot, not a dead domain — do not treat as permanent rejection.
- One target redirected into a domain the sandbox flagged as malicious; the request was blocked
  and not retried. Avoid that target.
- No accounts were created: every remaining platform (Google Business, Bing Places, Apple
  Business Connect, Yelp, Medium, Substack, GitHub, Scribd, etc.) requires a verified account,
  email confirmation, or credentials that are not available here. These stay in the
  "needs credentials" queue above.

## G. New live placement — Telegraph (anonymous publishing)
- https://telegra.ph/Brampton-newcomer-guide-housing-status-checks-and-local-information-11-17
- HTTP 200 verified; 4 contextual links in HTML to live CMG pages:
  `/locations/brampton`, `/blog/brampton-international-student-housing-status-checklist`,
  `/blog/can-i-apply-for-pr-after-pgwp-brampton`, `/assessment/free-canada-immigration-assessment`.
- Telegraph links are nofollow — footprint/referral value only, not authority transfer.

## H. Production check — important finding
The three PDFs copied to `public/guides/` are **not live yet**: all three `/guides/*.pdf` URLs
return HTTP 404 on `commonwealthmigration.ca`. They are waiting for the next production deploy.
Do not link to them or cite them as live until that deploy is confirmed.
