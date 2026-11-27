import { site } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";

const LOCATION_PATH = "/locations";

const CITY_LINKS = [
  { slug: "toronto", city: "Toronto", province: "Ontario", focus: "OINP, Express Entry, study and work permits" },
  { slug: "brampton", city: "Brampton", province: "Ontario", focus: "OINP, Express Entry, study and work permits" },
  { slug: "mississauga", city: "Mississauga", province: "Ontario", focus: "OINP, Express Entry, study and work permits" },
  { slug: "ottawa", city: "Ottawa", province: "Ontario", focus: "OINP, Express Entry, study and work permits" },
  { slug: "hamilton", city: "Hamilton", province: "Ontario", focus: "OINP, Express Entry, study and work permits" },
  { slug: "london", city: "London", province: "Ontario", focus: "OINP, Express Entry, study and work permits" },
  { slug: "kitchener-waterloo", city: "Kitchener-Waterloo", province: "Ontario", focus: "OINP, Express Entry, study and work permits" },
  { slug: "windsor", city: "Windsor", province: "Ontario", focus: "OINP, Express Entry, study and work permits" },
  { slug: "vancouver", city: "Vancouver", province: "British Columbia", focus: "BC PNP, Express Entry, study and work permits" },
  { slug: "surrey", city: "Surrey", province: "British Columbia", focus: "BC PNP, Express Entry, study and work permits" },
  { slug: "victoria", city: "Victoria", province: "British Columbia", focus: "BC PNP, Express Entry, study and work permits" },
  { slug: "kelowna", city: "Kelowna", province: "British Columbia", focus: "BC PNP, Express Entry, study and work permits" },
  { slug: "calgary", city: "Calgary", province: "Alberta", focus: "AAIP, Express Entry, study and work permits" },
  { slug: "edmonton", city: "Edmonton", province: "Alberta", focus: "AAIP, Express Entry, study and work permits" },
  { slug: "winnipeg", city: "Winnipeg", province: "Manitoba", focus: "MPNP, Express Entry, study and work permits" },
  { slug: "saskatoon", city: "Saskatoon", province: "Saskatchewan", focus: "SINP, Express Entry, study and work permits" },
  { slug: "regina", city: "Regina", province: "Saskatchewan", focus: "SINP, Express Entry, study and work permits" },
  { slug: "halifax", city: "Halifax", province: "Nova Scotia", focus: "NSNP, Express Entry, study and work permits" },
];

const CITY_BY_SLUG = Object.fromEntries(CITY_LINKS.map((city) => [city.slug, city]));

const PROVINCE_PROFILES = {
  Ontario: {
    acronym: "OINP",
    program: "Ontario Immigrant Nominee Program (OINP)",
    pathways: [
      ["Ontario Workforce Priority", "The current route covers eligible skilled foreign workers with qualifying job offers and eligible self-employed physicians."],
      ["Employer-led steps", "For job-offer applicants, the employer starts in Ontario’s portal before the candidate registers an Expression of Interest."],
      ["Express Entry option", "Some eligible Workforce Priority candidates may request an Express Entry nomination if they also meet federal requirements."],
      ["Permanent residence", "Ontario nomination is a separate step from IRCC’s final decision on permanent residence."],
    ],
    guide: "/immigrate/ontario-pnp-oinp",
    officialUrl: "https://www.ontario.ca/page/ontario-workforce-priority-stream",
  },
  "British Columbia": {
    acronym: "BC PNP",
    program: "BC Provincial Nominee Program (BC PNP)",
    pathways: [
      ["Skills Immigration", "Eligibility and intake steps depend on the selected category; some candidates enter a registration pool before they can be invited."],
      ["Express Entry BC", "The program guide lists Express Entry BC options for eligible federal candidates; confirm current stream availability before applying."],
      ["Entrepreneur Immigration", "Business routes use separate eligibility and application requirements from worker pathways."],
      ["Selection", "BC may target registrations to current provincial priorities, so a score from an earlier invitation round is not a forecast."],
    ],
    guide: "/immigrate/british-columbia-pnp",
    officialUrl: "https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program",
  },
  Alberta: {
    acronym: "AAIP",
    program: "Alberta Advantage Immigration Program (AAIP)",
    pathways: [
      ["Alberta Opportunity Stream", "For eligible temporary foreign workers already working full-time in Alberta with a qualifying Alberta job offer."],
      ["Alberta Express Entry", "A separate route for eligible federal Express Entry candidates who meet Alberta’s current selection requirements."],
      ["Community and sector pathways", "Rural Renewal and Tourism and Hospitality routes have their own employer, community and occupation rules."],
      ["Worker EOI", "Some worker routes use a scored profile and invitations; an EOI is not a nomination application."],
    ],
    guide: "/immigrate/alberta-pnp-aaip",
    officialUrl: "https://www.alberta.ca/alberta-advantage-immigration-program",
  },
  Manitoba: {
    acronym: "MPNP",
    program: "Manitoba Provincial Nominee Program (MPNP)",
    pathways: [
      ["Skilled Worker Stream", "Manitoba assesses candidates through its in-province and overseas pathways, including the connection or recruitment criteria that fit each route."],
      ["International Education Stream", "Manitoba graduates may qualify under separate career, internship or student-entrepreneur criteria."],
      ["Business Investor Stream", "Entrepreneur routes have their own eligibility and submission process."],
      ["EOI selection", "The MPNP ranks eligible profiles for relevant pathways; an EOI is not a complete application or a promise of invitation."],
    ],
    guide: "/immigrate/manitoba-pnp-mpnp",
    officialUrl: "https://immigratemanitoba.com/immigrate-to-manitoba/",
  },
  Saskatchewan: {
    acronym: "SINP",
    program: "Saskatchewan Immigrant Nominee Program (SINP)",
    pathways: [
      ["International Skilled Worker", "Includes different routes for eligible job-offer holders and candidates assessed through occupation or Express Entry criteria."],
      ["Saskatchewan Experience", "Categories serve eligible workers and graduates already living or working in the province; requirements vary by category."],
      ["EOI and occupation rules", "Some routes use a ranked profile, and occupation eligibility or licensing requirements can change."],
      ["Current intake", "Check the current provincial intake instructions for your category and confirm any steps your employer must complete."],
    ],
    guide: "/immigrate/saskatchewan-pnp-sinp",
    officialUrl: "https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/assess-your-eligibility",
  },
  "Nova Scotia": {
    acronym: "NSNP",
    program: "Nova Scotia Nominee Program (NSNP)",
    pathways: [
      ["Skilled Worker", "Employer-supported cases and several former pathway criteria now sit within this stream’s sub-criteria."],
      ["Nova Scotia Graduate", "A route for eligible graduates under the stream’s current education and job requirements."],
      ["Entrepreneur", "A separate business pathway with its own selection and application rules."],
      ["Nova Scotia: Express Entry", "An Express Entry-linked stream that includes route-specific criteria carried forward from former streams."],
      ["Separate federal option", "The Atlantic Immigration Program is not an NSNP stream and has its own designated-employer process."],
    ],
    guide: "/immigrate/nova-scotia-pnp-nsnp",
    officialUrl: "https://liveinnovascotia.com/nova-scotia-nominee-program",
  },
};

