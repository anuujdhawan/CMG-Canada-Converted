import { getPage } from "@/lib/sitePages";
import { buildMetadata } from "@/lib/seo";
import ContentPage from "@/components/templates/ContentPage";

const page = getPage("/");

export const metadata = buildMetadata({
  title: page?.seo?.title || page?.h1,
  description: page?.seo?.description,
  path: "/",
  keywords: page?.seo?.keywords,
});

export default function HomePage() {
  return <ContentPage page={page} />;
}
