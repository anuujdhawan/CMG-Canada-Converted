import { site } from "@/config/site";

const aboutPath = "/about/about-commonwealth-migration";
const aboutRoot = `${site.url.replace(/\/$/, "")}${aboutPath}`;
const officialRepresentativeGuide = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose/authorized.html";
const ciccRegister = "https://register.college-ic.ca/Public-Register-EN/Public-Register-EN/Default.aspx";

const faq = (question, answer) => [
  { type: "paragraph", text: `Q: ${question}` },
  { type: "paragraph", text: `A: ${answer}` },
];

const breadcrumbs = (name, path) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    ...(path === aboutPath ? [] : [{ "@type": "ListItem", position: 2, name: "About", item: aboutRoot }]),
    { "@type": "ListItem", position: path === aboutPath ? 2 : 3, name, item: `${site.url.replace(/\/$/, "")}${path}` },
  ],
});

const webPage = (name, description, path, extra = {}) => ({
  "@type": "WebPage",
  name,
  description,
  url: `${site.url.replace(/\/$/, "")}${path}`,
  isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
  about: { "@type": "ProfessionalService", name: site.name, areaServed: "Canada" },
  ...extra,
});

const faqPage = (items) => ({
  "@type": "FAQPage",
  mainEntity: items.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
});

const aboutFaqs = [
  ["What does Commonwealth Migration do?", "Commonwealth Migration provides Canadian immigration guidance for permanent residence, temporary residence, family sponsorship, employer programs, citizenship, and complex refusal or appeal matters."],
  ["Are Commonwealth Migration consultants licensed?", "Commonwealth Migration is a CICC-regulated practice. Verify the current licence status and contact details for the representative you engage on the CICC Public Register before paying for immigration advice."],
  ["Does Commonwealth Migration guarantee a visa or permanent residence result?", "No. Immigration decisions are made by the relevant Canadian authority. The team provides professional assessment, preparation and representation where authorized, but no consultant can guarantee an outcome."],
];

const processFaqs = [
  ["What happens during an immigration consultation?", "The consultation connects your goal, status, history, documents and deadline to possible Canadian immigration pathways and a practical next-step plan."],
  ["What documents should I bring to an immigration consultation?", "Bring your passport or identity details, current status documents, education and language records, work history, family information, prior applications and any refusal or procedural fairness letter."],
  ["Can an immigration consultant guarantee approval?", "No. An immigration consultant can improve preparation and explain strategy, but IRCC, a province, the IRB or the Federal Court makes the relevant decision."],
];

const officeFaqs = [
  ["Where is Commonwealth Migration located?", "Commonwealth Migration serves clients from its Brampton, Ontario office and works with clients across Canada and internationally by scheduled phone or video consultation."],
  ["Do I need to visit the Brampton office?", "No. Many consultations and file updates can be completed remotely. Contact the office to confirm the best format for your matter and whether an in-person appointment is available."],
  ["How can I contact the Brampton immigration office?", `You can contact Commonwealth Migration by email at ${site.email}, by phone at ${site.phone}, or through the consultation link on this website.`],
];

