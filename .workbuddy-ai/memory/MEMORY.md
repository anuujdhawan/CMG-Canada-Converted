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