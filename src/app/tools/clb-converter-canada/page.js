import { permanentRedirect } from "next/navigation";

export default function LegacyClbCalculatorPage() {
  permanentRedirect("/tools/clb-calculator");
}
