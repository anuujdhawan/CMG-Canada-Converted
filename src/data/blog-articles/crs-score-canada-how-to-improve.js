/**
 * Article body for `/blog/crs-score-canada-how-to-improve`.
 *
 * Metadata (title, description, keywords, category, official source) lives in
 * `src/data/blog-research.js` and is deliberately not duplicated here. This file
 * owns only the reading content.
 *
 * The factor maxima quoted in the table come from IRCC's published CRS criteria
 * page and are attributed in `sources` below. Do not add a number that is not
 * traceable to that page — the CRS has changed recently, and a stale figure is
 * worse than no figure.
 */

const article = {
  slug: "crs-score-canada-how-to-improve",

  quickAnswer:
    "A CRS score Canada is built from four groups of factors: core human capital, spouse or common-law partner factors, skill transferability, and additional points. Language ability, education and Canadian work experience carry the most weight, and a provincial nomination adds the single largest block of points available.",

  keyTakeaways: [
    "The CRS totals 1,200 points across four groups, and a provincial nomination alone is worth 600 of them.",
    "Language ability is the largest lever you control, because it scores directly and lifts skill transferability.",
    "Age scores highest in the twenties and declines each year, reaching zero at 45.",
    "From November 3, 2026, a qualifying offer in an eligible high-wage occupation may earn CRS points; the new factor compares that offer with eligible Canadian work experience.",
    "French-language results can add points on top of a strong English result, without changing your education or work history.",
    "Every improvement depends on evidence: a valid test result, an assessed credential or documented work hours.",
  ],

  sections: [
    {
      id: "what-a-crs-score-measures",
      heading: "What does a CRS score Canada actually measure?",
      body: [
        "A CRS score Canada measures how competitive your profile is inside the Express Entry pool, not whether you are eligible for a program. Eligibility is decided by the program you apply under. The score then ranks you against everyone else in the pool, and it is the ranking rather than the eligibility that decides who is invited in a round.",
        "The score is built from four groups of factors: core human capital, spouse or common-law partner factors, skill transferability, and additional points. The maximum is 1,200. Most candidates cannot change all four groups equally, so the useful exercise is to see which group still has unused room in your own profile.",
        "What the score does not do is measure your value as an applicant. It measures a specific set of facts, and those facts can be improved, documented differently or, in the case of age, not improved at all. Knowing which is which is the point.",
      ],
    },
    {
      id: "the-four-factor-groups",
      heading: "Which factor groups make up the CRS?",
      body: [
        "The groups are not equal in size, and they are not equal in how easily they can be changed. Additional points hold the largest single block, but almost all of it comes from a provincial nomination. Core human capital holds the points you earn from your own facts, and that is where most candidates do the work.",
        "Read the table as a map of where your score comes from before you decide what to change. A candidate with strong language results and thin work experience has a different next step from one with the reverse.",
      ],
      table: {
        caption: "CRS factor groups and the maximum points available in each",
        columns: ["Factor group", "Maximum points", "What it covers"],
        rows: [
          ["Core human capital", "460 with a spouse; 500 without", "Age, education, official language proficiency and Canadian work experience."],
          ["Spouse or common-law partner", "40", "The partner's education, official language proficiency and Canadian work experience."],
          ["Skill transferability", "100", "Combinations of education, language results, work experience and a certificate of qualification."],
          ["Additional points", "600", "Provincial nomination, French skills, Canadian post-secondary study and a sibling in Canada."],
          ["Total", "1,200", "The maximum CRS a profile can reach."],
        ],
      },
      callout: {
        label: "Read the columns, not the total",
        text: "The right-hand maximum applies to you only if you have no spouse or partner coming with you, or if your partner is already a Canadian citizen or permanent resident.",
      },
    },
    {
      id: "what-raises-a-score-most",
      heading: "What raises a CRS score the most?",
      body: [
        "The ranking is not the same as a to-do list. A nomination is the biggest single addition, but it depends on a province or territory choosing you, which is a separate application with its own criteria. Language results are the largest addition you control directly, which is why they come first.",
        "The job-offer rule changes again on November 3, 2026. From that date, an eligible high-wage occupation may qualify for job-offer points under the new Labour Market Integration factor. The offer must meet IRCC’s criteria; having an offer alone does not guarantee points or an invitation.",
      ],
      list: {
        title: "Ranked by how much each factor usually moves a score",
        ordered: true,
        items: [
          "A provincial or territorial nomination, worth 600 additional points and by far the largest single addition.",
          "Official language proficiency, which scores directly and also unlocks skill transferability points.",
          "French-language results, worth up to 50 additional points on top of your English result.",
          "Canadian work experience, which scores directly and combines with education and foreign experience.",
          "Education, which scores directly and again through skill transferability.",
          "Canadian post-secondary study, worth up to 30 additional points for a credential of three years or longer.",
          "A brother or sister in Canada, worth 15 additional points.",
        ],
      },
      callout: {
        label: "What this means for you",
        text: "Improve the factors you control first. A nomination is worth more, but it is not something you can decide to earn on your own.",
      },
    },
    {
      id: "language-results",
      heading: "How do language results affect your CRS score?",
      body: [
        "Official language proficiency is the highest-value factor you control. Each of the four abilities, reading, writing, speaking and listening, is scored separately, and the points rise steeply as the benchmark level rises. Moving from a middle band to the top band can add more points per ability than almost any other single change you can make.",
        "Language also works twice. A strong first-language result unlocks skill transferability points when it is combined with a post-secondary credential or with foreign work experience. That is why a language improvement often produces a larger total jump than the language row on its own would suggest.",
        "A second official language adds points too, up to a combined maximum, and French results can earn additional points on top of that. If you already hold a strong English result, a French test is one of the few ways to add points without changing your education or your work history.",
      ],
    },
    {
      id: "education-and-credential-assessment",
      heading: "How does education change your score?",
      body: [
        "Education scores directly in core human capital and again through skill transferability. A doctoral degree earns the most, a master's degree or an entry-to-practice professional degree comes next, then a bachelor's degree or a three-year program, then shorter credentials. Two or more credentials, where one took three years or more, score above a single bachelor's degree.",
        "Foreign education has to be assessed. An educational credential assessment from a designated organisation tells IRCC what your credential is equivalent to in Canada, and without it the points are not available. The assessment takes time, so it belongs early in any plan.",
        "Canadian post-secondary study earns additional points of its own, at a higher value for a credential of three years or longer than for a one- or two-year credential. That is separate from the education points in core human capital.",
      ],
    },
    {
      id: "work-experience-and-age",
      heading: "How do work experience and age change your score?",
      body: [
        "Canadian work experience scores directly and rises with each additional year, up to a maximum at five years or more. Foreign work experience does not score directly, but it feeds skill transferability when it is combined with strong language results or with Canadian work experience. That is the key difference between the two.",
        "Age is the factor you cannot improve. Points are highest in the twenties, hold near the top until age 29, then decline year by year, and reach zero at 45. It is the reason two candidates with identical education, language and experience can end up with different scores, and the reason timing matters for some applicants.",
        "Because age cannot be changed, look harder at the factors that can. A candidate losing age points may gain more from a nomination, a French result or a Canadian credential than from waiting.",
      ],
    },
    {
      id: "spouse-and-partner-factors",
      heading: "How do a spouse or common-law partner change your score?",
      body: [
        "Having a spouse or common-law partner changes the structure of your score. Core human capital points are slightly lower when a spouse or partner is included, and the partner's own education, language proficiency and Canadian work experience then add up to 40 points in their own group.",
        "The rule has a wrinkle worth knowing. If your spouse or partner is not coming with you to Canada, or is already a Canadian citizen or permanent resident, you are scored as if you do not have a spouse, which means the higher core human capital maximum applies. The right-hand column of the CRS tables is the one that applies to you.",
        "The practical question is whether your partner improves the household score by being included. Sometimes a strong partner adds more than the reduction in core points costs; sometimes the reverse is true. Run both scenarios against the calculator rather than assuming.",
      ],
    },
    {
      id: "additional-points-and-what-changed",
      heading: "Which additional points count, and what no longer does?",
      body: [
        "The additional group is where the biggest single swing sits, and it is also where the rules have moved most recently. A provincial nomination is worth 600 points on its own, which is why a nomination can move a candidate from outside the invited range to comfortably inside it.",
        "From November 3, 2026, qualifying high-wage job offers can earn points under the Labour Market Integration factor. The offer must be valid under Express Entry and match an occupation on IRCC’s eligible list. A job offer can also matter for program eligibility even when it does not qualify for CRS points.",
      ],
      list: {
        title: "Additional points currently available",
        items: [
          "Provincial or territorial nomination: 600 points.",
          "French-language skills: 25 points with weak or no English, 50 points with English at CLB 5 or higher on all four abilities.",
          "Post-secondary education in Canada: 15 points for a one- or two-year credential, 30 points for three years or longer.",
          "A brother or sister in Canada who is a citizen or permanent resident and at least 18 years old: 15 points.",
        ],
      },
      callout: {
        label: "The one that changes everything",
        text: "A provincial nomination is worth more than every other additional factor combined. If a province is likely to nominate you, that is usually the shortest path to a higher ranking.",
      },
    },
    {
      id: "using-a-crs-calculator",
      heading: "How should you use a CRS calculator Canada?",
      body: [
        "A CRS calculator Canada is a planning tool, not a decision. Use it to see which factors are producing your score and where the unused room is, then test specific changes: a higher language band, a second credential, a French result or a nomination.",
        "Be careful with what you feed it. The calculator is only as good as the facts you enter, and the commonest error is claiming an occupation, a credential or a language level that your documents cannot support. Calculate the score you can prove, not the score you would like.",
        "Re-run it whenever a fact changes, and treat any single number as a snapshot. Cut-offs move between rounds, so the useful output of a calculator is the list of levers it shows you, not the total at the bottom of the screen.",
      ],
      related: [
        { href: "/tools/crs-calculator-canada", label: "CRS calculator" },
      ],
    },
    {
      id: "order-of-operations",
      heading: "In what order should you improve CRS score?",
      body: [
        "The order follows leverage and effort. Language and credential assessment are slow but fully within your control, so they come first. A nomination is worth more but depends on a province, so it is pursued in parallel rather than instead of the rest.",
        "What should not drive the order is a number you saw in a past round. A cut-off is the outcome of a particular pool on a particular day, and planning against it is planning against history rather than against the rules.",
      ],
      list: {
        title: "A practical order for improving CRS score",
        ordered: true,
        items: [
          "Confirm eligibility for a program first, because a score is useless without it.",
          "Take or retake the language test, since it is the highest-value factor you control.",
          "Complete the educational credential assessment so your education points are actually available.",
          "Document your work experience properly, with duties, hours and dates, so it counts where it should.",
          "Test a French result if you have any foundation, because it adds points on top of English.",
          "Assess a provincial nomination, which adds more than every other factor combined.",
          "Re-calculate after each change and re-check the current rules, because the system moves.",
        ],
      },
    },
    {
      id: "what-to-verify",
      heading: "What should you verify before you rely on your score?",
      body: [
        "Confirm every input against the official CRS criteria page and the IRCC calculator, and check that the documents behind your score are still valid. Test results expire, assessments carry a date, and work experience has to fall within the period the rules require.",
        "Check the CRS rules again before relying on an estimate. IRCC’s new Labour Market Integration factor takes effect November 3, 2026 and compares qualifying Canadian work experience with a qualifying high-wage job offer. A guide or calculator written before that date may not reflect the new calculation.",
        "If your profile includes a prior refusal, a status gap or documents that disagree with each other, deal with that before optimising points. A high score does not cure an inconsistency.",
      ],
    },
  ],

  glossary: [
    { term: "CRS", definition: "The Comprehensive Ranking System, the points system that scores and ranks profiles inside the Express Entry pool out of a maximum of 1,200 points." },
    { term: "Core human capital", definition: "The CRS group covering age, education, official language proficiency and Canadian work experience. It has the largest maximum of any group." },
    { term: "Skill transferability", definition: "The CRS group that rewards combinations of factors, such as a post-secondary credential with strong language results or with work experience." },
    { term: "Additional points", definition: "The CRS group covering a provincial nomination, French-language skills, Canadian post-secondary study and a sibling in Canada." },
    { term: "Educational credential assessment", definition: "An assessment from a designated organisation that states what a foreign credential is equivalent to in Canada, needed before foreign education scores points." },
    { term: "CLB and NCLC", definition: "CLB scores report English proficiency; NCLC scores report French proficiency. IRCC converts approved language-test results to the relevant scale." },
    { term: "Provincial nomination", definition: "A province or territory's endorsement of a candidate for permanent residence. When linked to Express Entry, it adds 600 CRS points." },
  ],

  faqs: [
    {
      "question": "How does a CRS calculator in Canada estimate my Express Entry score, and how can I improve my CRS score?",
      "answer": "There is no fixed good score, because the cut-off in each round depends on the size and strength of the pool. What you control is your own score and the factors you have left to improve. Use the calculator to see which factor has unused room, then decide whether a language retest, a credential assessment or a nomination is the better investment."
    },
    {
      "question": "Does a job offer improve a CRS score?",
      "answer": "Through November 2, 2026, a job offer does not add CRS points. From November 3, a qualifying offer in an eligible high-wage occupation may earn 50, 70 or 100 points under IRCC’s new factor. The offer must meet the current criteria, and an offer alone does not guarantee an invitation."
    },
    {
      "question": "How many points does a provincial nomination add to a CRS score?",
      "answer": "A provincial or territorial nomination linked to Express Entry adds 600 points, which is the largest single addition available in the system. That is why a nomination can move a candidate from well outside the invited range to comfortably inside it. The nomination itself is a separate application decided by the province, not by IRCC."
    },
    {
      "question": "Can I improve my CRS score without a job offer?",
      "answer": "Yes, and most improvements do not involve an employer. A higher language test result, an educational credential assessment, additional documented work experience, Canadian post-secondary study and a French-language result all add points. A provincial nomination adds the most, but it depends on a province selecting you."
    },
    {
      "question": "Do my language test results expire for CRS purposes?",
      "answer": "Language test results are valid for a limited period, so check the current validity rule on the official page before you rely on an older result. An expired result cannot support the points it produced, and it can also affect category eligibility where a language threshold applies. Re-testing is often the single most efficient way to protect a score."
    },
    {
      "question": "Does a high CRS score guarantee an Express Entry invitation?",
      "answer": "No. IRCC sets the CRS score cutoff and number of invitations for each round. A score that met one round’s cutoff may not meet another, and candidates must remain eligible and keep profile details accurate."
    },
    {
      "question": "Where can I calculate my current Express Entry CRS score?",
      "answer": "Use IRCC’s official CRS calculator with your current age, education, language results, work experience and family details. The result is an estimate; confirm the profile fields and program eligibility before submitting."
    },
    {
      "question": "Does age affect my Express Entry CRS score?",
      "answer": "Yes. Age is one of the CRS factors, and the points available change with age and whether you have an accompanying spouse. Use the official calculator rather than relying on a remembered point table."
    },
    {
      "question": "Can my spouse’s education and language results improve my CRS score?",
      "answer": "They may contribute under the spouse or common-law partner factors when applicable. Enter accurate spouse information and compare the official CRS criteria; points depend on the specific credential and test results."
    },
    {
      "question": "Will Express Entry job-offer points change on November 3, 2026?",
      "answer": "Yes. IRCC says the CRS job-offer points and assessment rules change on November 3, 2026. The new Labour Market Integration factor treats qualifying Canadian work experience and eligible high-wage job offers differently, so use IRCC’s transition instructions."
    }
  ],

  related: [
    { href: "/tools/crs-calculator-canada", label: "CRS calculator", note: "Test how each change to your profile moves your score." },
    { href: "/immigrate/express-entry", label: "Express Entry", note: "How the pool works and how invitations are issued." },
    { href: "/immigrate/federal-skilled-worker", label: "Federal Skilled Worker Program", note: "The main federal route for skilled workers abroad." },
    { href: "/immigrate/pnp-linked-express-entry", label: "PNP linked to Express Entry", note: "How a provincial nomination adds 600 points." },
    { href: "/immigrate/canadian-experience-class", label: "Canadian Experience Class", note: "The in-Canada route that rewards Canadian work experience." },
    { href: "/assessment/free-canada-immigration-assessment", label: "Free assessment", note: "Find out which route your profile fits best." },
  ],

  sources: [
    {
      "label": "IRCC — Comprehensive Ranking System (CRS) criteria",
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html"
    },
    {
      "label": "IRCC — Express Entry: Who can apply",
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply.html"
    },
    {
      "label": "IRCC — Category-based selection for Express Entry",
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html"
    },
    {
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html",
      "label": "IRCC CRS calculator"
    },
    {
      "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/changes.html",
      "label": "IRCC 2026 CRS and job-offer changes"
    }
  ],
};

export default article;
