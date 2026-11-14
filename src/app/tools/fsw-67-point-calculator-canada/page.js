import { permanentRedirect } from "next/navigation";

export default function LegacyFswCalculatorPage() {
  permanentRedirect("/tools/fsw-67-point-calculator");
}
