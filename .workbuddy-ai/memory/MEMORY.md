# CMG Tailwind components (V2) — long-term notes

## Favicon / SERP icon (Google docs update, August 2026)
- Google Search favicon **supported** formats: BMP, GIF, ICO, PNG, JPEG, PPM, TIFF.
- **NOT supported: WebP and SVG** — silently ignored. Linking a WebP favicon via `<link rel="icon" type="image/webp">` is a no-op for SERP.
- Source of truth in this project = Next 16 file conventions in `src/app/` (all auto-linked, nothing in `metadata.icons`):
  - `src/app/favicon.ico` → multi-size ICO (16/32/48/64 px RGBA, hand-built PNG payloads) → `<link rel="icon" href="/favicon.ico" sizes="any">`.
  - `src/app/icon.png` → 192×192 PNG → `<link rel="icon" type="image/png" sizes="192x192">` (the modern link Google uses).
  - `src/app/apple-icon.png` → 180×180 PNG → `<link rel="apple-touch-icon">`. Replaced the old wide `public/images/apple-icon.png` (was 1912×1140 — bad for the iOS home screen).
- `metadata.icons` was removed from `src/app/layout.js` (file conventions own the icon links).
- `public/images/favicon.webp` and the wide `public/images/apple-icon.png` are kept on disk but no longer referenced.
- No `public/favicon.ico` / `public/icon.png` exists — a static file there would shadow the app-route icons.

### Icon generation — `npm run build:icons` (`scripts/build-brand-icons.mjs`, built 2026-09-25)
- **Source is `public/images/favicon_LG.webp`** (1280px). The 640px JPEG/WhatsApp copies of this logo that get handed over by hand are the *same artwork* (verified mean abs channel diff 1.98/255 — compression noise only), so the larger repo copy is used to avoid upscaling. Never regenerate from the hand-supplied JPEG.
- **The logo's own red is `#D02818`** — sampled from the artwork. It is NOT the CSS `--brand-primary` `#D80621`. The mark, the header wordmark (`CMG-LOGO.webp`) and the footer bird all use `#D02818`. Do not snap the icon to the UI token.
- Conversion: the artwork is flat red on white, so alpha is recovered from the **green channel** (`a = (255-g)/(255-40)`) and every pixel is then forced to `#D02818`. This removes JPEG/WebP compression noise that a naive "white → transparent" keeps, while preserving edge antialiasing. White counter-forms (the birds' eyes) become transparent holes, as expected.
- Trimmed to the mark bbox, then re-padded to **88% of the tile**. The artwork's own framing is 70.9%, which at 16px leaves the mark ~11px. 88% is visibly more legible and still clear of the tile edge. Single-step `lanczos3` beat stepped and pre-blur downscaling at 16px.
- **`apple-icon.png` is deliberately opaque on white.** iOS composites a transparent touch icon onto **black**, which would turn the tile into a black square. The other two are transparent, so they read correctly on both light and dark browser chrome / SERP.
- Do **not** use PNG `palette: true` — it mangles the alpha channel (mean abs diff 51/255 against truecolour).
- **ICO entries are written largest-first (`128/64/48/32/16`) and that is load-bearing.** Next derives the `sizes` attribute from `getImageSize()` in `next/dist/server/image-optimizer.js`, which for an ICO returns the **first** directory entry, not the largest. Ascending order makes the site advertise `sizes="16x16"` — under Google's "larger than 48×48" guidance — despite the file containing a 64px frame. Proven by direct test (16/32/48/64 → `16x16`; 64/48/32/16 → `64x64`). Browsers match ICO entries by requested size, so the order is otherwise free.

### Verifying the emitted head (no build needed)
- `next build` cannot run in this sandbox, but the user usually has `next dev` up — `lsof -nP -iTCP -sTCP:LISTEN`. **curl that and read the real head**; it is the actual metadata code path.
- Emitted (verified 2026-09-25): `<link rel="icon" href="/favicon.ico?…" sizes="128x128" type="image/x-icon">`, `<link rel="icon" href="/icon.png?…" sizes="192x192" type="image/png">`, `<link rel="apple-touch-icon" href="/apple-icon.png?…" sizes="180x180" type="image/png">`.
- The `?<hash>` is a webpack **`[contenthash]`** (`next-metadata-image-loader.js` L60) — content-derived, so it is stable across deploys and only changes when the icon does. A stale hash still returns 200.
- `/favicon.ico` **without** a query also returns 200 — Google's classic fallback path.
- Always byte-compare the served icon against the file on disk (`cmp`); a 200 with the right `Content-Type` does not prove it is not stale.

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
- **Rendering a component without a build**: use the ESM SSR harness now bundled at
  `~/.workbuddy-ai/skills/nextjs16-premium-site-build/references/component-harness/`
  (`loader.mjs`, `render.mjs`, `probe.sh`, `stubs/*.mjs`; project root via `$HARNESS_PROJECT`).
  Run it from the project root with `--experimental-loader`. It compiles the real Tailwind CSS,
  inlines the real theme vars and font, and warns if a probe utility is missing from the CSS.
  Guard `require.resolve()` with `path.isAbsolute()` — builtins otherwise resolve to `<cwd>/fs`.
- **Screenshotting / measuring**: `agent-browser` is **not installed** here and costs ~500 MB to
  add. Use the cached Playwright build instead —
  `~/Library/Caches/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-mac-arm64/chrome-headless-shell`.
  It **requires `--no-sandbox --disable-gpu-sandbox`** or it dies with
  `sandbox initialization failed: Operation not permitted` and **writes no file while exiting 0**.
  Prefer it over `/Applications/Google Chrome.app`, which triggers a delete-permission prompt for
  its own RLZ store and a `code_sign_clone` temp copy on every launch. Always pass
  `--user-data-dir=/tmp/…`.
- **Computed styles with no browser driver**: inject a script that writes `JSON.stringify(metrics)`
  onto `body`'s `data-probe` attribute, then `--dump-dom --virtual-time-budget=4000` and parse in
  Node. BSD `grep -o '…\{0,400\}'` fails with `maximum repetition exceeds 255`, and the attribute is
  `&quot;`-escaped. Always probe `overflowX` (must be 0) and `naturalWidth > 0` (an undecoded
  `<img>` is pixel-identical to a tinted box).
- If the user already has `next dev` on `localhost:3000`, drive it with `agent-browser` — but note the
  served CSS chunk **can go stale** for components outside the current module graph (it kept serving a
  removed selector after an edit to `ConsultationForm.js`). To test whether a utility is genuinely
  emitted, run an isolated `@tailwindcss/postcss` compile against a throwaway probe instead.
