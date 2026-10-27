import { site } from "@/config/site";

const aboutPath = "/about/about-commonwealth-migration";
const aboutRoot = `${site.url.replace(/\/$/, "")}${aboutPath}`;
const bramptonOfficePath = "/about/immigration-office-brampton-ontario";
const bramptonOfficeUrl = `${site.url.replace(/\/$/, "")}${bramptonOfficePath}`;
const officialRepresentativeGuide = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose/authorized.html";
const ciccRegister = "https://register.college-ic.ca/Public-Register-EN/Public-Register-EN/Default.aspx";
// Direct link to this practice's own licensee record (verified 2026-09-24:
// Pankaj Khanna · R711256 · "Eligible to Provide Service"). The register root
// above is kept for the "verify any representative" advice, where the specific
// record would be the wrong target.
const ciccProfile = site.rcic.profileUrl;

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
  ["What Canadian immigration services does Commonwealth Migration provide for Brampton and Canada-wide clients?", "Commonwealth Migration provides case-specific guidance for permanent residence, Express Entry and provincial nomination, work and study permits, family sponsorship, citizenship, and complex refusal, inadmissibility or appeal matters. The service offered depends on the facts, the representative’s authority and the written engagement."],
  // FAQ answers are rendered visibly AND emitted into FAQPage structured data,
  // so the licence number is written as plain text here rather than as a
  // markdown link — a link would surface as raw `[label](url)` in the schema.
  ["Are Commonwealth Migration's Brampton immigration consultants licensed and regulated by CICC?", `Commonwealth Migration is a CICC-regulated practice. The licensed consultant behind the practice is ${site.rcic.consultant.nameWithCredential}, licence number ${site.rcic.number}. Confirm the current status and contact details on [the CICC Public Register](${ciccProfile}) before paying for immigration advice.`],
  ["Can Commonwealth Migration guarantee a Canadian visa, Express Entry invitation or permanent residence approval?", "No. IRCC, a province, the IRB or a court makes the decision within its authority. A consultant can assess a profile, prepare evidence and provide authorized representation, but cannot promise an invitation, approval or processing time."],
  ["Do I need to hire an immigration consultant to apply for Canadian permanent residence or a visa?", `No. You can submit an application yourself using the Government of Canada’s free forms and instructions. If you choose paid representation, confirm that the person is authorized and understand the service scope before appointing them. Read [IRCC’s guidance on representatives](${officialRepresentativeGuide}).`],
  ["How can I check an immigration consultant's licence and identity before paying in Brampton?", `Search the consultant’s name or licence number in the [CICC Public Register](${ciccRegister}) and compare the listing with the person who will advise you. Confirm their current status and contact details, then get the service, fees and payment terms in a written agreement.`],
  ["How much does an immigration consultant cost in Canada, and what should a retainer include?", `Consulting fees are set by the service agreement, not by IRCC. Compare the work included, excluded services, payment schedule, extra costs, refund terms and communication plan. The Government of Canada explains how to use a representative and what appointment means for your application in [its representative guidance](${officialRepresentativeGuide}).`],
  ["Does Commonwealth Migration work with immigration clients who live outside Brampton or outside Canada?", "Yes. The practice serves clients across Canada and internationally through scheduled phone or video appointments. Eligibility and application steps still depend on the program and the applicant’s location; the team confirms the available service and file scope before engagement."],
  ["What should I prepare before booking a Canada immigration assessment with Commonwealth Migration?", "Prepare your immigration goal, current status and expiry date, passport details, education and language records, work history, family information, funds, prior applications and any refusal or procedural-fairness letter. Share exact notice deadlines at the start so the timing can be understood."],
];

const processFaqs = [
  ["What happens during a Canada immigration consultation with a licensed RCIC?", "The consultant clarifies your goal, current status, immigration history, work and education, family circumstances and deadlines. You then discuss possible routes, missing evidence, practical risks and next steps; a consultation is an assessment, not an approval promise."],
  ["Which documents should I bring to my first Canadian immigration consultant appointment?", "Bring your passport, current permits or status documents, education and language records, work history, family details, funds evidence and copies of earlier applications or refusals. If IRCC, CBSA or a tribunal sent a notice, include the complete notice and its response deadline."],
  ["How does Commonwealth Migration choose the right Canada immigration pathway for my profile?", "The review compares your goal and supporting facts with the current requirements for relevant federal, provincial, family, work, study or review routes. The team identifies which criteria appear relevant and what must be verified; a score or initial assessment is not an official eligibility decision."],
  ["What are the steps in a Canadian immigration application preparation process?", "After the route and service scope are agreed in writing, the file is organised around the applicable forms, identity records, eligibility evidence, translations, fees and deadlines. The application is checked for consistency and completeness before submission, then requests and updates are tracked against the agreed responsibilities."],
  ["How does an immigration consultant respond to a Canadian visa refusal or procedural fairness letter?", "The first step is to identify the decision-maker, the exact concern and the deadline. The response may involve targeted evidence, a procedural-fairness submission, a new application, an appeal or a court review, depending on the decision and legal route; not every refusal can be appealed."],
  ["Can a Canadian immigration consultant guarantee approval after reviewing my application?", "No. The consultant can explain the rules, prepare an application and represent a client where authorized, but IRCC, a province, the IRB or a court makes the decision. No representative can guarantee approval, a nomination, an invitation or a processing time."],
  ["What should I ask before signing an immigration consulting retainer agreement in Canada?", "Confirm who will provide the service, which application and family members are included, what work is excluded, the fee and payment schedule, refund terms, client responsibilities and how updates will be handled. Keep the signed agreement and a copy of every submitted document."],
  ["When should I contact an immigration consultant about a refusal, status expiry or response deadline?", "Contact an authorized representative as soon as you receive a refusal, procedural-fairness letter, CBSA notice or other deadline-driven document. Provide the full notice and exact date; short filing windows may apply, and a consultation does not extend a legal or immigration deadline."],
];

