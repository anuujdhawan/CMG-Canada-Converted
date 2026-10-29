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
    intro: (city) => `Living in ${city} means you can use Ontario's own nomination program alongside the federal system. These are the main streams we review for ${city} clients.`,
    pathways: [
      "Ontario Workforce Priority. The current route covers eligible skilled foreign workers with qualifying job offers and eligible self-employed physicians.",
      "Employer-led steps. For job-offer applicants, the employer starts in Ontario’s portal before the candidate registers an Expression of Interest.",
      "Express Entry option. Some eligible Workforce Priority candidates may request an Express Entry nomination if they also meet federal requirements.",
      "Permanent residence. Ontario nomination is a separate step from IRCC’s final decision on permanent residence.",
    ],
    guide: "/immigrate/ontario-pnp-oinp",
  },
  "British Columbia": {
    acronym: "BC PNP",
    program: "BC Provincial Nominee Program (BC PNP)",
    intro: (city) => `Living in ${city} means you can use British Columbia's own nomination program alongside the federal system. These are the main streams we review for ${city} clients.`,
    pathways: [
      "Skills Immigration. Eligibility and intake steps depend on the selected category; some candidates enter a registration pool before they can be invited.",
      "Express Entry BC. The program guide lists Express Entry BC options for eligible federal candidates; confirm current stream availability before applying.",
      "Entrepreneur Immigration. Business routes use separate eligibility and application requirements from worker pathways.",
      "Selection. BC may target registrations to current provincial priorities, so a score from an earlier invitation round is not a forecast.",
    ],
    guide: "/immigrate/british-columbia-pnp",
  },
  Alberta: {
    acronym: "AAIP",
    program: "Alberta Advantage Immigration Program (AAIP)",
    intro: (city) => `Living in ${city} means you can use Alberta's own nomination program alongside the federal system. These are the main streams we review for ${city} clients.`,
    pathways: [
      "Alberta Opportunity Stream. For eligible temporary foreign workers already working full-time in Alberta with a qualifying Alberta job offer.",
      "Alberta Express Entry. A separate route for eligible federal Express Entry candidates who meet Alberta’s current selection requirements.",
      "Community and sector pathways. Rural Renewal and Tourism and Hospitality routes have their own employer, community and occupation rules.",
      "Worker EOI. Some worker routes use a scored profile and invitations; an EOI is not a nomination application.",
    ],
    guide: "/immigrate/alberta-pnp-aaip",
  },
  Manitoba: {
    acronym: "MPNP",
    program: "Manitoba Provincial Nominee Program (MPNP)",
    intro: (city) => `Living in ${city} means you can use Manitoba's own nomination program alongside the federal system. These are the main streams we review for ${city} clients.`,
    pathways: [
      "Skilled Worker Stream. Manitoba assesses candidates through its in-province and overseas pathways, including the connection or recruitment criteria that fit each route.",
      "International Education Stream. Manitoba graduates may qualify under separate career, internship or student-entrepreneur criteria.",
      "Business Investor Stream. Entrepreneur routes have their own eligibility and submission process.",
      "EOI selection. The MPNP ranks eligible profiles for relevant pathways; an EOI is not a complete application or a promise of invitation.",
    ],
    guide: "/immigrate/manitoba-pnp-mpnp",
  },
  Saskatchewan: {
    acronym: "SINP",
    program: "Saskatchewan Immigrant Nominee Program (SINP)",
    intro: (city) => `Living in ${city} means you can use Saskatchewan's own nomination program alongside the federal system. These are the main streams we review for ${city} clients.`,
    pathways: [
      "International Skilled Worker. Includes different routes for eligible job-offer holders and candidates assessed through occupation or Express Entry criteria.",
      "Saskatchewan Experience. Categories serve eligible workers and graduates already living or working in the province; requirements vary by category.",
      "EOI and occupation rules. Some routes use a ranked profile, and occupation eligibility or licensing requirements can change.",
      "Business pathways. Entrepreneur and farm-related routes have separate criteria and intake status; check current SINP notices before planning an application.",
    ],
    guide: "/immigrate/saskatchewan-pnp-sinp",
  },
  "Nova Scotia": {
    acronym: "NSNP",
    program: "Nova Scotia Nominee Program (NSNP)",
    intro: (city) => `Living in ${city} means you can use Nova Scotia's own nomination program alongside the federal system. These are the main streams we review for ${city} clients.`,
    pathways: [
      "Skilled Worker. Employer-supported cases and several former pathway criteria now sit within this stream’s sub-criteria.",
      "Nova Scotia Graduate. A route for eligible graduates under the stream’s current education and job requirements.",
      "Entrepreneur. A separate business pathway with its own selection and application rules.",
      "Nova Scotia: Express Entry. An Express Entry-linked stream that includes route-specific criteria carried forward from former streams.",
      "Separate federal option. The Atlantic Immigration Program is not an NSNP stream and has its own designated-employer process.",
    ],
    guide: "/immigrate/nova-scotia-pnp-nsnp",
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
    heroLead: "Our head office is at 2250 Bovaird Dr E #615, Brampton, ON L6R 0W3. Brampton's logistics, manufacturing and trucking sectors employ many newcomers and temporary workers. Commonwealth Migration Group helps individuals and families in Brampton with Express Entry, OINP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We help Brampton residents move from visitor, student or work permits to permanent residence, and we support families with spousal sponsorship, parent and grandparent applications and Super Visas.",
    sectors: ["Logistics and warehousing", "Manufacturing", "Trucking and transportation", "Healthcare and retail"],
    studyOptions: "Sheridan College, Algoma University (Brampton campus) and nearby Humber and Seneca campuses",
    serviceAreaNote: "Visit our head office in Brampton or meet us online. The team works with clients in the city, across the Greater Toronto Area, throughout Canada and from abroad where the requested service is within the representative's authorization.",
  },
  calgary: {
    heroLead: "Calgary combines an established energy sector with a growing technology and logistics base, and Alberta runs its own nominee program with several pathways for workers already in the province. Commonwealth Migration Group helps individuals and families in Calgary with Express Entry, AAIP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We assess your eligibility for the Alberta Opportunity Stream, the Alberta Express Entry Pathway and the health care pathway, and we compare them with the federal Express Entry route.",
    sectors: ["Energy and engineering", "Technology and fintech", "Construction and skilled trades", "Healthcare and logistics"],
    studyOptions: "University of Calgary, Mount Royal University and SAIT",
  },
  edmonton: {
    heroLead: "Edmonton is Alberta's capital and a major hub for healthcare, construction, energy services and research. Many newcomers here work in trades and health roles that the province prioritises. Commonwealth Migration Group helps individuals and families in Edmonton with Express Entry, AAIP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We help Edmonton clients use the AAIP and Express Entry together, advise on work permit options and prepare applications for workers, graduates and families.",
    sectors: ["Healthcare and research", "Construction and skilled trades", "Energy, petrochemicals and manufacturing", "Government and education"],
    studyOptions: "University of Alberta, NAIT, MacEwan University and Concordia University of Edmonton",
  },
  halifax: {
    heroLead: "Halifax is the largest city in Atlantic Canada, with ocean industries, healthcare and universities driving growth. Nova Scotia and the Atlantic Immigration Program both offer routes for workers with local ties or employer support. Commonwealth Migration Group helps individuals and families in Halifax with Express Entry, NSNP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We assess whether the Nova Scotia Nominee Program, Express Entry or the Atlantic Immigration Program fits your profile best, and prepare the employer and applicant documents.",
    sectors: ["Ocean technology and shipbuilding", "Healthcare and life sciences", "Defence and public sector", "Education and technology"],
    studyOptions: "Dalhousie University, Saint Mary's University and Nova Scotia Community College",
  },
  hamilton: {
    heroLead: "Hamilton combines a large healthcare and research sector with a long industrial base, and it is more affordable than neighbouring Toronto. That attracts students, tradespeople and health workers. Commonwealth Migration Group helps individuals and families in Hamilton with Express Entry, OINP nominations, study and work permits and family sponsorship.",
    serviceIntro: "Our team helps Hamilton graduates and workers compare Express Entry with OINP streams such as Skilled Trades and the graduate streams, and prepares complete applications.",
    sectors: ["Healthcare and life sciences", "Steel and advanced manufacturing", "Education", "Skilled trades"],
    studyOptions: "McMaster University and Mohawk College",
  },
  kelowna: {
    heroLead: "Kelowna sits in the Okanagan, where agriculture, tourism and construction drive hiring. Many newcomers come on work permits tied to local employers. Commonwealth Migration Group helps individuals and families in Kelowna with Express Entry, BC PNP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We help workers and employers in the Okanagan with work permit extensions and BC PNP nominations, and explain which options suit your occupation and employer.",
    sectors: ["Agriculture, wine and food processing", "Tourism and hospitality", "Construction and trades", "Technology and healthcare"],
    studyOptions: "UBC Okanagan and Okanagan College",
  },
  "kitchener-waterloo": {
    heroLead: "The Waterloo Region is one of Canada's strongest technology hubs, with a steady flow of students, engineers and software workers. Many arrive as students or on work permits and want to stay. Commonwealth Migration Group helps individuals and families in Kitchener-Waterloo with Express Entry, OINP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We help tech workers and graduates choose between Express Entry and Ontario's Human Capital and graduate streams, and we advise on timing so permits do not lapse before a decision.",
    sectors: ["Software and technology", "Advanced manufacturing", "Insurance", "Startups and research"],
    studyOptions: "University of Waterloo, Wilfrid Laurier University and Conestoga College",
  },
  london: {
    heroLead: "London is a university and healthcare city in southwestern Ontario with a growing manufacturing and agri-food base. International students at Western and Fanshawe form a large part of its newcomer community. Commonwealth Migration Group helps individuals and families in London with Express Entry, OINP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We guide students through study permit extensions, post-graduation work permits and the move to permanent residence, and we help employers and workers with job-offer-based routes.",
    sectors: ["Healthcare and education", "Manufacturing and agri-food", "Insurance and financial services", "Skilled trades"],
    studyOptions: "Western University and Fanshawe College",
  },
  mississauga: {
    heroLead: "Mississauga sits beside Pearson Airport and hosts many corporate offices, logistics firms and manufacturers. Newcomers here often arrive on work permits or study permits and look for a way to settle permanently. Commonwealth Migration Group helps individuals and families in Mississauga with Express Entry, OINP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We assess your Express Entry score and OINP options, advise on work permit extensions and post-graduation work permits, and help families apply together.",
    sectors: ["Aviation and logistics", "Finance and corporate head offices", "Pharmaceuticals and manufacturing", "Information technology"],
    studyOptions: "University of Toronto Mississauga, Sheridan College and Humber College",
  },
  ottawa: {
    heroLead: "Ottawa's economy rests on government, technology and research, and bilingual ability gives candidates a real edge. Many applicants here study at local universities and want to transition to permanent status. Commonwealth Migration Group helps individuals and families in Ottawa with Express Entry, OINP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We help you plan your path from study permit to post-graduation work permit to permanent residence, and we explain how French language results can raise your Express Entry score.",
    sectors: ["Federal public service and defence", "Technology and telecommunications", "Healthcare", "Education and research"],
    studyOptions: "Carleton University, University of Ottawa, Algonquin College and La Cité",
  },
  regina: {
    heroLead: "Regina is Saskatchewan's capital, with a steady public sector, healthcare system and industrial base. Newcomers here often move from a work permit to permanent residence through the provincial program. Commonwealth Migration Group helps individuals and families in Regina with Express Entry, SINP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We guide Regina workers and graduates through SINP applications, work permit renewals and Express Entry, and we help families apply together.",
    sectors: ["Provincial government", "Healthcare", "Agriculture and manufacturing", "Energy and construction"],
    studyOptions: "University of Regina and Saskatchewan Polytechnic",
  },
  saskatoon: {
    heroLead: "Saskatoon's economy is anchored in agriculture, mining and a growing technology sector. Saskatchewan's nominee program has dedicated routes for workers already employed in the province. Commonwealth Migration Group helps individuals and families in Saskatoon with Express Entry, SINP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We assess your eligibility for the SINP International Skilled Worker and Saskatchewan Experience categories and help you choose the sub-category that fits your occupation.",
    sectors: ["Agriculture and agri-tech", "Mining and potash", "Healthcare", "Construction and trades"],
    studyOptions: "University of Saskatchewan and Saskatchewan Polytechnic",
  },
  surrey: {
    heroLead: "Surrey is one of B.C.'s fastest growing cities and has a large, established newcomer community. Construction, transport and healthcare employ many workers on temporary permits. Commonwealth Migration Group helps individuals and families in Surrey with Express Entry, BC PNP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We help Surrey workers and graduates plan their route to permanent residence through BC PNP Skills Immigration, Express Entry BC and federal programs, and we support families with sponsorship.",
    sectors: ["Construction and skilled trades", "Trucking and logistics", "Healthcare", "Retail and services"],
    studyOptions: "Simon Fraser University (Surrey), Kwantlen Polytechnic University and Douglas College",
  },
  toronto: {
    heroLead: "Toronto is Canada's largest labour market and the first stop for a large share of newcomers. Competition for jobs and housing is high, which makes a clear immigration plan more important than anywhere else. Commonwealth Migration Group helps individuals and families in Toronto with Express Entry, OINP nominations, study and work permits and family sponsorship.",
    serviceIntro: "Many Toronto clients are international students, workers on employer-specific permits and Express Entry candidates who need to raise their points. We help you choose between the federal Express Entry route and an OINP nomination, and we prepare the file so it is complete the first time.",
    sectors: ["Finance and fintech", "Technology and AI", "Healthcare", "Skilled trades and construction"],
    studyOptions: "University of Toronto, Toronto Metropolitan University, York University, Seneca and George Brown",
  },
  vancouver: {
    heroLead: "Vancouver is a gateway to the Pacific, with a strong technology, film and port economy. Living costs are high, so newcomers benefit from a plan that uses the province's own nomination program. Commonwealth Migration Group helps individuals and families in Vancouver with Express Entry, BC PNP nominations, study and work permits and family sponsorship.",
    serviceIntro: "The BC PNP scores candidates on a points system and runs targeted invitation rounds. We assess where your profile sits, help you build the right registration and prepare your application for BC and for IRCC.",
    sectors: ["Technology and software", "Film and digital media", "Trade, ports and logistics", "Healthcare"],
    studyOptions: "University of British Columbia, Simon Fraser University, BCIT and Langara College",
  },
  victoria: {
    heroLead: "Victoria is B.C.'s capital, with a stable public sector, a growing technology scene and a large tourism and hospitality workforce. Students at UVic and Camosun often want to stay after graduating. Commonwealth Migration Group helps individuals and families in Victoria with Express Entry, BC PNP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We advise on post-graduation work permits and the BC PNP International Graduate and Skills Immigration streams, and we prepare complete files for nomination and permanent residence.",
    sectors: ["Provincial government and public service", "Technology and ocean sciences", "Tourism and hospitality", "Healthcare and education"],
    studyOptions: "University of Victoria and Camosun College",
  },
  windsor: {
    heroLead: "Windsor sits across from Detroit and its economy follows the automotive and cross-border trade sectors. Its colleges and university draw many international students. Commonwealth Migration Group helps individuals and families in Windsor with Express Entry, OINP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We support Windsor students and workers with post-graduation work permits, employer-supported applications and OINP streams for skilled trades and job offers.",
    sectors: ["Automotive manufacturing", "Cross-border logistics", "Healthcare", "Skilled trades"],
    studyOptions: "University of Windsor and St. Clair College",
  },
  winnipeg: {
    heroLead: "Winnipeg's manufacturing, transport and healthcare sectors hire newcomers steadily, and Manitoba's nominee program values connection to the province. Living costs are lower than in larger cities. Commonwealth Migration Group helps individuals and families in Winnipeg with Express Entry, MPNP nominations, study and work permits and family sponsorship.",
    serviceIntro: "We help clients work out whether they qualify for Skilled Worker in Manitoba, Skilled Worker Overseas or the International Education Stream, and we prepare the full application.",
    sectors: ["Manufacturing and agri-food", "Trucking and transportation", "Healthcare", "Aerospace and technology"],
    studyOptions: "University of Manitoba, University of Winnipeg and Red River College Polytechnic",
  },
};

