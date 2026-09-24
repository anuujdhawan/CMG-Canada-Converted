# CMG Tailwind components (V2) — long-term notes

## Favicon / SERP icon (Google docs update, August 2026)
- Google Search favicon **supported** formats: BMP, GIF, ICO, PNG, JPEG, PPM, TIFF.
- **NOT supported: WebP and SVG** — silently ignored. Linking a WebP favicon via `<link rel="icon" type="image/webp">` is a no-op for SERP.
- Source of truth in this project = Next 16 file conventions in `src/app/` (all auto-linked, nothing in `metadata.icons`):
  - `src/app/favicon.ico` → multi-size ICO (16/32/48/64 px RGBA) → `<link rel="icon" href="/favicon.ico" sizes="any">`.
  - `src/app/icon.png` → 192×192 PNG → `<link rel="icon" type="image/png" sizes="192x192">` (the modern link Google uses).
  - `src/app/apple-icon.png` → 180×180 PNG → `<link rel="apple-touch-icon">`. Replaced the old wide `public/images/apple-icon.png` (was 1912×1140 — bad for the iOS home screen).
- All three generated from the 1280×1280 `public/images/favicon_LG.webp` (same red pinwheel artwork).
- `public/images/favicon.webp` and the wide `public/images/apple-icon.png` are kept on disk but no longer referenced.
- `metadata.icons` was removed from `src/app/layout.js` (file conventions own the icon links).

## Head / metadata patterns
- `metadataBase` resolved from `site.url`.
- OG image defaults to `site.meta.ogImage` (currently `favicon_LG.webp`, a 1280×1280 square).
- Organization JSON-LD `logo` → `site.logos.large` (`/images/logo-large.png`) — used by the Knowledge Panel, not the SERP favicon. Keep separate.

## Blog content system (built 2026-09-23)
- **Metadata** lives in `src/data/blog-research.js` (`RESEARCH_BLOG_POSTS`, 20 posts, keyed by slug). Fields: `slug, category, title, keywords, description, source`. `keywords` is a **`;`-separated string**, not an array (56 phrases / 55 unique). Do not change slugs/titles/descriptions/keywords.
- **Bodies** live in `src/data/blog-articles/<slug>.js` — one file per post, content only. Registry `index.js` exports `BLOG_ARTICLES`, `getBlogArticle(slug)`, `countArticleWords(article)`.
- Article files must use `const article = {…}; export default article;` — an anonymous default export trips `import/no-anonymous-default-export`.
- **Structured data** in `src/lib/blogArticleSchema.js` → Article + BreadcrumbList + FAQPage + DefinedTermSet + WebPage.
- **Validate with `npm run validate:blog-content`** (`scripts/verify-blog-content.mjs`) after touching any article. It is the only thing that checks keyword coverage, word counts, FAQ answer lengths, and that every `related` href resolves against the live route set.

### CSS / component landmines
- `overflow: hidden` on an ancestor **breaks `position: sticky`** below it. Use `overflow-x-clip`.
- `.cmg-template-home a { color: inherit }` is **unlayered** and beats Tailwind text-colour utilities on an `<a>` — colour the inner `<span>`.
- `body:has(.cmg-template-home)` is what gives a page the 1220px template header. A blog page must sit inside `.cmg-template-home`.
- Section ids: **never start with a digit** (`#2026-…` makes `querySelector` throw).
- Section number badges go **outside** the `<h2>` — `aria-hidden` text still lands in `innerText` and corrupts extracted headings.
- Phone tables: `max-lg:block` on `tr`/`td` **plus** explicit `role="table"/"row"/"columnheader"/"cell"`, since `display:block` drops implicit table roles.
- `<br />{" "}` — the `{" "}` is deliberate; without it textContent welds to `"…route.Then decide."`.

### Tailwind v4 class conventions (checked 2026-09-24, Tailwind 4.3.3)
- `@theme inline` maps `--color-*` → `var(--brand-*)`, so prefer the **named** utility:
  `text-[var(--brand-muted)]` → `text-muted`, `border-[var(--brand-border)]` → `border-line`,
  `text-[var(--brand-text)]` → `text-ink`, `bg-[var(--brand-accent-soft)]` → `bg-accent-soft`.
- **Unmapped** vars must use the parenthesised shorthand, not a made-up named token:
  `--brand-navy-dark`, `--brand-logo-bg`, `--brand-gold` → `text-(--brand-navy-dark)`,
  `bg-(--brand-logo-bg)`, `border-l-(--brand-gold)`. A wrong name silently yields no colour.
- Arbitrary values canonicalise exactly where they land on the v4 scale: `rounded-[1rem]`→`rounded-2xl`,
  `leading-[1.25]`→`leading-tight`, `size-[30rem]`→`size-120`, `h-[15px]`→`h-3.75`,
  `duration-[180ms]`→`duration-180` (v4 accepts bare ms), `translate-x-[-4px]`→`-translate-x-1`.
- Arbitrary-property declarations have shorthand utilities: `[background-size:…]`→`bg-size-[…]`,
  `[mask-image:…]`→`mask-[…]`, `[background-image:linear-gradient(…)]`→`bg-[linear-gradient(…)]`.
- **Do NOT canonicalise `text-[.75rem]`→`text-xs` or `text-[.875rem]`→`text-sm` blindly.** In v4 a
  `text-*` utility emits `font-size` *and* `line-height`; an arbitrary `text-[…rem]` sets font-size
  only. Without an explicit `leading-*` on the element this changes layout (the footer CTA pills
  would lose ~3.8px). IntelliSense appears to know this and does not suggest it.

### Sandbox limits
- `npm run build` and `next dev` **do not run here** (filesystem shim breaks `.next`). The user runs production builds.
- To render project components outside a Next build, use the ESM-loader harness (loader hook + `next/link|image|navigation|font` stubs + `renderToStaticMarkup` + postcss/Tailwind + injected theme vars). Guard `require.resolve()` with `path.isAbsolute()` — builtins otherwise resolve to `<cwd>/fs`.
- If the user already has `next dev` on `localhost:3000`, drive it with `agent-browser` — but note the
  served CSS chunk **can go stale** for components outside the current module graph (it kept serving a
  removed selector after an edit to `ConsultationForm.js`). To test whether a utility is genuinely
  emitted, run an isolated `@tailwindcss/postcss` compile against a throwaway probe instead.
