# Backlink + Brampton ranking action plan — 16 Nov 2026

Target: `https://commonwealthmigration.ca` — primary keyword **"licensed immigration consultant in Brampton, Ontario, Canada"** and Brampton-related local terms.

## 0. The honest constraint (read this first)

You authorised "any blackhat technique" that stays safe from a Google penalty. Those two
conditions conflict: the techniques that manufacture links at scale (PBNs, link farms,
auto-generated profiles, paid dofollow placements, cloaking) are precisely the ones the
current Google spam policies penalise. For a CICC-regulated practice a manual action or a
trust drop is an existential risk, not a cost of doing business. So this plan uses only
sustainable local-SEO and genuine editorial-link work. It is written to win a *local*
keyword, which is won far more by Google Business Profile + consistent citations + reviews
than by raw backlink count.

Equally important: **"a quality backlink with no third party" largely does not exist.** A
backlink is, by definition, a link from another site. What you *can* own outright is:
(1) everything on your own domain — internal links, schema, content, speed; and (2) profiles
you create yourself on free platforms — directories, maps, business listings. Those are the
genuinely "no gatekeeper" actions, and they are Tier 1 below. They are mostly nofollow, but
for a local keyword they are still the highest-ROI work available.

---

## 1. Audit — what is already strong (do not re-do)

| Item | Status | Evidence |
|---|---|---|
| Exact-match homepage title | Done | `<title>Licensed Immigration Consultant in Brampton, Ontario</title>` |
| Meta description | Done | RCIC + Brampton + services in description |
| LocalBusiness/ProfessionalService schema | Done | Homepage JSON-LD: name, address `2250 Bovaird Dr E #615, Brampton, ON L6R 0W3`, geo, `areaServed`, `sameAs` |
| CICC licence in structured data | Done | Pankaj Khanna, R711256, licence status, profile URL |
| Brampton content depth | Strong | 27 Brampton URLs in sitemap; 208 URLs total |
| Internal linking to money pages | Done | Live Brampton article has 2× `/locations/brampton`, 2× office page, 8× booking CTA |
| Google Business Profile | Likely exists | Google Maps resolves "Commonwealth Migration Group Brampton, Canada" |
| Analytics | Done | GA4 + GTM bootstrap present |

**Conclusion:** on-page and internal linking are not the bottleneck. Off-page local authority
and NAP consistency are.

## 2. Gaps found

1. **NAP phone inconsistency** — site schema emits `+1 942 991 3999` / `+19429913999`; Yelp and
   BBB show `(942) 991-3999`. Same number, different formatting, which weakens citation
   matching. Canonical form should be `+1 942 991 3999` everywhere (or the local form if the
   GBP uses it — match GBP, since that is the source of truth for local).
2. **Directories not confirmed present:** Bing Places, Apple Business Connect, LinkedIn company
   page (`site.js` `social.linkedin` is deliberately empty), CICC register cross-link,
   Yellow Pages Canada, 411.ca. These are self-service.
3. **Sister concern** `cwmigrationgroup.com` (Dubai) does not link back to the Canadian site.
   Owned property — a legitimate, controllable editorial link.
4. **No review-generation system visible** — biggest local ranking lever after GBP.

---

## 3. Tier 1 — self-service / no gatekeeper (do first)

These need no editor to say yes. Some need a login or phone verification, so they are staged
as "you do the login, I prepare everything else".

| # | Action | Where | Why it matters | Status |
|---|---|---|---|---|
| 1 | Claim + fully complete Google Business Profile | google.com/business | #1 local ranking factor | Verify ownership; then add services, products, hours, 20+ real photos, Q&A |
| 2 | Claim Bing Places | bingplaces.com | Bing/Copilot map citations | Not found in search |
| 3 | Claim Apple Business Connect | businessconnect.apple.com | Apple Maps citations | Not found in search |
| 4 | Create/verify LinkedIn Company Page, then set `site.social.linkedin` | linkedin.com/company/setup/new | Entity trust; `sameAs` completeness | Config intentionally empty |
| 5 | Add sister-site link from `cwmigrationgroup.com` to `commonwealthmigration.ca` | Owned site | Legit editorial link you control | Missing |
| 6 | Normalise NAP phone format across GBP/Yelp/BBB/site | All listings | Citation consistency | Inconsistent |
| 7 | Claim/verify Yelp, BBB, Yellow Pages Canada, 411.ca | Respective sites | Local citations | Yelp/BBB exist; others unconfirmed |
| 8 | Start genuine review generation (ask real clients, no incentives) | GBP + Yelp | Strong local ranking + conversion signal | No system found |

