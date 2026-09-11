# Commonwealth Migration Canada — Immigration Website

A polished, production-quality **immigration consultancy website prototype** built
as a reusable template. After a client approves it, the project can be duplicated
and rebranded for that client with minimal code changes.

- **Framework:** Next.js (App Router) · JavaScript only — no TypeScript
- **Rendering:** Server Components by default; React Compiler enabled
- **Styling:** Tailwind CSS v4 with centralized design tokens
- **Motion:** Framer Motion (scroll reveals, parallax hero, animated process tracker, scroll progress bar)
- **Brand:** Commonwealth Migration Canada
- **Theme:** Canada red (#C8102E) — the chrome (floating pill navbar, gradient footer,
  starfield hero) follows the source template's visual system, recolored blue→red

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # eslint
```

## Where things live

| Concern | Location |
| --- | --- |
| Brand, contact, CTAs, legal links, metadata defaults | `src/config/site.js` |
| Colors, radii, shadows, typography | `src/config/theme.js` → `:root` in `src/styles/globals.css` |
| Navigation (header, mobile, footer) | `src/config/navigation.js` |
| Scroll-reveal motion (framer-motion) | `src/lib/motion.js` + `src/components/motion/` |
| Floating contact bubbles + sticky mobile bar | `src/components/chatbot/GuidedChatbot.js`, `src/components/layout/WhatsAppBubble.js`, `src/components/layout/StickyMobileCTA.js` |
| Homepage and service-page presentation | `src/components/home/ReferenceHomepage.js`, `ReferenceServicePage.js` |
| Page records and rewritten content | `src/lib/sitePages.js`, `pageData/` |
| FAQs, tools and NOC demo data | `src/lib/faqs.js`, `src/data/tools.js`, `src/data/noc.js` |
| Metadata builder (domain-agnostic SEO) | `src/lib/seo.js` |
| Rewritten SEO page content and route map | `pageData/` (validate with `npm run validate:page-data`) |
| Server credentials | `.env` (`STRIPE_SECRET_KEY`, `RESEND_API_KEY`, `CRM_WEB_TO_LEADS_API_KEY`) |
| Logos / icons / OG image | `public/images/` |

## Rebranding for a client

1. **`src/config/site.js` and `src/config/theme.js`** — update the hardcoded
   brand, contact, social, route, metadata and palette values, then rebuild.
2. **`.env`** — set only server credentials (`STRIPE_SECRET_KEY`,
   `RESEND_API_KEY`, and optionally `CRM_WEB_TO_LEADS_API_KEY`).
3. **`public/images/`** — replace the configured brand assets (`logo-large.png`,
   `CMG-LOGO.webp`, the footer logo, `icon.png`, `apple-icon.png` and
   `og-default.png`) while keeping the paths configured in `src/config/site.js`.
4. **`src/config/navigation.js`** — menu labels, order, enabled/disabled items, URLs.
5. **`src/data/`** — replace program copy, FAQs, team, blog and guide content.
6. **`src/config/content.js`** — hero copy, values, process steps, testimonials.
7. Verify: `npm run lint`, `npm run build`, and check every route returns 200.

The current production domain is configured in `src/config/site.js` as
`https://commonwealthmigration.ca`. The rewritten Markdown pages use keyword-led
routes from `pageData/`; the former scraped paths redirect permanently to those
new routes.

## Demo / placeholder functionality

- **Forms** (contact, consultation, urgent, assessment, newsletter) validate and submit
  to `/api/forms`; lead forms are handed off server-to-server to the CMG CRM using the
  endpoint in `src/config/integrations.js`. The guided chatbot uses `/api/chat-leads`
  and the same CRM mapping. Set the optional `CRM_WEB_TO_LEADS_API_KEY` in the
  production hosting environment.
- **Tools** — CRS calculator, PNP eligibility check, NOC finder, document checklist:
  working front-end logic marked as estimates/demo data. Verify against current
  IRCC/official sources before client launch.
- **Payment** — UI shell only; wire a real provider before launch.
- **Team profiles, testimonials, draw data, guides** — placeholders in `src/data/`.

## Legal

This prototype provides general information only — not legal advice, and never a
guarantee of visa or permanent-residence approval. Confirm program names,
eligibility and requirements against current IRCC guidance before public launch.