export const aboutPages = [
  {
    path: "/about/about-commonwealth-migration",
    h1: "About Commonwealth Migration",
    title: "About Commonwealth Migration | Licensed RCICs in Brampton",
    description: "Learn about Commonwealth Migration, a CICC-regulated immigration consultancy in Brampton helping individuals, families and employers navigate Canadian immigration.",
    priority: 0.85,
    hero: {
      lead: "Commonwealth Migration is a CICC-regulated Canadian immigration consultancy in Brampton, Ontario. We help individuals, families and employers understand their options, prepare stronger applications and make the next immigration decision with more clarity.",
    },
    contentBlocks: [
      { type: "paragraph", text: "Commonwealth Migration is a Canadian immigration consultancy based in Brampton, Ontario, serving clients across Canada and internationally. Our work covers permanent residence, temporary residence, family sponsorship, employer immigration, citizenship, inadmissibility and refusal-related matters." },
      { type: "table", rows: [["CICC-regulated practice", "Brampton, Ontario", "Canada-wide service", `RCIC ${site.rcic.number}`]] },
      { type: "heading", level: 2, text: "Who is Commonwealth Migration?" },
      { type: "paragraph", text: "We are a focused immigration practice for people who want a clear explanation of the route before they invest time, money and personal information in an application. The team looks at the full context — your goal, status, work and education history, family circumstances, admissibility, documents and deadlines — rather than treating one form or score as the whole case." },
      { type: "heading", level: 2, text: "What does a CICC-regulated immigration consultant do?" },
      { type: "paragraph", text: "A Regulated Canadian Immigration Consultant can provide immigration advice and services within the scope permitted by their licence. That may include pathway assessment, application strategy, document review, form preparation, submission support, communication and representation where authorized. The Government of Canada advises people to check that a paid representative is authorized, and the CICC Public Register lets the public verify a consultant's status and contact details." },
      { type: "list", ordered: false, items: [
        `[Verify the representative and licence status on the CICC Public Register](${ciccRegister})`,
        `[Read the Government of Canada's guidance on authorized representatives](${officialRepresentativeGuide})`,
        "Ask what the engagement includes, who owns each next step and how changes in the rules will be handled.",
        "Expect a fact-specific review and a clear explanation of uncertainty; no professional can guarantee an immigration decision.",
      ] },
      { type: "heading", level: 2, text: "Which Canadian immigration matters do we handle?" },
      { type: "table", rows: [
        ["Client goal", "Common areas of support"],
        ["Permanent residence", "Express Entry, Provincial Nominee Programs, Atlantic and other economic pathways"],
        ["Work and study", "Work permits, LMIA and employer programs, study permits and post-study planning"],
        ["Family and citizenship", "Spousal and family sponsorship, parents and grandparents, citizenship and PR documents"],
        ["Complex matters", "Refusals, procedural fairness responses, inadmissibility and appeal or review strategy"],
      ] },
      { type: "heading", level: 2, text: "How do we approach immigration advice?" },
      { type: "paragraph", text: "Good immigration advice is not just a list of programs. It is a reasoned connection between the facts in a file, the legal or program requirements, the available evidence and the decision that must be made next. Our approach is designed to make those connections visible so you know what is ready, what is missing and what should be verified against the current official instructions." },
      { type: "heading", level: 2, text: "Frequently Asked Questions" },
      ...aboutFaqs.flatMap(([question, answer]) => faq(question, answer)),
      { type: "heading", level: 2, text: "Explore Commonwealth Migration" },
      { type: "list", ordered: true, items: [
        "Our Canada Immigration Consulting Process → /about/canada-immigration-consulting-process",
        "Our Brampton Immigration Office → /about/immigration-office-brampton-ontario",
        "Meet the Licensed RCIC Team → /about/licensed-rcic-team-canada",
        "Book an Immigration Consultation → /contact/book-immigration-consultation-canada",
      ] },
    ],
    jsonLd: [
      webPage("About Commonwealth Migration", "Learn about Commonwealth Migration, a CICC-regulated immigration consultancy in Brampton helping individuals, families and employers navigate Canadian immigration.", "/about/about-commonwealth-migration", { "@type": "AboutPage", breadcrumb: breadcrumbs("About Commonwealth Migration", "/about/about-commonwealth-migration") }),
      faqPage(aboutFaqs),
    ],
  },
  {
    path: "/about/canada-immigration-consulting-process",
    h1: "Our Canada Immigration Consulting Process",
    title: "Canada Immigration Consulting Process | Commonwealth Migration",
    description: "See how our licensed RCIC team assesses your profile, builds an evidence-led Canada immigration plan, prepares the application and tracks the next decision.",
    keywords: ["Canada immigration consulting process", "immigration consultation process", "licensed RCIC application help", "Canadian immigration application preparation"],
    priority: 0.82,
    hero: {
      lead: "Our Canada immigration consulting process turns a broad goal into a practical plan: diagnose the facts, build the evidence, protect deadlines and decide the next move with a licensed RCIC team.",
    },
    contentBlocks: [
      { type: "paragraph", text: "The Canada immigration consulting process is a structured review of your goal, eligibility, history, evidence and timing. At Commonwealth Migration, each stage is designed to answer one practical question: what does the decision-maker need to see, and what should happen next?" },
      { type: "table", rows: [["01 Diagnose", "02 Build", "03 Protect", "04 Decide"]] },
      { type: "heading", level: 2, text: "What happens in an immigration consultation?" },
      { type: "paragraph", text: "An immigration consultation starts with your objective and the facts that can change the route: where you are, your current status, family structure, work and education history, language results, previous applications, admissibility and deadlines. The outcome is not a promise of approval. It is a clearer view of possible pathways, missing information, risks and the most useful next step." },
      { type: "heading", level: 2, text: "How does the application preparation process work?" },
      { type: "list", ordered: true, items: [
        "Diagnose the profile: clarify the goal, constraints, history and decision that needs to be made.",
        "Choose the route: compare the relevant federal, provincial, family, work, study or review options against the current official criteria.",
        "Build the record: organise forms, identity documents, civil records, education, employment, funds and explanations into a consistent evidence set.",
        "Quality-check the submission: review completeness, consistency, translations, signatures, fees and pathway-specific requirements before filing.",
        "Protect the timeline: record requests, biometrics, medical or document deadlines and ownership for every follow-up.",
        "Decide the response: respond to a request, prepare for the next stage, or reassess the strategy when new facts or a decision changes the file.",
      ] },
      { type: "heading", level: 2, text: "How do you handle refusals and procedural fairness letters?" },
      { type: "paragraph", text: "A refusal or procedural fairness letter is a decision signal that needs to be read closely. We identify the concern, test it against the application record, determine what evidence or explanation is available, and then consider the appropriate response — such as a reapplication, procedural fairness response, reconsideration request, appeal or court-related referral where that route is available and appropriate. Deadlines are treated as hard boundaries, not reminders for later." },
      { type: "heading", level: 2, text: "What should I prepare before meeting an immigration consultant?" },
      { type: "list", ordered: false, items: [
        "Your main goal and preferred timing, even if you are not sure which program fits.",
        "Passport, current immigration status and any prior Canadian application or refusal information.",
        "A simple timeline of education, work, travel, addresses and family changes.",
        "Language test, education assessment, employment, funds or relationship evidence that you already have.",
        "Any letter with a response deadline, including a refusal, procedural fairness letter or document request.",
      ] },
      { type: "heading", level: 2, text: "Frequently Asked Questions" },
      ...processFaqs.flatMap(([question, answer]) => faq(question, answer)),
      { type: "heading", level: 2, text: "Continue your planning" },
      { type: "list", ordered: true, items: [
        "About Commonwealth Migration → /about/about-commonwealth-migration",
        "Our Brampton Immigration Office → /about/immigration-office-brampton-ontario",
        "Free Canada Immigration Assessment → /assessment/free-canada-immigration-assessment",
        "Book an Immigration Consultation → /contact/book-immigration-consultation-canada",
      ] },
    ],
    jsonLd: [
      webPage("Our Canada Immigration Consulting Process", "See how our licensed RCIC team assesses your profile, builds an evidence-led Canada immigration plan, prepares the application and tracks the next decision.", "/about/canada-immigration-consulting-process", { breadcrumb: breadcrumbs("Our Canada Immigration Consulting Process", "/about/canada-immigration-consulting-process") }),
      {
        "@type": "HowTo",
        name: "How the Canada immigration consulting process works",
        description: "The four-stage process Commonwealth Migration uses to turn an immigration goal into a practical plan.",
        step: [
          { "@type": "HowToStep", position: 1, name: "Diagnose the profile", text: "Clarify the goal, constraints, history and decision that needs to be made." },
          { "@type": "HowToStep", position: 2, name: "Build the record", text: "Organise forms, documents and explanations into a consistent evidence set." },
          { "@type": "HowToStep", position: 3, name: "Protect the timeline", text: "Track requests, deadlines and ownership for every follow-up." },
          { "@type": "HowToStep", position: 4, name: "Decide the next move", text: "Respond, continue, reassess or review the strategy as the file develops." },
        ],
      },
      faqPage(processFaqs),
    ],
  },
  {
    path: "/about/immigration-office-brampton-ontario",
    h1: "Our Brampton Immigration Office",
    title: "Immigration Office in Brampton, Ontario | Commonwealth Migration",
    description: "Find Commonwealth Migration's Brampton, Ontario immigration office, contact details, appointment options and Canada-wide service information.",
    keywords: ["immigration office Brampton", "immigration consultant Brampton Ontario", "Brampton RCIC office", "Canada immigration consultant office"],
    priority: 0.8,
    hero: {
      lead: "Commonwealth Migration is a Brampton, Ontario immigration consultancy serving clients across Canada and internationally. Arrange an appointment by phone, email or online consultation and we will confirm the best way to discuss your matter.",
    },
    contentBlocks: [
      { type: "paragraph", text: "Our Brampton immigration office is the Canadian base for Commonwealth Migration. The team works with people in Brampton, the Greater Toronto Area, other parts of Canada and clients abroad who need a licensed RCIC-led review of a Canadian immigration matter." },
      { type: "table", rows: [
        ["Office", "Commonwealth Migration Canada"],
        ["Location", "Brampton, Ontario, Canada"],
        ["Service area", "Canada-wide and international clients"],
        ["Appointments", "Scheduled in-person, phone or video consultation"],
        ["Email", site.email],
        ["Phone", site.phone],
        ["Hours", site.hours],
      ] },
      { type: "heading", level: 2, text: "Where is our immigration office in Brampton?" },
      { type: "paragraph", text: `Commonwealth Migration is based in Brampton, Ontario. The current office contact details are ${site.address.full || "Brampton, Ontario, Canada"}. Because appointments and service arrangements can change, contact the team before travelling so we can confirm availability and the right meeting format for your matter.` },
      { type: "heading", level: 2, text: "Do we serve clients outside Brampton?" },
      { type: "paragraph", text: "Yes. An immigration matter does not need to be local to receive a careful review. Clients can begin remotely, share documents through the agreed secure channel and meet by phone or video. The Brampton office also works with clients applying from outside Canada, subject to the scope of the requested service and the representative's authorization." },
      { type: "heading", level: 2, text: "What can you discuss with the Brampton office?" },
      { type: "list", ordered: false, items: [
        "Permanent residence planning through Express Entry, PNP and other economic pathways.",
        "Work permits, LMIA and employer immigration programs, study permits and family sponsorship.",
        "Citizenship, PR cards, visitor matters, inadmissibility, refusals and procedural fairness responses.",
        "Which records to gather before a full application review and which official source to verify next.",
      ] },
      { type: "heading", level: 2, text: "How do I book an appointment?" },
      { type: "paragraph", text: "Use the consultation link to share your goal and preferred timing. You can also contact the office directly using the email or phone details above. For urgent matters, include the exact response deadline in your first message so the team can understand the timing before discussing availability." },
      { type: "heading", level: 2, text: "Frequently Asked Questions" },
      ...officeFaqs.flatMap(([question, answer]) => faq(question, answer)),
      { type: "heading", level: 2, text: "Useful next steps" },
      { type: "list", ordered: true, items: [
        "About Commonwealth Migration → /about/about-commonwealth-migration",
        "Our Canada Immigration Consulting Process → /about/canada-immigration-consulting-process",
        "Contact the Brampton Immigration Office → /contact/contact-immigration-consultant-brampton",
        "Book an Immigration Consultation → /contact/book-immigration-consultation-canada",
      ] },
    ],
    jsonLd: [
      webPage("Our Brampton Immigration Office", "Find Commonwealth Migration's Brampton, Ontario immigration office, contact details, appointment options and Canada-wide service information.", "/about/immigration-office-brampton-ontario", { breadcrumb: breadcrumbs("Our Brampton Immigration Office", "/about/immigration-office-brampton-ontario") }),
      {
        "@type": "ProfessionalService",
        name: site.name,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.line1,
          addressLocality: site.address.city,
          addressRegion: site.address.region || "ON",
          postalCode: site.address.postal || undefined,
          addressCountry: "CA",
        },
        areaServed: ["Brampton", "Ontario", "Canada"],
      },
      faqPage(officeFaqs),
    ],
  },
];

export default aboutPages;
