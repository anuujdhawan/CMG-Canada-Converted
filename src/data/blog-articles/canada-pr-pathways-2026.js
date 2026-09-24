/**
 * Article body for `/blog/canada-pr-pathways-2026`.
 *
 * Metadata (title, description, keywords, category, official source) lives in
 * `src/data/blog-research.js` and is deliberately not duplicated here. This file
 * owns only the reading content.
 *
 * This is the pillar page for permanent residence routes. It compares the
 * pathways on who leads the decision and what they require, rather than on any
 * number, because program status changes: IRCC lists several pilots as closed or
 * paused, and the article is written so a status change does not invalidate it.
 */

const article = {
  slug: "canada-pr-pathways-2026",

  quickAnswer:
    "Canada PR pathways fall into four broad groups: economic programs such as Express Entry and the Provincial Nominee Program, regional programs including the Atlantic Immigration Program and the community pilots, family sponsorship, and in-Canada transitions from temporary status. The right route depends on your occupation, language results, work experience, family ties and where you are now.",

  keyTakeaways: [
    "Express Entry and the in-Canada transition depend mostly on your own profile and CRS score.",
    "The Provincial Nominee Program and the regional programs depend on a province, an employer or a community acting first.",
    "Family sponsorship is not a competition; it turns on the relationship and the sponsor's eligibility.",
    "Some routes are pilots, and pilots open, pause and close. Check the current status before you plan around one.",
    "Most people have more than one viable route, so choose by elimination rather than by preference.",
    "The route you can prove with documents is the route worth committing to.",
  ],

  sections: [
    {
      id: "what-counts-as-a-pr-pathway",
      heading: "What counts as a Canada PR pathway?",
      body: [
        "A Canada PR pathway is any route that ends in permanent residence, whether you apply from abroad or from inside Canada. The routes differ mainly in who controls the decision. In the federal economic programs the decision is points-based and made by IRCC. In the Provincial Nominee Program a province or territory decides first. In the regional programs an employer and sometimes a community are involved before IRCC is.",
        "Because the routes are built differently, comparing them on a single number is a mistake. Express Entry compares you to a national pool. A provincial stream compares you to that province's labour needs. Family sponsorship is not a competition at all; it depends on the relationship and on the sponsor's eligibility.",
        "The useful way to compare is to ask three questions of each route: what it requires you to have, who has to act first, and what happens if one part fails. This guide sets out those differences, then gives you a way to choose between them.",
      ],
      callout: {
        label: "The first question",
        text: "Ask who has to act before you can. That single question separates the routes you can drive yourself from the routes that depend on someone else choosing you.",
      },
    },
    {
      id: "pathways-compared",
      heading: "How do the main PR pathways compare?",
      body: [
        "The table is a map, not a ranking. Each pathway has a different bottleneck, and the bottleneck is usually what decides how long a file takes and whether it succeeds.",
        "Notice how many routes depend on someone else acting first. The Provincial Nominee Program depends on a province, the Atlantic program and the community pilots depend on a designated employer, and family sponsorship depends on the sponsor. Only Express Entry and the in-Canada transition are driven primarily by your own profile.",
      ],
      table: {
        caption: "Canada PR pathways compared by who leads and what they require",
        columns: ["Pathway", "Who leads", "Core requirement", "Best suited to"],
        rows: [
          ["Express Entry", "IRCC, by ranking", "Eligibility for one of the three federal skilled programs and a competitive CRS score.", "Skilled workers with strong language results and documented experience."],
          ["Provincial Nominee Program", "A province or territory", "Meeting a provincial stream's criteria, which often include a job offer or a tie to the province.", "Candidates whose occupation is in demand in one province."],
          ["Atlantic Immigration Program", "A designated employer", "A job offer from a designated employer in one of the four Atlantic provinces.", "Workers and graduates willing to settle in Atlantic Canada."],
          ["Community and rural pilots", "An employer and a community", "A job offer from a designated employer and a recommendation from the community.", "Workers who want a smaller community and already have an employer."],
          ["Family sponsorship", "A sponsor in Canada", "An eligible sponsor and a qualifying relationship.", "Spouses, partners, children and eligible relatives of Canadians and permanent residents."],
          ["In-Canada transition", "IRCC, by ranking", "Canadian work experience and eligibility for a program such as the Canadian Experience Class.", "Temporary residents already working or studying in Canada."],
        ],
      },
    },
    {
      id: "express-entry-pathway",
      heading: "How does Express Entry work as a PR pathway?",
      body: [
        "Express Entry manages three federal programs: the Federal Skilled Worker Program, the Federal Skilled Trades Program and the Canadian Experience Class. You create a profile, are scored under the Comprehensive Ranking System, and wait to be invited in a round of invitations. If you are invited, you have a set period to submit a full application.",
        "It is the most self-directed of the pathways. No employer or province has to choose you, but that also means nobody is advocating for you, and the score does the deciding. Category-based selection narrows some rounds to particular occupations or language profiles, so eligibility for a category can matter as much as the score itself.",
        "Express Entry is usually the strongest option when your language results are strong, your occupation is in a federal skilled category, and your work experience is documented. It is weakest when your score sits below the range the pool is being invited at, or when your occupation does not appear in the categories being used.",
      ],
      related: [
        { href: "/immigrate/express-entry", label: "Express Entry" },
        { href: "/immigrate/canadian-experience-class", label: "Canadian Experience Class" },
      ],
    },
    {
      id: "pnp-pathway",
      heading: "How does the Provincial Nominee Program fit alongside Express Entry?",
      body: [
        "The Provincial Nominee Program lets a province or territory nominate you for permanent residence based on its own economic needs. Each province runs its own streams with their own criteria, and each has a number of nominations it can issue in a year. That is why one province can open an intake while another pauses one in the same month.",
        "A nomination can be linked to Express Entry or run outside it. An enhanced nomination is linked to your Express Entry profile and adds 600 points, which is the largest single addition available in the CRS. A base nomination runs outside Express Entry and is processed as a separate, paper-based application.",
        "The provincial route is strongest when your occupation is in demand in a specific province and you can show a genuine connection to it, whether through a job offer, work or study there, or family. It is weaker when you are indifferent about where you settle, because the province has to believe you will stay.",
      ],
      related: [
        { href: "/immigrate/provincial-nominee-program-all-provinces-consolidated", label: "PNP compared by province" },
        { href: "/immigrate/pnp-linked-express-entry", label: "PNP linked to Express Entry" },
      ],
    },
    {
      id: "regional-and-community-pathways",
      heading: "When do the Atlantic and community pathways make sense?",
      body: [
        "The Atlantic Immigration Program is for skilled workers and international graduates who want to live and work in one of the four Atlantic provinces. It requires a job offer from a designated employer, and the employer has to be designated by the province first. A referral letter from the province supports a temporary work permit while the permanent residence application is processed.",
        "The community and rural pilots follow a similar logic at a smaller scale: a designated employer offers a job, and a participating community recommends the candidate. The binding constraint is almost always the employer and the community recommendation rather than the number of places.",
        "These routes are strongest when you already have, or can obtain, a job offer from a designated employer and you are willing to settle outside the largest cities. They are weaker when you are applying without an employer, because there is no points-based route into them. Some of these pilots have closed or been replaced over time, so confirm the current status of the one you are considering.",
      ],
      related: [
        { href: "/immigrate/atlantic-immigration-program", label: "Atlantic Immigration Program" },
        { href: "/immigrate/rural-and-northern-immigration-pilot", label: "Rural and community immigration pilots" },
      ],
    },
    {
      id: "family-sponsorship-pathway",
      heading: "How does family sponsorship work as a route to PR?",
      body: [
        "Family sponsorship does not rank you against other applicants. An eligible sponsor in Canada applies to sponsor a spouse, partner, dependent child or, in defined cases, another relative. The decision turns on the genuineness of the relationship and on the sponsor's eligibility, not on a score.",
        "Spousal and partner sponsorship can be inland or outland. Inland sponsorship is for a partner already living in Canada and can allow an open work permit while the application is processed; outland sponsorship is for a partner living abroad and generally keeps them abroad during processing. The choice affects travel and work, not the strength of the relationship evidence.",
        "The parents and grandparents route is different again: intake opens and closes, and the program can be paused. Because that route is not always available, many families use the Super Visa as a long-stay alternative while they wait for sponsorship to open.",
      ],
      related: [
        { href: "/sponsor/family-sponsorship-overview-all-categories", label: "Family sponsorship overview" },
        { href: "/sponsor/spousal-and-partner-sponsorship-overview", label: "Spousal and partner sponsorship" },
        { href: "/sponsor/super-visa-for-parents", label: "Super Visa for parents" },
      ],
    },
    {
      id: "in-canada-transitions",
      heading: "How do you get PR in Canada from a temporary status?",
      body: [
        "The main answer to how to get PR in Canada from inside the country is the Canadian Experience Class, one of the Express Entry programs. It is designed for people with eligible Canadian work experience, and it rewards that experience with points and with a route that does not require a job offer.",
        "The sequence usually runs from a study permit to a post-graduation work permit to skilled work experience, and then to an Express Entry profile. Each step has its own rules, and the work experience only counts if it meets the program's requirements for occupation, hours and the period in which it was gained.",
        "There is no general temporary resident to permanent resident pathway open at present; IRCC lists the broad temporary resident to PR pathway as closed. In-Canada transitions today run through programs such as the Canadian Experience Class or through a provincial nomination, rather than through a standing open pathway for anyone with temporary status.",
      ],
      related: [
        { href: "/immigrate/temporary-resident-to-pr-pathway", label: "Temporary resident to PR pathway" },
        { href: "/work-and-study/post-graduation-work-permit-pgwp", label: "Post-graduation work permit" },
      ],
    },
    {
      id: "how-to-choose",
      heading: "How do you choose between the PR pathways?",
      body: [
        "Choosing is a process of elimination. Start with the route that has the fewest dependencies and work outward, rather than starting with the route that sounds most attractive. Two candidates with the same occupation can end up on different routes because of language results, a provincial tie or a family relationship, and that is normal.",
        "It is also worth separating the routes you can drive from the routes that depend on someone else. If an employer is willing to designate a job offer, the regional programs become realistic. If a close relative can sponsor you, sponsorship is its own track rather than a fallback. If neither applies, the federal and provincial points systems are where the decision will be made.",
      ],
      list: {
        title: "A way to narrow the field",
        ordered: true,
        items: [
          "Write down your facts: age, occupation, language results, education, years of skilled work, and any Canadian study or work.",
          "Check Express Entry eligibility first, because it is the route with the fewest external dependencies.",
          "If your score is short, ask whether a province is likely to nominate you for your occupation.",
          "If you have a job offer from a designated employer, test the Atlantic and community routes.",
          "If a close family member in Canada can sponsor you, treat sponsorship as its own track rather than a fallback.",
          "Check admissibility last, because a criminal, medical or misrepresentation issue can close routes regardless of merit.",
        ],
      },
      callout: {
        label: "What this means for you",
        text: "Most people have more than one viable route. The work is finding the one where you can prove every requirement with documents you actually have.",
      },
    },
    {
      id: "what-to-verify",
      heading: "What should you verify before committing to a pathway?",
      body: [
        "Check the current rules on the official page for the program you choose, and check them again before you file. Program status changes: some pilots close, some intakes pause, and eligibility criteria are revised. A pathway that was open when you started researching may not be open when you apply.",
        "Then check that your documents support the route you have chosen. Reference letters that state duties and hours, a valid language result, an assessed credential, police certificates and a medical exam all take time. The route you can prove is the route worth choosing.",
        "If your situation involves a prior refusal, a status gap or an inadmissibility issue, get that reviewed before you commit to a pathway. The strongest route on paper is the wrong one if an admissibility problem will stop it.",
      ],
    },
  ],

  glossary: [
    { term: "Permanent residence", definition: "The status that lets a person live, work and study in Canada indefinitely, subject to the residency obligation, and eventually apply for citizenship." },
    { term: "Express Entry", definition: "The online system IRCC uses to manage applications for three federal skilled programs and to rank candidates by CRS score." },
    { term: "Provincial Nominee Program", definition: "The route through which a province or territory nominates people for permanent residence based on its own economic needs and criteria." },
    { term: "Enhanced nomination", definition: "A provincial nomination linked to an Express Entry profile. It adds 600 CRS points and the application is processed through Express Entry." },
    { term: "Base nomination", definition: "A provincial nomination that runs outside Express Entry, leading to a separate paper-based permanent residence application." },
    { term: "Atlantic Immigration Program", definition: "A regional route for skilled workers and graduates with a job offer from a designated employer in one of the four Atlantic provinces." },
    { term: "Canadian Experience Class", definition: "The Express Entry program for people with eligible skilled work experience gained in Canada. It is the main in-Canada transition route." },
    { term: "Super Visa", definition: "A long-stay visitor visa for the parents and grandparents of Canadian citizens and permanent residents, used when sponsorship is not available." },
  ],

  faqs: [
    {
      question: "Which Canada PR pathway is fastest?",
      answer:
        "There is no single fastest route, because speed depends on the program, how complete your file is and how quickly your information can be verified. What you can control is readiness. The candidates who move quickly are the ones whose language results, credential assessment and reference letters are already in place when an intake or a round opens, rather than being assembled afterwards.",
    },
    {
      question: "Can I apply for permanent residence without a job offer?",
      answer:
        "Yes. Express Entry, the Canadian Experience Class and most provincial streams do not require a job offer, and a job offer no longer adds CRS points. The routes that do require one are the regional and community programs, where a designated employer is central to eligibility. Family sponsorship also does not involve a job offer.",
    },
    {
      question: "Do I have to choose between Express Entry and the Provincial Nominee Program?",
      answer:
        "No, and many candidates pursue both. A provincial nomination linked to Express Entry adds 600 points to your score, so the two work together rather than competing. You can hold an Express Entry profile while applying to a province, provided the information in both is consistent and accurate.",
    },
    {
      question: "Is there still a temporary resident to permanent resident pathway?",
      answer:
        "IRCC lists the broad temporary resident to permanent resident pathway as closed, so there is no standing open route for anyone holding temporary status. In-Canada transitions today run through programs such as the Canadian Experience Class, or through a provincial nomination, both of which have their own eligibility rules. Check the official page for the current position.",
    },
    {
      question: "How do I decide between sponsorship and an economic program?",
      answer:
        "They are not alternatives you weigh against each other in the same way, because they depend on different facts. Sponsorship is available only if you have an eligible sponsor and a qualifying relationship. An economic program depends on your own profile. If you have both options, compare them on timeline and on the documents each one requires.",
    },
  ],

  related: [
    { href: "/immigrate/express-entry", label: "Express Entry", note: "The federal skilled route and how a profile is ranked." },
    { href: "/immigrate/provincial-nominee-program-all-provinces-consolidated", label: "Provincial nominee programs", note: "Every province and territory in one view." },
    { href: "/sponsor/family-sponsorship-overview-all-categories", label: "Family sponsorship", note: "Spouses, partners, children and other relatives." },
    { href: "/immigrate/atlantic-immigration-program", label: "Atlantic Immigration Program", note: "The employer-led route for Atlantic Canada." },
    { href: "/immigrate/canadian-experience-class", label: "Canadian Experience Class", note: "The main transition from Canadian work experience." },
    { href: "/assessment/free-canada-immigration-assessment", label: "Free assessment", note: "Match your profile to a route before you commit." },
  ],

  sources: [
    { label: "IRCC — Live in Canada permanently", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html" },
    { label: "IRCC — Immigrate as a provincial nominee", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html" },
    { label: "IRCC — Atlantic Immigration Program", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/atlantic-immigration.html" },
    { label: "IRCC — Sponsor your family members", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html" },
  ],
};

export default article;
