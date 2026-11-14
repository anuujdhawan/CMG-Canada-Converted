import { buildMetadata } from "@/lib/seo";
import ToolShell from "@/components/templates/ToolShell";
import RuralCommunityChecker from "@/components/tools/RuralCommunityChecker";

const pagePath = "/tools/rural-community-immigration-program-canada";

export const metadata = buildMetadata({
  title: "Rural Community Immigration Program Eligibility Checker",
  description: "Review the permanent RCIP pathway requirements for a community recommendation, designated-employer offer, work, language, education and settlement funds.",
  path: pagePath,
  keywords: ["Rural Community Immigration Program checker", "RCIP eligibility Canada", "RCIP program opens 2027", "rural immigration Canada"],
});

export default function RuralCommunityProgramPage() {
  return (
    <ToolShell
      title="Rural Community Immigration Program Checker"
      lead="Check the core requirements for Canada’s permanent rural community immigration pathway, opening January 1, 2027."
      pagePath={pagePath}
    >
      <RuralCommunityChecker />
    </ToolShell>
  );
}