const officeFaqs = [
  ["Where is Commonwealth Migration's immigration consultant office in Brampton, Ontario?", `The office is at ${site.address.full || "Brampton, Ontario, Canada"}. Appointments are scheduled, so contact the team before travelling to confirm the current address, availability and meeting format for your immigration matter.`],
  ["Do I need to visit the Brampton immigration office for a consultation with Commonwealth Migration?", "No. Many first consultations and file discussions can be arranged by phone or video, including for clients outside Brampton. Ask the team to confirm whether an in-person appointment is available for your matter before you travel."],
  ["How do I contact or book an appointment with a Brampton immigration consultant?", `Use the consultation link on this website, email ${site.email}, or call ${site.phone}. Include your immigration goal, current location and any response deadline so the team can direct your enquiry and confirm availability.`],
  ["What Canada immigration services can I discuss with the Brampton office?", "You can ask about permanent residence, Express Entry and provincial nomination, work or study permits, family sponsorship, citizenship, PR documents, inadmissibility and refusal-related matters. The team will confirm whether the requested work is within the service scope before any retainer is signed."],
  ["Does Commonwealth Migration serve immigration clients outside Brampton and the Greater Toronto Area?", "Yes. Commonwealth Migration is based in Brampton and can arrange remote consultations for clients elsewhere in Ontario, across Canada and internationally. The application rules depend on the client’s program and location, not on having a local CMG office."],
  ["Can I visit the Commonwealth Migration Brampton office without an appointment?", "Please contact the office before visiting. Immigration consultations are scheduled, and availability or in-person arrangements can change; confirming first helps ensure the right consultant and enough time are available for your matter."],
  ["What should I include when contacting the Brampton immigration office about an urgent case?", "State the exact deadline and the type of notice or decision you received, such as an IRCC document request, procedural-fairness letter or CBSA notice. Share only the records requested through the agreed channel, and do not assume an enquiry or appointment changes the deadline."],
  ["How can I verify the licensed RCIC before booking an immigration consultation in Brampton?", `The consultant’s name and licence number are ${site.rcic.consultant.nameWithCredential}, ${site.rcic.number}. Confirm the current registration and contact details on [the CICC Public Register](${ciccProfile}) before paying for advice.`],
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
      { type: "paragraph", text: `The licensed consultant behind Commonwealth Migration is ${site.rcic.consultant.nameWithCredential}, licence number ${site.rcic.number}, whose current status on the regulator's register is "${site.rcic.consultant.status}". You can open our record directly at [the CICC public register](${ciccProfile}), or search the status of any other representative at [register.college-ic.ca](${ciccRegister}). Licence status is the first thing worth checking before you share documents or pay a fee — it applies to any consultant, not just ours.` },
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
        "Meet the Licensed RCIC Team → /about/about-commonwealth-migration#licensed-rcic-about",
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
    path: bramptonOfficePath,
    h1: "Commonwealth Migration Group Brampton, Canada",
    title: "Commonwealth Migration Group Brampton, Canada | Office",
    description: "Visit Commonwealth Migration Group's Brampton, Canada office for licensed RCIC immigration guidance, contact details and appointment options.",
    keywords: ["Commonwealth Migration Group Brampton Canada", "immigration office Brampton", "immigration consultant Brampton Ontario", "Brampton RCIC office", "Canada immigration consultant office"],
    priority: 0.95,
    lastModified: "2026-10-09",
    hero: {
      lead: "Commonwealth Migration Group Inc. is a CICC-regulated Canadian immigration consultancy based in Brampton, Canada. Arrange an appointment by phone, email or online consultation and we will confirm the best way to discuss your matter.",
    },
    contentBlocks: [
      { type: "paragraph", text: "Commonwealth Migration Group Inc.'s Brampton, Canada office is the Canadian base for the practice. The team works with people in Brampton, the Greater Toronto Area, other parts of Canada and clients abroad who need a licensed RCIC-led review of a Canadian immigration matter." },
      { type: "table", rows: [
        ["Office", "Commonwealth Migration Group Inc."],
        ["Location", "Brampton, Ontario, Canada"],
        ["Service area", "Canada-wide and international clients"],
        ["Appointments", "Scheduled in-person, phone or video consultation"],
        ["Email", site.email],
        ["Phone", site.phone],
        ["Hours", site.hours],
      ] },
      { type: "heading", level: 2, text: "Where is the Commonwealth Migration Group office in Brampton?" },
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
      webPage("Commonwealth Migration Group Brampton, Canada", "Visit Commonwealth Migration Group's Brampton, Canada office for licensed RCIC immigration guidance, contact details and appointment options.", bramptonOfficePath, { breadcrumb: breadcrumbs("Commonwealth Migration Group Brampton, Canada", bramptonOfficePath) }),
      {
        "@type": "ProfessionalService",
        "@id": `${bramptonOfficeUrl}#local-business`,
        name: site.name,
        alternateName: "Commonwealth Migration Group Brampton, Canada",
        url: bramptonOfficeUrl,
        parentOrganization: { "@id": `${site.url}#organization` },
        telephone: site.phone,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.line1,
          addressLocality: site.address.city.split(",")[0].trim() || "Brampton",
          addressRegion: site.address.region || "ON",
          postalCode: site.address.postal || undefined,
          addressCountry: "CA",
        },
        hasMap: site.address.mapsUrl,
        areaServed: ["Brampton", "Ontario", "Canada"],
      },
      faqPage(officeFaqs),
    ],
  },
];

export default aboutPages;
