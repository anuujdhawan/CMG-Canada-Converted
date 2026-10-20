/*
 * Short context blocks used beside the main service tables.
 *
 * These blocks support answer-first search intent without exposing the
 * keyword research itself. Keep them concise because the surrounding page
 * already contains the detailed route guide.
 */

const normalizePath = (path = "") => String(path).split("?")[0].replace(/\/$/, "") || "/";
const block = (heading, text) => [
  { type: "heading", level: 2, text: heading },
  { type: "paragraph", text },
];

const FRAME_CONTENT = [
  {
    test: (path) => path === "/immigrate/business-immigration-and-start-up-visa",
    blocks: block(
      "Business visit or business immigration: which one fits?",
      "A business visit can cover meetings, conferences or market exploration, but it does not authorize someone to operate a Canadian business or take up employment. Compare the proposed activity, ownership, source of funds, province, employer facts and immigration goal before choosing between a visitor document, work permit, Start-Up Visa or entrepreneur stream.",
    ),
  },
  {
    test: (path) => path === "/immigrate/express-entry",
    blocks: block(
      "What can an Express Entry score tell you?",
      "A CRS estimate is a planning tool, not an invitation or a permanent-residence decision. Verify the language, education, work, NOC, family and nomination evidence behind the score, then compare the result with the current draw type and the federal application steps.",
    ),
  },
  {
    test: (path) => path === "/immigrate/ontario-pnp-oinp",
    blocks: block(
      "OINP documents should follow the selected stream",
      "Ontario nominee documents are only meaningful in the context of a specific OINP stream and intake. Match the occupation, job offer or human-capital claim to the current checklist, use the official account for status information and keep the later federal application separate from the provincial decision.",
    ),
  },
  {
    test: (path) => path === "/immigrate/pnp-linked-express-entry",
    blocks: block(
      "How does a provincial nomination affect Express Entry?",
      "A provincial nomination can materially change an Express Entry profile, but only after the applicant meets the province’s stream requirements and the applicable federal program rules. Verify the nomination process, profile facts, supporting documents and federal filing deadline before treating the nomination as a permanent-residence result.",
    ),
  },
  {
    test: (path) => /sponsor\/(spousal-and-partner-sponsorship-overview|spousal-common-law-sponsorship|inland-sponsorship|outland-sponsorship|conjugal-partner-sponsorship|sponsorship-processing-times|sponsorship-eligibility)/.test(path),
    blocks: block(
      "Spousal sponsorship forms, status and timelines",
      "Use the current IRCC package for the relationship category and applicant location. Forms, application status and processing estimates answer different questions: the forms control what is submitted, the account shows available updates and the estimate is not a promise. Organize relationship evidence, sponsor eligibility, civil records, fees and admissibility documents around the real timeline instead of copying an online forum experience.",
    ),
  },
  {
    test: (path) => path === "/work-and-study/lmia-and-employer-services-overview" || path === "/work-and-study/tfwp-employer-compliance",
    blocks: block(
      "LMIA processing and work-permit boundaries",
      "The employer’s LMIA process and the worker’s work-permit application are separate stages. Check the business, recruitment, wage, duties, location and employer-compliance evidence first, then verify the worker’s permit type, conditions and status. A posted vacancy, approval number or processing estimate does not authorize work by itself.",
    ),
  },
  {
    test: (path) => path === "/sponsor/spousal-open-work-permit",
    blocks: block(
      "SOWP Canada is a separate work-authorization stage",
      "A sponsored-spouse open work permit depends on the relationship, principal applicant’s status, current application stage and the rules in force. Keep it separate from the permanent-residence application, verify the current forms and conditions, and do not assume that a pending sponsorship automatically permits work.",
    ),
  },
  {
    test: (path) => path === "/work-and-study/canada-study-permit" || path === "/work-and-study/post-graduation-work-permit-pgwp",
    blocks: block(
      "Study permit planning and the post-study decision",
      "Match study permit requirements to the school, program, acceptance or attestation, funds and study purpose. Processing times and fees are changeable planning details. If a PGWP is part of the longer plan, verify the DLI, credential, program length, delivery format and current eligibility rules before paying tuition; study status does not guarantee post-study work or permanent residence.",
    ),
  },
  {
    test: (path) => path === "/visit/super-visa-standalone-page" || path === "/visit/visitor-visa-trv-and-super-visa-combined" || path === "/sponsor/super-visa-for-parents",
    blocks: block(
      "Super Visa cost, insurance and family evidence",
      "A Super Visa file should connect the parent or grandparent relationship, host eligibility, invitation, accommodation, financial support, medical evidence and required insurance. Verify policy coverage and fees against the current instructions. A processing estimate or sample invitation letter cannot replace evidence that matches the family’s actual visit plan.",
    ),
  },
  {
    test: (path) => path === "/visit/visitor-visa-trv-standalone-page" || path === "/visit/visitor-visa-trv-and-super-visa-combined",
    blocks: block(
      "Visitor visa applications should explain the trip",
      "Organize the Canada visitor visa application around purpose, dates, passport and residence, funding, host, itinerary, travel history and the intention to follow the temporary-stay conditions. Country-of-residence questions may change the forms or supporting documents. A visitor document does not automatically authorize work or study.",
    ),
  },
  {
    test: (path) => /about\/(about-commonwealth-migration|immigration-office-brampton-ontario|canada-immigration-consulting-process)/.test(path)
      || path === "/assessment/free-canada-immigration-assessment"
      || path === "/contact/book-immigration-consultation-canada",
    blocks: block(
      "How should you assess immigration reviews in Brampton?",
      "Reviews can help you ask better questions about communication, but they cannot prove authorization, eligibility or a likely result. Verify the professional’s current licence, experience with the exact pathway, written service scope, fees, privacy practices and deadline ownership against the applicable regulator and current IRCC instructions before sharing sensitive records.",
    ),
  },
];

export function getKeywordFrameContent(page) {
  const path = normalizePath(page?.path);
  return FRAME_CONTENT.find((entry) => entry.test(path))?.blocks || [];
}

export default getKeywordFrameContent;
