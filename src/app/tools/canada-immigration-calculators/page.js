import { getPage } from "@/lib/sitePages";
import ContentPage from "@/components/templates/ContentPage";
import InteractiveToolsGrid from "@/components/sections/InteractiveToolsGrid";
import PageIndexGrid from "@/components/sections/PageIndexGrid";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/tools/canada-immigration-calculators";
const toolsPage = getPage(pagePath);

export const metadata = buildMetadata({
  title: "Canada Immigration Calculators | CRS & PNP",
  description: "Use free Canada immigration calculators for CRS, PNP, CLB and FSW planning. Compare your estimate with current IRCC criteria before you apply.",
  path: pagePath,
  keywords: ["Canada immigration calculators", "CRS calculator", "PNP eligibility checker"],
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