const SHARED_SERVICES = [
  ["Express Entry and provincial nominations", "Profile creation, score improvement and nominee program applications."],
  ["Study permits and PGWP", "Study permit applications, extensions and post-graduation work permits."],
  ["Work permits and LMIA", "Employer-supported work permits, LMIA filing and open work permit extensions."],
  ["Spousal and family sponsorship", "Spousal permanent residence, spousal open work permits and family applications."],
  ["Visitor visas and Super Visa", "Visitor visas for family and business trips, and Super Visas for parents and grandparents."],
  ["Other applications", "Temporary resident permits, TRV stickers, resume services and complex cases."],
];

const CITY_DETAILS = {
  brampton: {
    heroLead: `${site.name} is at ${site.address.full}, led by RCIC ${site.rcic.consultant.name} (${site.rcic.number}). We advise on PR, including Express Entry and PNP, family and Super Visa, study and work permits, and refusals; meet online or in person by appointment.`,
    serviceIntro: "Commonwealth Migration Group helps Brampton families, students, workers and employers understand Canadian immigration options, prepare supporting documents and plan the next step for their case.",
    sectors: ["Logistics and warehousing", "Manufacturing", "Trucking and transportation", "Healthcare and retail"],
    studyOptions: "Sheridan College, Algoma University (Brampton campus) and nearby Humber and Seneca campuses",
    serviceAreaNote: "Visit our Brampton office by appointment, or meet online by video, phone or WhatsApp. We work with clients in Brampton, across the Greater Toronto Area, elsewhere in Canada and abroad where the requested service is within the representative's authorization.",
  },
  calgary: {
    planningNote: "If you work for an energy or engineering contractor, bring the employment records showing your duties and employer. If your job involves project sites in more than one province, flag where you actually work when comparing AAIP and federal options.",
    heroLead: "Calgary's energy, technology and logistics sectors bring different work histories and job offers into the Alberta immigration conversation. This guide helps local workers and families compare Express Entry, AAIP, study, work and sponsorship options using their actual facts.",
    serviceIntro: "We assess your eligibility for the Alberta Opportunity Stream, the Alberta Express Entry Pathway and the health care pathway, and we compare them with the federal Express Entry route.",
    sectors: ["Energy and engineering", "Technology and fintech", "Construction and skilled trades", "Healthcare and logistics"],
    studyOptions: "University of Calgary, Mount Royal University and SAIT",
  },
  edmonton: {
    planningNote: "If you are pursuing a regulated health profession, gather your Alberta licensing progress along with your offer and job duties. We can compare the requirements of the occupation with those of any relevant AAIP pathway.",
    heroLead: "From healthcare and research to construction and energy services, Edmonton's job mix can point to different federal or Alberta pathways. Check your occupation, work authorization and employer details before choosing an AAIP or Express Entry route.",
    serviceIntro: "We help Edmonton clients use the AAIP and Express Entry together, advise on work permit options and prepare applications for workers, graduates and families.",
    sectors: ["Healthcare and research", "Construction and skilled trades", "Energy, petrochemicals and manufacturing", "Government and education"],
    studyOptions: "University of Alberta, NAIT, MacEwan University and Concordia University of Edmonton",
  },
  halifax: {
    planningNote: "For an Atlantic Immigration Program assessment, start by confirming whether the employer is designated and can support the endorsement process. Bring the job offer so we can compare this option with current Nova Scotia nomination streams.",
    heroLead: "In Halifax, a job offer and employer designation may shape whether a Nova Scotia route or the Atlantic Immigration Program is worth exploring. This guide outlines the questions workers, graduates and families should check first.",
    serviceIntro: "We assess whether the Nova Scotia Nominee Program, Express Entry or the Atlantic Immigration Program fits your profile best, and prepare the employer and applicant documents.",
    sectors: ["Ocean technology and shipbuilding", "Healthcare and life sciences", "Defence and public sector", "Education and technology"],
    studyOptions: "Dalhousie University, Saint Mary's University and Nova Scotia Community College",
  },
  hamilton: {
    planningNote: "For a job in Hamilton's manufacturing or health sectors, bring a letter describing your actual duties, hours and work location. These details help when comparing an Ontario employer-supported application with federal options based on work experience.",
    heroLead: "Hamilton's healthcare, education, manufacturing and trades employers draw workers and students with different immigration plans. Compare Ontario options with the federal route against your work history, permit, education and the job you intend to do.",
    serviceIntro: "We help Hamilton graduates and workers compare Express Entry with Ontario's current Workforce Priority stream when its job-offer or physician pathway fits, then organize the records for the next step.",
    sectors: ["Healthcare and life sciences", "Steel and advanced manufacturing", "Education", "Skilled trades"],
    studyOptions: "McMaster University and Mohawk College",
  },
  kelowna: {
    planningNote: "If you work seasonally in the Okanagan, bring the terms of each contract and your work permit dates. We can check which experience counts for federal programs and whether the current job satisfies any relevant B.C. employer requirements.",
    heroLead: "Kelowna's agriculture, tourism, construction and technology employers bring a mix of seasonal and longer-term work plans. If you are considering a work permit or B.C. nomination, check the exact job, employer and stream rules before relying on a local opportunity.",
    serviceIntro: "We help workers and employers in the Okanagan with work permit extensions and BC PNP nominations, and explain which options suit your occupation and employer.",
    sectors: ["Agriculture, wine and food processing", "Tourism and hospitality", "Construction and trades", "Technology and healthcare"],
    studyOptions: "UBC Okanagan and Okanagan College",
  },
  "kitchener-waterloo": {
    planningNote: "If your record includes a co-op placement and work after graduation, list them separately with dates and hours. We can review which experience may count and check how your permit expiry fits your plan.",
    heroLead: "Students, engineers and technology workers in Kitchener-Waterloo often want to understand what comes after a study or work permit. This guide compares federal routes with Ontario options and highlights which parts of your record may change the answer.",
    serviceIntro: "We help technology workers and graduates compare Express Entry with Ontario's current nomination options and plan around permit expiry dates, work records and the stream criteria in effect.",
    sectors: ["Software and technology", "Advanced manufacturing", "Insurance", "Startups and research"],
    studyOptions: "University of Waterloo, Wilfrid Laurier University and Conestoga College",
  },
  london: {
    planningNote: "If you are approaching graduation from a London-area institution, gather your program completion details, study history and permit expiry date. These help identify whether a PGWP is available and which dates matter for applying.",
    heroLead: "London's universities, health sector and agri-food employers bring students and workers to southwestern Ontario. If you want to remain in Canada, map your study program, work authorization and occupation to the current PGWP, OINP and Express Entry requirements.",
    serviceIntro: "We guide students through study permit extensions, post-graduation work permits and the move to permanent residence, and we help employers and workers with job-offer-based routes.",
    sectors: ["Healthcare and education", "Manufacturing and agri-food", "Insurance and financial services", "Skilled trades"],
    studyOptions: "Western University and Fanshawe College",
  },
  mississauga: {
    planningNote: "If you work near Pearson or through a staffing firm, confirm who employs you and where you perform the work. Bring an offer and records that identify that employer before considering an Ontario job-offer route.",
    heroLead: "Mississauga's airport, logistics, corporate and manufacturing employers support a large newcomer community. This guide helps local students, workers and families compare Ontario and federal immigration routes based on their status, work history and plans.",
    serviceIntro: "We assess your Express Entry score and OINP options, advise on work permit extensions and post-graduation work permits, and help families apply together.",
    sectors: ["Aviation and logistics", "Finance and corporate head offices", "Pharmaceuticals and manufacturing", "Information technology"],
    studyOptions: "University of Toronto Mississauga, Sheridan College and Humber College",
  },
  ottawa: {
    planningNote: "If you plan to use French for Express Entry, bring valid test results from an IRCC-approved provider along with your language results in English if available. If you live or work across the river in Gatineau, explain your settlement plan so we can compare options for the province where you intend to live.",
    heroLead: "Ottawa's public service, research and technology employers create a range of immigration questions for workers and graduates. Start with your work experience, language results and current permit, then compare federal options with Ontario pathways.",
    serviceIntro: "We help you plan your path from study permit to post-graduation work permit to permanent residence, and we explain how French language results can raise your Express Entry score.",
    sectors: ["Federal public service and defence", "Technology and telecommunications", "Healthcare", "Education and research"],
    studyOptions: "Carleton University, University of Ottawa, Algonquin College and La Cité",
  },
  regina: {
    planningNote: "Start with your Saskatchewan job offer, work authorization, study history and plan to settle in the province. Use the current stream requirements to check your situation before relying on a past intake or invitation result.",
    heroLead: "For Regina residents planning permanent residence, the main question is which Saskatchewan stream—if any—fits your job, permit, study history and settlement plans. Compare the SINP with federal Express Entry, and verify current intake rules before acting.",
    serviceIntro: "For Regina workers and graduates, we compare Saskatchewan and federal pathways against the actual job duties, employer, work-permit dates, education and language evidence. We also help families plan sponsorship and temporary-resident applications.",
    routePlanning: "A Regina address, job title or TEER label alone does not establish SINP eligibility. Compare your work, study, employer and status facts with the exact stream and its current intake rules. Criteria can change, so check the [Government of Saskatchewan's SINP eligibility guide](https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/assess-your-eligibility) before relying on an older summary or invitation result.",
    routeChecks: [
      ["Your current situation", "Questions to verify before choosing a route"],
      ["Already working in Saskatchewan", "Work authorization and expiry, employer, duties, job offer and work history against the current applicable stream."],
      ["Studying or graduated in Regina", "The exact institution and program, current status, work authorization, employer and the rules for any student or graduate pathway."],
      ["Have a Saskatchewan job offer", "The employer and position, actual duties, licensing where required, and the stream’s current offer and intake steps."],
      ["Do not have a Saskatchewan job offer", "Whether a current no-offer stream fits, including occupation rules, points, an EOI or Express Entry requirements."],
    ],
    sectors: ["Provincial government", "Healthcare", "Agriculture and manufacturing", "Energy and construction"],
    studyOptions: "University of Regina and Saskatchewan Polytechnic",
  },
  saskatoon: {
    planningNote: "If your offer is in agriculture, mining, health care or the trades, bring the job duties and any licensing, certification or employer support details. We can check them against the current SINP criteria for that occupation.",
    heroLead: "Agriculture, mining, healthcare and technology are central to Saskatoon's job market. If one of these sectors is part of your plan, compare Saskatchewan nominee streams with federal routes using your actual job duties, work authorization and settlement goals.",
    serviceIntro: "We assess your eligibility for the SINP International Skilled Worker and Saskatchewan Experience categories and help you choose the sub-category that fits your occupation.",
    sectors: ["Agriculture and agri-tech", "Mining and potash", "Healthcare", "Construction and trades"],
    studyOptions: "University of Saskatchewan and Saskatchewan Polytechnic",
  },
  surrey: {
    planningNote: "If you work in construction or trucking across Metro Vancouver, bring the details of your employer, duties, work locations and any trade or driving credentials. We can compare them with the requirements of the exact federal or B.C. pathway.",
    heroLead: "Surrey's construction, transport and healthcare employers are part of a large and diverse newcomer community. This guide helps workers, students and families compare B.C. nomination options with Express Entry and temporary permit routes.",
    serviceIntro: "We help Surrey workers and graduates plan their route to permanent residence through BC PNP Skills Immigration, Express Entry BC and federal programs, and we support families with sponsorship.",
    sectors: ["Construction and skilled trades", "Trucking and logistics", "Healthcare", "Retail and services"],
    studyOptions: "Simon Fraser University (Surrey), Kwantlen Polytechnic University and Douglas College",
  },
  toronto: {
    planningNote: "If you’ve held multiple jobs or moved from study into work, put your dates, hours and duties in order. That record helps us assess which work experience may count for Express Entry and whether a current Ontario stream fits your situation.",
    heroLead: "Toronto workers, graduates and families may be weighing an OINP route, Express Entry, a permit or sponsorship. Start with your current status, job duties and language results; this guide helps you compare the options that fit your circumstances.",
    serviceIntro: "Many Toronto clients are international students, workers on employer-specific permits and Express Entry candidates. We compare federal options with Ontario's current nomination route when its criteria fit, then help organize the supporting records.",
    sectors: ["Finance and fintech", "Technology and AI", "Healthcare", "Skilled trades and construction"],
    studyOptions: "University of Toronto, Toronto Metropolitan University, York University, Seneca and George Brown",
  },
  vancouver: {
    planningNote: "If your role involves remote work or clients across Canada, confirm the employer address, work location and arrangement in your contract. These details can matter when checking current B.C. nomination requirements.",
    heroLead: "Vancouver workers and graduates can compare B.C. nominee streams with Express Entry and temporary permit options. Because provincial priorities and intake rules change, check your occupation, work history and settlement plan against current guidance.",
    serviceIntro: "The BC PNP scores candidates on a points system and runs targeted invitation rounds. We assess where your profile sits, help you build the right registration and prepare your application for BC and for IRCC.",
    sectors: ["Technology and software", "Film and digital media", "Trade, ports and logistics", "Healthcare"],
    studyOptions: "University of British Columbia, Simon Fraser University, BCIT and Langara College",
  },
  victoria: {
    planningNote: "If you studied on Vancouver Island, bring the exact program and your completion date so we can check federal PGWP eligibility. A Victoria-area job offer can be assessed separately under the current B.C. worker criteria.",
    heroLead: "Victoria's public sector, technology, tourism and education employers bring different pathways into view. This guide helps graduates, workers and families sort out whether a B.C. program, Express Entry or another route matches their current situation.",
    serviceIntro: "We advise on post-graduation work permits and current B.C. Skills Immigration criteria, and help prepare eligible applications.",
    sectors: ["Provincial government and public service", "Technology and ocean sciences", "Tourism and hospitality", "Healthcare and education"],
    studyOptions: "University of Victoria and Camosun College",
  },
  windsor: {
    planningNote: "If your work spans both sides of the Canada–U.S. border, record where you performed it, when and with what authorization. We can review Canadian and foreign work history under the rules for your specific pathway.",
    heroLead: "Windsor's automotive, logistics, health and education sectors attract workers and international students. If you are planning to stay in Canada, check your work authorization and job duties against current Ontario and federal rules before choosing a route.",
    serviceIntro: "We support Windsor students and workers with post-graduation work permits, employer-supported applications and current Ontario nomination options. The right route depends on your job offer, status and the stream rules in effect.",
    sectors: ["Automotive manufacturing", "Cross-border logistics", "Healthcare", "Skilled trades"],
    studyOptions: "University of Windsor and St. Clair College",
  },
  winnipeg: {
    planningNote: "List your work, study and any eligible connections in Manitoba, alongside your plan to live and work there. We can compare those facts with the requirements for in-province workers, eligible graduates or applicants overseas.",
    heroLead: "Winnipeg workers and graduates can compare Manitoba's nominee streams with federal Express Entry and other options. Your connection to Manitoba, current status and plan to live and work there can all affect which route deserves a closer look.",
    serviceIntro: "We help clients work out whether they qualify for Skilled Worker in Manitoba, Skilled Worker Overseas or the International Education Stream, and we prepare the full application.",
    sectors: ["Manufacturing and agri-food", "Trucking and transportation", "Healthcare", "Aerospace and technology"],
    studyOptions: "University of Manitoba, University of Winnipeg and Red River College Polytechnic",
  },
};

