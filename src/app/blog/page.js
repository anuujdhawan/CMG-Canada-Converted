import { getPage } from "@/lib/sitePages";
import { buildMetadata } from "@/lib/seo";
import { pageStructuredData } from "@/components/templates/ContentPage";
import BlogIndexPage from "@/components/blog/BlogIndexPage";

export const dynamicParams = false;

export function generateMetadata() {
  const title = "Canada Immigration Blog | Express Entry & Work";
  const description = "Read practical Canada immigration guides on Express Entry, PNP, work and study permits, family sponsorship, visitor visas and refusals. Verify current rules.";
  return buildMetadata({
    title,
    description,
    path: "/blog",
    keywords: ["Canada immigration blog", "Express Entry guides", "Canadian immigration advice"],
  });
}

export default function BlogPage() {
  const page = getPage("/blog");
  return (
    <>
      <BlogIndexPage page={page} />
      {pageStructuredData(page).map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}
