import { getPage } from "@/lib/sitePages";
import ContentPage from "@/components/templates/ContentPage";
import CrsCalculator from "@/components/tools/CrsCalculator";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/tools/crs-calculator-canada";
const crsPage = getPage(pagePath);

export const metadata = buildMetadata({
  title: "CRS Calculator Canada | Express Entry Score Estimate",
  description: "Estimate your Express Entry CRS score with this simplified Canada calculator. It omits IRCC's 2026 Labour Market Integration factor.",
  path: pagePath,
  keywords: [
    "CRS calculator Canada",
    "Express Entry score calculator",
    "Canada CRS score estimate",
    "free CRS calculator Canada with spouse",
    "how to calculate CRS score with a spouse",
    "simplified Express Entry CRS estimate",
    "CRS calculator Canada with spouse",
    "why a CRS calculator differs from IRCC score",
    "official IRCC CRS calculator",
  ],
});

export default function CrsCalculatorPage() {
  if (!crsPage) return null;
  return (
    <ContentPage page={crsPage}>
      <CrsCalculator />
    </ContentPage>
  );
}
