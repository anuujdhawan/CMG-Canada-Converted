const SPECIFIC_FAQS = {
  "/": [
    {
      question: "What can a licensed immigration consultant in Brampton help me with?",
      answer: "An immigration consultant can help you compare Canadian immigration pathways, identify the documents and dates that matter, and organize questions for a file-specific review.",
    },
    {
      question: "Which Canadian immigration pathway should I review first for my profile?",
      answer: "Start with your goal: permanent residence, a provincial nomination, work, study, family sponsorship, temporary entry or a refusal response. Your status, work history, family and deadline determine which route deserves closer review.",
    },
    {
      question: "Can I compare Express Entry, PNP, work and study options in one place?",
      answer: "Yes. The homepage is a starting point for comparing those routes and the available tools. Treat every result as planning information and confirm current requirements with the relevant official source.",
    },
    {
      question: "Which documents and profile details should I prepare before a Canadian immigration consultation?",
      answer: "Prepare your current status, passport and travel history, education, language results, work history, family details, funds and any previous applications or refusals that may affect the plan.",
    },
    {
      question: "Are a Canada immigration calculator and guide an official IRCC decision?",
      answer: "No. They are preparation aids. IRCC, a province or another decision-maker assesses the application using the current rules and the evidence submitted in the file.",
    },
    {
      question: "How do I verify that a paid Canadian immigration representative is authorized?",
      answer: "Use the current public register of the applicable regulator, confirm the representative’s identity and entitlement to practise, and make sure the proposed service scope is clear before sending sensitive documents or paying fees.",
    },
    {
      question: "What common mistakes can delay or lead IRCC to refuse a Canadian immigration application?",
      answer: "Common risks include an unsuitable pathway, incomplete or inconsistent evidence, missed deadlines, inadmissibility concerns, unclear purpose and failure to follow the current program instructions.",
    },
    {
      question: "What should I do next if I am unsure which Canadian immigration pathway fits?",
      answer: "Use the relevant calculator or pathway guide to organize the facts, then arrange a focused review when your history, documents, employer situation or deadline requires an individualized strategy.",
    },
  ],
  "/immigration-draws": [
    {
      question: "How do Express Entry rounds of invitations work for Canadian permanent residence?",
      answer: "Express Entry draws are invitation rounds in which IRCC selects eligible candidates from the pool according to the round type and its selection criteria.",
    },
    {
      question: "What does an Express Entry CRS cutoff mean for candidates in a specific draw?",
      answer: "The CRS cutoff is the lowest Comprehensive Ranking System score among candidates invited in that specific round. It is a record of that round, not a guarantee of the next cutoff.",
    },
    {
      question: "How often does IRCC hold Canadian Express Entry invitation rounds, and can timing change?",
      answer: "Draw timing and frequency can change. Check the latest official IRCC round information and use this tracker as a reference to compare published rounds.",
    },
    {
      question: "Does a higher CRS score guarantee an Express Entry invitation to apply in Canada?",
      answer: "No. An invitation also depends on the draw type, the candidate’s eligibility, the number of invitations and the tie-break rule used for that round.",
    },
    {
      question: "How does the Express Entry tie-break date affect candidates at a CRS cutoff?",
      answer: "The tie-break date and time can determine which profiles with the cutoff score are ranked within the invitation limit. Follow the official round notice for the exact rule.",
    },
    {
      question: "How should I use past Express Entry draw results when planning my CRS profile?",
      answer: "Yes, as context. Compare the draw category and score with your own program eligibility and CRS profile, but do not treat historical cutoffs as a prediction.",
    },
    {
      question: "Where can I verify official IRCC Express Entry draw dates, CRS scores and invitations?",
      answer: "Verify the round, date, CRS score, invitation count and tie-break information on the official IRCC page on Canada.ca before relying on the data.",
    },
    {
      question: "What can I do if my Express Entry CRS score is below recent draw cutoffs?",
      answer: "Review the factors that can lawfully change your score, check whether another draw category or program fits, and confirm your options against current IRCC requirements before taking action.",
    },
  ],
  "/pnp-draws": [
    {
      question: "How should I read provincial nominee program draw results across Canada's provinces?",
      answer: "Canadian PNP draw results are historical records of provincial or territorial invitation rounds. They show the date, stream, invitations and a published score, cutoff or selection signal when available. Use them to understand past activity, not as a guarantee of a future invitation or nomination.",
    },
    {
      question: "Do all Canadian Provincial Nominee Program streams use the same draw cutoff or score?",
      answer: "No. Provincial and territorial programs use different selection systems. Some publish points, while others select by occupation, priority, employer, intake window or another stream-specific method. A cutoff from one province cannot be used as the cutoff for another.",
    },
    {
      question: "Can a Canadian PNP draw result guarantee me an invitation, nomination or permanent residence?",
      answer: "No. A historical draw result is context only. The province or territory applies the current stream rules, available spaces, evidence requirements and selection priorities to each candidate, and a nomination still requires a federal admissibility review.",
    },
    {
      question: "Where can I verify official Provincial Nominee Program draw data for each province?",
      answer: "This tracker provides a source link on every draw record. Open the linked provincial or territorial notice, then compare it with the current IRCC Provincial Nominee Program guide before relying on a cutoff, selection signal or invitation count.",
    },
    {
      question: "How should I filter Canadian PNP draw results by province, stream and invitation type?",
      answer: "Select a province or territory first, then choose the available stream or selection type. The page fetches the filtered view from its API, updates the URL and lets you load every available result without leaving the page.",
    },
  ],
  "/tools/crs-calculator": [
    {
      question: "How does this Canada CRS calculator estimate my Express Entry profile score?",
      answer: "It estimates your Express Entry Comprehensive Ranking System score using factors such as age, education, language, work experience and adaptability.",
    },
    {
      question: "Is a Canada CRS calculator result an official IRCC score or invitation decision?",
      answer: "No. It is a planning estimate based on the information you enter. Confirm your profile against the current IRCC rules before submitting an application.",
    },
  ],
  "/tools/pnp-eligibility": [
    {
      question: "How does this Canadian PNP eligibility checker compare provincial nominee streams?",
      answer: "It uses your profile details to suggest provincial nomination streams that may deserve further research, including factors such as occupation, language, experience and ties.",
    },
    {
      question: "Does a PNP eligibility result guarantee a provincial nomination or invitation to apply?",
      answer: "No. Provincial programs have their own criteria, invitations and document requirements. Use the result as a starting point for a more detailed assessment.",
    },
  ],
  "/tools/noc-finder": [
    {
      question: "How does the Canada NOC Finder match my job duties to an occupation code?",
      answer: "It helps you compare your duties with Canadian occupation descriptions and find a likely NOC and TEER category for further eligibility research.",
    },
    {
      question: "Why does my Canadian NOC and TEER code matter for immigration eligibility?",
      answer: "Your occupation code can affect Express Entry, work permit and LMIA planning. The duties must match your real work, not only your job title.",
    },
  ],
  "/tools/document-checklist": [
    {
      question: "Which Canadian immigration applications does this document checklist help me prepare for?",
      answer: "The checklist helps organise common Express Entry, work permit, study permit, spousal sponsorship and visitor visa documents.",
    },
    {
      question: "Can a Canada immigration document checklist replace a review of my full application?",
      answer: "No. It is a preparation aid. Your final document set depends on your pathway, personal history, country of residence and the instructions attached to your application.",
    },
  ],
  "/tools/free-assessment": [
    {
      question: "What happens during a free Canada immigration assessment with a licensed RCIC?",
      answer: "You share the basics of your goal and profile so the team can identify possible pathways, immediate gaps and the most useful next step.",
    },
    {
      question: "Do I need every document before requesting a Canadian immigration eligibility assessment?",
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

function cleanFaqItem(question, answer, sourceLinks = []) {
  const cleanQuestion = String(question || "").replace(/^Q:\s*/i, "").replace(/\s+/g, " ").trim();
  const rawAnswer = String(answer || "").replace(/^A:\s*/i, "").replace(/\s+/g, " ").trim();
  const embeddedSources = [...rawAnswer.matchAll(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g)]
    .map((match) => ({ label: match[1], url: match[2] }));
  const cleanAnswer = rawAnswer.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, "$1");
  const sources = [...new Map([...sourceLinks, ...embeddedSources].filter((source) => source?.url).map((source) => [source.url, source])).values()];
  return cleanQuestion && cleanAnswer
    ? { question: cleanQuestion, answer: cleanAnswer, ...(sources.length ? { sourceLinks: sources } : {}) }
    : null;
}

function contentFaqItems(page) {
  const items = [];
  for (const block of Array.isArray(page?.contentBlocks) ? page.contentBlocks : []) {
    if (block?.type === "faq") {
      const item = cleanFaqItem(block.question, block.answer, block.sourceLinks);
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
  const h1 = String(page?.h1 || page?.seoTitle || page?.seo?.title || "Canadian immigration planning")
    .replace(/\b20\d{2}\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const slug = path.split("/").filter(Boolean).at(-1) || "";
  let topic = h1.split(/\s*:\s*/)[0].trim();
  if (/^Canada Work Permits$/i.test(topic)) topic = "Canada work permit";
  if (/^Canada Study Permits$/i.test(topic)) topic = "Canada study permit";
  if (/^Canada Visitor Visa & Super Visa$/i.test(topic)) topic = "Canada visitor visa and Super Visa";
  if (/^Canada Visitor Visa$/i.test(topic)) topic = "Canada visitor visa";
  if (/^Canada Super Visa$/i.test(topic)) topic = "Canada Super Visa";
  if (/^Canada Business Visa$/i.test(topic)) topic = "Canada business visitor entry";
  if (/^Canada Transit Visa$/i.test(topic)) topic = "Canada transit visa";
  return { path, slug, h1, topic };
}

function faqFamily(page) {
  const { path, slug } = pageTopic(page);
  if (path.startsWith("/locations/")) return "location";
  if (path === "/" || path.startsWith("/about/") || path === "/contact/book-immigration-consultation-canada") return "about";
  if (path.startsWith("/tools/") || path.startsWith("/assessment/")) return "tools";
  if (slug.includes("draw")) return "draws";
  if (slug.includes("blog") || slug.includes("news")) return "blog";
  if (["express-entry", "federal-skilled-worker", "canadian-experience-class", "federal-skilled-trades"].some((term) => slug.includes(term)) || slug.includes("crs")) return "express-entry";
  if (slug.includes("pgwp")) return "pgwp";
  if (slug.includes("atlantic")) return "atlantic";
  if (slug.includes("agri-food")) return "agri-food";
  if (slug.includes("rural-and-northern") || slug.includes("rural-community") || slug.includes("francophone-community")) return "community-pilot";
  if (slug.includes("municipal-nominee")) return "municipal";
  if (slug.includes("start-up") || slug.includes("business-immigration")) return "business";
  if (slug.includes("temporary-resident-to-pr")) return "temporary-resident-to-pr";
  if (slug.includes("home-child-care-provider") || slug.includes("home-support-worker") || slug.includes("home-care-worker")) return "caregiver";
  if (slug.includes("one-year-window")) return "one-year-window";
  if (slug.includes("refugee-travel-document")) return "refugee-travel-document";
  if (slug.includes("adopt")) return "adoption";
  if (path.startsWith("/inadmissibility-and-appeals/")) return "legal";
  if (["humanitarian-and-compassionate", "in-canada-refugee-claim", "pre-removal-risk-assessment", "protected-persons-apply-for-pr"].some((term) => slug.includes(term))) return "legal";
  if (["removal", "detention", "judicial", "mandamus", "fairness", "deferral", "stay-", "misrepresentation", "prra", "refugee-claim", "protected-person", "arc-", "criminal", "inadmiss", "medical", "financial", "admissibility", "refusal", "appeal"].some((term) => slug.includes(term))) return "legal";
  if (["pnp", "nominee", "provincial"].some((term) => slug.includes(term))) return "pnp";
  if (["study", "dli", "pgwp", "student"].some((term) => slug.includes(term))) return "study";
  if (slug.includes("spousal-open-work-permit")) return "family";
  if (["work", "worker", "lmia", "talent", "employer", "iec", "provider-pilot"].some((term) => slug.includes(term))) return "work";
  if (["visit", "visitor", "super-visa", "eta", "transit", "business-visa"].some((term) => slug.includes(term))) return "visit";
  if (["citizenship", "pr-card", "pr-travel-document", "residency-obligation"].some((term) => slug.includes(term))) return "citizenship";
  if (["super-visa", "visitor", "eta", "transit", "business-visa", "visitor-record"].some((term) => slug.includes(term))) return "visit";
  if (path.startsWith("/sponsor/") || ["sponsor", "family", "spousal", "parent", "reunification"].some((term) => slug.includes(term))) return "family";
  if (["citizenship", "pr-card", "pr-travel-document", "residency-obligation", "refugee-travel-document"].some((term) => slug.includes(term))) return "citizenship";
  return "general";
}

function faqEntity(page) {
  const { path, slug, topic, h1 } = pageTopic(page);
  const family = faqFamily(page);
  if (family === "work") {
    if (slug.includes("international-experience-canada")) return "International Experience Canada (IEC) applicants";
    if (slug.includes("global-talent-stream")) return "Canadian employers using the Global Talent Stream";
    if (slug.includes("tfwp-employer-compliance")) return "Temporary Foreign Worker Program employers";
    if (slug.includes("lmia-and-employer-services")) return "Canadian employers hiring temporary foreign workers";
    return "temporary foreign workers";
  }
  if (family === "study") return "international students applying for a Canada study permit";
  if (family === "pgwp") return "post-graduation work permit (PGWP) applicants";
  if (family === "visit") {
    if (slug.includes("super-visa")) return "the Canada Super Visa for parents and grandparents";
    if (slug.includes("visitor-record")) return "a visitor record to extend status in Canada";
    if (slug.includes("eta")) return "an electronic travel authorization (eTA) for Canada";
    if (slug.includes("transit")) return "a Canadian transit visa or Transit Without Visa";
    if (slug.includes("business-visa")) return "business visitor entry to Canada";
    return "a Canadian visitor visa (TRV)";
  }
  if (family === "family") {
    if (slug.includes("parents-and-grandparents") || slug.includes("pgp")) return "the Parents and Grandparents Program (PGP)";
    if (slug.includes("super-visa")) return "a Super Visa for parents and grandparents";
    if (slug.includes("minimum-necessary-income")) return "the minimum necessary income for parent and grandparent sponsorship";
    if (slug.includes("sponsorship-processing-times")) return "Canadian family sponsorship processing times";
    if (slug.includes("sponsorship-eligibility")) return "Canadian family sponsorship eligibility";
    if (slug.includes("spousal-open-work-permit")) return "a spousal open work permit during sponsorship";
    return topic || h1;
  }
  if (family === "citizenship") {
    if (slug.includes("pr-card")) return "a Canadian permanent resident (PR) card";
    if (slug.includes("prtd") || slug.includes("pr-travel-document")) return "a permanent resident travel document (PRTD)";
    if (slug.includes("residency-obligation")) return "the Canadian permanent resident residency obligation";
    return topic || h1;
  }
  if (family === "refugee-travel-document") return "a Canadian refugee travel document";
  if (family === "adoption") return "intercountry adoption immigration or citizenship process for a child adopted abroad";
  if (family === "legal") return topic || h1;
  if (family === "pnp") {
    if (slug.includes("british-columbia")) return "the British Columbia Provincial Nominee Program (BC PNP)";
    if (slug.includes("alberta")) return "the Alberta Advantage Immigration Program (AAIP)";
    if (slug.includes("saskatchewan")) return "the Saskatchewan Immigrant Nominee Program (SINP)";
    if (slug.includes("manitoba")) return "the Manitoba Provincial Nominee Program (MPNP)";
    if (slug.includes("ontario")) return "the Ontario Immigrant Nominee Program (OINP)";
    if (slug.includes("nova-scotia")) return "the Nova Scotia Nominee Program (NSNP)";
    if (slug.includes("new-brunswick")) return "the New Brunswick Provincial Nominee Program";
    if (slug.includes("prince-edward")) return "the Prince Edward Island Provincial Nominee Program";
    if (slug.includes("newfoundland")) return "the Newfoundland and Labrador Provincial Nominee Program";
    if (slug.includes("yukon")) return "Yukon and Northwest Territories nominee programs";
    return "a Canadian Provincial Nominee Program (PNP) stream";
  }
  return topic || h1 || "Canadian immigration application";
}

function routeSpecificFaqItems(page) {
  const { path, slug, h1 } = pageTopic(page);
  const item = (question, answer) => ({ question, answer });

  if (path === "/work-and-study/international-experience-canada-iec") return [
    item("Is the 2026 International Experience Canada (IEC) season still open, and can I enter a pool now?", `No. IRCC says the 2026 IEC season is closed and its pools are closed. Check the official IEC rounds page for the next season announcement before creating a profile or making travel plans.`),
    item("Can I still submit my IEC work permit application if I received an invitation in 2026?", `Yes, if IRCC issued you an Invitation to Apply during the 2026 season, you can still complete and submit that work-permit application within the deadline in your invitation. Follow the account checklist and do not rely on a past invitation after its deadline.`),
    item("Who is eligible for an International Experience Canada work permit by country and age?", `IEC eligibility depends on your citizenship, age range, country or territory agreement, and the available category. Check the country-specific rules for Working Holiday, Young Professionals or International Co-op before entering a pool.`),
    item("What is the difference between IEC Working Holiday, Young Professionals and International Co-op?", `Working Holiday usually provides an open work permit, while Young Professionals and International Co-op are employer-specific categories with different qualifying-job or placement rules. Availability and conditions vary by country agreement.`),
    item("How do I create an IEC profile and get an Invitation to Apply for Canada?", `First confirm that your country and category participate and that you meet the age and other requirements. Create a profile for an open pool; an invitation is not guaranteed, and you must submit a separate work-permit application if invited.`),
    item("What documents do I need after receiving an IEC Invitation to Apply?", `Use the personalized IRCC checklist. It can require a valid passport, police certificates, medical exam evidence, work or placement documents and proof of funds or insurance, depending on your history and IEC category.`),
    item("Can I change employers or extend my IEC work permit in Canada?", `It depends on the category and the conditions printed on your permit. A Working Holiday permit is generally open, while Young Professionals and Co-op permits are tied to the approved employer or placement; extensions are limited by the country agreement.`),
    item("Where can I check Canada IEC pool status, invitation rounds and 2027 season updates?", `Use IRCC’s official International Experience Canada page and country-specific rounds-of-invitations table. IRCC has not published a date for the next season in the current notice, so recheck the official page for updates.`),
  ];

  if (slug === "in-canada-refugee-claim") return [
    item("Who can make a refugee claim inside Canada, and who decides whether it is eligible?", `A person in Canada may ask for refugee protection if they fear persecution or serious harm, but IRCC or CBSA first checks whether the claim can be referred to the Immigration and Refugee Board. Eligibility is separate from whether the claim ultimately meets the protection definition.`),
    item("Can I make a refugee or asylum claim in Canada more than one year after I first entered?", `A new statutory ineligibility rule applies to claims made on or after June 3, 2025: a claim may not be referred to the IRB if it is made more than one year after the claimant’s first entry into Canada after June 24, 2020. The rule can apply even if the person left and later returned; check current exceptions and the exact dates with IRCC or CBSA.`),
    item("For Canada's one-year refugee claim rule, does the time count from my first entry or my most recent return?", `The rule uses the first entry into Canada after June 24, 2020, not simply the most recent arrival. IRCC says later departures and returns do not restart the one-year period. Entry records and the date the claim is made can therefore be important.`),
    item("What happens at the IRCC or CBSA refugee claim eligibility interview in Canada?", `An officer reviews identity, travel and claim information and checks legal eligibility for referral. Bring accurate identity and travel records, explain any prior claims or entries, and follow every instruction in the notice. If the claim is ineligible, ask promptly about the reasons and any next-step deadline.`),
    item("What is the Basis of Claim form deadline after I make a refugee claim in Canada?", `The form and hearing deadlines depend on how the claim was made and the instructions from IRCC, CBSA or the IRB. Use the current notice and claimant package, submit a complete and consistent account by the stated date, and keep proof of delivery; do not rely on a deadline from another person’s case.`),
    item("Can my spouse and children be included in a refugee claim made inside Canada?", `Tell the officer about your spouse or partner and every child, including family members outside Canada. Each family member’s eligibility and protection facts may need to be assessed, and the IRB or officer will explain whether separate forms or linked claims are required.`),
    item("Can I work in Canada while my refugee claim is being processed?", `A pending claim does not itself authorize employment. Some claimants may apply for a work permit after meeting the applicable claim, medical and document requirements. Follow IRCC’s written instructions and do not start work until you hold valid work authorization.`),
    item("What can I do if my Canadian refugee claim is found ineligible or refused?", `The available next step depends on whether the claim was screened out or the IRB refused protection. A Pre-Removal Risk Assessment or Federal Court review may be possible in some cases, with strict deadlines and different effects on removal. Read the decision and get advice immediately.`),
  ];

  if (slug === "pre-removal-risk-assessment-prra") return [
    item("Who is eligible to apply for a Pre-Removal Risk Assessment (PRRA) in Canada?", `A PRRA is available only to certain people facing removal after CBSA or IRCC notifies them and provides the application package. Prior refugee or PRRA decisions can create a bar or limit the evidence considered, so do not send an unsolicited application.`),
    item("How many days do I have to submit a PRRA application after a CBSA notice?", `IRCC’s current instructions allow 15 days when the form and guide are given in person or 22 days when they are mailed, but the date on your notification controls. For a first PRRA, submitting within 15 days is important to benefit from the regulatory stay of removal. Confirm the exact deadline and delivery method on your notice.`),
    item("What evidence should I include with my Canadian PRRA application?", `Explain the risk you personally face and provide current, credible country and personal evidence that addresses it. If a refugee claim or earlier PRRA was rejected, IRCC may only consider new evidence that arose later, became available later or could not reasonably have been submitted before. Follow the package’s translation and submission rules.`),
    item("Does filing a PRRA stop CBSA from removing me from Canada?", `A timely first PRRA can trigger a regulatory stay under the applicable rules, but a late, repeat or incomplete filing may have a different effect. IRCC says removal may proceed if you decline to apply, miss the deadline, withdraw or abandon the application, or receive a refusal. Follow the written notice and confirm the stay in your case.`),
    item("Can I work in Canada while my first PRRA application is processing?", `If this is your first PRRA and you file on time, a valid work permit may let you work until it expires or IRCC decides the PRRA. If you have no valid permit, you may be able to apply for one while the decision is pending. Late or repeat PRRA applicants cannot work on this basis; a permit must be issued before you work.`),
    item("What does IRCC assess in a Pre-Removal Risk Assessment for Canada?", `IRCC considers whether removal would expose you to persecution, torture, a risk to life, or cruel and unusual treatment or punishment. The legal assessment can differ in cases involving serious inadmissibility, so focus evidence on the risk factors the officer is legally allowed to consider in your case.`),
    item("Can I leave Canada while my PRRA application is waiting for a decision?", `Leaving Canada while a PRRA is pending can cause IRCC to treat the application as abandoned and reject it. Do not travel until you have checked the effect with the agency handling your file and understand any removal or travel-document consequences.`),
    item("What happens after a PRRA refusal, and can I challenge the decision in Federal Court?", `A refusal can lead to removal steps. An application for leave and judicial review may be available, but it has a short deadline and does not always stop removal automatically. Read the refusal and removal notices together and confirm promptly whether a separate stay motion is needed.`),
  ];

  if (slug.includes("sponsorship-appeal")) {
    const iadRoute = path.startsWith("/inadmissibility-and-appeals/");
    return [
      item(iadRoute
        ? `What is a Canadian family sponsorship appeal before the Immigration Appeal Division (IAD), and who can file one?`
        : `Can I appeal IRCC's refusal of my family sponsorship application for a relative to come to Canada?`,
      `A sponsorship appeal asks the Immigration Appeal Division to review a refusal of a permanent-residence visa for a family member the sponsor applied to sponsor. In most eligible cases, the sponsor—not the sponsored relative—files the appeal. A refusal of a temporary visitor, student or work visa cannot be appealed as a sponsorship appeal.`),
      item(iadRoute
        ? `Which sponsors can appeal a family-class permanent-residence refusal to the IAD, and what exclusions apply?`
        : `Who can appeal a sponsorship refusal to the IAD, and which family relationships qualify?`,
      `A Canadian citizen or permanent resident may be able to appeal an IRCC refusal to sponsor an eligible family member for permanent residence. The right depends on the relationship and reason for refusal; some inadmissibility findings bar an appeal. Read the refusal and IRB instructions before filing.`),
      item(iadRoute
        ? `After an IRCC sponsorship refusal, when does the sponsor's 30-day IAD appeal deadline start?`
        : `How soon must I file a Notice of Appeal after IRCC refuses a family sponsorship?`,
      `The IAD must receive the Notice of Appeal and required documents within 30 days after the sponsor receives the decision refusing the permanent-residence visa. The deadline is short and runs from receipt of the refusal, so use the date in the notice and confirm filing instructions immediately.`),
      item(iadRoute
        ? `Which Notice of Appeal forms, refusal records and evidence should a sponsor send to the IAD?`
        : `What documents should I include with a Canadian family sponsorship appeal?`,
      `The sponsor generally files the Notice of Appeal—Sponsorship form, a copy of the refusal letter and the officer’s decision notes if received. Additional evidence may be sent when it addresses the refusal concern. Follow the current IRB form instructions and keep proof of filing.`),
      item(iadRoute
        ? `What relationship evidence can answer an IAD finding that a spouse or partner sponsorship is not genuine?`
        : `How can I respond to a relationship concern in a spousal sponsorship appeal?`,
      `Address every reason in the refusal letter and decision notes with a consistent relationship timeline and evidence. Depending on your history, this may include messages, visits, shared finances or residence, photographs and testimony from people who know the couple. Explain any gaps or contradictions clearly.`),
      item(iadRoute
        ? `How does IAD alternative dispute resolution work in a sponsorship appeal before a full hearing?`
        : `Can the IAD resolve a Canadian sponsorship refusal through ADR instead of a hearing?`,
      `Some sponsorship appeals may be offered an Alternative Dispute Resolution process, where the parties discuss whether the refusal can be resolved without a full hearing. If it does not resolve the case, the IAD may schedule a hearing. Follow the notice for preparation steps and dates.`),
      item(iadRoute
        ? `If the IAD allows or dismisses a sponsorship appeal, what happens to the permanent-residence application next?`
        : `What happens to a sponsored relative's PR application after an IAD appeal decision?`,
      `If the appeal is allowed, IRCC generally resumes processing the sponsored family member’s permanent-residence application, though further eligibility and admissibility checks can remain. If the appeal is dismissed, the refusal stands unless a further court-review route is available and filed on time.`),
      item(iadRoute
        ? `Does the IAD hear appeals of Canadian visitor visa, study permit or work permit refusals?`
        : `Can I use a family sponsorship appeal to challenge a visitor visa or study permit refusal?`,
      `No. An IAD sponsorship appeal is for an eligible refusal of a family member’s permanent-residence visa under the sponsorship process. A refusal of a temporary resident visa, study permit or work permit does not create a sponsorship appeal right; review the decision for any other option.`),
    ];
  }

  if (path.startsWith("/sponsor/")) {
    if (slug.includes("adopted-child")) return [
      item("Who can sponsor an adopted child to Canada for permanent residence?", `A sponsor must generally be an eligible Canadian citizen, permanent resident or registered person who meets the age, residence and undertaking rules. IRCC also assesses whether the adoption meets immigration requirements and is in the child’s best interests.`),
      item("What is the difference between sponsoring an adopted child for PR and applying for Canadian citizenship by adoption?", `The immigration route gives an eligible child permanent residence; the citizenship route can grant citizenship directly to an eligible adopted person. The adoptive parent’s status, the adoption and the child’s intended residence determine which process to use.`),
      item("Does an international adoption need approval from the Canadian province or territory?", `Yes. Intercountry adoption must comply with the child’s country laws and the rules of the province or territory where the adoptive parent lives. Contact the provincial or territorial adoption authority before finalizing the adoption or arranging travel.`),
      item("Which documents are required to sponsor an adopted child for Canadian PR?", `The evidence can include the adoption order, the child’s identity and birth records, proof of the sponsor’s status, consent and custody information, provincial or territorial approval and the required medical-condition statement. Use IRCC’s current adopted-child checklist.`),
      item("Can I sponsor a child I intend to adopt in Canada if the adoption is not final yet?", `In some cases, the immigration process can be coordinated with an adoption that will be finalized in Canada. The child’s country rules and provincial or territorial approval affect the steps, so confirm the process before bringing the child to Canada.`),
      item("Is there a minimum income requirement to sponsor an adopted child to Canada?", `The federal guide says the minimum necessary income requirement does not apply when sponsoring an adopted child who has no children of their own. Other sponsor eligibility and undertaking requirements still apply, and Quebec has separate rules.`),
      item("Can I include the adopted child’s siblings or other relatives in the same sponsorship?", `Each family member must fit the applicable family class definition and be declared as IRCC requires. A sibling does not automatically qualify through the adopted-child process; check the separate orphaned-relative and other-relative rules.`),
      item("Where can I find the official Canadian adopted-child sponsorship forms and adoption process?", `Start with IRCC’s guide for sponsoring adopted children and other relatives, then follow the intercountry adoption process selector and your province or territory’s adoption authority instructions.`),
    ];
    if (slug.includes("orphaned-relatives")) return [
      item("Can I sponsor an orphaned sibling, niece, nephew or grandchild to Canada?", `You may sponsor an orphaned sibling, niece, nephew or grandchild only if the person is related by blood or adoption, under 18, single, and both parents have died. IRCC lists situations that do not qualify, such as abandonment or unknown whereabouts.`),
      item("Can I sponsor an orphaned relative who is over 18 or married?", `The orphaned-relative category requires the person to be under 18 and not married or in a common-law relationship. An adult relative may only fit the separate, narrow “other relative” rule if the sponsor has no qualifying close relatives in Canada to sponsor.`),
      item("Can I sponsor my niece or nephew if one of their parents is still alive?", `No, not under the orphaned-relative rule. IRCC requires both parents to have passed away; a parent being absent, unknown, detained or having abandoned the child does not meet that condition.`),
      item("Who can sponsor an orphaned family member for Canadian permanent residence?", `The sponsor must meet IRCC’s status, age, residence and undertaking requirements. The orphaned relative must meet the relationship, age, marital-status and parent-death rules, and any accompanying family members must be declared.`),
      item("What documents prove an orphaned relative qualifies for Canadian sponsorship?", `Provide civil records establishing the relationship and age, official death records for both parents, identity documents and the forms in IRCC’s current checklist. Documents not in English or French need translations that meet IRCC’s rules.`),
      item("Can an orphaned relative’s spouse or children come to Canada with them?", `If the relative has a spouse, partner or dependent children who will accompany them, IRCC says those family members must be included in the same sponsorship application. They must also meet the applicable examination and document requirements.`),
      item("Does sponsoring an orphaned relative require minimum income in Canada?", `The applicable income and undertaking rules depend on the relative and family size. Use the current IRCC guide and income table rather than assuming the rules for a spouse or dependent child apply.`),
      item("Where are the official forms for sponsoring an orphaned relative to Canada?", `Use IRCC’s guide and application package for adopted children and other relatives. Check the eligibility page and application checklist for the exact relationship before paying fees or submitting a file.`),
    ];
    if (slug.includes("dependent-child")) return [
      item("What is the age limit for a dependent child in Canadian family sponsorship?", `A child generally qualifies as a dependent if they are under 22 and do not have a spouse or common-law partner when IRCC receives the complete application. An older child may qualify if they have depended on a parent since before 22 and cannot financially support themselves because of a physical or mental condition.`),
      item("Can I sponsor my adult child over 22 for Canadian permanent residence?", `An adult child may meet the dependent-child definition only under the disability-related exception and its continuing dependency rules. Check the current IRCC definition and provide supporting medical and financial evidence.`),
      item("Do I need to declare a child who lives with my former spouse in a sponsorship application?", `Yes. IRCC requires applicants to declare family members, including a dependent child in another parent’s custody. The child may need medical and background checks even if they are not accompanying.`),
      item("Can I sponsor my stepchild or my spouse’s child to Canada?", `A spouse or partner’s biological or adopted child may qualify as a dependent child if the age, relationship and dependency requirements are met. Include evidence of the relationship and any custody or consent documents requested.`),
      item("Does a child born in Canada need to be sponsored for permanent residence?", `A child born in Canada is generally a Canadian citizen, subject to limited exceptions. Confirm the child’s citizenship and provide the required birth record; a Canadian citizen is not sponsored for PR.`),
      item("What documents are needed to sponsor a dependent child to Canada?", `Use the child sponsorship checklist. It may require birth or adoption records, identity documents, custody and consent evidence, sponsor information and medical or background documents for family members.`),
      item("Can I include my dependent child in my spouse or parent sponsorship application?", `Whether a child can be included depends on the principal applicant and family sponsorship category. Declare every required family member and follow the specific application package for the relationship being sponsored.`),
      item("Where can I check the official Canadian dependent-child sponsorship age rules?", `Use IRCC’s “who you can sponsor” page and complete guide for a spouse, partner or dependent child. The dependency definition is assessed at the date IRCC receives a complete application.`),
    ];
    if (slug.includes("conjugal-partner")) return [
      item("Who qualifies as a conjugal partner for Canadian sponsorship from outside Canada?", `A conjugal partner must live outside Canada, have been in a genuine conjugal relationship with the sponsor for at least one year, and be unable to marry or live together because of significant barriers. The category is not for couples who simply prefer not to marry or cohabit.`),
      item("What is the difference between a conjugal partner and a common-law partner for Canada PR?", `Common-law partners must have lived together continuously for at least 12 months. A conjugal-partner application is for a partner living outside Canada when serious legal, immigration, social or other barriers prevent marriage or cohabitation.`),
      item("Can I sponsor my conjugal partner if they are already living in Canada?", `The conjugal-partner class is for a partner who lives outside Canada. If you live together in Canada, check whether the spouse or common-law partner in-Canada class fits instead.`),
      item("What proof shows a genuine conjugal relationship for Canadian sponsorship?", `Submit a detailed relationship history and records showing commitment and interdependence over at least one year, plus evidence explaining why marriage or living together was not possible. The exact evidence depends on the barriers and your history.`),
      item("Does a conjugal partner need to be legally unable to marry for Canada sponsorship?", `IRCC assesses whether significant barriers prevented marriage or cohabitation; the reason must be supported with evidence and cannot simply be a personal preference. Explain the circumstances and timeline clearly in the application.`),
      item("Can my conjugal partner work in Canada while sponsorship is processing?", `A conjugal-partner application is processed under the Family Class and does not itself authorize work in Canada. The applicant must qualify for a separate work permit before working.`),
      item("Can I include children in a Canadian conjugal-partner sponsorship application?", `Declare the partner’s dependent children and other family members as required, even if they will not accompany the applicant. Use the current checklist for their identity, custody, medical and background requirements.`),
      item("Where can I find IRCC’s conjugal-partner sponsorship definition and forms?", `Use IRCC’s complete guide for sponsoring a spouse, common-law partner, conjugal partner or dependent child. Follow its relationship definition, document checklist, forms and fee instructions.`),
    ];
    if (slug.includes("inland-sponsorship") || slug.includes("outland-sponsorship") || slug.includes("spousal-common-law") || slug.includes("spousal-and-partner")) {
      const inland = slug.includes("inland");
      const outland = slug.includes("outland");
      const commonLaw = slug.includes("spousal-common-law");
      const mode = inland ? "in-Canada (inland) spousal sponsorship" : outland ? "Family Class (outland) spousal sponsorship" : commonLaw ? "Canadian common-law partner sponsorship" : "Canadian spousal sponsorship";
      const sponsorAbroadAnswer = inland
        ? `The in-Canada class is for eligible couples living together in Canada. A Canadian citizen who lives abroad may be able to sponsor through the Family Class if they plan to return when the partner becomes a permanent resident; a permanent resident must live in Canada to sponsor.`
        : `A Canadian citizen living abroad may sponsor a spouse or partner if they show plans to return to Canada when the relative becomes a permanent resident. A permanent resident must live in Canada to sponsor. The selected class must also match the applicant’s location and relationship.`;
      return [
        item(`Who is eligible for ${mode} and Canadian permanent residence?`, `The sponsor must meet IRCC’s status, age, residence and undertaking requirements, and the relationship must fit the spouse, common-law or partner definition. The applicant must also meet medical, security and background requirements.`),
        item(`What proof of a genuine marriage or common-law relationship does ${mode} need?`, `Use the current checklist and provide records that fit your history, such as a marriage certificate or evidence of at least 12 months of continuous cohabitation for common-law partners. Explain gaps and keep dates consistent across all forms.`),
        item(`For ${mode}, should a couple use the in-Canada class or the Family Class?`, `The in-Canada class is for eligible spouses or common-law partners living together in Canada; the Family Class can cover a spouse or partner inside or outside Canada and is the required class for conjugal partners. Travel plans, status and appeal rights can affect the choice.`),
        item(`Can a sponsor living abroad use ${mode} to bring a spouse or partner to Canada?`, sponsorAbroadAnswer),
        item(`What income or financial requirements apply to ${mode} in Canada?`, `Most spouse and partner sponsorships do not have a minimum necessary income threshold, but exceptions apply when the sponsored person has a dependent child who has a child of their own. Quebec sponsors must also follow Quebec’s separate rules and all sponsors must meet the applicable undertaking requirements.`),
        item(`Can a sponsored spouse or common-law partner get an open work permit during ${mode} processing?`, `A spouse or partner included in a permanent-residence application may qualify if they are living in Canada with the sponsor and meet IRCC’s other conditions. Usually IRCC must issue an AOR first; a limited no-AOR exception applies when status expires within two weeks. A partner outside Canada needs separate authorization to work in Canada.`),
        item(`How long does ${mode} take, and how can I track the IRCC application?`, `Processing time varies with application class, location, completeness and checks. Use IRCC’s current processing-time tool and the correct account or status service for file-specific updates; the posted estimate is not a deadline guarantee.`),
        item(`Which IRCC forms, fees and relationship documents does ${mode} require?`, `Use the current IRCC package for the selected class and relationship. It includes sponsor and applicant forms, fees, identity records and relationship evidence; additional documents depend on country, family and immigration history.`),
      ];
    }
  }

  if (path.startsWith("/inadmissibility-and-appeals/") || ["humanitarian-and-compassionate", "in-canada-refugee-claim", "pre-removal-risk-assessment-prra", "protected-persons-apply-for-pr", "citizenship-revocation-appeal"].some((term) => slug.includes(term))) {
    const topics = {
      "refusal-and-pfl-response": ["a Canadian visa refusal or procedural fairness letter (PFL)", "A refusal is a final negative decision; a PFL is a notice that IRCC is considering a concern and is giving you a chance to respond before deciding. The reason and stage determine the next step.", "Respond to the exact concern in the PFL by its stated deadline, with a clear explanation and supporting records. After a refusal, compare reconsideration, a stronger new application, any statutory appeal, or Federal Court review based on the decision type.", "Submit the letter, application forms, prior evidence and records that answer the officer’s specific concern. For a PFL, organize the response point by point and include certified translations where required.", "There is no single deadline for every PFL; use the date in the letter. Federal Court deadlines can be short and depend on where the decision was made and the case type, so confirm the exact limit immediately.", "A PFL or reconsideration request does not itself extend temporary status or stop a removal order. Check your current permit or order separately and get advice before working or travelling.", "Some decisions can be appealed to the IRB; others may be eligible for Federal Court judicial review. The refusal letter, decision-maker and statutory route determine what is available.", "Keep the refusal or PFL, note the deadline, obtain decision reasons where useful, and address the actual concern before choosing a remedy. A repeat application that does not fix the evidence gap may lead to another refusal."],
      "criminal-inadmissibility-overview": ["criminal inadmissibility to Canada after a charge or conviction", "A foreign charge or conviction may make a traveller inadmissible if Canadian law treats the conduct as an offence. Officers compare the foreign offence with its Canadian equivalent; impaired-driving convictions can be serious criminality.", "The route depends on the conviction, sentence completion date, number and type of offences, and purpose of travel. Possible options include deemed rehabilitation, an individual criminal rehabilitation application or a temporary resident permit when there is a compelling reason.", "Collect certified court dispositions, the statute and offence details, proof that all sentences and probation ended, police records and a complete travel and immigration history. Use IRCC’s current rehabilitation guide for country-specific requirements.", "The waiting period and processing time depend on the option and complete sentence history. Do not calculate eligibility only from the conviction date; check IRCC’s criteria and allow time for the officer’s assessment.", "A visa or eTA application does not erase criminal inadmissibility, and a pending rehabilitation request does not itself authorize entry. Do not travel until you have the required document and understand its conditions.", "The refusal or inadmissibility decision may have a review or appeal route depending on the document and decision-maker. Read the decision and its instructions promptly; not every refusal has an appeal right.", "Before applying for a visa or travelling, identify the Canadian-equivalent offence and choose the correct rehabilitation or TRP route. Disclose the history accurately, including charges that did not result in conviction if the form asks."],
      "criminal-rehabilitation": ["criminal rehabilitation for a past offence when travelling to Canada", "Individual criminal rehabilitation is an application asking Canada to remove criminal inadmissibility from a past offence. Eligibility depends on the Canadian equivalent offence, sentence and time since the entire sentence was completed.", "IRCC generally requires at least five years after completion of all sentences before an individual rehabilitation application. If the offence happened in Canada, a Canadian record suspension may be required instead; some people may qualify for deemed rehabilitation.", "Provide court records for every offence, proof of completed fines, probation and other sentence terms, police certificates, identity documents and the rehabilitation application forms. The country-specific checklist may require additional records.", "The five-year period is measured from completion of the sentence, not simply conviction. Processing time varies by office and file; apply well before planned travel and verify current estimates.", "An approved rehabilitation decision addresses the past criminal inadmissibility but is not a visa or entry guarantee. You still need the correct travel document and must meet all other Canadian entry requirements.", "If IRCC refuses the application, review the decision letter for any available remedy and correct the stated gap before another application. Not every refusal carries a statutory appeal.", "Use IRCC’s criminal rehabilitation guide to confirm eligibility and assemble complete court and sentence records before buying tickets or applying for a visa."],
      "temporary-resident-permit-trp": ["a Canadian Temporary Resident Permit (TRP) for someone inadmissible", "A TRP may let an inadmissible person enter or remain in Canada temporarily when they have a compelling reason and the officer finds the need outweighs the risk. Issuance is discretionary and not guaranteed.", "You must be inadmissible or not meet an IRPA requirement and show a compelling temporary reason to enter or stay. A TRP is different from criminal rehabilitation: it can permit a temporary visit without removing the underlying inadmissibility.", "Explain the purpose, duration and necessity of travel, disclose the inadmissibility, and provide supporting evidence such as an invitation, event records, family or business documents and prior immigration decisions. Follow the application route for your location.", "There is no guaranteed processing time or approval. Apply through the correct visa or port-of-entry process for your circumstances, and do not assume an application will be decided before travel.", "A TRP is temporary and its conditions and validity control what you may do. A TRP lasting at least six months may be relevant to separate work or study permit applications, but it does not automatically authorize work or study.", "A refused TRP may have limited review options depending on where and how it was refused. Read the written decision and obtain prompt legal advice if a deadline or removal issue applies.", "Check IRCC’s current TRP eligibility and application instructions, explain why the travel is compelling, and disclose the full inadmissibility history."],
      "record-suspension-pardon": ["a Canadian record suspension or pardon for immigration to Canada", "A record suspension is a Canadian process handled by the Parole Board of Canada; it is not the same as IRCC criminal rehabilitation for a foreign conviction. For a Canadian conviction, a valid pardon or record suspension can affect immigration admissibility.", "If the offence occurred in Canada, check whether you need a record suspension under Canadian law. If it occurred abroad, IRCC may require criminal rehabilitation or may assess deemed rehabilitation; identify the jurisdiction before choosing a route.", "Gather the court disposition, police records, proof of sentence completion and the documents required by the Parole Board or IRCC process that applies. Do not substitute a local “pardon” certificate without confirming its effect under Canadian law.", "Parole Board processing and IRCC assessment are separate and can take time. Confirm eligibility and timing with the responsible agency before travel or a visa application.", "A record suspension does not itself grant a visa, eTA or permission to enter Canada. Declare the conviction when required and carry the official decision if travelling.", "Use the review or appeal process stated by the Parole Board or IRCC decision-maker. The remedy depends on which application was refused.", "Confirm whether the conviction was Canadian or foreign, then follow the Parole Board or IRCC guide for that exact situation."],
      "deemed-rehabilitation": ["deemed rehabilitation for a past offence when entering Canada", "Deemed rehabilitation means IRCC may consider a person rehabilitated by operation of law after enough time has passed, if the offence and sentence meet the statutory conditions. It is not an application approval issued in advance.", "Eligibility depends on the Canadian equivalent, how many offences there were, the maximum Canadian sentence and when every part of the sentence ended. Some serious offences, including certain impaired-driving cases, do not qualify under the usual rule.", "Carry court dispositions, proof that fines and probation ended, police certificates and any legal documents needed to show the Canadian-equivalent offence. IRCC recommends checking with the responsible office before travel if the assessment is complex.", "Time is measured from completion of the full sentence, not just the conviction. The applicable period varies by the offence and history; use IRCC’s current eligibility guidance rather than a single rule of thumb.", "Do not assume that time passing guarantees boarding or admission. A visa officer or border officer may assess whether the legal conditions are met, and you must still satisfy other entry rules.", "If an officer decides you are not deemed rehabilitated, review the written decision and consider whether individual rehabilitation or a TRP is available. Any appeal depends on the decision type.", "Compare the offence and sentence against IRCC’s current deemed-rehabilitation rules before applying for a visa or travelling."],
      "medical-inadmissibility": ["medical inadmissibility to Canada after an immigration medical exam", "IRCC may find a person inadmissible for a health condition that creates a public-health or public-safety risk, or—under some immigration classes—excessive demand on health or social services. The rules and exceptions depend on the application class.", "There is no general medical rule that automatically excludes every diagnosis. The officer assesses the medical evidence under the applicable standard, and some groups are exempt from the excessive-demand assessment.", "Follow the medical request, disclose relevant history truthfully and provide specialist reports or treatment evidence requested by the panel physician or IRCC. If IRCC sends a procedural fairness letter, answer its specific concern by the stated date.", "The response deadline is the one in IRCC’s letter. Medical review time depends on specialist reports and reassessment; use your account for requests and do not rely on an old estimate.", "A medical inadmissibility concern does not by itself grant or cancel work or visitor status. Continue to follow the conditions on your current document and any decision or request from IRCC.", "Review rights depend on the application and decision. A refusal may be eligible for judicial review, while a fairness response is an opportunity to provide evidence before the final decision.", "Read the medical letter carefully, obtain the requested clinical evidence, and check whether an exemption or procedural fairness response applies to your class."],
      "financial-inadmissibility": ["financial inadmissibility to Canada under Canadian immigration rules", "Financial inadmissibility can apply when an officer is not satisfied that a person can or will support themselves and accompanying dependants without relying on social assistance, subject to the program and legal exceptions.", "The required funds depend on the application category, family size and purpose of travel. A study permit, visitor visa, family sponsorship and economic PR application use different financial tests; there is no single Canada-wide amount for every applicant.", "Provide bank statements, income records, sponsor support and a clear explanation of where funds came from and how they will cover the stated costs. Match the evidence to the exact program checklist.", "Answer any IRCC request by its stated date. Processing time depends on the application and whether the officer needs more evidence; check the live status tool for your category.", "A financial concern does not itself authorize work or extend status. Follow your existing permit conditions while the application is pending.", "A refusal may have a reconsideration, new-application or judicial-review route depending on the decision. Check the refusal reasons and deadline before choosing one.", "Identify the financial test for your exact class, calculate funds for the full family and period, and document both available money and its source."],
      "misrepresentation": ["misrepresentation in a Canadian immigration application or IRCC interview", "Misrepresentation can include directly or indirectly giving false information or withholding a material fact that could affect an immigration decision. The applicant remains responsible for the information in the file, even when a representative prepared it.", "IRCC assesses whether the information was material and whether the statutory test applies to the circumstances. If you receive a procedural fairness letter, it is an opportunity to address the concern before a final decision.", "Compare the allegation with the submitted forms and original records. Provide a clear timeline, corrected information and reliable documents; explain any translation, clerical or representative error with evidence rather than ignoring it.", "A PFL response deadline is stated in the letter and can be short. A finding may lead to refusal and a five-year inadmissibility period, so verify the exact dates and decision consequences immediately.", "A pending response does not extend status or authorize work. Follow current permit conditions and do not leave Canada based on an assumption about what a new filing will do.", "After a final decision, the available remedy depends on the case and decision-maker. Some matters may be reviewed by the Federal Court; check the decision letter and filing deadline promptly.", "Preserve the entire application record, obtain the refusal or fairness letter, and respond accurately to each alleged omission or inconsistency."],
      "admissibility-hearing": ["a Canadian immigration admissibility hearing before the IRB", "An admissibility hearing is a proceeding before the Immigration Division of the IRB to decide whether a person is inadmissible under immigration law and what order, if any, should follow.", "The Minister must establish the legal ground in issue under the applicable standard. The result depends on the allegation, evidence, immigration status and any statutory exception or defence.", "Review the section 44 report, disclosure, identity and status records, and evidence that answers the allegation. Bring translations and follow the IRB’s filing and disclosure directions.", "Hearing dates and disclosure deadlines come from the IRB. Treat every notice as time-sensitive and confirm the schedule with the tribunal or counsel.", "Do not assume that a hearing or appeal automatically preserves status, work authorization or the right to remain. The order and any statutory stay control; confirm them in writing.", "Some people can appeal an admissibility decision or removal order to the IAD; others must seek Federal Court review. Eligibility turns on status and the type of order.", "Read the hearing notice and disclosure, prepare evidence for each legal issue, and confirm appeal rights and deadlines before the hearing concludes."],
      "detention-review": ["an immigration detention review hearing in Canada", "The IRB Immigration Division reviews whether a person detained under immigration law should remain detained or be released with conditions. CBSA must justify continued detention under the statutory grounds.", "The member considers identity, danger, likelihood of appearing, compliance history, duration and reasons for detention, and alternatives to detention such as a bondsperson or reporting conditions.", "Prepare identity records, proposed release plans, a bondsperson’s details, address and support arrangements, and evidence that answers CBSA’s reasons for detention.", "The first review is generally within 48 hours, the next within 7 days, and later reviews every 30 days if detention continues. The IRB may hold an earlier review if circumstances change.", "A release order may include conditions such as reporting, residence or a bond. Follow every condition; a detention review does not itself decide a refugee claim or permanent-residence application.", "The review hearing is the process for challenging continued detention. Separate judicial review options may exist in specific circumstances; act on the tribunal’s order and seek advice promptly.", "Contact counsel or legal aid immediately, obtain the detention record and prepare a practical release plan for the next hearing."],
      "removal-order": ["a Canadian immigration removal order and its legal consequences", "A removal order directs a person to leave Canada. It may be a departure, exclusion or deportation order, and the consequences—including whether permission is needed to return—depend on the order type and whether it is enforced.", "The decision, status and legal ground determine which order applies and whether the person has an appeal right. Read the order itself; do not infer the type from a verbal explanation.", "Keep the order, identity documents, travel records, notices and proof of any departure or appeal filing. Use the CBSA or IRB instructions for the specific enforcement or appeal process.", "Deadlines for an appeal or court application can be short, and departure requirements may apply. Follow the date on the order and confirm the exact appeal deadline immediately.", "A removal order can affect the right to remain, work and return to Canada. Filing a review does not always suspend removal; confirm whether a statutory stay or court order applies.", "Some permanent residents and protected persons can appeal certain orders to the IAD; other people may have different review rights. The order and decision-maker determine the route.", "Get a copy of the complete order, confirm whether it is in force, and obtain advice on appeal, departure and any authorization to return before acting."],
      "stay-of-removal": ["a stay of removal from Canada while an immigration case is reviewed", "A stay of removal is an order that temporarily prevents removal while a court or tribunal considers a related proceeding. Filing an application for review does not always create a stay automatically.", "The court or tribunal applies its legal test to the specific record, urgency and potential consequences. A stay is temporary relief, not a decision granting permanent residence or overturning the underlying refusal.", "Prepare the removal date, decision under review, supporting affidavits, evidence of irreparable harm and the materials required by the court rules. The filing must follow the correct urgent procedure.", "A stay request is urgent and must be filed before removal; no general timeline should be assumed. Follow the court’s current practice direction and the date in CBSA notices.", "Only an issued stay order changes the removal position. Keep following all existing status and reporting conditions and obtain a copy of any court order.", "A stay motion is normally tied to a Federal Court application for leave and judicial review or another proceeding. Confirm the procedural steps with the current court rules.", "If removal is scheduled, contact qualified counsel immediately, preserve the notice and decision, and verify whether a stay has actually been granted."],
      "deferral-request": ["a CBSA deferral request to delay removal from Canada", "A deferral request asks CBSA to postpone enforcing a removal order for a short period. It is an administrative request and is not the same as a court stay or an appeal of the order.", "There is no guaranteed entitlement to a deferral. CBSA considers the facts, enforcement policy and whether another legal process or new information affects the timing.", "Submit the removal order, proposed date, evidence supporting the specific reason for delay and records of any pending application or court proceeding. Follow CBSA’s instructions for where and how to send it.", "Make the request as early as possible before the scheduled removal. It does not automatically stop removal; confirm in writing if CBSA has granted a deferral.", "Until CBSA confirms a delay or a court issues a stay, assume the removal order remains enforceable. A deferral does not itself restore status or authorize work.", "A deferral request does not replace an appeal or judicial review. Use the decision letter and court or tribunal rules to identify any separate remedy and deadline.", "Send a complete, focused request with supporting evidence and urgently confirm the enforcement date and written decision with CBSA."],
      "arc-authorization-to-return-to-canada": ["an Authorization to Return to Canada (ARC) after a removal order", "An ARC is written permission that some people need before returning to Canada after a removal order. Whether you need one depends on the type of order and how you left Canada.", "IRCC considers the removal reason, time elapsed, current circumstances, reason for return and whether removal costs were paid by CBSA. A deportation order generally has different return consequences from a departure or exclusion order.", "Submit a detailed explanation in English or French, proof of the relevant removal and departure, supporting evidence for the reason to return, and the fee. If CBSA paid removal costs, repayment may also be required if the ARC is approved.", "There is no guaranteed processing time or approval. Apply with the temporary or permanent-residence application where the official instructions require it and allow time before planned travel.", "An ARC is permission to return, not a visa or entry guarantee. You must still qualify for the visa, permit or PR application and satisfy border requirements.", "If an ARC is refused, check the decision notice for any available review and correct what the officer identified before applying again.", "Check the removal-order type and IRCC’s ARC guide before booking travel; include the explanation letter and all required fees and records."],
      "sponsorship-appeal": ["an appeal to the IRB after a Canadian family sponsorship refusal", "A sponsor may be able to appeal an IRCC refusal of a family-class sponsorship to the Immigration Appeal Division. Some refusal grounds, including certain serious inadmissibility findings, can limit appeal rights.", "The sponsor must have a statutory right of appeal for that decision. The appeal is generally about whether the refusal was legally or factually wrong or whether humanitarian and compassionate considerations justify special relief.", "Include the refusal letter, application record, relationship evidence and documents addressing the officer’s reasons. Follow IRB disclosure rules and deadlines for any new evidence.", "The notice of appeal must generally be filed within 30 days after the sponsor receives the refusal; check the letter and current IRB instructions immediately for the exact date and process.", "An appeal does not automatically give the sponsored person temporary status or permission to work in Canada. Check their current status and any separate permit eligibility.", "The IAD may allow an appeal, dismiss it or refer the matter back to IRCC. If no appeal right exists, a Federal Court review may be the route to assess.", "File the notice on time, obtain the complete refusal reasons and prepare evidence that answers each concern in the decision."],
      "removal-order-appeal": ["appealing a Canadian removal order to the Immigration Appeal Division", "Some permanent residents and protected persons have a right to appeal a removal order to the IAD. Other foreign nationals may not have that right, so status and the legal ground matter.", "The IAD reviews the order under the applicable appeal grounds, which can include a legal error, a factual error or—where permitted—humanitarian and compassionate considerations.", "Submit the removal order, the written reasons, identity and status documents and evidence relevant to the appeal ground. Follow the IAD’s forms, disclosure and hearing directions.", "The appeal deadline is usually short; the IAD’s removal-order appeal instructions generally require filing within 30 days of receiving the order. Confirm the exact deadline for your order immediately.", "Whether removal is stayed depends on the person’s status and appeal type. Do not assume that filing an appeal or court application stops enforcement; confirm the applicable stay rule.", "If you lack an IAD appeal right, judicial review may be available in the Federal Court. The decision and order specify which process to examine.", "File the correct appeal notice by the deadline and get advice on whether the order is stayed while the IAD decides."],
      "residency-obligation-appeal": ["appealing a PR residency-obligation decision after a PRTD refusal", "A permanent resident is generally required to be physically present in Canada for at least 730 days in each five-year period, subject to specific days abroad that may count. A negative residency decision can be appealed to the IAD in eligible cases.", "The IAD can examine whether the residency obligation was met and, where allowed, humanitarian and compassionate factors affecting the permanent resident or child. Calculate the correct five-year period and document any qualifying time abroad.", "Provide passports, travel history, employment and residence records, evidence of accompanying a Canadian citizen or qualifying employer, and any humanitarian evidence relevant to the appeal.", "The appeal deadline is stated in the refusal notice and is often 60 days for a residency-obligation decision. Confirm the exact date and current IRB instructions as soon as the decision arrives.", "A PRTD appeal does not itself provide a travel document. Follow the appeal process and check what document is needed to board travel to Canada.", "The IAD may allow the appeal, dismiss it or grant special relief where authorized. A Federal Court review may be considered after an IAD decision under a separate deadline.", "Download the travel history, read the refusal reasons and file the notice of appeal within the deadline shown by IRCC or the IRB."],
      "judicial-review-federal-court": ["Federal Court judicial review of a Canadian immigration refusal", "Judicial review asks the Federal Court to examine whether an immigration decision was lawful, reasonable and procedurally fair. It is not a new application where the judge simply reassesses all evidence from scratch.", "A person must identify a reviewable decision and an arguable legal or fairness error. The Court first decides whether to grant leave; if leave is granted, it holds the judicial-review hearing.", "Prepare the decision and reasons, application record, relevant correspondence and evidence needed under the Federal Court Rules. The record and filing format depend on whether the decision was made inside or outside Canada.", "Federal Court immigration deadlines can be 15 days for a decision made in Canada and 60 days for one made outside Canada, subject to the exact statutory route. Confirm the date and rule immediately.", "A judicial-review application does not always stop removal or extend temporary status. A separate stay motion or statutory stay may be needed; confirm the effect for the decision under review.", "The Court may dismiss the case or return the matter to the decision-maker for redetermination; it generally does not directly grant the visa or PR application.", "Read the decision date, identify the inside/outside-Canada route and get the court record filed within the applicable deadline."],
      "stay-motion": ["a Federal Court stay motion to stop removal from Canada", "A stay motion asks the Federal Court for urgent temporary relief that pauses removal while it considers an immigration judicial-review application. The Court uses a legal test and the outcome is not guaranteed.", "The motion must show a serious issue, irreparable harm if removal proceeds and that the balance of convenience supports a stay, based on the evidence and current case law.", "Prepare sworn evidence, the removal schedule, the decision being challenged, the judicial-review materials and the court-required motion record. The evidence must explain concrete harm rather than rely on general statements.", "File urgently before the scheduled removal and follow the Federal Court’s current practice directions. Deadlines are case-specific; a pending request to CBSA is not a substitute for a court order.", "Only a stay granted by the Court pauses removal. It does not itself grant status, work authorization, a visa or permanent residence.", "The motion is related to judicial review, which has its own 15-day or 60-day filing period depending on where the decision was made. Confirm both processes separately.", "Obtain the removal date and decision immediately, contact counsel, and confirm in writing whether the Court has issued an order."],
      "mandamus-application": ["a mandamus application in Federal Court for a delayed IRCC decision", "Mandamus is a court remedy that may require a public decision-maker to perform a legal duty, such as deciding an application. It does not direct IRCC to approve the application.", "The applicant must establish the legal test, including a public duty to decide, an unreasonable delay, a prior demand for action and no adequate alternative remedy. The facts and delay period are assessed case by case.", "Keep the application receipt, status history, IRCC correspondence, any webform requests, evidence of prejudice from the delay and a clear chronology showing what steps you took to seek a decision.", "There is no automatic number of months that guarantees mandamus. Allow for the program’s normal processing, complexity and any background checks, and check the current Federal Court guidance before filing.", "A mandamus case does not itself grant temporary status, work authorization or PR. Maintain any separate permit and respond to IRCC requests while the court matter proceeds.", "The Court may order IRCC to decide within a period or dismiss the application; it does not usually substitute its own eligibility decision.", "Check that the application is complete and outside normal processing expectations, make a documented request for action, then assess court options with counsel."],
      "in-canada-refugee-claim": ["making an in-Canada refugee claim for protection in Canada", "A refugee claim asks Canada to protect a person who meets the Convention refugee or person-in-need-of-protection definition. IRCC or CBSA first screens the claim for eligibility before the IRB Refugee Protection Division decides it.", "A claimant must meet the legal protection definition and be eligible to have the claim referred to the IRB. Since March 26, 2026, a statutory ineligibility rule applies to claims made on or after June 3, 2025: a claim may not be referred to the IRB if it is made more than one year after the claimant’s first entry into Canada after June 24, 2020, even if the person later left and returned. Exceptions and other eligibility rules may apply, so confirm the current IRCC criteria for the exact facts.", "Prepare identity and travel documents, a consistent account of events, evidence supporting the risk, family information and any documents translated into English or French. Follow the Basis of Claim form instructions and hearing deadlines.", "The IRCC or CBSA notice and IRB schedule set the filing and hearing deadlines. Respond promptly to an eligibility interview, form request or hearing notice; late filing can affect the claim.", "A pending claim may affect removal and work-permit eligibility under specific rules, but it does not guarantee status or permission to work. Follow the documents issued and current IRCC conditions.", "A negative IRB decision may be challenged at the Federal Court within a short deadline, commonly 15 days for a decision made in Canada. Confirm the exact date and whether removal is stayed.", "Use the official refugee-claim process, meet every Basis of Claim and hearing deadline, and get legal help quickly if the claim is found ineligible or refused."],
      "pre-removal-risk-assessment-prra": ["a Pre-Removal Risk Assessment (PRRA) before removal from Canada", "A PRRA is a risk assessment for certain people facing removal who are invited to apply. It considers whether return would expose the person to persecution, torture, risk to life or cruel and unusual treatment, based on the legal test.", "Not everyone facing removal can apply immediately. CBSA or IRCC must notify you that you may apply, and bars or prior decisions can affect eligibility; follow the notice rather than sending an unsolicited application.", "Submit the PRRA forms, a personal statement and current country-condition or personal evidence that was not previously assessed, with required translations. Follow the package’s instructions about what evidence can be considered.", "The notice provides the application deadline, which can be very short. Filing a PRRA can affect removal only under the statutory rules and exceptions; confirm whether a stay applies in your case.", "A timely first PRRA applicant may be able to keep working on an existing work permit until expiry or apply for a work permit while waiting for a decision; a permit must be issued before work begins. Late or repeat PRRA applications do not provide this work option. A pending PRRA does not itself grant permanent residence.", "A negative PRRA may be challenged by Federal Court judicial review, with a short filing deadline. A pending review does not always stop removal; ask about any stay requirement.", "Keep the CBSA notice, meet the stated deadline and submit focused, up-to-date evidence addressing the specific risk on return."],
      "protected-persons-apply-for-pr": ["applying for Canadian permanent residence as a protected person", "A person recognized by the IRB as a Convention refugee or person in need of protection, or granted protected status after a positive PRRA, may apply for permanent residence through IRCC’s protected-person pathway.", "You must have protected-person status and not already be a permanent resident or fall within specified exclusions. Some designated foreign nationals face a waiting period; check the current guide for your status.", "Include the protected-person PR forms, identity and civil-status records, family details and documents requested in the guide. Declare all family members, including those not accompanying, and follow medical and background-check instructions.", "IRCC’s posted estimate varies by location and is not a guaranteed decision date. The application can take longer if records, admissibility checks or family documents are incomplete.", "Eligible applicants may qualify for work authorization while PR is processing under separate rules. Apply for or extend the correct permit; a pending PR file alone does not authorize work.", "If IRCC refuses the application, use the refusal notice to identify any appeal or judicial-review option and its deadline. A refusal does not automatically cancel protected-person status in every case.", "Use IRCC’s protected-person PR guide and submit a complete file with every required family member declared."],
      "humanitarian-and-compassionate": ["a Canadian permanent residence application on humanitarian and compassionate (H&C) grounds", "H&C is an exceptional, discretionary request for an exemption from certain immigration requirements so a person can apply for permanent residence. IRCC considers the circumstances case by case, including establishment, family ties, children’s best interests and hardship.", "The applicant must meet the current H&C eligibility rules and explain the specific exemption requested. H&C is not a substitute for a regular family, economic or protected-person class and cannot assess persecution or risk to life.", "Provide a detailed personal history, evidence of establishment and family ties, records about affected children, country or hardship evidence and documents supporting each requested exemption. Use the current guide and translate records as required.", "There is no guaranteed processing time. Only one H&C application can generally be under consideration at a time; a 12-month bar may apply after a negative refugee decision, subject to stated exceptions.", "An H&C application does not automatically stop a removal order or give temporary status or work authorization. Follow the order and obtain a separate stay or permit if available.", "There is no statutory appeal from a refused H&C PR application, though Federal Court judicial review may be available within a short deadline.", "Check that no other PR class or bar applies, identify the exact exemption sought and support the request with specific evidence rather than hardship assertions alone."],
      "citizenship-revocation-appeal": ["a Canadian citizenship revocation notice for alleged fraud or misrepresentation", "IRCC may start revocation proceedings if it believes citizenship was obtained by fraud, misrepresentation or knowingly hiding material information. A Request for Information is an early notice, not a final revocation decision.", "The notice explains the allegations and response process. The person may provide evidence and, in many cases, can choose whether the Federal Court or the Minister decides the revocation case; follow the current notice and legal rules.", "Submit the Request for Information or Notification Letter, the original citizenship and immigration records, corrected facts and documents addressing each allegation. Keep proof of delivery and translations that meet IRCC’s requirements.", "IRCC’s current process gives 30 days to respond to a Request for Information and 60 days to respond to a Notification Letter. The actual date in the notice controls, so calendar it immediately.", "A revocation notice does not by itself tell you whether you can travel or use a passport; check your current citizenship documents and the notice. Ask IRCC or counsel before taking steps that depend on citizenship status.", "The Federal Court is generally the decision-maker unless the person requests the Minister to decide. The notice explains the process and any available way to challenge a final decision; do not assume an appeal is automatic.", "Read the notice, identify whether it is a Request for Information or Notification Letter, and send a complete response by its deadline. IRCC says a revoked person generally must wait 10 years before applying for citizenship again."],
    };
    const config = topics[slug];
    if (config && config[0]) {
      const [label, meaning, criteria, process, documents, timing, status, review, next] = config;
      const faqLabel = label
        .replace("making an in-Canada refugee claim for protection in Canada", "an in-Canada refugee protection claim")
        .replace("applying for Canadian permanent residence as a protected person", "permanent residence as a protected person")
        .replace("a Canadian permanent residence application on humanitarian and compassionate (H&C) grounds", "an H&C permanent residence application from inside Canada")
        .replace("appealing a Canadian removal order to the Immigration Appeal Division", "an Immigration Appeal Division appeal of a Canadian removal order")
        .replace("appealing a PR residency-obligation decision after a PRTD refusal", "an IAD appeal of a PR residency-obligation decision after a PRTD refusal");
      const nextStep = next || `Read the notice carefully, note the decision date and response deadline, and use the official instructions for the exact process. Keep copies of everything submitted and confirm separately whether your status or any removal order is affected.`;
      return [
        item(`What is ${faqLabel}, and when might this process apply?`, meaning),
        item(`What rules apply to ${faqLabel} under Canadian immigration law?`, criteria),
        item(`How do I apply or respond to ${faqLabel}?`, process),
        item(`What documents and evidence should I prepare for ${faqLabel}?`, documents),
        item(`What deadline or processing time applies to ${faqLabel}?`, timing),
        item(`Can I stay, work or travel in Canada while I await a decision about ${faqLabel}?`, status),
        item(`Can I appeal or request a review after a decision about ${faqLabel}?`, review),
        item(`What should I do after receiving a notice or decision about ${faqLabel}?`, nextStep),
        item(`Where can I find the official Canadian forms and instructions for ${faqLabel}?`, `Use the current instructions from the agency named in your notice. IRCC, CBSA, the IRB and the Federal Court each control different steps, so follow the guide that matches your exact decision and status.`),
      ];
    }
  }

  if (path.startsWith("/citizenship/") && slug === "citizenship-resumption") return [
    item("Who can apply to resume Canadian citizenship after losing or renouncing it?", `A former citizen may apply if they became a permanent resident after losing citizenship and meet the current resumption requirements. If you may still be a citizen because of a law change, check whether you need a citizenship certificate instead of resumption.`),
    item("What are the requirements to resume Canadian citizenship as a permanent resident?", `You generally must have become a permanent resident after losing citizenship, have no unfulfilled PR conditions, be physically present in Canada as a permanent resident for at least 365 days in the two years before applying, and meet the prior tax-filing requirement. Other prohibitions can make you ineligible; check the current guide.`),
    item("How many days must I live in Canada before applying to resume citizenship?", `Most applicants must have at least 365 days of physical presence in Canada as a permanent resident during the two years immediately before applying. Canadian Armed Forces members can have a separate fast-track rule; use IRCC’s current eligibility page for your case.`),
    item("What documents do I need for a Canadian citizenship resumption application?", `Gather proof of identity, the record showing how citizenship was lost, current permanent-resident documents and any physical-presence, tax or language evidence required by IRCC.`),
    item("Can I apply for a citizenship certificate instead of resuming Canadian citizenship?", `If you may still be a Canadian citizen, you may need proof of citizenship rather than resumption. Compare the facts and current citizenship-by-descent rules before selecting the application.`),
    item("Can I travel while my Canadian citizenship resumption application is processing?", `Travel does not itself end a pending application, but you must maintain any required status and be available for IRCC requests, tests or an oath if scheduled. Keep a valid document for return to Canada.`),
    item("How long does IRCC take to process a citizenship resumption application?", `Processing changes with inventory and case complexity. Check the current IRCC estimate for the exact application type and keep your mailing and contact information updated.`),
    item("Where can I find the official Canadian citizenship resumption form and guide?", `Use IRCC’s current citizenship resumption application guide and confirm whether your circumstances call for resumption, a citizenship grant or a citizenship certificate.`),
  ];

  if (path.startsWith("/citizenship/") && slug === "citizenship-renunciation") return [
    item("How do I voluntarily renounce Canadian citizenship, and who can apply?", `Generally, you must be at least 18, live outside Canada, be or become a citizen of another country, understand the effect of renunciation and not be subject to citizenship-revocation proceedings. IRCC has a separate package for people who automatically became citizens under changes to the Citizenship Act.`),
    item("Do I need another citizenship before I can renounce Canadian citizenship?", `You generally must be or become a citizen of another country so that renunciation does not make you stateless. Provide proof of that citizenship under the current IRCC checklist.`),
    item("Can a Canadian permanent resident or foreign national renounce Canadian citizenship?", `Only a Canadian citizen can renounce Canadian citizenship. If you are unsure whether you are a citizen, apply for proof of citizenship or confirm your status before submitting a renunciation request.`),
    item("What documents are required for a Canadian citizenship renunciation application?", `The evidence can include proof of Canadian citizenship, identity documents, proof of another nationality and the completed renunciation forms. Use the current IRCC guide for any age or representative requirements.`),
    item("Can a child under 18 renounce Canadian citizenship, and what consent rules apply?", `A minor’s application has additional consent and legal-representation requirements. Check IRCC’s current rules for the child’s age and guardians before filing.`),
    item("What happens to my Canadian passport after I renounce citizenship?", `After renunciation is approved, you are no longer a Canadian citizen and cannot rely on a Canadian passport as a citizen. Follow IRCC and Passport Canada instructions about existing citizenship documents.`),
    item("Can I regain Canadian citizenship after I formally renounce it to another country?", `A former citizen may be able to apply to resume citizenship if they meet the current legal requirements, but approval is not automatic. Check IRCC’s resumption guide before making a decision to renounce.`),
    item("Where can I find the official Canadian citizenship renunciation process and fees?", `Use IRCC’s citizenship renunciation guide and current fee list. Review the consequences and obtain independent advice if renunciation could affect your status, travel or family.`),
  ];

  if (path === "/citizenship/pr-card-replacement") return [
    item("How do I replace a lost, stolen or damaged Canadian PR card?", `A permanent resident in Canada can apply for a replacement PR card using IRCC’s current process and explain whether the card was lost, stolen or damaged. A PR card is proof of status and a travel document for commercial return to Canada.`),
    item("Can I replace a Canadian PR card while I am living outside Canada?", `IRCC generally issues PR cards to permanent residents in Canada. If you are outside Canada without a valid card and need to return on a commercial carrier, check whether you must apply for a permanent resident travel document instead.`),
    item("What documents do I need to replace a Canadian permanent resident card?", `Use the current PR-card checklist. It can require identity and status evidence, travel history, photos and details of the lost or damaged card; follow IRCC’s instructions for a card reported stolen.`),
    item("Does a lost PR card mean I have lost permanent resident status in Canada?", `No. A PR card is evidence of status; losing or expiring the card does not itself cancel permanent-resident status. You must still meet the residency obligation and carry valid travel documents.`),
    item("Can I travel to Canada if my PR card is lost or expired?", `Permanent residents usually need a valid PR card or PRTD to board a commercial flight, bus, train or boat to Canada. Confirm the right travel document before booking and check your residency obligation.`),
    item("How long does it take IRCC to replace a Canadian PR card?", `Processing varies with the application volume and whether IRCC needs more evidence. Check the current PR-card processing-time tool and avoid booking travel around an estimate.`),
    item("Do I need to report a stolen Canadian PR card before applying for a replacement?", `Follow IRCC’s current lost or stolen card instructions and provide any police or incident report requested. Keep the report and card details with your replacement application.`),
    item("Where are the official forms and fees to replace a PR card in Canada?", `Use IRCC’s PR-card application guide for a replacement, renewal or first card. Confirm the current photo specifications, fee and checklist before submitting.`),
  ];

  return null;
}

function candidateFaqItems(page) {
  const { path, slug, h1 } = pageTopic(page);
  const family = faqFamily(page);
  const entity = faqEntity(page);
  const ircc = "https://www.canada.ca/en/immigration-refugees-citizenship/services";
  const source = (question, answer, sourceLinks = []) => ({ question, answer, ...(sourceLinks.length ? { sourceLinks } : {}) });
  const description = String(page?.metaDescription || page?.description || page?.seo?.description || "").trim();
  const lead = (Array.isArray(page?.contentBlocks) ? page.contentBlocks : []).find((block) => block?.type === "paragraph" && String(block.text || "").trim().length > 80)?.text?.trim();
  const pageSummary = lead || description || `Eligibility and documents depend on the exact ${entity} route and your circumstances.`;

  const routeFaqs = routeSpecificFaqItems(page);
  if (routeFaqs) return routeFaqs;

  if (slug.includes("global-talent-stream")) return [
    source(`What is Canada’s Global Talent Stream, and which employers can use it to hire a foreign worker?`, `The Global Talent Stream (GTS) is an LMIA stream for eligible Canadian employers hiring highly skilled temporary foreign workers. Employers apply through Category A for a unique and specialized position with a designated referral, or Category B for an occupation on the Global Talent Occupations List.`),
    source(`Does a Category A Global Talent Stream application need a designated referral partner?`, `Yes. The employer must be referred by a designated partner, and the referral form must accompany the application. The partner must validate the company’s innovation, growth potential and need for a unique and specialized worker.`),
    source(`Which occupations qualify for Category B of the Global Talent Stream in Canada?`, `Category B is for positions in occupations on the current Global Talent Occupations List. Check the live ESDC list and stream guide before submitting because the eligible occupation list and application rules can change.`),
    source(`What wage and recruitment rules apply to a Global Talent Stream LMIA?`, `Employers must offer the applicable prevailing wage and meet the wage conditions for the selected category. The GTS has no minimum recruitment requirement, but employers are encouraged to recruit Canadians and permanent residents and must describe recruitment efforts when requested.`),
    source(`Does the Global Talent Stream require a Labour Market Benefits Plan (LMBP)?`, `Yes. The employer must develop a plan with ESDC and commit to the category’s mandatory benefit plus at least two complementary benefits. Category A’s mandatory benefit focuses on job creation; Category B’s focuses on skills and training investment.`),
    source(`Does a Global Talent Stream LMIA guarantee a two-week Canadian work permit?`, `No. A positive LMIA does not itself grant a work permit, and faster processing depends on the worker meeting the separate Global Skills Strategy requirements. The employer and worker must follow the current LMIA and work-permit steps.`),
    source(`What employer compliance duties continue after hiring through the Global Talent Stream?`, `Employers must keep the approved job, wage and working conditions, comply with the TFW Program and maintain records. ESDC may inspect compliance and impose consequences for violations.`),
    source(`What does a worker submit after the employer receives a positive Global Talent Stream LMIA?`, `The employer provides the worker with the positive LMIA decision and signed employment agreement. The worker then submits a separate work-permit application to IRCC with the required documents and fees.`),
  ];

  if (slug.includes("tfwp-employer-compliance")) return [
    source(`What are an employer’s Temporary Foreign Worker Program (TFWP) compliance obligations in Canada?`, `Employers must meet the LMIA decision, its annexes, the job offer and regulatory conditions. They must provide the promised job, wages and working conditions and comply with federal, provincial and territorial employment laws.`),
    source(`How long must a Canadian employer keep Temporary Foreign Worker Program records?`, `For LMIA-based TFWP hiring, ESDC requires employers to keep relevant program records for six years from the first day of the employment period for which the work permit was issued. Check the current employer guide for the exact records.`),
    source(`Can Service Canada inspect a Canadian employer after hiring a temporary foreign worker?`, `Yes. Inspections may be announced or unannounced, on-site or virtual, and can take place during employment or later. Inspectors can interview employers and workers and review records that show whether the program conditions were followed.`),
    source(`Can an employer charge or recover recruitment fees from a temporary foreign worker?`, `No. Employers must not charge or recover recruitment fees from temporary foreign workers directly or indirectly. The employer is responsible for ensuring that any recruiter acting on its behalf follows the same rule.`),
    source(`What must an employer do if a temporary foreign worker’s job or work conditions change?`, `The employer must promptly report errors or changes to approved LMIA details and follow the current program instructions. Do not change the worker’s job, wage or conditions in a way that conflicts with the approval or permit.`),
    source(`How can a Canadian employer respond to a notice of preliminary finding of non-compliance?`, `The employer can submit an explanation and supporting records by the deadline in the notice. ESDC’s current compliance page says an employer generally has 30 days to respond to a Notice of Preliminary Finding; request any extension promptly and follow the letter.`),
    source(`What penalties can an employer face for TFWP non-compliance in Canada?`, `Consequences can include administrative monetary penalties, a ban from hiring through the program, suspension or revocation of an LMIA, and public listing. The result depends on the violation and the employer’s response.`),
    source(`Can a TFWP employer treat an approved temporary foreign worker as an independent contractor?`, `Employers must not misclassify a temporary foreign worker as an independent contractor to avoid program or employment obligations. The actual employer-employee relationship, job duties, pay and conditions must match the approved arrangement.`),
  ];

  if (slug.includes("lmia-and-employer-services")) return [
    source(`When does a Canadian employer need a Labour Market Impact Assessment (LMIA) to hire a foreign worker?`, `An LMIA is required for many employer-specific work-permit jobs unless the worker or job qualifies for a specific exemption. Employers should use the current ESDC and IRCC tools to select the correct program before advertising or submitting a request.`),
    source(`What must a Canadian employer do before submitting an LMIA application?`, `The employer must establish a genuine job offer, meet the selected stream’s recruitment and wage rules, gather business and position documents, and comply with any cap, pause or regional restriction in force on the filing date.`),
    source(`Who pays the LMIA processing fee and can an employer recover recruitment costs from a worker?`, `The employer generally pays the LMIA processing fee and cannot recover recruitment fees from the temporary foreign worker. Workers may have separate IRCC work-permit fees; check the current government fee instructions.`),
    source(`What is the difference between a low-wage and high-wage LMIA application in Canada?`, `ESDC classifies a job based on its offered wage compared with the current provincial or territorial median wage. The streams can have different recruitment, cap, transition-plan and job-duration requirements, so check the live rules for the job location.`),
    source(`How does the LMIA process work before a temporary foreign worker applies for a permit?`, `The employer submits the LMIA application to ESDC and receives a decision. If it is positive, the employer gives the worker the LMIA decision and signed job documents; the worker then makes a separate work-permit application to IRCC.`),
    source(`Does a positive LMIA guarantee a Canadian work permit or permanent residence?`, `No. A positive LMIA is an employer-side decision about the job and labour-market impact. IRCC separately assesses the worker’s permit application, and an LMIA does not itself provide permanent residence.`),
    source(`What employer obligations continue after Service Canada approves an LMIA?`, `The employer must follow the approved wage, job duties and working conditions, keep required records, cooperate with inspections and comply with recruitment and workplace rules. Report relevant changes using the current ESDC instructions.`),
    source(`Where can Canadian employers check LMIA requirements, forms and current processing times?`, `Use ESDC’s official Temporary Foreign Worker Program stream guide and LMIA processing-time information, then use IRCC’s work-permit instructions for the worker. Requirements depend on the stream and job location.`),
  ];

  if (family === "location") {
    const city = h1.replace(/^Immigration consultants in /i, "");
    const province = /Vancouver|Surrey|Victoria|Kelowna/i.test(city) ? "British Columbia" : /Calgary|Edmonton/i.test(city) ? "Alberta" : /Winnipeg/i.test(city) ? "Manitoba" : /Saskatoon|Regina/i.test(city) ? "Saskatchewan" : /Halifax/i.test(city) ? "Nova Scotia" : "Ontario";
    return [
      source(`Can I hire an immigration consultant in ${city} remotely for a Canadian PR application?`, `Yes. Immigration services can be arranged remotely for ${city} residents. Before retaining anyone, verify their authorization, request a written service agreement and confirm what work the fee covers.`),
      source(`Which ${province} nominee program should ${city} residents compare with Express Entry?`, `Compare the current ${province} streams with federal Express Entry using your occupation, language results, education, work history, status and any job offer. Living in ${city} does not replace a stream’s own eligibility rules.`),
      source(`Can an international student in ${city} get a PGWP and later apply for permanent residence?`, `Possibly. A post-graduation work permit depends on the school, program, study history and application date. A PGWP is temporary status; a graduate must separately qualify for an available federal or provincial permanent-residence route.`),
      source(`How can I verify a licensed RCIC immigration consultant serving ${city} clients?`, `Search the representative’s name or licence number in the CICC Public Register. Check that the record matches the person advising you and review current status, restrictions and contact details before sharing documents.`),
      source(`What should I prepare for a first immigration consultant assessment in ${city}?`, `Bring your passport, current status and expiry dates, education and language records, employment history, family details, funds evidence and earlier application or refusal letters. These details help identify the relevant program rules and deadlines.`),
      source(`How much does an immigration consultant in ${city} charge for a Canada PR application?`, `Fees depend on the application, family members and agreed services. Ask for a written fee breakdown, payment schedule, refund terms and list of work included, then compare the agreement rather than relying on a headline quote.`),
      source(`Can an immigration consultant in ${city} guarantee a Canada visa or PR approval?`, `No. IRCC or the relevant province makes the decision. A representative can explain and provide agreed services, but cannot guarantee an invitation, visa, nomination, processing time or permanent residence.`),
      source(`Which Canada immigration programs should ${city} residents compare before applying?`, `Compare the federal, provincial and family routes that match your goal and documents. Your occupation, language results, education, work experience, status, family ties and any job offer can change which program is worth checking first.`),
    ];
  }

  if (family === "refugee-travel-document") return [
    source(`Who is eligible to apply for a Canadian Refugee Travel Document?`, `IRCC says protected persons in Canada, including Convention refugees and persons in need of protection, can apply. The Passport Program decides whether to issue a refugee travel document or another non-Canadian travel document.`),
    source(`Can I apply for a Refugee Travel Document while I am outside Canada?`, `You must be in Canada to apply for a refugee travel document. Passport Canada does not provide this travel-document service outside Canada, so check the official application instructions before booking travel.`),
    source(`Can I travel to my home country with a Canadian Refugee Travel Document?`, `No. IRCC says it cannot be used to travel to the country of citizenship or the country where the person claimed persecution. Returning there may also affect a protection claim or protected-person status.`),
    source(`What proof of protected-person status do I need for a Refugee Travel Document?`, `The application requires proof of identity and status in Canada. Depending on the case, accepted status evidence can include an IRB decision letter, Confirmation of Permanent Residence or IRCC Verification of Status.`),
    source(`How do I renew or replace an expired Canadian Refugee Travel Document?`, `Apply through Passport Canada using the current adult or child travel-document form and required identity, status and previous-document evidence. A document’s validity is decided when the application is assessed.`),
    source(`What should I do if my Canadian Refugee Travel Document is lost or stolen?`, `Report the loss or theft using the official Canadian travel-document instructions and apply for a replacement if needed. A document reported lost or stolen is no longer valid if later found.`),
    source(`What is the difference between a Refugee Travel Document and a Certificate of Identity?`, `A refugee travel document is issued to protected persons. A Certificate of Identity is generally for certain permanent residents who are stateless or cannot obtain a national passport; the Passport Program determines which document fits.`),
    source(`Which countries accept a Canadian Refugee Travel Document for entry?`, `Acceptance and visa requirements vary by destination. Contact the destination country’s embassy or consulate before booking, and do not assume the document gives visa-free entry.`),
  ];

  if (family === "adoption") {
    const citizenshipRoute = slug.includes("citizenship-through-adoption");
    const prRoute = slug.includes("pr-through-adoption");
    return [
      source(citizenshipRoute
        ? `How does the Canadian citizenship-by-adoption process work for a child adopted abroad?`
        : prRoute
          ? `How can I bring an adopted child to Canada as a permanent resident through intercountry adoption?`
          : `Which adoption records help prove a child's Canadian citizenship or immigration status?`,
      `The correct route depends on the adoptive parent’s citizenship or permanent-resident status, where the adoption took place and whether the child will live in Canada. IRCC’s process selector explains when a direct citizenship grant or permanent-residence application applies.`),
      source(citizenshipRoute
        ? `If I am a Canadian permanent resident, does my adopted child need PR before applying for citizenship?`
        : prRoute
          ? `Can a Canadian permanent resident sponsor an adopted child for permanent residence?`
          : `What adoption evidence does a permanent-resident parent need to sponsor a child to Canada?`,
      `Canadian citizens and permanent residents may be able to sponsor an adopted child for permanent residence if the child will live in Canada and the adoption meets the legal requirements. A permanent-resident parent uses the immigration route; direct citizenship by adoption is a separate process for eligible Canadian-citizen parents. The child must complete required medical and background checks.`),
      source(citizenshipRoute
        ? `Can a child adopted outside Canada receive Canadian citizenship directly through an adoption grant?`
        : prRoute
          ? `Does an adopted child need permanent residence first, or can they receive Canadian citizenship directly?`
          : `How can I check whether an adopted child qualifies for Canadian citizenship by adoption?`,
      `A direct citizenship grant may be available when the Canadian adoptive parent meets the citizenship-by-adoption rules. The first-generation limit changed under Bill C-3 in December 2025, so confirm the current descent rule for the adoption date and family history.`),
      source(citizenshipRoute
        ? `What is the difference between citizenship by adoption and adopted-child PR sponsorship in Canada?`
        : prRoute
          ? `Should I apply for Canadian citizenship by adoption or permanent residence for my child?`
          : `How is proof of Canadian citizenship different from permanent-resident status for an adopted child?`,
      `The citizenship process can grant Canadian citizenship directly to an eligible adopted person. The immigration process grants permanent residence first, after which a child can apply for citizenship if eligible.`),
      source(citizenshipRoute
        ? `Do I need provincial or territorial approval for a child's Canadian citizenship-by-adoption application?`
        : prRoute
          ? `Which provincial adoption approvals are needed before an adopted child can immigrate to Canada?`
          : `Which Canadian adoption authority can confirm that an international adoption record is valid?`,
      `Yes. Intercountry adoptions involve the laws of the child’s country and the Canadian province or territory where the adoptive parent lives. Contact the provincial or territorial adoption authority before starting the immigration or citizenship process.`),
      source(citizenshipRoute
        ? `Can my adopted child travel to Canada before the citizenship-by-adoption application is approved?`
        : prRoute
          ? `Can I bring my adopted child to Canada before the intercountry adoption is legally finalized?`
          : `Can an adoption record be used for a Canadian application if the adoption is not final?`,
      `Some countries require a probationary period or final adoption in Canada, which can affect whether the immigration process must be used. Follow IRCC and provincial adoption authority instructions before travel.`),
      source(citizenshipRoute
        ? `Which adoption records and identity documents are required to apply for Canadian citizenship for an adopted child?`
        : prRoute
          ? `Which documents does IRCC require for an adopted child's Canadian permanent-residence application?`
          : `Which adoption order, birth and identity records should I keep for a Canadian immigration case?`,
      `The evidence depends on the route and adoption history. It can include the adoption order, identity and birth records, proof of the adoptive parent’s status, consent and custody evidence, and country-specific documents or translations.`),
      source(citizenshipRoute
        ? `Where can I find IRCC's official guide and forms for citizenship by adoption?`
        : prRoute
          ? `Where can I find IRCC's adopted-child sponsorship forms for Canadian permanent residence?`
          : `Where can I verify the official Canadian requirements for intercountry adoption records?`,
      `Start with IRCC’s process selector for intercountry adoption and contact the relevant provincial or territorial adoption authority. Use the matching IRCC citizenship or permanent-residence guide for the application.`),
    ];
  }

  if (family === "pnp") return [
    source(`What are the current eligibility requirements for ${entity}?`, `${pageSummary} Each province or territory sets separate streams, intake rules and selection priorities. Check the official program page for the stream that matches your occupation, language, education, work history and settlement plan.`),
    source(`Does ${entity} require a Canadian job offer or previous work in that province?`, `Some streams require an eligible job offer or a local connection, while others select candidates without one. The answer depends on the specific provincial stream and its current intake; do not apply a rule from one stream to another.`),
    source(`Can I apply for ${entity} while living outside Canada?`, `Some provincial nominee streams accept applicants abroad and others focus on people already working or studying in the province. Check the stream’s residence, employer and status requirements before creating a profile.`),
    source(`Within ${entity}, what is the difference between an Express Entry-linked stream and a base nomination stream?`, `An enhanced stream under ${entity} is linked to an Express Entry program and is followed by a federal permanent-residence application through that system. A base stream uses a separate non-Express Entry federal process after nomination. Check the province’s current stream guide because names and steps differ.`),
    source(`How many Express Entry CRS points can a nomination from ${entity} add to my profile?`, `An eligible Express Entry-linked nomination from ${entity} adds 600 CRS points. The nomination itself is not permanent residence: the candidate must still receive an invitation, submit a federal application and meet admissibility requirements.`),
    source(`Does ${entity} use an Expression of Interest (EOI) system, and how are candidates invited?`, `Some streams under ${entity} use a registration or Expression of Interest process, while others use a different application or selection method. Follow the current province or territory instructions; a profile in a pool does not guarantee an invitation or nomination.`),
    source(`What documents does ${entity} require for a provincial nomination application?`, `Common evidence can include identity, education assessments, language tests, employment records, job-offer details, funds and proof of provincial ties. Use the current ${entity} stream checklist and keep dates and job duties consistent across records.`),
    source(`What steps follow a nomination from ${entity} before I can get Canada PR?`, `Follow the nomination letter’s conditions and deadline, then submit the correct federal permanent-residence application. If the nomination is Express Entry-linked, accept it in the profile; a base nominee follows the non-Express Entry process.`),
  ];

  if (family === "atlantic") return [
    source(`What are the eligibility requirements for the Atlantic Immigration Program (AIP) in Canada?`, `Applicants generally need a qualifying job offer from an employer designated by one of the four Atlantic provinces, plus the applicable language, education and work-experience requirements. Graduates of recognized Atlantic institutions may qualify for an experience exemption.`),
    source(`Do I need a job offer from a designated employer for Atlantic Immigration Program PR?`, `Yes. A qualifying offer from an employer designated by the province where you will work is central to the AIP process. Confirm that the employer and position meet the current program rules before accepting the offer.`),
    source(`Does an Atlantic Immigration Program job offer need an LMIA?`, `The AIP is a distinct permanent-residence pathway and its qualifying job offer does not use the standard LMIA process. An optional AIP work permit has its own employer and provincial referral requirements.`),
    source(`Which Atlantic provinces participate in the Canada Atlantic Immigration Program (AIP)?`, `The program covers New Brunswick, Newfoundland and Labrador, Nova Scotia, and Prince Edward Island. You must intend to live in the Atlantic province connected to your designated employer and job offer.`),
    source(`What language test and education documents do I need for an AIP application?`, `Requirements depend on the offered job’s TEER category. Use an accepted language test and provide the education credential or assessment required for your category, alongside the current AIP checklist.`),
    source(`Do international graduates in Atlantic Canada need work experience for the AIP?`, `Graduates of eligible recognized post-secondary institutions in Atlantic Canada can be exempt from the qualifying work-experience requirement if they meet the program’s other conditions. Check the school, credential, study history and job-offer rules.`),
    source(`How does the Atlantic Immigration Program settlement plan work after a job offer?`, `After receiving a qualifying offer, you work with a settlement service provider to prepare a plan for you and accompanying family. The employer uses the plan in the endorsement process before you apply for permanent residence.`),
    source(`Can I get an Atlantic Immigration Program work permit while my PR application is processing?`, `Some AIP candidates may apply for an employer-specific work permit while their permanent-residence file is processed. They need the qualifying designated-employer offer and a provincial referral letter; a permit does not guarantee PR approval.`),
  ];

  if (family === "agri-food") return [
    source(`Is the Agri-Food Immigration Pilot still open for new applications in Canada?`, `No. IRCC says the Agri-Food Pilot ended on May 14, 2025 and is no longer accepting new applications. It continues to process applications received by the closing date; compare current programs before planning a new application.`),
    source(`Can I apply for permanent residence through the closed Agri-Food Pilot in 2026?`, `No new Agri-Food Pilot application can be submitted. If you already applied by the deadline, follow your IRCC account and requests; if not, review current Express Entry, provincial nominee, Atlantic or community immigration options.`),
    source(`What happened to the Agri-Food Pilot application cap and expiry date?`, `The pilot reached its legislated end date of May 14, 2025, after IRCC also capped the 2025 intake. The live IRCC program guide is the controlling source for the final closing status.`),
    source(`Which Canadian immigration options can agri-food workers consider after the pilot closed?`, `Depending on the worker’s occupation, language, education, experience, location and job offer, possible routes to investigate may include Express Entry, a provincial nominee stream, the Atlantic Immigration Program or the Rural Community Immigration Pilot.`),
    source(`Will IRCC continue processing Agri-Food Pilot PR applications submitted before the program closed?`, `IRCC says it will continue processing applications accepted before the May 14, 2025 end date. Keep responding to requests in the file and use the official account for case-specific updates.`),
    source(`Can a new employer submit an Agri-Food Pilot job offer for a worker now?`, `A new job offer cannot reopen the closed pilot or make a new application eligible. The worker and employer should check current work-permit and permanent-residence routes that are accepting applications.`),
    source(`Can an Agri-Food Pilot applicant include family members in an existing application?`, `Family-member processing depends on the submitted application and IRCC instructions. Applicants with a pending file should follow the forms and requests attached to that file rather than relying on the old pilot checklist alone.`),
    source(`Where can I verify the official Agri-Food Pilot closure and current alternatives?`, `Check IRCC’s closed Agri-Food Pilot guide for the end date and existing-file instructions, then review the live eligibility pages for any alternative program before applying.`),
  ];

  if (family === "community-pilot") return [
    source(`Is the Rural and Northern Immigration Pilot (RNIP) still open to new applicants?`, `The RNIP was a time-limited pilot and is closed. IRCC now lists the Rural Community Immigration Pilot (RCIP) and Francophone Community Immigration Pilot (FCIP) as current community-based pathways; they have separate rules and participating communities.`),
    source(`What replaced the Rural and Northern Immigration Pilot for Canadian permanent residence?`, `IRCC introduced the Rural Community Immigration Pilot and Francophone Community Immigration Pilot. A candidate must check the current participating community, eligible occupation or priority sector, employer designation and community recommendation requirements.`),
    source(`Do I need a job offer from a designated employer for the Rural Community Immigration Pilot?`, `Yes. RCIP applicants need a qualifying offer from a designated employer in a participating community, then must meet the pilot requirements and obtain a community recommendation before applying for permanent residence.`),
    source(`Which Canadian communities participate in the Rural Community Immigration Pilot?`, `IRCC publishes the current community list and community boundaries. Confirm that the job and employer are in an active participating community because a town’s participation or priority occupations can change.`),
    source(`What is the Francophone Community Immigration Pilot and who can apply?`, `FCIP is a community-based permanent-residence pathway for eligible French-speaking candidates who want to live and work in a participating Francophone-minority community. Check its language, job-offer and community recommendation requirements.`),
    source(`How do I get a community recommendation under the RCIP or FCIP?`, `First meet the pilot requirements and secure a qualifying job offer. The designated employer submits the recommendation request to the community; if the community recommends you, you can apply to IRCC for permanent residence.`),
    source(`Can I work in Canada while an RCIP permanent-residence application is processing?`, `Some RCIP candidates may qualify for an optional work permit while IRCC processes the PR application. Check the current work-permit conditions and whether you need a community recommendation or employer support.`),
    source(`How is the current RCIP different from the former RNIP program?`, `Both use community participation, but RCIP is a separate current pilot with its own designated employers, participating communities and application instructions. RNIP eligibility or a past community list does not automatically transfer to RCIP.`),
  ];

  if (family === "municipal") return [
    source(`Can I apply for Canada’s Municipal Nominee Program for permanent residence now?`, `Do not assume that the name describes an open application stream. IRCC’s current applicant pages list the Provincial Nominee Program and designated rural and Francophone community pilots; use the live Canada.ca program list to confirm whether a municipal stream has launched before relying on a third-party summary.`),
    source(`Is the Municipal Nominee Program the same as a Provincial Nominee Program in Canada?`, `No. A provincial nominee application is made through a province or territory’s published stream. A community-based pilot has separate IRCC rules and participating locations; confirm the exact program and application page before preparing a file.`),
    source(`What Canadian community immigration programs can I apply for instead of a municipal nominee stream?`, `Depending on your profile and destination, review the current Rural Community Immigration Pilot, Francophone Community Immigration Pilot, Provincial Nominee Program and federal economic programs. Each has separate job-offer, location and eligibility rules.`),
    source(`Do Canadian community immigration pilots require a job offer from a local employer?`, `The current RCIP and FCIP require a qualifying offer from a designated employer in a participating community, followed by a community recommendation. A general local job offer alone does not establish eligibility.`),
    source(`How can I check whether a town is approved for a Canadian immigration pilot?`, `Use IRCC’s current list of participating communities and the linked community pages. Verify the employer’s designation, eligible occupation or priority sector, boundaries and intake status before accepting a job offer.`),
    source(`Does living in a smaller Canadian city qualify me for a municipal immigration program?`, `Living in a smaller city by itself does not create a permanent-residence pathway. You must qualify for a published federal or provincial program and meet any participating-community, job-offer and recommendation requirements.`),
    source(`Can a municipal employer sponsor me for Canadian permanent residence without an IRCC program?`, `An employer cannot create a federal immigration category. A job may support eligibility under a published pilot, provincial stream or work-permit route, but the employer and candidate must follow that program’s current requirements.`),
    source(`Where can I verify official eligibility for municipal and community immigration programs?`, `Start with IRCC’s live Rural and Francophone Community Immigration Pilots page and the official Provincial Nominee Program guide. Use the named community or provincial authority’s current instructions for stream-specific details.`),
  ];

  if (family === "business") return [
    source(`Can entrepreneurs apply for Canada’s Start-Up Visa Program in 2026?`, `The Start-Up Visa Program was paused on June 30, 2026. IRCC stopped accepting new applications and continues processing applications accepted before the pause; check the live program page for any later reopening notice.`),
    source(`Can I get a Start-Up Visa commitment certificate from a designated organization now?`, `IRCC says it stopped accepting commitment certificates after December 31, 2025 and is not currently designating new organizations. Confirm the current notice before paying an organization or planning an application.`),
    source(`What happens to a Start-Up Visa application submitted before the 2026 pause?`, `IRCC says it will continue processing applications accepted before June 30, 2026. Follow requests in your account and use the application status tools for updates; a past commitment does not remove the need to meet the program rules.`),
    source(`Does a Start-Up Visa require support from a designated Canadian organization?`, `Yes. The route has required qualifying support from a designated venture-capital fund, angel investor group or business incubator. Because intake is paused, verify the current status before seeking support or paying fees.`),
    source(`Can I get a Start-Up Visa work permit while my permanent-residence application is pending?`, `IRCC’s current page says eligible applicants with a pending Start-Up Visa application may still apply for an open work permit. Check the current eligibility and application guide for your situation.`),
    source(`What are the alternatives to the paused Start-Up Visa Program in Canada?`, `Entrepreneurs can investigate provincial entrepreneur streams or other work and business routes, but these have distinct net-worth, investment, management, job-creation and residence requirements. Confirm that the chosen province is accepting applications.`),
    source(`Can a provincial entrepreneur program lead to Canadian permanent residence?`, `Some provinces have entrepreneur pathways that begin with a temporary work permit or performance agreement and may lead to nomination after the applicant meets conditions. The province’s current stream guide controls.`),
    source(`Where can I check current Canadian business immigration intake and eligibility?`, `Use IRCC’s Start-Up Visa notice and the immigration authority for the province where you plan to establish or operate a business. Check intake status, designated organizations, forms and fees directly before acting.`),
  ];

  if (family === "temporary-resident-to-pr") return [
    source(`Is the 2021 Temporary Resident to Permanent Resident pathway still open in Canada?`, `No. IRCC says the temporary resident to permanent resident pathway closed on November 5, 2021 and is not accepting new PR applications. The official page explains options for people whose 2021 application is still pending.`),
    source(`Can I apply for a new TR to PR pathway in Canada in 2026?`, `The 2021 temporary public policy is closed. Do not treat it as a current intake; compare active programs such as Express Entry, provincial nominee streams or community pilots using their current eligibility rules.`),
    source(`Can I extend my work permit while my 2021 TR to PR application is pending?`, `IRCC says applicants still waiting on a 2021 PR decision can apply for an open work permit until December 31, 2026. Check the current public policy and individual eligibility before filing.`),
    source(`What were the eligibility streams under Canada’s 2021 TR to PR pathway?`, `The closed policy covered specified workers in Canada and recent graduates, with separate French-speaking streams. Its old thresholds and intake caps do not create eligibility for a new application today.`),
    source(`How can I check the status of a 2021 Temporary Resident to PR application?`, `Use IRCC’s application status tool or link the application to an IRCC secure account. Respond to document requests through the channel and by the date shown in the request.`),
    source(`Can family members be included in a pending 2021 TR to PR application?`, `Family members and changes to family composition must be reported according to the instructions for the submitted application. Use the current IRCC form or account instructions rather than an archived intake checklist.`),
    source(`Which Canadian PR programs can temporary workers compare after TR to PR closed?`, `Depending on occupation, language, Canadian experience, province and employer, compare the Canadian Experience Class, a provincial nominee stream, the Atlantic Immigration Program or an eligible community pilot.`),
    source(`Where can I verify the official TR to PR closure and pending-file work permit rules?`, `Use IRCC’s closed pathway page for the November 5, 2021 end date and the current open-work-permit policy for pending applicants. Recheck the deadline and eligibility before applying.`),
  ];

  if (family === "caregiver") {
    const childCarePage = slug.includes("home-child-care");
    const role = childCarePage ? "home child care provider" : "home support worker";
    const legacyPilot = childCarePage ? "Home Child Care Provider Pilot" : "Home Support Worker Pilot";
    const newCategory = childCarePage ? "Home Care Worker Immigration Pilot: Child Care" : "Home Care Worker Immigration Pilot: Home Support";
    return [
      source(childCarePage
        ? `Is the Home Child Care Provider Pilot open to new caregiver PR applications in Canada?`
        : `Is the Home Support Worker Pilot accepting new permanent-residence applications in Canada?`,
      `No. IRCC closed the legacy Home Child Care Provider and Home Support Worker pilots to new applicants on June 17, 2024. They are not accepting new permanent-residence applications; check the correct pilot guide for applications received before closure.`),
      source(`Can a ${role} apply through the ${newCategory} in 2026?`, `The newer Home Care Worker Immigration Pilots are also closed to new applicants under current ministerial instructions. IRCC paused intake to process existing applications and has not announced a reopening date; check the live notice before making plans.`),
      source(childCarePage
        ? `What replaced the Home Child Care Provider Pilot for Canadian permanent residence?`
        : `What replaced the Home Support Worker Pilot as a Canada PR pathway?`,
      `The 2024 Home Child Care Provider and Home Support Worker pilots ended, and IRCC later launched separate Home Care Worker Immigration classes for child care and home support. Those newer pilots are currently closed to new applications, so candidates must check other active programs against their own eligibility.`),
      source(`Will IRCC keep processing a ${legacyPilot} application submitted before the pilot closed?`, `Yes. IRCC continues to process applications received under the former pilots by their closing date and applications already accepted under the newer pilot classes. Follow the account for file-specific requests, deadlines and decisions.`),
      source(`Can a ${role} work in Canada while a caregiver permanent-residence application is processing?`, `A pending permanent-residence application does not automatically authorize employment. Work eligibility depends on the specific program and whether the person holds a valid permit or qualifies for a separate work permit. Confirm current IRCC instructions before working.`),
      source(`Which Canada PR programs can a ${role} consider now that the caregiver pilots are closed?`, `Depending on occupation, language, education, experience, employer and intended location, a caregiver may compare current economic programs, provincial streams, the Atlantic Immigration Program or community pilots. Each has separate requirements; a closed pilot does not create eligibility for another route.`),
      source(`Can a Canadian family hire a ${role} while the Home Care Worker Immigration Pilots are paused?`, `The permanent-residence intake pause does not decide whether a separate work permit is possible. The employer must check the worker’s current authorization, the applicable work-permit route, any LMIA or exemption and the rules for the job location.`),
      source(`Where can I check the current ${legacyPilot} and Home Care Worker pilot intake status?`, `Use IRCC’s live Home Care Worker pilot notice for the current closure and the legacy caregiver guide for applications already submitted. Intake status, work authorization and processing instructions are separate questions and can change.`),
    ];
  }

  if (family === "one-year-window") return [
    source(`What is the One-Year Window of Opportunity (OYW) for refugee family reunification in Canada?`, `The OYW is a time-limited process for certain non-accompanying family members of a refugee or protected person. IRCC has separate instructions for resettled refugees arriving from abroad and protected persons who apply for PR from inside Canada, so confirm which route fits.`),
    source(`Who can be included in a Canadian One-Year Window family reunification application?`, `Only family members who fit IRCC’s family definition and were declared or included in the principal applicant’s permanent-residence file can qualify. The eligible relationships are limited, and the child’s age may be locked in from the original application.`),
    source(`When does the one-year deadline start for the Canada One-Year Window program?`, `The start date depends on the route. For a resettled refugee, the current OYW guide starts the year on landing in Canada as a permanent resident; for an in-Canada protected person, IRCC’s PR guide says listed family members abroad have one year from the day the person is granted PR.`),
    source(`How do I apply for One-Year Window of Opportunity reunification for family abroad?`, `Use the current IRCC process and forms for the correct refugee route. The principal applicant or sponsor must submit the complete request and the family member’s PR application before the applicable one-year deadline, with identity and relationship evidence.`),
    source(`Can I use the One-Year Window if my refugee family reunification deadline has passed?`, `IRCC says resettled refugees who arrived more than one year ago cannot use the OYW route. A person may need to check family-class sponsorship or another resettlement option; eligibility depends on the family relationship and immigration history.`),
    source(`Do I have to declare my spouse or children in my refugee PR application to use the One-Year Window?`, `Yes. Family members must be declared or included as IRCC requires, even if they are not travelling with the principal applicant. An undeclared family member may not qualify for the OYW process and may create other immigration consequences.`),
    source(`Can I sponsor family members through the regular Canada Family Class if I miss the OYW deadline?`, `A resettled refugee may be able to use Family Class sponsorship after the OYW period, but the sponsor and relative must meet separate eligibility rules. Protected persons should check the rules for family members included in the original PR application.`),
    source(`What documents are needed for a One-Year Window of Opportunity application?`, `The checklist depends on the refugee route and family member. It commonly requires identity and civil-status records, proof of the principal applicant’s PR or protected-person file, relationship evidence and translations that meet IRCC’s instructions.`),
  ];

  if (family === "pgwp") return [
    source(`Who is eligible for a post-graduation work permit (PGWP) in Canada?`, `Eligibility depends on the school and program, study history, full-time status where required, language evidence and when the application is submitted. A study permit or graduation alone does not guarantee a PGWP.`),
    source(`Does my Canadian DLI and program qualify me for a PGWP after graduation?`, `Check both the designated learning institution and the exact program against IRCC’s current PGWP eligibility list. Some programs have field-of-study requirements, so confirm eligibility before choosing a course or paying tuition.`),
    source(`Does a PGWP application require an English or French language test in 2026?`, `IRCC’s current PGWP rules require language proof for many applicants, with the test and level depending on the credential. Check the live eligibility guide for exemptions and the rules that apply on your application date.`),
    source(`Do international graduates need an eligible field of study for a Canadian PGWP?`, `Field-of-study restrictions apply to some non-degree programs, while degree graduates are treated differently under IRCC rules. Use the current field-of-study list for the program and application date.`),
    source(`How long can a post-graduation work permit be valid in Canada?`, `PGWP length is based on the completed credential and program duration, subject to the passport expiry and current policy limits. Check IRCC’s validity rules for your credential before estimating a permit end date.`),
    source(`How soon after graduation must I apply for a PGWP in Canada?`, `Apply within the deadline in IRCC’s current instructions and keep proof of when the school issued the completion letter or final transcript. If your study permit expires first, review the status options before working.`),
    source(`Can I work in Canada after graduation while my PGWP application is processing?`, `Some graduates may work while IRCC processes a timely PGWP application if they meet the conditions in the official rules. Verify your permit expiry, study authorization and work eligibility before starting or continuing employment.`),
    source(`Can Canadian work experience on a PGWP count toward Express Entry or CEC?`, `Eligible skilled Canadian work may support a later Canadian Experience Class or other permanent-residence application, but each program has separate occupation, hours, language and timing rules. A PGWP itself does not grant permanent residence.`),
  ];

  if (path === "/" || path.startsWith("/about/") || path.startsWith("/contact/")) return [
    source(`How can a licensed Canadian immigration consultant in Brampton help with my application?`, `${pageSummary} An authorized representative can explain a pathway, review evidence and provide the services set out in a written agreement. Verify authorization before paying.`),
    source(`How do I verify that a Brampton immigration consultant is licensed with CICC?`, `Search the representative by name or licence number in the CICC Public Register. Compare the result with the person advising you, including current status, contact details and any restrictions.`),
    source(`Can an immigration consultant guarantee Canadian permanent residence or visa approval?`, `No. IRCC, a province or another authorized decision-maker decides the application. A representative may help prepare and submit a file but cannot guarantee approval, a draw invitation or a processing time.`),
    source(`What should I prepare before booking a Canada immigration consultation in Brampton?`, `Prepare your goal, current status and expiry date, passport details, education, language results, work history, family details and any earlier applications or refusal letters. This helps focus the review on facts that may change the options.`),
    source(`What should an immigration consultant explain before I sign a Canadian retainer?`, `The written agreement should identify the representative, services, application, fees, payment terms, client responsibilities and communication expectations. Ask what is outside scope and keep a signed copy.`),
    source(`Can I work with a Brampton immigration consultant if I live outside Ontario?`, `Many immigration services can be provided remotely. Verify the representative’s current authorization and the written scope, then use the official IRCC or provincial source for the rules that apply to your application.`),
    source(`How can I compare immigration consultant fees and service agreements in Canada?`, `Compare the written scope, milestones, included services, additional charges, refund terms and communication plan. Make sure the quote identifies the application and family members it covers.`),
    source(`Where can I check official Canadian immigration forms, fees and program requirements?`, `Use the official IRCC or provincial program page for your goal—permanent residence, work, study, visiting, sponsorship or citizenship. Check the application guide and fee list again before filing.`),
  ];

  if (faqFamily(page) === "draws") return [
    source(`How do I read the latest Canadian Express Entry draw results and CRS cutoff?`, `Check the draw date, round type, invitation count, CRS cutoff and tie-break in IRCC’s published round. A cutoff describes that round’s invited candidates and does not predict the next one.`),
    source(`How often does IRCC hold Express Entry draws, and can the schedule change?`, `IRCC sets draw timing and invitation numbers, so frequency can vary. Use the official round history for confirmed results instead of relying on predicted draw dates.`),
    source(`Does meeting an Express Entry CRS cutoff guarantee an invitation to apply?`, `No. Program eligibility, round type, ranking and tie-break rules all matter. A historical cutoff is not a promise that a future candidate with the same score will receive an invitation.`),
    source(`What is the difference between a general and category-based Express Entry draw?`, `A category round selects candidates who meet its category instructions, while general and program-specific rounds use different criteria. Candidates must still qualify for an Express Entry-managed program.`),
    source(`How should I use past Express Entry draw scores when planning my CRS profile?`, `Treat past results as context. Compare the round category and score with your own eligibility, then review factors supported by valid records. Do not treat past cutoffs as an invitation forecast.`),
    source(`Where can I confirm official Express Entry draw dates and invitation counts?`, `Use IRCC’s rounds-of-invitations page to confirm the date, round type, invitations, CRS score and tie-break. Check the current category and program eligibility rules before making a plan.`),
    source(`How do I interpret a provincial nominee draw score or selection result?`, `Provincial programs use different selection rules. Some publish points; others select by occupation, employer or stream priorities. Read the official notice for that province and do not compare its score directly with CRS.`),
    source(`Can a PNP draw result guarantee that I will receive a provincial nomination?`, `No. A draw record is historical. The province assesses current stream criteria and evidence, and an approved nomination is followed by a separate federal permanent-residence assessment.`),
  ];

  if (family === "express-entry") {
    const programLabel = entity.replace(/^Express Entry Canada$/i, "Express Entry");
    return [
    source(`What are the eligibility requirements for ${entity} and Canadian permanent residence?`, `${pageSummary} Express Entry manages the Federal Skilled Worker Program, Canadian Experience Class and Federal Skilled Trades Program. Confirm the minimum criteria for the exact program before submitting a profile.`),
    source(`How do I create an Express Entry profile and enter the pool for ${entity}?`, `Confirm program eligibility, then enter supported identity, education, language, work, family and funds information in your IRCC account. Keep evidence for every claim; an Express Entry profile is not a permanent-residence application.`),
    source(`What CRS score do I need for ${entity}, and is there a guaranteed Express Entry cutoff?`, `There is no permanent cutoff or guaranteed score. IRCC ranks eligible candidates for each round, and the result depends on the round type, pool and invitation number. Treat past results as historical context.`),
    source(`Which language test and Educational Credential Assessment can support ${entity}?`, `Use a valid IRCC-approved language test. An Educational Credential Assessment may be needed for foreign education depending on the program and the points or eligibility claim. Follow the current application checklist.`),
    source(`How can I prove that my work experience qualifies for ${entity}?`, `Match your National Occupational Classification code to the duties you actually performed and support dates, hours and pay with employer records. The work-experience rules differ among FSW, CEC and FST.`),
    source(`Does ${entity} require a Canadian job offer, and how does a PNP nomination help?`, `A job offer is not required for every Express Entry program, and provincial nomination is a separate process. Check the exact program criteria; a nomination can add CRS points only after a province approves you for an aligned stream.`),
    source(`What documents should ${programLabel} applicants prepare after an Express Entry Invitation to Apply (ITA)?`, `Follow the 60-day invitation deadline and personalized IRCC checklist. Upload the records supporting your profile, complete the permanent-residence forms, pay the required fees, and provide biometrics or medical information when requested. The checklist can differ by program and personal history.`),
    source(`What IRCC processing time applies to a Canada PR application through ${programLabel}?`, `Processing varies by program, inventory, completeness and background checks. Use IRCC’s current processing-time tool for the correct application type; its estimate is not a guaranteed decision date.`),
  ];
  }

  if (family === "study") return [
    source(`What are the Canada study permit requirements for international students?`, `Applicants generally need acceptance from a designated learning institution, enough money for tuition and living costs, and evidence addressing admissibility and the study plan. Use the country-specific checklist for the application location.`),
    source(`Do international students need a PAL or TAL for a Canadian study permit?`, `Many study-permit applicants need a provincial or territorial attestation letter, but IRCC lists exemptions by applicant and study level. Check the current PAL/TAL rules for your province and program before applying.`),
    source(`How much proof of funds is required for a Canada study permit application?`, `Show that you can pay tuition, living expenses for yourself and accompanying family, and transportation without relying on work in Canada. Use the current IRCC amount for your province and application date, and document where the funds came from.`),
    source(`Which documents do I need for a Canada study permit from my country?`, `Start with the application checklist for your country or region. Common evidence includes an acceptance letter, passport, attestation letter if required, financial records and documents explaining your study purpose and personal history.`),
    source(`Can international students work off campus while studying in Canada?`, `Some study-permit holders can work off campus when they meet IRCC’s eligibility conditions and permit requirements. Check the current hour limits and conditions before starting work, especially during scheduled academic breaks.`),
    source(`Does my DLI and program qualify for a PGWP after graduation?`, `A study permit does not guarantee a post-graduation work permit. Check the designated learning institution and exact program against IRCC’s current PGWP rules, including any language or field-of-study requirements that apply.`),
    source(`Can I change schools or take a leave while holding a Canadian study permit?`, `Changing schools or taking a leave can affect study-permit compliance and later PGWP eligibility. Follow IRCC’s current change-of-school rules and keep written records of enrolment, leave approval and program dates.`),
    source(`What should I do after IRCC refuses my Canada study permit application?`, `Read the refusal reasons and any decision notes, then address the specific concerns with relevant evidence. Check your current status and any deadline before reapplying; repeating the same file may not resolve the issue.`),
  ];

  if (family === "work") {
    let introQuestion = `What are the current Canada work permit eligibility requirements for ${entity}?`;
    let introAnswer = `Eligibility depends on the applicant’s situation and whether the route is an open or employer-specific work permit. Check the current IRCC instructions to confirm any job-offer, LMIA or exemption requirements before accepting work.`;
    if (slug.includes("global-talent-stream")) {
      introQuestion = `How does Canada’s Global Talent Stream help employers hire skilled foreign workers?`;
      introAnswer = `The Global Talent Stream is an LMIA stream for qualifying Canadian employers hiring highly skilled workers. Employers must meet the applicable category, wage, recruitment and Labour Market Benefits Plan requirements before the worker applies for a work permit.`;
    } else if (slug.includes("lmia-and-employer-services")) {
      introQuestion = `What must a Canadian employer do before hiring a temporary foreign worker through the LMIA process?`;
      introAnswer = `An employer must identify the correct Labour Market Impact Assessment stream and meet its recruitment, wage, job-offer and documentation requirements. A positive LMIA or an exemption step may be needed before the worker submits a work-permit application.`;
    } else if (slug.includes("tfwp-employer-compliance")) {
      introQuestion = `What are Canadian Temporary Foreign Worker Program employer compliance requirements?`;
      introAnswer = `Employers must follow the wages, working conditions, record-keeping and inspection obligations attached to the TFWP and the worker’s authorization. Keep accurate records and use the current ESDC and IRCC employer guidance for the stream.`;
    } else if (slug.includes("international-experience-canada")) {
      introQuestion = `Who can apply for an International Experience Canada (IEC) work permit?`;
      introAnswer = `IEC eligibility depends on the applicant’s citizenship, age, country or territory agreement, category and available pool invitations. Check the current country-specific rules before entering a pool or accepting a job.`;
    }
    return [
    source(introQuestion, introAnswer),
    source(`What is the difference between an open and employer-specific work permit in Canada?`, `An open work permit is available only in defined situations and is not tied to one job. An employer-specific permit can restrict the employer, occupation or location, so follow its conditions before changing jobs.`),
    source(`When does a Canadian employer need an LMIA to hire a temporary foreign worker?`, `Many jobs require a positive Labour Market Impact Assessment, while some qualify for an exemption under the International Mobility Program or a specific public policy. Confirm the exact exemption and employer steps before the worker applies.`),
    source(`Which documents do Canadian employers and workers need for a work permit application?`, `The file may require the job offer, employer details, LMIA or exemption evidence, passport, qualifications, work history and proof of current status. Follow the personalized checklist for the permit type and application location.`),
    source(`Can I change employers while holding an employer-specific Canadian work permit?`, `Do not start with a different employer until you confirm the conditions on your permit and obtain any required authorization. A new employer, occupation or work location may require a new employer step or work permit.`),
    source(`Can I keep working in Canada after applying to extend my work permit?`, `Some applicants who apply from inside Canada before their permit expires may have maintained status and be able to keep working under the same conditions while IRCC decides. Check the current rules for your permit and filing date.`),
    source(`How long does IRCC take to process a Canadian work permit application?`, `Work-permit processing estimates depend on permit type, application location, completeness and checks. Use IRCC’s current processing-time tool for the right category and monitor your existing status expiry date.`),
    source(`What should I do if IRCC refuses my Canadian work permit application?`, `Read the refusal reasons and any officer notes, check whether you still have valid status, and identify the evidence or eligibility issue before considering another application. Use the instructions in the decision for any deadline.`),
    ];
  }

  if (family === "family") {
    if (slug.includes("parents-and-grandparents") || slug.includes("pgp") || slug.includes("minimum-necessary-income")) {
      const incomePage = slug.includes("minimum-necessary-income");
      const invitationPage = slug.includes("invitation");
      return [
        source(incomePage
          ? `Can I submit a Parents and Grandparents Program (PGP) application while IRCC has paused new intake?`
          : invitationPage
            ? `Is IRCC issuing new Parents and Grandparents Program invitations to apply in 2026?`
            : `Is the Canada Parents and Grandparents Program (PGP) accepting new sponsorship applications in 2026?`,
        `IRCC paused intake of new PGP applications on July 15, 2026. It is not receiving new interest-to-sponsor forms or inviting new sponsors until further notice, but it continues to process existing applications. Check the live IRCC notice before relying on a future intake date.`),
        source(incomePage
          ? `Who counts in the family size for a Canadian PGP sponsor's minimum necessary income (MNI)?`
          : invitationPage
            ? `Who can receive an invitation to apply for Canada PGP parent and grandparent sponsorship?`
            : `Who can sponsor parents or grandparents for Canadian permanent residence through the PGP?`,
        `A sponsor must meet the program’s status, age, residence, relationship and undertaking requirements. PGP invitations are limited to people selected under an intake; because new invitations are currently paused, do not send an application without following IRCC’s instructions for the intake that applies to you.`),
        source(incomePage
          ? `How does IRCC calculate PGP minimum necessary income for the sponsor's household and family size?`
          : invitationPage
            ? `What income must a sponsor show after receiving a PGP invitation to apply?`
            : `What is the minimum necessary income for sponsoring parents and grandparents in Canada?`,
        `The PGP minimum necessary income depends on family size and the tax years IRCC specifies for the applicable intake. The threshold can change, so confirm the required years and amount in the current guide and compare them with the sponsor’s Canada Revenue Agency notices of assessment.`),
        source(incomePage
          ? `Does meeting the PGP income requirement let me apply without an invitation from IRCC?`
          : invitationPage
            ? `How does IRCC select potential sponsors and send a PGP invitation to apply?`
            : `Do I need an invitation to apply for the Parents and Grandparents Program?`,
        `Yes. IRCC instructs potential sponsors to apply only if invited. Meeting the income threshold does not replace an invitation; an application sent without one can be returned. Follow the deadline and submission instructions in the invitation letter.`),
        source(incomePage
          ? `Can my spouse or common-law partner co-sign and combine income for a PGP sponsorship?`
          : invitationPage
            ? `Can a co-signer help me meet the PGP minimum income after an invitation?`
            : `Can my spouse or common-law partner co-sign a PGP sponsorship application?`,
        `A spouse or common-law partner may be able to co-sign and combine income if they meet the program’s relationship and undertaking requirements. Both people become responsible for the sponsorship undertaking. Check the current guide for the accepted co-signer and income evidence.`),
        source(incomePage
          ? `If my PGP income is below the required amount, can my parents visit Canada on a Super Visa?`
          : invitationPage
            ? `What can my parents do while they wait for a Parents and Grandparents Program invitation?`
            : `Can my parents visit Canada if I cannot apply through the paused PGP intake?`,
        `A Super Visa may let eligible parents or grandparents visit for up to five years per entry, with a possible two-year extension from inside Canada. It is temporary status, not permanent-residence sponsorship. IRCC changed the host-income calculation in 2026, so check the current Super Visa income and insurance rules.`),
        source(incomePage
          ? `Which tax documents prove income for a Canadian Parents and Grandparents Program application?`
          : invitationPage
            ? `Which financial documents should I prepare before filing a PGP application after an invitation?`
            : `Which documents prove income for a Canada PGP sponsorship application?`,
        `IRCC generally assesses sponsor income using tax information for the applicable years, alongside family-size details and the required forms. Use the current intake guide to confirm acceptable Canada Revenue Agency records and any additional evidence instead of relying on a previous year’s checklist.`),
        source(incomePage
          ? `How can I check an existing PGP application's status while new intake is paused?`
          : invitationPage
            ? `Where can I check my Parents and Grandparents Program invitation or application status?`
            : `How do I check the status of an existing Parents and Grandparents sponsorship file?`,
        `Use the IRCC online account or application-status tool linked to your file and respond to requests by their stated deadlines. Processing targets do not guarantee a specific decision date for an individual application.`),
      ];
    }
    if (slug.includes("sponsorship-processing-times")) return [
      source(`How long does Canadian spousal sponsorship take, and where can I check the current time?`, `Processing depends on application class, destination, completeness, background checks and current inventory. Use IRCC’s processing-time tool for the spouse or partner category and location; it is an estimate, not a guaranteed deadline.`),
      source(`How long does Parents and Grandparents Program sponsorship take in Canada?`, `PGP processing varies by destination and inventory, and new intake is currently paused. Check IRCC’s live processing-time tool for an existing application and current notices for intake status.`),
      source(`Can I track my family sponsorship application status online with IRCC?`, `Use the online account or application-status service that matches how the application was submitted. Keep the application number available and check messages for document or biometrics requests.`),
      source(`What common issues can delay a Canadian family sponsorship application?`, `Missing forms, unclear relationship evidence, background or medical checks, requests for more information and an incomplete sponsor assessment can add time. Respond fully by the deadline and keep copies of submissions.`),
      source(`Does inland or outland spousal sponsorship process faster in Canada?`, `Neither label guarantees faster processing. Choose the application class that fits the couple’s circumstances and follow the current IRCC instructions; processing estimates may differ by category and can change.`),
      source(`Can a sponsored spouse or partner work in Canada while a spousal sponsorship application is processing?`, `A spouse or partner included in a permanent-residence application may qualify for an open work permit if they are living in Canada with the sponsor and meet IRCC’s other conditions. Usually an AOR is needed, with a limited exception if their status expires within two weeks. The sponsorship application alone does not authorize work.`),
      source(`How do I avoid delays when submitting a spouse sponsorship application?`, `Use the current relationship-specific checklist, answer every required question consistently and include clear, dated evidence. Translate documents as instructed and respond promptly to IRCC requests.`),
      source(`Where can I find official family sponsorship processing times and application updates?`, `Use IRCC’s processing-time tool for estimates and the application account for file-specific messages. Check program notices separately for intake changes, especially for parent and grandparent sponsorship.`),
    ];
    if (slug.includes("sponsorship-eligibility")) return [
      source(`Who is eligible to sponsor a family member for Canadian permanent residence?`, `Eligibility depends on the sponsor’s status, age, residence, relationship to the applicant and any default or undertaking restrictions. The rules differ for spouses, dependent children, parents and other relatives.`),
      source(`Can a Canadian permanent resident sponsor a spouse while living outside Canada?`, `A Canadian citizen may sponsor from abroad if they plan to return when the relative becomes a permanent resident. A permanent resident generally must live in Canada to sponsor; confirm the current IRCC rules.`),
      source(`Do I need a minimum income to sponsor my spouse or dependent child in Canada?`, `Most spousal, partner and dependent-child sponsorships do not use the same minimum necessary income test as parent and grandparent sponsorship, though exceptions apply. Check the specific category and any social-assistance restrictions.`),
      source(`Can I sponsor a relative if I receive social assistance or have a previous undertaking?`, `Some circumstances can make a sponsor ineligible, including certain social-assistance situations or an unfulfilled sponsorship undertaking. Check the current category rules and disclose prior sponsorship history.`),
      source(`What financial undertaking does a Canadian family sponsorship agreement require the sponsor to sign?`, `A sponsor promises to provide basic support for a defined period and may have to repay certain social assistance received by the sponsored person. The duration and conditions depend on the family category and province.`),
      source(`Can I sponsor my brother, sister, aunt or other relative for Canadian PR?`, `Most relatives cannot be sponsored directly unless they meet a specific exception, such as a qualifying orphaned relative or the narrow “other relative” rule. Review IRCC’s list of who you can sponsor before applying.`),
      source(`Can I include dependent children in a family sponsorship application?`, `Some sponsorship categories allow accompanying dependent children, subject to the current age and dependency definition. Declare family members as required and follow the medical, identity and document instructions for each person.`),
      source(`Where can I check the official rules for sponsoring my family member to Canada?`, `Use the IRCC family-sponsorship overview and the application guide for the exact relationship. Confirm the current forms, fees, income rules and eligibility before submitting.`),
    ];
    if (slug.includes("spousal-open-work-permit")) return [
      source(`Who can get a spousal open work permit while their partner is in Canada?`, `Eligibility depends on the principal applicant’s status, permit or study program, occupation where relevant, and the relationship evidence. IRCC has different rules for spouses of workers, students and in-Canada sponsorship applicants.`),
      source(`Can I apply for a spousal open work permit while my spouse sponsorship is processing?`, `A sponsored spouse or partner may qualify if they are living in Canada with the sponsor, are included in the permanent-residence application and meet the other permit conditions. Usually IRCC must issue an AOR first, though a limited no-AOR exception can apply when status expires within two weeks. A sponsorship receipt alone does not authorize work.`),
      source(`Does a spouse need to be in Canada to apply for an open work permit?`, `The answer depends on the public policy or permit category being used. Check whether the applicant must be inside Canada, have valid status and meet the principal applicant’s current eligibility conditions.`),
      source(`What documents prove a marriage or common-law relationship for a spousal work permit?`, `Provide the relationship and status evidence requested for the exact permit category, such as a marriage certificate or records supporting a common-law relationship, along with the principal applicant’s permit or enrolment documents.`),
      source(`How long is a spousal open work permit valid in Canada?`, `Validity is generally tied to the principal applicant’s status or permit and the rules of the specific category. Check the issued permit and current IRCC instructions before planning employment or travel.`),
      source(`Can I work for any employer with a Canadian spousal open work permit?`, `An open permit normally is not tied to one employer, but it can still contain conditions or occupational restrictions. Read the permit and confirm any restriction before accepting work.`),
      source(`Can I extend a spousal open work permit before it expires?`, `An extension may be possible if the applicant and principal applicant continue to meet the category requirements. Apply before the expiry date where possible and verify whether maintained-status work rules apply.`),
      source(`Where can I check current spousal open work permit eligibility and forms?`, `Use IRCC’s open work permit page and the specific instructions for the principal applicant’s work, study or sponsorship route. Eligibility policies can differ across those categories.`),
    ];
    return [
      source(`Who can sponsor a spouse, partner, child or parent for Canadian permanent residence?`, `${pageSummary} Sponsor eligibility depends on status, age, residence, the relationship and any category-specific restrictions. Check the current IRCC guide for the family member you want to sponsor.`),
      source(`How do I prove a genuine marriage or common-law relationship for Canadian sponsorship?`, `Provide relationship evidence that fits your history, such as civil records, shared address or finances, communication and visits. Use the current checklist, explain gaps and keep dates consistent across forms.`),
      source(`Does spousal sponsorship in Canada have a minimum income requirement?`, `Most spouse, partner and dependent-child cases do not use the same minimum necessary income threshold as parent and grandparent sponsorship, subject to exceptions. Confirm the rules for your exact category.`),
      source(`For Canadian spousal sponsorship, what is the difference between the in-Canada class and Family Class (often called inland and outland)?`, `The in-Canada class generally requires the sponsored spouse or common-law partner to live with the sponsor in Canada. Family Class can include applicants inside or outside Canada, and conjugal partners must use that class. Travel and appeal rights differ. An eligible partner living in Canada with the sponsor may qualify for an open work permit under either class.`),
      source(`Can a sponsored spouse get an open work permit in Canada during inland or outland sponsorship processing?`, `A spouse or partner included in a permanent-residence application may qualify if they are living in Canada with the sponsor and meet IRCC’s other conditions. Usually IRCC must issue an AOR first; a limited no-AOR exception applies when status expires within two weeks. Someone outside Canada needs separate authorization to work in Canada.`),
      source(`What financial undertaking does a sponsor sign for a Canadian family sponsorship?`, `The sponsor undertakes to provide basic support for a period set by the family category and province. Review the duration and repayment responsibility before signing the undertaking.`),
      source(`Can I include dependent children in a Canadian family sponsorship application?`, `Some family applications can include eligible dependent children. Check the current age and dependency rules, declare all required family members and follow the medical and identity instructions.`),
      source(`Which forms, fees and documents are required for my family sponsorship application?`, `Use the application package for the exact relationship and class. Forms, fees and evidence differ among spouse, child, parent and other-relative applications and can change.`),
    ];
  }

  if (family === "visit") {
    if (slug.includes("super-visa")) {
      const hostPage = path.startsWith("/sponsor/");
      const comparisonPage = slug.includes("combined");
      const superVisaEligibilityUrl = `${ircc}/visit-canada/parent-grandparent-super-visa/eligibility.html`;
      const superVisaDocumentsUrl = `${ircc}/visit-canada/parent-grandparent-super-visa/forms-documents.html`;
      const superVisaIncomeUrl = "https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/changes-parents-grandparents-super-visa-income-requirement-calculated.html";
      const pgpPauseUrl = "https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/responsibly-manage-parent-grandparent-program.html";
      return [
        source(hostPage
          ? `Can I invite my parents to Canada on a Super Visa, and what must they qualify for?`
          : comparisonPage
            ? `When should parents choose a Canada Super Visa instead of a regular visitor visa?`
            : `Who qualifies for a Canada Super Visa for parents and grandparents of Canadians?`,
        `A parent or grandparent must apply from outside Canada, complete a medical exam and meet visitor admissibility requirements. Their child or grandchild in Canada must qualify as the host, meet the income rules and provide an invitation. A Super Visa is for a genuine temporary visit, so the applicant’s circumstances and ties also matter.`,
        [{ label: "IRCC Super Visa eligibility", url: superVisaEligibilityUrl }]),
        source(hostPage
          ? `What minimum income must a Canadian host show to invite parents on a Super Visa?`
          : comparisonPage
            ? `How does IRCC calculate the 2026 minimum necessary income for a Canada Super Visa host?`
            : `What income requirement applies to the child or grandchild hosting a Canada Super Visa visitor?`,
        `The host’s required minimum income depends on family size. Since March 31, 2026, IRCC can count income from either of the two tax years before application, or in some cases add the visiting parent’s or grandparent’s income if the host and any eligible co-signer meet the required minimum percentage. Use the current IRCC guide and the documents for your family size.`,
        [{ label: "IRCC 2026 Super Visa income calculation changes", url: superVisaIncomeUrl }, { label: "IRCC Super Visa documents and financial support", url: superVisaDocumentsUrl }]),
        source(hostPage
          ? `What medical insurance must my parents have for a Canadian Super Visa application?`
          : comparisonPage
            ? `How much private medical insurance coverage do parents need for a Canada Super Visa?`
            : `Which Canadian or foreign insurance companies can provide Super Visa health insurance?`,
        `The applicant needs private health insurance valid for at least one year from the date of entry, with at least CAD $100,000 in emergency coverage for health care, hospitalization and repatriation. A policy must be valid for each entry; a foreign insurer must meet IRCC’s approval rules. Check the live checklist before buying coverage.`,
        [{ label: "IRCC Super Visa insurance requirements", url: superVisaDocumentsUrl }]),
        source(hostPage
          ? `How long can my parents stay in Canada per entry on a Super Visa, and can they extend?`
          : comparisonPage
            ? `How long can parents stay in Canada with a Super Visa compared with a visitor visa?`
            : `How long is a Canada Super Visa valid, and how many years can each visit last?`,
        `A Super Visa can allow an eligible parent or grandparent to stay for up to five years at a time, and the visa can allow multiple entries for up to ten years. A parent or grandparent already in Canada may apply to extend their stay, generally for up to two more years, before their authorized status expires.`,
        [{ label: "IRCC Super Visa eligibility and length of stay", url: superVisaEligibilityUrl }]),
        source(hostPage
          ? `Which invitation, income and relationship documents must I provide as a Super Visa host?`
          : comparisonPage
            ? `What documents should a parent or grandparent include in a Canada Super Visa application?`
            : `What documents do parents need to apply for a Canada Super Visa?`,
        `The host should provide an invitation letter, proof of Canadian status, evidence of the parent or grandparent relationship and income documents. The applicant needs identity and travel records, qualifying insurance and medical-exam evidence, plus documents that explain the visit and show they meet the visitor requirements. Follow the personalized IRCC checklist.`,
        [{ label: "IRCC Super Visa forms and documents", url: superVisaDocumentsUrl }]),
        source(hostPage
          ? `Can my parents apply for a Super Visa while a Parents and Grandparents Program (PGP) file is pending?`
          : comparisonPage
            ? `Is a Canada Super Visa a permanent-residence alternative to PGP sponsorship?`
            : `Does a Canada Super Visa give parents permanent residence through the PGP?`,
        `No. A Super Visa is temporary visitor status, while the Parents and Grandparents Program is a separate permanent-residence sponsorship pathway. IRCC paused new PGP intake on July 15, 2026, but existing applications continue to be processed; a Super Visa application has its own eligibility rules.`,
        [{ label: "IRCC Parents and Grandparents Program status", url: pgpPauseUrl }, { label: "IRCC Super Visa eligibility", url: superVisaEligibilityUrl }]),
        source(hostPage
          ? `Can my parent or grandparent work in Canada while visiting on a Super Visa?`
          : comparisonPage
            ? `Does a Canada Super Visa let a parent work or study during a family visit?`
            : `Can parents work in Canada while visiting on a Super Visa?`,
        `No. A Super Visa is visitor authorization and does not itself permit employment. A visitor who plans to work must qualify for and obtain the appropriate work permit before starting work. Follow every condition on the visitor document while in Canada.`),
        source(hostPage
          ? `What can I do as the host if IRCC refuses my parent's Canada Super Visa application?`
          : comparisonPage
            ? `How can a parent respond to a refusal of a Canadian Super Visa or visitor visa?`
            : `What should I do if IRCC refuses my Canada Super Visa application?`,
        `Read the refusal letter and decision notes to identify the concern, such as the purpose of the visit, finances, ties outside Canada or missing evidence. Address that point with relevant documents before considering a new application. Reapplying without resolving the concern does not guarantee a different decision.`),
      ];
    }
    if (slug.includes("visitor-record")) return [
      source(`How do I extend my visitor status in Canada with a visitor record?`, `Apply online before your authorized stay expires and include the documents that explain why you need more time and how you will support yourself. A visitor record extends status; it is not a visa for re-entry.`),
      source(`When should I apply for a visitor record before my Canada visitor status expires?`, `Submit the extension application before the date your status ends. If you apply on time from inside Canada, maintained-status rules may let you remain under the same conditions while IRCC decides.`),
      source(`Can I work or study in Canada while waiting for a visitor record decision?`, `A visitor record does not normally authorize work or long-term study. Maintained visitor status keeps the existing conditions in place; it does not create work authorization.`),
      source(`Can I leave Canada and return while a visitor record application is processing?`, `A visitor record is not a travel document and does not guarantee re-entry. Check your passport, visa or eTA requirements before leaving, and understand that an officer decides whether to admit you on return.`),
      source(`Which documents should I include in a Canada visitor record extension application?`, `Provide identity and current-status documents, the requested extension period, a clear reason for staying longer, funds or sponsor support and any records that support your plan to leave or maintain lawful status.`),
      source(`Can my family members extend their visitor status with my visitor record application?`, `Each family member’s status and application requirements must be checked individually. Include all relevant details and submit separate applications where IRCC’s instructions require them.`),
      source(`What happens if my visitor status expires before I apply for an extension?`, `You may need to apply to restore status within the period allowed by IRCC and stop activities you are no longer authorized to do. Check the restoration rules promptly; do not assume a late application extends status.`),
      source(`How long does IRCC take to process a visitor record application in Canada?`, `Processing times vary with inventory and application details. Check IRCC’s current estimate for visitor record extensions and keep your status, travel plans and submission confirmation available.`),
    ];
    if (slug.includes("eta")) return [
      source(`Who needs an eTA to fly to Canada, and who needs a visitor visa instead?`, `Most visa-exempt foreign nationals need an eTA to board a flight to Canada, while visa-required nationals generally need a visitor visa. Nationality, travel document and travel method determine which document applies.`),
      source(`How do I apply for a Canadian eTA online, and what information do I need?`, `Apply through the official IRCC eTA service using the passport you will travel with, an email address and a payment card. Enter passport details carefully because the eTA is electronically linked to that passport.`),
      source(`How long is a Canada eTA valid, and does it expire with my passport?`, `An eTA is generally valid for up to five years or until the linked passport expires, whichever comes first. A new passport usually requires a new eTA; verify the current validity in your account.`),
      source(`Can a valid Canadian eTA guarantee that I will be allowed into Canada?`, `No. An eTA lets an eligible traveller board a flight to Canada, but it does not guarantee entry. A border officer makes the final decision and may ask about the trip and admissibility.`),
      source(`Can I use a Canadian eTA to enter Canada by land or sea?`, `The eTA is generally required for visa-exempt travellers flying to or transiting through a Canadian airport. Entry by land or sea follows different travel-document rules; check IRCC’s current guidance for your nationality.`),
      source(`What should I do if IRCC refuses or delays my eTA application?`, `Check the email and account instructions for the reason or any request. Do not submit duplicate applications without understanding the issue; a refusal may require a visitor visa application or further documents.`),
      source(`Can I work or study in Canada with an eTA?`, `An eTA is a travel authorization, not a work or study permit. You must qualify for the appropriate permit before engaging in work or study that requires authorization.`),
      source(`How can I check whether my Canada eTA is approved and linked to my passport?`, `Use IRCC’s eTA status tool and compare the approved passport number with the document you will use to travel. Airlines may check the electronic authorization before boarding.`),
    ];
    if (slug.includes("transit")) return [
      source(`Do I need a transit visa to connect through a Canadian airport?`, `Whether you need a transit visa, visitor visa or no visa depends on your nationality, travel documents, route and eligibility for a transit program. Check the official IRCC tool before booking.`),
      source(`What is the difference between a Canadian transit visa and Transit Without Visa (TWOV)?`, `A transit visa is a travel document for eligible visa-required travellers passing through Canada. TWOV and the China Transit Program have narrow eligibility and routing conditions; they do not apply to every connection.`),
      source(`Can I leave the Canadian airport during a layover with a transit visa?`, `A transit document is for passing through Canada to another destination and does not automatically authorize a visit outside the airport. Follow the document conditions and check whether a visitor visa is required for your plans.`),
      source(`How long can I transit through Canada without a regular visitor visa?`, `The allowed transit period and route depend on the applicable transit program and itinerary. Use the current IRCC eligibility instructions for your airline, airport and onward destination.`),
      source(`Which documents do I need for a Canada transit visa application?`, `Prepare a valid passport, onward ticket, destination entry documents and the evidence requested in the country-specific checklist. The exact list depends on the transit route and your nationality.`),
      source(`Can I transit through Canada if I already have a valid U.S. visa?`, `A U.S. visa alone does not automatically remove Canada’s transit-visa requirement. Check the official transit program rules and whether your itinerary qualifies for an exemption.`),
      source(`How do I apply for a Canadian transit visa before an international flight?`, `Apply through IRCC’s online process with your travel itinerary and supporting documents. Make the application early enough for processing and confirm which document your airline requires before boarding.`),
      source(`What should I do if IRCC refuses my Canadian transit visa application?`, `Read the refusal reasons, confirm whether the route or document type was correct and address the concerns with relevant evidence. Do not travel on the assumption that a transit connection removes visa requirements.`),
    ];
    if (slug.includes("business-visa")) return [
      source(`What business visitor activities can I legally do during a short visit to Canada?`, `Business visitors may attend meetings, conferences or certain commercial activities without joining the Canadian labour market, if they meet the visitor rules. The permitted activity and length of stay matter; a job in Canada may require a work permit.`),
      source(`Do I need a work permit to attend a business meeting in Canada?`, `A short business visit may qualify for visitor entry without a work permit, but only if the activity fits IRCC’s business visitor rules. Hands-on work or entering the Canadian labour market can require work authorization.`),
      source(`What documents should I carry as a business visitor entering Canada?`, `Carry a letter explaining the purpose and length of the visit, meeting schedule, who will pay expenses, evidence of employment abroad and any invitation or contract relevant to the visit.`),
      source(`Can I receive a salary from a Canadian company as a business visitor?`, `Business visitor status generally does not authorize work in the Canadian labour market. The source and nature of payment, duties and employer relationship matter; check whether a work permit is required.`),
      source(`Do business visitors to Canada need an eTA or visitor visa?`, `The travel document depends on nationality, passport and whether the visitor arrives by air. Use IRCC’s official tool to determine if you need a visitor visa, eTA or other authorization.`),
      source(`How long can a business visitor stay in Canada for meetings or a conference?`, `The border officer sets the authorized stay. Be ready to explain the dates and purpose of the visit, and leave by the date given or apply to extend status before it expires.`),
      source(`Can a business visitor apply for a Canadian work permit after arriving?`, `Do not assume visitor status can be changed to a work permit from inside Canada. In-Canada work-permit eligibility is limited; check the current application rules before starting work or changing status.`),
      source(`What should I do if a Canadian officer questions my business visitor plans?`, `Answer truthfully and provide documents showing your temporary business activity, itinerary, funding and ties outside Canada. Entry remains a decision for the border officer.`),
    ];
    return [
      source(`What are the Canada visitor visa (TRV) requirements for a temporary visit?`, `Applicants need the travel document required for their nationality and must satisfy the officer about the purpose of travel, funds, ties, admissibility and compliance with the permitted stay. Use the current checklist for the application location.`),
      source(`Which documents can support a Canada visitor visa application from my country?`, `Use the country-specific checklist. Common evidence includes a travel plan, proof of funds, employment or family ties, accommodation details and an invitation letter if relevant; an invitation does not guarantee approval.`),
      source(`How much money should I show for a Canadian visitor visa application?`, `IRCC does not set one universal minimum for every visitor. Show funds that reasonably cover the trip, accommodation and expenses, and document who will pay and where the money comes from.`),
      source(`What is the difference between a visitor visa, eTA and visitor record in Canada?`, `A visitor visa or eTA is a travel document used to seek entry, while a visitor record sets or extends status inside Canada. Nationality and travel method determine whether you need a visa or eTA.`),
      source(`How long can I stay in Canada after entering with a visitor visa?`, `The border officer sets the authorized stay; many visitors are admitted for up to six months unless a different date or condition applies. The visa expiry date is not necessarily the date your stay ends.`),
      source(`Can I extend my Canada visitor status before my visitor visa stay expires?`, `Apply for a visitor record before your authorized stay ends and follow IRCC’s current instructions. A visitor record may extend status inside Canada but is not a visa for re-entry.`),
      source(`Can I work or study in Canada while visiting on a visitor visa?`, `A visitor visa or visitor record does not normally authorize employment or long-term study. Obtain the appropriate permit unless a specific exemption applies and follow the conditions on your document.`),
      source(`What should I do if IRCC refuses my Canada visitor visa application?`, `Read the refusal reasons and decision notes, then address the specific concern with new or clearer evidence before considering another application. A new submission does not guarantee approval.`),
    ];
  }

  if (family === "citizenship") {
    if (slug.includes("pr-card")) {
      const combinedPrCitizenship = slug.includes("combined-overview");
      return [
        source(combinedPrCitizenship ? `Can I renew my Canadian PR card and apply for citizenship at the same time?` : `How do I renew an expired Canadian permanent resident (PR) card?`, `A PR card is a travel document and an expired card does not automatically end PR status. You can pursue a card renewal and citizenship application as separate processes if you independently meet each one’s requirements. Use IRCC’s current renewal guide and submit a PR-card application from Canada.`),
        source(combinedPrCitizenship ? `How do the 730-day PR residency obligation and 1,095-day citizenship rule differ in Canada?` : `How many days must I live in Canada to renew my PR card?`, `Most permanent residents must meet the 730-day residency obligation in each five-year period to keep PR status. Adult citizenship grant applicants generally need 1,095 days in their five-year eligibility period. The counting rules differ, so use the correct IRCC calculator and keep supporting travel records.`),
        source(combinedPrCitizenship ? `Can I renew a Canadian PR card from abroad, or do I need a PRTD to return?` : `Can I renew my Canada PR card while living outside Canada?`, `PR card renewal applications are generally made from inside Canada. A permanent resident abroad who needs to return by commercial carrier may need to apply for a permanent resident travel document instead.`),
        source(combinedPrCitizenship ? `Can I travel while a Canadian PR card renewal or citizenship application is processing?` : `Can I travel while my Canadian PR card renewal application is processing?`, `You may travel, but plan how you will return and remain available for any citizenship test, interview or ceremony. Airlines generally require a valid PR card or permanent resident travel document for PRs boarding commercial transport to Canada.`),
        source(combinedPrCitizenship ? `Which documents should I prepare for both Canadian PR card renewal and citizenship?` : `Which documents are required to renew or replace a Canadian PR card?`, `Use the current IRCC checklist for each application. A PR-card renewal commonly asks for identity, status, address and travel-history evidence, photos and the fee. Citizenship has its own checklist, which may request language, tax and physical-presence records.`),
        source(combinedPrCitizenship ? `What should a Canadian permanent resident do after a PR card is lost, stolen or damaged?` : `What should I do if my Canadian PR card is lost, stolen or damaged?`, `Apply for a replacement using IRCC’s current instructions and explain whether the card was lost, stolen or damaged. If you are outside Canada, check the PRTD process before travelling back.`),
        source(combinedPrCitizenship ? `Can I apply for Canadian citizenship if my PR card has expired or was lost?` : `Can I apply for Canadian citizenship if my PR card is expired?`, `An expired or missing PR card does not by itself end permanent-resident status. Citizenship applicants must still meet the current eligibility rules, including physical presence, tax requirements where applicable and any other required criteria.`),
        source(combinedPrCitizenship ? `How long does a Canadian PR card renewal take, and where do I check citizenship processing?` : `How long does IRCC take to renew a permanent resident card in Canada?`, `Processing times vary with application volume and completeness. Check IRCC’s current estimate for the exact PR-card or citizenship application type, and submit complete records with clear photographs where required. An estimate is not a guaranteed decision date.`),
      ];
    }
    if (slug.includes("prtd") || slug.includes("pr-travel-document")) return [
      source(`How can a Canadian permanent resident abroad apply for a PRTD?`, `A permanent resident outside Canada without a valid PR card can apply for a permanent resident travel document through the responsible visa office. The application includes evidence of identity and PR status.`),
      source(`Do I need a PRTD to fly back to Canada if my PR card expired?`, `Permanent residents generally need a valid PR card or PRTD to board a commercial flight, bus, train or boat to Canada. A PR card’s expiry does not itself end permanent-resident status.`),
      source(`What is the difference between a PRTD and a Canadian visitor visa?`, `A PRTD is for a person who already has Canadian permanent-resident status and needs a travel document to return. A visitor visa is for a foreign national seeking temporary entry.`),
      source(`Can a PRTD application be refused if I do not meet the PR residency obligation?`, `IRCC assesses whether you meet the residency obligation and whether an exception applies. Include accurate travel dates and supporting evidence; a refusal may affect how you return and whether appeal rights apply.`),
      source(`Which documents should I submit with a permanent resident travel document application?`, `Use the current visa-office checklist. It may require identity and PR-status documents, travel history, evidence of time in Canada and documents supporting any applicable humanitarian or other exception.`),
      source(`How long is a Canadian PRTD valid, and can I use it more than once?`, `A PRTD may be issued for a limited validity period and can be single or multiple entry depending on the decision. Read the document carefully and arrange a PR card after returning if eligible.`),
      source(`How long does it take to process a PRTD at a Canadian visa office?`, `Processing varies by office, application completeness and the complexity of the residency assessment. Check IRCC’s current estimate and the local visa-office instructions before booking travel.`),
      source(`Can I appeal a refusal of my Canadian permanent resident travel document (PRTD)?`, `A permanent resident may have a right to appeal a residency-obligation decision to the Immigration Appeal Division, subject to the applicable deadline. Follow the refusal letter and current IRB instructions.`),
    ];
    if (slug.includes("certificate") || slug.includes("proof-of-adoption")) return [
      source(`How do I apply for a Canadian citizenship certificate as proof of citizenship?`, `Use the citizenship certificate application if you need proof of Canadian citizenship, including a replacement for a lost or damaged certificate. The evidence depends on how citizenship was acquired.`),
      source(`What documents prove that I am a Canadian citizen by birth or descent?`, `The required records depend on your birth, parentage, adoption and citizenship history. Follow IRCC’s checklist and provide civil-status documents that connect you to the Canadian parent or adoption record.`),
      source(`Can a child born outside Canada receive a Canadian citizenship certificate?`, `A child may be a citizen by descent depending on the parent’s citizenship and the law that applies to the family’s circumstances. Check IRCC’s current citizenship-by-descent rules before applying.`),
      source(`How do I replace a lost, stolen or damaged Canadian citizenship certificate?`, `Apply for a replacement certificate using IRCC’s current process and provide the identity and citizenship evidence requested. Report a lost document where required and keep a copy of the submission.`),
      source(`Can I use a Canadian citizenship certificate to travel internationally?`, `A citizenship certificate proves citizenship but is not a travel document. Canadian citizens generally need a valid Canadian passport or other accepted travel document for international travel.`),
      source(`How long does IRCC take to process a citizenship certificate application?`, `Processing estimates vary with application volume and the evidence submitted. Check IRCC’s current citizenship-certificate estimate and respond promptly to any request for more documents.`),
      source(`Can an adopted child obtain Canadian citizenship or permanent residence?`, `The route depends on the adoptive parent’s status and whether the adoption meets Canadian legal requirements. Citizenship and permanent residence use different processes; check IRCC’s adoption guide for the correct route.`),
      source(`Where can I check the official forms for Canadian citizenship proof or adoption records?`, `Use the IRCC application package for a citizenship certificate or the specific adoption process. Do not substitute a PR sponsorship form for a direct citizenship-by-adoption application.`),
    ];
    if (slug.includes("minor-grant-of-citizenship")) return [
      source(`What are the Canadian citizenship requirements for a permanent-resident child under 18?`, `A minor must be a permanent resident and must not be under a citizenship prohibition. The required process depends on whether the child has a Canadian parent or a parent applying at the same time (minor 5(2)), or applies under minor 5(1). Physical-presence, tax and signature rules differ between those categories.`),
      source(`What is the difference between Canadian citizenship applications for a minor under section 5(1) and 5(2)?`, `Minor 5(2) is generally for a permanent-resident child with a Canadian parent or a parent applying for citizenship at the same time. Minor 5(1) is for a child without either connection and normally requires the child to meet the physical-presence and tax rules. Use IRCC’s current category comparison before filing.`),
      source(`How many days must a minor child live in Canada to apply for citizenship under 5(1)?`, `A minor 5(1) applicant generally needs 1,095 days in Canada within the five-year eligibility period, including at least 730 days as a permanent resident. A minor 5(2) applicant does not have the same physical-presence requirement. Check the child’s travel dates against IRCC’s current rules.`),
      source(`Does a child applying for Canadian citizenship need to file taxes or meet the physical-presence rule?`, `A minor 5(1) applicant may need to have filed taxes for at least three years in the five-year period if the child was required to file. Minor 5(2) applicants do not have the same physical-presence or tax-filing requirement. Confirm which category applies before using a checklist.`),
      source(`Do children applying for Canadian citizenship need a language test or citizenship test, and who takes the oath?`, `No. Minors under 18 do not need to prove English or French skills or take the citizenship knowledge test. A child aged 14 to 17 must generally take the oath; a child under 14 does not. A minor aged 14 or older also signs the application.`),
      source(`Which documents and parental consent are required for a minor's Canadian citizenship application?`, `The parent or legal guardian generally submits the child’s application and provides proof of identity, permanent-resident status, parentage or guardianship, and any required travel or name-change records. Minors aged 14 to 17 also sign. Follow the checklist for the 5(1) or 5(2) category.`),
      source(`Can a child born outside Canada apply for a citizenship grant, or should the parent request proof of citizenship?`, `A child born outside Canada to a Canadian parent may already be a citizen, depending on the parent’s history and the current citizenship-by-descent rules. In that case, the family may need a citizenship certificate rather than a citizenship grant. Check the correct IRCC route before filing.`),
      source(`How does a parent apply online for a child's Canadian citizenship and check processing status?`, `A parent or legal guardian can usually create the application in an IRCC online account and sign for the minor; a child aged 14 to 17 also signs. Some cases must be filed on paper. Check the current guide for online exceptions, fees and the application-status tool.`),
    ];
    if (slug.includes("adult-grant-of-citizenship")) return [
      source(`What are the Canadian citizenship requirements for an adult permanent resident applying for a grant?`, `Adults generally need permanent-resident status, at least 1,095 days of physical presence in the five-year eligibility period, tax filing when required, and must not be under a prohibition. Applicants aged 18 to 54 usually also prove English or French and pass the citizenship test; confirm the current IRCC guide for exceptions.`),
      source(`How many physical-presence days do adults need for a Canadian citizenship application?`, `Most adult grant applicants need 1,095 days in Canada within the five years immediately before applying. Some time as a temporary resident or protected person may count as half-days up to the allowed maximum. Use IRCC’s calculator and keep a buffer above the minimum if possible.`),
      source(`Do I need to file Canadian income taxes before applying for citizenship as an adult?`, `You may need to have filed Canadian income taxes for at least three years within the five-year eligibility period if the Income Tax Act required you to file. Check CRA records and IRCC’s current application guide for the exact years that apply to you.`),
      source(`Do adults need an English or French test and a citizenship test for Canadian citizenship?`, `Applicants aged 18 to 54 generally provide proof of English or French at the required level and pass the citizenship knowledge test. Adults aged 55 or older are exempt from both; a waiver may be available in some cases. Check the current IRCC age and evidence rules.`),
      source(`Which documents should I prepare for an adult Canadian citizenship application?`, `Use the current adult-grant checklist. Depending on your history, it can require identity documents, PR-status evidence, travel records, language proof, tax information, police certificates and name-change records. Keep the dates consistent and provide certified translations when IRCC requires them.`),
      source(`Can I travel outside Canada while my adult citizenship application is processing?`, `You may travel, but you must continue to meet eligibility requirements, remain reachable and attend any test, interview or ceremony IRCC schedules. As a permanent resident, make sure you have a valid document to board a commercial carrier back to Canada.`),
      source(`How long does IRCC take to process an adult Canadian citizenship grant application?`, `Processing time changes with inventory and file complexity. Use IRCC’s current citizenship-grant processing estimate and check your account for requests or test and ceremony notices; the estimate is not a guaranteed decision date.`),
      source(`What can I do if IRCC refuses my adult Canadian citizenship application?`, `Read the decision and reasons carefully, confirm whether the issue is eligibility, evidence or a legal prohibition, and follow any review or court deadline stated in the decision. Correct the specific gap before submitting another application; reapplying does not guarantee approval.`),
    ];
    return [
      source(`What are the eligibility requirements for ${entity}?`, `${pageSummary} Citizenship applications and related documents have different rules. Confirm the exact application type, status, relationship and required evidence in the current IRCC guide.`),
      source(`How do I calculate physical presence for a Canadian citizenship application?`, `Use IRCC’s physical-presence calculator and enter every trip and status date accurately. Most adult grant applicants need the required days within the five-year eligibility period; confirm the current rule for your application.`),
      source(`Do I need to file Canadian income taxes before applying for citizenship?`, `Many citizenship applicants must meet tax-filing obligations for the relevant years if required under Canadian tax law. Check the current IRCC checklist and CRA records before applying.`),
      source(`Do adults need an English or French test and citizenship test in Canada?`, `Language proof and the citizenship knowledge test apply to many applicants within specified age ranges, with exceptions. Check the current adult or minor guide for your age and situation.`),
      source(`Which documents should I include in a Canadian citizenship application?`, `The checklist depends on the application type. Common records include identity, immigration status, travel history, language evidence and tax information; use the current IRCC guide for your category.`),
      source(`Can I travel outside Canada while my citizenship application is processing?`, `You may travel, but you must remain eligible and attend any test, interview or ceremony IRCC schedules. Keep your PR status and a valid document to return to Canada.`),
      source(`How long does IRCC take to process a Canadian citizenship application?`, `Processing time changes with application volume and file checks. Use IRCC’s current estimate for the exact citizenship application type; it is not a guaranteed decision date.`),
      source(`What should I do if IRCC refuses my Canadian citizenship application?`, `Read the decision and reasons carefully, check whether the decision offers an appeal or review route, and follow the stated deadline. Correct any eligibility or document gap before submitting another application.`),
    ];
  }

  if (family === "legal") return [
    source(`What does ${entity} mean under Canadian immigration law?`, `${pageSummary} The process and consequences depend on the legal ground, decision-maker, current status and evidence. Identify the exact notice or decision and use the official instructions for that process.`),
    source(`What deadline applies to a response, appeal or court review for ${entity}?`, `Use the date and filing instructions in the decision or notice. Immigration response, appeal and judicial-review deadlines differ and can be short, so confirm the deadline immediately with the responsible tribunal or court.`),
    source(`Which documents and evidence should I gather for a ${entity} case?`, `Keep the notice, prior applications, identity and status records, a dated history and evidence that addresses each legal concern. Follow the decision-maker’s rules for translations, certified copies and submission format.`),
    source(`Can I stay, work or travel in Canada while my ${entity} matter is pending?`, `Do not assume a pending response or appeal extends status, authorizes work or pauses removal. The effect depends on the process and any order or permit; follow the notice and get case-specific guidance.`),
    source(`Can I appeal or request judicial review after a decision about ${entity}?`, `Only some decisions have a statutory appeal, while others may be reviewed by the Federal Court or through another process. Check the decision type, eligibility and deadline before choosing a route.`),
    source(`Can I reapply after an IRCC refusal connected to ${entity}?`, `A new application may be possible, but it does not cancel a prior decision. Address the specific refusal reasons with material evidence and confirm that your status and any filing deadline allow you to proceed.`),
    source(`How do I check the official status of a ${entity} case with IRCC or the IRB?`, `Use the online account or case-status service for the agency handling the matter. Keep your file number and check messages frequently for a hearing date, document request or decision.`),
    source(`Where can I find the official Canadian rules and forms for ${entity}?`, `Start with the government, tribunal or court page named in your notice and the current guide for the exact process. General articles cannot replace a case-specific deadline or order.`),
  ];

  if (family === "tools") {
    if (slug.includes("crs-calculator")) return [
      source(`How does a Canada CRS calculator estimate my Express Entry score?`, `It applies the Comprehensive Ranking System factors to the information you enter, including age, education, language, work experience and other eligible factors. Use the official IRCC calculator to verify the estimate.`),
      source(`Which factors affect my Express Entry CRS score in the IRCC calculator?`, `The CRS includes core human-capital points, spouse or partner factors when applicable, skill-transferability points and additional points under current rules. Use the current official calculator because criteria can change.`),
      source(`Does adding my spouse to an Express Entry profile increase or lower my CRS score?`, `The result depends on which spouse-related factors apply and how points are distributed between the principal applicant and spouse. Compare both calculations using accurate education, language and work records.`),
      source(`What CRS score do I need to get an Express Entry Invitation to Apply?`, `There is no fixed score that guarantees an invitation. IRCC sets a CRS cutoff for each round based on its category, invitation number and pool; past cutoffs do not predict future rounds.`),
      source(`How can I improve my Express Entry CRS score with language test results?`, `Improving an approved language-test result can affect core and skill-transferability points. Check the score using valid results and confirm the test remains within IRCC’s validity period when you submit.`),
      source(`Does a provincial nomination add 600 CRS points to my Express Entry profile?`, `An eligible nomination through an Express Entry-linked provincial stream adds 600 CRS points. A base PNP nomination uses a different process and does not add CRS points to an Express Entry profile.`),
      source(`Can this CRS calculator guarantee that IRCC will invite or approve me?`, `No. It is an estimate, not an eligibility decision or invitation. Confirm program eligibility, current rules and supporting records in your IRCC account before creating or updating a profile.`),
      source(`Where can I check my official Express Entry CRS score before submitting a profile?`, `Use IRCC’s official CRS calculator and check your score in your secure account after entering profile information. Keep test and education documents available to support every claimed point.`),
    ];
    if (slug.includes("pnp-eligibility")) return [
      source(`How does a Canada PNP eligibility checker match my profile to provincial streams?`, `A checker can compare details such as occupation, education, language, work history and provincial ties with selected stream criteria. Provinces make the official eligibility and invitation decisions.`),
      source(`Which profile details should I enter in a provincial nominee program eligibility checker?`, `Use accurate occupation duties and NOC code, language results, education assessment, work dates, job-offer information, current status and any family or provincial connection requested.`),
      source(`Can I qualify for an Ontario, Alberta or British Columbia PNP without a job offer?`, `Some streams require an eligible offer and others may select candidates without one. Compare the current stream rules for each province; a result for one province does not establish eligibility elsewhere.`),
      source(`Does a PNP eligibility checker guarantee that a province will nominate me?`, `No. A possible match is only a screening result. The province decides whether a stream is open, invites an Expression of Interest and assesses the full application and evidence.`),
      source(`Can I apply to more than one Canadian Provincial Nominee Program at the same time?`, `You must follow the requirements and declarations for each stream and intend to settle in the nominating province. Check the program rules before accepting a nomination or making conflicting declarations.`),
      source(`How do I verify whether a provincial nominee stream is open for applications?`, `Check the relevant province or territory’s current program page for intake status, eligible occupations, invitation rules and application deadlines. Stream availability can change without a general PNP-wide schedule.`),
      source(`What should I do after a PNP checker says I may qualify for a stream?`, `Verify every criterion against the official provincial guide, gather the required evidence and confirm the stream is accepting candidates. A nomination application and federal PR application are separate stages.`),
      source(`Where can I find official Provincial Nominee Program requirements for Canada?`, `Start with IRCC’s PNP overview, then open the official immigration authority for the province or territory. Use its current stream guide, forms and intake notice.`),
    ];
    if (slug.includes("noc-finder")) return [
      source(`How do I find the right Canadian NOC code for my job title and duties?`, `Search for the occupation whose lead statement and main duties best match the work you actually performed. Job title alone is not enough to choose a National Occupational Classification code.`),
      source(`Should my NOC code match my job title or the duties in my employer letter?`, `IRCC assesses the work performed against the NOC lead statement and main duties. The employer letter should describe real responsibilities, hours, dates and pay; it should not be rewritten to fit a code.`),
      source(`What does the NOC TEER category mean for a Canadian immigration application?`, `TEER groups occupations by training, education, experience and responsibilities. Eligibility rules for Express Entry and other programs use specific NOC versions and TEER categories, so check the exact program guide.`),
      source(`Can I use one NOC code for several jobs in my Express Entry work history?`, `Use the code that best matches the duties for each job. Different roles can have different codes, and each claimed period must meet the program’s work-experience rules and be supported by records.`),
      source(`How do I prove that my NOC occupation qualifies as skilled work for Express Entry?`, `Match the duties to the relevant NOC and confirm that the program accepts the category and type of experience. Provide employer evidence for duties, dates, hours, salary and status.`),
      source(`Can choosing the wrong NOC code delay or refuse my Canadian immigration application?`, `A mismatch between the selected occupation and the work evidence can raise eligibility concerns or require more review. Check the official NOC description carefully and correct any profile error before submitting.`),
      source(`Where can I search the official National Occupational Classification (NOC) database?`, `Use Employment and Social Development Canada’s official NOC search to compare the lead statement, main duties, exclusions and TEER category for an occupation.`),
      source(`Can a NOC Finder tool make an official decision about my work experience?`, `No. A search tool helps identify a likely occupation code, but IRCC or the responsible program assesses the evidence and decides whether the experience qualifies.`),
    ];
    if (slug.includes("document-checklist")) return [
      source(`Which documents are commonly required for a Canadian immigration application?`, `Identity, status, education, language, work, family and financial records are common, but the required evidence depends on the program, country and personal history. Use the personalized IRCC checklist for your application.`),
      source(`Where can I find the IRCC document checklist for my country and immigration program?`, `Answer the questions in the official application process and review the checklist generated for your route and country of residence. A checklist for another stream or location may not include your required documents.`),
      source(`Do Canadian immigration documents need certified translation into English or French?`, `Documents not in English or French generally need a translation that meets IRCC’s current rules, and some cases require an affidavit or certified translator. Follow the checklist for the application type.`),
      source(`How recent should bank statements and police certificates be for IRCC?`, `Validity requirements vary by document and application. Check the current guide for issue dates, coverage periods, translations and whether IRCC expects an original or certified copy.`),
      source(`What should I do if I cannot obtain a document on the Canada immigration checklist?`, `Follow IRCC’s instructions for missing documents and provide an explanation with evidence of your efforts where allowed. Do not leave a required field unexplained or submit a substitute without checking the guide.`),
      source(`Do I need to include documents for my spouse and dependent children in a PR application?`, `Family members may need identity, civil-status, medical, police or other records even if they are not accompanying. Use the checklist and declare family members as required by the specific program.`),
      source(`Can this Canada immigration checklist replace a review of my full application?`, `No. A checklist organizes common evidence but cannot assess every fact, eligibility issue or inconsistency. Compare the final file with the current program guide before submitting.`),
      source(`How can I check current Canadian immigration forms, fees and document instructions?`, `Use the official IRCC or provincial application guide for the exact program and submission date. Confirm forms, fees and upload requirements again before filing.`),
    ];
    if (slug.includes("free-assessment")) return [
      source(`What happens during a free Canadian immigration eligibility assessment?`, `You share your goal and key profile details so the team can identify possible routes and the information needed for a closer review. The assessment does not replace IRCC’s eligibility decision.`),
      source(`What information should I prepare before a Canada immigration consultation?`, `Have your current status and expiry date, passport, education, language results, work history, family details, funds and prior applications or refusals ready. Begin with what you have; the first conversation can identify missing records.`),
      source(`Do I need to upload all my documents before booking an immigration assessment?`, `Not necessarily. Start with the facts and documents requested in the booking process, and use a secure channel for sensitive records. Ask what information is needed and how it will be handled.`),
      source(`How do I check whether an immigration consultant is licensed in Canada?`, `Search the consultant’s name or licence number in the College of Immigration and Citizenship Consultants Public Register. Confirm the result matches the person advising you and check current status.`),
      source(`Can a licensed Canadian immigration consultant guarantee visa or PR approval?`, `No. IRCC or a province decides applications. An authorized consultant can provide services under a written agreement but cannot guarantee a visa, nomination, invitation or permanent residence.`),
      source(`Does a free immigration assessment mean the full application service is free?`, `Not automatically. Confirm in writing what the assessment includes, whether later work has a fee, what the quote covers and the cancellation or refund terms before signing an agreement.`),
      source(`Can I get a Canada immigration assessment if I live outside Brampton or Ontario?`, `Many consultations can be arranged remotely, but the relevant program rules depend on your facts and destination. Ask about service scope and verify the consultant’s current authorization before retaining them.`),
      source(`What should I do after an immigration consultant assessment identifies a possible route?`, `Check the route against its current government guide, gather evidence and confirm any deadline. If you retain a representative, review the written service agreement and understand the services and fees.`),
    ];
    return [
      source(`How does this Canada immigration tool estimate my eligibility or application score?`, `The tool uses the information entered to provide a planning estimate or organize questions. Check every answer against current official instructions; the result is not an immigration decision.`),
      source(`Which information should I have ready before using this Canadian immigration tool?`, `Gather current status, identity, education, language, work, family and application details that match the tool’s questions. Use source documents rather than memory and update any fact that has changed.`),
      source(`Can this immigration calculator or checklist guarantee approval from IRCC?`, `No. IRCC, a province or another decision-maker assesses the application and evidence. Use the tool to prepare, then confirm eligibility, forms and supporting documents in the current official guide.`),
      source(`How can I verify the result from this Canada immigration tool officially?`, `Compare the estimate with the official IRCC or provincial calculator and program page for your route. If the figures differ, use the current government instructions and review the inputs for mistakes.`),
      source(`What should I do if my immigration tool result does not match IRCC’s rules?`, `Check the information you entered, the date and the program version used by the tool. Follow the official source if a threshold, form or eligibility rule has changed.`),
      source(`Can an immigration consultant review the documents suggested by this tool?`, `An authorized representative can explain the scope of a review and identify missing evidence under a written agreement. Verify their current authorization before sharing sensitive documents or paying.`),
      source(`Where can I find current Canadian immigration forms, fees and processing times?`, `Use the official IRCC or provincial program page and its application checklist. Check fees and processing estimates again before filing because they can change.`),
      source(`When should I request a file-specific review after using this immigration tool?`, `Get a focused review when your case includes a refusal, status expiry, inadmissibility issue, employer or family complexity, conflicting records or a short deadline.`),
    ];
  }

  if (faqFamily(page) === "blog") return [
    source(`Where can I find Canadian immigration guides about Express Entry, work permits and sponsorship?`, `Use the article category and search filters to compare topics. Confirm any eligibility rule, fee or date in the official IRCC or provincial source before acting.`),
    source(`How do I check whether a Canada immigration blog article is current?`, `Check its updated date and open the linked government source. Immigration instructions can change, so verify the live application guide before relying on a copied threshold or deadline.`),
    source(`Can a Canadian immigration blog post replace the official IRCC application guide?`, `No. An article can explain a process, but the official guide and forms control the application. Follow the current instructions for your country, stream and submission date.`),
    source(`Which Canadian immigration topics should I research before choosing a pathway?`, `Start with your goal—permanent residence, work, study, family, visiting or citizenship—then compare eligibility, status, documents and deadlines using current official sources.`),
    source(`Can I rely on an old Canada immigration processing time or CRS cutoff?`, `Use past figures as historical context only. Check IRCC’s current processing-time tool or draw page for the relevant application or invitation round.`),
    source(`How do I verify official government sources linked from a Canadian immigration article?`, `Check that the source is published by IRCC, the relevant province, tribunal or regulator, and that its instructions apply to your specific program and application date.`),
    source(`Does reading an immigration guide mean I qualify for the program it describes?`, `No. A guide helps identify questions to check, but your eligibility depends on your complete facts and supporting evidence under the current rules.`),
    source(`When should I ask an authorized representative to review my Canada immigration options?`, `Consider an individualized review when a refusal, status deadline, inadmissibility issue, employer obligation or complex family fact changes the next step.`),
  ];

  return [
    source(`What are the main requirements for ${entity} in Canada, and who may qualify?`, `${pageSummary} Eligibility depends on the exact program, your status and the evidence you can provide. Start with the current official criteria for this route.`),
    source(`How do I apply for ${entity} in Canada, and which step should come first?`, `Identify the exact program and application class, confirm its minimum requirements and follow the current online or paper instructions. Record every deadline and save a copy of the submitted file.`),
    source(`Which documents should I gather to support an application for ${entity}?`, `The evidence depends on the route, but identity, status, education, work, language, family, financial and travel records are often relevant. Use the current checklist for your country and application type.`),
    source(`How much do ${entity} application fees cost for me and my family?`, `The total depends on the application category, family members and any biometrics or other services. Confirm the current fee list before submitting; do not rely on an amount from an older guide.`),
    source(`How long does IRCC take to process a Canadian ${entity} application?`, `Processing depends on application type, completeness, inventory and checks. Use IRCC’s current processing-time tool for the correct category; the estimate is not a promise.`),
    source(`Can I include my spouse or dependent children in an application for ${entity}?`, `Family-member rules vary by program. Declare required relatives and check who can be included, which forms are needed and whether each person needs separate status or an application.`),
    source(`What can cause an application for ${entity} to be delayed or refused?`, `Incomplete evidence, inconsistent dates, an unsuitable route, missed deadlines or unresolved admissibility concerns can create problems. Compare every claim with its supporting document and follow the latest instructions.`),
    source(`Where can I verify the official rules and forms for ${entity} in Canada?`, `Use the official IRCC, provincial or tribunal source for this route, then check its current application guide, forms and fees. Recheck before filing because requirements and intake details can change.`),
  ];
}

function officialFaqSource(page, question = "") {
  const path = String(page?.path || "").toLowerCase();
  const slug = path.split("/").filter(Boolean).at(-1) || "";
  const q = question.toLowerCase();
  const family = faqFamily(page);
  const ircc = "https://www.canada.ca/en/immigration-refugees-citizenship/services";
  const source = (url, label) => ({ url, label });

  if (path === "/pnp-draws") return source(ircc + "/immigrate-canada/provincial-nominees.html", "IRCC Provincial Nominee Program overview; see each draw's linked provincial notice");

  if (path.startsWith("/locations/")) {
    if (q.includes("provincial nominee") || q.includes("pnp") || q.includes("province")) {
      if (/vancouver|surrey|victoria|kelowna/.test(path)) return source("https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program", "British Columbia Provincial Nominee Program");
      if (/calgary|edmonton/.test(path)) return source("https://www.alberta.ca/aaip", "Alberta Advantage Immigration Program");
      if (/winnipeg/.test(path)) return source("https://immigratemanitoba.com/immigrate-to-manitoba/", "Manitoba Provincial Nominee Program");
      return source("https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp", "Ontario Immigrant Nominee Program");
    }
    if (q.includes("pgwp") || q.includes("post-graduation") || q.includes("student")) return source(ircc + "/study-canada/work/after-graduation/eligibility.html", "IRCC post-graduation work permit eligibility");
    if (q.includes("licensed") || q.includes("cicc")) return source("https://register.college-ic.ca/Public-Register-EN/Public-Register-EN/Default.aspx", "CICC Public Register");
    return source(ircc + "/immigration-citizenship-representative/choose.html", "Government of Canada guidance on immigration representatives");
  }

  if (q.includes("consultant") || q.includes("representative") || q.includes("rcic") || q.includes("retainer")) return source(ircc + "/immigration-citizenship-representative/choose.html", "Government of Canada guidance on immigration representatives");
  if (q.includes("eca") || q.includes("educational credential assessment")) return source(ircc + "/immigrate-canada/express-entry/documents/education-assessment.html", "IRCC Educational Credential Assessment instructions");
  if (q.includes("processing time") || q.includes("how long")) return source(ircc + "/application/check-processing-times.html", "IRCC processing times");
  if (q.includes("fee") || q.includes("cost")) return source("https://ircc.canada.ca/English/information/fees/fees.asp", "IRCC immigration and citizenship fee list");
  if (path.startsWith("/about/")) return source(ircc + "/immigration-citizenship-representative/choose.html", "Government of Canada guidance on immigration representatives");
  if (q.includes("noc") || q.includes("national occupational classification")) return source("https://noc.esdc.gc.ca/", "Employment and Social Development Canada NOC database");
  if (q.includes("pal") || q.includes("tal") || q.includes("attestation letter")) return source(ircc + "/study-canada/study-permit/get-documents/provincial-attestation-letter.html", "IRCC provincial and territorial attestation letters");
  if (q.includes("proof of funds") || q.includes("financial support")) return source(ircc + "/study-canada/study-permit/get-documents/financial-support.html", "IRCC study permit proof of financial support");
  if (q.includes("field of study") || q.includes("cip code")) return source(ircc + "/study-canada/work/after-graduation/eligibility/field-of-study.html", "IRCC PGWP field-of-study requirement");
  if (q.includes("crs score") || q.includes("crs calculator")) return source(ircc + "/immigrate-canada/express-entry/check-score.html", "IRCC Comprehensive Ranking System calculator");
  if (q.includes("category-based")) return source(ircc + "/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html", "IRCC Express Entry category-based selection");

  if (family === "tools") {
    if (slug.includes("crs")) return source(ircc + "/immigrate-canada/express-entry/check-score.html", "IRCC Comprehensive Ranking System calculator");
    if (slug.includes("pnp")) return source(ircc + "/immigrate-canada/provincial-nominees.html", "IRCC Provincial Nominee Program guide");
    if (slug.includes("noc")) return source("https://noc.esdc.gc.ca/", "Employment and Social Development Canada NOC database");
    if (slug.includes("document-checklist")) return source(ircc + "/application/application-forms-guides.html", "IRCC application forms and guides");
    return source(ircc + "/immigration-citizenship-representative/choose.html", "Government of Canada guidance on immigration representatives");
  }
  if (family === "express-entry") {
    if (slug.includes("federal-skilled-worker")) return source(ircc + "/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html", "IRCC Federal Skilled Worker Program");
    if (slug.includes("canadian-experience-class")) return source(ircc + "/immigrate-canada/express-entry/who-can-apply/canadian-experience-class.html", "IRCC Canadian Experience Class");
    if (slug.includes("federal-skilled-trades")) return source(ircc + "/immigrate-canada/express-entry/who-can-apply/federal-skilled-trades.html", "IRCC Federal Skilled Trades Program");
    return source(ircc + "/immigrate-canada/express-entry.html", "IRCC Express Entry guide");
  }
  if (family === "pnp") {
    if (slug.includes("british-columbia")) return source("https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program", "British Columbia Provincial Nominee Program");
    if (slug.includes("alberta")) return source("https://www.alberta.ca/aaip", "Alberta Advantage Immigration Program");
    if (slug.includes("saskatchewan")) return source("https://www.saskatchewan.ca/sinp", "Saskatchewan Immigrant Nominee Program");
    if (slug.includes("manitoba")) return source("https://immigratemanitoba.com/immigrate-to-manitoba/", "Manitoba Provincial Nominee Program");
    if (slug.includes("ontario")) return source("https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp", "Ontario Immigrant Nominee Program");
    if (slug.includes("nova-scotia")) return source("https://liveinnovascotia.com/skilled-worker", "Nova Scotia Nominee Program");
    if (slug.includes("new-brunswick")) return source("https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program.html", "New Brunswick Provincial Nominee Program");
    if (slug.includes("prince-edward")) return source("https://eoi.princeedwardisland.ca/ieoi/register/register", "Prince Edward Island Provincial Nominee Program Expression of Interest");
    if (slug.includes("newfoundland")) return source("https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/", "Newfoundland and Labrador immigration programs");
    if (slug.includes("yukon")) return source("https://yukon.ca/en/immigration", "Yukon immigration programs");
    return source(ircc + "/immigrate-canada/provincial-nominees.html", "IRCC Provincial Nominee Program guide");
  }
  if (family === "study") return source(ircc + "/study-canada/study-permit/eligibility.html", "IRCC study permit eligibility");
  if (family === "pgwp") return source(ircc + "/study-canada/work/after-graduation/eligibility.html", "IRCC post-graduation work permit eligibility");
  if (family === "work") {
    if (slug.includes("global-talent-stream")) return source("https://www.canada.ca/en/employment-social-development/services/foreign-workers/global-talent/requirements.html", "ESDC Global Talent Stream program requirements");
    if (slug.includes("tfwp-employer-compliance")) return source("https://www.canada.ca/en/employment-social-development/services/foreign-workers/employer-compliance.html", "ESDC Temporary Foreign Worker Program employer compliance");
    if (slug.includes("lmia-and-employer-services")) return source("https://www.canada.ca/en/employment-social-development/services/foreign-workers.html", "ESDC Temporary Foreign Worker Program for employers");
    if (slug.includes("lmia") || slug.includes("tfwp")) return source(ircc + "/work-canada/hire-temporary-foreign/find-need-labour-market-impact-assessment.html", "IRCC Labour Market Impact Assessment guidance");
    if (slug.includes("international-experience-canada")) return source(ircc + "/work-canada/iec.html", "IRCC International Experience Canada");
    if (q.includes("open work permit") || q.includes("spousal open work permit")) return source(ircc + "/work-canada/open-work-permit.html", "IRCC open work permit eligibility");
    if (q.includes("keep working") || q.includes("extend")) return source(ircc + "/work-canada/extend.html", "IRCC work permit extensions and maintained status");
    return source(ircc + "/work-canada/need-permit.html", "IRCC work permit type and eligibility guide");
  }
  if (family === "family") {
    if (slug.includes("parents-and-grandparents") || slug.includes("pgp") || slug.includes("minimum-necessary-income")) {
      if (q.includes("super visa") || q.includes("visit")) return source(ircc + "/visit-canada/parent-grandparent-super-visa/eligibility.html", "IRCC Super Visa for parents and grandparents");
      if (q.includes("paused") || q.includes("accepting new") || q.includes("intake")) return source("https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/responsibly-manage-parent-grandparent-program.html", "IRCC Parents and Grandparents Program intake notice");
      return source(ircc + "/application/application-forms-guides/guide-5772-application-sponsor-parents-grandparents.html", "IRCC Parents and Grandparents sponsorship guide");
    }
    if (q.includes("open work permit")) return source(ircc + "/family-sponsorship/spouse-partner-children/spouse-common-law-partner-canada-open-work-permit.html", "IRCC open work permit rules for sponsored spouses and partners");
    if (slug.includes("spousal-open-work-permit")) return source(ircc + "/work-canada/open-work-permit.html", "IRCC open work permit eligibility");
    if (slug.includes("sponsorship-eligibility")) return source(ircc + "/immigrate-canada/family-sponsorship.html", "IRCC family sponsorship eligibility");
    if (slug.includes("sponsorship-processing-times")) return source(ircc + "/application/check-processing-times.html", "IRCC family sponsorship processing times");
    return source(ircc + "/immigrate-canada/family-sponsorship.html", "IRCC family sponsorship guide");
  }
  if (family === "visit") {
    if (slug.includes("eta")) return source(ircc + "/visit-canada/eta.html", "IRCC electronic travel authorization (eTA)");
    if (slug.includes("transit")) return source(ircc + "/visit-canada/transit.html", "IRCC transit visa and transit programs");
    if (slug.includes("business-visa")) return source(ircc + "/visit-canada/business.html", "IRCC business visitor rules");
    if (slug.includes("super-visa")) return source(ircc + "/visit-canada/parent-grandparent-super-visa/eligibility.html", "IRCC Super Visa eligibility");
    if (slug.includes("visitor-record")) return source(ircc + "/visit-canada/extend-stay.html", "IRCC visitor record and status extension");
    return source(ircc + "/visit-canada/visitor-visa/eligibility.html", "IRCC visitor visa eligibility");
  }
  if (family === "citizenship") {
    if (slug.includes("prtd") || slug.includes("pr-travel-document")) return source(ircc + "/application/application-forms-guides/guide-5529-applying-for-permanent-resident-travel-document.html", "IRCC permanent resident travel document guide");
    if (slug.includes("pr-card")) return source(ircc + "/application/application-forms-guides/guide-5445-applying-for-a-permanent-resident-card-card-first-application-replacement-renewal-change-gender-identifier.html", "IRCC PR card application guide");
    if (slug.includes("certificate") || slug.includes("adoption")) return source(ircc + "/canadian-citizenship/proof-citizenship.html", "IRCC proof of Canadian citizenship guide");
    if (q.includes("physical presence") || q.includes("days")) return source(ircc + "/canadian-citizenship/adult-minor/how/physical-presence.html", "IRCC citizenship physical presence calculator");
    return source(ircc + "/canadian-citizenship/adult-minor/who.html", "IRCC citizenship eligibility");
  }
  if (family === "atlantic") return source(ircc + "/immigrate-canada/atlantic-immigration.html", "IRCC Atlantic Immigration Program");
  if (family === "agri-food") return source(ircc + "/application/application-forms-guides/guide-0117-agri-food.html", "IRCC Agri-Food Pilot closure and instructions");
  if (family === "community-pilot" || family === "municipal") return source(ircc + "/immigrate-canada/rural-franco-pilots.html", "IRCC Rural and Francophone Community Immigration Pilots");
  if (family === "business") return source(ircc + "/immigrate-canada/start-visa/designated-organizations.html", "IRCC Start-Up Visa status and designated organizations");
  if (family === "temporary-resident-to-pr") return source(ircc + "/immigrate-canada/tr-pr-pathway.html", "IRCC closed Temporary Resident to Permanent Resident pathway");
  if (family === "caregiver") return source("https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/pausing-home-care-worker-immigration-pilots-application-intake.html", "IRCC Home Care Worker pilot intake notice");
  if (family === "one-year-window") return source(ircc + "/application/application-forms-guides/guide-5205-applying-permanent-residence-within-canada-protected-persons-convention-refugees.html", "IRCC protected persons permanent residence guide and family-member rules");
  if (family === "refugee-travel-document") return source("https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/travel-documents-non-canadians/apply-who.html", "Government of Canada refugee travel document eligibility");
  if (family === "adoption") return source("https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians/adopt-child-abroad/processes/choose-process.html", "IRCC intercountry adoption process selector");
  if (family === "legal") {
    if (slug.includes("humanitarian-and-compassionate")) return source(ircc + "/application/application-forms-guides/humanitarian-compassionate-considerations.html", "IRCC humanitarian and compassionate application guide");
    if (slug.includes("protected-persons-apply-for-pr")) return source(ircc + "/immigrate-canada/protected-persons.html", "IRCC apply for permanent residence as a protected person");
    if (slug.includes("in-canada-refugee-claim")) return source(ircc + "/asylum/in-canada/eligibility.html", "IRCC refugee claim eligibility inside Canada");
    if (slug.includes("pre-removal-risk-assessment") || slug.includes("prra")) {
      if (q.includes("work") || q.includes("leave canada") || q.includes("travel")) return source(ircc + "/refugees/protection/refusal-options/pre-removal-risk-assessment/after-apply.html", "IRCC PRRA steps after applying, including work while waiting");
      if (q.includes("deadline") || q.includes("submit") || q.includes("eligible")) return source(ircc + "/refugees/protection/refusal-options/pre-removal-risk-assessment/how-to-apply.html", "IRCC PRRA eligibility and application deadlines");
      return source(ircc + "/refugees/protection/refusal-options/pre-removal-risk-assessment/after-apply.html", "IRCC PRRA assessment and next steps");
    }
    if (slug.includes("refusal-and-pfl-response")) return source(ircc + "/refugees/protection/refusal-options/federal-court-review.html", "IRCC options after an immigration refusal");
    if (slug.includes("citizenship-revocation")) return source(ircc + "/admissibility-enforcement/revoking-citizenship.html", "IRCC citizenship revocation process");
    if (slug.includes("prra")) return source(ircc + "/refugees/protection/refusal-options/pre-removal-risk-assessment/eligibility.html", "IRCC pre-removal risk assessment eligibility");
    if (slug.includes("protected-person")) return source(ircc + "/immigrate-canada/protected-persons.html", "IRCC permanent residence for protected persons");
    if (slug.includes("humanitarian")) return source(ircc + "/application/application-forms-guides/humanitarian-compassionate-considerations.html", "IRCC humanitarian and compassionate grounds");
    if (slug.includes("criminal") || slug.includes("rehabilitation") || slug.includes("deemed") || slug.includes("pardon") || slug.includes("trp")) return source(ircc + "/admissibility-enforcement/overcome-criminal-convictions.html", "IRCC overcoming criminal inadmissibility");
    if (slug.includes("sponsorship-appeal")) return source("https://irb-cisr.gc.ca/en/information-sheets/Pages/FactIadSai.aspx", "Immigration and Refugee Board appeals, including sponsorship appeals");
    if (slug.includes("removal-order-appeal") || slug.includes("residency-obligation-appeal")) return source("https://irb-cisr.gc.ca/en/making-immigration-appeal/Pages/immapp-bc1.aspx", "Immigration Appeal Division appeal instructions");
    if (slug === "removal-order") return source(ircc + "/admissibility-enforcement.html", "IRCC inadmissibility and enforcement guide");
    if (slug.includes("removal-order")) return source("https://irb-cisr.gc.ca/en/making-immigration-appeal/Pages/immapp-bc1.aspx", "Immigration Appeal Division removal order appeals");
    if (slug.includes("detention")) return source("https://www.irb-cisr.gc.ca/en/detention-hearings/Pages/detention-review-hearings.aspx", "Immigration Division detention review information");
    if (slug.includes("judicial") || slug.includes("mandamus") || slug.includes("stay-motion") || slug.includes("stay-of-removal")) return source(ircc + "/refugees/protection/refusal-options/federal-court-review.html", "IRCC Federal Court immigration judicial review guide");
    if (slug.includes("temporary-resident-permit") || slug.includes("trp")) return source(ircc + "/admissibility-enforcement/temporary-resident-permit/who-can-apply.html", "IRCC Temporary Resident Permit eligibility");
    if (slug.includes("refugee-claim")) return source(ircc + "/asylum/in-canada/eligibility.html", "IRCC refugee claim eligibility inside Canada");
    if (slug.includes("misrepresentation")) return source("https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/consequences-fraud.html", "IRCC consequences of misrepresentation and immigration fraud");
    if (slug.includes("medical")) return source(ircc + "/admissibility-enforcement/inadmissibility/reasons.html", "IRCC reasons for medical inadmissibility");
    if (slug.includes("arc-")) return source(ircc + "/admissibility-enforcement/authorization-return-canada/how-to-apply.html", "IRCC Authorization to Return to Canada application guide");
    if (slug.includes("deferral")) return source("https://www.cbsa-asfc.gc.ca/security-securite/rem-ren-eng.html", "CBSA removals and enforcement information");
    return source(ircc + "/admissibility-enforcement.html", "IRCC inadmissibility, enforcement and violations guide");
  }
  if (family === "draws") return source(ircc + "/immigrate-canada/express-entry/rounds-invitations.html", "IRCC Express Entry rounds of invitations");
  if (family === "blog") return source(ircc + "/immigrate-canada.html", "IRCC immigration programs and application guides");
  return source(ircc + "/immigrate-canada.html", "IRCC immigration programs and application guides");
}
const EXCLUDED_PATHS = new Set(["/privacy", "/terms", "/disclaimer", "/pay", "/contact/pay-immigration-consultation-canada"]);

/** Return FAQ blocks already present in the page's visible content. */
export function getInlineFaqs(page) {
  return contentFaqItems(page);
}

/** Return page-specific FAQ content sourced from the pageData Markdown contract. */
export function getPageFaqs(page, limit) {
  if (!page || EXCLUDED_PATHS.has(page.path) || String(page.path || "").startsWith("/legal/")) return [];
  if (Array.isArray(page.clientFaqs)) {
    const seenClientQuestions = new Set();
    return page.clientFaqs.map((item) => {
      const cleaned = cleanFaqItem(item?.question, item?.answer, item?.sourceLinks);
      if (!cleaned || cleaned.sourceLinks?.length) return cleaned;

      const questionAndAnswer = `${cleaned.question} ${cleaned.answer}`;
      if (/\b(CICC|RCIC|licensed|licence|license|authorized representative)\b/i.test(questionAndAnswer)) {
        return {
          ...cleaned,
          sourceLinks: [{
            url: "https://register.college-ic.ca/Public-Register-EN/Public-Register-EN/Default.aspx",
            label: "CICC Public Register",
          }],
        };
      }

      const companySpecific = /\bCMG\b|Commonwealth Migration|Bovaird|our (?:office|team|fees|services)|\bCMG['’]s\b/i.test(questionAndAnswer);
      return companySpecific ? cleaned : { ...cleaned, sourceLinks: [officialFaqSource(page, cleaned.question)] };
    })
      .filter((item) => {
        if (!item) return false;
        const key = item.question.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
        if (seenClientQuestions.has(key)) return false;
        seenClientQuestions.add(key);
        return true;
      });
  }
  const faqLimit = Number.isInteger(limit) ? limit : page.path === "/canada-immigration-from-uk" ? 10 : 8;
  const authoredFaqItems = contentFaqItems(page);
  const researchedFaqItems = candidateFaqItems(page);
  const keepAuthoredFirst = page.path === "/canada-immigration-from-uk"
    || page.path === "/locations"
    || String(page.path || "").startsWith("/locations/")
    || String(page.path || "").startsWith("/about/");

  const pageFaqItems = [
    ...specificFaqsFor(page),
    ...(keepAuthoredFirst ? authoredFaqItems : researchedFaqItems),
    ...structuredFaqItems(page),
    ...(keepAuthoredFirst ? researchedFaqItems : authoredFaqItems),
  ];
  const seen = new Set();
  return pageFaqItems.map((item) => {
    const cleaned = cleanFaqItem(item.question, item.answer, item.sourceLinks);
    if (!cleaned || cleaned.sourceLinks?.length) return cleaned;
    return { ...cleaned, sourceLinks: [officialFaqSource(page, cleaned.question)] };
  }).filter((item) => {
    if (!item) return false;
    const key = item.question.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, faqLimit);
}
