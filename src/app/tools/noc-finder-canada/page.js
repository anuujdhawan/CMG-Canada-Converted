import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/sitePages";
import ToolShell from "@/components/templates/ToolShell";
import NocFinder from "@/components/tools/NocFinder";

const pagePath = "/tools/noc-finder-canada";
const page = getPage(pagePath);

export const metadata = buildMetadata({
  title: "NOC Finder Canada | Occupation & TEER Code",
  description: "Find a likely Canada NOC and TEER category by searching occupation titles or codes. Compare your real duties with the current NOC description before using it.",
  path: pagePath,
  keywords: ["NOC finder Canada", "NOC code search", "TEER category Canada"],
});

export default function NocFinderPage() {
  return (
    <ToolShell
      eyebrow="Free tool"
      title="NOC / Occupation Finder"
      lead="Find your occupation's NOC code and TEER category — the starting point for Express Entry, LMIA and most program eligibility."
      pagePath={pagePath}
    >
      <NocFinder />
    </ToolShell>
  );
}
