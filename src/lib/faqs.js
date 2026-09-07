const SPECIFIC_FAQS = {
  "/": [
    {
      question: "What does an immigration consultant in Brampton help with?",
      answer: "An immigration consultant can help you compare Canadian immigration pathways, identify the documents and dates that matter, and organize questions for a file-specific review.",
    },
    {
      question: "Which Canadian immigration pathway should I review first?",
      answer: "Start with your goal: permanent residence, a provincial nomination, work, study, family sponsorship, temporary entry or a refusal response. Your status, work history, family and deadline determine which route deserves closer review.",
    },
    {
      question: "Can I compare Express Entry, PNP, work and study options in one place?",
      answer: "Yes. The homepage is a starting point for comparing those routes and the available tools. Treat every result as planning information and confirm current requirements with the relevant official source.",
    },
    {
      question: "What should I prepare before speaking with an immigration consultant?",
      answer: "Prepare your current status, passport and travel history, education, language results, work history, family details, funds and any previous applications or refusals that may affect the plan.",
    },
    {
      question: "Are the calculators and guides an official immigration decision?",
      answer: "No. They are preparation aids. IRCC, a province or another decision-maker assesses the application using the current rules and the evidence submitted in the file.",
    },
    {
      question: "How can I verify an immigration representative before retaining them?",
      answer: "Use the current public register of the applicable regulator, confirm the representative’s identity and entitlement to practise, and make sure the proposed service scope is clear before sending sensitive documents or paying fees.",
    },
    {
      question: "What can cause a Canadian immigration application to be delayed or refused?",
      answer: "Common risks include an unsuitable pathway, incomplete or inconsistent evidence, missed deadlines, inadmissibility concerns, unclear purpose and failure to follow the current program instructions.",
    },
    {
      question: "What is the next step if I am unsure which pathway fits?",
      answer: "Use the relevant calculator or pathway guide to organize the facts, then arrange a focused review when your history, documents, employer situation or deadline requires an individualized strategy.",
    },
  ],
  "/immigration-draws": [
    {
      question: "What are Express Entry draws?",
      answer: "Express Entry draws are invitation rounds in which IRCC selects eligible candidates from the pool according to the round type and its selection criteria.",
    },
    {
      question: "What does the CRS cutoff mean?",
      answer: "The CRS cutoff is the lowest Comprehensive Ranking System score among candidates invited in that specific round. It is a record of that round, not a guarantee of the next cutoff.",
    },
    {
      question: "How often does IRCC hold Express Entry draws?",
      answer: "Draw timing and frequency can change. Check the latest official IRCC round information and use this tracker as a reference to compare published rounds.",
    },
    {
      question: "Does a higher CRS score guarantee an invitation?",
      answer: "No. An invitation also depends on the draw type, the candidate’s eligibility, the number of invitations and the tie-break rule used for that round.",
    },
    {
      question: "What is a tie-break cutoff in an Express Entry draw?",
      answer: "The tie-break date and time can determine which profiles with the cutoff score are ranked within the invitation limit. Follow the official round notice for the exact rule.",
    },
    {
      question: "Can I use past draw results to plan my Express Entry profile?",
      answer: "Yes, as context. Compare the draw category and score with your own program eligibility and CRS profile, but do not treat historical cutoffs as a prediction.",
    },
    {
      question: "Where can I verify the official Express Entry draw results?",
      answer: "Verify the round, date, CRS score, invitation count and tie-break information on the official IRCC page on Canada.ca before relying on the data.",
    },
    {
      question: "What should I do if my CRS score is below recent cutoffs?",
      answer: "Review the factors that can lawfully change your score, check whether another draw category or program fits, and confirm your options against current IRCC requirements before taking action.",
    },
  ],
  "/tools/crs-calculator": [
    {
      question: "What does the CRS calculator estimate?",
      answer: "It estimates your Express Entry Comprehensive Ranking System score using factors such as age, education, language, work experience and adaptability.",
    },
    {
      question: "Is the CRS result an official IRCC decision?",
      answer: "No. It is a planning estimate based on the information you enter. Confirm your profile against the current IRCC rules before submitting an application.",
    },
  ],
  "/tools/pnp-eligibility": [
    {
      question: "What does the PNP eligibility check assess?",
      answer: "It uses your profile details to suggest provincial nomination streams that may deserve further research, including factors such as occupation, language, experience and ties.",
    },
    {
      question: "Does a PNP result guarantee a nomination?",
      answer: "No. Provincial programs have their own criteria, invitations and document requirements. Use the result as a starting point for a more detailed assessment.",
    },
  ],
  "/tools/noc-finder": [
    {
      question: "What does the NOC Finder help me identify?",
      answer: "It helps you compare your duties with Canadian occupation descriptions and find a likely NOC and TEER category for further eligibility research.",
    },
    {
      question: "Why does the NOC code matter?",
      answer: "Your occupation code can affect Express Entry, work permit and LMIA planning. The duties must match your real work, not only your job title.",
    },
  ],
  "/tools/document-checklist": [
    {
      question: "Which application types does the checklist cover?",
      answer: "The checklist helps organise common Express Entry, work permit, study permit, spousal sponsorship and visitor visa documents.",
    },
    {
      question: "Can a checklist replace a document review?",
      answer: "No. It is a preparation aid. Your final document set depends on your pathway, personal history, country of residence and the instructions attached to your application.",
    },
  ],
  "/tools/free-assessment": [
    {
      question: "What happens during a free assessment?",
      answer: "You share the basics of your goal and profile so the team can identify possible pathways, immediate gaps and the most useful next step.",
    },
    {
      question: "Do I need every document before requesting an assessment?",
      answer: "No. Start with the information you have. The assessment can help you understand which documents and facts will matter most before you prepare the full application.",
    },
  ],
};

