import { buildMetadata } from "@/lib/seo";
import ToolShell from "@/components/templates/ToolShell";
import Fsw67Calculator from "@/components/tools/Fsw67Calculator";

const pagePath = "/tools/fsw-67-point-calculator-canada";

export const metadata = buildMetadata({
  title: "Federal Skilled Worker 67-point Calculator Canada",
  description: "Calculate the FSW selection factor score out of 100 and review core Federal Skilled Worker program checks.",
  path: pagePath,
  keywords: ["FSW 67 point calculator", "Federal Skilled Worker points calculator", "FSW eligibility score Canada", "FSW selection factors"],
});

export default function Fsw67CalculatorPage() {
  return (
    <ToolShell
      title="Federal Skilled Worker 67-point Calculator"
      lead="Calculate the 100-point Federal Skilled Worker selection grid and review the key requirements before building an Express Entry profile."
      pagePath={pagePath}
    >
      <Fsw67Calculator />
    </ToolShell>
  );
}
