import { getPage } from "@/lib/sitePages";
import ReferenceServicePage from "@/components/home/ReferenceServicePage";
import { pageStructuredData } from "@/components/templates/ContentPage";

export default function ToolShell({ eyebrow, title, lead, currentSlug, pagePath: explicitPagePath, children }) {
  const pagePath = explicitPagePath || `/tools/${currentSlug}`;
  const page = getPage(pagePath) || {
    path: pagePath,
    h1: title,
    seo: { description: lead },
    headingOutline: [],
    jsonLd: [],
  };
  // Tool routes use the same reusable reference service shell as every other
  // content route. This keeps the hero, typography, motion, footer and both
  // theme palettes in one place instead of maintaining a second tool theme.
  const resolvedPage = { ...page, h1: page.h1 || title };
  return (
    <>
      <ReferenceServicePage page={resolvedPage}>{children}</ReferenceServicePage>
      {pageStructuredData(resolvedPage).map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}