const SPECIFIC_PATH_ALIASES = {
  "/tools/crs-calculator-canada": "/tools/crs-calculator",
  "/tools/pnp-eligibility-canada": "/tools/pnp-eligibility",
  "/tools/noc-finder-canada": "/tools/noc-finder",
  "/tools/document-checklist-canada": "/tools/document-checklist",
  "/assessment/free-canada-immigration-assessment": "/tools/free-assessment",
};

function specificFaqsFor(page) {
  return SPECIFIC_FAQS[page?.path] || SPECIFIC_FAQS[SPECIFIC_PATH_ALIASES[page?.path]] || [];
}

function isFaqType(value) {
  return Array.isArray(value) ? value.includes("FAQPage") : value === "FAQPage";
}

function structuredFaqItems(page) {
  const items = [];
  for (const json of page?.jsonLd || []) {
    const nodes = [json, ...(Array.isArray(json?.["@graph"]) ? json["@graph"] : [])];
    for (const node of nodes) {
      if (!isFaqType(node?.["@type"])) continue;
      const entities = Array.isArray(node.mainEntity) ? node.mainEntity : node.mainEntity ? [node.mainEntity] : [];
      for (const entity of entities) {
        const question = typeof entity?.name === "string" ? entity.name.trim() : "";
        const answer = typeof entity?.acceptedAnswer?.text === "string" ? entity.acceptedAnswer.text.trim() : "";
        if (question && answer) items.push({ question, answer });
      }
    }
  }
  return items;
}

function cleanFaqItem(question, answer) {
  const cleanQuestion = String(question || "").replace(/^Q:\s*/i, "").replace(/\s+/g, " ").trim();
  const cleanAnswer = String(answer || "").replace(/^A:\s*/i, "").replace(/\s+/g, " ").trim();
  return cleanQuestion && cleanAnswer ? { question: cleanQuestion, answer: cleanAnswer } : null;
}

