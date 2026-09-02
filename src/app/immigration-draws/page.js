import { buildMetadata } from "@/lib/seo";
import ExpressEntryDrawsPage from "@/components/draws/ExpressEntryDrawsPage";

export const metadata = buildMetadata({
  title: "Express Entry Draws",
  description: "Review official Canadian Express Entry invitation rounds, CRS scores, invitations and tie-break cutoffs in one clear tracker.",
  path: "/immigration-draws",
  keywords: ["Express Entry draws", "Canada CRS draws", "IRCC invitation rounds"],
});

export default function ImmigrationDrawsRoute() {
  return <ExpressEntryDrawsPage />;
}
