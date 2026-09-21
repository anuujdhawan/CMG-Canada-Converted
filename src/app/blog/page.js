import { getPage } from "@/lib/sitePages";
import { buildMetadata } from "@/lib/seo";
import { pageStructuredData } from "@/components/templates/ContentPage";
import BlogIndexPage from "@/components/blog/BlogIndexPage";
import { resolveBlogCategory, resolveBlogPage } from "@/lib/blog";

const TITLE = "Canada Immigration Blog | Express Entry & Work";
const DESCRIPTION = "Read practical Canada immigration guides on Express Entry, PNP, work and study permits, family sponsorship, visitor visas and refusals. Verify current rules.";

/**
 * The category and page come from the URL rather than component state, so every
 * view is shareable, crawlable and works without JavaScript — and so the
 * `/blog?category=…` links in the Resources menu actually land on the category
 * they name. Both values are normalised in `lib/blog`, so an unknown category
 * falls back to "all" and `?page=99` clamps to the last page instead of
 * rendering an empty grid.
 *
 * Reading `searchParams` makes this route dynamically rendered, which is the
 * trade for that behaviour.
 */
export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const isFiltered = Boolean(params?.category || params?.page);
  return buildMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/blog",
    keywords: ["Canada immigration blog", "Express Entry guides", "Canadian immigration advice"],
    // A filtered or paginated view is a slice of the same library, so it points
    // its canonical at /blog and stays out of the index rather than competing
    // with it.
    ...(isFiltered ? { noIndex: true } : {}),
  });
}

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const page = getPage("/blog");
  const activeCategory = resolveBlogCategory(params?.category);
  const activePage = resolveBlogPage(params?.page);
  return (
    <>
      <BlogIndexPage page={page} activeCategory={activeCategory} activePage={activePage} />
      {pageStructuredData(page).map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}
