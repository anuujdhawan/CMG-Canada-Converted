/**
 * Article body for `/blog/work-permit-job-loss-canada`.
 *
 * This guide is deliberately worker-first. Employment standards and
 * immigration authorization are connected, but they are not the same legal
 * question. The article keeps those two tracks separate and points readers to
 * current official instructions before they act.
 */

const ATTORNEYS_MAGAZINE_ARTICLE = "https://attorneysmag.com/can-foreign-workers-in-canada-be-fired/";

const article = {
  slug: "work-permit-job-loss-canada",

  quickAnswer:
    "If the job named on your employer-specific work permit ends, you generally must stop working. The permit does not become open, and you cannot simply start with another employer. To keep working in Canada, you normally need a new job offer, a new work permit application and, where eligible, an IRCC email authorizing work before the new permit is approved.",

  keyTakeaways: [
    "An employer-specific permit remains tied to the employer, occupation and location printed on it, even after a layoff or dismissal.",
    "A job ending and an immigration authorization ending are different questions; review both the employment record and the permit dates.",
    "If you want to keep working, you normally need a new offer and a new work permit application before changing employers.",
    "Some eligible workers can request authorization to begin the new job while IRCC processes the application, but an email is required first.",
    "Maintained status usually preserves the old employer-specific conditions; it does not automatically authorize a new employer.",
    "Workers facing abuse or a risk of abuse may have a separate route to an open work permit for vulnerable workers.",
  ],

  inlineLinks: {
    "employment-rights perspective": ATTORNEYS_MAGAZINE_ARTICLE,
  },

  sections: [
    {
      id: "what-changes-when-job-ends",
      heading: "What changes when the job on your permit ends?",
      body: [
        "An employer-specific work permit is permission to work under stated conditions, not a guarantee that the job will continue. The permit normally names the employer and may also identify the occupation and work location. If that employment ends, the document does not quietly convert into an open work permit and it does not give you permission to accept the next offer immediately.",
        "The first immigration question is authorization: are you still allowed to work, and for whom? The second is status: how long may you remain in Canada, and what application or departure date now matters? Keeping those questions separate prevents a common mistake—assuming that a valid expiry date means every kind of work is still allowed until that date.",
        "An open work permit is different because the job is not the foundation of the authorization. A valid open permit generally lets its holder change employers, subject to the conditions printed on the permit and any occupation restrictions. Read the actual document, not just the job title used in an offer or on a payroll record.",
      ],
      callout: {
        label: "The first rule to remember",
        text: "If the job connected to an employer-specific permit ends, stop working for that employer and do not begin a different job until the new work authorization rules have been satisfied.",
      },
    },
    {
      id: "can-foreign-workers-be-fired",
      heading: "Can foreign workers in Canada be fired?",
      body: [
        "Yes. A work permit does not remove an employer’s obligations under the employment standards, workplace-safety and human-rights rules that apply to the job. The correct answer can depend on the province or territory, the reason for the dismissal, the employment agreement, the length of service and whether the workplace is federally regulated. Immigration status can make the consequences more urgent, but it does not answer the employment-law question by itself.",
        "A layoff, a termination with notice or pay, and an abusive dismissal are not the same event. Ask for the reason and effective date in writing, keep the employment agreement and pay records, and check the applicable employment standards office. If you lost the job through no fault of your own, you may also want to check whether you qualify for Employment Insurance; eligibility is decided under its own rules.",
        "The employment-rights perspective deserves its own reading alongside the immigration steps. Attorneys Magazine’s employment-rights perspective explains the workplace side of the question; this guide focuses on what the end of the job means for work authorization and the next immigration decision.",
      ],
    },
    {
      id: "first-steps-after-job-loss",
      heading: "What should you do in the first 48 hours?",
      body: [
        "Panic creates paperwork problems. Start by making one dated record of what happened and one folder for the documents that explain it. You are trying to preserve two stories at once: what happened at work, and what your immigration documents allow you to do now.",
        "Do not sign a settlement or release that you do not understand just because you are worried about your permit. Employment advice and immigration advice may come from different professionals. You can ask each one a focused question and make sure the advice is based on the same dates and documents.",
      ],
      list: {
        title: "A practical first-day checklist",
        ordered: true,
        items: [
          "Photograph or scan both sides of your work permit, passport bio page and any visitor record or study permit held by a family member.",
          "Write down the last day worked, the date you were told the job was ending, and whether the employer called it a layoff, resignation or termination.",
          "Request the termination or layoff letter, employment agreement, recent pay statements, record of employment and any final-pay information.",
          "Read the permit fields for employer, occupation, location, expiry and the ‘Must leave by’ date; do not rely on memory.",
          "Stop work for the named employer and do not start with a new employer while you confirm the application and authorization steps.",
          "Check your housing, health coverage, family documents and immediate income plan so an immigration deadline is not hidden by a financial emergency.",
        ],
      },
      afterListBody: [
        "If you are in immediate danger, contact emergency services. If the concern is abuse, unsafe work or an employer holding your documents, use the federal temporary foreign worker reporting channels and a trusted support organization. A job search is not the same as a safety plan.",
      ],
    },
    {
      id: "changing-employers",
      heading: "How do you change jobs or employers on an employer-specific permit?",
      body: [
        "The usual sequence is employer first, worker second, authorization before work. Find a new employer willing to make a compliant offer. The employer may need a positive Labour Market Impact Assessment, or may need to submit an offer through an LMIA-exempt process. You then use the employer’s documents to apply for a new work permit or to change the conditions of the current one.",
        "After submitting the application, an eligible worker in Canada can use the IRCC web form to request authorization to work while the new application is processed. IRCC’s current instructions require the worker to wait for the authorization email before starting the new job. That email is not the new work permit; keep both the email and the application record.",
        "The temporary public policy and the online instructions have conditions. They are not a general shortcut for every worker, every job or every application made from outside Canada. Confirm that you are applying from inside Canada, have the right type of current or recent authorization and have supplied the new employer information before relying on the process.",
      ],
      table: {
        caption: "Who does what after a job loss",
        columns: ["Stage", "Main actor", "What to confirm"],
        rows: [
          ["New job offer", "Worker and new employer", "Role, wage, location, start date and whether the employer can hire a foreign worker"],
          ["Labour market step", "New employer", "Positive LMIA or the correct LMIA-exempt offer and number, where required"],
          ["New permit application", "Worker", "Application to change conditions or obtain a new employer-specific permit"],
          ["Request to start early", "Worker", "IRCC web form submission after applying, followed by an authorization email"],
          ["Start the new job", "Worker and employer", "The email or new permit permits the specific job before work begins"],
        ],
      },
      callout: {
        label: "Do not confuse an application with permission",
        text: "Submitting a work permit application is not the same as being authorized to start the new job. Follow the current IRCC instructions for the authorization email and keep proof of every step.",
      },
    },
    {
      id: "permit-expiry-and-maintained-status",
      heading: "What if the work permit is close to expiring?",
      body: [
        "A job loss does not create extra time beyond the dates on your immigration documents. If you have a qualifying new job and intend to keep working, review the application route before the permit expires. If you apply to extend or change a work permit in time and remain in Canada, maintained status may let you stay while IRCC decides the application.",
        "Maintained status is tied to the conditions of the original authorization. For an employer-specific permit, that usually means the same employer, job and work location while the extension is being processed. It is not a free-standing right to move to a new employer simply because the old permit has not reached its printed expiry date.",
        "If you are not ready to continue working, you may need to explore a visitor record, a study permit or another immigration program. A visitor record can support a request to remain as a visitor, but visitors generally cannot work. Check the exact application instructions and the date by which you must leave Canada before making travel or employment plans.",
      ],
      related: [
        { href: "/blog/maintained-status-work-permit-extension-canada", label: "Maintained status guide" },
        { href: "/blog/restore-status-canada-worker-student", label: "Restoration guide" },
      ],
    },
    {
      id: "abuse-and-vulnerable-workers",
      heading: "What if the job ended because of abuse or exploitation?",
      body: [
        "A routine layoff and an unsafe or abusive situation need different responses. The federal temporary foreign worker protections explain that an employer cannot take a passport or work permit, force unsafe work, retaliate against a worker for reporting mistreatment, or make someone pay recruitment costs that the program prohibits. Provincial and territorial authorities may also handle employment standards and workplace-safety complaints.",
        "A worker who is being abused or is at risk of abuse may be eligible for an open work permit for vulnerable workers. That is a separate application and an eligibility decision; it should not be treated as an automatic consequence of every termination. Gather evidence safely, including messages, schedules, pay records, medical or police documents where relevant, and the names of people who can confirm what happened.",
        "If your safety is at risk, get immediate help first. The federal reporting channel is confidential, and a migrant-worker organization, community legal clinic or authorized representative may help you understand which complaint or permit route fits. Do not let an employer’s threat that you will be ‘deported’ stop you from seeking help—the employer cannot change your immigration status themselves.",
      ],
      callout: {
        label: "A safety distinction",
        text: "An open work permit for vulnerable workers is designed for abuse or risk of abuse. A job ending on its own does not automatically create eligibility for that permit.",
      },
    },
    {
      id: "other-stay-options",
      heading: "Can you stay in Canada as a visitor, student or permanent-residence applicant?",
      body: [
        "Possibly, but each option has its own requirements and it does not preserve the right to work. A visitor record is about temporary stay, not employment. A study permit requires a genuine study plan and the applicable school and financial evidence. A permanent residence application is a separate pathway with its own eligibility, and a work permit does not become permanent residence merely because the worker has Canadian experience.",
        "If you already have a permanent residence application in progress, check whether your specific program creates a work-permit option or whether another application is required. Keep the application number, acknowledgment and status records together. Do not assume that having submitted a PR profile or expression of interest means you can keep working after the employer-specific job ends.",
        "The safest plan is built from dates: the last day of work, the permit expiry date, the ‘Must leave by’ date, the deadline for a new application and the date any visitor or study status would begin. A short written timeline makes it easier to see whether you need an immediate filing, a new job offer or a departure plan.",
      ],
      table: {
        caption: "Possible next directions after job loss",
        columns: ["Direction", "What it may solve", "What it does not solve"],
        rows: [
          ["New employer-specific permit", "A compliant new job and authorization to work for that employer", "It does not authorize work before the required approval or email"],
          ["Visitor record", "A request to stay temporarily as a visitor", "It does not authorize ordinary employment"],
          ["Study permit", "A genuine study plan that meets current requirements", "It is not a substitute for a work permit or a job-search bridge"],
          ["Other immigration program", "A separate route if the applicant qualifies", "A profile or inquiry alone does not create work authorization"],
        ],
      },
    },
    {
      id: "employer-and-worker-records",
      heading: "Why employer compliance and worker status belong in the same conversation",
      body: [
        "The worker needs an accurate employment record; the employer needs a record that shows what was offered, what was paid and what changed. Those records are useful for more than a future immigration application. They can help explain a termination, support an employment standards inquiry and show whether the job on the permit matched the job actually performed.",
        "For employers, a careful offboarding process includes the written reason and effective date, final pay and statutory documents, return of personal property without withholding identity documents, and a clear explanation of any benefits or housing arrangements. For workers, it means keeping copies and asking questions before signing anything that changes the record.",
        "This is also why a reciprocal link should sit inside a real guide rather than on a thin partner page. Readers who need the employment-law context can continue to the Attorneys Magazine article, while readers who need the immigration consequence can use the official IRCC sources below and the connected CMG guides.",
      ],
    },
  ],

  glossary: [
    { term: "Employer-specific work permit", definition: "A work permit that names an employer and may also limit the occupation, location or other conditions of the job. The holder must follow the conditions printed on the document." },
    { term: "Open work permit", definition: "A work permit that generally allows work for almost any employer, subject to the permit’s restrictions and the rules of the particular open-permit category." },
    { term: "Maintained status", definition: "The ability to remain in Canada while IRCC processes a timely application to extend or change temporary status. Work authorization, if available, continues under the prior conditions rather than new conditions." },
    { term: "Work authorization email", definition: "An IRCC message that may authorize an eligible worker who applied from inside Canada to begin a specified new job while a new employer-specific work permit application is processed. It is not the permit itself." },
    { term: "Labour Market Impact Assessment (LMIA)", definition: "An employer-side assessment used for many Temporary Foreign Worker Program hires. A positive LMIA supports a work permit application but does not by itself approve the worker’s permit." },
  ],

  faqs: [
    {
      question: "Can foreign workers in Canada be fired while they hold a work permit?",
      answer: "Yes. A work permit does not guarantee continued employment. The employer must still follow the employment standards, workplace-safety and human-rights rules that apply to the job. The worker should document the reason and date, request employment records, and then review the separate immigration steps created by the end of the job.",
    },
    {
      question: "What happens to an employer-specific work permit after a job loss?",
      answer: "It remains employer-specific. The holder generally must stop working for that employer and cannot begin with another employer just because the permit has not expired. To continue working, the worker normally needs a new job offer, a new work permit application and any authorization required by IRCC before starting the new job.",
    },
    {
      question: "Can I work for a new employer while my change-of-employer application is being processed?",
      answer: "Not automatically. An eligible worker in Canada may request authorization through the IRCC web form after applying for a new employer-specific permit. The worker must wait for IRCC’s authorization email before starting the specified new job, unless another rule already authorizes the work. The email is not the new work permit.",
    },
    {
      question: "Does a new employer need an LMIA after I lose my job?",
      answer: "It depends on the job and the exemption category. The new employer may need a positive LMIA, or may need to submit an offer under an LMIA-exempt route. Ask the employer which process applies and keep the resulting number or document for the work permit application. Do not assume the previous employer’s LMIA transfers.",
    },
    {
      question: "Can I change jobs if I have an open work permit?",
      answer: "Generally, an open work permit lets the holder change employers while it is valid, subject to the conditions printed on the permit and any category-specific restrictions. Confirm that the permit is truly open and check whether occupation, medical or employer-compliance restrictions apply before accepting work.",
    },
    {
      question: "How long do I have to find a new job after losing an employer-specific permit job?",
      answer: "There is no universal job-search period that overrides the dates and conditions on your documents. Review the permit’s expiry and ‘Must leave by’ dates, stop unauthorized work, and act promptly if you want a new employer or another status. A new job offer does not itself extend your stay or authorize work.",
    },
    {
      question: "Does maintained status let me start a new job after my permit expires?",
      answer: "Usually not when the original permit was employer-specific. A timely application may let you remain and continue under the original conditions while it is processed, which generally means the same employer, job and location. A new employer requires the separate change-of-employer process and any work authorization IRCC requires.",
    },
    {
      question: "Can I stay in Canada as a visitor after losing my job?",
      answer: "You may be able to apply for a visitor record if you meet the visitor requirements and apply before the relevant deadline, but a visitor record does not normally authorize work. Build a plan for your temporary stay, funds and departure or next application rather than treating visitor status as a work-permit extension.",
    },
    {
      question: "What if I lost my job because my employer abused or threatened me?",
      answer: "If you are being abused or are at risk of abuse, you may be eligible to apply for an open work permit for vulnerable workers. This is an eligibility-based route, not an automatic result of every termination. Preserve evidence safely, seek immediate help if needed, and use the federal reporting and support channels.",
    },
    {
      question: "Can my employer keep my passport or work permit after firing me?",
      answer: "No. Federal temporary foreign worker protections say an employer cannot take or keep personal documents such as a passport, work permit or Social Insurance Number. If documents are being withheld or you face threats, prioritize safety, keep a record and contact the appropriate reporting or support service.",
    },
    {
      question: "Can job loss lead directly to permanent residence in Canada?",
      answer: "No. A work permit is temporary authorization, and job loss does not itself create permanent residence. Canadian work experience may support a separate federal or provincial program if the worker meets that program’s requirements, but a profile, expression of interest or consultation does not by itself authorize continued work.",
    },
    {
      question: "What documents should I keep after a work permit job loss in Canada?",
      answer: "Keep the work permit, passport pages, employment agreement, job offer, LMIA or exemption documents, pay statements, termination or layoff letter, record of employment, application receipts and every message from IRCC or the employer. A dated timeline tying those documents together can be as useful as any single letter.",
    },
  ],

  related: [
    { href: "/blog/canada-work-permit-types-2026", label: "Open vs employer-specific work permits", note: "Start with the permit distinction that decides who may change jobs." },
    { href: "/blog/lmia-canada-explained", label: "LMIA Canada explained", note: "Separate the employer’s labour-market step from the worker’s permit application." },
    { href: "/blog/maintained-status-work-permit-extension-canada", label: "Maintained status in Canada", note: "See how a timely extension can affect work under the old conditions." },
    { href: "/blog/restore-status-canada-worker-student", label: "Restoring worker or student status", note: "Understand why restoration is different from an ordinary extension." },
  ],

  sourcesHeading: "Official sources to check before acting",
  sources: [
    {
      label: "IRCC — If you lose your job",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/extend/change-jobs-employers/lose-job.html",
    },
    {
      label: "IRCC — Changing jobs or employers",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/extend/change-jobs-employers.html",
    },
    {
      label: "IRCC — Employer-specific work permits",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/employer-specific.html",
    },
    {
      label: "Employment and Social Development Canada — Temporary foreign workers: rights are protected",
      url: "https://www.canada.ca/en/employment-social-development/services/foreign-workers/protected-rights.html",
    },
    {
      label: "IRCC — Extend or change the conditions of your work permit",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/extend/apply.html",
    },
    {
      label: "IRCC — Open work permit for vulnerable workers",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/worker-abuse.html",
    },
  ],
};

export default article;
