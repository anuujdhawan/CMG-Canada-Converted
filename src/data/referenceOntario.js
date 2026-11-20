import { ALL_LOCATIONS, getLocation, getResult, scoreAnswers } from "@/components/tools/OinpWorkforceCalculator";
import { checkField, number, options, select, yesNo } from "./referenceProvincialFields";

const routes = options(["teer-0-3", "Job offer · TEER 0–3"], ["teer-4-5", "Job offer · TEER 4–5"], ["physician", "Self-employed physician"]);
const status = options(["workPermit", "Valid work permit"], ["studyPermit", "Valid study permit"], ["other", "No work or study permit"]);
const education = options(["doctorate", "Doctorate or professional degree"], ["masters", "Master’s degree"], ["aboveBachelor", "Postgraduate certificate or diploma"], ["bachelor", "Bachelor’s degree"], ["college", "College or university diploma"], ["trade", "Trade certificate"], ["secondary", "Secondary school"], ["belowSecondary", "Below secondary school"]);
const educationOptions = education.flatMap(({ value, label }) => [
  { value: `${value}:canada:yes`, label: `${label} · Canada` },
  { value: `${value}:foreign:yes`, label: `${label} · Canadian ECA` },
  { value: `${value}:foreign:no`, label: `${label} · no valid ECA` },
]);
const earnings = options(["under30", "Under $30,000"], ["from30", "$30,000–$49,999"], ["from50", "$50,000–$69,999 · CRA NOA"], ["from70", "$70,000–$79,999"], ["from80", "$80,000 or more"]);
const locations = ALL_LOCATIONS.map(({ value, label }) => ({ value, label: value === "Peel" ? "Brampton · GTA outside Toronto" : label }));
const categories = ["Legislative and senior managers", "Business, finance and administration", "Natural and applied sciences", "Health", "Education, law and social services", "Art, culture, recreation and sport", "Sales and service", "Trades, transport and equipment", "Natural resources and agriculture", "Manufacturing and utilities"];
const language = options(["clb9", "Valid test · CLB/NCLC 9+"], ["clb8", "CLB 8 · lowest of four"], ["clb7", "Valid test · CLB/NCLC 7"], ["clb6", "Valid test · CLB/NCLC 6"], ["clb5", "Valid test · CLB/NCLC 5 or below"], ["none", "No valid test"]);

