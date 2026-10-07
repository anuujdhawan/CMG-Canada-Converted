import { buildMetadata, serializeJsonLd } from "@/lib/seo";
import { pageStructuredData } from "@/components/templates/ContentPage";
import NewsIndexPage from "@/components/blog/NewsIndexPage";

const LEAD = "Track policy changes, program announcements and processing updates that affect Canadian immigration applications — each one linked to the official source it is based on.";
const page = {
  path: "/canada-immigration-news",
  h1: "Canada immigration news and IRCC updates",
  seo: { description: "Current Canada immigration news, IRCC updates and policy changes explained for applicants, families, students and employers." },
  meta: { lastModified: "2026-09-21" },
  jsonLd: [],
};

export const metadata = buildMetadata({
  title: "Canada Immigration News | IRCC Updates",
  description: "Current Canada immigration news, IRCC updates and policy changes explained for applicants, families, students and employers.",
  path: "/canada-immigration-news",
  keywords: ["Canada immigration news", "IRCC news", "Canada visa news", "Canada PR news"],
});

export default function CanadaImmigrationNewsPage() {
  return (
    <>
      <NewsIndexPage lead={LEAD} />
      {pageStructuredData(page, { includeFaq: false, pageType: "CollectionPage" }).map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(obj) }} />
      ))}
    </>
  );
}
