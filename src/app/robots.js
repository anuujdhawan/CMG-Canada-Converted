import { site } from "@/config/site";

export default function robots() {
  const rules = [
    {
      userAgent: "*",
      // Social crawlers need access to the generated Open Graph image.
      allow: ["/", "/api/og"],
      // Keep non-page API endpoints out of search while leaving /api/og
      // crawlable so search and social crawlers can fetch share images.
      disallow: [
        "/api/chat-leads",
        "/api/checkout",
        "/api/express-entry-draws",
        "/api/forms",
        "/api/pnp-draws",
      ],
    },
  ];

  // Only advertise a sitemap once a client domain is configured.
  if (site.url) {
    return {
      rules,
      sitemap: `${site.url.replace(/\/$/, "")}/sitemap.xml`,
    };
  }

  return { rules };
}
