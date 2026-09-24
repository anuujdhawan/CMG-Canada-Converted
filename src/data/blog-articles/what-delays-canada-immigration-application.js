/**
 * Article body for `/blog/what-delays-canada-immigration-application`.
 *
 * Structured as a diagnostic rather than a list of causes. It covers missing or
 * inconsistent information, the difference between a returned and a refused
 * application, biometrics and medicals, background verification, document
 * requests and procedural fairness letters, then explains what each status
 * means and when a webform enquiry is appropriate. No processing time or
 * current figure is stated as a fact.
 */

const article = {
  slug: "what-delays-canada-immigration-application",

  quickAnswer:
    "Why is my Canada visa delayed? In most cases the answer is a missing or inconsistent document, an incomplete biometrics or medical step, a background or security check, or an outstanding document request. A returned application is not a refusal. Read your status, respond to every request by its deadline, and use a webform only when a genuine gap exists.",

  keyTakeaways: [
    "Most delays are procedural: an incomplete file, an outstanding request or verification that is still running.",
    "A returned application is not a refusal — it was never accepted, so no decision was made on the merits.",
    "Biometrics, medicals and background checks run on their own timetables, outside any published average.",
    "A procedural fairness letter is a serious step and requires a full, evidence-based response by the deadline.",
    "Your status tells you the stage your file has reached, not how long it will take to finish.",
    "A webform is useful when you have a specific question or a deadline at risk, not to repeat your status.",
  ],

  sections: [
    {
      id: "diagnose-the-delay",
      heading: "Why is my Canada visa delayed? Start by diagnosing the cause",
      body: [
        "Why is my Canada visa delayed is usually a question with a procedural answer rather than a sinister one. Delays cluster into a few causes: information that is missing or inconsistent, a biometrics or medical step not completed, background verification still running, an outstanding document request, or a procedural fairness letter awaiting your response.",
        "The diagnostic order matters. Start with the most recent communication from IRCC, because a request you have not answered will pause the file no matter what the status shows. Then check whether your status has changed or has been static since you filed.",
        "Only then ask whether the delay is unusual. Compare against the current published figure for your exact category, not a friend’s timeline in a different stream. An average conceals both faster and slower files.",
      ],
      list: {
        title: "The four causes worth checking first",
        items: [
          "Missing or inconsistent information in the application or its supporting documents.",
          "A biometrics instruction or medical request not yet completed.",
          "Background or security verification still running with partner agencies.",
          "An additional document request or a procedural fairness letter awaiting your reply.",
        ],
      },
    },
    {
      id: "missing-or-inconsistent-information",
      heading: "What happens when information is missing or inconsistent?",
      body: [
        "Missing or inconsistent information is the most common and most avoidable cause of an IRCC application delay. Missing information is a document the checklist requires and the file does not contain. Inconsistent information is subtler: a date that differs between two forms, an unexplained gap in an employment history, or funds that do not reconcile with the statements provided.",
        "Inconsistency costs time because it has to be resolved. An officer who cannot reconcile two documents either requests clarification, which pauses the file, or decides on the material available. Neither is fast, and the second is worse.",
        "Audit your own file before you submit. Check that names and dates are formatted identically throughout, that every period of work and study is accounted for, and that a reference letter states your duties and hours, not just your title.",
      ],
      callout: {
        label: "What this means for you",
        text: "Read your forms and your supporting documents side by side, as a stranger would. If two documents tell a slightly different story, resolve it before filing rather than explaining it later.",
      },
    },
    {
      id: "returned-versus-refused",
      heading: "What is the difference between a returned application and a refused one?",
      body: [
        "A returned application is not a refusal. A return means the file was not accepted as complete — a form was missing, a fee was wrong, a required document was absent — so it was sent back and no officer assessed the merits. A refusal is a decision against you after assessment, and the two have very different consequences.",
        "The practical cost of a return is time, not status. You lose the interval between filing and the return, and when you refile the completeness check starts again. It does not on its own create a refusal record, but it does not advance you either.",
        "A refusal needs a different response. A refusal rests on reasons, and those reasons determine whether there is a route to challenge the decision or to address the concern in a new application. Read the reasons carefully before deciding what to do.",
      ],
      related: [
        { href: "/inadmissibility-and-appeals/refusal-and-pfl-response", label: "Refusal and PFL response" },
      ],
    },
    {
      id: "biometrics-and-medical",
      heading: "What happens if biometrics or medical instructions are not completed?",
      body: [
        "If biometrics or medical instructions are not completed, processing does not advance, because these steps are prerequisites for the stages that follow. Biometrics are collected at a designated location after you receive the instruction, and they are valid only for a set period.",
        "The medical examination is performed by a panel physician and its results are valid for a set period as well. The delay is often self-inflicted rather than administrative: an instruction sits in an inbox, an appointment is booked later than it needed to be, or results take time to reach IRCC.",
        "Treat an instruction as time-critical. Book the appointment as soon as the instruction arrives, attend the medical when asked, and keep the validity periods in mind if you plan to travel.",
      ],
      callout: {
        label: "What this means for you",
        text: "An instruction letter is a deadline, even when it does not read like one. Book the appointment the day the instruction arrives and keep the confirmation.",
      },
    },
    {
      id: "background-and-security",
      heading: "How do background and security checks affect timing?",
      body: [
        "Background and security checks affect timing because they depend on verification by other people. IRCC confirms information with partner agencies in Canada and with authorities abroad, and those checks take as long as they take. There is no queue position to hold and no way to speed the verification up from the applicant side.",
        "What lengthens this stage is complexity in your own history. Time spent in several countries, a prior refusal or removal, a name that matches another record, or a gap in an address history can all trigger further verification. That is not an accusation; it is the nature of a check that must be resolved before a decision can be made.",
        "What you control is consistency. Every address, employer, date and country you have declared should match your police certificates and reference letters.",
      ],
    },
    {
      id: "additional-document-requests",
      heading: "What should you do when IRCC requests additional documents?",
      body: [
        "When IRCC requests additional documents, the file is paused until you respond, so the response is the priority. Read the request carefully, note the deadline, and provide exactly what was asked for. If it specifies a document, a form or a period of time, supply that rather than a bundle that leaves the officer to search for the relevant page.",
        "If you cannot obtain a document in time, respond before the deadline explaining why, what you have done to obtain it, and when you expect to provide it. Silence is the worst response, because an officer who receives nothing must decide on the material already on file.",
        "Keep a copy of everything you send and note the date. A simple log prevents duplication or a missed second request.",
      ],
      list: {
        title: "How to answer a document request",
        ordered: true,
        items: [
          "Read the request in full and identify the exact document, form or period required.",
          "Note the deadline and diarise it, allowing time for translation or certification.",
          "Send exactly what was asked for, labelled so the officer can match it to the request.",
          "If you cannot meet the deadline, explain why in writing before it passes.",
        ],
      },
    },
    {
      id: "procedural-fairness-letters",
      heading: "What is a procedural fairness letter and what does it require?",
      body: [
        "A procedural fairness letter is a formal notice that IRCC is considering refusing your application and is giving you an opportunity to respond before it decides. It sets out the concern — a credibility issue, a document that appears inconsistent, a possible ground of inadmissibility — and invites you to address that concern with evidence.",
        "It is a serious step and should be read as one. The letter means an officer has identified a specific problem that could lead to a refusal, and your response is the last opportunity to resolve it in this application.",
        "The response should be tailored to the concern actually raised, supported by documents rather than assertions, and sent within the stated deadline. If the concern involves admissibility or an allegation of misrepresentation, take advice before you reply.",
      ],
      related: [
        { href: "/inadmissibility-and-appeals/refusal-and-pfl-response", label: "Responding to a refusal or a fairness letter" },
      ],
    },
    {
      id: "what-status-means",
      heading: "What does each Canada immigration application status actually mean?",
      body: [
        "Each Canada immigration application status describes a stage, not a duration. The status is a snapshot of where the file sits in the process, and the same status can last a short time for one file and a long time for another depending on the category and the office. Reading it as a countdown turns a normal wait into an apparent delay.",
        "The table below sets out the common statuses and what each one is telling you. The right-hand column matters most: in several stages the correct action is nothing at all, while in others there is a request waiting that will pause the file until it is answered. A status that has not changed is not automatically a status that is stuck.",
      ],
      table: {
        caption: "Common application statuses and what they mean",
        columns: ["Status", "What it means", "What you should do"],
        rows: [
          ["Received", "IRCC has the application but has not begun assessing it", "Confirm the fee and forms were current when you filed"],
          ["In process", "An officer is working on the file", "Watch for requests and respond by the deadline"],
          ["Eligibility review", "Your program requirements are being assessed against the evidence", "Check that the documents on file support every claim"],
          ["Background check", "Verification with partner agencies is under way", "Keep your details consistent and avoid duplicate enquiries"],
          ["Medical results received", "The panel physician’s results have been logged", "Note the validity period if you plan to travel"],
          ["Decision made", "A decision has been reached and will be communicated", "Wait for the written decision before acting"],
          ["Application returned", "The file was not accepted as complete and was sent back", "Fix the defect and refile; the clock restarts"],
        ],
      },
    },
    {
      id: "webform-enquiries",
      heading: "When is a webform enquiry appropriate, and when is it not?",
      body: [
        "A webform enquiry is appropriate when you have a specific question the status cannot answer, or a deadline genuinely at risk. Good examples are asking whether a document you sent was received, confirming that a change of address has been recorded, or flagging a date the delay is putting in jeopardy.",
        "A webform enquiry is not appropriate as a way of asking for progress. Enquiries that restate the status or repeat a previous message add to the queue without producing information.",
        "If a genuine gap exists and repeated enquiries have produced nothing, the next step is different in kind. A long, unexplained delay can support an application to the Federal Court for mandamus, which asks the court to order that a decision be made.",
      ],
      related: [
        { href: "/inadmissibility-and-appeals/mandamus-application", label: "Mandamus application" },
      ],
    },
    {
      id: "pre-escalation-checklist",
      heading: "What should you check before you enquire or escalate?",
      body: [
        "Before you enquire or escalate, work through the file in a fixed order so that you are not asking IRCC to answer a question you could have answered yourself. Most delays that feel unexplained turn out to be an outstanding request, an incomplete step or verification that is still running.",
        "The checklist below is the order that resolves the largest number of cases. If you reach the end and the delay is still unexplained and materially beyond the current published figure for your category, that is when a well-argued webform becomes reasonable.",
        "One further point applies if your status is precarious. If a permit or status is due to expire and the decision has not arrived, the question is not only about the delay but about maintaining status and any request to defer removal.",
      ],
      list: {
        title: "Pre-escalation checklist",
        ordered: true,
        items: [
          "Confirm you have responded to every request, medical and biometrics instruction.",
          "Check that the fee and forms were the current versions when you filed.",
          "Compare your elapsed time with the current published figure for your exact category.",
          "Review your forms and documents for any inconsistency an officer would have to resolve.",
          "If your status is expiring while you wait, treat that as a separate and urgent question.",
        ],
      },
      related: [
        { href: "/inadmissibility-and-appeals/deferral-request", label: "Deferral request" },
      ],
    },
  ],

  glossary: [
    { term: "Returned application", definition: "An application sent back because it was incomplete. It is not a refusal and no decision is made on the merits." },
    { term: "Procedural fairness letter", definition: "A formal notice that IRCC is considering refusing an application and is giving the applicant an opportunity to respond before a decision is made." },
    { term: "Biometrics", definition: "Fingerprints and a photograph collected at a designated location after an instruction from IRCC, valid only for a set period." },
    { term: "Panel physician", definition: "A doctor approved by IRCC to perform the immigration medical examination and submit the results." },
    { term: "Mandamus", definition: "An order sought from the Federal Court requiring a decision-maker to make a decision that has been unreasonably delayed." },
  ],

  faqs: [
    {
      question: "Why is my Canada visa delayed when my application was complete?",
      answer:
        "A complete application can still be slow because completeness is only the first stage. After it, the file goes through eligibility review and background verification, and verification depends on partner agencies and authorities abroad. If you have answered every request, a delay within the normal spread for your category is usually the file waiting rather than something being wrong.",
    },
    {
      question: "Does a returned application count as a refusal on my record?",
      answer:
        "No. A returned application was not accepted as complete, so it was sent back and no decision was made on the merits. It is not a refusal and it does not create a refusal record. The practical cost is time, because you lose the interval before the return and the completeness check restarts when you refile.",
    },
    {
      question: "What should I do if I receive a procedural fairness letter?",
      answer:
        "Read it carefully to identify the exact concern, note the deadline, and respond with evidence that addresses that concern rather than a general restatement of your case. A fairness letter means a refusal is being considered. If the concern involves admissibility, misrepresentation or a complex history, take advice before you reply.",
    },
    {
      question: "How long should I wait before sending a webform?",
      answer:
        "There is no fixed interval, but the trigger is not time alone. Send a webform when you have a specific question the status cannot answer, or a deadline genuinely at risk, and only after you have confirmed you have responded to every request. An enquiry that simply asks for an update adds to the queue without producing information.",
    },
  ],

  related: [
    { href: "/inadmissibility-and-appeals/refusal-and-pfl-response", label: "Refusal and PFL response", note: "How to read the reasons and respond to a fairness letter or refusal." },
    { href: "/inadmissibility-and-appeals/mandamus-application", label: "Mandamus application", note: "The Federal Court remedy for an unreasonably delayed decision." },
    { href: "/inadmissibility-and-appeals/deferral-request", label: "Deferral request", note: "What to consider when status or removal timing is at stake." },
    { href: "/tools/canada-immigration-calculators", label: "Immigration calculators", note: "Check your own facts against program requirements." },
  ],

  sources: [
    { label: "IRCC — Check processing times", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html" },
    { label: "IRCC — Immigration Levels Plan", url: "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/corporate-initiatives/levels.html" },
    { label: "IRCC — Express Entry", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html" },
  ],
};

export default article;
