import { buildMetadata } from "@/lib/seo";
import { getPage } from "@/lib/sitePages";
import ToolShell from "@/components/templates/ToolShell";
import DocumentChecklist from "@/components/tools/DocumentChecklist";

const pagePath = "/tools/document-checklist-canada";
const page = getPage(pagePath);

export const metadata = buildMetadata({
  title: "Canada Immigration Document Checklist | Express Entry",
  description: "Use a Canada immigration document checklist for Express Entry, study permits, work permits and sponsorship. Organize your file, then verify the IRCC guide.",
  path: pagePath,
  keywords: ["Canada immigration document checklist", "Express Entry document checklist", "immigration documents Canada"],
});

export default function DocumentChecklistPage() {
  return (
    <ToolShell
      eyebrow="Free tool"
      title="Document Checklist"
      lead="Track the documents you need for the most common application types — with a live progress bar as you go."
      pagePath={pagePath}
    >
      <DocumentChecklist />
    </ToolShell>
  );
}