function cityPath(slug) {
  return `${LOCATION_PATH}/${slug}`;
}

function cityLabel({ city, slug }) {
  return slug === "brampton" ? "Immigration consultant in Brampton" : `Immigration consultant serving ${city}`;
}

function cityKeywords(city, province, acronym) {
  return [
    `immigration consultants in ${city}`,
    `immigration consultant ${city}`,
    `Canada immigration consultant ${city}`,
    `licensed RCIC ${city}`,
    `immigration services for ${city} residents`,
    `immigration in ${city}`,
    `${province} immigration consultant`,
    `${acronym} consultant ${city}`,
    `Express Entry consultant ${city}`,
    `study permit consultant ${city}`,
  ];
}

function cityFaqs(city, province, { acronym, officialUrl: pnpUrl }) {
  const repGuide = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html";
  const ciccRegister = site.rcic.registerUrl;
  const source = (label, url) => ({ label, url });
  return [
    {
      question: `Can I meet with a CMG immigration consultant from ${city}?`,
      answer: `Yes. Book a free first consultation by video or phone from ${city}. Commonwealth Migration Group’s office is in Brampton, Ontario. You can also contact us on WhatsApp to arrange a meeting.`,
    },
    {
      question: `Which Canada PR pathway should ${city} residents compare: Express Entry or the ${acronym}?`,
      answer: `Express Entry is a federal system for eligible economic programs; the ${acronym} nominates candidates under province-specific streams. Compare your occupation, work history, language results, education, status, job offer and genuine plan to live in ${province}. Stream openings and selection rules change, so check the current provincial guide before applying.`,
      sourceLinks: [source(`${acronym} official program guide`, pnpUrl), source("IRCC Provincial Nominee Program overview", "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html")],
    },
    {
      question: `Does a job offer in ${city} help with ${acronym} or Express Entry eligibility?`,
      answer: `A job offer can matter for some provincial streams or work-permit routes, but it does not automatically qualify someone for a nomination or permanent residence. Check the current ${acronym} stream rules, the employer and position requirements, and the separate federal program criteria before relying on an offer.`,
      sourceLinks: [source(`${acronym} official program guide`, pnpUrl), source("IRCC Express Entry eligibility", "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility.html")],
    },
    {
      question: `Can international students in ${city} apply for a PGWP and then Canadian permanent residence?`,
      answer: `For graduates in ${city}, the same federal PGWP test applies nationwide: eligibility depends on the designated learning institution, exact program, study history, application timing and current language or field-of-study rules. A PGWP is temporary work authorization; graduates must separately qualify for an available federal or provincial permanent-residence program.`,
      sourceLinks: [source("IRCC post-graduation work permit eligibility", "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html"), source("IRCC permanent-residence programs", "https://ircc.canada.ca/explore-programs/")],
    },
    {
      question: `How can I verify that an RCIC immigration consultant serving ${city} is licensed with CICC?`,
      answer: `If you are hiring someone to advise on a ${city} case, search the consultant’s name or licence number in the College of Immigration and Citizenship Consultants Public Register. Confirm the person matches the register entry, including current status and contact details, before sending sensitive records or paying for advice.`,
      sourceLinks: [source("CICC Public Register", ciccRegister)],
    },
    {
      question: `How much does an immigration consultant serving ${city} charge for Express Entry or a Canada PR application?`,
      answer: `Government does not set one consulting fee for ${city} clients. The total depends on the application, family members and the services in the retainer. Ask for the scope, fee breakdown, payment schedule, extra charges and refund terms in writing, and keep the signed agreement.`,
      sourceLinks: [source("Government of Canada: working with an immigration representative", repGuide)],
    },
    {
      question: `How long does a Canada PR application take for someone applying from ${city}?`,
      answer: `Applying from ${city} does not create a separate federal processing time. IRCC estimates depend on application type, completeness, inventory and checks; a provincial nomination also has its own assessment stage. Check the live estimate for the exact application and treat it as a guide, not a promised decision date.`,
      sourceLinks: [source("IRCC current processing times", "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html"), source(`${acronym} official program guide`, pnpUrl)],
    },
    {
      question: `What documents should I prepare for a free immigration consultant assessment in ${city}?`,
      answer: `For an initial ${city} assessment, start with your passport, current status and expiry date, education and language records, employment history, family details, funds and previous Canadian applications or refusal letters. You do not need a complete application file, but disclose any short deadline so it can be considered.`,
      sourceLinks: [source("IRCC Explore immigration programs", "https://ircc.canada.ca/explore-programs/")],
    },
  ];
}

