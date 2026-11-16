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
