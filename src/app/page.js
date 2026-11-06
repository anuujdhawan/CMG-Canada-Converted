import { getPage } from "@/lib/sitePages";
import { attachClientFaqs } from "@/lib/clientFaqs";
import { buildMetadata, getPageShareImage } from "@/lib/seo";
import ContentPage from "@/components/templates/ContentPage";

const page = attachClientFaqs(getPage("/"));

export const metadata = buildMetadata({
  title: page?.seo?.title || page?.h1,
  description: page?.seo?.description,
  path: "/",
  keywords: page?.seo?.keywords,
  image: getPageShareImage(page),
});

export default function HomePage() {
  return <ContentPage page={page} />;
}
