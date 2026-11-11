/**
 * Article body for `/blog/parents-grandparents-program-canada`.
 *
 * Metadata (title, description, keywords, category, official source) lives in
 * `src/data/blog-research.js` and is deliberately not duplicated here. This file
 * owns only the reading content.
 *
 * The article leads with the constraint readers actually hit: the Parents and
 * Grandparents Program is invitation-based and cannot be applied for on demand.
 * No income figure, undertaking length or invitation number is stated — those
 * change each round and must be read from the official page for that round.
 */

const article = {
  slug: "parents-grandparents-program-canada",

  quickAnswer:
    "The Parents and Grandparents Program is paused. IRCC is not accepting new interest-to-sponsor forms or issuing invitations until further notice, but it continues processing existing applications. The last intake closed in 2025. Eligible families can consider a Super Visa for extended visits; it does not lead to permanent residence.",

  keyTakeaways: [
    "IRCC has paused new PGP interest forms and invitations until further notice.",
    "The last intake invited people from the 2020 interest-form pool, and its application deadline passed on October 9, 2025.",
    "The sponsor must meet a minimum necessary income, evidenced through CRA assessments for consecutive tax years.",
    "A co-signer, usually a spouse or common-law partner, can add their income and signs the undertaking alongside you.",
    "The undertaking binds the sponsor and co-signer to support the parents and to repay certain social assistance they receive.",
    "The Super Visa is the realistic alternative when no invitation comes: it allows long visits but builds no credit toward permanent residence.",
  ],

  sections: [
    {
      id: "why-pgp-is-invitation-only",
      heading: "Is the Parents and Grandparents Program open right now?",
      body: [
        "No. IRCC says it is not accepting new PGP applications, interest-to-sponsor forms or invitations until further notice. It will continue processing applications already received. The last intake invited potential sponsors who had submitted a form in 2020; the application deadline for that round was October 9, 2025.",
        "If you submitted an application from the last intake, follow the messages and deadlines in your IRCC account. If you did not receive an invitation, there is no current form to submit and no new intake date announced. You can still prepare income records for a future round and compare temporary options if your family wants to visit sooner.",
      ],
      callout: {
        label: "Current status",
        text: "Do not rely on an older page or assume another PGP intake is scheduled. Check IRCC's current notice before making plans.",
      },
    },
    {
      id: "interest-to-sponsor-form",
      heading: "What is the interest to sponsor form?",
      body: [
        "The interest-to-sponsor form is an online registration used when IRCC opens a PGP intake. It is not a permanent-residence application. IRCC is not accepting new forms now; the last invitations went to people in the pool created by forms submitted in 2020.",
        "There is no new intake date to plan around. If you may want to apply in a future round, keep your contact details current and organize your family information and tax records. Then check the official instructions when IRCC announces a new process; do not assume it will use the same form or selection method as before.",
      ],
    },
    {
      id: "pgp-invitation-to-apply",
      heading: "What happens when you receive an invitation to apply?",
      body: [
        "The 2025 intake was the latest round. If you received an invitation in that round and submitted the application by the deadline, IRCC continues to process it. An invitation is not approval: the sponsor must still meet the requirements, and the sponsored parents or grandparents must satisfy admissibility checks.",
        "From that point the file looks like any other family sponsorship. You must show that you meet the sponsor requirements, that your income meets the minimum necessary income, and that the parents or grandparents are admissible, which includes a medical examination and police certificates.",
        "If the 2025 deadline passed before you filed, IRCC will not accept a new application under that invitation. The department has not announced another intake date. Use the current IRCC page for any status update rather than relying on an old invitation timeline.",
      ],
      related: [
        { href: "/sponsor/pgp-invitation-to-apply-canada", label: "PGP invitation to apply" },
        { href: "/sponsor/parents-and-grandparents-program-pgp", label: "Parents and Grandparents Program" },
      ],
    },
    {
      id: "sponsor-income-requirement",
      heading: "What income does a sponsor have to show?",
      body: [
        "Sponsorship under the Parents and Grandparents Program requires the sponsor to meet a minimum necessary income, evidenced over a defined number of consecutive tax years immediately before the application. The figure depends on the size of your family unit: you, your dependants, the parents and grandparents you are sponsoring, and anyone else you are already obligated to support.",
        "IRCC verifies income from Canada Revenue Agency assessments rather than from pay stubs or an employer letter, so the tax years that count have to be filed and assessed. If your own income is short, a spouse or common-law partner can co-sign; both incomes are then counted, and both people sign the undertaking.",
      ],
      list: {
        title: "What the income test actually looks at",
        items: [
          "The minimum necessary income for your family unit size, published by IRCC and reviewed each year.",
          "Consecutive tax years of income, verified against your CRA notices of assessment.",
          "The income of a co-signer, if you add one, combined with your own.",
          "The number of people covered by the undertaking, including the parents and grandparents you are sponsoring.",
          "Documented income only — self-employment income needs filed returns, not projections.",
        ],
      },
      callout: {
        label: "What this means for you",
        text: "The minimum necessary income changes each year and depends on family size, so check the current figure on the official page rather than relying on a number from an older guide. File your taxes every year so the evidence exists when it is needed.",
      },
    },
    {
      id: "the-undertaking",
      heading: "What does the undertaking commit you to?",
      body: [
        "Signing the undertaking makes you, and any co-signer, financially responsible for the sponsored parents or grandparents for a fixed period set out in the program instructions. During that period you must provide for their basic needs, and you must repay certain social assistance they receive.",
        "The undertaking survives a change in circumstances. It is not cancelled by separation, divorce, job loss or a move, and it stays in force for its full term. That is why the income test and the undertaking are assessed together: IRCC is deciding whether you can carry the obligation for as long as it lasts, not whether you can afford the first year of it.",
      ],
    },
    {
      id: "pgp-vs-super-visa",
      heading: "How does the Parents and Grandparents Program compare with the Super Visa?",
      body: [
        "The two routes answer different questions. PGP is the route to permanent residence, and it is available only to invited sponsors. The Super Visa is a temporary resident visa for parents and grandparents that allows long visits and can be applied for at any time, but it does not lead to permanent residence.",
        "If your goal is time together, the Super Visa may be worth checking while PGP intake is paused. It has its own eligibility, host-income, insurance and medical requirements, and it remains temporary status. It does not replace an invitation or lead to permanent residence.",
        "Before applying, compare the visit you have in mind with the Super Visa's conditions and the parent's ability to meet visitor requirements. Check current processing times and IRCC guidance; no visitor application is guaranteed to be approved.",
      ],
      table: {
        caption: "Parents and Grandparents Program compared with the Super Visa",
        columns: ["Point of comparison", "Parents and Grandparents Program", "Super Visa"],
        rows: [
          ["What it gives", "Permanent residence", "Temporary resident status for visits"],
          ["How you apply", "Only after receiving an invitation, following the interest to sponsor form", "Apply at any time through the visa office"],
          ["Income test", "Minimum necessary income evidenced over consecutive tax years", "Income of the host child or grandchild must meet the published threshold"],
          ["Insurance", "Not required for the sponsorship itself", "Canadian medical insurance covering the stay is required"],
          ["Length of stay", "Permanent", "Long stay per entry, with the option to extend from inside Canada"],
          ["Path to citizenship", "Leads to permanent residence and eventually citizenship", "Builds no credit toward permanent residence"],
          ["Health checks", "Medical examination required", "Medical examination and insurance required"],
        ],
      },
    },
    {
      id: "super-visa-as-alternative",
      heading: "When is the Super Visa the better plan?",
      body: [
        "The Super Visa is the better plan when the priority is time together rather than permanent status, when the parents are not ready to move permanently, or when several years may pass before an invitation. It requires the host child or grandchild in Canada to meet an income threshold, and the applicant to hold Canadian medical insurance covering the period of stay and to pass a medical examination.",
        "Because it is a temporary resident visa, a stay can be extended from inside Canada, subject to the rules in force at the time. What it does not do is build any credit toward permanent residence. Families with an existing PGP application can consider a Super Visa separately, but the current pause means there is no new PGP pool to enter.",
      ],
      related: [
        { href: "/sponsor/super-visa-for-parents", label: "Super Visa for parents and grandparents" },
        { href: "/visit/visitor-visa-trv-and-super-visa-combined", label: "Visitor visa and Super Visa compared" },
      ],
    },
    {
      id: "if-you-are-not-invited",
      heading: "What can you do if you are not invited?",
      body: [
        "If you were not invited in the last round, you cannot submit a new form while the program is paused. You can check whether a Super Visa or regular visitor visa fits your family's plans, and watch for an official announcement if IRCC changes the intake status. There is no appeal against not being selected because the invitation step is not a decision on a permanent-residence application.",
        "Some families ask about humanitarian and compassionate grounds, but that is a separate, evidence-heavy route and not a substitute for PGP. It is also worth checking whether another relative in Canada can sponsor, or whether the parents fit a different program on their own facts.",
        "While there is no new intake date, keep your tax filings and contact details current. If IRCC opens another round, follow that round's instructions rather than assuming the old process will return unchanged.",
      ],
      list: {
        title: "Realistic options when no invitation arrives",
        items: [
          "Consider a Super Visa for extended visits if the parents and host meet its current requirements.",
          "Use a regular visitor visa for shorter or less frequent visits.",
          "Monitor IRCC for a new PGP intake announcement; no date is currently published.",
          "Check whether another family member in Canada is eligible to sponsor.",
          "Ask whether humanitarian and compassionate grounds genuinely apply to your facts.",
        ],
      },
      related: [
        { href: "/immigrate/one-year-window-reunification", label: "One-year window of reunification" },
        { href: "/sponsor/family-sponsorship-overview-all-categories", label: "Family sponsorship categories" },
      ],
    },
    {
      id: "what-to-verify-before-you-plan",
      heading: "What should you verify before you plan around PGP?",
      body: [
        "PGP intake is currently paused, and IRCC has not announced when it may reopen. Any new round could set different dates, selection steps, income years and document requirements. Check the live IRCC page before you rely on information from a previous intake.",
        "You can still keep the parts you control in order: file taxes, save CRA notices of assessment and update your contact details. If the family wants to visit before a new PGP intake, assess the Super Visa or visitor visa on its own merits.",
      ],
      callout: {
        label: "What this means for you",
        text: "Treat PGP as unavailable until IRCC announces otherwise. A Super Visa may support extended visits, but it is temporary and has separate requirements.",
      },
    },
  ],

  glossary: [
    { term: "Parents and Grandparents Program", definition: "The family class program through which Canadian citizens and permanent residents sponsor their parents or grandparents for permanent residence, by invitation only." },
    { term: "Interest to sponsor form", definition: "The online registration IRCC may open for a PGP intake. IRCC is not accepting new forms while the program is paused." },
    { term: "Minimum necessary income", definition: "The income threshold a sponsor must meet, based on family unit size, evidenced through Canada Revenue Agency notices of assessment." },
    { term: "Undertaking", definition: "A binding promise by the sponsor and any co-signer to support the sponsored parents or grandparents and to repay certain social assistance for a fixed period." },
    { term: "Co-signer", definition: "A spouse or common-law partner who adds their income to the sponsorship and signs the undertaking alongside the sponsor." },
    { term: "Super Visa", definition: "A temporary resident visa for the parents and grandparents of Canadian citizens and permanent residents that allows long visits but does not lead to permanent residence." },
    { term: "Medical examination", definition: "A health check carried out by an IRCC-approved physician, required for permanent residence and for the Super Visa." },
  ],

  faqs: [
    {
      "question": "Can I sponsor parents in Canada through the Parents and Grandparents Program (PGP Canada) in 2026?",
      "answer": "IRCC currently says the Parents and Grandparents Program is paused: it is not accepting new interest-to-sponsor forms or inviting new applicants until further notice. Existing applications continue to be processed. Check IRCC’s program page before making plans because a future intake would have its own dates and instructions."
    },
    {
      "question": "How much income do I need to sponsor my parents or grandparents?",
      "answer": "The required amount depends on the sponsor’s family size and the three tax years IRCC specifies for a particular intake. Because the program is paused and the relevant years can change when an intake opens, use the current IRCC table and CRA Notices of Assessment rather than relying on an older dollar figure."
    },
    {
      "question": "Can I submit a PGP application without an invitation?",
      "answer": "No. IRCC says it will return a Parents and Grandparents sponsorship application if the sponsor was not invited to apply. At present, no new invitations are being issued while the program is paused. Families may look at a Super Visa as a separate temporary-visit option, but it does not grant permanent residence."
    },
    {
      "question": "Is the Super Visa a substitute for permanent residence?",
      "answer": "No. The Super Visa is a temporary resident visa. It allows long visits and can be extended from inside Canada, but it builds no credit toward permanent residence and does not lead to citizenship. Families may consider it while PGP intake is paused or while an existing application is processed, but it is assessed separately."
    },
    {
      "question": "Can my spouse or partner co-sign a PGP sponsorship?",
      "answer": "Yes, a spouse or common-law partner can usually co-sign. Their income is added to yours for the minimum necessary income test, and they sign the undertaking alongside you, which makes them equally responsible for the obligation. Both incomes must be documented through CRA assessments for the relevant tax years."
    },
    {
      "question": "How long is the Parents and Grandparents sponsorship undertaking?",
      "answer": "Outside Quebec, a sponsor’s financial undertaking for parents or grandparents lasts 20 years from the day they become permanent residents. Quebec has a different undertaking process and period administered with the provincial government. The commitment continues through changes in the sponsor’s circumstances, so review it before signing."
    },
    {
      "question": "Can I submit a new interest-to-sponsor form while the PGP is paused?",
      "answer": "No. IRCC’s current notice says it will not accept new interest-to-sponsor forms until further notice. A past form does not create an active permanent-residence application; only people who receive an invitation under an intake can submit the sponsorship and permanent-residence applications."
    },
    {
      "question": "Will IRCC keep processing PGP applications already submitted?",
      "answer": "Yes. IRCC’s notice says existing Parents and Grandparents Program applications will continue through processing even though new forms and invitations are paused. Sponsors should keep contact details current, monitor their account and respond by the deadline if IRCC requests information."
    },
    {
      "question": "Can my brother or sister co-sign a PGP sponsorship?",
      "answer": "No. IRCC allows the sponsor’s spouse or common-law partner to co-sign the income undertaking; a sibling cannot co-sign simply because they share responsibility for a parent. A co-signer must meet the sponsor conditions, provide the required income records and accept joint financial responsibility."
    },
    {
      "question": "How does IRCC count family size for PGP income?",
      "answer": "IRCC counts the sponsor, the co-signer if there is one, their dependants and the people being sponsored, with family size assessed for each required tax year. Changes such as a birth, marriage or end of a previous undertaking can alter the calculation, so use the program’s year-specific worksheet."
    }
  ],

  related: [
    { href: "/sponsor/parents-and-grandparents-program-pgp", label: "Parents and Grandparents Program", note: "Current pause status, 2025 intake and official guidance." },
    { href: "/sponsor/pgp-invitation-to-apply-canada", label: "PGP invitation to apply", note: "What an invitation is, what it covers and what to do with it." },
    { href: "/sponsor/minimum-necessary-income", label: "Minimum necessary income", note: "How the income test is calculated and evidenced." },
    { href: "/sponsor/super-visa-for-parents", label: "Super Visa for parents", note: "A separate temporary-visit option while PGP intake is paused." },
  ],

  sources: [
    {
      "label": "IRCC — Sponsor your parents and grandparents",
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html"
    },
    {
      "label": "IRCC — Sponsor your parents and grandparents: How to apply",
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents/apply.html"
    },
    {
      "label": "IRCC — Super visa for parents and grandparents",
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa.html"
    },
    {
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents/eligibility.html",
      "label": "IRCC PGP sponsor eligibility"
    },
    {
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5772-application-sponsor-parents-grandparents.html",
      "label": "IRCC PGP income and undertaking guide"
    },
    {
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa/eligibility.html",
      "label": "IRCC Super Visa eligibility"
    }
  ],
};

export default article;
