import { buildMetadata } from "@/lib/seo";
import ToolShell from "@/components/templates/ToolShell";
import ClbConverter from "@/components/tools/ClbConverter";

const pagePath = "/tools/clb-converter-canada";

export const metadata = buildMetadata({
  title: "CLB Converter Canada | IELTS, CELPIP, PTE, TEF and TCF",
  description: "Convert approved Express Entry language test scores to CLB or NCLC by speaking, listening, reading and writing.",
  path: pagePath,
  keywords: ["CLB converter Canada", "IELTS to CLB calculator", "CELPIP CLB score", "PTE Core CLB converter", "TEF Canada NCLC converter", "TCF Canada NCLC converter"],
});

export default function ClbConverterPage() {
  return (
    <ToolShell
      title="CLB / NCLC Language Score Converter"
      lead="Convert approved English and French language test results to a Canadian benchmark level for Express Entry planning."
      pagePath={pagePath}
    >
      <ClbConverter />
    </ToolShell>
  );
}
