import { buildMetadata, serializeJsonLd } from "@/lib/seo";
import { pageStructuredData } from "@/components/templates/ContentPage";
import PnpDrawsPage from "@/components/draws/PnpDrawsPage";

const page = {
  path: "/pnp-draws",
  h1: "PNP draw results, organized for real decisions",
  seo: {
    description: "Compare Canadian Provincial Nominee Program draw results by province, stream, selection method, score signal and invitations.",
  },
  meta: { lastModified: "2026-10-06" },
  jsonLd: [],
};

export const metadata = buildMetadata({
  title: "PNP Draw Results Canada | Provincial Nominee Program Tracker",
  description: "Compare Canadian PNP draw results by province, stream, selection method, score signal and invitations with source-linked provincial snapshots.",
  path: "/pnp-draws",
  keywords: ["PNP draw results Canada", "provincial nominee draws", "PNP invitation rounds", "provincial nominee program cutoff"],
});

export default function PnpDrawsRoute() {
  return (
    <>
      <PnpDrawsPage page={page} />
      {pageStructuredData(page, { includeFaq: true, pageType: "CollectionPage" }).map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(obj) }} />
      ))}
    </>
  );
}