From `immigration-consultant-listing-sites (1).csv`, the only entries worth doing for a
Brampton-first strategy are rows 1–7, 9, 11–12, 23–25, 34–35, 36 (genuine reviews only),
38–39 (B2B/corporate) and 67 (data aggregator). The India/US/UK/AU-specific directories
(rows 13–22, 26–33, 40–68) are off-market for this objective — skip them until the practice
actually serves those markets. `Worldwide_High_Authority_Backlink_Targets.xlsx` is mostly
Web 2.0 and profile platforms (Medium, WordPress.com, GitHub, About.me, etc.); those are
nofollow and, per the existing `backlink-automation-plan.md`, should **not** be mass-registered.

## 4. Tier 2 — free editorial links already in the mailbox (medium effort, no fee)

| Prospect | State | Next action | Link target |
|---|---|---|---|
| **Attorneys Magazine** | Reciprocal exchange — their side pending | **DONE TODAY**: placed their contextual link in `/blog/canada-work-permit-types-2026` exactly as requested (anchor "Temporary Foreign Worker Program"); replied asking for their live URL | Their article → our work-permit article |
| **Caribbean Collective UK** | Editorial link approved; Q&A doc gated | Replied asking them to paste questions (doc requires login). Awaiting. Complete Q&A then submit | → `/blog/immigration-consultant-brampton` |
| **LMIC-CIMT** | First draft under review | Wait for editorial decision; do not chase yet | Guest post on labour-market info |
| **ADRIC / CAMJ** | Article in editorial pipeline | Wait — publication expected spring 2027 | Thought-leadership placement |
| **LexisNexis Canada (Richard Skinulis)** | Contributor agreement issued | Needs Pankaj Khanna's photo + short bio before we can proceed — **user action required** | High-authority legal/publication link |
| **Vantage Magazine** | Wants author photo | Needs photo — **user action required** | Feature + link |
| **Immo Multi / OptiLoyer** | Unsent draft reply exists, offering two original articles | Decide whether to proceed; draft is in Gmail Drafts | Two guest articles |
| Paid-only: Complete Connection $60, ImmigrationWin $50, StudyImprovement $30, CT Magazine €100, educatedleader $30, blinkvisa, Joe | Declined | Declines sent today for Complete Connection + ImmigrationWin. Others already declined historically | None — do not pay |

## 5. Tier 3 — guest-post prospect files (last, as instructed)

- `immigration_backlink_submission_prospects (1).xlsx` — 226 prospects, 30 priority, 100 round 2 (round 2 duplicates ~99 from Prospects; Priority 30 is a pure subset). Editorial review required.
- `Seo Guest-Post Prospects/CMG-Canada-Final.xlsx` — Email Outreach 112, Form Submission 51, Non-Immigration Niches 76. ~20 domains overlap the first file — dedupe before pitching.
- `Worldwide_High_Authority_Backlink_Targets.xlsx` — 126 targets, mostly self-publish/profile platforms, nofollow — low priority per §3.

No file contains measured DA/DR values; the `DA/DR` column in file 1 is empty. Do not treat
"Authority tier" labels as verified metrics.

## 6. What was changed today

- `src/data/blog-articles/canada-work-permit-types-2026.js` — added the agreed reciprocal
  contextual link to `https://attorneysmag.com/can-foreign-workers-in-canada-be-fired/` on the
  phrase "Temporary Foreign Worker Program" in the Global Talent Stream section.
- `npm run validate:blog-content` run after the edit: 73/73 article bodies, 73/73 FAQ parity.
  The 8 reported failures are **pre-existing** in other articles (keyword coverage, two FAQ
  lengths, word-count floor) and are unrelated to this change.
- Four Gmail replies sent: Attorneys Magazine (confirm link), Caribbean Collective (unblock Q&A),
  Complete Connection (decline $60), ImmigrationWin (decline $50).

## 7. Cannot verify here

- Production build / `next dev` do not run in this sandbox. The reciprocal link is validated at
  the data + content-validator level, not visually in a production build.
- Google Business Profile ownership/details require the client's Google login — not accessible.
- Live `rel` attributes on prospect sites must be checked after each placement goes live.
