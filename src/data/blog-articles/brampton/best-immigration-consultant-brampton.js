import { site } from "../../../config/site.js";

const bookingPath = "/contact/book-immigration-consultation-canada";
const bramptonPath = "/locations/brampton";

export default {
  quickAnswer: "The best immigration consultant in Brampton for your case is an authorized professional in good standing, with experience in your type of application, a written service agreement that clearly sets out the work and fees, and advice you can understand. Check the person’s current regulatory record before paying. No representative can guarantee an immigration decision.",
  quickAnswerCta: { href: bookingPath, label: "Book a consultation" },
  keyTakeaways: [
    "“Best” is not an official ranking; choose the representative whose authorization, experience and service scope fit your case.",
    "Check the individual adviser on the regulator’s current public register before sharing sensitive records or paying.",
    "Get a signed written agreement that separates professional fees, government charges, taxes and other expenses.",
    "A representative cannot guarantee approval or obtain special treatment from an officer.",
    "Ask who will handle your file, how you will receive updates and what happens if the work falls outside the agreed scope.",
  ],
  inlineLinks: {
    "IRCC": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/learn-about-representatives.html",
    "IRCC’s representative-selection guidance": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html",
    "College of Immigration and Citizenship Consultants Public Register": site.rcic.profileUrl,
    "CICC Public Register": site.rcic.profileUrl,
    "Use of a Representative form (IMM 5476)": "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/imm5476.html",
    "written service agreement": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html",
    "current CMG Refund Policy": "/legal/refund-policy",
    "Brampton office": bramptonPath,
    "Brampton": bramptonPath,
    "Express Entry": "/immigrate/express-entry",
    "Ontario Immigrant Nominee Program (OINP)": "/immigrate/ontario-pnp-oinp",
    "other provincial nominee programs": "/immigrate/provincial-nominee-program-all-provinces-consolidated",
    "spousal and common-law sponsorship": "/sponsor/spousal-and-partner-sponsorship-overview",
    "Super Visas for parents and grandparents": "/sponsor/super-visa-for-parents",
    "LMIA-based work permits": "/work-and-study/lmia-and-employer-services-overview",
    "spousal open work permits": "/sponsor/spousal-open-work-permit",
    "open work permit extensions": "/work-and-study/canada-work-permit-overview",
    "Post-Graduation Work Permit (PGWP)": "/work-and-study/post-graduation-work-permit-pgwp",
    "Vulnerable Open Work Permits": "/work-and-study/canada-work-permit-overview",
    "study permits and extensions": "/work-and-study/canada-study-permit",
    "visitor visas and TRV stamping": "/visit/visitor-visa-trv-standalone-page",
    "Temporary Resident Permits": "/inadmissibility-and-appeals/temporary-resident-permit-trp",
    "applications after a previous refusal": "/inadmissibility-and-appeals/refusal-and-pfl-response",
  },
  sections: [
    {
      id: "what-best-means",
      heading: "What makes an immigration consultant the right fit in Brampton?",
      body: [
        "“Best” is not a licence category or an official ranking. It means a professional whose authorization and experience fit the work you need, who explains the proposed service in plain language, and who sets out the agreement before you commit. Use the same questions with each Brampton immigration consultant you compare.",
        "Start with the application or decision in front of you. Someone preparing an Express Entry profile may need different experience from a family working on sponsorship, a student planning a permit extension or a worker dealing with a refusal. Ask how the representative would assess your particular facts, what documents are missing and what work is included.",
      ],
      list: {
        title: "Compare these six points",
        items: [
          "Authorization and good standing: identify the individual who will advise you and verify that person with the relevant regulator.",
          "Relevant experience: ask about the specific program, application stage or issue in your file.",
          "Clear scope: confirm whether the service covers advice, document review, preparation, submission and follow-up.",
          "Written fees: ask for professional fees, taxes, government charges and third-party expenses to be shown separately.",
          "Accountable communication: agree on your main contact, expected updates and how urgent correspondence is handled.",
          "Accessible advice: confirm the meeting format and language support you need before sending sensitive documents.",
        ],
      },
    },
    {
      id: "verify-immigration-consultant",
      heading: "How to verify an immigration consultant in Brampton",
      body: [
        "A business name or website badge does not verify the person who will give you paid advice. Under federal rules, paid representatives must be authorized, and IRCC may return or refuse an application if a paid representative is not authorized. Hiring a representative is optional; if you choose one, check the individual’s record yourself before paying.",
      ],
      list: {
        title: "Complete these checks before you sign",
        ordered: true,
        items: [
          "Ask for the full name and licence number of the person who will advise you. An RCIC number begins with R followed by six digits.",
          "Search the CICC Public Register by name or licence number and confirm the current status and contact details.",
          "Check the licence class against the work you need. Most applications are within an RCIC’s scope; representation at Immigration and Refugee Board hearings requires the applicable IRB authorization.",
          "Match the person on the register to the adviser named in your agreement. Ask who prepares the file and who is accountable for the advice.",
          "Confirm that the paid representative is identified on the Use of a Representative form (IMM 5476) where required for your application.",
        ],
      },
      afterListBody: [
        "Commonwealth Migration Group’s site identifies Pankaj Khanna as an RCIC, licence R711256. You can verify the current record directly on the CICC register before signing an agreement.",
      ],
    },
    {
      id: "rcic-lawyer-paralegal-ontario",
      heading: "RCIC vs immigration lawyer vs paralegal in Ontario",
      body: [
        "Several regulated professionals may work on immigration matters, but their authority is not identical. Match the person’s licence to the service you need. The Law Society of Ontario says a paralegal licence covers immigration services connected to Immigration and Refugee Board advocacy; it does not cover preparing IRCC applications or advising clients about those applications.",
      ],
      table: {
        caption: "Who can help with different immigration matters",
        columns: ["Professional", "What their authorization generally covers", "When to ask for them"],
        rows: [
          ["RCIC (CICC licence)", "Paid advice and representation on most immigration and citizenship applications, within the consultant’s competence and licence conditions.", "Express Entry, provincial nomination, permits, visitor visas and sponsorship."],
          ["RCIC-IRB", "RCIC services plus representation before the Immigration and Refugee Board, within the applicable class of licence.", "Refugee or other IRB proceedings where that licence class is required."],
          ["Immigration lawyer", "Immigration advice and representation within the lawyer’s licence and competence, including court work.", "Federal Court matters, judicial review, litigation or complex legal issues."],
          ["Ontario paralegal", "Limited immigration services connected with proceedings before the Immigration and Refugee Board; not general IRCC application preparation.", "A proceeding within the paralegal’s authorized scope. Verify the current Law Society rules."],
        ],
      },
      afterListBody: [
        "For a typical permanent-residence, work-permit or sponsorship application, an authorized RCIC may be a suitable representative. If your matter involves Federal Court, criminal law, complex inadmissibility or litigation, ask whether a lawyer should handle it or work alongside your representative.",
      ],
    },
    {
      id: "compare-fees-and-refund-terms",
      heading: "How to compare immigration consultant fees in Brampton",
      body: [
        "There is no single government-set price for private immigration consulting. Fees depend on the program, complexity, number of applicants and tasks included. Ask every Brampton immigration consultant for a written quote that separates professional fees from HST, IRCC or provincial government fees, and third-party costs such as translation or courier charges.",
        "Request CMG’s current written quote for your file and compare the same scope of work across providers. Government charges are separate from professional fees, so confirm who pays each amount and when.",
      ],
      table: {
        caption: "Items to separate in a written immigration-services quote",
        columns: ["Quote item", "What to confirm"],
        rows: [
          ["Professional fee", "Which advice, document review, preparation, submission and follow-up tasks are included?"],
          ["Government fees", "Which IRCC or Ontario charges are separate and paid to the government?"],
          ["Taxes and disbursements", "Are HST, translation, medical exam, courier or other third-party expenses additional?"],
          ["Extra work and withdrawal", "How are additional tasks approved, and what do the signed agreement and refund policy say if the engagement ends?"],
        ],
      },
      cta: { href: bookingPath, label: "Book a consultation", note: "Ask for the scope and current fees in writing before you decide." },
      afterListBody: [
        "Read the signed service agreement and the current CMG Refund Policy before paying. The public policy says professional fees are generally non-refundable, with a limited discretionary exception if CMG cannot complete the agreed services for reasons not caused by the client. The signed agreement governs the terms of your engagement.",
      ],
    },
    {
      id: "red-flags",
      heading: "Red flags to avoid when hiring an immigration consultant",
      body: [
        "A representative can explain options, prepare work covered by an agreement and communicate with government on your behalf. The representative cannot control the decision. IRCC says that using a representative does not draw special attention to an application or make approval more likely.",
      ],
      list: {
        items: [
          "Guaranteed approval for a visa, work permit or permanent residence.",
          "A missing licence number, a record that does not match, or reluctance to identify the individual adviser.",
          "No written agreement, unclear government charges, or no receipt for a payment.",
          "Pressure to sign immediately or leave out, change or conceal information.",
          "A job offer or LMIA sold as a guaranteed immigration result.",
          "Requests to sign blank forms or hand over your account password without a clear reason and safe process.",
        ],
      },
    },
    {
      id: "prepare-for-consultation",
      heading: "What to bring to your first consultation",
      body: [
        "A focused first conversation helps the professional understand your goal, current status, history and any deadline. Bring copies or a secure summary of the records that apply to your question; ask how to share sensitive documents safely.",
      ],
      list: {
        title: "Useful starting documents",
        items: [
          "Passport and current Canadian status documents, including permit expiry dates.",
          "Education records, an Educational Credential Assessment if you have one, and language test results.",
          "A timeline of work history and employer reference letters.",
          "Prior applications, refusal letters, requests from IRCC or other government correspondence.",
          "Your main goal and target timeline, plus any deadline stated in a letter.",
        ],
      },
    },
    {
      id: "cmg-brampton-services",
      heading: "Immigration services in Brampton at Commonwealth Migration Group",
      body: [
        "Commonwealth Migration Group Inc. is based at 2250 Bovaird Dr E, Suite 615, Brampton, Ontario. The firm’s site identifies Pankaj Khanna, RCIC R711256, as its licensed consultant. Clients can meet at the Brampton office or arrange an online consultation. Confirm availability before travelling.",
        "The team consults in English, Hindi, Punjabi, Marathi, Gujarati, French and Arabic. Ask who will advise you, what the proposed service includes and how the fee is calculated before you decide to proceed.",
      ],
      image: {
        src: "/images/team/pankaj-khanna.webp",
        alt: "Portrait of Pankaj Khanna, an immigration consultant Brampton clients can meet with, RCIC R711256",
        width: 900,
        height: 1125,
      },
      afterListBody: [
        "CMG’s published process begins with a consultation and, if you choose to proceed, a written plan and fee agreement. Review the service scope and the current CMG Refund Policy before signing.",
      ],
      list: {
        title: "Programs and services",
        items: [
          "Permanent residence: Express Entry, Ontario Immigrant Nominee Program (OINP) and other provincial nominee programs.",
          "Family: spousal and common-law sponsorship, and Super Visas for parents and grandparents.",
          "Work: LMIA-based work permits, spousal open work permits, open work permit extensions, Post-Graduation Work Permit (PGWP) applications and Vulnerable Open Work Permits.",
          "Study: study permits and extensions.",
          "Visit: visitor visas and TRV stamping.",
          "Complex matters: Temporary Resident Permits and applications after a previous refusal.",
        ],
      },
      map: {
        title: "Google Map for Commonwealth Migration Group’s Brampton office",
        src: "https://maps.google.com/maps?q=Commonwealth%20Migration%20Group%2C%202250%20Bovaird%20Dr%20E%20%23615%2C%20Brampton%2C%20ON%20L6R%200W3&output=embed",
        caption: "2250 Bovaird Dr E, Suite 615, Brampton, ON L6R 0W3",
        href: site.address.mapsUrl,
      },
    },
    {
      id: "brampton-and-peel",
      heading: "Serving Brampton and nearby communities",
      body: [
        "Clients come to the Brampton office from Springdale, Bramalea, Castlemore, Heart Lake, Sandalwood, Mount Pleasant, Fletcher’s Meadow and Credit Valley, as well as nearby Mississauga, Malton, Caledon, Georgetown and Vaughan. If travel is difficult, ask about an online consultation.",
      ],
    },
    {
      id: "make-an-informed-choice",
      heading: "Make an informed choice",
      body: [
        "The best immigration consultant in Brampton is the representative whose authorization you have checked, whose experience fits your situation and whose written agreement makes the work and fees clear. Compare carefully, keep your own records and do not rely on a promise of approval. When you are ready, you can book a consultation with the Brampton team.",
      ],
      related: [
        { href: bookingPath, label: "Book an immigration consultation", note: "Discuss your goal, documents and next steps." },
        { href: bramptonPath, label: "Brampton office details", note: "Check the address, consultation options and local information." },
        { href: "/legal/refund-policy", label: "Read the CMG Refund Policy", note: "Review the current published terms before signing." },
      ],
    },
  ],
  faqs: [
    {
      question: "Who is the best immigration consultant in Brampton?",
      answer: "There is no official ranking. Look for an authorized representative in good standing with experience in your type of application, a clear written service agreement and communication you understand. Verify the individual’s current record before paying.",
    },
    {
      question: "How do I check if an immigration consultant in Brampton is licensed?",
      answer: "Ask for the person’s full name and licence number, then search the CICC Public Register and confirm the current status and contact information. If you appoint a paid representative, check that the same person is identified on the required Use of a Representative form.",
    },
    {
      question: "How much does an immigration consultant cost in Brampton?",
      answer: "There is no single standard fee. Professional fees depend on the service and complexity. Ask for a written quote that separates professional fees, HST, government charges and other expenses, and request CMG’s current written quote for your file.",
    },
    {
      question: "Can an immigration consultant guarantee my visa or permanent residence approval?",
      answer: "No. IRCC or the responsible decision-maker decides the application. Using a representative does not make approval more likely, so treat a guarantee as a warning sign.",
    },
    {
      question: "Do I need an RCIC or an immigration lawyer?",
      answer: "An RCIC can advise on most immigration and citizenship applications within their competence and licence. A lawyer may be needed for Federal Court work, litigation or complex legal issues. Check the professional’s licence and scope for your particular matter.",
    },
    {
      question: "Can I get immigration advice in Punjabi or Hindi in Brampton?",
      answer: "CMG lists English, Hindi, Punjabi, Marathi, Gujarati, French and Arabic as consultation languages. Confirm your preferred language and who will attend during your consultation when you book.",
    },
    {
      question: "Do I have to visit the office, or can I meet online?",
      answer: "CMG offers in-person meetings at its Bovaird Drive East office and online consultations. Confirm appointment availability and the meeting format before travelling to the Brampton office.",
    },
    {
      question: "What happens if I want to cancel my agreement with CMG?",
      answer: "Review your signed agreement and CMG’s current Refund Policy before you sign. The public policy says professional fees are generally non-refundable, with a limited discretionary exception if CMG cannot complete the agreed service for reasons not caused by the client.",
    },
    {
      question: "Can I apply for Canadian immigration without hiring a consultant?",
      answer: "Yes. Hiring a representative is optional, and IRCC publishes the forms and instructions online. If you apply yourself, use the current program checklist, answer every question accurately and keep a complete copy of what you submit.",
    },
    {
      question: "What should I bring to an immigration consultation in Brampton?",
      answer: "Bring your passport and current status records, a short immigration timeline, education and work history, previous applications or refusals, relevant IRCC correspondence, and any deadline. Ask how to share sensitive documents securely.",
    },
  ],
  glossary: [
    { term: "RCIC", definition: "A Regulated Canadian Immigration Consultant licensed by the College of Immigration and Citizenship Consultants." },
    { term: "RCIC-IRB", definition: "An RCIC whose licence class permits representation before the Immigration and Refugee Board, subject to the College’s current rules." },
    { term: "Authorized paid representative", definition: "A professional who is permitted by federal law and their regulator to provide immigration advice or representation for compensation." },
    { term: "Service agreement", definition: "A written contract that identifies the representative’s work, fees, responsibilities and the terms of the engagement." },
    { term: "Government fees", definition: "Application or processing charges set by IRCC or another government authority, separate from a representative’s professional fee." },
  ],
  sources: [
    {
      label: "IRCC: Learn about immigration and citizenship representatives",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/learn-about-representatives.html",
    },
    {
      label: "IRCC: How to choose an immigration or citizenship representative",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose.html",
    },
    {
      label: "IRCC: Find out if your representative is authorized",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/choose/authorized.html",
    },
    {
      label: "IRCC: Use of a Representative form (IMM 5476)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/imm5476.html",
    },
    {
      label: "College of Immigration and Citizenship Consultants Public Register",
      url: site.rcic.profileUrl,
    },
    {
      label: "Law Society of Ontario: Paralegal fact sheet",
      url: "https://lawsocietyontario-dwd0dscmayfwh7bj.a01.azurefd.net/media/lso/media/lso-media-room/documents/paralegal-fact-sheet_revised_feb-2023_final-en.pdf",
    },
  ],
  related: [
    { href: bookingPath, label: "Book a consultation", note: "Arrange a conversation with the Brampton team." },
    { href: bramptonPath, label: "Visit the Brampton office page", note: "Find current office information and local service details." },
    { href: "/blog/immigration-consultant-brampton", label: "How to choose an immigration consultant in Brampton", note: "Read the companion checklist for comparing representatives." },
  ],
  editorialReview: "Draft — confirm Pankaj Khanna’s review and byline, verify any current fee schedule before adding amounts, and add a real office exterior or entrance photo before publication.",
};
