import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/sitePages";
import ToolShell from "@/components/templates/ToolShell";
import PnpEligibility from "@/components/tools/PnpEligibility";

const pagePath = "/tools/pnp-eligibility-canada";
const page = getPage(pagePath);

export const metadata = buildMetadata({
  title: "PNP Eligibility Check Canada | Provincial Nominee",
  description: "Check which Canadian provincial nominee categories may fit your profile, then verify province-specific criteria, intake and documents before applying.",
  path: pagePath,
  keywords: ["PNP eligibility check", "provincial nominee program Canada", "PNP calculator"],
});

export default function PnpEligibilityPage() {
  return (
    <ToolShell
      eyebrow="Free tool"
      title="PNP Eligibility Check"
      lead="A quick, private questionnaire that maps your profile to the provincial nomination stream categories most likely to fit."
      pagePath={pagePath}
    >
      <PnpEligibility />
    </ToolShell>
  );
}
