/**
 * Article body for `/blog/canada-immigration-levels-plan-2026`.
 *
 * Metadata (title, description, keywords, category, official source) lives in
 * `src/data/blog-research.js` and is deliberately not duplicated here. This file
 * owns only the reading content.
 *
 * Figures are taken from IRCC's own supplementary information for the plan and
 * are attributed in `sources` below. Do not add a number that is not traceable
 * to one of those pages.
 */

const article = {
  slug: "canada-immigration-levels-plan-2026",

  quickAnswer:
    "The 2026–2028 Immigration Levels Plan holds permanent resident admissions flat at 380,000 a year while cutting new temporary resident arrivals — 230,000 workers and 155,000 students in 2026, down from recent highs. The economic class takes the largest share, and Ottawa aims to bring Canada's temporary population below 5% of the total population by the end of 2027.",

  keyTakeaways: [
    "Permanent resident admissions stabilise at 380,000 for each of 2026, 2027 and 2028.",
    "New temporary resident arrivals fall to 385,000 in 2026 and 370,000 in 2027 and 2028.",
    "The economic class reaches 64% of admissions by 2027, with Federal High Skilled at 109,000 and the Provincial Nominee Program at 91,500 in 2026.",
    "Family sponsorship stays broadly steady: 69,000 spouses, partners and children plus 15,000 parents and grandparents in 2026.",
    "Refugees and protected persons hold at 49,300 a year, about 13% of admissions.",
    "The plan is a national target, not a per-program guarantee — cut-offs, stream allocations and processing times still decide individual outcomes.",
  ],

  sections: [
    {
      id: "what-the-plan-changes",
      heading: "What does the 2026–2028 Immigration Levels Plan change?",
      body: [
        "The Canada immigration levels plan 2026–2028 changes the balance between permanent and temporary immigration rather than the headline permanent resident number. Overall permanent resident admissions are held at 380,000 for each of the three years, so the level of new permanent residence is stable on paper. What moves is the volume of people arriving on work and study permits, which falls sharply from the levels seen earlier in the decade.",
        "The stated objective is to return Canada to what the government calls sustainable immigration levels: fewer temporary arrivals, a stable permanent resident intake, and a smaller temporary population as a share of the country. Ottawa has committed to bringing the temporary population below 5% of Canada's total population by the end of 2027.",
        "For anyone planning a route, that combination matters more than any single number. A flat permanent resident target alongside a smaller temporary intake means fewer people building Canadian work experience in the first place, and more competition for the transition routes that turn temporary status into permanent residence.",
      ],
      callout: {
        label: "What this means for you",
        text: "If your plan depends on arriving first as a student or worker and converting later, the temporary intake numbers are the ones to watch — not the 380,000 headline.",
      },
    },
    {
      id: "targets-2026-at-a-glance",
      heading: "Canada's immigration targets for 2026 at a glance",
      body: [
        "IRCC publishes both a target and an expected range for each year. The range is the honest part of the table: it is where the government expects to land if volumes, processing capacity and provincial allocations move against the plan. Treat the target as the intention and the range as the realistic band.",
        "These are the published admission figures for the first year of the plan.",
      ],
      table: {
        caption: "Canada immigration targets 2026 — new admissions by category",
        columns: ["Category", "2026 target", "Range"],
        rows: [
          ["Permanent residents — total", "380,000", "350,000 – 420,000"],
          ["Temporary residents — total", "385,000", "375,000 – 395,000"],
          ["Temporary workers — total", "230,000", "—"],
          ["International students", "155,000", "—"],
          ["Economic class", "239,800", "224,000 – 264,000"],
          ["Family class", "84,000", "78,500 – 92,000"],
          ["Refugees and protected persons", "49,300", "42,000 – 55,000"],
          ["Humanitarian and other", "6,900", "6,000 – 9,000"],
        ],
      },
    },
    {
      id: "temporary-resident-reduction",
      heading: "Why is Canada reducing temporary resident arrivals?",
      body: [
        "The reduction is a population-growth decision as much as an immigration one. Rapid growth in the number of people holding study and work permits put pressure on rental housing, healthcare capacity and infrastructure in the largest recipient cities, and the plan responds by slowing the inflow at the temporary end while keeping permanent admissions steady.",
        "The mechanics are worth separating, because they affect different people. Temporary resident targets cover new arrivals on work and study permits. They exclude visitors, permit extensions, in-Canada applications to change or extend status, and asylum claimants — though those volumes still feed into the calculation behind the under-5% objective.",
        "Two consequences follow. First, a person already in Canada extending a permit is not competing for a temporary resident target slot, so renewal is a different question from admission. Second, because the cut falls hardest on new temporary arrivals, the pipeline of people who would eventually qualify for Canadian-experience routes narrows over the plan period.",
      ],
      list: {
        title: "What the temporary numbers do and do not cover",
        items: [
          "Covered: new arrivals on work permits, including both the Temporary Foreign Worker Program and the International Mobility Program.",
          "Covered: new international students arriving on study permits.",
          "Not covered: visitors, including people arriving under a temporary resident visa or eTA.",
          "Not covered: permit extensions and in-Canada applications to renew or change status.",
          "Not covered: asylum claimants, whose volumes are counted in the methodology but not in the target.",
        ],
      },
    },
    {
      id: "which-programs-gain-and-lose",
      heading: "Which immigration programs gain and which lose under the plan?",
      body: [
        "Within a flat permanent resident total, the split between programs is where strategy lives. The economic class absorbs roughly two thirds of admissions, and by 2027 and 2028 it reaches 64% of the total. Family sponsorship holds close to a fifth. Refugees and protected persons keep about 13%.",
        "The two largest economic channels are Federal High Skilled, which covers Express Entry programs, and the Provincial Nominee Program. Both grow slightly across the plan period, but the PNP allocation is the figure provinces argue over each year, and a province's share can shift even when the national total does not.",
      ],
      table: {
        caption: "Permanent resident targets by program, 2026–2028",
        columns: ["Program", "2026", "2027", "2028"],
        rows: [
          ["Federal High Skilled (Express Entry)", "109,000", "111,000", "111,000"],
          ["Provincial Nominee Program", "91,500", "92,500", "92,500"],
          ["Federal economic pilots", "8,175", "8,775", "8,775"],
          ["Atlantic Immigration Program", "4,000", "4,000", "4,000"],
          ["Federal Business", "500", "500", "500"],
          ["Spouses, partners and children", "69,000", "66,000", "66,000"],
          ["Parents and grandparents", "15,000", "15,000", "15,000"],
          ["Protected persons and resettled refugees", "49,300", "49,300", "49,300"],
        ],
      },
      callout: {
        label: "Read the allocation, not just the total",
        text: "A flat national total can still mean a smaller allocation for the stream you are targeting. Always check the current program-specific number on the official page before you build a timeline around it.",
      },
    },
    {
      id: "what-it-means-express-entry",
      heading: "What does the levels plan mean for Express Entry candidates?",
      body: [
        "Federal High Skilled admissions rise from 109,000 in 2026 to 111,000 in 2027 and 2028. That is the pool from which Express Entry invitations are drawn, so the plan does not shrink the federal skilled space. It does, however, sit alongside category-based selection, which decides not how many invitations are issued but which candidates receive them.",
        "The practical effect is that a stable or slightly larger admissions target does not translate into a lower cut-off. Invitation rounds are sized against the annual target and the inventory already in the pool, and category-based draws reserve a portion of those invitations for specific occupations and language profiles. A candidate outside the selected categories competes for a smaller share of the same total.",
        "Two things follow for planning. First, the CRS score that mattered in a general draw is not the score that matters in a category draw, so a single historical cut-off tells you very little. Second, because category lists are refreshed periodically, the profile you build should be the one that is defensible under more than one category — language results, documented work experience in a recognised NOC and a completed educational credential assessment all carry across.",
      ],
      list: {
        title: "What to do with this if you are building an Express Entry profile",
        items: [
          "Check whether your occupation currently appears in a category-based selection list before you assume a general draw is your route.",
          "Treat the CRS cut-off from any single past round as history, not as a threshold you can plan against.",
          "Secure a language test result and an educational credential assessment early — both take time and both are reusable across rounds.",
          "Confirm how your job title and duties map to a NOC and TEER code, because that mapping decides your eligibility and your category.",
        ],
      },
    },
    {
      id: "what-it-means-pnp",
      heading: "What does the plan mean for provincial nominee and regional applicants?",
      body: [
        "The Provincial Nominee Program holds 91,500 places in 2026 and 92,500 in each of the following two years, making it the second-largest permanent residence channel in the country. The Atlantic Immigration Program is steady at 4,000 a year, and the federal economic pilots — which include the community immigration pilots and the caregivers and agri-food pilots — rise from 8,175 to 8,775.",
        "The national figure is only the envelope. Each province and territory receives an allocation, then decides how to distribute it across its own streams, which is why one province can pause an intake while another opens one in the same month. A nomination also changes an Express Entry candidate's position materially, because a provincial nomination is the single largest points addition available in the CRS.",
        "For a regional route such as the Atlantic Immigration Program or a community immigration pilot, the binding constraint is usually the employer rather than the target. These programs need a designated or approved employer with a genuine job offer, so the number of available places is rarely the reason a file stalls.",
      ],
      related: [
        { href: "/immigrate/provincial-nominee-program-all-provinces-consolidated", label: "Provincial nominee programs compared" },
        { href: "/immigrate/atlantic-immigration-program", label: "Atlantic Immigration Program" },
        { href: "/immigrate/rural-and-northern-immigration-pilot", label: "Rural and northern immigration pilot" },
      ],
    },
    {
      id: "students-workers-family",
      heading: "What the plan means for students, workers and family sponsorship",
      body: [
        "International students are the group most affected by the temporary side of the plan. The target falls to 155,000 new study permit arrivals in 2026 and 150,000 in each of 2027 and 2028, against a much larger intake in the years before. That is a national admission figure, so it sits above the provincial attestation letters and program eligibility rules that decide an individual application — but it sets the tone for how tightly those are administered.",
        "For workers, the split inside the 230,000 temporary worker target is instructive. The International Mobility Program, which covers employer-specific work that is exempt from a labour market impact assessment, holds at 170,000 across the plan. The Temporary Foreign Worker Program, which requires an LMIA, falls from 60,000 to 50,000. In other words, the cut lands on the LMIA-based route rather than on mobility-program work.",
        "Family sponsorship is largely untouched. Spouses, partners and children sit at 69,000 in 2026 before settling at 66,000, and parents and grandparents hold at 15,000 a year. The relative stability of the family class is one reason the Super Visa remains a relevant planning tool for families who cannot rely on a parents and grandparents invitation in a given year.",
      ],
      related: [
        { href: "/work-and-study/canada-study-permit", label: "Canada study permit" },
        { href: "/work-and-study/canada-work-permit-overview", label: "Canada work permit overview" },
        { href: "/sponsor/super-visa-for-parents", label: "Super Visa for parents and grandparents" },
      ],
    },
    {
      id: "how-to-plan-around-targets",
      heading: "How should you plan around a published target?",
      body: [
        "A target is a planning instrument for the government, not a promise to an applicant. The plan sets out how many admissions IRCC intends to process in a year; it does not create a queue position, guarantee a stream stays open, or fix a processing time. The 2027 and 2028 figures are notional and are confirmed or adjusted each November.",
        "That does not make the numbers useless. They tell you where capacity is being added and where it is being withdrawn, which is the difference between choosing a route with room and choosing one that is being squeezed. Used that way, the plan is a filter for strategy rather than a source of certainty.",
      ],
      list: {
        title: "A practical way to use the plan",
        ordered: true,
        items: [
          "Identify the program that actually fits your facts — status, occupation, language results, education and family ties — before looking at any target.",
          "Check that program's own current allocation and eligibility rules on the official page, because the national total does not tell you whether a stream is open.",
          "Confirm whether your occupation sits in a category-based selection list or a provincial priority stream, since that decides which pool you compete in.",
          "Build the evidence that travels: language test, credential assessment, documented work experience and a consistent employment history.",
          "Re-check the figures before you file. Ranges, allocations and notional targets are revised, and a guide written last year can already be out of date.",
        ],
      },
    },
    {
      id: "what-to-verify",
      heading: "What should you verify before you rely on these numbers?",
      body: [
        "Every figure in this guide comes from IRCC's published supplementary information for the 2026–2028 plan. Immigration targets, stream allocations and processing times are all subject to revision, and the notional 2027 and 2028 numbers are explicitly marked for confirmation each November.",
        "Before you act on any of it, open the official source, find the program you are actually applying under, and read that program's current requirements in full. If your situation involves a prior refusal, a status gap, a dependant with a medical or criminal history, or a deadline already running, the general position in this guide is not a substitute for advice on your file.",
      ],
    },
  ],

  glossary: [
    { term: "Immigration Levels Plan", definition: "The annual federal plan that sets how many people Canada intends to admit as permanent residents and temporary residents, broken down by program and category." },
    { term: "Permanent resident target", definition: "The number of permanent resident admissions IRCC intends to process in a given year, published with an expected range." },
    { term: "Temporary resident target", definition: "The number of new arrivals on work and study permits Canada intends to admit. It excludes visitors, permit extensions and asylum claimants." },
    { term: "Notional target", definition: "A forward-year figure published for planning purposes that is confirmed or adjusted before the year begins." },
    { term: "International Mobility Program", definition: "The work permit route for employer-specific work that is exempt from a labour market impact assessment, often under a trade agreement or a reciprocal arrangement." },
    { term: "Temporary Foreign Worker Program", definition: "The work permit route that requires an employer to obtain a positive or neutral Labour Market Impact Assessment before hiring a foreign worker." },
    { term: "Economic class", definition: "The permanent residence category for skilled workers, business applicants and provincial nominees. It takes the largest share of admissions each year." },
  ],

  faqs: [
    {
      question: "What is the Canada Immigration Levels Plan?",
      answer:
        "It is the federal plan that sets Canada's annual immigration targets. IRCC publishes it each autumn and breaks it down by program and category — economic, family, refugees and protected persons, and humanitarian — with a target and an expected range for each of the next three years.",
    },
    {
      question: "How many permanent residents will Canada admit in 2026?",
      answer:
        "The 2026–2028 plan sets a target of 380,000 permanent resident admissions in 2026, with an expected range of 350,000 to 420,000. The same 380,000 target is held for 2027 and 2028.",
    },
    {
      question: "Is Canada increasing or decreasing immigration under this plan?",
      answer:
        "Permanent resident admissions are held flat at 380,000 a year, so the permanent intake is stable rather than rising. New temporary resident arrivals fall to 385,000 in 2026 and 370,000 in 2027 and 2028, and the government has committed to bringing the temporary population below 5% of Canada's total population by the end of 2027.",
    },
    {
      question: "Does the levels plan change Express Entry CRS cut-offs?",
      answer:
        "Not directly. The plan sets how many Federal High Skilled admissions IRCC intends to process — 109,000 in 2026 rising to 111,000 in 2027 — but invitation rounds, category-based selection and the number of candidates already in the pool decide the cut-off. A stable target does not mean a lower score is enough.",
    },
    {
      question: "Do the 2027 and 2028 targets change?",
      answer:
        "Yes. The 2027 and 2028 figures are notional and are confirmed or adjusted by 1 November of each preceding year. Ranges, provincial allocations and program splits can all move, so the current year's numbers carry more weight than the forward years.",
    },
    {
      question: "Does the plan affect family sponsorship?",
      answer:
        "The family class stays broadly steady. Spouses, partners and children are targeted at 69,000 admissions in 2026 and 66,000 in 2027 and 2028, and parents and grandparents hold at 15,000 a year. Individual outcomes still depend on eligibility, evidence and the specific stream.",
    },
  ],

  related: [
    { href: "/immigrate/express-entry", label: "Express Entry", note: "How the federal skilled programs work and how a profile is scored." },
    { href: "/tools/crs-calculator-canada", label: "CRS calculator", note: "See how your own facts translate into a ranking score." },
    { href: "/immigrate/provincial-nominee-program-all-provinces-consolidated", label: "Provincial nominee programs", note: "Compare every province and territory in one view." },
    { href: "/assessment/free-canada-immigration-assessment", label: "Free assessment", note: "Work out which route fits your profile before you commit." },
  ],

  sources: [
    { label: "IRCC — Supplementary information for the 2026–2028 Immigration Levels Plan", url: "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/corporate-initiatives/levels/supplementary-immigration-levels-2026-2028.html" },
    { label: "IRCC — Immigration Levels Plan", url: "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/corporate-initiatives/levels.html" },
    { label: "IRCC — Check processing times", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html" },
  ],
};

export default article;