function cityPath(slug) {
  return `${LOCATION_PATH}/${slug}`;
}

function cityLabel(city) {
  return `Immigration consultants in ${city}`;
}

function cityKeywords(city, province, acronym) {
  return [
    `immigration consultants in ${city}`,
    `immigration consultant ${city}`,
    `Canada immigration consultant ${city}`,
    `licensed RCIC ${city}`,
    `${province} immigration consultant`,
    `${acronym} consultant ${city}`,
    `Express Entry consultant ${city}`,
    `study permit consultant ${city}`,
  ];
}

function cityFaqs(city, province, acronym) {
  const provinceUrls = {
    Ontario: "https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp",
    "British Columbia": "https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program",
    Alberta: "https://www.alberta.ca/aaip",
    Manitoba: "https://immigratemanitoba.com/immigrate-to-manitoba/",
    Saskatchewan: "https://www.saskatchewan.ca/sinp",
    "Nova Scotia": "https://liveinnovascotia.com/skilled-worker",
  };
  const repGuide = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html";
  const ciccRegister = "https://register.college-ic.ca/Public-Register-EN/Public-Register-EN/Default.aspx";
  const pnpUrl = provinceUrls[province];
  const source = (label, url) => ({ label, url });
  return [
    {
      question: `How do I find a licensed immigration consultant in ${city} for a Canada PR or visa application?`,
      answer: `Hiring a representative is optional. If you choose paid help, confirm the person is authorized, ask for a written agreement that identifies the work and fees, and keep control of your IRCC account and documents. Commonwealth Migration serves ${city} clients remotely by scheduled video, phone and WhatsApp appointments.`,
      sourceLinks: [source("Government of Canada: choose an authorized representative", repGuide)],
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
      question: `How much does an immigration consultant in ${city} charge for Express Entry or a Canada PR application?`,
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

function locationSchema(city, province, path) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${absoluteUrl(path)}#professional-service`,
    name: `${site.name} - ${cityLabel(city)}`,
    url: absoluteUrl(path),
    parentOrganization: { "@id": `${site.url}#organization` },
    telephone: site.phone,
    email: site.email,
    serviceType: "Canadian immigration consulting",
    areaServed: [
      { "@type": "City", name: city },
      { "@type": "AdministrativeArea", name: province },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Brampton",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    availableLanguage: "English",
  };
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
  const faqs = cityFaqs(cityEntry.city, cityEntry.province, province.acronym);
  const workParagraph = `Sectors that regularly hire in and around ${cityEntry.city} include ${detail.sectors.join(", ")}. Study options include ${detail.studyOptions}. If you study here, we plan your post-graduation work permit and your path to permanent residence before your permit runs out.`;
  const serviceAreaNote = detail.serviceAreaNote || `We serve ${cityEntry.city} clients online from our Brampton, Ontario office. Meetings happen by video call, phone and WhatsApp. Commonwealth Migration Group Inc. is based at 2250 Bovaird Dr E #615, Brampton, ON L6R 0W3.`;

  return {
    path,
    h1: cityLabel(cityEntry.city),
    title: `${cityLabel(cityEntry.city)} | CMG`,
    description: `Commonwealth Migration offers licensed RCIC guidance for ${cityEntry.city}: ${province.acronym}, Express Entry, work and study permits, family sponsorship and settlement planning.`,
    keywords: cityKeywords(cityEntry.city, cityEntry.province, province.acronym),
    priority: cityEntry.slug === "brampton" ? 0.96 : 0.85,
    lastModified: "2026-10-18",
    hero: { lead: detail.heroLead },
    contentBlocks: [
      { type: "heading", level: 2, text: `Immigration services for ${cityEntry.city} residents` },
      { type: "paragraph", text: detail.serviceIntro },
      { type: "table", rows: [["Service", "How we help"], ...SHARED_SERVICES] },
      { type: "heading", level: 2, text: `${cityEntry.province} pathways for ${cityEntry.city} newcomers` },
      { type: "paragraph", text: province.intro(cityEntry.city) },
      localPlanningTable(cityEntry, detail),
      { type: "list", ordered: false, items: province.pathways },
      { type: "paragraph", text: `For ${cityEntry.city} residents considering the ${province.acronym}, stream names, criteria, allocations and intake windows can change. We check what is open and which evidence applies to your profile before recommending a route.` },
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
    jsonLd: [locationSchema(cityEntry.city, cityEntry.province, path)],
  };
}

const PROVINCE_ORDER = ["Ontario", "British Columbia", "Alberta", "Manitoba", "Saskatchewan", "Nova Scotia"];

function locationIndexPage() {
  const rowsForProvince = (province) => CITY_LINKS
    .filter((city) => city.province === province)
    .map((city) => [`[${cityLabel(city.city)}](${cityPath(city.slug)})`, city.focus]);

  const cityItems = CITY_LINKS.map((city) => `${cityLabel(city.city)} → ${cityPath(city.slug)}`);
  const itemList = CITY_LINKS.map((city, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: cityLabel(city.city),
    url: absoluteUrl(cityPath(city.slug)),
  }));

  return {
    path: LOCATION_PATH,
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
    lastModified: "2026-10-18",
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
      { type: "faq", question: "How can I find a licensed immigration consultant near me in Toronto, Brampton, Calgary or another Canadian city?", answer: "Start by checking the representative’s name or licence number in the CICC Public Register and confirm the result matches the person advising you. Commonwealth Migration is based in Brampton and serves clients in the cities listed here remotely; the city guides explain local pathway context, not separate office locations.", sourceLinks: [{ label: "CICC Public Register", url: "https://register.college-ic.ca/Public-Register-EN/Public-Register-EN/Default.aspx" }, { label: "Government of Canada: authorized representatives", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html" }] },
      { type: "faq", question: "Does Commonwealth Migration have an immigration office in every Canadian city listed, or are consultations remote?", answer: "Commonwealth Migration Group is based in Brampton, Ontario. Clients in the other listed cities can arrange consultations by video, phone or WhatsApp; the city pages do not imply that CMG has a separate office in each location." },
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
