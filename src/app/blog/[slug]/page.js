import { notFound } from "next/navigation";
import { RESEARCH_BLOG_BY_SLUG, RESEARCH_BLOG_POSTS } from "@/data/blog-research";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { site } from "@/config/site";
import BlogArticlePage from "@/components/blog/BlogArticlePage";

export const dynamicParams = false;

/** Editorial review date stamped on every research guide. */
const REVIEWED = "2026-09-21";

export function generateStaticParams() {
  return RESEARCH_BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = RESEARCH_BLOG_BY_SLUG[slug];
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    keywords: post.keywords.split("; "),
  });
}

/**
 * Structured data for a guide.
 *
 * Deliberately hand-built rather than reusing `pageStructuredData`: that helper
 * attaches a `FAQPage` built from `candidateFaqItems`, which synthesises generic
 * questions ("What does this … guide cover?") for any page that has none. A
 * `FAQPage` must correspond to questions visible on the page, and these guides
 * render no FAQ, so emitting one would be markup that does not match the page.
 * The `Article` and `BreadcrumbList` below both mirror content that is actually
 * rendered — the breadcrumb trail is in the article header, and `citation`
 * points at the same official source the reader is given.
 */
function articleStructuredData(post) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return [
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
}

export default async function ResearchBlogArticle({ params }) {
  const { slug } = await params;
  const post = RESEARCH_BLOG_BY_SLUG[slug];
  if (!post) notFound();
  return (
    <>
      <BlogArticlePage post={post} />
      {articleStructuredData(post).map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}
