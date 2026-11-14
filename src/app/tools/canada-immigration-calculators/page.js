import { getPage } from "@/lib/sitePages";
import ContentPage from "@/components/templates/ContentPage";
import InteractiveToolsGrid from "@/components/sections/InteractiveToolsGrid";
import PageIndexGrid from "@/components/sections/PageIndexGrid";
import { buildMetadata } from "@/lib/seo";

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
      <InteractiveToolsGrid />
      <PageIndexGrid pathname={pagePath} />
    </ContentPage>
  );
}
