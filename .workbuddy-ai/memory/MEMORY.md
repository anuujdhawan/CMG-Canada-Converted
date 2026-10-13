# CMG Tailwind components (V2) — long-term notes

Mechanical how-to (SSR harness, Playwright flags, DOM-probe technique) lives in the
`nextjs16-premium-site-build` skill — don't duplicate it here.

## Favicon / SERP icons
- Google supports BMP/GIF/ICO/PNG/JPEG/PPM/TIFF. **WebP and SVG are silently ignored.**
- Icons come from Next 16 file conventions in `src/app/` — `favicon.ico`, `icon.png` (192), `apple-icon.png` (180). `metadata.icons` was removed; there is no `public/favicon.ico` or `public/icon.png` (either would shadow the app routes).
- `npm run build:icons` (`scripts/build-brand-icons.mjs`): source is `public/images/favicon_LG.webp` (1280px), never the hand-supplied 640px JPEG — same artwork (diff 1.98/255), but the JPEG would need upscaling.
- Logo red is **`#D02818`**, sampled from the artwork — NOT the `--brand-primary` token `#D80621`.
- Flat red-on-white → recover alpha from the **green channel** (`a=(255-g)/(255-40)`), force all pixels to `#D02818`. Trim to bbox, re-pad to **88% of tile**, single-step `lanczos3`.
- `apple-icon.png` is **opaque on white** (iOS composites onto black); the other two are transparent. Never `palette: true` (mangles alpha).
- **ICO entries must be largest-first (`128/64/48/32/16`).** Next reads the *first* ICO entry for the `sizes` attribute; ascending order advertises `16x16` despite a 64px frame.
- Verify by curling a running `next dev` and reading the head; `cmp` the served bytes against disk — a 200 doesn't prove freshness. The `?<hash>` is a `[contenthash]`.

## Head / metadata
- `metadataBase` from `site.url`; OG image defaults to `site.meta.ogImage`. JSON-LD `logo` → `site.logos.large` (Knowledge Panel, not the SERP favicon).

## Blog content system
- Metadata in `src/data/blog-research.js` (`RESEARCH_BLOG_POSTS`); `keywords` is a **`;`-separated string**, not an array. Don't change slugs/titles/descriptions/keywords.
- Bodies in `src/data/blog-articles/<slug>.js`; registry `index.js`. Use `const article = {…}; export default article;` — an anonymous default export fails lint.
- **Run `npm run validate:blog-content`** after any article edit — the only check for keyword coverage, word counts, FAQ lengths, and `related` hrefs.

## CSS landmines
- Ancestor `overflow: hidden` breaks `position: sticky` → use `overflow-x-clip`.
- `.cmg-template-home a { color: inherit }` is **unlayered** and beats Tailwind colour utilities on an `<a>` → colour the inner `<span>`.
- `body:has(.cmg-template-home)` supplies the 1220px header; blog pages must sit inside it.
- Section ids must never start with a digit (`querySelector` throws).
- Number badges go **outside** the `<h2>`. `<br />{" "}` — the `{" "}` is deliberate.
- Phone tables: `max-lg:block` on `tr`/`td` **plus** explicit `role=` (block drops table roles).

## Tailwind v4 (4.3.3)
- `@theme inline` maps `--color-*` → `var(--brand-*)`: prefer `text-muted`, `border-line`, `text-ink`, `bg-accent-soft`.
- Unmapped vars need parenthesised shorthand: `text-(--brand-navy-dark)`, `bg-(--brand-logo-bg)`. A wrong name silently yields no colour.
- Canonical forms: `rounded-[1rem]`→`rounded-2xl`, `size-[30rem]`→`size-120`, `h-[15px]`→`h-3.75`, `duration-[180ms]`→`duration-180`. Arbitrary properties: `[mask-image:…]`→`mask-[…]`, `[background-size:…]`→`bg-size-[…]`.
- **Never** canonicalise `text-[.75rem]`→`text-xs` blindly: `text-*` emits font-size **and** line-height, while an arbitrary `text-[…rem]` sets font-size only — shifts layout without an explicit `leading-*`.

## Sandbox
- `npm run build` / `next dev` don't run here; the user runs production builds. See the skill for the SSR harness, the Playwright headless-shell flags (needs `--no-sandbox --disable-gpu-sandbox`, or it exits 0 writing nothing), and the `data-probe` computed-style technique.

## Off-site work (2026-10-09)
- Backlink submission list `immigration_backlink_submission_prospects.xlsx` = **226 unique routes** (Round 2 rows are appended to Prospects, so raw rows total 326). Almost all are email/form pitch routes, not registrable accounts. Triage + article map: `Backlink-Submission-Plan-commonwealthmigration.xlsx`.
- Guest-article sets already written: `commonwealth-migration-guest-articles/ALL-ARTICLES.md` (108) and `ROUND-2-ALL-ARTICLES.md` (108) — one unique article per page, two sets = the "2 articles per site" requirement. Site has **96 pages** (`src/data/cmg-pages.json`).

## Canada guest-post prospects (2026-10-13)
- `~/Documents/Seo Guest-Post Prospects/CMG-Canada-GuestPostProspects.xlsx` — sheet **Canada**, headers `Name | Email | Website | Pitched Backlink Url | Published Url`. 99 prospects added (rows 5–103). `Published Url` left blank until posts go live.
- **`openpyxl` cannot open this workbook** (Zoho `styles.xml` has a named style with an out-of-range `xfId`). Edit the OOXML directly instead: unzip → patch `xl/sharedStrings.xml` + `xl/worksheets/sheet1.xml` → rezip with `[Content_Types].xml` first. Don't let openpyxl rewrite it.
- Reusable sources for Canadian pitch routes: **Informed Perspectives Canadian Editors' Directory** (op-ed emails for ~28 Canadian newspapers/magazines) and the `canadiansinternet.com` DA30+ Canadian blog list.
- Skip `torontostarworld.com` (fake "Toronto Star" clone — link-neighbourhood risk).
