import { site } from "@/config/site";

/*
 * United Kingdom landing page set.
 *
 * This is a regional gateway page for UK-based clients planning a move to
 * Canada. It follows the same page record contract as `cmg-pages.json`, so it
 * renders through the existing service template and picks up the shared
 * metadata, FAQ, breadcrumb and structured-data layers without any bespoke
 * component work.
 *
 * Copy is deliberately UK-localised: UK qualifications and English-language
 * evidence, ACRO/PSNI police certificates, IRCC panel physicians in the UK,
 * GBP/CAD money movement, the UK–Canada time difference and the remote
 * consultation process UK clients use.
 */

const ukPath = "/canada-immigration-from-uk";
const ukUrl = `${site.url.replace(/\/$/, "")}${ukPath}`;

const OFFICIAL = {
  immigration: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html",
  expressEntry: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html",
  crs: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html",
  iec: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html",
  workPermit: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit.html",
  studyPermit: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html",
  eta: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html",
  policeUk: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how/united-kingdom.html",
  acro: "https://acro.police.uk/s/acro-services/police-certificates",
  panelPhysicians: "https://secure.cic.gc.ca/pp-md/pp-list.aspx",
  wes: "https://www.wes.org/",
  ciccRegister: "https://register.college-ic.ca/Public-Register-EN/Public-Register-EN/Default.aspx",
  // This practice's own licensee record on the register (see site.rcic).
  ciccProfile: site.rcic.profileUrl,
};

/** Q/A paragraph pairs are folded into the styled FAQ section at render time. */
const faq = (question, answer) => [
  { type: "paragraph", text: `Q: ${question}` },
  { type: "paragraph", text: `A: ${answer}` },
];

const ukFaqs = [
  faq(
    "Do UK citizens need a visa to visit Canada?",    `No. The United Kingdom is a visa-exempt country, so UK passport holders normally need an approved electronic travel authorisation (eTA) rather than a visitor visa to fly to Canada for a short stay. An eTA authorises travel to the port of entry only — a border officer still decides how long you may stay, and work or study generally requires a permit. Check the current [IRCC eTA guidance](${OFFICIAL.eta}) before booking.`,
  ),
  faq(
    "Can UK citizens apply for Canadian permanent residence?",
    "Yes. UK nationals are assessed on the same economic, family and humanitarian criteria as any other applicant. Most UK applicants start with Express Entry (Federal Skilled Worker), a provincial nomination, a Canadian work or study route that builds eligibility over time, or family sponsorship. Nationality does not create a shortcut, but a UK profile often arrives with strong language, education and skilled work evidence that scores well.",
  ),
  faq(
    "Do I need an English test if I am a UK citizen?",
    "For Express Entry, generally yes. IRCC requires a result from a designated English or French language test, and a UK passport does not exempt you from that requirement. UK applicants most commonly book IELTS General Training or CELPIP-General, and the result must be valid on the date you submit. Test choice, validity windows and score conversions should always be confirmed against the current IRCC language requirements.",
  ),
  faq(
    "Which UK police certificate do I need for Canada?",
    `IRCC asks for a police certificate from every country where you lived for six months or more since turning 18. For the UK, that normally means an ACRO Police Certificate covering England and Wales, with separate arrangements for Scotland and Northern Ireland. IRCC publishes a dedicated United Kingdom page, so follow the [IRCC UK police certificate instructions](${OFFICIAL.policeUk}) and the [ACRO application service](${OFFICIAL.acro}) rather than relying on an old checklist.`,
  ),
  faq(
    "Where do I take the Canadian immigration medical exam in the UK?",
    `Only an IRCC-designated panel physician can complete the immigration medical examination. IRCC maintains a live [panel physician list](${OFFICIAL.panelPhysicians}) that includes clinics in the UK, so book from that list rather than through a GP, and check the current fees and required identification before you attend.`,
  ),
  faq(
    "Do my UK qualifications count in Canada?",
    "They can. Foreign education usually needs an Educational Credential Assessment (ECA) from a designated body such as WES to show its Canadian equivalency for Express Entry and some work routes. An ECA confirms how a UK qualification compares academically — it does not grant a licence to practise a regulated profession in Canada, which is handled separately by the relevant provincial regulator.",
  ),
  faq(
    "How long does Canada immigration take for UK applicants?",
    "Processing depends on the route, the visa office workload and how quickly you can produce evidence. UK applicants are not on a separate timetable. Build the plan around the stage you control — language test, ECA, police certificates, medical and document consistency — and treat published processing times as a range to check on the date you file, not a promise.",
  ),
  faq(
    "Can a UK-based applicant work with a Canadian immigration consultant remotely?",
    `Yes. Commonwealth Migration is a CICC-regulated Canadian practice (${site.rcic.number}) and works with UK clients by scheduled video or phone consultation. Because the UK is typically five hours ahead of Brampton, appointments are usually booked for UK afternoon or early evening slots. Confirm the representative's current licence status on the CICC public register (register.college-ic.ca) before you share documents or pay fees.`,
  ),
];

