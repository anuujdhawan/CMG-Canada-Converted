import { getPage } from "@/lib/sitePages";
import ContentPage from "@/components/templates/ContentPage";
import PageIndexGrid from "@/components/sections/PageIndexGrid";

const pagePath = "/immigration-services/canada-immigration-services-for-individuals";
const page = getPage(pagePath);

export const metadata = {
  title: page?.seo?.title || page?.h1 || "Canada Immigration Services for Individuals",
  description: page?.seo?.description,
  alternates: { canonical: pagePath },
};

export default function CanadaImmigrationServicesPage() {
  return (
    <ContentPage page={page}>
      <PageIndexGrid pathname={pagePath} />
    </ContentPage>
  );
}
