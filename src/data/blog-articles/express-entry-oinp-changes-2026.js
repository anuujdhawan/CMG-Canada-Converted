/**
 * Source copy for `/blog/express-entry-oinp-changes-2026`.
 * The article text below is carried over from the client's supplied PDF; only
 * its headings, lists and tables are mapped to the site's article components.
 */

const article = {
  slug: "express-entry-oinp-changes-2026",
  quickAnswerHeading: "The short answer",
  quickAnswerNote: false,
  faqHeading: "Frequently asked questions",
  faqDescription: "",
  sourcesHeading: "Sources",

  quickAnswer:
    "Canada is changing how Express Entry scores high-wage workers, and Ontario has replaced eight OINP streams with one. On November 3, 2026, Express Entry adds up to 150 CRS points for Canadian work experience or a job offer in a high-wage occupation, and an LMIA is no longer needed for a qualifying job offer. In Ontario, the Ontario Workforce Priority (OWP) stream now replaces the former employer job offer, graduate and Express Entry streams, and the province scores applicants through an Expression of Interest (EOI) system. If you live in Brampton, Toronto, Mississauga or Hamilton, check your occupation, wage and job offer now, because some of these changes need action before November 3.",

  keyTakeaways: [
    "Express Entry: new points for high-wage Canadian work experience (up to 150) or a qualifying job offer (up to 100), starting November 3, 2026.",
    "No LMIA needed for a qualifying job offer to earn these points, or for job offers used under the Federal Skilled Worker and Federal Skilled Trades programs, if you meet IRCC's conditions.",
    "Pool scores will be recalculated. IRCC says this may take up to two weeks, and invitation rounds will pause during that time.",
    "OINP: eight streams were removed and replaced by the Ontario Workforce Priority stream. Selection is now by EOI score, not by stream.",
    "Earnings now count in OINP: an earnings of $80,000 or more in a single year in the past five years, shown on a CRA Notice of Assessment, earns 10 points.",
    "Nothing here guarantees an invitation. Scores and cut-offs change with every round.",
  ],

  sections: [
    {
      id: "express-entry-changes",
      heading: "Part 1: What is changing in Express Entry",
      body: [
        "On October 16, 2026, Immigration Minister Lena Metlege Diab announced changes that start on November 3, 2026. IRCC's stated aim is to focus Express Entry on high-wage skilled workers.",
      ],
    },
    {
      id: "who-gets-new-points",
      heading: "Who gets the new points",
      body: ["You can earn points in a new factor if you have either:"],
      list: {
        ordered: true,
        items: [
          "Canadian work experience in a high-wage occupation, or",
          "A qualifying job offer in a high-wage occupation.",
        ],
      },
      callout: {
        label: "How the new factor is applied",
        text: "If you qualify under both, you receive whichever gives more points. They are not added together. The factor is worth up to 150 points for a candidate without an accompanying spouse or partner, and up to 140 points with one.",
      },
    },
    {
      id: "high-wage-occupation-definition",
      heading: "What counts as a high-wage occupation",
      body: [
        "An occupation is high-wage if its median wage is at least 1.3 times the median wage of the overall Canadian workforce. This is based on the occupation, not on your own salary. IRCC says it will keep the list using Job Bank, Labour Force Survey and Census data from the previous three years.",
      ],
    },
    {
      id: "canadian-work-experience-points",
      heading: "Canadian work experience points",
      body: [
        "You need at least 12 months of eligible Canadian work experience, generally gained in the past 10 years in a TEER 0 to 3 occupation.",
      ],
      table: {
        caption: "Canadian work experience points",
        columns: ["Your work experience", "Extra CRS points"],
        rows: [
          ["12+ months in occupations at 2x the median wage", "70"],
          ["12+ months combined in occupations at 1.5x or more (if not eligible for 70)", "40"],
          ["12+ months combined in occupations at 1.3x or more (if not eligible for 70 or 40)", "20"],
        ],
      },
      callout: {
        label: "How these points combine",
        text: "These are added to the existing points for how long you have worked in Canada, which go up to 80 points for five years. The combined maximum is 150.",
      },
    },
    {
      id: "job-offer-points",
      heading: "Job offer points",
      table: {
        caption: "Job offer points",
        columns: ["Wage level of the occupation", "Extra CRS points"],
        rows: [
          ["At least 2x the median", "100"],
          ["At least 1.5x the median", "70"],
          ["At least 1.3x the median", "50"],
        ],
      },
      body: [
        "The job must generally be full-time, continuous work in Canada for at least one year after you become a permanent resident. Skilled trades and certain physicians have special rules.",
      ],
    },
    {
      id: "lmia-change",
      heading: "The LMIA change",
      body: [
        "From November 3, 2026, an LMIA is not required for a qualifying job offer to earn these points. A temporary public policy also exempts candidates invited on or after that date from the LMIA and LMIA-exemption requirement for job offers used to meet Federal Skilled Worker or Federal Skilled Trades eligibility, if they meet its conditions.",
        "This does not mean any job offer will do. IRCC officers still check that the offer is genuine: the employer must be actively in business, the job must reflect a real hiring need, the employer must be able to meet the terms, you must be qualified, and the employer must follow federal and provincial employment and recruitment laws. A revoked job offer no longer counts.",
      ],
    },
    {
      id: "existing-express-entry-profiles",
      heading: "What happens to profiles already in the pool",
      body: [
        "IRCC says it will recalculate existing scores automatically, including points for eligible Canadian work experience. The recalculation may take up to two weeks, and invitation rounds will be paused while it happens. Candidates who want job offer points should update their profile before November 3 with all the required job offer details.",
      ],
    },
    {
      id: "gta-and-hamilton-impact",
      heading: "What this means in the GTA and Hamilton",
      list: {
        items: [
          "Brampton and Mississauga: many applicants work in logistics, manufacturing, health care and trades. Check whether your exact NOC code, based on your actual duties, is on the high-wage list before you assume you will gain points. Job titles can mislead.",
          "Toronto: the city has many roles in finance, technology and engineering management, which tend to sit in higher wage tiers. Wages above the occupation median do not change the tier, because the list uses the occupation's wage.",
          "Hamilton: workers in skilled trades, engineering and health care should check their occupation, and graduates of local institutions should plan around Canadian experience before applying.",
          "Candidates in lower-wage or unlisted occupations do not gain from the new factor. Improving language scores, adding education or exploring a provincial nomination may matter more.",
        ],
      },
    },
    {
      id: "oinp-changes",
      heading: "Part 2: What changed in the OINP",
      body: [
        "Ontario has redesigned the Ontario Immigrant Nominee Program in phases. Phase 1 is now in effect.",
      ],
    },
    {
      id: "eight-streams-replaced",
      heading: "Eight streams replaced by one",
      body: [
        "In mid-2026 Ontario removed eight former streams, including the Employer Job Offer: Foreign Worker, In-Demand Skills and International Student streams, the Master's and PhD Graduate streams, and the Express Entry Human Capital Priorities, French-speaking Skilled Worker and Skilled Trades streams. They are replaced by the Ontario Workforce Priority (OWP) stream.",
        "The EOI portal for the new stream opened on August 4, 2026. Expressions of interest under the former streams that did not lead to an invitation were withdrawn. Applications already submitted after an invitation are assessed under the rules in effect when they were submitted.",
      ],
    },
    {
      id: "three-owp-pathways",
      heading: "The three OWP pathways",
      table: {
        caption: "The three OWP pathways",
        columns: ["Pathway", "Job offer", "Language", "Education", "Work experience"],
        rows: [
          [
            "TEER 0 to 3",
            "Full-time, permanent offer in Ontario",
            "CLB 6 (CLB 5 for certain occupations)",
            "Post-secondary degree or diploma",
            "One of: 6 consecutive months in the last 12 with the offer employer; 3 months for recent Ontario graduates; or 2 years cumulative in the last 5 in the occupation. Licensed applicants are exempt.",
          ],
          [
            "TEER 4 to 5",
            "Full-time, permanent offer",
            "CLB 4",
            "Canadian secondary diploma or equivalent",
            "9 months cumulative in the last 2 years with the offer employer",
          ],
          [
            "Self-employed physicians",
            "No job offer needed",
            "See Ontario guidance",
            "Good standing with the CPSO and OHIP billing eligibility",
            "Separate scoring",
          ],
        ],
      },
      body: [
        "Employers in rural census divisions (population under 150,000) have lower gross annual revenue requirements.",
      ],
    },
    {
      id: "oinp-selection",
      heading: "How selection works",
      body: [
        "You submit an Expression of Interest, your employer submits the job offer, and Ontario scores eligible profiles and invites the highest scoring candidates to apply for nomination. Ontario work experience and Canadian income tax history carry the most weight. Other factors include wages, official-language ability, job location, education, occupation and status in Canada. Ontario has said jobs outside Toronto earn extra points, so check how your own job location is scored. Invitation rounds can happen without notice.",
      ],
    },
    {
      id: "oinp-earnings-points",
      heading: "The new earnings points (October 2026)",
      body: [
        "Ontario announced on October 5 and applied on October 7 that registrants who earned $80,000 or more in any single year within the past five years, verified by a CRA Notice of Assessment, receive 10 points under the Canadian work experience earnings factor. The change applied automatically to existing EOIs.",
      ],
    },
    {
      id: "redi-round",
      heading: "New REDI round for northern and eastern communities",
      body: [
        "On October 16, Ontario launched a new Regional Economic Development through Immigration (REDI) round that runs to the end of 2027. It covers Greater Sudbury, Kenora District, Nipissing District, Rainy River District, Renfrew County and Thunder Bay. There is no separate application, and you must meet OINP eligibility.",
      ],
    },
    {
      id: "oinp-deadlines-employer-duties",
      heading: "Deadlines and employer duties",
      body: [
        "In recent rounds, employers generally had 14 calendar days from the invitation to submit their application and candidates had 17 days, with a shorter window for graduate rounds. Ontario also cut the response time for notices of intent to issue an administrative monetary penalty or ban from 60 days to 30 days. Employers should keep their hiring and pay records in order.",
      ],
    },
    {
      id: "oinp-phase-two",
      heading: "What is still to come",
      body: [
        "Ontario calls this the first of two phases. It has not published a date or details for Phase 2, so check the Ontario government page for updates.",
      ],
    },
    {
      id: "what-you-should-do-now",
      heading: "Part 3: What you should do now",
      body: [],
    },
    {
      id: "express-entry-checklist",
      heading: "If you are in the Express Entry pool",
      list: {
        ordered: true,
        items: [
          "Find your NOC code from your real job duties, then check whether it appears on IRCC's high-wage list and at which tier.",
          "If you have or expect a job offer, confirm it is full-time, continuous and for at least one year after PR, then update your profile before November 3.",
          "Expect your score to change after November 3 and a short pause in draws.",
          "Do not rely on a higher score alone. Language, education and age still matter.",
        ],
      },
    },
    {
      id: "oinp-checklist",
      heading: "If you are considering the OINP",
      list: {
        ordered: true,
        items: [
          "Work out which OWP pathway fits your job's TEER level.",
          "Gather your Notices of Assessment, pay records and employer letters. They carry real weight in scoring.",
          "Confirm your employer is ready to submit the job offer, because the employer's part has a deadline.",
          "If you worked under a former stream, check which rules apply to any application already in process.",
        ],
      },
    },
    {
      id: "ontario-employer-checklist",
      heading: "If you are an employer in Ontario",
      list: {
        ordered: true,
        items: [
          "Check that your job offers meet the genuineness checks for Express Entry and the OINP.",
          "Keep wage, recruitment and employment-law records. Officers may ask for them.",
          "Plan ahead for the short windows after an invitation.",
        ],
      },
    },
    {
      id: "licensed-consultant",
      heading: "Talk to a licensed consultant",
      body: [
        "These changes affect people differently depending on their occupation, wages, job offer and status in Canada. Commonwealth Migration Group Inc. offers online consultations for clients in Brampton, Toronto, Mississauga, Hamilton and across Canada, and cases are filed by Pankaj Khanna, RCIC (R711256), regardless of location. Book a consultation to find out how the changes apply to you.",
        "This article is general information and is not legal advice or a guarantee of any immigration outcome. All decisions rest with IRCC and the Government of Ontario. Rules, point values and occupation lists change, so check the sources below before acting.",
      ],
    },
  ],

  related: [
    { href: "/immigrate/express-entry", label: "Express Entry", note: "Federal Express Entry program and service information." },
    { href: "/immigrate/ontario-pnp-oinp", label: "OINP", note: "Ontario Immigrant Nominee Program pathways and service information." },
    { href: "/contact/book-immigration-consultation-canada", label: "Book a consultation", note: "Discuss how these changes apply to your case." },
  ],

  sources: [
    {
      label: "IRCC: Changes to Express Entry for high-wage occupations",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/changes-to-express-entry-for-high-wage-occupations.html",
    },
    {
      label: "IRCC news release: Canada refocusing Express Entry on top talent that drives economic growth",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/news/2026/10/canada-refocusing-express-entry-on-top-talent-that-drives-economic-growth.html",
    },
    {
      label: "Government of Ontario: 2026 Ontario Immigrant Nominee Program updates",
      url: "https://www.ontario.ca/page/2026-ontario-immigrant-nominee-program-updates",
    },
    {
      label: "CIC News: Canada boosts CRS points for Express Entry candidates with high-wage job offers",
      url: "https://www.cicnews.com/2026/10/2026-express-entry-reforms-1081487.html",
    },
    {
      label: "Fragomen: OINP redesign, Phase 1 launches Workforce Priority Stream",
      url: "https://www.fragomen.com/insights/canada-ontario-immigrant-nominee-program-redesign-phase-1-launches-workforce-priority-stream.html",
    },
  ],

  faqs: [
    {
      question: "When do the new Express Entry rules start?",
      answer: "The new high-wage points and the LMIA change start on November 3, 2026. IRCC announced them on October 16, 2026.",
    },
    {
      question: "How many extra CRS points can I get?",
      answer: "Up to 150 points without an accompanying partner, or up to 140 with one, through the new labour market integration factor. A qualifying job offer is worth 50, 70 or 100 points depending on the wage tier, and work experience adds 20, 40 or 70 points on top of your existing Canadian experience points.",
    },
    {
      question: "Do I still need an LMIA for Express Entry?",
      answer: "Not for a qualifying job offer used to earn these new points, or for job offers used to establish Federal Skilled Worker or Federal Skilled Trades eligibility, if you meet IRCC's conditions. IRCC will still check that the offer is genuine.",
    },
    {
      question: "Does a higher score guarantee an invitation?",
      answer: "No. Invitations depend on each round's requirements and cut-off score, and nobody can guarantee one.",
    },
    {
      question: "What replaced the OINP streams?",
      answer: "The Ontario Workforce Priority stream replaced eight former streams. It has pathways for TEER 0 to 3 jobs, TEER 4 to 5 jobs and self-employed physicians, with selection by Expression of Interest score.",
    },
    {
      question: "Can I still apply to the OINP from Brampton, Toronto, Mississauga or Hamilton?",
      answer: "Yes, if you meet the OWP criteria and have an eligible job offer. Your city does not decide eligibility, but your job location can affect your EOI score.",
    },
    {
      question: "Will more changes follow?",
      answer: "Yes. Ontario has announced a second phase of its redesign without giving details, and IRCC has said it is continuing to refine Express Entry. Check official sources regularly.",
    },
  ],
};

export default article;
