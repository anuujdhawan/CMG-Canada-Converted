import { site } from "@/config/site";

const path = "/about/about-commonwealth-migration";
const url = `${site.url.replace(/\/$/, "")}${path}`;
const organizationId = `${site.url.replace(/\/$/, "")}#organization`;
const consultantId = `${site.url.replace(/\/$/, "")}#pankaj-khanna`;
const breadcrumbId = `${url}#bc`;
const dateModified = "2026-11-28";

export const aboutUsFaqs = [
  {
    question: "Who is Commonwealth Migration?",
    answer: "Commonwealth Migration Group Inc. (CMG Canada) is a CICC-regulated Canadian immigration consultancy in Brampton, Ontario. Applications are represented and submitted by Regulated Canadian Immigration Consultant Pankaj Khanna (R711256). We help clients in Canada and worldwide with permanent residence, work permits, study permits, sponsorship and visitor visas.",
  },
  {
    question: "Is Commonwealth Migration a licensed immigration consultant?",
    answer: "Yes. Our files are represented by a Regulated Canadian Immigration Consultant (RCIC) licensed by the College of Immigration and Citizenship Consultants (CICC). You can verify licence R711256 (Pankaj Khanna) on the CICC public register before you pay any fees.",
  },
  {
    question: "Where is Commonwealth Migration located?",
    answer: "Our office is at 2250 Bovaird Dr E, Unit 615, Brampton, ON L6R 0W3. We are open Monday to Saturday, 9:30 a.m. to 6:30 p.m. ET, with free parking in front of the building. Visits are by appointment.",
  },
  {
    question: "What immigration services do you offer?",
    answer: "We handle Express Entry and PNP permanent residence, LMIA and work permits, open and spousal work permits, PGWP, study permits, spousal sponsorship, visitor visas and Super Visas, TRPs, refusal reapplications, procedural fairness responses and refugee claims. Federal Court judicial review is referred to an immigration lawyer.",
  },
  {
    question: "Do you help clients outside Brampton or outside Canada?",
    answer: "Yes. We serve clients in every Canadian province and in other countries through online consultations. The same RCIC handles your file wherever you live, and our professional fee is the same everywhere; only sales tax changes by province.",
  },
  {
    question: "What is an RCIC?",
    answer: "An RCIC is a Regulated Canadian Immigration Consultant: a professional licensed by the CICC to give immigration and citizenship advice and represent clients before IRCC for a fee. RCICs must follow a code of conduct, carry insurance and keep client funds in trust.",
  },
  {
    question: "How much does a Canadian immigration consultant cost?",
    answer: "Fees depend on the application type and complexity. We give you a written quote that shows our professional fee and government fees separately before you sign a service agreement. Contact us for the fee for your specific program.",
  },
  {
    question: "Can you guarantee my visa or PR approval?",
    answer: "No. No licensed consultant or lawyer can guarantee approval. IRCC, a province, the Immigration and Refugee Board or a court makes the decision within its authority. We provide honest advice, prepare your application carefully and represent you where authorized.",
  },
  {
    question: "Do I need an immigration consultant to apply to Canada?",
    answer: "No. You can apply directly with IRCC. Some people choose an RCIC to compare pathways, organize an application or address a complex matter such as a previous refusal or status issue. If you choose paid representation, check that the representative is authorized.",
  },
  {
    question: "My application was refused. Can you help?",
    answer: "Yes. We review your refusal letter and, where possible, your GCMS notes, find the reasons for refusal and advise whether to reapply with stronger evidence or pursue another option. Federal Court judicial reviews are referred to an immigration lawyer.",
  },
  {
    question: "Which languages does your team speak?",
    answer: "Our team serves clients in English, Hindi, Punjabi, Marathi, Gujarati, French and Arabic.",
  },
  {
    question: "How do I book a consultation?",
    answer: "Book online through our contact page, call or WhatsApp +1 942 991 3999, or email info@commonwealthmigration.ca. Consultations are available at our Brampton office or online.",
  },
];

export const aboutUsValues = [
  {
    title: "Honesty first",
    text: "We tell you if you are not eligible, or if a cheaper or faster option exists. We never promise or guarantee approvals, because only the relevant decision-maker decides.",
  },
  {
    title: "Regulated and accountable",
    text: "Licensed RCIC representation, written retainer agreements, client trust accounting and compliance with the CICC Code of Professional Conduct.",
  },
  {
    title: "Transparent fees",
    text: "You see our professional fee and government fees separately before you sign. The professional fee is the same in every province; only sales tax varies.",
  },
  {
    title: "Clear communication",
    text: "A named contact, a secure client portal for documents and status updates at each stage of your file.",
  },
  {
    title: "Accuracy over speed",
    text: "Each file is checked against current IRCC instructions and its document checklist before submission, because errors can cause refusals and delays.",
  },
  {
    title: "Respect for every client",
    text: "Advice in seven languages, with care for families, students and workers at important moments in their lives.",
  },
];