function relatedCityLinks(currentSlug) {
  return CITY_LINKS
    .filter(({ slug }) => slug !== currentSlug)
    .map(({ city, slug }) => `${cityLabel(city)} → ${cityPath(slug)}`);
}

function localPlanningTable(cityEntry, detail) {
  return {
    type: "table",
    rows: [
      ["City-specific planning factor", `What to compare in ${cityEntry.city}`],
      ["City", cityEntry.city],
      ["Local work sectors", detail.sectors.join(", ")],
      ["Study options", detail.studyOptions],
      ["Consultation focus", detail.serviceIntro],
    ],
  };
}

function locationPage(cityEntry) {
  const detail = CITY_DETAILS[cityEntry.slug];
  const province = PROVINCE_PROFILES[cityEntry.province];
  const path = cityPath(cityEntry.slug);
  const isBrampton = cityEntry.slug === "brampton";
  const faqs = isBrampton ? [] : cityFaqs(cityEntry.city, cityEntry.province, province);
  const workParagraph = `Local work sectors include ${detail.sectors.join(", ")}. Study options include ${detail.studyOptions}. If you are planning for a PGWP, check the exact institution and program against current IRCC eligibility rules.`;
  const serviceAreaNote = detail.serviceAreaNote || `Meet with our Brampton-based team by video or phone from ${cityEntry.city}. Contact us on WhatsApp to arrange an appointment.`;
  const related = CITY_LINKS
    .filter((city) => city.slug !== cityEntry.slug && city.province === cityEntry.province)
    .map(({ city, slug }) => ({ city, href: cityPath(slug) }));
  const location = {
    kind: isBrampton ? "office" : "online",
    city: cityEntry.city,
    province: cityEntry.province,
    titleLead: isBrampton ? "Immigration consultant in" : "Immigration consultant serving",
    titlePlace: isBrampton ? "Brampton, Ontario" : cityEntry.city,
    program: province,
    detail,
    related,
    serviceAreaNote,
  };
  const bramptonContentBlocks = [
    { type: "heading", level: 2, text: "Immigration help for Brampton families, students and workers" },
    { type: "paragraph", text: `${site.rcic.consultant.name}, RCIC (${site.rcic.number}), provides immigration consulting through ${site.name}. You can [check the CICC Public Register profile](${site.rcic.profileUrl}) and confirm who will advise you before you share documents or pay for a service. The Government of Canada's [authorized representative guide](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose/authorized.html) explains which professionals may provide paid immigration advice or representation.` },
    { type: "paragraph", text: "We help clients compare a route with their immigration goal, current status, education, work history, family situation and deadlines. You may apply on your own; a representative is optional. If you choose paid assistance, get the service scope, professional fees, government charges and applicable taxes in a written agreement before work begins." },
    { type: "heading", level: 2, text: "Immigration services in Brampton" },
    { type: "list", ordered: false, items: [
      "**Super Visa for parents and grandparents:** assess the host's income and household size, prepare the invitation and supporting records, and review the applicant's medical exam and health insurance requirements. [Super Visa guide](/visit/super-visa-standalone-page).",
      "**Spousal and family sponsorship:** compare the available sponsorship route, sponsor and applicant requirements, relationship evidence, status and travel plans. [Spousal sponsorship guide](/sponsor/spousal-common-law-sponsorship).",
      "**Express Entry and Ontario immigration:** review federal eligibility, CRS factors, work and education evidence, and whether a current Ontario Immigrant Nominee Program stream may fit. [Express Entry](/immigrate/express-entry) · [Ontario PNP (OINP)](/immigrate/ontario-pnp-oinp).",
      "**Study permits and post-graduation work permits:** assess the school, program, study permit conditions and current PGWP requirements before choosing a timeline. [Study permits](/work-and-study/canada-study-permit) · [PGWP guide](/work-and-study/post-graduation-work-permit-pgwp).",
      "**Work permits and employer services:** review the worker's status, permit route and employer requirements, including where an LMIA may be relevant. [Work permit guide](/work-and-study/canada-work-permit-overview) · [LMIA and employer services](/work-and-study/lmia-and-employer-services-overview).",
      "**Visitor visas, refusals and temporary resident permits:** review the decision, evidence and deadlines before considering a new application or another available step. [Visitor visa guide](/visit/visitor-visa-trv-standalone-page) · [Refusal response guide](/inadmissibility-and-appeals/refusal-and-pfl-response).",
    ] },
    { type: "heading", level: 2, text: "Super Visa support for Brampton families" },
    { type: "paragraph", text: "Statistics Canada's [analysis of the 2021 Census](https://www.statcan.gc.ca/o1/en/plus/8470-living-under-one-roof-what-data-say-about-multigenerational-households-canada) found that 14.3% of Brampton households were multigenerational, the highest share among Canadian cities. This is local context, not an eligibility test. Each Super Visa application must meet the current requirements for the host and the parent or grandparent applying." },
    { type: "paragraph", text: "We help families review the invitation, proof of the relationship, the host's minimum necessary income and family size, the applicant's immigration medical exam, and qualifying private health insurance. IRCC currently requires insurance with at least $100,000 in emergency coverage that is valid for at least one year from entry. Since March 31, 2026, hosts may meet the income requirement using either of the two tax years before applying; in some cases, the visiting parent's or grandparent's income can help cover a shortfall if the host and co-signer meet IRCC's minimum percentage. Rules and acceptable insurance policies can change, so use IRCC's current [Super Visa document checklist](https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/forms-documents.html), [host income requirements](https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/forms-documents/host-financial-support.html) and [income calculation update](https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/changes-parents-grandparents-super-visa-income-requirement-calculated.html) when preparing the application." },
    { type: "heading", level: 2, text: "What to check before choosing immigration help" },
    { type: "paragraph", text: "If you pay for immigration advice or representation, verify that the person is authorized through the regulator that applies to them. For an RCIC, search the CICC Public Register and match the name, current eligibility and contact details. Keep a signed copy of the written agreement, fee details, receipts and your application records. Be cautious of anyone who promises a result; immigration decisions are made by the relevant government decision-maker, and no representative can guarantee approval." },
    { type: "heading", level: 2, text: "Meet with us in Brampton or online" },
    { type: "paragraph", text: `Our office is at ${site.address.line1}, Brampton, ON ${site.address.postal}. Free parking is available in front of the building. Office hours are ${site.hours} Please book before visiting.` },
    { type: "paragraph", text: `The first consultation is free, in person or online. Our team can consult in English, Hindi, Punjabi, Marathi, Gujarati, French and Arabic. Tell us your preferred language when booking; official IRCC applications are completed in English or French. Call or WhatsApp [${site.phone}](${site.phoneHref}), email [${site.email}](${site.emailHref}), or [book a free consultation](/contact/book-immigration-consultation-canada).` },
    { type: "heading", level: 2, text: "A clear process from consultation to filing" },
    { type: "list", ordered: true, items: [
      "**Free consultation:** discuss your goal, status, history and any deadline, in person or online.",
      "**Written plan and fees:** if you choose to proceed, review the work included, responsibilities and fees in a written service agreement before signing.",
      "**Document review:** receive a checklist, provide records securely and resolve gaps or inconsistencies before filing.",
      "**Filing and updates:** the team prepares and submits the agreed application and updates you when a response or next step is received.",
    ] },
    { type: "heading", level: 2, text: "Serving Brampton and nearby communities" },
    { type: "paragraph", text: "We work with clients in Bramalea, Springdale, Heart Lake, Mount Pleasant, Castlemore, Sandalwood Heights, Credit Valley, Downtown Brampton and Gore Meadows. Consultations are also available remotely for clients elsewhere in the Greater Toronto Area, across Canada and abroad where the service is within the representative's authorization." },
    { type: "heading", level: 2, text: "Read client reviews" },
    { type: "paragraph", text: `Read the [Google reviews and check the current profile](${site.address.mapsUrl}). Individual reviews describe personal experiences and do not guarantee an immigration outcome.` },
    { type: "heading", level: 2, text: "Important information" },
    { type: "paragraph", text: "Commonwealth Migration Group is not a government agency and is not affiliated with IRCC. This page provides general information, not legal advice for your circumstances. Eligibility, fees and processing times can change; confirm current requirements with IRCC or the relevant province. No immigration outcome is guaranteed." },
  ];

  return {
    path,
    h1: `${location.titleLead} ${location.titlePlace}`,
    location,
    title: isBrampton ? `Immigration Consultant in Brampton, ON | RCIC ${site.rcic.number} | CMG` : `${cityLabel(cityEntry)} | CMG`,
    description: isBrampton
      ? `Meet ${site.rcic.consultant.name}, CICC-licensed RCIC ${site.rcic.number} in Brampton. Super Visa, sponsorship, PR, work and study permits. Free first consultation and free parking.`
      : `Meet with a licensed RCIC serving ${cityEntry.city} by video or phone. Compare ${province.acronym}, Express Entry, permits and sponsorship. Free first consultation.`,
    ...(isBrampton ? {
      metaDescription: `Meet ${site.rcic.consultant.name}, CICC-licensed RCIC ${site.rcic.number} in Brampton. Super Visa, sponsorship, PR, work and study permits. Free first consultation and free parking.`,
      openGraphTitle: "Immigration consultant in Brampton | Commonwealth Migration Group",
      openGraphDescription: "Visit our Brampton office or meet online. Check RCIC credentials, office hours, free parking, consultation languages and immigration services.",
      url: absoluteUrl(path),
    } : {}),
    keywords: isBrampton ? [
      "immigration consultant in Brampton",
      "Brampton immigration services",
      "Super Visa Brampton",
      "spousal sponsorship Brampton",
      "Express Entry and OINP Brampton",
      "study permit and PGWP Brampton",
      "work permit and LMIA services Brampton",
    ] : cityKeywords(cityEntry.city, cityEntry.province, province.acronym),
    priority: cityEntry.slug === "brampton" ? 0.96 : 0.85,
    lastModified: isBrampton ? "2026-11-18" : "2026-11-19",
    contentMode: "authored",
    hero: { lead: detail.heroLead },
    contentBlocks: isBrampton ? bramptonContentBlocks : [
      { type: "heading", level: 2, text: `Immigration services for ${cityEntry.city} residents` },
      { type: "paragraph", text: detail.serviceIntro },
      { type: "table", rows: [["Service", "How we help"], ...SHARED_SERVICES] },
      { type: "heading", level: 2, text: `${cityEntry.province} pathways for ${cityEntry.city} newcomers` },
      { type: "paragraph", text: detail.planningNote },
      localPlanningTable(cityEntry, detail),
      { type: "list", ordered: false, items: province.pathways.map(([label, text]) => `${label}. ${text}`) },
      ...(detail.routeChecks ? [
        { type: "heading", level: 3, text: `Compare Saskatchewan options for your Regina situation` },
        { type: "table", rows: detail.routeChecks },
      ] : []),
      { type: "paragraph", text: detail.routePlanning || `For ${cityEntry.city} residents considering the ${province.acronym}, stream names, criteria, allocations and intake windows can change. We check what is open and which evidence applies to your profile before recommending a route.` },
      { type: "heading", level: 2, text: `Work and study in ${cityEntry.city}` },
      { type: "paragraph", text: workParagraph },
      { type: "heading", level: 2, text: "From first call to filing" },
      { type: "list", ordered: true, items: [
        `Free consultation. We assess your profile and the programs open to a ${cityEntry.city} resident.`,
        "Strategy and agreement. You get a clear plan, scope and fees in writing.",
        "Documents and profile. We build your profile or application and check every document.",
        `Filing and follow-up. We file, track IRCC and ${cityEntry.province} updates and answer any request.`,
      ] },
      { type: "heading", level: 2, text: `Immigration in ${cityEntry.city}: common questions` },
      ...faqs.map((faq) => ({ type: "faq", ...faq })),
      { type: "heading", level: 2, text: "Where we work" },
      { type: "paragraph", text: serviceAreaNote },
      { type: "list", ordered: false, items: relatedCityLinks(cityEntry.slug).slice(0, 8) },
      { type: "heading", level: 2, text: "Useful next steps" },
      { type: "list", ordered: true, items: [
        "Compare Express Entry requirements → /immigrate/express-entry",
        `${province.program} guide → ${province.guide}`,
        "Check your CRS score → /tools/crs-calculator-canada",
        "Book a free Canada immigration assessment → /assessment/free-canada-immigration-assessment",
      ] },
    ],
    jsonLd: [],
  };
}

