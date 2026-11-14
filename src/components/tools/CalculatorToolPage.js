import ToolShell from "@/components/templates/ToolShell";
import ClbConverter from "@/components/tools/ClbConverter";
import CrsCalculator from "@/components/tools/CrsCalculator";
import Fsw67Calculator from "@/components/tools/Fsw67Calculator";
import PnpProgramExperienceGate from "@/components/tools/PnpProgramExperienceGate";
import RuralCommunityChecker from "@/components/tools/RuralCommunityChecker";
import { PNP_PROGRAMS } from "@/data/pnp-programs";

function getTerritoryProgram(tool) {
  const base = PNP_PROGRAMS[tool.programKey];
  if (!base || !tool.streamKey) return base;

  const stream = (base.streams || []).find((item) => item.key === tool.streamKey);
  if (!stream) return null;

  const isNwt = tool.streamKey === "nwt";
  const isYukon = tool.streamKey === "yukon";
  const source = isNwt ? base.secondarySource || base.source : base.source;
  const snapshot = isYukon
    ? {
        title: "Yukon 2026",
        stats: (base.snapshot?.stats || []).filter((stat) => !/nunavut/i.test(stat.label)).slice(0, 3),
      }
    : {
        title: "NWT Employer-Driven EOI",
        stats: [
          { value: String(stream.maxScore || 845), label: "Maximum published EOI score" },
          { value: "Employer-led", label: "Selection model" },
        ],
      };

  return {
    ...base,
    key: tool.streamKey,
    shortName: isNwt ? "NWT PNP" : "Yukon Nominee Program",
    regionLabel: isNwt ? "Northwest Territories" : "Yukon",
    h1Label: isNwt ? "Northwest Territories" : "Yukon",
    focus: stream.focus || base.focus,
    source,
    secondarySource: undefined,
    snapshot,
    streams: [stream],
    draws: (base.draws || []).filter((draw) => draw.streamKey === tool.streamKey),
  };
}

function CalculatorContent({ calculator }) {
  if (calculator.type === "clb") return <ClbConverter />;
  if (calculator.type === "crs") return <CrsCalculator />;
  if (calculator.type === "fsw") return <Fsw67Calculator />;
  if (calculator.type === "rcip") return <RuralCommunityChecker />;
  if (calculator.type === "pnp") {
    const program = getTerritoryProgram(calculator);
    return program ? <PnpProgramExperienceGate program={program} /> : null;
  }
  return null;
}

export default function CalculatorToolPage({ calculator }) {
  return (
    <ToolShell
      title={calculator.title}
      lead={calculator.lead}
      pagePath={`/tools/${calculator.slug}`}
      interactiveWide={calculator.type === "pnp"}
      interactiveHeading={{
        eyebrow: calculator.category,
        title: calculator.sectionHeading,
        lead: calculator.sectionLead,
      }}
    >
      <CalculatorContent calculator={calculator} />
    </ToolShell>
  );
}
