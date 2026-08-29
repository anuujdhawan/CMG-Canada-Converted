import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getCmgPage, getCmgRoutePaths, getLegalPage, getLegalRoutePaths } from "@/lib/cmgPages";
import ContentPage from "@/components/templates/ContentPage";

export const dynamicParams = false;

const pathFromParams = (params) => `/${params.slug.join("/")}`;

export function generateStaticParams() {
  return [...getCmgRoutePaths(), ...getLegalRoutePaths()].map((path) => ({
    slug: path.split("/").filter(Boolean),
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const path = pathFromParams(resolvedParams);
  const page = getCmgPage(path) || getLegalPage(path);
  if (!page) return {};
  return buildMetadata({
    title: page.seo?.title || page.h1,
    description: page.seo?.description,
    path: page.path,
    keywords: page.seo?.keywords,
  });
}

export default async function SourcePageRoute({ params }) {
  const resolvedParams = await params;
  const path = pathFromParams(resolvedParams);
  const page = getCmgPage(path) || getLegalPage(path);
  if (!page) notFound();
  return <ContentPage page={page} />;
}