const PROVINCE_ORDER = ["Ontario", "British Columbia", "Alberta", "Manitoba", "Saskatchewan", "Nova Scotia"];

function locationIndexPage() {
  const rowsForProvince = (province) => CITY_LINKS
    .filter((city) => city.province === province)
    .map((city) => [`[${cityLabel(city)}](${cityPath(city.slug)})`, city.focus]);

  const cityItems = CITY_LINKS.map((city) => `${cityLabel(city)} → ${cityPath(city.slug)}`);
  const itemList = CITY_LINKS.map((city, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: cityLabel(city),
    url: absoluteUrl(cityPath(city.slug)),
  }));

  const groups = PROVINCE_ORDER.map((province) => ({
    province,
    acronym: PROVINCE_PROFILES[province].acronym,
    cities: CITY_LINKS.filter((entry) => entry.province === province)
      .map(({ city, slug }) => ({ city, href: cityPath(slug), office: slug === "brampton" })),
  }));
  return {
    path: LOCATION_PATH,
    location: {
      kind: "directory",
      titleLead: "Immigration consultants",
      titlePlace: "across Canada",
      groups,
      serviceAreaNote: "Choose a city to compare local immigration pathways. Meet our licensed RCIC by video or phone across Canada, or book an appointment at our Brampton office.",
    },
    contentMode: "authored",
    h1: "Immigration consultants across Canada",
    title: "Immigration Consultants Across Canada | CMG",
    description: "Find Commonwealth Migration's city-specific Canadian immigration guidance for Express Entry, PNP, work permits, study permits and family sponsorship across Canada.",
    keywords: [
      "immigration consultants Canada",
      "Canadian immigration consultant by city",
      "licensed RCIC across Canada",
      "Express Entry consultant Canada",
      "PNP consultant Canada",
      "study permit consultant Canada",
    ],
    priority: 0.98,
    lastModified: "2026-11-19",
    hero: { lead: "Commonwealth Migration Group serves clients in every major Canadian city by video, phone and WhatsApp, from our head office in Brampton, Ontario. Choose your city to see the provincial programs and services that apply to you." },
    contentBlocks: [
      { type: "heading", level: 2, text: "Find immigration consultants by city" },
      { type: "paragraph", text: "Immigration rules are federal and provincial, but the practical questions are local: where you work, where you study, which employers are hiring and which province you genuinely plan to call home. Choose a city below for a focused guide to the programs, services and preparation questions that matter there." },
      ...PROVINCE_ORDER.flatMap((province) => [
        { type: "heading", level: 2, text: `${province} immigration consultants` },
        { type: "table", rows: [["City", "Local focus"], ...rowsForProvince(province)] },
      ]),
      { type: "heading", level: 2, text: "How our Canada-wide consultation works" },
      { type: "paragraph", text: "Every consultation starts with the same evidence-led questions: what outcome do you want, where are you now, what status or deadline controls the decision, and which facts can you support with documents? We then compare the federal route with the provincial or family option that actually fits your profile. A city page is a planning guide, not a promise of nomination, approval or processing time." },
      { type: "list", ordered: true, items: [
        "Choose the city and province that match your current work, study or settlement plan.",
        "Review the local pathways and the evidence each one normally depends on.",
        "Use the CRS calculator or free assessment to organise the facts before a consultation.",
        "Confirm current rules with IRCC or the relevant province before paying a fee or filing.",
      ] },
      { type: "heading", level: 2, text: "Immigration consultants across Canada: common questions" },
      { type: "faq", question: "How can I find a licensed immigration consultant near me in Toronto, Brampton, Calgary or another Canadian city?", answer: "Start by checking the representative’s name or licence number in the CICC Public Register and confirm the result matches the person advising you. Commonwealth Migration is based in Brampton and serves clients in the cities listed here remotely; each city guide explains provincial and federal options for its area.", sourceLinks: [{ label: "CICC Public Register", url: "https://register.college-ic.ca/Public-Register-EN/Public-Register-EN/Default.aspx" }, { label: "Government of Canada: authorized representatives", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html" }] },
      { type: "faq", question: "Does Commonwealth Migration have an immigration office in every Canadian city listed, or are consultations remote?", answer: "The CMG office is in Brampton, Ontario. From the other cities listed, book a meeting by video or phone. You can also reach us on WhatsApp to arrange the appointment." },
      { type: "faq", question: "Are Canadian immigration rules different in Brampton, Toronto, Vancouver, Calgary and other cities?", answer: "Federal rules for Express Entry, work permits, study permits and family sponsorship generally apply across Canada, while provincial nominee streams and local labour-market priorities differ by province. Your city can affect which provincial options are relevant, but it does not change the federal eligibility rules." },
      { type: "faq", question: "How should I choose a Canadian city or province for a Provincial Nominee Program (PNP) application?", answer: "Start with where you genuinely plan to live and work, then compare the current province-specific stream criteria, occupation priorities, job-offer rules and any required connection. A past draw or a city page does not create eligibility or replace the province’s official instructions." },
      { type: "faq", question: "What documents should I prepare before a Canada immigration consultation about PR, work or study permits?", answer: "Bring your passport, current status and expiry date, education and language records, work history, family information, funds, prior applications and any refusal or procedural fairness letter. Include the exact response deadline if the matter is time-sensitive." },
      { type: "faq", question: "Can I apply to another province’s PNP while living in a different Canadian city?", answer: "Possibly, if you meet that province’s current stream requirements and genuinely intend to settle there. Compare the province’s official rules, job requirements and settlement factors before choosing a stream; living in a different city does not create eligibility.", sourceLinks: [{ label: "IRCC Provincial Nominee Program overview", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html" }] },
      { type: "faq", question: "Can an RCIC guarantee a Canadian visa, work permit, PNP nomination or permanent residence approval?", answer: "No. A licensed RCIC can assess options, prepare evidence and provide authorized representation, but IRCC, a province or another decision-maker makes the final decision. Program rules, fees, allocations and processing times can change." },
      { type: "faq", question: "How can I compare Canadian immigration consultant fees and service agreements before hiring an RCIC?", answer: "Ask for a written agreement that identifies the application, work included, fee breakdown, payment schedule, extra charges and refund terms. Check that the representative is authorized, keep a signed copy and confirm who will communicate with IRCC or the province.", sourceLinks: [{ label: "Government of Canada: working with an immigration representative", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html" }] },
      { type: "heading", level: 2, text: "Choose your city" },
      { type: "list", ordered: false, items: cityItems },
    ],
    jsonLd: [{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${absoluteUrl(LOCATION_PATH)}#cities`,
      name: "Commonwealth Migration city immigration consultant guides",
      itemListElement: itemList,
    }],
  };
}

export const locationPages = [locationIndexPage(), ...CITY_LINKS.map(locationPage)];

export const locationRoutePaths = locationPages.map((page) => page.path);

export default locationPages;
