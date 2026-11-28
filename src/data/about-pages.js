import { site } from "@/config/site";
import aboutUsPage from "@/data/about-us-page";

const aboutPath = "/about/about-commonwealth-migration";
const aboutRoot = `${site.url.replace(/\/$/, "")}${aboutPath}`;
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

const processFaqs = [
  ["What happens during a Canada immigration consultation with a licensed RCIC?", "The consultant clarifies your goal, current status, immigration history, work and education, family circumstances and deadlines. You then discuss possible routes, missing evidence, practical risks and next steps; a consultation is an assessment, not an approval promise."],
  ["Which documents should I bring to my first Canadian immigration consultant appointment?", "Bring your passport, current permits or status documents, education and language records, work history, family details, funds evidence and copies of earlier applications or refusals. If IRCC, CBSA or a tribunal sent a notice, include the complete notice and its response deadline."],
  ["How does Commonwealth Migration choose the right Canada immigration pathway for my profile?", "The review compares your goal and supporting facts with the current requirements for relevant federal, provincial, family, work, study or review routes. The team identifies which criteria appear relevant and what must be verified; a score or initial assessment is not an official eligibility decision."],
  ["What are the steps in a Canadian immigration application preparation process?", "The process moves from a fact-based assessment to route selection, a written service scope, evidence and form preparation, client review before filing, and follow-up against agreed deadlines. Check names, dates, history and declarations against your records before submission, and ask the consultant to resolve anything unclear."],
  ["How does an immigration consultant respond to a Canadian visa refusal or procedural fairness letter?", "The first step is to identify the decision-maker, the exact concern and the deadline. The response may involve targeted evidence, a procedural-fairness submission, a new application, an appeal or a court review, depending on the decision and legal route; not every refusal can be appealed."],
  ["Can a Canadian immigration consultant guarantee approval after reviewing my application?", "No. The consultant can explain the rules, prepare an application and represent a client where authorized, but IRCC, a province, the IRB or a court makes the decision. No representative can guarantee approval, a nomination, an invitation or a processing time."],
  ["What should I ask before signing an immigration consulting retainer agreement in Canada?", "Confirm who will provide the service, which application and family members are included, what work is excluded, the fee and payment schedule, refund terms, client responsibilities and how updates will be handled. Keep the signed agreement and a copy of every submitted document."],
  ["When should I contact an immigration consultant about a refusal, status expiry or response deadline?", "Contact an authorized representative as soon as you receive a refusal, procedural-fairness letter, CBSA notice or other deadline-driven document. Provide the full notice and exact date; short filing windows may apply, and a consultation does not extend a legal or immigration deadline."],
];


export const aboutPages = [
  aboutUsPage,
  {
    path: "/about/canada-immigration-consulting-process",
    h1: "Our Canada Immigration Consulting Process",
    title: "Canada Immigration Consulting Process | Commonwealth Migration",
    description: "See how our licensed RCIC team assesses your profile, builds an evidence-led Canada immigration plan, prepares the application and tracks the next decision.",
    keywords: [
      "Canada immigration consulting process",
      "immigration consultation process",
      "licensed RCIC application help",
      "Canadian immigration application preparation",
      "what happens during an immigration consultation",
      "documents to bring to an immigration consultant appointment",
    ],
    priority: 0.82,
    hero: {
      lead: "Our Canada immigration consulting process turns a broad goal into a practical plan: diagnose the facts, build the evidence, protect deadlines and decide the next move with a licensed RCIC team.",
    },
    contentBlocks: [
      { type: "paragraph", text: "The Canada immigration consulting process is a structured review of your goal, eligibility, history, evidence and timing. At Commonwealth Migration, each stage is designed to answer one practical question: what does the decision-maker need to see, and what should happen next?" },
      { type: "table", rows: [["01 Diagnose", "02 Build", "03 Protect", "04 Decide"]] },
      { type: "heading", level: 2, text: "What happens in an immigration consultation?" },
      { type: "paragraph", text: "An immigration consultation starts with your objective and the facts that can change the route: where you are, your current status, family structure, work and education history, language results, previous applications, admissibility and deadlines. The outcome is not a promise of approval. It is a clearer view of possible pathways, missing information, risks and the most useful next step." },
      { type: "heading", level: 2, text: "How do we agree on the service before application work begins?" },
      { type: "paragraph", text: "If you decide to proceed after the assessment, review the proposed service in writing before application work begins. The agreement should make clear which application and family members are included, the work and deliverables covered, fees and separate government or third-party costs, communication expectations, client responsibilities and the next deadlines. Ask questions about anything unclear before signing; if the requested work later changes, clarify the revised scope and costs first." },
      { type: "heading", level: 2, text: "How does the application preparation process work?" },
      { type: "list", ordered: true, items: [
        "Diagnose the profile: clarify the goal, constraints, history and decision that needs to be made.",
        "Choose the route: compare the relevant federal, provincial, family, work, study or review options against the current official criteria.",
        "Confirm the engagement: review the written scope, deliverables, fees, communication plan and responsibilities before proceeding with application work.",
        "Build the record: organise forms, identity documents, civil records, education, employment, funds, translations and explanations into a consistent evidence set.",
        "Review before filing: check completeness, consistency, signatures, fees and pathway-specific requirements. Review names, dates, history and declarations against your records, and raise anything uncertain before submission.",
        "Protect the timeline: after filing, track requests, biometrics, medical or document deadlines and ownership for every follow-up.",
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
        "Our Brampton Immigration Office → /locations/brampton",
        "Free Canada Immigration Assessment → /assessment/free-canada-immigration-assessment",
        "Book an Immigration Consultation → /contact/book-immigration-consultation-canada",
      ] },
    ],
    jsonLd: [
      webPage("Our Canada Immigration Consulting Process", "See how our licensed RCIC team assesses your profile, builds an evidence-led Canada immigration plan, prepares the application and tracks the next decision.", "/about/canada-immigration-consulting-process", { breadcrumb: breadcrumbs("Our Canada Immigration Consulting Process", "/about/canada-immigration-consulting-process") }),
      {
        "@type": "HowTo",
        name: "How the Canada immigration consulting process works",
        description: "The four-stage process Commonwealth Migration uses to assess an immigration goal, agree the service, prepare and review the record, and track the next decision.",
        step: [
          { "@type": "HowToStep", position: 1, name: "Diagnose the profile", text: "Clarify the goal, constraints, history and decision that needs to be made." },
          { "@type": "HowToStep", position: 2, name: "Build the record", text: "Agree the written service scope, then organise forms, documents and explanations into a consistent evidence set." },
          { "@type": "HowToStep", position: 3, name: "Protect the timeline", text: "Review the application for accuracy before filing, then track requests, deadlines and ownership for every follow-up." },
          { "@type": "HowToStep", position: 4, name: "Decide the next move", text: "Respond, continue, reassess or review the strategy as the file develops." },
        ],
      },
      faqPage(processFaqs),
    ],
  },

];

export default aboutPages;