export function ontario() {
  const location = select("location", "Work site", "Peel", locations);
  const baseFields = [
    select("earnings", "Canadian earnings in one year", "from50", earnings),
    select("credential", "Highest education", "bachelor:foreign:yes", educationOptions),
    select("canadianCredentials", "Canadian credentials", "none", options(["none", "None"], ["one", "One qualifying credential"], ["multiple", "More than one qualifying credential"])),
    select("languageLevel", "Best valid language result", "clb8", language),
    select("bothLanguages", "Official languages claimed", "no", options(["no", "English only"], ["yes", "English and French · CLB/NCLC 6+"])),
  ];
  const months = options(["0", "None claimed"], ["3", "3 months"], ["6", "6 months"], ["10", "10 months"], ["13", "13–24 months"], ["25", "More than 24 months"]);
  const offer = select("fullTimePermanent", "Offer and prevailing wage check", "yes", options(["yes", "Full-time, permanent · wage verified"], ["review", "Wage evidence to confirm"], ["no", "Offer does not meet conditions"]));
  const legal = select("status", "Legal status in Canada", "workPermit", status);
  const variant = {
    controls: [location], section: "Job offer and EOI scoring factors",
    resultTitle: "Ontario EOI score", footerLabel: "Job offer route", footerValue: (a) => a.location === "Peel" ? "Brampton · 5 regional points" : a.location ? `${a.location} · ${getLocation(a.location).points} regional points` : "Select the work site",
    note: "This score uses the job offer factors. Ontario ranks eligible EOIs in its selection pools and requires evidence for claimed points.",
    guide: ["Physician route", "Use medical practice location and qualifying Ontario practice time. The self-employed physician grid uses practice points."],
  };
  return {
    title: "Ontario Workforce Priority", description: "Select the job offer or self-employed physician route and enter the EOI factors.",
    defaultRoute: "teer-0-3", routeField: select("route", "Application route", "teer-0-3", routes, { highlight: true }),
    variants: Object.fromEntries(routes.map(({ value: pathway }) => {
      const physician = pathway === "physician";
      const lowerTeer = pathway === "teer-4-5";
      const max = physician ? 117 : 132;
      return [pathway, {
        ...variant, max, ticks: physician ? [0, 30, 60, 90, max] : [0, 33, 66, 99, max], footerLabel: physician ? "Physician route" : variant.footerLabel,
        fields: physician ? [
          number("practiceMonths", "Time in Ontario medical practice", "", "months", { max: undefined }),
          select("ohipBilling", "Eligible to bill OHIP", "", yesNo),
          select("cpsoClass", "CPSO registration in good standing", "", options(["independent", "Independent practice"], ["academic", "Academic practice"], ["provisional", "Provisional"], ["none", "No qualifying class"])),
          checkField("selfEmployed", "Self-employed physician", ""), checkField("postgraduateOnly", "Postgraduate licence only", ""),
          legal, ...baseFields,
        ] : [
          select("occupation", "NOC code and occupational category", lowerTeer ? "teer-4-5:6" : "teer-2-3:2", (lowerTeer ? [["teer-4-5", "TEER 4 or 5"]] : [["teer-0-1", "TEER 0 or 1"], ["teer-2-3", "TEER 2 or 3"]]).flatMap(([teer, level]) => categories.map((label, index) => ({
            value: `${teer}:${index}`, label: teer === "teer-2-3" && index === 2 ? "22300 · TEER 2 · category 2" : `${level} · category ${index} · ${label}`,
          })))),
          number("hourlyWage", "Base hourly wage", "40.00", "CAD / hour", { step: 0.01, max: undefined }),
          offer, legal,
          select("positionMonths", "Time in this Ontario job", "10", months), select("otherOntarioMonths", "Other Ontario work experience", "0", months),
          baseFields[0],
          select("experienceMethod", "Occupation requirements", lowerTeer ? "position6" : "sameNoc2", options(["position6", "6+ months in the offered job"], ["sameNoc2", "2+ years in same NOC · verified"], ["licence", "Required Ontario licence"], ["graduate3", "Eligible Ontario graduate · 3+ months"], ["review", "Requirements to verify"])),
          ...baseFields.slice(1),
        ],
        score(a) {
          const [education, educationOrigin, ecaValid] = (a.credential ?? "").split(":");
          const [teer, nocCategory] = (a.occupation ?? "").split(":");
          const input = { ...a, pathway, teer, nocCategory, education, educationOrigin, ecaValid, sameNocYears: a.experienceMethod === "sameNoc2" ? 2 : undefined, licenceValid: a.experienceMethod === "licence" ? "yes" : undefined, recentGraduate: a.experienceMethod === "graduate3" ? "yes" : undefined, languageTestValid: a.languageLevel && a.languageLevel !== "none" ? "yes" : "no" };
          const location = a.location ? getLocation(a.location) : { points: 0, tier: "" };
          const { factors } = scoreAnswers(input, location);
          const labels = ["Employment and labour market", "Education and Canadian credentials", "Official languages", "Work location"];
          const grouped = [factors.slice(0, -5), factors.slice(-5, -3), factors.slice(-3, -1), factors.slice(-1)];
          const rows = grouped.map((rows, index) => ({ label: labels[index], points: rows.reduce((sum, [, value]) => sum + value, 0), max: rows.reduce((sum, [, , value]) => sum + value, 0) }));
          const { failures } = getResult(input, location);
          return { value: rows.reduce((sum, row) => sum + row.points, 0), max, rows, failures };
        },
        callout: physician
          ? ["Physician pathway", "Confirm eligible CPSO registration, OHIP billing and self-employed practice. This route uses a 117-point maximum."]
          : ["Eligibility comes first", "Confirm the employer, permanent offer, qualifying work history and any mandatory licence. Self-employed physicians supply CPSO and OHIP details."],
      }];
    })),
  };
}
