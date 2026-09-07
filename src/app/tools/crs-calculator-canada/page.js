import { getPage } from "@/lib/sitePages";
import ContentPage from "@/components/templates/ContentPage";
import CrsCalculator from "@/components/tools/CrsCalculator";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/tools/crs-calculator-canada";
const crsPage = getPage(pagePath);

export const metadata = buildMetadata({
  title: "CRS Calculator Canada | Express Entry Score",
  description: "Use a free CRS calculator Canada to estimate your Express Entry score, review key factors and compare the result with current IRCC criteria.",
  path: pagePath,
  keywords: ["CRS calculator Canada", "Express Entry score calculator", "Canada CRS score"],
});

export default function CrsCalculatorPage() {
  if (!crsPage) return null;
  return (
    <ContentPage page={crsPage}>
      <CrsCalculator />
    </ContentPage>
  );
}
