import { parseBlocks, rebrand, localizeUrl } from "@/components/templates/MarkdownBlocks";
import { site } from "@/config/site";
import { breadcrumbsFor } from "@/lib/sitePages";
import { absoluteUrl } from "@/lib/seo";
import { getPageFaqs } from "@/lib/faqs";
import { HERO_TRUST_BADGES } from "@/lib/hero";
import ReferenceHomepage from "@/components/home/ReferenceHomepage";
import ReferenceServicePage from "@/components/home/ReferenceServicePage";

const SITE_HOSTS = new Set([
  "cwmigrationgroup.com",
  "www.cwmigrationgroup.com",
  "commonwealthmigration.ca",
  "www.commonwealthmigration.ca",
]);

// Re-exported so existing callers (catch-all route, PageIndexGrid) keep working
export { rebrand, localizeUrl };

function localizeJsonLdValue(value) {
  if (Array.isArray(value)) return value.map(localizeJsonLdValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, localizeJsonLdValue(item)]));
  }
  if (typeof value !== "string" || !/^https?:\/\//i.test(value)) return value;

  try {
    const parsed = new URL(value);
    const hostname = parsed.hostname.toLowerCase();
    if (!SITE_HOSTS.has(hostname)) return value;
    return new URL(localizeUrl(value), site.url).toString();
  } catch {
    return value;
  }
}

function cleanJsonLd(obj) {
  const clone = localizeJsonLdValue(JSON.parse(JSON.stringify(obj)));
  if (Array.isArray(clone.sameAs)) {
    clone.sameAs = [];
    for (const url of Object.values(site.social)) {
      if (url && !clone.sameAs.includes(url)) clone.sameAs.push(url);
    }
    if (clone.sameAs.length === 0) delete clone.sameAs;
  }
  return clone;
}

const MANAGED_SCHEMA_TYPES = new Set(["WebPage", "BreadcrumbList", "Service", "FAQPage", "Article"]);

function hasManagedType(value) {
  const types = Array.isArray(value) ? value : [value];
  return types.some((type) => MANAGED_SCHEMA_TYPES.has(type));
}

function stripManagedSchema(obj) {
  const clone = cleanJsonLd(obj);
  if (hasManagedType(clone?.["@type"])) return null;
  if (!Array.isArray(clone?.["@graph"])) return clone;
  return {
    ...clone,
    "@graph": clone["@graph"].filter((node) => !hasManagedType(node?.["@type"])),
  };
}

export function pageStructuredData(page) {
  const url = absoluteUrl(page.path);
  const organizationId = `${site.url}#organization`;
  const websiteId = `${site.url}#website`;
  const breadcrumbTrail = breadcrumbsFor(page.path, page.h1);
  const breadcrumbs = breadcrumbTrail.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.label,
    item: absoluteUrl(crumb.href),
  }));
  const sourceSchemas = (page.jsonLd || []).map(stripManagedSchema).filter(Boolean).filter((schema) => !Array.isArray(schema?.["@graph"]) || schema["@graph"].length > 0);
  const schemas = [
    ...sourceSchemas,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.h1,
      description: page.seo?.description || site.description,
      inLanguage: "en-CA",
      ...(page.meta?.lastModified ? { dateModified: page.meta.lastModified } : {}),
      isPartOf: { "@id": websiteId },
      publisher: { "@id": organizationId },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbs,
    },
  ];

  const servicePath = /^\/(immigrate|work-and-study|visit|sponsor|citizenship|inadmissibility-and-appeals)(\/|$)/.test(page.path);
  if (servicePath) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      serviceType: page.h1,
      description: page.seo?.description || site.description,
      provider: { "@id": organizationId },
      areaServed: { "@type": "Country", name: "Canada" },
      url,
    });
  }

  const faqs = getPageFaqs(page);
  if (faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      url,
      inLanguage: "en-CA",
      isPartOf: { "@id": `${url}#webpage` },
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  if (page.path.startsWith("/blog/")) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: page.h1,
      description: page.seo?.description || site.description,
      url,
      inLanguage: "en-CA",
      ...(page.meta?.lastModified ? { dateModified: page.meta.lastModified } : {}),
      author: { "@id": organizationId },
      publisher: { "@id": organizationId },
      mainEntityOfPage: { "@id": `${url}#webpage` },
    });
  }
  return schemas;
}

function getHeroContent(page) {
  const heroBlocks = parseBlocks(page.hero);
  const contentPreviewBlocks = heroBlocks.length > 0 ? heroBlocks : parseBlocks(page.content);
  const titleIndex = heroBlocks.findIndex((block) => block.type === "heading" && block.level === 1);
  const titleBlock = titleIndex >= 0 ? heroBlocks[titleIndex] : null;
  const contentTitle = contentPreviewBlocks.find((block) => block.type === "heading" && block.level >= 2);
  const heroTitle = rebrand(titleBlock?.text || contentTitle?.text || page.h1);
  const supportingBlocks = contentPreviewBlocks.slice(titleIndex >= 0 ? titleIndex + 1 : 0);
  const leadBlock = supportingBlocks.find((block) => block.type === "paragraph");
  const badgeBlock = supportingBlocks.find((block) => block.type === "list");
  const badges = badgeBlock?.items?.map((item) => rebrand(item).replace(/^[·•→\s]+/, "").trim()).filter(Boolean).slice(0, 3);
  return {
    title: heroTitle,
    breadcrumbs: page.path === "/" ? [] : breadcrumbsFor(page.path, heroTitle),
    leadBlock,
    badges: badges?.length ? badges : HERO_TRUST_BADGES,
  };
}

/* ContentPage — unified new theme (no maple leaf, .env-driven dark/light) */
export default function ContentPage({ page, children }) {
  if (page.path === "/") {
    return (
      <>
        <ReferenceHomepage page={page} heroData={getHeroContent(page)} />
        {pageStructuredData(page).map((obj, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: rebrand(JSON.stringify(obj)) }} />
        ))}
      </>
    );
  }

  // Explicit service and tool pages share the service visual system.
  return (
    <>
      <ReferenceServicePage page={page}>{children}</ReferenceServicePage>
      {pageStructuredData(page).map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: rebrand(JSON.stringify(obj)) }} />
      ))}
    </>
  );
}
