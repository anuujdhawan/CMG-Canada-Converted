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

/** Serialize JSON-LD safely for an inline script in the rendered document. */
export function serializeJsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 155;

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

  const withoutYear = value
    .replace(/\s+20\d{2}(?:\s*[–-]\s*20\d{2})?\b/g, "")
    .replace(/\s+(?:in|for|from|the)\s*:/gi, ":")
    .replace(/\s+/g, " ")
    .trim();
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

/**
 * Keep search snippets and social descriptions concise without cutting a
 * sentence in the middle when a source description is unusually long.
 */
export function normalizeMetaDescription(description) {
  const value = String(description || "").replace(/\s+/g, " ").trim();
  if (value.length <= DESCRIPTION_LIMIT) return value;

  const clipped = value
    .slice(0, DESCRIPTION_LIMIT - 1)
    .replace(/\s+\S*$/, "")
    .replace(/[,:;–—-]\s*$/, "")
    .trim();
  return clipped ? `${clipped}…` : `${value.slice(0, DESCRIPTION_LIMIT - 1)}…`;
}

/**
 * Read an optional route-specific share image from page data. Routes that do
 * not provide one continue to use the homepage hero configured in site.meta.
 */
export function getPageShareImage(page) {
  const image = page?.seo?.image
    || page?.seo?.ogImage
    || page?.image
    || page?.heroImage
    || page?.ogImage
    || page?.meta?.ogImage;

  if (!image) return undefined;
  return typeof image === "string" ? { url: image } : image;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  type = "website",
  keywords,
  noIndex = false,
  image,
} = {}) {
  const resolvedTitle = title || site.meta.defaultTitle;
  const resolvedDescription = normalizeMetaDescription(description || site.meta.defaultDescription);
  const pageTitle = normalizePageTitle(resolvedTitle);
  const url = absoluteUrl(path);
  const requestedImage = typeof image === "string" ? { url: image } : image;
  const imageConfig = requestedImage?.url
    ? requestedImage
    : {
        url: site.meta.ogImage,
        width: site.meta.ogImageWidth,
        height: site.meta.ogImageHeight,
        type: site.meta.ogImageType,
        alt: site.meta.ogImageAlt,
      };
  const imageUrl = /^https?:\/\//i.test(imageConfig.url || "")
    ? imageConfig.url
    : absoluteUrl(imageConfig.url);
  const imageAlt = imageConfig?.alt || site.name + " — Canadian immigration guidance";
  // Only emit dimensions we actually know. Guessing 1912x1140 for every
  // page-specific image produces incorrect Open Graph tags for the cover art.
  const imageWidth = imageConfig.width;
  const imageHeight = imageConfig.height;

  return {
    // Omit `title` entirely when no page title is given, so the root layout's
    // `title.template` + `default` handle the final document title (an explicit
    // `title: undefined` would overwrite the layout template on spread).
    ...(title ? { title: { absolute: pageTitle } } : {}),
    description: resolvedDescription,
    ...(() => {
      const value = Array.isArray(keywords)
        ? keywords.filter(Boolean).join(", ")
        : String(keywords || "").trim();
      return value ? { keywords: value } : {};
    })(),
    robots: { index: !noIndex, follow: true },
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      type,
      locale: site.meta.locale,
      siteName: site.name,
      title: pageTitle,
      description: resolvedDescription,
      url: url || undefined,
      ...(imageUrl && {
        images: [{
          url: imageUrl,
          ...(imageConfig.type && { type: imageConfig.type }),
          ...(imageWidth && { width: imageWidth }),
          ...(imageHeight && { height: imageHeight }),
          alt: imageAlt,
        }],
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