export const aboutUsServices = [
  {
    title: "Permanent residence: Express Entry & PNP",
    text: "CRS score review, Express Entry profile creation, Ontario Immigrant Nominee Program (OINP) and other PNP streams, and the full PR application after an Invitation to Apply.",
    links: [
      ["Express Entry", "/immigrate/express-entry"],
      ["Provincial Nominee Programs", "/immigrate/provincial-nominee-program-all-provinces-consolidated"],
    ],
  },
  {
    title: "Work permits & LMIA",
    text: "Employer LMIA filing, LMIA-based and open work permits, work permit extensions, spousal open work permits, PGWP and vulnerable worker open work permits.",
    links: [
      ["Work permits", "/work-and-study/canada-work-permit-overview"],
      ["LMIA support", "/work-and-study/lmia-and-employer-services-overview"],
    ],
  },
  {
    title: "Study permits",
    text: "Study permit applications and extensions, college and university admission support, and Post-Graduation Work Permit (PGWP) planning after studies.",
    links: [
      ["Study permits", "/work-and-study/canada-study-permit"],
      ["Post-Graduation Work Permit", "/work-and-study/post-graduation-work-permit-pgwp"],
    ],
  },
  {
    title: "Family & spousal sponsorship",
    text: "Spouse, common-law and conjugal partner sponsorship (inland and outland), with relationship evidence prepared to IRCC standards.",
    links: [
      ["Spousal and partner sponsorship", "/sponsor/spousal-and-partner-sponsorship-overview"],
      ["Family sponsorship", "/sponsor/family-sponsorship-overview-all-categories"],
    ],
  },
  {
    title: "Visitor visa & Super Visa",
    text: "Temporary resident visas (TRV), visa stickers, and the Parents and Grandparents Super Visa.",
    links: [
      ["Visitor visas and Super Visa", "/visit/visitor-visa-trv-and-super-visa-combined"],
      ["Super Visa", "/visit/super-visa-standalone-page"],
    ],
  },
  {
    title: "Refusals, TRP & complex cases",
    text: "Reapplications after refusal, responses to procedural fairness letters, temporary resident permits (TRP), restoration of status, inadmissibility concerns, and refugee and asylum claims. Where Federal Court judicial review is needed, we refer you to an immigration lawyer.",
    links: [
      ["Refusals and procedural fairness", "/inadmissibility-and-appeals/refusal-and-pfl-response"],
      ["Temporary resident permits", "/inadmissibility-and-appeals/temporary-resident-permit-trp"],
      ["Inadmissibility", "/inadmissibility-and-appeals/criminal-inadmissibility-overview"],
    ],
  },
  {
    title: "Resume services",
    text: "Canadian-format resumes for job seekers and work permit applicants.",
    links: [["Contact our team", "/contact/book-immigration-consultation-canada"]],
  },
];

export const aboutUsTeam = [
  {
    name: "Pankaj Khanna, RCIC",
    role: "Principal Immigration Consultant · Licence R711256",
    image: "/images/team/pankaj-khanna.webp",
    alt: "Pankaj Khanna, Regulated Canadian Immigration Consultant at Commonwealth Migration in Brampton",
    initials: "PK",
  },
  {
    name: "Vishal Arora, RCIC",
    role: "Principal Consultant · Licence R711592",
    image: "/images/team/vishal-arora.jpeg",
    alt: "Vishal Arora, Regulated Canadian Immigration Consultant at Commonwealth Migration",
    initials: "VA",
  },
  {
    name: "Sushant Shetty",
    role: "Senior Case Specialist",
    initials: "SS",
  },
  {
    name: "Tulika Sharma",
    role: "Operations Manager",
    initials: "TS",
  },
  {
    name: "Misbah Batool",
    role: "Regional Manager · Middle East and UK",
    initials: "MB",
  },
  {
    name: "Manpreet Kaur",
    role: "Client Relations · Brampton",
    initials: "MK",
  },
  {
    name: "Ameesh Khanna",
    role: "Case Processing Officer",
    initials: "AK",
  },
];

