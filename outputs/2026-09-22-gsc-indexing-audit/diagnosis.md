# 92 pages "Discovered — currently not indexed"

Source: `commonwealthmigration.ca-Coverage-Drilldown-2026-09-22.xlsx`
Property has 108 sitemap URLs. **16 indexed, 92 not — and none of the 92 has ever been crawled**
(`Last crawled` = 1970-01-01 in every row).

## Diagnosis: the site had almost no crawlable internal links

Crawled all 108 live URLs as Googlebot and counted links that exist in the **server HTML**
(scripts stripped), i.e. what a crawler can actually follow.

| Group | Pages | Avg crawlable inbound links | Zero inbound |
|---|---|---|---|
| Indexed | 16 | **94.8** | 0 |
| Not indexed | 92 | **10.9** | **34** |

Why: the only crawlable links on any page were the ~27 footer links. Every indexed page is
footer-linked. The navigation — 116 desktop / 115 mobile links, covering all 92 URLs — was
rendered **only after user interaction**:

- `MegaDropdown` mounted its panel inside `{open && …}`
- `MobileMenu` mounted inside `{mobileOpen && …}`
- accordion children mounted inside `{isOpen && …}`

So the nav links never existed in the HTML. Googlebot crawls mobile-first, and the desktop
nav is `display: none` below 1120px — meaning the nav was absent from the exact rendering
Google uses for indexing. `/blog` had **zero** inbound links from anywhere.

Content was not the problem: 1,776–4,846 words per page, unique titles and descriptions,
canonical present on all, no `noindex` anywhere. After removing shared header/footer/CTA
boilerplate, the highest page-to-page similarity was 0.55 (only 10 pairs above 0.5).

## Changes

| File | Change |
|---|---|
| `src/components/layout/Header.js` | Dropdown panel always mounted; closed = `opacity 0` + `pointer-events: none` + `aria-hidden` + `inert`. `MobileMenu` always rendered. |
| `src/components/layout/MobileMenu.js` | Drawer always mounted, slides off-canvas when closed, `overflow-hidden` container, scroll lock gated on `open`. Accordion children stay mounted and collapse with CSS. |
| `src/config/navigation.js` | New footer column "Tools & Resources": blog, CRS calculator, NOC finder, PNP eligibility, document checklist, free assessment. |
| `src/components/layout/Footer.js` | Footer link grid `grid-cols-5` → `grid-cols-6`. |
| `src/lib/cmgPages.js` | Each page record tagged with `meta.sourceFile`. |
| `src/app/sitemap.js` | Real `lastmod` from git commit date of the source file (→ mtime → fallback). Was a frozen `2026-08-29` on 98 of 108 entries. |

## Verified

- `npx eslint src/` clean.
- All 92 reported URLs now present in **both** `navigation.header` and `navigation.main`
  (0 missing); 10 also in the footer.
- Sitemap: 110 entries, 0 invalid dates, lastmod now 2026-09-11 (95 pages), 2026-09-21 (UK
  page), 2026-08-29 (about pages).

**Not verified:** `npm run build` cannot run in this sandbox (filesystem shim blocks `mkdir`
with missing parents). Please run the build and eyeball the header menu + mobile drawer once.

## After deploying

1. Deploy, then confirm `sitemap.xml` shows the new `lastmod` values.
2. In Search Console, use **URL Inspection → Request Indexing** on ~10 representative URLs
   (e.g. `/immigrate/express-entry`, `/sponsor/parents-and-grandparents-program-pgp`,
   `/blog`). Google re-crawls the rest through the new nav links.
3. Re-check the coverage report in 7–14 days; the count should drop steadily rather than
   all at once.
