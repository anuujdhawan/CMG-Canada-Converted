import { buildMetadata } from "@/lib/seo";
import { pageStructuredData } from "@/components/templates/ContentPage";
import ExpressEntryDrawsPage from "@/components/draws/ExpressEntryDrawsPage";

const page = {
  path: "/immigration-draws",
  h1: "Express Entry draws, clearly explained",
  seo: {
    description: "Review official Canadian Express Entry invitation rounds, CRS scores, invitations and tie-break cutoffs in one clear tracker.",
  },
  meta: { lastModified: "2026-09-07" },
  jsonLd: [],
};

export const metadata = buildMetadata({
  title: "Express Entry Draws Canada | CRS Cutoffs",
  description: "Track Canada Express Entry draws with official IRCC dates, CRS cutoffs, invitation counts, draw types and tie-break details for immigration planning.",
  path: "/immigration-draws",
  keywords: ["Express Entry draws Canada", "CRS cutoff", "IRCC invitation rounds"],
});

export default function ImmigrationDrawsRoute() {
  return (
    <>
      <ExpressEntryDrawsPage page={page} />
      {pageStructuredData(page).map((obj, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </>
  );
}
