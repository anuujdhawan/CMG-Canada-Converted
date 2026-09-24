import { notFound } from "next/navigation";
import { RESEARCH_BLOG_BY_SLUG, RESEARCH_BLOG_POSTS } from "@/data/blog-research";
import { getBlogArticle } from "@/data/blog-articles";
import { articleStructuredData } from "@/lib/blogArticleSchema";
import { buildMetadata } from "@/lib/seo";
import BlogArticlePage from "@/components/blog/BlogArticlePage";

export const dynamicParams = false;

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

export default async function ResearchBlogArticle({ params }) {
  const { slug } = await params;
  const post = RESEARCH_BLOG_BY_SLUG[slug];
  if (!post) notFound();
  const article = getBlogArticle(slug);
  return (
    <>
      <BlogArticlePage post={post} article={article} />
      {articleStructuredData(post, article).map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}
