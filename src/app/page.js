import { getPage } from "@/lib/sitePages";
import ContentPage from "@/components/templates/ContentPage";

const page = getPage("/");

export default function HomePage() {
  return <ContentPage page={page} />;
}
