/*
 * Focused keyword expansions for the table-side feature frame.
 *
 * The workbook phrases are grouped by the page's actual search intent and
 * written as short explanations. Keeping these blocks in the frame means
 * the visible comparison area gets useful depth without turning the page
 * into a keyword list or duplicating the main guide.
 */

const normalizePath = (path = "") => String(path).split("?")[0].replace(/\/$/, "") || "/";

const FRAME_CONTENT = [
  {
    test: (path) => path === "/immigrate/business-immigration-and-start-up-visa",
    blocks: [
      { type: "heading", level: 2, text: "Business visit versus business immigration: which route fits?" },
      {
        type: "paragraph",
        text: "Business visit visa canada and business visit visa for canada searches describe temporary activities such as meetings, conferences or market exploration; they do not replace a Start-Up Visa, an entrepreneur nomination or work authorization when the founder will operate a business in Canada. If Ontario is the intended destination, an ontario immigrant nominee program entrepreneur stream guide is a separate provincial route with its own stream, investment, management and settlement evidence. A business legitimacy LMIA review is also different from a founder’s business plan: it concerns an employer’s genuine position, recruitment, wage and ability to support the role. Use the proposed activity, ownership, source of funds, designated-organization support, employer facts, province and immigration goal to decide which route in this comparison actually applies.",
      },
    ],
  },
  {
    test: (path) => path === "/immigrate/express-entry",
    blocks: [
      { type: "heading", level: 2, text: "Express Entry points, draws and provincial questions" },
      {
        type: "paragraph",
        text: "A canada express entry points calculator or score calculator for canada express entry is useful only when the language, education, work, NOC, family and nomination inputs are supportable. Compare the estimate with the express entry latest draw canada context and the complete federal filing sequence. Searches for canada permanent residence express entry, new brunswick canada express entry, canada express entry ontario and canada express entry saskatchewan still require a province- or program-specific review; a draw result does not create eligibility or guarantee an invitation.",
      },
    ],
  },
  {
    test: (path) => path === "/immigrate/ontario-pnp-oinp",
    blocks: [
      { type: "heading", level: 2, text: "OINP stream, status and entrepreneur checks" },
      {
        type: "paragraph",
        text: "Ontario immigrant nominee program updates and ontario immigrant nominee program requirements should be checked against the exact OINP stream, current intake and invitation method. For an OINP Express Entry route, keep the oinp express entry processing time estimate separate from the federal profile and nomination evidence. Ontario immigrant nominee program documents should support the occupation, job offer or human-capital claim, while ontario immigrant nominee program check status should use the official account or contact channel. The ontario immigrant nominee program entrepreneur stream guide is a different business route and should not be blended into a skilled-worker checklist.",
      },
    ],
  },
  {
    test: (path) => path === "/immigrate/pnp-linked-express-entry",
    blocks: [
      { type: "heading", level: 2, text: "PNP-linked Express Entry: what the score cannot decide" },
      {
        type: "paragraph",
        text: "An OINP express entry draw, oinp express entry points calculator or express entry OINP search is only a starting point. Confirm the oinp express entry stream, the underlying federal program, the nomination process and the documents behind the CRS inputs before relying on a score. A provincial nomination can change the ranking picture, but it does not replace the Canada permanent residence express entry application, admissibility review or deadline after an invitation.",
      },
    ],
  },
  {
    test: (path) => /sponsor\/(spousal-and-partner-sponsorship-overview|spousal-common-law-sponsorship|inland-sponsorship|outland-sponsorship|conjugal-partner-sponsorship|sponsorship-processing-times|sponsorship-eligibility)/.test(path),
    blocks: [
      { type: "heading", level: 2, text: "Spousal sponsorship forms, route and status checks" },
      {
        type: "paragraph",
        text: "Spousal sponsorship canada forms should be selected from the current IRCC package for the relationship category and applicant location. A spousal sponsorship application, spousal sponsorship application status question and inland spousal sponsorship canada processing time estimate each answer a different part of the file: forms control what is submitted, the account reports the available status information and the estimate is not a promise. Searches such as spousal sponsorship canada forum, canadian spousal sponsorship forum, canada spousal sponsorship forum, spousal sponsorship timeline reddit, inland spousal sponsorship canada reddit and inland spousal sponsorship canada processing time reddit describe anecdotal experiences, not controlling requirements. Keep inland or outland route selection, relationship evidence, sponsor eligibility, civil records, fees and admissibility documents aligned instead of copying a forum timeline into the application.",
      },
    ],
  },
  {
    test: (path) => path === "/work-and-study/lmia-and-employer-services-overview" || path === "/work-and-study/tfwp-employer-compliance",
    blocks: [
      { type: "heading", level: 2, text: "LMIA processing, portal and work-permit boundaries" },
      {
        type: "paragraph",
        text: "LMIA work permit processing time, lmia processing time in ontario and lmia processing time in bc are estimates that depend on the application type and current workload. The lmia online portal and lmia employer portal belong to the employer-side process, while an lmia work permit application is the worker’s authorization stage. Compare lmia exempt work permit, work permit without lmia and lmia work permit extension questions with the actual exemption, employer, duties, wage, status and permit conditions; approved lmia jobs or a posted LMIA number alone do not authorize work or prove a genuine vacancy.",
      },
    ],
  },
  {
    test: (path) => path === "/sponsor/spousal-open-work-permit",
    blocks: [
      { type: "heading", level: 2, text: "SOWP Canada requirements and processing questions" },
      {
        type: "paragraph",
        text: "What is SOWP in Canada and sowp Canada requirements are questions about a separate work-authority stage, not a replacement for the underlying sponsorship or principal-applicant status. A sowp Canada processing time estimate should be read with the current forms, relationship evidence, passport, status record and any eligibility condition that applies to the sponsored spouse. Keep the Open Work Permit for Sponsored Spouse request distinct from the permanent-residence application, and do not assume that an application in progress authorizes work unless the applicable rules permit it.",
      },
    ],
  },
  {
    test: (path) => path === "/work-and-study/canada-study-permit" || path === "/work-and-study/post-graduation-work-permit-pgwp",
    blocks: [
      { type: "heading", level: 2, text: "Study visa Canada requirements, cost and next stage" },
      {
        type: "paragraph",
        text: "Requirements for study visa in canada, study canada visa requirements and canada study visa requirements should be matched to the designated learning institution, program, acceptance or attestation, funds and study purpose. Canada study visa processing time and canada study visa fees are changeable planning details, not approval signals. Later searches such as canada post study work visa and post study work visa canada describe a separate PGWP decision; a study permit application should stand on its own evidence and compliance history.",
      },
    ],
  },
  {
    test: (path) => path === "/visit/super-visa-standalone-page" || path === "/visit/visitor-visa-trv-and-super-visa-combined" || path === "/sponsor/super-visa-for-parents",
    blocks: [
      { type: "heading", level: 2, text: "Super Visa Canada cost, insurance and family evidence" },
      {
        type: "paragraph",
        text: "Canada super visa fees, super visa canada cost and canada super visa fee should be checked against the current fee schedule, while medical insurance super visa canada and health insurance for super visa canada require policy-level coverage verification. A super visa application for canada must connect the parent or grandparent relationship, host income, invitation, accommodation, medical evidence and temporary-residence plan. The route is not the same as an ordinary visitor visa, and a processing estimate or sample invitation letter cannot replace the family’s complete records.",
      },
    ],
  },
  {
    test: (path) => path === "/visit/visitor-visa-trv-standalone-page" || path === "/visit/visitor-visa-trv-and-super-visa-combined",
    blocks: [
      { type: "heading", level: 2, text: "Visitor visa Canada forms, invitations and country checks" },
      {
        type: "paragraph",
        text: "Canada visit visa application form, canada visit visa required documents and canada visit visa processing time should be organized around the visitor’s purpose, passport, residence, funds, host, itinerary, travel history and intention to leave. Country searches such as canada visit visa from dubai, canada visit visa from uae, canada visit visa from pakistan and canada visit visa india require residence- and passport-specific checks. A business visit visa canada is still a temporary visit question; it does not automatically authorize work or convert into permanent residence.",
      },
    ],
  },
  {
    test: (path) => path === "/immigrate/new-brunswick-pnp" || path === "/immigrate/express-entry" || /french|francophone/.test(path),
    blocks: [
      { type: "heading", level: 2, text: "Francophone pathways, language proof and province" },
      {
        type: "paragraph",
        text: "Francophone immigration program canada and the French speaking skilled worker stream should be compared by the language test, occupation, work history, employer, province and application stage. An express entry french speaking skilled worker stream result still needs federal program eligibility and complete documents. Ontario francophone immigration program, ontario french speaking skilled worker stream and bc francophone immigration program searches point to different provincial questions, so the language result and settlement plan must be matched to the route rather than treated as a universal shortcut.",
      },
    ],
  },
  {
    test: (path) => /about\/(about-commonwealth-migration|immigration-office-brampton-ontario|canada-immigration-consulting-process)/.test(path) || path === "/assessment/free-canada-immigration-assessment" || path === "/contact/book-immigration-consultation-canada",
    blocks: [
      { type: "heading", level: 2, text: "How should you assess Brampton immigration reviews?" },
      {
        type: "paragraph",
        text: "People comparing Brampton immigration reviews should verify the professional’s authorization, experience with the exact pathway, written service scope, document handling, privacy practices, fees and deadline ownership. Reviews can help identify questions about communication, but they cannot prove eligibility or guarantee an immigration result. Compare the answers with the regulator’s public register and the current IRCC instructions before choosing a representative or sharing personal records.",
      },
    ],
  },
];

export function getKeywordFrameContent(page) {
  const path = normalizePath(page?.path);
  return FRAME_CONTENT.find((entry) => entry.test(path))?.blocks || [];
}

export default getKeywordFrameContent;