function contentFaqItems(page) {
  const items = [];
  for (const block of Array.isArray(page?.contentBlocks) ? page.contentBlocks : []) {
    if (block?.type === "faq") {
      const item = cleanFaqItem(block.question, block.answer);
      if (item) items.push(item);
    }
  }
  if (items.length > 0) return items;

  const paragraphs = String(page?.content || "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/^\s*#{1,6}\s+/g, "").trim())
    .filter(Boolean);
  for (let index = 0; index < paragraphs.length - 1; index += 1) {
    if (!/^Q:\s*/i.test(paragraphs[index]) || !/^A:\s*/i.test(paragraphs[index + 1])) continue;
    const item = cleanFaqItem(paragraphs[index], paragraphs[index + 1]);
    if (item) items.push(item);
    index += 1;
  }
  if (items.length > 0) return items;

  const faqSection = String(page?.content || "").match(/##\s+(?:Questions people ask|Frequently asked questions|FAQs?)\s*\n([\s\S]*?)(?=\n##\s+|$)/i)?.[1] || "";
  const headingFaqs = [...faqSection.matchAll(/###\s+(.+?)\n+([\s\S]*?)(?=\n###\s+|$)/g)]
    .map((match) => cleanFaqItem(match[1], match[2]))
    .filter(Boolean);
  items.push(...headingFaqs);
  return items;
}

function pageTopic(page) {
  const path = String(page?.path || "").toLowerCase();
  const title = String(page?.h1 || page?.seo?.title || "Canadian immigration planning")
    .replace(/\b20\d{2}\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (path.includes("/contact/book-immigration-consultation")) return "immigration consultation in Brampton";
  if (path === "/blog") return "Canadian immigration guides";
  if (path.includes("express-entry") || path.includes("crs")) return "Express Entry and CRS planning";
  if (path.includes("study") || path.includes("pgwp") || path.includes("student")) return "Canadian study permit and post-graduation planning";
  if (path.includes("work") || path.includes("lmia") || path.includes("talent") || path.includes("employer")) return "Canadian work permit or employer pathway";
  if (path.includes("sponsor") || path.includes("family") || path.includes("spousal") || path.includes("parent")) return "Canadian family sponsorship";
  if (path.includes("visit") || path.includes("visitor") || path.includes("super-visa") || path.includes("business-visitor")) return "Canadian visitor or Super Visa application";
  if (path.includes("citizenship") || path.includes("pr-card") || path.includes("residency") || path.includes("travel-document")) return "Canadian citizenship or permanent resident status";
  if (path.includes("refusal") || path.includes("inadmiss") || path.includes("appeal") || path.includes("procedural")) return "Canadian immigration refusal or appeal response";
  if (path.includes("provinc") || path.includes("pnp") || path.includes("atlantic") || path.includes("rural") || path.includes("territor")) return "Provincial Nominee Program pathway";
  if (path.startsWith("/tools/")) return title.toLowerCase();
  return title.toLowerCase();
}

function candidateFaqItems(page) {
  const topic = pageTopic(page);
  const path = String(page?.path || "").toLowerCase();
  const description = String(page?.seo?.description || "").trim();
  const items = [
    { question: `What does this ${topic} guide cover?`, answer: description || `This guide explains the eligibility, preparation and next-step considerations for ${topic}.` },
    { question: `Who may be a fit for ${topic}?`, answer: `The right fit depends on your status, goal, history, documents, family circumstances and the current program instructions. Review the eligibility section first and compare your facts with the official requirements.` },
    { question: `Which documents are commonly important for ${topic}?`, answer: `Identity, status, education, language, work, family, financial and travel records may matter depending on the route. Use the page as a preparation list, then confirm the exact document request for your application.` },
    { question: `How do I start planning ${topic}?`, answer: `Begin by writing down your goal, current location and status, key dates, relevant experience, family details and any previous applications. Those facts help identify which requirements need verification first.` },
    { question: `What can delay or weaken planning for ${topic}?`, answer: `Inconsistent information, missing evidence, an incorrect pathway, an unexplained gap, an overlooked deadline or failure to follow the latest instructions can create avoidable risk.` },
    { question: `Which official source should I check for ${topic}?`, answer: "Use the current IRCC, provincial, regulatory or other decision-maker source linked from the page for the rule that applies to your situation. Check the source date before relying on a score, fee, form or deadline." },
  ];

  if (path.includes("citizenship") || path.includes("pr-card") || path.includes("residency")) {
    items.push({ question: `How do physical-presence and status records affect ${topic}?`, answer: "Travel dates, physical presence, status history and the records used to support them should be consistent before you submit. Check the current official calculator or application guide for the applicable test." });
    items.push({ question: `Can travel or time outside Canada affect ${topic}?`, answer: "It can. Keep a complete travel history and compare it with the current residence, renewal or citizenship requirements before relying on an eligibility estimate." });
  } else if (path.includes("visit") || path.includes("visitor") || path.includes("super-visa")) {
    items.push({ question: `What should I show about the purpose of ${topic}?`, answer: "Explain the purpose, dates, accommodation, funding and plans to leave or comply with the conditions of stay. Supporting evidence should match the explanation." });
    items.push({ question: `How can I address ties and funds for ${topic}?`, answer: "Use consistent evidence of work, family, residence, finances and responsibilities. The documents should make the temporary purpose and ability to support the trip understandable." });
  } else if (path.includes("refusal") || path.includes("appeal") || path.includes("procedural")) {
    items.push({ question: `What should I review after a ${topic}?`, answer: "Read the decision and stated concerns closely, collect the complete record and note every deadline. The response should address the actual reasons, not only repeat the original application." });
    items.push({ question: `Can I reapply after a ${topic}?`, answer: "Sometimes, but a reapplication should respond to the refusal reasons with meaningful changes or clearer evidence. The available remedy depends on the decision, timing and applicable process." });
  } else if (path.includes("sponsor") || path.includes("family") || path.includes("spousal") || path.includes("parent")) {
    items.push({ question: `What relationship evidence can matter for ${topic}?`, answer: "Relationship history, communication, visits, shared responsibilities and other evidence should tell a consistent story appropriate to the relationship and the program instructions." });
    items.push({ question: `What responsibilities should a sponsor understand for ${topic}?`, answer: "A sponsor should review the undertaking, eligibility, income or settlement obligations and any restrictions that apply to the specific family category before submitting." });
  } else if (path.includes("study") || path.includes("pgwp") || path.includes("student")) {
    items.push({ question: `What should a study plan explain for ${topic}?`, answer: "The study plan should connect your program choice with your education, experience, career direction, funding and temporary-residence circumstances in a clear, consistent explanation." });
    items.push({ question: `Can a study pathway lead to work or permanent residence?`, answer: "It may create future options, but no study permit, work permit or permanent residence outcome is automatic. Check the current eligibility rules for each later pathway separately." });
  } else if (path.includes("work") || path.includes("lmia") || path.includes("talent") || path.includes("employer")) {
    items.push({ question: `What must an employer and worker verify for ${topic}?`, answer: "Confirm the job, employer obligations, wage or occupation requirements, work authorization and supporting documents against the current official instructions for the applicable stream." });
    items.push({ question: `Can an employer-specific pathway limit where I work?`, answer: "Often it can. Read the conditions on the issued authorization and confirm whether a new offer, application or approval is needed before changing employers, roles or locations." });
  } else if (path.includes("provinc") || path.includes("pnp") || path.includes("atlantic") || path.includes("rural") || path.includes("territor")) {
    items.push({ question: `How does a province or territory assess ${topic}?`, answer: "Each program can set its own occupation, language, work, education, settlement, job-offer or connection requirements. Compare the stream’s current instructions rather than assuming one province follows another." });
    items.push({ question: `Does a nomination guarantee permanent residence?`, answer: "No. A nomination is one stage of the process. The federal application still requires the applicant to meet the applicable requirements and pass admissibility checks." });
  } else {
    items.push({ question: `What should I verify before starting ${topic}?`, answer: "Check that the route is open, confirm the current official requirements, record the relevant dates and make sure the information in your documents is consistent before paying fees or submitting forms." });
    items.push({ question: `What is the next step for my ${topic} plan?`, answer: "Use the guide to identify the route and evidence questions, then arrange a focused review if your history, documents, employer situation or deadline needs an individualized strategy." });
  }

  return items;
}

const EXCLUDED_PATHS = new Set(["/privacy", "/terms", "/disclaimer", "/pay", "/contact/pay-immigration-consultation-canada"]);

/** Return FAQ blocks already present in the page's visible content. */
export function getInlineFaqs(page) {
  return contentFaqItems(page);
}

/** Return page-specific FAQ content sourced from the pageData Markdown contract. */
export function getPageFaqs(page, limit = 8) {
  if (!page || EXCLUDED_PATHS.has(page.path) || String(page.path || "").startsWith("/legal/")) return [];

  const source = [
    ...specificFaqsFor(page),
    ...contentFaqItems(page),
    ...structuredFaqItems(page),
    ...candidateFaqItems(page),
  ];
  const seen = new Set();
  return source.map((item) => cleanFaqItem(item.question, item.answer)).filter((item) => {
    if (!item) return false;
    const key = item.question.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, limit);
}
