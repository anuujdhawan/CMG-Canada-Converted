import { site } from "@/config/site";

/**
 * Centralized, domain-agnostic metadata builder.
 *
 * Canonical/OG URLs are derived from the public site configuration.
 */

/** Absolute URL from a path, or "" when no site URL is configured. */
export function absoluteUrl(path = "") {
  if (!site.url) return "";
  return `${site.url.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

const TITLE_LIMIT = 60;

/**
 * Keep page titles concise without throwing away the page's primary topic.
 * The root layout still owns the default title; page-level titles are emitted
 * as absolute values so the layout cannot append a second, repetitive brand
 * suffix to every result.
 */
export function normalizePageTitle(title) {
  let value = String(title || "").replace(/\s+/g, " ").trim();
  value = value.replace(/\s*\|\s*(?:CMG|Commonwealth Migration(?: Group Inc\.?| Canada)?)\s*$/i, "").trim();
  if (value.length <= TITLE_LIMIT) return value;

  const withoutYear = value.replace(/\s+20\d{2}\b/g, "").replace(/\s+/g, " ").trim();
  if (withoutYear.length <= TITLE_LIMIT) return withoutYear;

  const withoutParenthetical = withoutYear.replace(/\s*\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
  if (withoutParenthetical.length <= TITLE_LIMIT) return withoutParenthetical;

  const colon = withoutParenthetical.indexOf(":");
  if (colon > 0) {
    const compact = `${withoutParenthetical.slice(0, colon).trim()}: ${withoutParenthetical.slice(colon + 1).trim()}`;
    if (compact.length <= TITLE_LIMIT) return compact;
  }

  const words = withoutParenthetical.split(" ");
  let result = "";
  for (const word of words) {
    const next = result ? `${result} ${word}` : word;
    if (`${next}…`.length > TITLE_LIMIT) break;
    result = next;
  }
  return result ? `${result}…` : withoutParenthetical.slice(0, TITLE_LIMIT);
}

export function buildMetadata({
  title,
  description,
  path = "/",
  type = "website",
  keywords,
  noIndex = false,
} = {}) {
  const resolvedTitle = title || site.meta.defaultTitle;
  const resolvedDescription = description || site.meta.defaultDescription;
  const pageTitle = normalizePageTitle(resolvedTitle);
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(site.meta.ogImage);

  return {
    // Omit `title` entirely when no page title is given, so the root layout's
    // `title.template` + `default` handle the final document title (an explicit
    // `title: undefined` would overwrite the layout template on spread).
    ...(title ? { title: { absolute: pageTitle } } : {}),
    description: resolvedDescription,
    ...(keywords && { keywords: Array.isArray(keywords) ? keywords.join(", ") : keywords }),
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      type,
      locale: site.meta.locale,
      siteName: site.name,
      title: pageTitle,
      description: resolvedDescription,
      url: url || undefined,
      ...(imageUrl && {
        images: [{ url: imageUrl, width: 1280, height: 1280, alt: site.name }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: resolvedDescription,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };
}

export default buildMetadata;