export const aboutUsProcess = [
  {
    title: "Consultation",
    text: "The RCIC reviews your profile, eligibility and goals in person in Brampton or online.",
  },
  {
    title: "Strategy and agreement",
    text: "You receive the recommended pathway, timeline, document checklist and a written service agreement with clear fees.",
  },
  {
    title: "Documents and preparation",
    text: "You upload documents to the secure client portal, and the case team checks each one before the RCIC finalises your file.",
  },
  {
    title: "Submission and follow-up",
    text: "We submit your application, track it, answer IRCC requests and keep you updated until a decision is made.",
  },
];

const lead = "Commonwealth Migration Group Inc. (CMG Canada) is a CICC-regulated Canadian immigration consultancy based in Brampton, Ontario. Our files are represented and submitted by a Regulated Canadian Immigration Consultant (RCIC), Pankaj Khanna (licence R711256). We help individuals, families, students, workers and employers in Canada and around the world with permanent residence, work permits, study permits, sponsorship and visitor visas.";

const faqContentBlocks = aboutUsFaqs.flatMap(({ question, answer }) => [
  { type: "paragraph", text: `Q: ${question}` },
  { type: "paragraph", text: `A: ${answer}` },
]);

const contentBlocks = [
  { type: "paragraph", text: lead },
  { type: "list", ordered: false, items: [
    "Licensed RCIC, verifiable on the CICC public register",
    "Office in Brampton, Ontario, with online consultations Canada-wide and worldwide",
    "Same professional fee everywhere; government fees shown separately",
    "Service in English, Hindi, Punjabi, Marathi, Gujarati, French and Arabic",
  ] },
  { type: "heading", level: 2, text: "Who we are" },
  { type: "paragraph", text: "Commonwealth Migration is a Canadian immigration consulting firm incorporated in Ontario as Commonwealth Migration Group Inc. Our tagline, ‘Canada Immigration Simplified’, describes what we do: we take federal and provincial immigration rules, which change often, and turn them into a clear plan, a complete application and regular updates you can follow." },
  { type: "paragraph", text: "We are a regulated practice. Every application we prepare is reviewed, signed and submitted by a licensed RCIC who is a member in good standing of the College of Immigration and Citizenship Consultants (CICC), the federal regulator for immigration consultants in Canada. That means you are protected by the CICC Code of Professional Conduct, a written service agreement and a formal complaints process." },
  { type: "paragraph", text: "Our team has supported immigration clients since 2016. Our case processing, client support and regional teams work with clients in Canada, India, the Middle East and the UK." },
  { type: "heading", level: 2, text: "Our mission" },
  { type: "paragraph", text: "To give every client honest advice about their real chances, the right immigration pathway and an application prepared well enough to be decided on its merits." },
  { type: "heading", level: 2, text: "Our values" },
  ...aboutUsValues.map((value) => ({ type: "paragraph", text: `${value.title}: ${value.text}` })),
  { type: "heading", level: 2, text: "What we do: Canadian immigration services" },
  { type: "paragraph", text: "We advise on, prepare and submit applications to Immigration, Refugees and Citizenship Canada (IRCC), provincial nominee programs and Employment and Social Development Canada (ESDC) for Labour Market Impact Assessments (LMIAs)." },
  ...aboutUsServices.map((service) => ({ type: "paragraph", text: `${service.title}: ${service.text}` })),
  { type: "heading", level: 2, text: "How we work: four steps" },
  { type: "list", ordered: true, items: aboutUsProcess.map((step) => `${step.title}: ${step.text}`) },
  { type: "heading", level: 2, text: "Our team" },
  { type: "paragraph", text: "Your file is handled by a licensed RCIC, supported by a dedicated case and client team. Only licensed RCICs give immigration advice and represent clients before IRCC on our team." },
  ...aboutUsTeam.map((member) => ({ type: "paragraph", text: `${member.name}: ${member.role}.` })),
  { type: "heading", level: 2, text: "About our RCIC: Pankaj Khanna (R711256)" },
  { type: "paragraph", text: "Pankaj Khanna is a Regulated Canadian Immigration Consultant (RCIC) and Principal Immigration Consultant at Commonwealth Migration Group Inc. The CICC public register lists the licence status as ‘Eligible to Provide Service’. Pankaj leads case strategy and represents clients on economic immigration, work and study permits, family sponsorship, and permanent and temporary residence." },
  { type: "heading", level: 2, text: "Our office: immigration consultant in Brampton, Ontario" },
  { type: "paragraph", text: "Commonwealth Migration Group Inc., 2250 Bovaird Dr E, Unit 615, Brampton, ON L6R 0W3, Canada. Call or WhatsApp +1 942 991 3999 or email info@commonwealthmigration.ca. Office hours are Monday to Saturday, 9:30 a.m. to 6:30 p.m. ET; Sunday closed. Visits are by appointment and free parking is available in front of the building." },
  { type: "paragraph", text: "Our Brampton office serves clients from Brampton, Mississauga, Toronto, Caledon, Vaughan and the wider GTA. We also serve clients in every Canadian province and worldwide through online consultations, at the same professional fee. See our Brampton office page and service locations." },
  { type: "heading", level: 2, text: "Frequently asked questions about Commonwealth Migration" },
  ...faqContentBlocks,
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${url}#page`,
      url,
      name: "About Commonwealth Migration Group Inc.",
      description: "Commonwealth Migration Group Inc. is CICC-regulated in Brampton. Meet our licensed RCIC for PR, work and study permits, sponsorship and visitor visas.",
      about: { "@id": organizationId },
      breadcrumb: { "@id": breadcrumbId },
      inLanguage: "en-CA",
      dateModified,
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "About", item: url },
      ],
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": organizationId,
      name: site.name,
      alternateName: [site.tradingName, "CMG Canada"],
      slogan: "Canada Immigration Simplified",
      description: "CICC-regulated Canadian immigration consultancy in Brampton, Ontario, providing permanent residence, work permit, study permit, family sponsorship, visitor visa and citizenship services to clients in Canada and worldwide.",
      url: site.url,
      logo: `${site.url}${site.logos.large}`,
      image: `${site.url}/images/locations/brampton/building-exterior.webp`,
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2250 Bovaird Dr E, Unit 615",
        addressLocality: "Brampton",
        addressRegion: "ON",
        postalCode: "L6R 0W3",
        addressCountry: "CA",
      },
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      }],
      hasMap: site.address.mapsUrl,
      areaServed: [
        { "@type": "Country", name: "Canada" },
        { "@type": "Place", name: "Worldwide (online consultations)" },
      ],
      knowsLanguage: ["en", "hi", "pa", "mr", "gu", "fr", "ar"],
      employee: { "@id": consultantId },
      sameAs: Object.values(site.social).filter(Boolean),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Canadian immigration services",
        itemListElement: aboutUsServices.slice(0, 6).map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.title },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": consultantId,
      name: site.rcic.consultant.name,
      honorificSuffix: "RCIC",
      jobTitle: "Principal Immigration Consultant, RCIC",
      worksFor: { "@id": organizationId },
      image: `${site.url}/images/team/pankaj-khanna.webp`,
      url: site.rcic.profileUrl,
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Regulated Canadian Immigration Consultant (RCIC) licence",
        identifier: site.rcic.number,
        recognizedBy: {
          "@type": "Organization",
          name: site.rcic.regulator,
          url: site.rcic.regulatorUrl,
        },
      },
      knowsAbout: ["Express Entry", "Provincial Nominee Programs", "Work permits", "LMIA", "Study permits", "Family sponsorship", "Temporary resident permits", "Procedural fairness letters"],
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: aboutUsFaqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export const aboutUsPage = {
  path,
  url,
  h1: "About Commonwealth Migration: Licensed Canadian Immigration Consultants in Brampton, Ontario",
  title: "About Commonwealth Migration | Licensed RCIC Consultants in Brampton",
  seoTitle: "About Commonwealth Migration | Licensed RCIC Consultants in Brampton",
  description: "Commonwealth Migration Group Inc. is CICC-regulated in Brampton. Meet our licensed RCIC for PR, work and study permits, sponsorship and visitor visas.",
  metaDescription: "Commonwealth Migration Group Inc. is CICC-regulated in Brampton. Meet our licensed RCIC for PR, work and study permits, sponsorship and visitor visas.",
  keywords: [
    "immigration consultant Brampton",
    "licensed immigration consultant Canada",
    "RCIC Brampton",
    "Canadian immigration consultant",
    "regulated immigration consultant near me",
    "Express Entry consultant",
    "work permit and LMIA consultant",
    "study permit consultant",
    "spousal sponsorship consultant",
    "visitor visa and Super Visa",
    "visa refusal help",
    "immigration consultant Mississauga",
    "immigration consultant GTA",
  ],
  ogImage: "/images/og-about-cmg.jpg",
  priority: 0.85,
  lastModified: dateModified,
  hero: { lead },
  contentBlocks,
  jsonLd: [jsonLd],
};

export default aboutUsPage;