const relatedPages = [
  "Express Entry Canada: the federal route most UK applicants start with → /immigrate/express-entry",
  "Federal Skilled Worker Program: the six selection factors UK graduates usually test first → /immigrate/federal-skilled-worker",
  "International Experience Canada (IEC): working holiday for young UK citizens → /work-and-study/international-experience-canada-iec",
  "Canada work permit overview: employer-specific and open work permits from the UK → /work-and-study/canada-work-permit-overview",
  "Canada study permit: applying from the UK, PALs and designated institutions → /work-and-study/canada-study-permit",
  "Post-Graduation Work Permit: turning a Canadian degree into skilled work experience → /work-and-study/post-graduation-work-permit-pgwp",
  "Provincial Nominee Programs: comparing provinces when the federal pool is competitive → /immigrate/provincial-nominee-program-all-provinces-consolidated",
  "Spousal and partner sponsorship: sponsoring a UK spouse or common-law partner → /sponsor/spousal-and-partner-sponsorship-overview",
  "Parents and Grandparents Program: reuniting UK-based family in Canada → /sponsor/parents-and-grandparents-program-pgp",
  "Express Entry draws: reading CRS cutoffs and category rounds → /immigration-draws",
  "CRS calculator: estimating your Express Entry score before you file → /tools/crs-calculator-canada",
  "Free Canada immigration assessment: a UK-first review of your profile → /assessment/free-canada-immigration-assessment",
];

