/**
 * Structured data for the research guides under `/blog/<slug>`.
 *
 * Lives in `lib/` rather than inline in the route so it can be imported and
 * asserted against the rendered page — the one check that actually matters here
 * is that `FAQPage.mainEntity` has exactly as many entries as the FAQ accordion
 * has items, and that every `speakable` selector resolves to a rendered id.
 *
 * Deliberately hand-built rather than reusing `pageStructuredData`: that helper
 * attaches a `FAQPage` synthesised from `candidateFaqItems`, which invents
 * generic questions ("What does this … guide cover?") for pages that have none.
 * Everything emitted here mirrors content that is actually on the page.
 */

import { absoluteUrl } from "./seo";
import { site } from "@/config/site";
import { countArticleWords } from "@/data/blog-articles";

/** Editorial review date stamped on every research guide. */
export const REVIEWED = "2026-09-21";

/** Rough reading speed used for `timeRequired`, in words per minute. */
const WORDS_PER_MINUTE = 220;

export function articleStructuredData(post, article) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const wordCount = countArticleWords(article);
  const nodes = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.description,
      keywords: post.keywords,
      inLanguage: "en-CA",
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      author: { "@id": `${site.url}#organization` },
      publisher: { "@id": `${site.url}#organization` },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
      citation: post.source,
      articleSection: post.category,
      isAccessibleForFree: true,
      ...(wordCount > 0 && {
        wordCount,
        timeRequired: `PT${Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))}M`,
        // Point an answer engine at the summary and takeaways rather than making
        // it guess which paragraph on the page is the answer.
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#quick-answer", "#key-takeaways"],
        },
      }),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (article?.faqs?.length) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: article.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  if (article?.glossary?.length) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      "@id": `${url}#glossary`,
      name: `${post.title} — key terms`,
      hasDefinedTerm: article.glossary.map((entry) => ({
        "@type": "DefinedTerm",
        name: entry.term,
        description: entry.definition,
        inDefinedTermSet: `${url}#glossary`,
      })),
    });
  }

  if (article) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: post.title,
      inLanguage: "en-CA",
      isPartOf: { "@id": `${site.url}#website` },
      about: { "@id": `${url}#article` },
      ...(article.sources?.length && { significantLink: article.sources.map((source) => source.url) }),
    });
  }

  return nodes;
}

export default articleStructuredData;
