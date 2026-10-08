import { buildMetadata, serializeJsonLd } from "@/lib/seo";
import { pageStructuredData } from "@/components/templates/ContentPage";
import PnpDrawsPage from "@/components/draws/PnpDrawsPage";

const page = {
  path: "/pnp-draws",
  h1: "PNP Draw Results Canada: Provincial Invitation Rounds",
  seo: {
    description: "Track Canadian PNP draw results by province, stream, date, score or selection signal, and invitations, with official source links for each historical round.",
  },
  meta: { lastModified: "2026-10-08" },
  jsonLd: [],
};

export const metadata = buildMetadata({
  title: "PNP Draw Results Canada | Provincial Nominee Tracker",
  description: "Track Canadian PNP draw results by province, stream, date, score or selection signal, and invitations, with official source links for each historical round.",
  path: "/pnp-draws",
  keywords: [
    "PNP draw results Canada",
    "provincial nominee draws",
    "PNP invitation rounds",
    "provincial nominee program cutoff",
    "provincial nomination draw results",
    "Canadian PNP streams",
    "BC PNP draws",
    "AAIP draws",
    "OINP draws",
  ],
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