export const ukPages = [
  {
    url: ukUrl,
    path: ukPath,
    seoTitle: "Canada Immigration from the UK: Routes, Costs & Next Steps",
    metaDescription:
      "Moving to Canada from the UK? Compare Express Entry, IEC working holiday, work and study permits, plus UK police certificates, panel physicians and costs.",
    h1: "Canada Immigration from the UK: Routes, Requirements and UK-Specific Steps",
    hero: {
      title: "Canada Immigration from the UK: Routes, Requirements and UK-Specific Steps",
      lead:
        "UK applicants often arrive with strong language, education and skilled work evidence — and still lose time on the details that are genuinely different from a UK visa file. This guide maps the Canadian routes open to UK citizens, the UK-side evidence you will need, and the sequence that keeps an application review-ready.",
    },
    title: "Canada Immigration from the UK: Routes, Costs & Next Steps",
    description:
      "Moving to Canada from the UK? Compare Express Entry, IEC working holiday, work and study permits, plus UK police certificates, panel physicians and costs.",
    keywords: [
      "Canada immigration from the UK",
      "moving to Canada from the UK",
      "Canada PR for UK citizens",
      "Canada immigration consultants UK",
      "Express Entry from the UK",
      "IEC working holiday Canada UK",
      "Canada work permit from UK",
      "Canada study permit for UK students",
      "UK police certificate for Canada",
      "immigration to Canada from Britain",
    ],
    lastModified: "2026-09-21",
    priority: 0.9,
    status: "Content Ready",
    contentBlocks: [
      {
        type: "paragraph",
        text: `If you are planning a move from the United Kingdom to Canada, the useful question is not "which visa is easiest?" but "which route fits the profile I can actually evidence?" A UK applicant usually has a clear advantage on language, an education history that maps cleanly to Canadian equivalency, and skilled work experience that scores well in the federal system. The friction sits elsewhere: choosing between permanent residence and a temporary permit, proving UK qualifications, obtaining the right UK police certificate, and building a file that survives scrutiny of funds, ties and intent. This page covers the Canadian routes open to UK citizens, the UK-specific steps most guides skip, and how to sequence everything so nothing expires before you file.`,
      },
      {
        type: "table",
        rows: [
          [
            "1,200 CRS points available",
            "3 Express Entry programs",
            "5 hours UK ahead of Brampton",
            "6 months residence triggers a police check",
          ],
        ],
      },
      { type: "heading", level: 2, text: "Why UK applicants choose Canada — and what changes on a UK file" },
      {
        type: "paragraph",
        text: `Canada and the UK share a common-law legal tradition, an English-language working culture and comparable professional standards, which is why the transition feels familiar on paper. That familiarity is also the risk: UK applicants sometimes assume a Canadian application works like a UK visa application, or that a British passport removes a requirement. It does not. Canada assesses admissibility and eligibility on its own rules, through Immigration, Refugees and Citizenship Canada (IRCC), and every route has its own evidence standard.`,
      },
      {
        type: "paragraph",
        text: `The practical differences that catch UK applicants out are consistent and predictable. Canada separates permanent residence from temporary status far more sharply than the UK's Indefinite Leave to Remain pathway, so time spent in Canada on a work or study permit does not automatically convert into settlement. Language testing is mandatory for the federal economic programs even for native English speakers. Foreign qualifications need a formal Educational Credential Assessment rather than being accepted at face value. And the document trail is UK-specific: police certificates come from different bodies depending on whether you lived in England, Wales, Scotland or Northern Ireland.`,
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Permanent residence vs temporary status** — a Canadian work or study permit is a temporary authorisation; permanent residence is a separate application with its own eligibility test.",
          "**Mandatory language evidence** — Express Entry requires a designated test result; a UK passport is not a substitute.",
          "**Credential assessment** — UK degrees, A-levels and professional awards generally need an Educational Credential Assessment for Canadian equivalency.",
          "**UK-specific police certificates** — ACRO for England and Wales, with separate processes for Scotland and Northern Ireland.",
          "**Funds and currency** — settlement funds are assessed in Canadian dollars, so GBP balances, exchange movement and account history all matter.",
          "**No automatic credit or benefits transfer** — a UK credit file, NI record and NHS entitlement do not follow you to Canada.",
        ],
      },
      { type: "heading", level: 2, text: "Which Canada immigration route fits UK citizens?" },
      {
        type: "paragraph",
        text: "Most UK applicants are choosing between a small number of realistic routes. The comparison below is a starting point for narrowing options — it is not an eligibility decision, and each route has its own current instructions that should be checked before you commit time or money.",
      },
      {
        type: "table",
        rows: [
          ["Program", "Who it suits", "Typical UK profile", "First evidence to prepare"],
          ["Express Entry — Federal Skilled Worker", "Skilled workers with foreign experience and no Canadian job offer", "Degree-educated professional with 3+ years of skilled employment", "Language test, Educational Credential Assessment, reference letters"],
          ["Express Entry — Canadian Experience Class", "People with recent skilled Canadian work experience", "UK graduate or IEC participant who has worked in Canada", "Canadian work records, T4s, language test"],
          ["Provincial Nominee Program", "Applicants whose occupation or destination fits a province's stream", "Professionals willing to settle outside Toronto or Vancouver", "Stream criteria, employer or connection evidence, settlement plan"],
          ["International Experience Canada (IEC)", "Young UK citizens seeking a temporary working holiday or early-career role", "Under the current age ceiling, no job offer required for Working Holiday", "Passport, funds, insurance, police certificate, medical if requested"],
          ["Employer-specific work permit", "People with a Canadian job offer", "UK professional recruited by a Canadian employer, sometimes with LMIA", "Job offer, LMIA or exemption basis, qualifications, medical"],
          ["Study permit", "UK students pursuing a Canadian credential", "Undergraduate or postgraduate applicant with an offer of admission", "Acceptance letter, provincial attestation, tuition and living funds, study plan"],
          ["Family sponsorship", "Spouses, partners, children and parents of Canadian citizens or PRs", "UK spouse or partner of a Canadian citizen or permanent resident", "Relationship evidence, sponsor status and income, police certificates"],
          ["Business and Start-Up Visa", "Founders and entrepreneurs with qualifying backing", "UK founder with designated-organisation support or provincial backing", "Ownership records, source of funds, business plan, support letter"],
        ],
      },
      { type: "heading", level: 2, text: "Express Entry from the UK: CRS, eligibility and draw strategy" },
      {
        type: "paragraph",
        text: `Express Entry is the route most UK applicants research first, and it is worth understanding that it is two tests, not one. First you must be eligible for one of three federal programs — the Federal Skilled Worker Program, the Canadian Experience Class or the Federal Skilled Trades Program. Only then does your Comprehensive Ranking System (CRS) score matter, because the CRS ranks eligible candidates against each other in invitation rounds.`,
      },
      {
        type: "paragraph",
        text: `For a UK applicant with no Canadian work history, the Federal Skilled Worker Program is normally the entry point. It applies a 67-point selection grid across language, education, work experience, age, arranged employment and adaptability, and requires at least one year of continuous full-time skilled work in the past ten years. Because UK applicants frequently clear that grid comfortably, the real constraint is usually the CRS score and the type of draw you are waiting for. Recent rounds have included category-based invitations targeting specific occupations, language results and other characteristics, which means the useful planning question is often "which category could I qualify for?" rather than "what is the general cutoff?"`,
      },
      {
        type: "paragraph",
        text: `Treat past cutoffs as context, never as a forecast. The CRS criteria, the draw types and the category list are set by IRCC and change. Use our [Express Entry guide](/immigrate/express-entry) for the route mechanics, the [Federal Skilled Worker page](/immigrate/federal-skilled-worker) for the selection factors, and the [draw tracker](/immigration-draws) to see how rounds have actually moved.`,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Confirm which federal program you are eligible for before you optimise a score.",
          "Book the language test early — the result is needed to enter the pool and it expires.",
          "Start the Educational Credential Assessment in parallel; it is often the slowest item.",
          "Estimate your CRS with the [CRS calculator](/tools/crs-calculator-canada) and record which points are confirmed rather than assumed.",
          "Identify the draw categories you could plausibly qualify for, then decide whether a provincial nomination is worth pursuing.",
          "Keep your occupation code honest: compare your real duties with the [NOC descriptions](/tools/noc-finder-canada) rather than your job title.",
        ],
      },
      { type: "heading", level: 2, text: "UK qualifications, ECAs and professional recognition" },
      {
        type: "paragraph",
        text: `A UK bachelor's, master's or doctoral degree is generally well regarded in Canada, but for immigration purposes it must be evidenced through an Educational Credential Assessment (ECA) issued by a designated organisation such as [WES](${OFFICIAL.wes}). The ECA states the Canadian equivalency of your credential — for example, whether a UK master's is treated as a Canadian master's — and the equivalency feeds directly into your Express Entry points.`,
      },
      {
        type: "paragraph",
        text: `Two UK-specific points are worth flagging early. First, A-levels, GCSEs and many professional certificates do not attract points on their own; it is the highest completed credential that is usually assessed. Second, an ECA is an academic comparison, not a licence. Regulated professions in Canada — engineering, nursing, teaching, accountancy, law and others — are governed by provincial regulators with their own registration, examination and language requirements. If your plan depends on practising a regulated profession, the regulator's requirements belong in the plan alongside the immigration route, not after it.`,
      },
      { type: "heading", level: 2, text: "English language tests for UK applicants: what counts and what does not" },
      {
        type: "paragraph",
        text: `This is the single most common assumption UK applicants bring to a Canadian file: that being a native English speaker means no language test is needed. For Express Entry, that is not correct. IRCC requires a result from a designated language testing organisation, and the score is converted to Canadian Language Benchmarks (CLB) which drive both program eligibility and CRS points.`,
      },
      {
        type: "paragraph",
        text: `UK applicants most often sit IELTS General Training or CELPIP-General, and occasionally TEF or TCF for French. Choose the test that matches the program you are targeting — the academic and general versions are not interchangeable for immigration purposes — and check the current validity window, because an expired result cannot be used to submit or to support a claim. If you are bilingual, a French result can add meaningful CRS points and can open French-language draw categories, so it is worth costing out before you assume English alone is your ceiling.`,
      },
      { type: "heading", level: 2, text: "International Experience Canada (IEC) for UK citizens" },
      {
        type: "paragraph",
        text: `The United Kingdom is one of the countries with an International Experience Canada arrangement, which gives young UK citizens a route to live and work in Canada temporarily without a Canadian job offer under the Working Holiday category. IEC also includes Young Professionals (for those with a job offer in their field) and International Co-op placements for students.`,
      },
      {
        type: "paragraph",
        text: `IEC is a strong option for a UK applicant who is young enough to qualify but not yet competitive in Express Entry, because Canadian skilled work experience can later support the Canadian Experience Class — and it lets you test the market before committing to permanent residence. Be precise about the mechanics: the age range, category, quota, permitted duration, participation fee and the requirement for insurance and funds are set by IRCC and can change between seasons. Check the [current IEC country information](${OFFICIAL.iec}) and our [IEC guide](/work-and-study/international-experience-canada-iec) before planning around a specific season.`,
      },
      { type: "heading", level: 2, text: "Work permits and employer routes for UK professionals" },
      {
        type: "paragraph",
        text: `If you have a Canadian job offer, the route is usually an employer-specific work permit, supported either by a Labour Market Impact Assessment (LMIA) or by an exemption category such as an intra-company transfer, a free-trade professional category or a reciprocal arrangement. UK professionals are frequently hired under exemption categories rather than the LMIA stream, which changes both the evidence set and the timeline.`,
      },
      {
        type: "paragraph",
        text: `The practical caution for UK applicants is that a work permit is tied to the employer, occupation and location stated on it. Accepting a different role, a promotion outside the approved occupation or a move to another province can require a new application. Read the conditions on the issued document before you accept a change, and keep the employer's compliance obligations in view. Start with the [Canada work permit overview](/work-and-study/canada-work-permit-overview) and the [IRCC work permit guidance](${OFFICIAL.workPermit}).`,
      },
      { type: "heading", level: 2, text: "Study in Canada from the UK" },
      {
        type: "paragraph",
        text: `UK students are visa-exempt for travel but still need a study permit to study in Canada beyond a short course, and the application now typically requires a provincial or territorial attestation letter alongside the letter of acceptance. The study plan itself carries weight: it should connect your chosen program to your existing UK education, your career direction and a coherent reason for studying in Canada rather than at home.`,
      },
      {
        type: "paragraph",
        text: `For many UK applicants the study route is valued less for the degree itself and more for what follows it — skilled Canadian work experience and eligibility for the Post-Graduation Work Permit, which can in turn support the Canadian Experience Class. That makes program choice, institution eligibility and the length of the study period strategic decisions rather than academic ones. See the [study permit guide](/work-and-study/canada-study-permit), the [PGWP page](/work-and-study/post-graduation-work-permit-pgwp) and the [IRCC study permit instructions](${OFFICIAL.studyPermit}).`,
      },
      { type: "heading", level: 2, text: "Police certificates and medical exams: the UK-specific steps" },
      {
        type: "paragraph",
        text: `IRCC requires a police certificate from every country where you have lived for six months or more since your eighteenth birthday. For most UK applicants that means obtaining a UK police certificate, and the correct issuing body depends on where you actually lived rather than where you now reside. IRCC publishes a dedicated United Kingdom instruction page that sets out what is accepted, so follow that page and the [ACRO service](${OFFICIAL.acro}) rather than an old forum checklist.`,
      },
      {
        type: "table",
        rows: [
          ["Step", "What is required", "Where it comes from", "Practical note"],
          ["UK police certificate", "A certificate covering your UK residence history", `[IRCC UK police certificate instructions](${OFFICIAL.policeUk})`, "Apply early; certificates are dated and may need to be current at submission"],
          ["England and Wales", "ACRO Police Certificate", `[ACRO application service](${OFFICIAL.acro})`, "The standard route for most UK applicants"],
          ["Scotland", "The certificate specified by IRCC for Scottish residence", `[IRCC UK police certificate instructions](${OFFICIAL.policeUk})`, "Follow the IRCC page — do not assume the ACRO route applies"],
          ["Northern Ireland", "A police certificate issued for Northern Ireland", "PSNI disclosure service", "Request it directly for immigration purposes"],
          ["Immigration medical", "Examination by an IRCC-designated panel physician", `[IRCC panel physician list](${OFFICIAL.panelPhysicians})`, "Book from the official list; a UK GP examination is not accepted"],
          ["Other countries", "Certificates for any other country with six months or more of residence", `[IRCC police certificate guidance](${OFFICIAL.policeUk})`, "Include study years abroad, long postings and previous immigration countries"],
        ],
      },
      {
        type: "paragraph",
        text: "Two timing traps are worth designing around. Police certificates and medical results have their own validity periods, and an upfront medical completed too early can expire before a decision is made. Second, if you have lived in several countries — a common pattern for UK applicants with overseas postings, study abroad or earlier migration — the certificates must be requested in parallel, because the slowest one sets your filing date.",
      },
      { type: "heading", level: 2, text: "Proof of funds, currency and moving money from the UK" },
      {
        type: "paragraph",
        text: `Settlement funds are assessed in Canadian dollars, which means a UK applicant's evidence has to translate cleanly from GBP. The requirement is not simply a balance: IRCC looks for funds that are available, unencumbered and supported by a traceable history. A sudden deposit shortly before filing, funds held in someone else's name, or a balance that depends on a property sale not yet completed all invite questions.`,
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Hold funds in an account you control** — joint accounts and third-party balances need a clear explanation and evidence.",
          "**Keep a traceable history** — statements covering the period IRCC expects, with a written explanation for any large movement.",
          "**Use official conversion evidence** — show how GBP balances convert to Canadian dollars at the relevant date.",
          "**Plan the transfer route early** — compare bank transfers with specialist providers and keep the audit trail for the arrival of funds in Canada.",
          "**Separate living costs from settlement funds** — the amount required for settlement is not the same as your relocation budget.",
        ],
      },
      { type: "heading", level: 2, text: "A UK-side budget checklist for a Canadian application" },
      {
        type: "paragraph",
        text: "Budgeting from the UK means accounting for costs charged in Canadian dollars, costs charged in pounds, and costs that arrive on a different schedule from the one you expect. The categories below are the ones UK applicants most often under-budget. Amounts change, so confirm current figures with the issuing body at the time you pay.",
      },
      {
        type: "table",
        rows: [
          ["Cost", "Charged by", "Currency", "When it falls due"],
          ["Government application fees", "IRCC", "CAD", "On submission, and again for permanent residence stages"],
          ["Language test", "IELTS, CELPIP or TEF provider", "GBP", "At booking, with possible retake costs"],
          ["Educational Credential Assessment", "Designated ECA body", "CAD", "Before entering the Express Entry pool"],
          ["Police certificate", "ACRO or the relevant UK body", "GBP", "After you receive the request or before filing"],
          ["Immigration medical", "IRCC panel physician in the UK", "GBP", "When IRCC requests it"],
          ["Biometrics and travel", "Visa application centre, airline", "GBP", "Around submission and at travel"],
          ["Professional and translation costs", "Regulator, translator, notary", "GBP or CAD", "Whenever a document needs certification"],
          ["Relocation and shipping", "Removals company, customs", "GBP or CAD", "Before departure and on arrival"],
        ],
      },
      { type: "heading", level: 2, text: "Common mistakes UK applicants make" },
      {
        type: "list",
        ordered: false,
        items: [
          "**Assuming a UK passport removes the language requirement** — Express Entry still needs a designated test result.",
          "**Treating a temporary permit as a settlement plan** — a work or study permit does not automatically become permanent residence.",
          "**Leaving the credential assessment late** — an ECA is often the longest lead time in a UK file.",
          "**Using the wrong police certificate** — England, Wales, Scotland and Northern Ireland do not share one issuing route.",
          "**Booking the medical too early** — an upfront examination can expire before a decision is issued.",
          "**Presenting funds that cannot be traced** — a lump sum with no history weakens an otherwise strong profile.",
          "**Describing UK experience in UK-only terms** — reference letters should state duties, hours, dates and salary in a form a Canadian officer can map to an occupation code.",
          "**Ignoring the regulated-profession question** — immigration eligibility and professional licensing are two separate approvals.",
          "**Waiting for a draw before preparing documents** — preparation is the part you control; the cutoff is not.",
          "**Using an unregulated adviser** — verify any representative on the CICC public register before sharing documents.",
        ],
      },
      { type: "heading", level: 2, text: "Working with a Canadian immigration consultant from the UK" },
      {
        type: "paragraph",
        text: `There is no requirement to be in Canada to build a strong application, and most of our UK clients never visit our Brampton office. The work that matters — route selection, evidence strategy, document consistency and timing — happens on documents, and it can be done remotely with the same discipline as an in-person file.`,
      },
      {
        type: "paragraph",
        text: `Two logistics make UK engagements run smoothly. The first is the time difference: the UK is typically five hours ahead of Brampton, so consultations are usually scheduled for UK late afternoon or early evening, which suits clients calling after work. The second is document handling: UK documents arrive from several sources — the test provider, the ECA body, ACRO and the panel physician — and they arrive at different times. We map those dependencies to a single filing sequence so nothing expires while you wait for something else.`,
      },
      {
        type: "paragraph",
        text: `Before engaging anyone, confirm that the representative is licensed. Commonwealth Migration is a CICC-regulated practice (${site.rcic.number}), and you can verify the current status of any representative on the [CICC public register](${OFFICIAL.ciccRegister}) — our own record is at [Pankaj Khanna, RCIC (${site.rcic.number})](${OFFICIAL.ciccProfile}). A legitimate adviser will explain the scope of service, the limits of what can be promised and the documents required before asking for payment.`,
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Start with a [free Canada immigration assessment](/assessment/free-canada-immigration-assessment) so the first conversation is about your actual profile.",
          "Prepare a short timeline of your UK education, employment, travel and any previous applications.",
          "Book the language test and credential assessment in parallel rather than in sequence.",
          "Build the [document checklist](/tools/document-checklist-canada) around your route, then work through it with dates against each item.",
          "Book a [consultation with a licensed RCIC](/contact/book-immigration-consultation-canada) when the route choice or the evidence is genuinely uncertain.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions from UK applicants" },
      // Each `faq()` returns a Q/A paragraph pair; flatten so the shared
      // normaliser can fold them into the styled FAQ section and FAQPage schema.
      ...ukFaqs.flat(),
      { type: "heading", level: 2, text: "Related pages" },
      { type: "list", ordered: true, items: relatedPages },
      {
        type: "paragraph",
        text: "CTA: If your goal is permanent residence in Canada and you are applying from the UK, start with a free assessment or book a consultation — and bring your UK document timeline with you so the first review can focus on strategy rather than admin.",
      },
    ],
    // Page-level JSON-LD is left empty on purpose. `pageStructuredData` already
    // owns WebPage, BreadcrumbList, Service and FAQPage and strips any source
    // node using those types, so the UK signals are applied in that managed
    // layer instead (Service areaServed + en-GB WebPage language).
    jsonLd: [],
  },
];

/** Canonical path for the United Kingdom landing page. */
export const UK_LANDING_PATH = ukPath;

export default ukPages;
