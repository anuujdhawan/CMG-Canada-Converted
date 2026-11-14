import { getPage } from "@/lib/sitePages";
import ContentPage from "@/components/templates/ContentPage";
import InteractiveToolsGrid from "@/components/sections/InteractiveToolsGrid";
import PageIndexGrid from "@/components/sections/PageIndexGrid";
import { buildMetadata } from "@/lib/seo";
import { calculatorTools } from "@/data/calculatorTools";

const pagePath = "/tools/canada-immigration-calculators";
const toolsPage = getPage(pagePath);

export const metadata = buildMetadata({
  title: "Canada Immigration Calculators & Eligibility Tools",
  description: "Estimate a CRS score, screen PNP options, find an occupation code or organize documents with free Canadian immigration tools.",
  path: pagePath,
  keywords: [
    "Canada immigration calculators",
    "free Canadian immigration tools",
    "CRS calculator Canada with spouse",
    "PNP eligibility checker Canada online",
    "NOC finder Canada by job duties",
    "Canadian immigration document checklist by application type",
    "free Canada immigration assessment",
  ],
});

export default function ToolsPage() {
  if (!toolsPage) return null;
  return (
    <ContentPage page={toolsPage}>
      <InteractiveToolsGrid
        items={calculatorTools}
        eyebrow="15 focused calculators"
        title="Canadian immigration calculators"
        lead="Open a dedicated calculator for language scores, Express Entry points, provincial pathways or regional programs. Each tool shares the CMG interface and links to the official source behind its estimate."
      />
      <PageIndexGrid pathname={pagePath} />
    </ContentPage>
  );
}
