/**
 * Article body for `/blog/lmia-canada-explained`.
 *
 * Metadata (title, description, keywords, category, official source) lives in
 * `src/data/blog-research.js` and is deliberately not duplicated here. This file
 * owns only the reading content.
 *
 * The LMIA fee, the prevailing-wage figures and the advertising period are set
 * by ESDC and revised periodically, so they are described by rule and pointed at
 * the official page rather than quoted as fixed numbers.
 */

const article = {
  slug: "lmia-canada-explained",

  quickAnswer:
    "An LMIA Canada employers obtain from ESDC is a labour market test, not a worker application. The employer must show it tried to hire a Canadian first and will meet wage and working-condition rules. Only after a positive or neutral decision can the worker apply for an employer-specific permit. The two responsibilities are separate.",

  keyTakeaways: [
    "A Labour Market Impact Assessment is the employer’s document: it tests the labour market, not the worker’s individual eligibility.",
    "The LMIA process requires recruitment evidence, a compliant wage and working conditions, and a genuine job offer.",
    "A positive or neutral decision lets the employer hire; it does not by itself give the worker a permit or any status.",
    "Employers face compliance conditions and inspections after the hire, with penalties for failing to meet them.",
    "LMIA-exempt routes under the International Mobility Program replace the labour market test with a different set of criteria.",
    "The Global Talent Stream is a faster LMIA route, not an exemption, and it adds a Labour Market Benefits Plan.",
  ],

  sections: [
    {
      id: "what-an-lmia-is",
      heading: "What is a Labour Market Impact Assessment?",
      body: [
        "A Labour Market Impact Assessment is a decision by Employment and Social Development Canada about whether hiring a foreign worker for a specific job would affect the Canadian labour market. The employer applies. The question is not whether the worker is qualified in the abstract, but whether the job was genuinely open to Canadians and whether the terms of the hire are fair.",
        "The outcome is positive, neutral or negative. A positive assessment means ESDC accepts that the hire is justified and that the employer met the requirements. A neutral assessment means the hire is acceptable but the employer did not have to do as much to find a Canadian worker — it applies in specific circumstances, not as a general option. A negative assessment blocks that hire.",
        "The assessment is job-specific and employer-specific. It does not travel with the worker to a different job, and it does not convert into permanent residence on its own. It is one step, and it belongs to the employer.",
      ],
      callout: {
        label: "What this means for you",
        text: "If a consultant offers to “get you an LMIA”, be careful. The application is the employer’s, and the employer’s business, payroll and recruitment records are the evidence.",
      },
    },
    {
      id: "who-does-what",
      heading: "Who is responsible for what in the LMIA process?",
      body: [
        "The single most useful thing to understand is the split of responsibility. The employer carries the labour market test and the compliance obligations that follow. The worker carries their own admissibility, their permit application and their status. Neither side can do the other’s work, and a weakness on one side does not excuse a weakness on the other.",
        "In practice, most confusion comes from treating the LMIA as if it were a worker’s qualification. It is not. A worker can be perfectly eligible for a permit and still have no route without a positive assessment; an employer can hold a positive assessment and still fail because the worker is inadmissible or files an incomplete permit application.",
      ],
      table: {
        caption: "Who does what in the LMIA process",
        columns: ["Step", "Employer’s responsibility", "Worker’s responsibility"],
        rows: [
          ["Labour market test", "Recruit and document why no qualified Canadian was hired", "Nothing — this step belongs entirely to the employer"],
          ["Wage and conditions", "Offer the prevailing wage and compliant working conditions", "Check that the offer matches what the permit will state"],
          ["Application to ESDC", "File the LMIA and pay the processing fee", "Wait for the decision before applying for a permit"],
          ["Work permit", "Provide the job offer and the LMIA number", "File the permit, biometrics and supporting documents"],
          ["After the hire", "Meet the LMIA conditions and pass inspections", "Work only as the permit allows and keep status valid"],
        ],
      },
    },
    {
      id: "employer-duties",
      heading: "What must an employer do to obtain an LMIA?",
      body: [
        "The employer has to demonstrate a genuine labour shortage for the specific job. That means a real vacancy, recruitment that meets ESDC’s requirements, a wage and working conditions that match what Canadians in the role receive, and a business that can support the employment. The application is judged on the employer’s records, not on a summary of them.",
        "The employer also has to keep the promises made in the application. The wage, hours, duties and location all become commitments, and paying less than the approved wage or changing the role puts the employer in breach of the conditions.",
        "Employers should also check the program’s current restrictions before investing in an application, because certain regions, occupations and wage levels face different rules or limits. The current ESDC instructions for the specific stream are the only reliable test of eligibility.",
      ],
    },
    {
      id: "recruitment-evidence",
      heading: "What recruitment evidence does the LMIA process require?",
      body: [
        "Recruitment evidence is the heart of the LMIA process. The employer must show that it advertised the position using the methods ESDC requires, for at least the minimum period, and that it assessed the applicants who responded. A job posting alone is not enough — the employer has to explain what happened to the candidates it did receive.",
        "The evidence normally includes the advertisement, proof of where and when it ran, a record of the applications received, and a written explanation of why each Canadian or permanent resident applicant was not hired. “No qualified applicants” is acceptable only if the search was genuine and the reasoning is documented.",
        "Two failures recur. The first is advertising that does not match the actual job — different duties, a lower wage, or a narrower requirement than the role genuinely has. The second is a gap between what the advertisement said and what the employer now tells ESDC. The two have to be consistent, because ESDC reads them side by side.",
      ],
      callout: {
        label: "What this means for you",
        text: "If you are the worker, the recruitment record is not yours to build, but it is worth understanding. It explains why a start date can move, and why the employer may need time before your application can be filed.",
      },
    },
    {
      id: "wage-and-conditions",
      heading: "What wage and working-condition rules apply?",
      body: [
        "The wage offered must meet the prevailing rate for the occupation and the region where the work is done, and it must be at least the applicable minimum. ESDC publishes how the prevailing wage is determined for a given occupation and location, and the assessment is made against that figure rather than against whatever the employer would prefer to pay.",
        "Working conditions matter as much as the wage. The hours, the duties, the benefits and the treatment of the worker have to be consistent with what the employer offers Canadian employees in a comparable role. A job that pays the prevailing wage but imposes conditions no Canadian employee would accept is still non-compliant.",
        "The wage and conditions are not just an entry requirement. They remain in force after the worker arrives, so underpaying a worker approved at a higher wage, or moving them into a different role without approval, exposes the employer to enforcement and puts the worker’s status at risk.",
      ],
    },
    {
      id: "compliance-and-inspections",
      heading: "What compliance and inspection exposure do employers face?",
      body: [
        "A positive LMIA comes with ongoing conditions, and the employer’s obligations do not end when the worker starts. Employers must pay the approved wage, provide the approved working conditions, employ the worker in the approved occupation and location, and keep records that show they did so. They must also not charge the worker, directly or indirectly, for the cost of the assessment.",
        "ESDC can inspect an employer, and inspections can be triggered by a complaint as well as by a random selection. The employer is expected to produce payroll records, timesheets and other documents on request. An employer who cannot show compliance is exposed to monetary penalties and, in serious or repeated cases, to being banned from using the program.",
        "That exposure is worth weighing before the application, not after. A ban does not affect only the worker involved — it prevents the employer from hiring through the program at all for its duration, a serious consequence for a business that relies on foreign workers.",
      ],
    },
    {
      id: "worker-side",
      heading: "What does the LMIA mean for the worker’s own application?",
      body: [
        "For the worker, the LMIA is a prerequisite, not a qualification. Once a positive or neutral assessment exists, you still have to apply for a work permit and satisfy the officer that you are admissible and that you will comply with the conditions of your stay. The LMIA number is evidence about the job; it says nothing about your own history.",
        "The permit that follows is employer-specific. It names the employer, and often the role and location. You may work only in that employment, and if the job ends, the permit does not become something more flexible. You would need a new application, and a new employer would need to complete their own step.",
        "It is worth being clear about what the LMIA does not do. It does not give you permanent residence, an open permit, or any exemption from medical, criminal or document requirements. If permanent residence is your goal, the economic programs that lead to it are a separate question.",
      ],
      related: [
        { href: "/work-and-study/canada-work-permit-overview", label: "Canada work permit overview" },
      ],
    },
    {
      id: "lmia-exempt-alternatives",
      heading: "What are the LMIA-exempt alternatives?",
      body: [
        "Not every employer-specific work permit needs a labour market test. The International Mobility Program covers work that is exempt from an LMIA, including trade agreements such as CUSMA, intra-company transfers, significant benefit to Canada, reciprocal arrangements and French-language mobility. Each exemption has its own criteria, and they are assessed strictly.",
        "The Global Talent Stream is sometimes described as an alternative, but it is not an exemption. It sits inside the Temporary Foreign Worker Program and still requires an assessment, alongside a Labour Market Benefits Plan covering activities such as job creation or skills transfer. It is faster, not exempt.",
        "For workers whose long-term goal is permanent residence, the relevant comparison is usually not LMIA or exemption at all. Express Entry and the provincial nominee programs are the routes that lead to permanent residence, and Canadian work experience gained on either kind of permit can support them. Treat the permit as a way to work, and the immigration program as a separate plan.",
      ],
      related: [
        { href: "/work-and-study/global-talent-stream", label: "Global Talent Stream" },
        { href: "/immigrate/express-entry", label: "Express Entry" },
      ],
    },
    {
      id: "for-employers",
      heading: "What should an employer check before filing?",
      body: [
        "An LMIA application is judged on records, so the work before filing matters more than the filing itself. The questions below are the ones that most often decide the outcome.",
        "Most refusals in this area are not caused by a missing form. They are caused by a recruitment record that does not show a genuine search, a wage below the prevailing rate, or a job description that shifts between the advertisement and the application. Fixing those before filing is far cheaper than answering them afterwards.",
      ],
      list: {
        title: "An employer’s pre-filing checklist",
        ordered: true,
        items: [
          "Confirm the job is eligible under the current stream rules, including any regional or occupational restrictions.",
          "Set the wage at or above the prevailing rate for the occupation and region.",
          "Advertise using the methods ESDC requires, for the full minimum period, and keep the proof.",
          "Record every applicant, the reason each was not hired, and the evidence behind that reason.",
          "Make sure the job description, the wage and the duties match across every document.",
          "Plan for the ongoing conditions and the records you will need if an inspection follows.",
        ],
      },
    },
    {
      id: "for-workers",
      heading: "What should a worker check before relying on an LMIA?",
      body: [
        "If your plan depends on an employer’s LMIA, the most important thing you can do is verify the parts you control and understand the parts you do not. The list below is the worker’s side of the same file.",
        "A worker cannot repair a weak employer application, and an employer cannot repair a weak permit application. What you can do is make sure your own file is complete, keep your status valid while you wait, and treat the job offer as one part of a larger immigration plan rather than the whole of it.",
      ],
      list: {
        title: "A worker’s checklist",
        ordered: true,
        items: [
          "Confirm the employer is a genuine business and that the offer is for real, paid work.",
          "Understand that the permit will be employer-specific and tied to that job.",
          "Check that the wage and duties on the offer match what the employer tells ESDC.",
          "Never pay a fee to the employer for the LMIA — that is the employer’s cost, not yours.",
          "Prepare your own documents: passport, biometrics, police certificates, medical exam if required.",
          "Keep a separate permanent residence plan, because the permit alone does not lead to one.",
        ],
      },
    },
  ],

  glossary: [
    { term: "Labour Market Impact Assessment", definition: "A decision by ESDC on whether hiring a foreign worker for a specific job would affect the Canadian labour market." },
    { term: "LMIA", definition: "The short name for a Labour Market Impact Assessment, the employer-side step required under the Temporary Foreign Worker Program." },
    { term: "Employment and Social Development Canada", definition: "The federal department, often shortened to ESDC, that assesses LMIA applications and inspects employer compliance." },
    { term: "Positive or neutral LMIA", definition: "A decision that permits the employer to hire the foreign worker. A neutral decision applies in specific circumstances rather than as a general option." },
    { term: "International Mobility Program", definition: "The work permit route for employer-specific work that is exempt from a labour market impact assessment." },
    { term: "Compliance inspection", definition: "An ESDC review of whether an employer met the conditions attached to an assessment, which can follow a complaint or a random selection." },
    { term: "Global Talent Stream", definition: "A faster employer-driven stream within the Temporary Foreign Worker Program that still requires an assessment and a Labour Market Benefits Plan." },
  ],

  faqs: [
    {
      question: "What is an LMIA Canada employers apply for?",
      answer:
        "It is a Labour Market Impact Assessment: a decision by ESDC on whether hiring a foreign worker for a specific job would affect the Canadian labour market. The employer applies, and the assessment tests the job and the recruitment, not the worker’s own eligibility for a permit.",
    },
    {
      question: "Does a positive LMIA guarantee a work permit?",
      answer:
        "No. A positive or neutral decision lets the employer hire, but the worker still has to apply for a work permit and satisfy an officer on admissibility, documents and intent. A positive assessment with an inadmissible worker, or an incomplete permit application, still results in a refusal.",
    },
    {
      question: "What is the difference between a positive and a neutral LMIA?",
      answer:
        "A positive assessment means ESDC accepts the hire and the employer met the requirements. A neutral assessment also permits the hire, but applies in specific circumstances where the labour market impact is considered acceptable without the same recruitment effort. Neither is a general option you can choose.",
    },
    {
      question: "Can a worker be charged for the LMIA?",
      answer:
        "No. The assessment is the employer’s cost, and charging the worker for it, directly or indirectly, breaches the employer’s conditions. If an employer asks you to reimburse the fee or pay it upfront, treat that as a serious warning sign and verify the offer before you rely on it.",
    },
    {
      question: "What happens if the employer fails an inspection?",
      answer:
        "ESDC can impose monetary penalties and, in serious or repeated cases, ban the employer from using the program. A ban stops that employer from hiring through the program for its duration, which affects future workers as well as the one involved in the inspection.",
    },
    {
      question: "Is there an alternative to an LMIA?",
      answer:
        "Yes, for work covered by an exemption under the International Mobility Program, such as trade agreements, intra-company transfers or French-language mobility. The Global Talent Stream is not an exemption — it is a faster route that still requires an assessment and a Labour Market Benefits Plan.",
    },
  ],

  related: [
    { href: "/work-and-study/lmia-and-employer-services-overview", label: "LMIA and employer services overview", note: "How the employer side of hiring a foreign worker fits together." },
    { href: "/work-and-study/global-talent-stream", label: "Global Talent Stream", note: "The faster employer-driven route, and why it is not an exemption." },
    { href: "/work-and-study/tfwp-employer-compliance", label: "Employer compliance", note: "The conditions that follow a positive assessment and how inspections work." },
    { href: "/immigrate/express-entry", label: "Express Entry", note: "The permanent residence route that a work permit alone does not provide." },
  ],

  sources: [
    { label: "ESDC — Hire a temporary foreign worker", url: "https://www.canada.ca/en/employment-social-development/services/foreign-workers.html" },
    { label: "IRCC — Work in Canada: work permits", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit.html" },
  ],
};

export default article;
