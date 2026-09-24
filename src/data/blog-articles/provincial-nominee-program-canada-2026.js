/**
 * Article body for `/blog/provincial-nominee-program-canada-2026`.
 *
 * Metadata (title, description, keywords, category, official source) lives in
 * `src/data/blog-research.js` and is deliberately not duplicated here. This file
 * owns only the reading content.
 *
 * This is the province-by-province hub. The table names each program and its
 * dedicated guide; the links themselves are repeated in `related` so they are
 * clickable, because table cells render as plain text. Stream criteria, intake
 * windows and allocations change constantly, so the article explains how the
 * mechanism works and points at the province's own page rather than quoting
 * criteria that may already have moved.
 */

const article = {
  slug: "provincial-nominee-program-canada-2026",

  quickAnswer:
    "A provincial nominee program Canada route lets a province or territory nominate you for permanent residence based on its own economic needs. Each province sets its own streams, criteria and intake rhythm, and a nomination linked to Express Entry adds 600 points. Start with the province, your occupation and any job offer.",

  keyTakeaways: [
    "Each province and territory runs its own nominee program, with its own streams, criteria and annual allocation.",
    "An enhanced nomination is linked to Express Entry and adds 600 CRS points; a base nomination is processed separately.",
    "Most streams look for a job offer, an in-demand occupation, a connection to the province, language results and settlement funds.",
    "Intake windows open and close, and a full allocation can pause a stream even when you meet the criteria.",
    "Quebec runs its own skilled worker and business programs rather than nominating through the PNP framework.",
    "The province is the authority on its own streams, so its page outranks any summary, including this one.",
  ],

  sections: [
    {
      id: "what-the-pnp-is",
      heading: "What is the provincial nominee program Canada?",
      body: [
        "The provincial nominee program Canada is the route through which provinces and territories nominate people who have the skills, education and work experience to help their economy and who intend to live there. It is a permanent residence route, and it sits alongside the federal economic programs rather than replacing them.",
        "The defining feature is that each province and territory runs its own program. They set their own streams, their own criteria and the number of people they can nominate each year. A federal framework governs how nominations are used, but the selection decision belongs to the province.",
        "That structure is why PNP advice has to be province-specific. A stream that fits your occupation in one province may not exist in another, and the province that is the right fit is usually decided by your occupation, your job offer and any genuine connection you have to the place.",
      ],
      callout: {
        label: "Start with the province",
        text: "Do not begin by comparing points totals. Begin by finding the province whose in-demand occupations match your work history.",
      },
    },
    {
      id: "enhanced-versus-base-nomination",
      heading: "What is the difference between an enhanced and a base nomination?",
      body: [
        "There are two ways a nomination can lead to permanent residence. An enhanced nomination is linked to an Express Entry profile. It adds 600 points to your CRS score, which is the largest single addition in the system, and it means your permanent residence application is processed through Express Entry.",
        "A base nomination runs outside Express Entry. You apply to the province, and if you are nominated you submit a paper-based permanent residence application to IRCC. It does not add CRS points because you are not in the Express Entry pool, and the application is processed on its own timeline.",
        "The distinction matters for strategy rather than for status: both end in permanent residence. What differs is whether you need an Express Entry profile and a CRS score at all, how the application is processed, and whether you can also be invited in a federal round while you wait.",
      ],
      table: {
        caption: "Enhanced and base nominations compared",
        columns: ["Feature", "Enhanced nomination", "Base nomination"],
        rows: [
          ["Express Entry profile", "Required", "Not required"],
          ["CRS points added", "600", "Not applicable"],
          ["Application route", "Through Express Entry", "Paper-based, outside Express Entry"],
          ["Province's role", "Nominates you within Express Entry", "Nominates you for a separate application"],
          ["Main risk", "Profile details must stay accurate and current", "Processing runs on its own timeline"],
        ],
      },
      callout: {
        label: "Why this matters",
        text: "The province decides which of the two it will use, so the same profile can be processed differently depending on where you apply.",
      },
    },
    {
      id: "pnp-by-province-and-territory",
      heading: "Which province or territory runs which nominee program?",
      body: [
        "The table names each program and links its dedicated guide. The names matter less than the streams inside them: the same province may run one stream for workers with a job offer, another for graduates, another for entrepreneurs and another for people with an existing connection to the province.",
        "Quebec is the exception. It selects skilled workers and business applicants under its own immigration program rather than through the provincial nominee framework, so a Quebec route is not a PNP nomination and follows different rules and a different application process.",
        "The territories run smaller programs with their own criteria and employer involvement. They can suit candidates whose occupation is needed locally, but the volume of nominations is small and the intake rhythm is its own, so timing matters more than it does in a large province.",
      ],
      table: {
        caption: "Provincial nominee programs by province and territory",
        columns: ["Province or territory", "Nominee program", "Dedicated guide"],
        rows: [
          ["Ontario", "Ontario Immigrant Nominee Program (OINP)", "/immigrate/ontario-pnp-oinp"],
          ["Alberta", "Alberta Advantage Immigration Program (AAIP)", "/immigrate/alberta-pnp-aaip"],
          ["British Columbia", "British Columbia Provincial Nominee Program (BC PNP)", "/immigrate/british-columbia-pnp"],
          ["Saskatchewan", "Saskatchewan Immigrant Nominee Program (SINP)", "/immigrate/saskatchewan-pnp-sinp"],
          ["Manitoba", "Manitoba Provincial Nominee Program (MPNP)", "/immigrate/manitoba-pnp-mpnp"],
          ["New Brunswick", "New Brunswick Provincial Nominee Program (NBPNP)", "/immigrate/new-brunswick-pnp"],
          ["Nova Scotia", "Nova Scotia Nominee Program (NSNP)", "/immigrate/nova-scotia-pnp-nsnp"],
          ["Newfoundland and Labrador", "Newfoundland and Labrador Provincial Nominee Program (NLPNP)", "/immigrate/newfoundland-and-labrador-pnp"],
          ["Prince Edward Island", "Prince Edward Island Provincial Nominee Program (PEI PNP)", "/immigrate/prince-edward-island-pnp"],
          ["Yukon, Northwest Territories and Nunavut", "Territorial nominee programs", "/immigrate/yukon-nwt-nunavut-nominee-programs"],
        ],
      },
    },
    {
      id: "how-a-nomination-fits-with-express-entry",
      heading: "How does a nomination fit with Express Entry under PNP Canada 2026?",
      body: [
        "Under PNP Canada 2026, the mechanics are unchanged from the way the two systems have always connected. If a province uses the enhanced route, you need a valid Express Entry profile and you must meet the program's minimum criteria. The province nominates you, the nomination is recorded against your profile, and your CRS score increases by 600 points, which usually places a candidate well inside the range invited in the next round.",
        "Two conditions are easy to overlook. First, your profile has to remain accurate: if your circumstances change, the nomination and the profile have to agree. Second, some provinces require you to apply directly to them before you can be considered, while others select from the Express Entry pool themselves, and some do both through different streams.",
        "A nomination is not a permanent residence approval. It is a province's decision that it wants you. IRCC still assesses admissibility, and you still have to satisfy the program's requirements before permanent residence is granted.",
      ],
      related: [
        { href: "/immigrate/pnp-linked-express-entry", label: "PNP linked to Express Entry" },
        { href: "/immigrate/express-entry", label: "Express Entry" },
      ],
    },
    {
      id: "what-provinces-look-for",
      heading: "What do provinces look for in a nominee?",
      body: [
        "Streams differ, but the questions behind them are similar. A province wants to know that you can work in the occupation it needs, that you will actually settle there, and that you will not treat the nomination as a stepping stone to somewhere else.",
        "That last point explains why a job offer or a prior connection carries so much weight. It is evidence of intent as well as of employability. A candidate who can show a real reason to be in that province is easier for the province to nominate than one who cannot.",
      ],
      list: {
        title: "The factors that recur across provincial streams",
        items: [
          "A job offer from an employer in the province, where the stream requires one.",
          "Work experience in an occupation the province has identified as in demand.",
          "A genuine connection to the province, through work, study, family or a previous stay.",
          "Language results at the level the stream sets, which can be lower than a federal skilled program requires.",
          "Settlement funds, and a credible plan to live in the province rather than move on.",
        ],
      },
      callout: {
        label: "The honest test",
        text: "Ask whether you would still move to that province if the nomination were not part of the calculation. Provinces ask themselves the same question.",
      },
    },
    {
      id: "common-stream-types",
      heading: "What stream types appear across the provinces?",
      body: [
        "Most provinces organise their programs into streams, and those streams fall into a few recognisable types. Naming the type helps you find the right stream quickly, because the type tells you whether you need a job offer, a connection to the province or simply an occupation that is in demand.",
        "Employer-driven streams require a job offer from a qualifying employer, sometimes with additional obligations on the employer. Occupation-in-demand streams select candidates whose work experience is in a listed occupation, often without a job offer. Graduate streams are for people who studied in the province. Business and entrepreneur streams are for applicants who will invest in or start a business, and connection streams are for candidates with family or prior residence in the province.",
        "The same province can run several types at once, and you may be eligible for more than one stream within a single province. When that happens, the choice usually turns on timing and on which stream's requirements you can evidence most completely.",
      ],
      list: {
        title: "Stream types you will encounter",
        items: [
          "Employer-driven: requires a job offer from a qualifying employer in the province.",
          "Occupation-in-demand: selects candidates whose experience is in a listed occupation.",
          "Graduate: for people who completed eligible study in the province.",
          "Business or entrepreneur: for applicants who will invest in or start a business.",
          "Connection-based: for candidates with family or prior residence in the province.",
        ],
      },
    },
    {
      id: "intake-rhythms-and-timing",
      heading: "How do intake windows and timing affect a PNP application?",
      body: [
        "Each province decides when it accepts applications and how many it can process. Some streams stay open continuously, some open in scheduled windows, and some pause when an allocation is reached. A province can also change a stream's criteria between intakes, so a guide written for the previous intake may already be out of date.",
        "Because the timing is provincial, a PNP application is a different kind of project from an Express Entry profile. With Express Entry you can create a profile and wait. With a PNP you often have to be ready at the moment an intake opens, with the documents already prepared and consistent.",
        "The practical implication is to prepare the evidence before an intake is announced. Language results, credential assessments, reference letters and proof of funds all take time, and an intake that closes in days does not wait for documents that are still being collected.",
      ],
      list: {
        title: "What to have ready before an intake opens",
        items: [
          "A valid language test result at or above the level your target stream requires.",
          "An educational credential assessment, if the stream scores foreign education.",
          "Reference letters that state duties, hours and dates for the occupation you are claiming.",
          "Proof of settlement funds in the form the stream accepts.",
          "A current résumé that matches your documents exactly.",
        ],
      },
    },
    {
      id: "what-to-verify",
      heading: "What should you verify before choosing a province?",
      body: [
        "Read the province's own program page rather than a summary, because the streams and criteria change and the province is the authority on them. Then check the federal page for how nominations are processed and what admissibility requires.",
        "Confirm three things in particular: whether the stream needs a job offer, whether it is enhanced or base, and what the province expects from you after nomination. Those three answers decide your timeline, your documents and whether you need an Express Entry profile at all.",
        "Finally, check the province's allocation for the year if it publishes one, because a full allocation can pause an intake even when you meet the criteria. That is a capacity question rather than an eligibility one, and it is worth knowing before you build a plan around a single province.",
      ],
    },
  ],

  glossary: [
    { term: "Provincial Nominee Program", definition: "The route through which a province or territory nominates people for permanent residence based on its own economic needs and its own stream criteria." },
    { term: "Enhanced nomination", definition: "A nomination linked to an Express Entry profile. It adds 600 CRS points and the application is processed through Express Entry." },
    { term: "Base nomination", definition: "A nomination that runs outside Express Entry and leads to a separate, paper-based permanent residence application." },
    { term: "Allocation", definition: "The number of nominations a province or territory may issue in a year. A full allocation can pause a stream even for eligible candidates." },
    { term: "Expression of interest", definition: "A profile some provinces require before they invite candidates to apply, used to rank interested candidates against the province's needs." },
    { term: "NOC", definition: "The National Occupation Classification, the list of occupations in the Canadian labour market used to describe and match work experience." },
    { term: "CRS", definition: "The Comprehensive Ranking System, the points system that scores and ranks profiles inside the Express Entry pool." },
  ],

  faqs: [
    {
      question: "Do all provinces use the same PNP criteria?",
      answer:
        "No. Each province and territory designs its own streams and sets its own criteria, so requirements differ for occupation, job offer, language level, work experience and connection to the province. That is why the province's own page is the authority, and why a summary that covers every province can only describe the general pattern rather than the exact rule you must meet.",
    },
    {
      question: "Is a provincial nomination enough to get permanent residence?",
      answer:
        "No. A nomination is the province's decision that it wants you, not a permanent residence approval. IRCC still assesses admissibility, including criminal, medical and security checks, and you still have to satisfy the program's requirements. A nomination substantially improves your position, but it does not remove the federal stage of the process.",
    },
    {
      question: "How many points does a PNP nomination add?",
      answer:
        "An enhanced nomination linked to Express Entry adds 600 points to your CRS score, which is the largest single addition available in the system. A base nomination adds no CRS points, because it is processed outside Express Entry as a separate paper-based application. The province decides which route it will use.",
    },
    {
      question: "Can I apply to more than one province at the same time?",
      answer:
        "Provinces generally expect you to intend to settle in their province, and applying to several at once can raise questions about that intent. The practical approach is to identify the province that fits your occupation and circumstances best, apply there, and keep an Express Entry profile current so a federal round remains an option while you wait.",
    },
    {
      question: "Does Quebec have a provincial nominee program?",
      answer:
        "No. Quebec selects skilled workers and business applicants under its own immigration program rather than through the provincial nominee framework, so its rules, streams and application process are separate. If Quebec is your destination, work from Quebec's own immigration pages rather than from the federal PNP page.",
    },
  ],

  related: [
    { href: "/immigrate/ontario-pnp-oinp", label: "Ontario PNP (OINP)", note: "Streams for workers, graduates and entrepreneurs." },
    { href: "/immigrate/alberta-pnp-aaip", label: "Alberta PNP (AAIP)", note: "Alberta's streams and in-demand occupations." },
    { href: "/immigrate/british-columbia-pnp", label: "British Columbia PNP", note: "BC's skills-based and employer-driven streams." },
    { href: "/immigrate/saskatchewan-pnp-sinp", label: "Saskatchewan PNP (SINP)", note: "SINP streams for workers and graduates." },
    { href: "/immigrate/manitoba-pnp-mpnp", label: "Manitoba PNP (MPNP)", note: "Manitoba's streams and expression of interest." },
    { href: "/immigrate/new-brunswick-pnp", label: "New Brunswick PNP", note: "New Brunswick's employer-led streams." },
    { href: "/immigrate/nova-scotia-pnp-nsnp", label: "Nova Scotia PNP (NSNP)", note: "Nova Scotia's streams and priority sectors." },
    { href: "/immigrate/newfoundland-and-labrador-pnp", label: "Newfoundland and Labrador PNP", note: "NL's streams for workers and graduates." },
    { href: "/immigrate/prince-edward-island-pnp", label: "Prince Edward Island PNP", note: "PEI's streams and employer requirements." },
    { href: "/immigrate/yukon-nwt-nunavut-nominee-programs", label: "Territorial nominee programs", note: "Yukon, Northwest Territories and Nunavut." },
    { href: "/immigrate/atlantic-immigration-program", label: "Atlantic Immigration Program", note: "The employer-led route for Atlantic Canada." },
    { href: "/immigrate/rural-and-northern-immigration-pilot", label: "Rural and community immigration pilots", note: "Employer and community-led routes." },
    { href: "/immigrate/pnp-linked-express-entry", label: "PNP linked to Express Entry", note: "How the enhanced route adds 600 points." },
    { href: "/immigrate/provincial-nominee-program-all-provinces-consolidated", label: "All provinces compared", note: "Every nominee program in one view." },
  ],

  sources: [
    { label: "IRCC — Immigrate as a provincial nominee", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html" },
    { label: "IRCC — Express Entry: Who can apply", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply.html" },
    { label: "IRCC — Atlantic Immigration Program", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/atlantic-immigration.html" },
  ],
};

export default article;
