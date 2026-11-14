import { permanentRedirect } from "next/navigation";

export default function LegacyCrsCalculatorPage() {
  permanentRedirect("/tools/crs-calculator");
}
