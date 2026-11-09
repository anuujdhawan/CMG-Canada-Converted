/**
 * NOC 2021 Version 1.0 unit-group classification structure.
 * Source: Statistics Canada and Employment and Social Development Canada.
 * The brief definitions support search; use the official NOC profiles for full details.
 */
export const teerLevels = {
  "0": {
    "label": "TEER 0",
    "note": "Management occupations"
  },
  "1": {
    "label": "TEER 1",
    "note": "Commonly a university degree or related TEER 2 experience"
  },
  "2": {
    "label": "TEER 2",
    "note": "Commonly a 2–3 year post-secondary program, longer apprenticeship, or supervisory responsibility"
  },
  "3": {
    "label": "TEER 3",
    "note": "Commonly a shorter post-secondary program, apprenticeship, or substantial on-the-job training"
  },
  "4": {
    "label": "TEER 4",
    "note": "Commonly secondary school or several weeks of on-the-job training"
  },
  "5": {
    "label": "TEER 5",
    "note": "Short work demonstration; no formal education requirement"
  }
};

export const nocOccupations = [
  {
    "title": "Legislators",
    "code": "00010",
    "teer": 0,
    "definition": "Legislators participate in the activities of a federal, provincial, territorial or local government legislative body or executive council, band council or school board as elected or appointed members."
  },
  {
    "title": "Senior government managers and officials",
    "code": "00011",
    "teer": 0,
    "definition": "Senior government managers and officials plan, organize, direct, control and evaluate, through middle managers, the major activities of municipal or regional governments or of provincial, territorial or federal departments, boards, agencies or commissions. They establish the direction to be taken by these organizations in accordance with legislation and policies made by elected representatives or legislative bodies."
  },
  {
    "title": "Senior managers - financial, communications and other business services",
    "code": "00012",
    "teer": 0,
    "definition": "Senior managers in financial, communications and other business services are usually appointed by a board of directors, to which they report. They work either alone or in conjunction with the board of directors to develop and establish objectives for the company, and to develop or approve policies and programs. They plan, organize, direct, control and evaluate, through middle managers, the operations of their organization in relation to established objectives. They work in establishments throughout the telecommunications, finance, insurance, real estate, and data processing, hosting and related services industries as well as other business service industries or they may own and operate their own business."
  },
  {
    "title": "Senior managers - health, education, social and community services and membership organizations",
    "code": "00013",
    "teer": 0,
    "definition": "Senior managers in health, education, social and community services and membership organizations plan, organize, direct, control and evaluate, through middle managers, membership and other organizations or institutions that deliver health, education, social or community services. They formulate policies which establish the direction to be taken by these organizations, either alone or in conjunction with a board of directors. They are employed in health care organizations, educational services, social and community services and membership organizations or they may own and operate their own business."
  },
  {
    "title": "Senior managers - trade, broadcasting and other services",
    "code": "00014",
    "teer": 0,
    "definition": "Senior managers in trade, broadcasting and other customer services plan, organize, direct, control and evaluate, through middle managers, trade, broadcasting and other service industry companies. They formulate policies which establish the direction to be taken by these companies, either alone or in conjunction with a board of directors. They work in establishments in broadcasting and related media services, wholesale trade, retail trade, accommodation and food service, and other services or they may own and operate their own business."
  },
  {
    "title": "Senior managers - construction, transportation, production and utilities",
    "code": "00015",
    "teer": 0,
    "definition": "Senior managers in construction, transportation, production and utilities plan, organize, direct, control and evaluate, through middle managers, the overall operations of goods production, utility, transportation and construction companies. They formulate policies which establish the direction to be taken by these companies, either alone or in conjunction with other members of a board of directors. They work in establishments throughout the following industries: fishing, forestry, logging and agriculture; mining, oil and gas extraction; construction; transportation and warehousing; printing; manufacturing; and utilities or they may own and operate their own business."
  },
  {
    "title": "Financial managers",
    "code": "10010",
    "teer": 0,
    "definition": "Financial managers plan, organize, direct, control and evaluate the operation of financial and accounting departments. They develop and implement the financial policies and systems of establishments. Financial managers establish performance standards and prepare various financial reports for senior management. They are employed in financial and accounting departments in companies throughout the public and private sectors and in government."
  },
  {
    "title": "Human resources managers",
    "code": "10011",
    "teer": 0,
    "definition": "Human resources managers plan, organize, direct, control and evaluate the operations of human resources and personnel departments, and develop and implement policies, programs and procedures regarding human resource planning, recruitment, collective bargaining, training and development, occupation classification and pay and benefit administration. They represent management and participate actively on various joint committees to maintain ongoing relations between management and employees. They are employed throughout the private and public sectors."
  },
  {
    "title": "Purchasing managers",
    "code": "10012",
    "teer": 0,
    "definition": "Purchasing managers plan, organize, direct, control and evaluate the activities of a purchasing department and develop and implement the purchasing policies of a business or institution. They are employed throughout the public and private sectors."
  },
  {
    "title": "Other administrative services managers",
    "code": "10019",
    "teer": 0,
    "definition": "Other administrative services managers plan, organize, direct, control and evaluate departments responsible for corporate governance and regulatory compliance, records management, security services, admissions and other administrative services. Also included in this unit group are managers responsible for departments involved in two or more of the following activities: finance, human resources, purchasing or administrative services. Managers in this unit group are employed throughout the public and private sectors."
  },
  {
    "title": "Insurance, real estate and financial brokerage managers",
    "code": "10020",
    "teer": 0,
    "definition": "Insurance, real estate and financial brokerage managers plan, organize, direct, control and evaluate the activities of departments or establishments that provide insurance, mortgage, real estate and investment services. They are generally responsible for business development and must ensure that their group reaches performance levels related to established objectives. They are employed by insurance companies, real estate firms, stockbrokers, investment dealers, mortgage brokers and security and commodity exchanges."
  },
  {
    "title": "Banking, credit and other investment managers",
    "code": "10021",
    "teer": 0,
    "definition": "Banking, credit and other investment managers plan, organize, direct, control and evaluate the activities of financial establishments or operational departments within such establishments, or credit departments in industrial and commercial establishments. They oversee business development and manage overall performance in accordance with established strategic directions and policies. Banking managers are employed by banks, trust companies and credit unions. Credit managers are employed by credit departments in department stores, utility companies, car dealerships, insurance companies or other industrial or commercial organizations. Other investment managers are employed by credit card companies, consumer loan companies, mutual fund investment firms, mortgage investment companies or other financial establishments concerned with extending loans and financing and investments."
  },
  {
    "title": "Advertising, marketing and public relations managers",
    "code": "10022",
    "teer": 0,
    "definition": "Advertising, marketing, public relations and e-business managers plan, organize, direct, control and evaluate the activities of establishments and departments involved in commercial, industrial and e-business advertising, marketing and public relations. They are employed by commercial and industrial establishments, government departments, and advertising, marketing and public relations firms or consulting businesses."
  },
  {
    "title": "Other business services managers",
    "code": "10029",
    "teer": 0,
    "definition": "Other business services managers plan, organize, direct, control and evaluate the operations of establishments that provide services to business, and ensure the quality of those services and client satisfaction. They work in fields such as management consulting, market research, personnel and payroll services, contact centre services and security services."
  },
  {
    "title": "Telecommunication carriers managers",
    "code": "10030",
    "teer": 0,
    "definition": "Telecommunication carriers managers plan, organize, direct, control and evaluate the operations of a telecommunications establishment, department or facility. They are employed by wired, wireless, satellite and other telecommunications carriers."
  },
  {
    "title": "Financial auditors and accountants",
    "code": "11100",
    "teer": 1,
    "definition": "Financial auditors examine and analyze the accounting and financial records of individuals and establishments to ensure accuracy and compliance with established accounting standards and procedures. Accountants plan, organize and administer accounting systems for individuals and establishments. They are employed by private sector accounting and auditing firms or departments and public sector accounting and auditing departments or units, or they may be self-employed. Articling students in accounting firms are included in this unit group."
  },
  {
    "title": "Financial and investment analysts",
    "code": "11101",
    "teer": 1,
    "definition": "Financial and investment analysts collect and analyze financial information such as economic forecasts, trading volumes and the movement of capital, financial backgrounds of companies, historical performances and future trends of stocks, bonds and other investment instruments to provide financial and investment or financing advice for their company or their company's clients. Their studies and evaluations cover areas such as takeover bids, private placements, mergers or acquisitions. Financial analysts are employed by a wide range of establishments throughout the private and public sector, such as banks, brokerage houses, insurance companies, investment companies, manufacturing firms, trust companies, utility companies and underwriting firms. Investment analysts are employed primarily by brokerage houses and fund management companies."
  },
  {
    "title": "Financial advisors",
    "code": "11102",
    "teer": 1,
    "definition": "Financial advisors counsel individuals on financial decisions such as investments, cash management, and estate planning. They establish personal financial plans according to clients' objectives and guide them through the implementation of the proposed strategies that may be adjusted as the situation evolve. They are employed by banks, trust companies and investment firms, or they may be self-employed."
  },
  {
    "title": "Securities agents, investment dealers and brokers",
    "code": "11103",
    "teer": 1,
    "definition": "Securities agents and investment dealers buy and sell stocks, bonds, treasury bills, mutual funds and other securities for individual investors, pension fund managers, banks, trust companies, insurance firms and other establishments. Brokers buy and sell stocks, bonds, commodity futures, foreign currencies and other securities at stock exchanges on behalf of investment dealers. They are employed by investment companies, stock brokerage firms, stock and commodity exchanges and other establishments in the securities industry."
  },
  {
    "title": "Other financial officers",
    "code": "11109",
    "teer": 1,
    "definition": "Other financial officers include professional occupations in finance such as financial examiners and inspectors, financial investigators, financial underwriters, mortgage brokers and trust officers. They are employed by banks, trust companies, investment firms and governments, or they may be self-employed."
  },
  {
    "title": "Human resources professionals",
    "code": "11200",
    "teer": 1,
    "definition": "Human resources professionals develop, implement and evaluate human resources and labour relations policies, programs and procedures and advise employers and employees on human resources matters. They are employed throughout the public and private sectors, or they may be self-employed."
  },
  {
    "title": "Professional occupations in business management consulting",
    "code": "11201",
    "teer": 1,
    "definition": "Professionals in business management consulting occupations provide services to management such as analyzing the structure, operations, managerial methods or functions of an organization in order to propose, plan and implement improvements. They are employed by management consulting firms and throughout the public and private sectors or are self-employed."
  },
  {
    "title": "Professional occupations in advertising, marketing and public relations",
    "code": "11202",
    "teer": 1,
    "definition": "Professional occupations in advertising, marketing and public relations analyse, develop and implement communication and promotion strategies and information programs; analyse advertising needs and develop appropriate advertising and marketing plans; publicize activities and events, and maintain media relations on behalf of businesses, governments and other organizations, and for performers, athletes, writers and other talented individuals. They are employed by marketing and consulting firms, advertising agencies, corporations, associations, government, social agencies, museums, galleries, public interest groups, and cultural and other organizations, or they may be self-employed. Agents such as entertainment, literary and sports agents are included in this unit group."
  },
  {
    "title": "Supervisors, general office and administrative support workers",
    "code": "12010",
    "teer": 2,
    "definition": "Supervisors of general office and administrative support workers supervise and coordinate the activities of workers in the following minor groups: Office support and court services occupations (1410) and Survey, statistical and data entry occupations (1411). They are employed throughout the public and private sectors."
  },
  {
    "title": "Supervisors, finance and insurance office workers",
    "code": "12011",
    "teer": 2,
    "definition": "Supervisors of finance and insurance office workers supervise and coordinate the activities of workers in the following unit groups: Payroll administrators (13102), Accounting and related clerks (14200), Banking, insurance and other financial clerks (14201) and Collection clerks (14202). They are employed by banks and other financial institutions, insurance companies, and by other establishments throughout the public and private sectors."
  },
  {
    "title": "Supervisors, library, correspondence and related information workers",
    "code": "12012",
    "teer": 2,
    "definition": "Supervisors of library, correspondence and related information workers supervise and coordinate the activities of workers in the following unit groups: Survey interviewers and statistical clerks (14110), Library assistants and clerks (14300), and Correspondence, publication and regulatory clerks (14301). They are employed throughout the public and private sectors."
  },
  {
    "title": "Supervisors, supply chain, tracking and scheduling coordination occupations",
    "code": "12013",
    "teer": 2,
    "definition": "Supervisors of supply chain, tracking and scheduling coordination occupations supervise the activities of workers in unit group 13201 Production and transportation logistics coordinators and in sub-major group 144: Supply chain logistics, tracking and scheduling coordination occupations. They are employed throughout the public and private sectors."
  },
  {
    "title": "Executive assistants",
    "code": "12100",
    "teer": 2,
    "definition": "Executive assistants coordinate administrative procedures, public relations activities and research and analysis functions for members of legislative assemblies, ministers, deputy ministers, corporate officials and executives, committees and boards of directors. They are employed by governments, corporations and associations."
  },
  {
    "title": "Human resources and recruitment officers",
    "code": "12101",
    "teer": 2,
    "definition": "Human resources and recruitment officers identify and advertise job vacancies, recruit candidates, and assist in the selection and reassignment of employees. They are employed throughout the private and public sectors."
  },
  {
    "title": "Procurement and purchasing agents and officers",
    "code": "12102",
    "teer": 2,
    "definition": "Procurement and purchasing agents and officers source and purchase general and specialized equipment, materials, business services and land or access rights for use or for further processing by their establishment. They are employed throughout the public and private sectors."
  },
  {
    "title": "Conference and event planners",
    "code": "12103",
    "teer": 2,
    "definition": "Conference and event planners plan, organize and coordinate conferences, conventions, meetings, seminars, exhibitions, trade shows, festivals and other events. They are employed by tourism associations, trade and professional associations, convention and conference centres, governments and by conference and event planning companies, or they may be self-employed."
  },
  {
    "title": "Employment insurance and revenue officers",
    "code": "12104",
    "teer": 2,
    "definition": "Employment insurance and revenue officers administer and enforce laws and regulations related to tax revenue, employment insurance and other government benefit services. They are employed by government agencies."
  },
  {
    "title": "Court reporters, medical transcriptionists and related occupations",
    "code": "12110",
    "teer": 2,
    "definition": "Court reporters record and transcribe verbatim the proceedings of courts, legislative assemblies and committees, and prepare transcripts for use by judges, tribunals and quasi-judicial panels. They are employed by courts of law, provincial and federal legislative assemblies and committees, or they may be self-employed. Medical transcriptionists record, transcribe and edit dictation by physicians and other health care providers, surgical proceedings, health-related reports and other medical documentation. They are employed by hospitals, medical clinics and doctors' offices, or they may be self-employed. Closed captioners, braille technicians and other transcriptionists are included in this unit group."
  },
  {
    "title": "Health information management occupations",
    "code": "12111",
    "teer": 2,
    "definition": "Health information management workers collect, code, record, review and manage health information. They are employed by hospitals, clinics, workplace health and safety boards, health record consulting firms and other health care establishments. Health information management workers who are supervisors are included in this unit group."
  },
  {
    "title": "Records management technicians",
    "code": "12112",
    "teer": 2,
    "definition": "Records management technicians operate and maintain systems for the collection, classification, retrieval and retention of records, images, documents and information. They are employed throughout the private and public sectors."
  },
  {
    "title": "Statistical officers and related research support occupations",
    "code": "12113",
    "teer": 2,
    "definition": "Statistical officers and workers in related research support occupations provide statistical and research support services to a wide range of businesses and organizations. These workers conduct statistical routines, monitor trends, compile data and prepare charts, graphs, summaries and reports in support of organizational information needs and research activities. They are employed throughout the public and private sectors. Statistical officers who are also supervisors are included in this unit group."
  },
  {
    "title": "Accounting technicians and bookkeepers",
    "code": "12200",
    "teer": 2,
    "definition": "Accounting technicians and bookkeepers maintain complete sets of books, keep records of accounts, verify the procedures used for recording financial transactions, and provide personal bookkeeping services. They are employed throughout the private and public sectors, or they may be self-employed."
  },
  {
    "title": "Insurance adjusters and claims examiners",
    "code": "12201",
    "teer": 2,
    "definition": "Insurance adjusters investigate insurance claims and determine the amount of loss or damages covered by insurance policies. They are employed in claims departments of insurance companies or as independent adjusters. Insurance claims examiners examine claims investigated by insurance adjusters and authorize payments. They are employed at head offices or branches of insurance companies."
  },
  {
    "title": "Insurance underwriters",
    "code": "12202",
    "teer": 2,
    "definition": "Insurance underwriters review and evaluate insurance applications to determine insurance risks, insurance premiums and extent of insurance coverage according to company policies. They are employed at head and branch offices of insurance companies."
  },
  {
    "title": "Assessors, business valuators and appraisers",
    "code": "12203",
    "teer": 2,
    "definition": "Assessors and appraisers determine the value of land, businesses, estates and other real property, for purposes of sale, purchase, taxation or disposal of assets. Appraisers also determine the value of personal and household items. Business valuators quantify the value of a business, its securities or its intangible assets. Assessors, business valuators and appraisers are employed by government agencies, real estate firms and other private companies, or they may be self-employed."
  },
  {
    "title": "Administrative officers",
    "code": "13100",
    "teer": 3,
    "definition": "Administrative officers oversee and implement administrative procedures, establish work priorities, conduct analyses of administrative operations and coordinate acquisition of administrative services such as office space, supplies and security services. They are employed throughout the public and private sectors. Administrative officers who are supervisors are included in this unit group."
  },
  {
    "title": "Property administrators",
    "code": "13101",
    "teer": 3,
    "definition": "Property administrators perform administrative duties and coordinate activities related to the management and rental of investment property and real estate on behalf of property and strata property owners. They are employed by property, real estate and strata services management companies, property development companies and by government."
  },
  {
    "title": "Payroll administrators",
    "code": "13102",
    "teer": 3,
    "definition": "Payroll administrators collect, verify and process payroll information, determine pay and benefit entitlements for employees, maintain accurate payroll records, and provide payroll information within a department, company or other establishment. They are employed by payroll administration companies and by establishments throughout the public and private sectors."
  },
  {
    "title": "Administrative assistants",
    "code": "13110",
    "teer": 3,
    "definition": "Administrative assistants perform a variety of administrative duties in support of managerial and professional employers. They are employed throughout the public and private sectors."
  },
  {
    "title": "Legal administrative assistants",
    "code": "13111",
    "teer": 3,
    "definition": "Legal administrative assistants perform a variety of secretarial and administrative duties in law offices, legal departments of large firms, real estate companies, land title offices, municipal, provincial and federal courts and government."
  },
  {
    "title": "Medical administrative assistants",
    "code": "13112",
    "teer": 3,
    "definition": "Medical administrative assistants perform a variety of secretarial and administrative duties in doctor's offices, hospitals, medical clinics and other medical settings."
  },
  {
    "title": "Customs, ship and other brokers",
    "code": "13200",
    "teer": 3,
    "definition": "Customs brokers clear goods through customs and to their destination on behalf of importer and exporter clients. Shipbrokers buy and sell cargo space on ships and buy and sell ships, yachts and other watercraft on behalf of clients. This unit group also includes other brokers who negotiate commercial transactions, logistics or other services, not elsewhere classified, between parties on behalf of clients. They are employed by customs, ship or other brokerage establishments or may be self-employed."
  },
  {
    "title": "Production and transportation logistics coordinators",
    "code": "13201",
    "teer": 3,
    "definition": "Production logistics coordinators coordinate and expedite the flow of work within an establishment, prepare work and production schedules and monitor the progress of production and construction projects. Transportation logistics coordinators coordinate and monitor the movement of products and ensure that products are shipped and received on schedule. They are employed by manufacturing and construction companies and other industrial establishments."
  },
  {
    "title": "General office support workers",
    "code": "14100",
    "teer": 4,
    "definition": "General office support workers prepare correspondence, reports, statements and other material, operate office equipment, answer telephones, verify, record and process forms and documents such as contracts and requisitions and perform general clerical duties according to established procedures. They are employed in offices throughout the public and private sectors."
  },
  {
    "title": "Receptionists",
    "code": "14101",
    "teer": 4,
    "definition": "Receptionists greet people arriving at offices, hospitals and other establishments, direct visitors to appropriate person or service, answer and forward telephone calls, take messages, schedule appointments and perform other clerical duties. They are employed by hospitals, medical and dental offices and other offices throughout the public and private sectors. Telephone operators are included in this group."
  },
  {
    "title": "Personnel clerks",
    "code": "14102",
    "teer": 4,
    "definition": "Personnel clerks assist personnel officers and human resources specialists and compile, maintain and process information relating to staffing, recruitment, training, labour relations, performance evaluations and classifications. They are employed in personnel departments throughout the private and public sectors."
  },
  {
    "title": "Court clerks and related court services occupations",
    "code": "14103",
    "teer": 4,
    "definition": "Court clerks and workers in related court services occupations perform administrative, security, and other support functions for courts of law such as scheduling trials, processing service fees, calling court to order, preparing court dockets and maintaining exhibits, recording trial proceedings and maintaining court records. They also facilitate court security and public safety, liaise with law enforcement organizations, and provide support to the judiciary. They are employed by federal, provincial, territorial and municipal courts and by police forces."
  },
  {
    "title": "Survey interviewers and statistical clerks",
    "code": "14110",
    "teer": 4,
    "definition": "Survey interviewers contact individuals to gather information for market research, public opinion polls or election and census enumeration. Statistical clerks code and compile interview and other data into reports, lists, directories and other documents. They are employed by market research and polling firms, government departments and agencies, utility companies, contact centres and other establishments. This unit group also includes clerks who observe and record information on traffic flow."
  },
  {
    "title": "Data entry clerks",
    "code": "14111",
    "teer": 4,
    "definition": "Data entry clerks input coded, statistical, financial and other information into computerized databases, spreadsheets or other templates using a keyboard, mouse, or optical scanner, speech recognition software or other data entry tools. They are employed in the private and public sectors."
  },
  {
    "title": "Desktop publishing operators and related occupations",
    "code": "14112",
    "teer": 4,
    "definition": "Desktop publishing operators and workers in related occupations use computers to enter copy into a typesetting system or operate typesetting output equipment to produce text that is ready to print. They are employed by firms that specialize in typesetting, commercial printing companies, publishing and printing companies and various establishments in the public and private sectors that have in-house printing departments."
  },
  {
    "title": "Accounting and related clerks",
    "code": "14200",
    "teer": 4,
    "definition": "Accounting and related clerks calculate, prepare and process bills, invoices, accounts payable and receivable, budgets and other financial records according to established procedures. They are employed throughout the private and public sectors."
  },
  {
    "title": "Banking, insurance and other financial clerks",
    "code": "14201",
    "teer": 4,
    "definition": "Banking, insurance and other financial clerks compile, process and maintain banking, insurance and other financial information. They are employed by banks, credit companies, private and public insurance establishments, investment firms and other financial establishments throughout the private and public sectors."
  },
  {
    "title": "Collection clerks",
    "code": "14202",
    "teer": 4,
    "definition": "Collection clerks collect payments on overdue accounts and bad cheques and locate debtors to make collection arrangements. They are employed by collection agencies, utility companies, department stores, loan companies, banks and credit unions, and by financial and licensing departments within governments."
  },
  {
    "title": "Library assistants and clerks",
    "code": "14300",
    "teer": 4,
    "definition": "Library assistants and clerks issue and receive library materials, sort and shelve books and provide general library information to users. They also perform clerical functions. Library clerks are employed by libraries or other establishments with library services."
  },
  {
    "title": "Correspondence, publication and regulatory clerks",
    "code": "14301",
    "teer": 4,
    "definition": "Correspondence, publication and regulatory clerks write correspondence, proofread material for accuracy, compile material for publication, verify, record and process forms and documents, such as applications, licences, permits, contracts, registrations and requisitions, and perform other related clerical duties in accordance with established procedures, guidelines and schedules. They are employed by newspapers, periodicals, publishing firms and by establishments throughout the private and public sectors."
  },
  {
    "title": "Shippers and receivers",
    "code": "14400",
    "teer": 4,
    "definition": "Shippers and receivers ship, receive and record the movement of parts, supplies, materials, equipment and stock to and from an establishment. They are employed in the public sector and by retail and wholesale establishments, manufacturing companies, and other commercial and industrial establishments."
  },
  {
    "title": "Storekeepers and partspersons",
    "code": "14401",
    "teer": 4,
    "definition": "Storekeepers and partspersons sort, store and issue parts and supplies for use by the establishment in which they work and for sale to the public. They are employed by manufacturing companies, warehouses, retail and wholesale establishments, mining, forestry and construction companies, repair shops, hospitals and other establishments. Apprentices are also included in this unit group."
  },
  {
    "title": "Production logistics workers",
    "code": "14402",
    "teer": 4,
    "definition": "Production logistics workers expedite the flow of work and materials within an establishment and prepare merchandise ready for shipment. They are employed by manufacturing and construction companies, printing and publishing companies and other industrial establishments."
  },
  {
    "title": "Purchasing and inventory control workers",
    "code": "14403",
    "teer": 4,
    "definition": "Purchasing and inventory control workers process purchasing transactions and maintain inventories of materials, equipment and stock. They are employed by retail and wholesale establishments, manufacturing companies, government agencies and other establishments."
  },
  {
    "title": "Dispatchers",
    "code": "14404",
    "teer": 4,
    "definition": "Dispatchers operate radios and other telecommunication equipment to dispatch emergency vehicles and to coordinate the activities of drivers and other personnel. They are employed by police, fire and health departments, other emergency service agencies, taxi, delivery and courier services, trucking and utilities companies, and other commercial and industrial establishments."
  },
  {
    "title": "Transportation route and crew schedulers",
    "code": "14405",
    "teer": 4,
    "definition": "Transportation route and crew schedulers prepare operational and crew schedules for transportation equipment and operating personnel. They are employed by municipal transit commissions, truck, delivery and courier companies, railways, airlines and by other transportation establishments in both the private and public sectors."
  },
  {
    "title": "Engineering managers",
    "code": "20010",
    "teer": 0,
    "definition": "Engineering managers plan, organize, direct, control and evaluate the activities of an engineering department, service or firm. They are employed by a wide range of private sector and government establishments and by consulting engineering and scientific research companies."
  },
  {
    "title": "Architecture and science managers",
    "code": "20011",
    "teer": 0,
    "definition": "Architecture and science managers plan, organize, direct, control and evaluate the activities of an architecture, landscape architecture, scientific or statistical department, service or firm. They are employed by a wide range of private sector and government establishments as well as by architectural firms and scientific research companies."
  },
  {
    "title": "Computer and information systems managers",
    "code": "20012",
    "teer": 0,
    "definition": "Computer and information systems managers plan, organize, direct, control and evaluate the activities of organizations that analyze, design, develop, implement, operate and administer computer and telecommunications software, networks and information systems. They are employed throughout the public and private sectors."
  },
  {
    "title": "Physicists and astronomers",
    "code": "21100",
    "teer": 1,
    "definition": "Physicists conduct theoretical and applied research to extend knowledge of natural phenomena and to develop new processes and devices in fields such as electronics, communications, power generation and distribution, aerodynamics, optics and lasers, remote sensing, biotechnology, medicine and health. They are employed by electronic, electrical and aerospace manufacturing companies, telecommunications companies, power utilities, university and government research laboratories, hospitals and by a wide range of other processing, manufacturing, and research and consulting firms. Astronomers conduct observational and theoretical research to extend knowledge of the universe. They are employed by government and universities."
  },
  {
    "title": "Chemists",
    "code": "21101",
    "teer": 1,
    "definition": "Chemists conduct research and analysis in support of industrial operations, product and process development, quality control, environmental control, medical diagnosis and treatment, biotechnology, nanotechnology and other applications. They also conduct theoretical, experimental and applied research into basic chemical and biochemical processes to create or synthesize new products and processes. They are employed in research, development and quality control laboratories; chemical, petrochemical and pharmaceutical industries; mineral, metal and pulp and paper industries; and a wide variety of manufacturing, utility, health, educational and government establishments."
  },
  {
    "title": "Geoscientists and oceanographers",
    "code": "21102",
    "teer": 1,
    "definition": "Geoscientists include geologists, geochemists and geophysicists who conduct programs of exploration and research to extend knowledge of the structure, composition and processes of the earth, to locate, identify and extract hydrocarbon, mineral and groundwater resources and to assess and mitigate the effects of development and waste disposal projects on the environment. Oceanographers conduct programs of exploration and research on ocean processes and phenomena, biological, chemical and physical characteristics of oceans, interactions with atmospheric and geological environments and impacts of human activity on oceans and marine ecosystems. Geoscientists are employed by petroleum and mining companies, consulting geology, geophysics and engineering firms and by governments and educational institutions, or they may be self-employed. Oceanographers are employed by governments, educational institutions and private companies engaged in exploration of seafloor deposits and seafarming areas, or they may be self-employed."
  },
  {
    "title": "Meteorologists and climatologists",
    "code": "21103",
    "teer": 1,
    "definition": "Meteorologists and climatologists analyze and forecast weather, provide consultation on atmospheric phenomena and conduct research into the processes and phenomena of weather, climate and atmosphere. They are employed by all levels of government, natural resources and utility companies, the media and private consulting firms, or they may be self-employed."
  },
  {
    "title": "Other professional occupations in physical sciences",
    "code": "21109",
    "teer": 1,
    "definition": "Professionals in other physical sciences occupations conduct theoretical and applied research in fields of physical science. Metallurgists, soil scientists and physical scientists and researchers are included in this unit group. They are employed by governments, educational institutions and a wide range of industrial establishments."
  },
  {
    "title": "Biologists and related scientists",
    "code": "21110",
    "teer": 1,
    "definition": "Biologists and related scientists conduct basic and applied research to extend knowledge of living organisms, to manage natural resources, and to develop new practices and products related to medicine and agriculture. They are employed in both laboratory and field settings by governments, environmental consulting companies, resource and utilities companies, chemical, pharmaceutical, biotechnical companies, hospitals and health, research and educational institutions."
  },
  {
    "title": "Forestry professionals",
    "code": "21111",
    "teer": 1,
    "definition": "Forestry professionals conduct research, develop plans and administer and direct programs related to the management and harvesting of forest resources. They are employed by the forest industry, provincial and federal governments, consulting companies, educational institutions and other industries, or they may be self-employed."
  },
  {
    "title": "Agricultural representatives, consultants and specialists",
    "code": "21112",
    "teer": 1,
    "definition": "Agricultural representatives, consultants and specialists provide assistance and advice to farmers on all aspects of farm management, cultivation, fertilization, harvesting, soil erosion and composition, disease prevention, nutrition, crop rotation and marketing. They are employed by businesses, institutions and governments that assist the farming community, or they may be self-employed."
  },
  {
    "title": "Public and environmental health and safety professionals",
    "code": "21120",
    "teer": 1,
    "definition": "Public and environmental health and safety professionals review, evaluate and monitor public health and environmental safety hazards and develop strategies to prevent, control and eliminate disease and environmental impact caused by biological and chemical factors. They inspect restaurants, industrial establishments, municipal water systems, public facilities and institutions to ensure compliance with government regulations regarding sanitation, pollution control and the handling and storage of hazardous substances. They are employed throughout the public and private sectors."
  },
  {
    "title": "Architects",
    "code": "21200",
    "teer": 1,
    "definition": "Architects conceptualize, plan and develop designs for the construction and renovation of commercial, institutional and residential buildings. They are employed by architectural firms, private corporations and governments, or they may be self-employed."
  },
  {
    "title": "Landscape architects",
    "code": "21201",
    "teer": 1,
    "definition": "Landscape architects conceptualize, design, plan and manage the construction of natural, cultural and built landscape development for commercial projects, office complexes, parks, golf courses and residential development. They are employed by government environmental and development agencies, landscape consulting firms and by architectural and engineering firms, or they are self-employed."
  },
  {
    "title": "Urban and land use planners",
    "code": "21202",
    "teer": 1,
    "definition": "Urban and land use planners develop plans and recommend policies for managing land use, physical facilities and associated services for urban and rural areas and remote regions. They are employed by all levels of government, land developers, engineering and other consulting companies, or may work as private consultants."
  },
  {
    "title": "Land surveyors",
    "code": "21203",
    "teer": 1,
    "definition": "Land surveyors plan, direct and conduct legal surveys to establish the location of real property boundaries, contours and other natural or human-made features, and prepare and maintain cross-sectional drawings, official plans, records and documents pertaining to these surveys. They are employed by federal, provincial and municipal governments, private sector land surveying establishments, real estate development, natural resource, engineering and construction firms, or they may be self-employed."
  },
  {
    "title": "Mathematicians, statisticians and actuaries",
    "code": "21210",
    "teer": 1,
    "definition": "Mathematicians and statisticians research mathematical or statistical theories, and develop and apply mathematical or statistical techniques for solving problems in such fields as science, engineering, business and social science. Actuaries apply mathematics, statistics, probability and risk theory to assess potential financial impacts of future events. Mathematicians, statisticians and actuaries are employed by universities, governments, bank and trust companies, insurance companies, pension benefit consulting firms, professional associations, and science and engineering consulting firms."
  },
  {
    "title": "Data scientists",
    "code": "21211",
    "teer": 1,
    "definition": "Data scientists use advanced analytics technologies, including machine learning and predictive modelling, to support the identification of trends, scrape information from unstructured data sources and provide automated recommendations. They are employed by consulting firms, universities, banks and information technology departments in the public and private sectors."
  },
  {
    "title": "Cybersecurity specialists",
    "code": "21220",
    "teer": 1,
    "definition": "Cybersecurity specialists develop, plan, recommend, implement, improve and monitor security measures to protect an organization's computer networks, connected devices and information to prevent unauthorized access, use, disclosure, disruption, modification, or destruction of the information or of the systems on which the information resides. They are employed in information technology consulting firms and in information technology units throughout the public and private sectors."
  },
  {
    "title": "Business systems specialists",
    "code": "21221",
    "teer": 1,
    "definition": "Business systems specialists perform detailed system tests, produce reports and develop new system architectures. They must also identify the strategic objectives of a company and translate these objectives into achievable tasks for an organization's information technology department. They are employed in information technology consulting firms and in information technology units throughout the public and private sectors."
  },
  {
    "title": "Information systems specialists",
    "code": "21222",
    "teer": 1,
    "definition": "Information systems specialists analyze, test and assess systems requirements, develop and implement information systems development plans, policies and procedures, and provide advice on a wide range of information systems issues. They are employed in information technology consulting firms and in information technology units throughout the public and private sectors, or they may be self-employed."
  },
  {
    "title": "Database analysts and data administrators",
    "code": "21223",
    "teer": 1,
    "definition": "Database analysts design, develop and administer data management solutions. Data administrators develop and implement data administration policy, standards and models. They are employed in information technology consulting firms and in information technology units throughout the public and private sectors."
  },
  {
    "title": "Computer systems developers and programmers",
    "code": "21230",
    "teer": 1,
    "definition": "Computer systems developers and programmers write, modify, integrate and test computer code for software applications, data processing applications, operating systems-level software and communications software. They are employed in computer software development firms, information technology consulting firms, and in information technology units throughout the public and private sectors."
  },
  {
    "title": "Software engineers and designers",
    "code": "21231",
    "teer": 1,
    "definition": "Software engineers and designers research, design, evaluate, integrate and maintain software applications, technical environments, operating systems, embedded software, information warehouses and telecommunications software. They are employed in information technology consulting firms, information technology research and development firms, and information technology units throughout the private and public sectors, or they may be self-employed."
  },
  {
    "title": "Software developers and programmers",
    "code": "21232",
    "teer": 1,
    "definition": "Software developers and programmers design, write, and test code for new systems and software to ensure efficiency. They create the foundations for operative systems and run diagnostic programs to certify effectiveness. They are employed in computer software, computer and video game development firms, information technology consulting firms, and in information technology units throughout the public and private sectors."
  },
  {
    "title": "Web designers",
    "code": "21233",
    "teer": 1,
    "definition": "Web designers develop and create the visual presentation, layout and functionality of websites and related applications. They are responsible for ensuring that the website is easy to use, and that the information is easy to access. Web designers are employed in computer software development firms, information technology consulting firms, information technology units throughout the public and private sectors, advertising agencies or they may be self-employed."
  },
  {
    "title": "Web developers and programmers",
    "code": "21234",
    "teer": 1,
    "definition": "Web developers and programmers use a variety of programming languages to design, create and modify websites. They analyze users' needs to implement content, graphics, performance, and website capacity. They may also integrate websites with other computer applications. They are employed in computer software development firms, information technology consulting firms, information technology units throughout the public and private sectors, advertising agencies or they may be self-employed."
  },
  {
    "title": "Civil engineers",
    "code": "21300",
    "teer": 1,
    "definition": "Civil engineers plan, design, develop and manage projects for the construction or repair of buildings, earth structures, powerhouses, roads, airports, railways, rapid transit facilities, bridges, tunnels, canals, dams, ports and coastal installations and systems related to highway and transportation services, water distribution and sanitation. Civil engineers may also specialize in foundation analysis, building and structural inspection, surveying, geomatics and municipal planning. They are employed by engineering consulting companies, in all levels of government, by construction firms and in many other industries, or they may be self-employed."
  },
  {
    "title": "Mechanical engineers",
    "code": "21301",
    "teer": 1,
    "definition": "Mechanical engineers research, design and develop machinery and systems for heating, ventilating and air conditioning, power generation, transportation, processing and manufacturing. They also perform duties related to the evaluation, installation, operation and maintenance of mechanical systems. They are employed by consulting firms, by power-generating utilities and in a wide range of manufacturing, processing and transportation industries, or they may be self-employed."
  },
  {
    "title": "Electrical and electronics engineers",
    "code": "21310",
    "teer": 1,
    "definition": "Electrical and electronics engineers design, plan, research, evaluate and test electrical and electronic equipment and systems. They are employed by electrical utilities, communications companies, manufacturers of electrical and electronic equipment, consulting firms, and by a wide range of manufacturing, processing and transportation industries and government."
  },
  {
    "title": "Computer engineers (except software engineers and designers)",
    "code": "21311",
    "teer": 1,
    "definition": "Computer engineers (except software engineers and designers) research, plan, design, develop, modify, evaluate and integrate computer and telecommunications hardware and related equipment, and information and communication system networks including mainframe systems, local and wide area networks, fibre-optic networks, wireless communication networks, intranets, the Internet and other data communications systems. They are employed by computer and telecommunication hardware manufacturers, by engineering, manufacturing and telecommunications firms, in information technology consulting firms, by governmental, educational and research institutions and in information technology units throughout the private and public sectors."
  },
  {
    "title": "Chemical engineers",
    "code": "21320",
    "teer": 1,
    "definition": "Chemical engineers research, design, and develop chemical processes and equipment, oversee the operation and maintenance of industrial chemical, plastics, pharmaceutical, resource, pulp and paper, and food processing plants and perform duties related to chemical quality control, environmental protection and biochemical or biotechnical engineering. They are employed in a wide range of manufacturing and processing industries, consulting firms, government, research and educational institutions."
  },
  {
    "title": "Industrial and manufacturing engineers",
    "code": "21321",
    "teer": 1,
    "definition": "Industrial and manufacturing engineers conduct studies, and develop and supervise programs to achieve the best use of equipment, human resources, technology, materials and procedures to enhance efficiency and productivity. They are employed in consulting firms, manufacturing and processing companies, in government, financial, health care and other institutions, or they may be self-employed."
  },
  {
    "title": "Metallurgical and materials engineers",
    "code": "21322",
    "teer": 1,
    "definition": "Metallurgical and materials engineers conduct studies of the properties and characteristics of metals and other non-metallic materials and plan, design and develop machinery and processes to concentrate, extract, refine and process metals, alloys and other materials such as ceramics, semiconductors and composite materials. They are employed in consulting engineering firms, mining, metal processing and manufacturing companies, and in government, research and educational institutions."
  },
  {
    "title": "Mining engineers",
    "code": "21330",
    "teer": 1,
    "definition": "Mining engineers plan, design, organize and supervise the development of mines, mine facilities, systems and equipment; and prepare and supervise the extraction of metallic or non-metallic minerals and ores from underground or surface mines. They are employed by mining companies, consulting engineering companies, manufacturers, government and in educational and research institutions."
  },
  {
    "title": "Geological engineers",
    "code": "21331",
    "teer": 1,
    "definition": "Geological engineers conduct geological and geotechnical studies to assess suitability of locations for civil engineering, mining and oil and gas projects; and plan, design, develop and supervise programs of geological data acquisition and analysis and the preparation of geological engineering reports and recommendations. They are employed in consulting engineering companies, electrical utilities, mining and petroleum companies and in government and research and educational institutions."
  },
  {
    "title": "Petroleum engineers",
    "code": "21332",
    "teer": 1,
    "definition": "Petroleum engineers conduct studies for the exploration, development and extraction of oil and gas deposits; and plan, design, develop and supervise projects for the drilling, completion, testing and re-working of oil and gas wells. They are employed by petroleum producing companies, consulting companies, well logging or testing companies, government, and research and educational institutions."
  },
  {
    "title": "Aerospace engineers",
    "code": "21390",
    "teer": 1,
    "definition": "Aerospace engineers research, design and develop aerospace vehicles, aerospace systems and their components, and perform duties related to their testing, evaluation, installation, operation and maintenance. They are employed by aircraft and spacecraft manufacturers, air transport carriers, and in government and educational and research institutions."
  },
  {
    "title": "Other professional engineers",
    "code": "21399",
    "teer": 1,
    "definition": "Other professional engineers include agricultural and bioresource engineers, biomedical engineers, engineering physicists and engineering scientists, marine and naval engineers, textile engineers and other specialized engineering occupations."
  },
  {
    "title": "Chemical technologists and technicians",
    "code": "22100",
    "teer": 2,
    "definition": "Chemical technologists and technicians provide technical support and services or may work independently in chemical engineering, chemical and biochemical research and analysis, industrial chemistry, chemical quality control and environmental protection. They are employed by research and development and quality control laboratories, consulting engineering companies, in chemical, petrochemical, pharmaceutical and a variety of other manufacturing and processing industries, and by utilities, health, educational and government establishments."
  },
  {
    "title": "Geological and mineral technologists and technicians",
    "code": "22101",
    "teer": 2,
    "definition": "Geological and mineral technologists and technicians provide technical support and services or may work independently in the fields of oil and gas exploration and production, geophysics, petroleum engineering, geology, mining and mining engineering, mineralogy, extractive and physical metallurgy, metallurgical engineering and environmental protection. They are employed by petroleum and mining companies, consulting geology and engineering firms, and by governments and educational institutions as well as by a variety of manufacturing, construction and utilities companies."
  },
  {
    "title": "Biological technologists and technicians",
    "code": "22110",
    "teer": 2,
    "definition": "Biological technologists and technicians provide technical support and services to scientists, engineers and other professionals working in fields such as agriculture, resource management, environmental protection, plant and animal biology, microbiology, cell and molecular biology and health sciences, or may work independently in these fields. They are employed in both laboratory and field settings by governments, manufacturers of food products, chemicals and pharmaceuticals, biotechnology companies, health, research and educational institutions, environmental consulting companies, and resource and utilities companies."
  },
  {
    "title": "Agricultural and fish products inspectors",
    "code": "22111",
    "teer": 2,
    "definition": "Agricultural and fish products inspectors inspect agricultural and fish products for conformity to prescribed production, storage and transportation standards. They are employed by government departments and agencies and by private sector food processing companies. Supervisors of agricultural and fish products inspectors are also included in this unit group."
  },
  {
    "title": "Forestry technologists and technicians",
    "code": "22112",
    "teer": 2,
    "definition": "Forestry technologists and technicians may work independently or perform technical and supervisory functions in support of forestry research, forest management, forest harvesting, forest resource conservation and environmental protection. They are employed by the forest industry sector, provincial and federal governments, consulting firms, and other industries and institutions, or they may be self-employed."
  },
  {
    "title": "Conservation and fishery officers",
    "code": "22113",
    "teer": 2,
    "definition": "Conservation and fishery officers, inspectors and observers enforce federal and provincial regulations established for the protection of fish, wildlife and other natural resources and collect and relay information on resource management. They are employed by federal and provincial government departments."
  },
  {
    "title": "Landscape and horticulture technicians and specialists",
    "code": "22114",
    "teer": 2,
    "definition": "Landscape and horticulture technicians and specialists survey and assess landscapes; draw sketches and build models of landscape designs; construct and maintain gardens, parks, golf courses and other landscaped environments; advise clients on issues related to horticulture such as irrigation; breed, cultivate and study plants; and treat injured and diseased trees and plants. They are employed by landscape designers and contractors, lawn service and tree care establishments, golf courses, nurseries and greenhouses, and municipal, provincial and national parks, or they may be self-employed."
  },
  {
    "title": "Architectural technologists and technicians",
    "code": "22210",
    "teer": 2,
    "definition": "Architectural technologists and technicians may work independently or provide technical assistance to professional architects and civil design engineers in conducting research, preparing drawings, architectural models, specifications and contracts and in supervising construction projects. They are employed by architectural and construction firms, and governments."
  },
  {
    "title": "Industrial designers",
    "code": "22211",
    "teer": 2,
    "definition": "Industrial designers conceptualize and produce designs for manufactured products. They are employed by manufacturing industries and private design firms or they may be self-employed."
  },
  {
    "title": "Drafting technologists and technicians",
    "code": "22212",
    "teer": 2,
    "definition": "Drafting technologists and technicians prepare engineering designs, drawings and related technical information, such as building information models (BIM), in multidisciplinary engineering teams or in support of engineers, architects or industrial designers, or they may work independently. They are employed by consulting and construction companies, utility, resource and manufacturing companies, all levels of government and by a wide range of other establishments."
  },
  {
    "title": "Land survey technologists and technicians",
    "code": "22213",
    "teer": 2,
    "definition": "Land survey technologists and technicians conduct or participate in surveys to determine the exact locations and relative positions of natural features and other structures on the earth's surface, underground and underwater. They are employed by all levels of government, architectural and engineering firms, and by private sector surveying establishments."
  },
  {
    "title": "Technical occupations in geomatics and meteorology",
    "code": "22214",
    "teer": 2,
    "definition": "Technical occupations in geomatics include aerial survey, remote sensing, geographic information systems, cartographic and photogrammetric technologists and technicians, who gather, analyze, interpret and use geospatial information for applications in natural resources, geology, environmental research and land use planning. Meteorological technologists and technicians observe weather and atmospheric conditions, record, interpret, transmit and report on meteorological data, and provide weather information to the agricultural, natural resources and transportation industries and the public. Geomatics technologists and technicians are employed by all levels of government, utilities, mapping, computer software, forestry, architectural, engineering and consulting firms and other related establishments. Meteorological technologists and technicians are employed by all levels of government, the media, natural resources, utilities and transportation companies and consulting firms."
  },
  {
    "title": "Computer network and web technicians",
    "code": "22220",
    "teer": 2,
    "definition": "Computer network technicians establish, operate, maintain and coordinate the use of local and wide area networks (LANs and WANs), mainframe networks, hardware, software and related computer equipment. Web technicians set up and maintain internet, extranet and intranet web sites and web server hardware and software, and monitor and optimize network connectivity and performance. They are employed in information technology units throughout the public and private sectors. Computer network technicians who are supervisors are included in this group."
  },
  {
    "title": "User support technicians",
    "code": "22221",
    "teer": 2,
    "definition": "User support technicians provide first-line technical support to computer users experiencing difficulties with computer hardware and with computer applications and communications software. They are employed by computer hardware manufacturers and retailers, software developers, in call centres and in information technology units throughout the public and private sectors. They are also employed by independent technical support companies or they may be self-employed."
  },
  {
    "title": "Information systems testing technicians",
    "code": "22222",
    "teer": 2,
    "definition": "Information systems testing technicians execute test plans to evaluate the performance of software applications and information and telecommunications systems. They are employed in information technology units throughout the private and public sectors."
  },
  {
    "title": "Non-destructive testers and inspectors",
    "code": "22230",
    "teer": 2,
    "definition": "Non-destructive testers and inspectors operate radiographic, ultrasonic, liquid penetrant, magnetic particle, eddy current and similar testing equipment to detect discontinuities in objects of various compositions and materials. They are employed by quality control, maintenance and safety departments of manufacturing, processing, transportation, energy and other companies and by private industrial inspection establishments."
  },
  {
    "title": "Engineering inspectors and regulatory officers",
    "code": "22231",
    "teer": 2,
    "definition": "Engineering inspectors and regulatory officers inspect transportation vehicles such as aircraft, watercraft, automobiles and trucks and weighing and measuring devices such as scales and meters as well as industrial instruments, processes and equipment for conformity to government and industry standards and regulations. They are employed by government agencies and in the private sector."
  },
  {
    "title": "Occupational health and safety specialists",
    "code": "22232",
    "teer": 2,
    "definition": "Occupational health and safety specialists review, evaluate and monitor health and safety hazards and develop strategies to prevent, control and eliminate accidents and occupational injuries. They inspect the workplace environments, equipment and practices to ensure compliance with organization and government environment, health and safety standards and regulations. They are employed throughout the public and private sectors."
  },
  {
    "title": "Construction inspectors",
    "code": "22233",
    "teer": 2,
    "definition": "Construction inspectors inspect the construction and maintenance of new and existing buildings, bridges, highways and industrial construction to ensure that specifications and building codes are observed and monitor work site safety. They are employed by federal, provincial and municipal governments, construction companies, architectural and civil engineering consulting firms or they may be self-employed."
  },
  {
    "title": "Civil engineering technologists and technicians",
    "code": "22300",
    "teer": 2,
    "definition": "Civil engineering technologists and technicians provide technical support and services to scientists, engineers and other professionals, or may work independently in fields such as structural engineering, municipal engineering, construction design and supervision, highways and transportation engineering, water resources engineering, geotechnical engineering and environmental protection. They are employed by consulting engineering and construction companies, public works, transportation and other government departments and in many other industries."
  },
  {
    "title": "Mechanical engineering technologists and technicians",
    "code": "22301",
    "teer": 2,
    "definition": "Mechanical engineering technologists and technicians provide technical support and services or may work independently in mechanical engineering fields such as the design, development, maintenance and testing of machines, components, tools, heating and ventilating systems, geothermal power plants, power generation and power conversion plants, manufacturing plants and equipment. They are employed by consulting engineering, manufacturing and processing companies, institutions and government departments."
  },
  {
    "title": "Industrial engineering and manufacturing technologists and technicians",
    "code": "22302",
    "teer": 2,
    "definition": "Industrial engineering and manufacturing technologists and technicians may work independently or provide technical support and services in the development of production methods, facilities and systems, and the planning, estimating, measuring and scheduling of work. They are employed by manufacturing and insurance companies, government departments, and establishments in other industries."
  },
  {
    "title": "Construction estimators",
    "code": "22303",
    "teer": 2,
    "definition": "Construction estimators analyze costs of and prepare estimates on civil engineering, architectural, structural, electrical and mechanical construction projects. They are employed by residential, commercial and industrial construction companies and major electrical, mechanical and trade contractors, or they may be self-employed."
  },
  {
    "title": "Electrical and electronics engineering technologists and technicians",
    "code": "22310",
    "teer": 2,
    "definition": "Electrical and electronics engineering technologists and technicians may work independently or provide technical support and services in the design, development, testing, production and operation of electrical and electronic equipment and systems. They are employed by electrical utilities, communications companies, manufacturers of electrical and electronic equipment, consulting firms, and in governments and a wide range of manufacturing, processing and transportation industries."
  },
  {
    "title": "Electronic service technicians (household and business equipment)",
    "code": "22311",
    "teer": 2,
    "definition": "Electronic service technicians service and repair household and business electronic equipment such as audio and video systems, computers and peripherals, office equipment and other consumer electronic equipment and assemblies. They are employed by electronic service and retail establishments, by wholesale distributors and within service departments of electronic manufacturing companies. Apprentices are also included in this unit group."
  },
  {
    "title": "Industrial instrument technicians and mechanics",
    "code": "22312",
    "teer": 2,
    "definition": "Industrial instrument technicians and mechanics repair, maintain, calibrate, adjust, and install industrial measuring and controlling instrumentation. They are employed by pulp and paper processing companies, nuclear and hydro power generating companies, mining, petrochemical and natural gas companies, industrial instrument and other manufacturing companies, and by industrial instrument servicing establishments. Apprentices are also included in this unit group."
  },
  {
    "title": "Aircraft instrument, electrical and avionics mechanics, technicians and inspectors",
    "code": "22313",
    "teer": 2,
    "definition": "Aircraft instrument, electrical and avionics mechanics, technicians and inspectors install, adjust, repair and overhaul aircraft instrument, electrical or avionics systems on aircraft. This unit group also includes avionics inspectors who inspect instrument, electrical and avionics systems following assembly, modification, repair or overhaul. They are employed by aircraft manufacturing, maintenance, repair and overhaul establishments and by airlines and other aircraft operators. Apprentices are also included in this unit group."
  },
  {
    "title": "Managers in health care",
    "code": "30010",
    "teer": 0,
    "definition": "Managers in health care plan, organize, direct, control and evaluate the delivery of health care services, such as diagnosis and treatment, nursing and therapy, within institutions, and in other settings, that provide health care services. They are employed in hospitals, medical clinics, nursing homes and other health care organizations."
  },
  {
    "title": "Specialists in clinical and laboratory medicine",
    "code": "31100",
    "teer": 1,
    "definition": "Specialists in clinical and laboratory medicine diagnose and treat diseases and physiological or psychiatric disorders and act as consultants to other physicians. Specialists in laboratory medicine study the nature, cause and development of diseases in humans. Specialists in clinical medicine usually work in private practice or in a hospital while those in laboratory medicine usually work in hospitals. Residents in training to become specialists in clinical and laboratory medicine are included in this unit group."
  },
  {
    "title": "Specialists in surgery",
    "code": "31101",
    "teer": 1,
    "definition": "Specialists in surgery perform and supervise surgical procedures. Specialists in surgery usually work in hospitals. Residents in training to become specialists in surgery are included in this unit group."
  },
  {
    "title": "General practitioners and family physicians",
    "code": "31102",
    "teer": 1,
    "definition": "General practitioners and family physicians diagnose and treat the diseases, physiological disorders and injuries of patients. They provide primary contact and continuous care toward the management of patients' health. They usually work in private practice, including group or team practices, hospitals and clinics. Residents in training to be general practitioners or family physicians are included in this unit group."
  },
  {
    "title": "Veterinarians",
    "code": "31103",
    "teer": 1,
    "definition": "Veterinarians prevent, diagnose and treat diseases and disorders in animals and advise clients on the feeding, hygiene, housing and general care of animals. They can also perform surgical procedures. They work in private practice or may be employed by animal clinics, farms, laboratories, government or industry."
  },
  {
    "title": "Dentists",
    "code": "31110",
    "teer": 1,
    "definition": "Dentists diagnose, treat, prevent and control disorders of the teeth and mouth. They work in private practice or may be employed in hospitals, clinics, public health facilities or universities."
  },
  {
    "title": "Optometrists",
    "code": "31111",
    "teer": 1,
    "definition": "Optometrists examine eyes to assess and diagnose ocular diseases and disorders. They prescribe and fit eyeglasses and contact lenses and recommend treatments such as exercises to correct vision problems or ocular disorders. They work in private practice, hospitals, clinics, community health centres, rehabilitation centres, the optical industry, government and universities."
  },
  {
    "title": "Audiologists and speech-language pathologists",
    "code": "31112",
    "teer": 1,
    "definition": "Audiologists diagnose, evaluate and treat individuals with peripheral and central hearing loss, tinnitus and balance problems. Speech-language pathologists diagnose, assess and treat human communication disorders including speech, fluency, language, voice and swallowing disorders. Audiologists and speech-language pathologists are employed in hospitals, community and public health centres, extended care facilities, day clinics, rehabilitation centres and educational institutions, or may work in private practice. Audiologists and speech-language pathologists who are supervisors are included in this unit group."
  },
  {
    "title": "Pharmacists",
    "code": "31120",
    "teer": 1,
    "definition": "Community pharmacists and hospital pharmacists compound and dispense prescribed pharmaceuticals and provide consultative services to both clients and health care providers. They are employed in retail pharmacies and health center pharmacies, or they may be self-employed. Industrial pharmacists participate in the research, development, promotion and manufacture of pharmaceutical products. They are employed in pharmaceutical companies and government departments and agencies."
  },
  {
    "title": "Dietitians and nutritionists",
    "code": "31121",
    "teer": 1,
    "definition": "Dietitians and nutritionists assess nutrition related issues of individuals and groups and develop, implement and evaluate nutrition care plans to prevent, treat and manage disease. They manage food and nutrition service systems, and plan health promotion programs. They are employed in a variety of settings including hospitals, home health-care agencies and extended care facilities, community health centres, the food, beverage and pharmaceutical industries, educational institutions, and government and sports organizations, or they may work as private consultants."
  },
  {
    "title": "Psychologists",
    "code": "31200",
    "teer": 1,
    "definition": "Psychologists assess and diagnose behavioural, emotional and cognitive disorders, counsel clients, provide therapy, conduct research and apply theory relating to behaviour and mental processes. Psychologists help clients work toward the maintenance and enhancement of psychological, physical, intellectual, emotional, social and interpersonal functioning. They work in private practice or in clinics, correctional facilities, hospitals, mental health facilities, rehabilitation centres, community service organizations, businesses, schools and universities, and in government and private research agencies."
  },
  {
    "title": "Chiropractors",
    "code": "31201",
    "teer": 1,
    "definition": "Chiropractors assess, diagnose, treat and prevent patients' neuromuscular-skeletal disorders of the spine, nervous system, pelvis and other body joints using corrective manipulation including spinal column adjustments, or other complementary therapies. They are usually in private practice or in clinics with other health practitioners."
  },
  {
    "title": "Physiotherapists",
    "code": "31202",
    "teer": 1,
    "definition": "Physiotherapists assess clients and plan and carry out individually designed treatment programs to maintain, improve or restore physical functioning and mobility, alleviate pain and prevent physical dysfunction in clients. They are employed in hospitals, clinics, industry, sports organizations, rehabilitation centres and extended care facilities, or may work in private practice."
  },
  {
    "title": "Occupational therapists",
    "code": "31203",
    "teer": 1,
    "definition": "Occupational therapists develop individual and group programs with people affected by illness, injury, developmental disorders, emotional or psychological problems and aging to maintain, restore or increase their ability to care for themselves and to engage in work, school or leisure. They also develop and implement health promotion programs with individuals, community groups and employers. They are employed in health care facilities, in schools, and by private and social services agencies, or they may be self-employed."
  },
  {
    "title": "Kinesiologists and other professional occupations in therapy and assessment",
    "code": "31204",
    "teer": 1,
    "definition": "Kinesiologists and other professional occupations in therapy and assessment include specialized therapists who use techniques such as athletic or recreational therapy to aid in the treatment of mental and physical disabilities or injuries. They are employed by establishments such as hospitals, rehabilitation centres, extended health care facilities, clinics, recreational centres, nursing homes, industry, educational institutions and sports organizations, or they may work in private practice."
  },
  {
    "title": "Other professional occupations in health diagnosing and treating",
    "code": "31209",
    "teer": 1,
    "definition": "Other professional occupations in health diagnosing and treating, who are not elsewhere classified, diagnose and treat the diseases and injuries of patients. This unit group includes doctors of podiatric medicine, naturopathic medicine and osteopathic medicine, and also includes chiropodists and podiatrists. They work in private practices, clinics and hospitals."
  },
  {
    "title": "Nursing coordinators and supervisors",
    "code": "31300",
    "teer": 1,
    "definition": "Nursing coordinators and supervisors coordinate and supervise the activities of registered nurses, registered psychiatric nurses, licensed practical nurses and other nursing personnel in the provision of patient care. They are employed in health care institutions such as hospitals, clinics and nursing homes, and in nursing agencies."
  },
  {
    "title": "Registered nurses and registered psychiatric nurses",
    "code": "31301",
    "teer": 1,
    "definition": "Registered nurses and registered psychiatric nurses provide direct nursing care to patients, deliver health education programs and provide consultative services regarding issues relevant to the practice of nursing. They are employed in a variety of settings including hospitals, nursing homes, extended care facilities, rehabilitation centres, doctors' offices, clinics, community agencies, companies, private homes and public and private organizations or they may be self-employed."
  },
  {
    "title": "Nurse practitioners",
    "code": "31302",
    "teer": 1,
    "definition": "Nurse practitioners are registered nurses with additional education, advanced knowledge and nursing experience, and a specialty of practice. They provide a range of health services to patients and deliver preventive and continuous care toward the management of patients' health. Nurse practitioners work in conjunction with physicians and collaboratively with other nursing colleagues and health-care providers, or they may work independently. They are employed in community health centres, hospitals, clinics, long-term care facilities, and rehabilitation centres. Nurse practitioners may specialize in primary healthcare or acute care."
  },
  {
    "title": "Physician assistants, midwives and allied health professionals",
    "code": "31303",
    "teer": 1,
    "definition": "Physician assistants and midwives provide primary health care and treatment in conjunction with physicians and in collaboration with other health professionals. Physician assistants provide a range of health services to patients delivering preventive and continuous care toward the management of patients' health. Midwives provide full-course care to women and their babies during the pre- and post-natal period. This unit group also includes professionals such as genetic counsellors, orthoptists and pathologists' assistants, who work in collaboration with primary health occupations. Genetic counsellors assess individual or family risk of genetic conditions, and provide information to individuals, families and healthcare providers to promote informed choice. Orthoptists diagnose and treat binocular disorders. Pathologists' assistants assist at autopsies and examinations of surgical specimens, or perform autopsies under a pathologist's supervision. Physician assistants usually work under physicians in private practice, including group or team practices, hospitals and clinics. Midwives are employed in hospitals, clinics, birthing centres or in private practice. Genetic counsellors usually work in private practice, hospitals, clinics and research institutes. Orthoptists work under an ophthalmologist, particularly in private practices or clinics. Pathologists' assistants are usually employed in hospitals and universities."
  },
  {
    "title": "Opticians",
    "code": "32100",
    "teer": 2,
    "definition": "Opticians assist clients in the selection of eyeglass frames, take the necessary measurements and arrange for the production of eyeglasses or contact lenses, mount lenses in eyeglass frames and fit clients with final prescription eyeglasses and contact lenses. They are employed in optical retail outlets or other establishments with optical dispensing departments, or they may be self-employed. Student opticians and opticians who are managers of optical retail outlets are included in this unit group."
  },
  {
    "title": "Licensed practical nurses",
    "code": "32101",
    "teer": 2,
    "definition": "Licensed practical nurses provide nursing care usually under the direction of medical practitioners, registered nurses or other health team members. Operating room technicians prepare patients and provide assistance to medical practitioners prior to and during surgery. Licensed practical nurses are employed in hospitals, nursing homes, extended care facilities, rehabilitation centres, doctors' offices, clinics, companies, private homes and community health centres. Operating room technicians are employed in hospitals."
  },
  {
    "title": "Paramedical occupations",
    "code": "32102",
    "teer": 2,
    "definition": "Workers in paramedical occupations administer pre-hospital emergency medical care to patients with injuries or medical illnesses and transport them to hospitals or other medical facilities for further medical care. They are employed by private ambulance services, hospitals, fire departments, government departments and agencies, manufacturing firms, mining companies and other private sector establishments. Paramedics who are supervisors are included in this unit group."
  },
  {
    "title": "Respiratory therapists, clinical perfusionists and cardiopulmonary technologists",
    "code": "32103",
    "teer": 2,
    "definition": "Respiratory therapists assist physicians in the evaluation, diagnosis, treatment and care of patients with respiratory and cardiopulmonary disorders. Clinical perfusionists provide technical support to patients undergoing cardiac surgery and patients requiring cardio-respiratory support. Cardiopulmonary technologists assist physicians in the technical aspects of diagnosis and treatment of cardiovascular and pulmonary disease. Respiratory therapists are employed in hospitals, extended care facilities, public health centres, sleep, private or dental clinics and respiratory home care companies. Clinical perfusionists and cardiopulmonary technologists are primarily employed in hospitals. Respiratory therapists, clinical perfusionists and cardiopulmonary technologists who are supervisors or instructors are included in this unit group."
  },
  {
    "title": "Animal health technologists and veterinary technicians",
    "code": "32104",
    "teer": 2,
    "definition": "Animal health technologists and veterinary technicians provide technical support to veterinarians by caring for animals and assisting in the diagnosis and treatment of animal health disorders. They are employed in veterinary clinics, animal hospitals, animal shelters, humane societies, zoos, animal research laboratories, pharmaceutical companies and government. Animal health technologists and veterinary technicians who are supervisors are included in this unit group."
  },
  {
    "title": "Other technical occupations in therapy and assessment",
    "code": "32109",
    "teer": 2,
    "definition": "Other technical workers in therapy and assessment perform various technical therapy and assessment functions. Some may assist professionals such as audiologists, speech-language pathologists, ophthalmologists, physiotherapists and occupational therapists. They are employed in hospitals, clinics, extended care facilities, rehabilitation centres, community health centres, educational institutions, hearing aid retail stores, in the private practices of the professionals they assist, or they may be self-employed."
  },
  {
    "title": "Denturists",
    "code": "32110",
    "teer": 2,
    "definition": "Denturists examine patients and design, construct and repair removable dentures. Most denturists work in private practice. Apprentices are also included in this unit group."
  },
  {
    "title": "Dental hygienists and dental therapists",
    "code": "32111",
    "teer": 2,
    "definition": "Dental hygienists provide dental hygiene treatment and services related to oral health promotion and disease and mouth injury prevention. They are employed in a variety of settings including dentists' offices, hospitals, private clinics, educational institutions, public health agencies or they may be self-employed. Dental therapists provide limited restorative dental treatment in addition to dental hygiene services. They are employed by the federal government and the provincial governments to provide services in rural and remote communities."
  },
  {
    "title": "Dental technologists and technicians",
    "code": "32112",
    "teer": 2,
    "definition": "Dental technologists and technicians design, prepare and fabricate dentures and dental devices as prescribed by dentists and other specialists. They are employed in dental laboratories. Dental technologists and technicians who are supervisors are included in this unit group."
  },
  {
    "title": "Medical laboratory technologists",
    "code": "32120",
    "teer": 2,
    "definition": "Medical laboratory technologists conduct medical laboratory tests, experiments and analyses to assist in the diagnosis, treatment, monitoring and prevention of disease. They are employed in medical laboratories in hospitals, blood banks, community and private clinics, research facilities and post-secondary educational institutions. Medical laboratory technologists who are supervisors are included in this unit group."
  },
  {
    "title": "Medical radiation technologists",
    "code": "32121",
    "teer": 2,
    "definition": "Medical radiation technologists operate radiographic and radiation therapy equipment to administer radiation treatment and produce images of body structures for the diagnosis and treatment of injury and disease. They are employed in hospitals, cancer treatment centres, clinics, radiological laboratories, colleges and universities. Medical radiation technologists who are supervisors or instructors are included in this unit group."
  },
  {
    "title": "Medical sonographers",
    "code": "32122",
    "teer": 2,
    "definition": "Medical sonographers operate ultrasound equipment to produce and record images of various parts of the body to aid physicians in monitoring pregnancies and in diagnosing cardiac, ophthalmic, vascular and other medical disorders. They are employed in clinics and hospitals. Medical sonographers who are supervisors or instructors are included in this unit group."
  },
  {
    "title": "Cardiology technologists and electrophysiological diagnostic technologists",
    "code": "32123",
    "teer": 2,
    "definition": "Cardiology technologists operate electrocardiogram equipment and use medical imaging technologies to record cardiac activity of patients to aid in the diagnosis, monitoring and treatment of heart disease. Electrophysiological diagnostic technologists operate electroencephalographic, electromyographic and other electrophysiological diagnostic equipment to assist physicians in diagnosing diseases, injuries and abnormalities. Cardiology technologists and electrophysiological diagnostic technologists who are supervisors or instructors are included in this unit group. They are employed in clinics, hospitals and medical laboratories."
  },
  {
    "title": "Pharmacy technicians",
    "code": "32124",
    "teer": 2,
    "definition": "Pharmacy technicians perform technical functions relating to prescriptions including gathering patients' information, product preparation, product distribution and inventory control. They work closely with pharmacists to provide pharmaceutical care to clients. Pharmacy technicians are employed in retail and hospital pharmacies, long-term care facilities and by pharmaceutical manufacturers. Pharmacy technicians who are supervisors are included in this unit group."
  },
  {
    "title": "Other medical technologists and technicians",
    "code": "32129",
    "teer": 2,
    "definition": "Other medical technologists and technicians includes medical technologists and technicians, such as dietary technicians, ocularists, prosthetists, orthotists, prosthetic technicians and orthotic technicians. Dietary technicians are employed in health care and commercial food service establishments such as hospitals, extended care facilities, nursing homes, schools, cafeterias and fast food outlets. Ocularists are employed in custom ocular prosthetic laboratories, or they may be self-employed. Prosthetists, orthotists and prosthetic and orthotic technicians are employed in hospitals, clinics, prosthetics and orthotics laboratories, and prosthetic device manufacturing companies. Prosthetists and orthotists may also be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Traditional Chinese medicine practitioners and acupuncturists",
    "code": "32200",
    "teer": 2,
    "definition": "Traditional Chinese medicine practitioners and acupuncturists assess, treat and prevent diseases, conditions, disorders or imbalances of patients' using various forms of treatment including acupuncture, herbology or other holistic health approaches. They usually work in private practice, including group or team practices, clinics, extended care facilities, rehabilitation centres and health clubs."
  },
  {
    "title": "Massage therapists",
    "code": "32201",
    "teer": 2,
    "definition": "Massage therapists assess soft tissues and joints of the body for treatment and prevention of dysfunction, injury, pain and physical disorders. They work in private practice, including group or team practices, hospitals, clinics, extended care facilities, rehabilitation centres and educational institutions."
  },
  {
    "title": "Other practitioners of natural healing",
    "code": "32209",
    "teer": 2,
    "definition": "Practitioners of natural healing provide health care to patients using various forms of treatment including herbology, reflexology or relaxation techniques to promote, maintain and restore the holistic health of patients. They usually work in private practice, including group or team practices, or are employed by clinics, health clubs and spas."
  },
  {
    "title": "Dental assistants and dental laboratory assistants",
    "code": "33100",
    "teer": 3,
    "definition": "Dental assistants assist dentists, dental hygienists and dental therapists during the examination and treatment of patients and perform clerical functions. Dental laboratory assistants assist dental technologists and technicians in preparing and fabricating dentures and other dental devices. Dental assistants work in dentists' offices, community health centres, clinics and in educational institutions. Dental laboratory assistants are employed in dental laboratories."
  },
  {
    "title": "Medical laboratory assistants and related technical occupations",
    "code": "33101",
    "teer": 3,
    "definition": "Medical laboratory assistants and workers in related technical occupations perform pre-analysis and pre-testing tasks such as collecting blood and other samples, processing specimens, and preparing special chemicals called reagents for use in testing. They conduct routine medical laboratory tests and set up, clean and maintain medical laboratory equipment. They are employed in medical laboratories in hospitals, clinics, research facilities, post-secondary educational institutions and government research laboratories."
  },
  {
    "title": "Nurse aides, orderlies and patient service associates",
    "code": "33102",
    "teer": 3,
    "definition": "Nurse aides, orderlies and patient service associates assist nurses, hospital staff and physicians in the basic care of patients. They are employed in hospitals, nursing homes, assisted care facilities for the elderly and other health care establishments. Emergency medical care attendant are employed by private ambulance services, urgent care centers or other health facilities."
  },
  {
    "title": "Pharmacy technical assistants and pharmacy assistants",
    "code": "33103",
    "teer": 3,
    "definition": "Pharmacy technical assistants perform technical tasks related to preparing medications under a pharmacist's supervision. They also assist in filling prescriptions and managing patient files. Pharmacy assistants perform clerical functions and assists pharmacists and pharmacy technicians with drug dispensing tasks. Pharmacy technical assistants and pharmacy assistants are employed in retail and hospital pharmacies, long-term care facilities and by pharmaceutical manufacturers."
  },
  {
    "title": "Other assisting occupations in support of health services",
    "code": "33109",
    "teer": 3,
    "definition": "Other assisting workers in support of health services provide services and assistance to health care professionals and other health care staff. They are employed in hospitals, medical clinics, offices of health care professionals, nursing homes, optical retail stores and laboratories, and medical pathology laboratories."
  },
  {
    "title": "Government managers - health and social policy development and program administration",
    "code": "40010",
    "teer": 0,
    "definition": "Government managers in health and social policy development and program administration plan, organize, direct, control and evaluate the development and administration of health care policies, social policies and related programs designed to protect and promote the health and social welfare of individuals and communities. They are employed by all levels of government."
  },
  {
    "title": "Government managers - economic analysis, policy development and program administration",
    "code": "40011",
    "teer": 0,
    "definition": "Government managers in economic analysis, policy development and program administration plan, organize, direct, control and evaluate economic policy, research and programs in areas of government activity such as taxation, international trade, labour markets, transportation or agriculture. They also plan and direct policies and programs to promote industrial and commercial business development in urban and rural areas. They are employed by all levels of government."
  },
  {
    "title": "Government managers - education policy development and program administration",
    "code": "40012",
    "teer": 0,
    "definition": "Government managers in education policy development and program administration plan, organize, direct, control and evaluate the development and administration of elementary, secondary and post-secondary education policies and programs. They are employed by all levels of government."
  },
  {
    "title": "Other managers in public administration",
    "code": "40019",
    "teer": 0,
    "definition": "Other managers in public administration plan, organize, direct, control and evaluate the development of policies and programs which govern the daily operations of legislatures and other activities unique to government such as intergovernmental affairs and elections. They are employed by all levels of government."
  },
  {
    "title": "Administrators - post-secondary education and vocational training",
    "code": "40020",
    "teer": 0,
    "definition": "Administrators in post-secondary education and vocational training include faculty administrators and registrars of colleges or universities and administrators of vocational training schools. Faculty administrators manage the academic and related activities of faculties of colleges or universities. Registrars manage registration activities and academic records systems of colleges or universities. Administrators of vocational training schools manage the operations of vocational schools specializing in trades, technology, business or other vocational subjects."
  },
  {
    "title": "School principals and administrators of elementary and secondary education",
    "code": "40021",
    "teer": 0,
    "definition": "School principals plan, organize, direct, control and evaluate the activities of teachers and other staff of an elementary or secondary school. They are employed by public and private schools. Administrators of elementary and secondary education plan, organize, direct, control and evaluate the academic affairs of a school system. They are employed by school boards."
  },
  {
    "title": "Managers in social, community and correctional services",
    "code": "40030",
    "teer": 0,
    "definition": "Managers in social, community and correctional services plan, organize, direct, control and evaluate the programs and activities of social service and community agencies, correctional institutions, counselling departments, labour organizations, professional associations, political parties and non-governmental organizations."
  },
  {
    "title": "Commissioned police officers and related occupations in public protection services",
    "code": "40040",
    "teer": 0,
    "definition": "Commissioned police officers plan, organize, direct, control and evaluate police force administration and police activities such as maintaining law and order and detecting and preventing crime. They are employed by municipal, provincial and federal governments. This unit group includes officers from the rank of staff sergeant to police commissioner. Commissioned officers in the railway police, deputy chief coroners, and deputy chief medical examiners are also included in this unit group."
  },
  {
    "title": "Fire chiefs and senior firefighting officers",
    "code": "40041",
    "teer": 0,
    "definition": "Fire chiefs and senior firefighting officers plan, organize, direct, control and evaluate firefighting operations and fire prevention activities in fire departments. They are employed by municipal and federal governments and by industrial establishments with firefighting services."
  },
  {
    "title": "Commissioned officers of the Canadian Armed Forces",
    "code": "40042",
    "teer": 0,
    "definition": "Commissioned officers of the Canadian Armed Forces plan, organize, command, direct, control and evaluate, the operations of their organization in relation to established objectives. Senior commissioned officers formulate military and strategic policies which establish the direction to be taken by the Canadian Forces. All ranks of commissioned officers in the Royal Canadian Air Force, Canadian Army, and Royal Canadian Navy are included in this unit group."
  },
  {
    "title": "Judges",
    "code": "41100",
    "teer": 1,
    "definition": "Judges adjudicate civil and criminal cases and administer justice in courts of law. Judges preside over federal and provincial courts."
  },
  {
    "title": "Lawyers and Quebec notaries",
    "code": "41101",
    "teer": 1,
    "definition": "Lawyers and Quebec notaries advise clients on legal matters, represent clients before administration boards and draw up legal documents such as contracts and wills. Lawyers also plead cases, represent clients before tribunals and conduct prosecutions in courts of law. Lawyers are employed in law firms and prosecutor's offices. Quebec notaries are employed in notary offices. Both lawyers and Quebec notaries are employed by federal, provincial and municipal governments and various business establishments or they may be self-employed. Articling students are included in this unit group."
  },
  {
    "title": "University professors and lecturers",
    "code": "41200",
    "teer": 1,
    "definition": "University professors and lecturers teach courses to undergraduate and graduate students and conduct research at universities. University professors who are heads of departments are included in this unit group."
  },
  {
    "title": "Post-secondary teaching and research assistants",
    "code": "41201",
    "teer": 1,
    "definition": "Post-secondary teaching and research assistants assist university professors, community college and CEGEP teachers and other faculty members in teaching and research activities at universities and colleges."
  },
  {
    "title": "College and other vocational instructors",
    "code": "41210",
    "teer": 1,
    "definition": "College and other vocational instructors teach applied arts, academic, technical and vocational subjects to students at community colleges, CEGEPs, agricultural colleges, technical and vocational institutes, language schools and other college level schools. This unit group also includes trainers who are employed by private training establishments, companies, community agencies and governments to deliver internal training or development courses. College teachers who are heads of departments are included in this unit group."
  },
  {
    "title": "Secondary school teachers",
    "code": "41220",
    "teer": 1,
    "definition": "Secondary school teachers prepare and teach academic, technical, vocational or specialized subjects at public and private secondary schools. Secondary school teachers who are heads of departments are included in this unit group."
  },
  {
    "title": "Elementary school and kindergarten teachers",
    "code": "41221",
    "teer": 1,
    "definition": "Elementary school and kindergarten teachers teach basic subjects such as reading, writing and arithmetic or specialized subjects such as English or French as a second language at public and private elementary schools."
  },
  {
    "title": "Social workers",
    "code": "41300",
    "teer": 1,
    "definition": "Social workers help individuals, couples, families, groups, communities and organizations develop the skills and resources they need to enhance social functioning and provide counselling, therapy and referral to other supportive social services. Social workers also respond to other social needs and issues such as unemployment, racism and poverty. They are employed by hospitals, school boards, social service agencies, child welfare organizations, correctional facilities, community agencies, employee assistance programs and Aboriginal band councils, or they may work in private practice."
  },
  {
    "title": "Therapists in counselling and related specialized therapies",
    "code": "41301",
    "teer": 1,
    "definition": "Therapists in counselling and related specialized therapies assist individuals and groups of clients to identify, understand and overcome personal problems and achieve personal objectives. They can be specialized to work on specific problems and they may practice psychotherapy. They are employed by counselling centres, social service agencies, group homes, government agencies, family therapy centres, and educational, health care and rehabilitation facilities, or they may work in private practice."
  },
  {
    "title": "Religious leaders",
    "code": "41302",
    "teer": 1,
    "definition": "Religious leaders conduct religious services, administer the rites of a religious faith or denomination, provide spiritual and moral guidance and perform other functions associated with the practice of a religion. They perform these duties in churches, synagogues, temples or other places of worship. They may also work in other institutions such as schools, hospitals and correctional facilities."
  },
  {
    "title": "Police investigators and other investigative occupations",
    "code": "41310",
    "teer": 1,
    "definition": "Police investigators and professionals in related investigative occupations follow leads and investigate circumstances relating to crimes committed and obtain information to prevent crimes. They plan and coordinate investigations, collect evidence, interview suspects, victims, witnesses and other stakeholders, conduct surveillance and testify in court. They are employed by municipal, provincial and federal governments. This unit group includes coroners and medical examiners."
  },
  {
    "title": "Probation and parole officers",
    "code": "41311",
    "teer": 1,
    "definition": "Probation officers monitor the conduct and behaviour of criminal offenders serving probation terms and serving sentences of two years less a day. They are employed by provincial governments. Parole officers monitor the reintegration of criminal offenders serving the remainder of sentences on conditional release and individuals that are subject to a long-term supervision order. They also assess inmates and develop rehabilitation programs for criminal offenders who are incarcerated in correctional facilities. They are employed by federal and provincial governments. Both probation and parole officers work in the community and in correctional facilities including young offender's correctional facilities."
  },
  {
    "title": "Educational counsellors",
    "code": "41320",
    "teer": 1,
    "definition": "Educational counsellors advise current and prospective students on educational issues, career planning and personal development, and coordinate the provision of counselling services to students, parents, teachers, faculty and staff. They are employed by school boards and post-secondary educational institutions."
  },
  {
    "title": "Career development practitioners and career counsellors (except education)",
    "code": "41321",
    "teer": 1,
    "definition": "Career development practitioners and career counsellors (except education) provide assistance and information to job seeker clients on all aspects of employment search and career planning. They also provide advice and information to employer clients regarding employment issues and human resources. They are employed by public or private employment agencies, rehabilitation centres, hospitals, human resource departments of establishments, consulting firms, correctional facilities and by federal and provincial governments. Supervisors of career development practitioners and career counsellors (except education) are included in this unit group."
  },
  {
    "title": "Natural and applied science policy researchers, consultants and program officers",
    "code": "41400",
    "teer": 1,
    "definition": "Natural and applied science policy researchers, consultants and program officers conduct research, prepare reports, provide consultation and advice and administer programs in a variety of areas related to the natural and applied sciences. They are employed by federal, provincial and municipal governments, computer and office furniture manufacturers, educational institutions, research organizations, consulting firms, environmental and conservation organizations, or they may be self-employed."
  },
  {
    "title": "Economists and economic policy researchers and analysts",
    "code": "41401",
    "teer": 1,
    "definition": "Economists and economic policy researchers and analysts conduct research, monitor data, analyze information and prepare reports and plans to resolve economic and business problems and develop models to analyze, explain and forecast economic behaviour and patterns. They advise on matters such as finance, fiscal and monetary policy, international trade, agricultural and natural resource commodities and labour and industrial markets. They are employed by government departments and agencies and throughout the private sector in associations, unions, research organizations, banks and investment firms."
  },
  {
    "title": "Business development officers and market researchers and analysts",
    "code": "41402",
    "teer": 1,
    "definition": "Business development officers and market researchers and analysts conduct research, provide statistical and analytical supports, identify market trends and potential opportunities, formulate policies and manage programs to stimulate industrial and commercial business investment or tourism in urban and rural areas, or to promote commercial or industrial products and services. They are employed by government departments, international organizations, marketing and analytics firms and business associations or may be self-employed."
  },
  {
    "title": "Social policy researchers, consultants and program officers",
    "code": "41403",
    "teer": 1,
    "definition": "Social policy researchers, consultants and program officers conduct research, develop policy and implement or administer programs in areas such as consumer affairs, employment, home economics, immigration, law enforcement, corrections, human rights, housing, labour, family services, foreign aid and international development. They are employed by government departments and agencies, hospitals, educational institutions, consulting establishments, professional associations, research institutes, non-government organizations and international organizations or they may be self-employed."
  },
  {
    "title": "Health policy researchers, consultants and program officers",
    "code": "41404",
    "teer": 1,
    "definition": "Health policy researchers, consultants and program officers conduct research, produce reports and administer health care policies and programs. They are employed by government departments and agencies, consulting establishments, universities, research institutes, hospitals, community agencies, educational institutions, professional associations, non-governmental organizations and international organizations."
  },
  {
    "title": "Education policy researchers, consultants and program officers",
    "code": "41405",
    "teer": 1,
    "definition": "Education policy researchers, consultants and program officers conduct research, produce reports and administer elementary, secondary and post-secondary education policies and programs. They are employed by government departments, school boards, research institutes, professional associations and educational and other organizations throughout the public and private sectors, or they may be self-employed."
  },
  {
    "title": "Recreation, sports and fitness policy researchers, consultants and program officers",
    "code": "41406",
    "teer": 1,
    "definition": "Policy researchers, consultants and program officers in recreation, sports and fitness oversee and administer recreation, sports and fitness programs and activities, provide consulting services, conduct research and develop programs and policies related to recreation, sports and physical fitness. They are employed by federal, provincial and municipal governments, recreation, sports, fitness and health care facilities, retirement homes, community centres, sports and fitness consulting firms and organizations, or they may be self-employed."
  },
  {
    "title": "Program officers unique to government",
    "code": "41407",
    "teer": 1,
    "definition": "Program officers unique to government are primarily concerned with the administration and operation of government institutions, such as Parliament, and activities unique to the operations of government, such as international relations, federal-provincial affairs, elections and tribunals."
  },
  {
    "title": "Other professional occupations in social science",
    "code": "41409",
    "teer": 1,
    "definition": "Other professional occupations in social science include anthropologists, archaeologists, geographers, historians, linguists, political scientists, sociologists and other professional occupations in social science. They are employed in universities and throughout the public and private sectors."
  },
  {
    "title": "Police officers (except commissioned)",
    "code": "42100",
    "teer": 2,
    "definition": "Police officers maintain order and enforce laws and regulations. They respond to emergency calls, patrol public areas, regulate traffic, control crowds, arrest offenders and build community relationships. They are employed by municipal and federal governments and some provincial and regional governments."
  },
  {
    "title": "Firefighters",
    "code": "42101",
    "teer": 2,
    "definition": "Firefighters carry out firefighting and fire prevention activities, and assist in other emergencies. They are employed by municipal, provincial and federal governments and by large industrial establishments that have internal firefighting services. Apprentices are also included in this unit group."
  },
  {
    "title": "Specialized members of the Canadian Armed Forces",
    "code": "42102",
    "teer": 2,
    "definition": "Specialized members of the Canadian Armed Forces provide critical technological support for military armament. They are primarily responsible for the maintenance, inspection and technical support of all Canadian Army equipment. They also follow the military and strategic policies established by the leadership of the Canadian Army, the Royal Canadian Airforce, and the Royal Canadian Navy."
  },
  {
    "title": "Paralegals and related occupations",
    "code": "42200",
    "teer": 2,
    "definition": "Paralegals prepare legal documents and conduct research to assist lawyers or other professionals. Independent paralegals provide legal services to the public as allowed by government legislation, or provide paralegal services on contract to law firms or other establishments. Justices of the peace administer oaths, issue subpoenas, summonses and warrants and perform other court-related duties such as conducting bail hearings. Notaries public administer oaths, take affidavits, sign legal documents and perform other activities according to the scope of their practice. Trademark agents advise clients on intellectual property matters. Paralegals are employed by law firms, by record search companies and in legal departments throughout the public and private sectors. Independent paralegals are usually self-employed. Justices of the peace are employed by federal, provincial, municipal, and territorial courts. Notaries public are employed by government and in the public and private sectors or they may be self-employed. Trademark agents are employed by law firms and legal departments throughout the public and private sectors, trademark development and search firms or they may be self-employed."
  },
  {
    "title": "Social and community service workers",
    "code": "42201",
    "teer": 2,
    "definition": "Social and community service workers administer and implement a variety of social assistance programs and community services, and assist clients to deal with personal and social problems. They are employed by social service and government agencies, mental health agencies, group homes, shelters, substance abuse centres, school boards, correctional facilities and other establishments."
  },
  {
    "title": "Early childhood educators and assistants",
    "code": "42202",
    "teer": 2,
    "definition": "Early childhood educators plan, organize and implement programs for children between the ages of infancy and 12 years. Early childhood educator assistants provide care for infants and preschool- to school-age children under the guidance of early childhood educators. Early childhood educators and assistants lead children in activities to stimulate and develop their intellectual, physical and emotional growth and ensure their security and well-being. They are employed in child-care centres, daycare centres, kindergartens, agencies for exceptional children and other settings where early childhood education services are provided. Supervisors of early childhood educators and assistants are included in this unit group."
  },
  {
    "title": "Instructors of persons with disabilities",
    "code": "42203",
    "teer": 2,
    "definition": "Instructors of persons with disabilities teach children and adults using a variety of techniques to facilitate communication, rehabilitation, social skills and increased independence. They are employed in rehabilitation centres, specialized educational institutes and throughout the school system."
  },
  {
    "title": "Religion workers",
    "code": "42204",
    "teer": 2,
    "definition": "Religion workers include brothers, nuns, monks, religious education workers and others who provide support to ministers of religion or to a religious community and who perform certain functions associated with the practice of a religion. They may perform these duties in churches, synagogues, temples or other places of worship; in institutions such as schools, hospitals and prisons; or in industrial facilities, corporate enterprises; or they may work in private practice."
  },
  {
    "title": "Elementary and secondary school teacher assistants",
    "code": "43100",
    "teer": 3,
    "definition": "Elementary and secondary school teacher assistants support students, and assist teachers and counsellors with teaching and non-instructional tasks. They assist in areas of personal care, teaching and behaviour management under the supervision of teachers or other child care professionals. They are employed in public and private elementary, secondary and special needs schools and treatment centres."
  },
  {
    "title": "Other instructors",
    "code": "43109",
    "teer": 3,
    "definition": "Other instructors teach courses, such as motor vehicle or motorcycle driving, sailing and navigation, sewing or other courses, which are outside of educational institutions. They are employed by driving schools, fabric retailers and other commercial establishments or they may be self-employed. This unit group also includes modelling and finishing school instructors, driver's licence examiners, who are employed by provincial governments and tutors who provide instruction in elementary or secondary school subjects."
  },
  {
    "title": "Sheriffs and bailiffs",
    "code": "43200",
    "teer": 3,
    "definition": "Sheriffs execute and enforce court orders, warrants and writs, participate in seizure and sale of property and perform courtroom and other related duties. Bailiffs serve legal orders and documents, seize or repossess properties, evict tenants and perform other related activities. Sheriffs and bailiffs must usually complete a training program offered by the province to work in the provincial courts. They are employed by federal, provincial, territorial and municipal courts, and bailiffs may be employed as officers of the court or in private service as agents for creditors."
  },
  {
    "title": "Correctional service officers",
    "code": "43201",
    "teer": 3,
    "definition": "Correctional service officers guard offenders and detainees and maintain order in correctional institutions and other places of detention. Primary workers develop women offender's correctional plan and work with other service officers in the correctional team. They are employed by federal, provincial and municipal governments. Correctional service officers who are supervisors are included in this unit group."
  },
  {
    "title": "By-law enforcement and other regulatory officers",
    "code": "43202",
    "teer": 3,
    "definition": "By-law enforcement and other regulatory officers enforce by-laws and regulations of provincial and municipal governments. They are employed by provincial and municipal governments and agencies."
  },
  {
    "title": "Border services, customs, and immigration officers",
    "code": "43203",
    "teer": 3,
    "definition": "Border services, customs, and immigration officers administer and enforce laws and regulations related to immigration, customs and border crossing. They are employed by government agencies."
  },
  {
    "title": "Operations members of the Canadian Armed Forces",
    "code": "43204",
    "teer": 3,
    "definition": "Operations members of the Canadian Armed Forces provide operational support to soldiers including the proper functioning and testing of military equipment such as vehicles, ships and weapons. They follow the military and strategic policies established by the leadership of the Canadian Army, the Royal Canadian Airforce and the Royal Canadian Navy."
  },
  {
    "title": "Home child care providers",
    "code": "44100",
    "teer": 4,
    "definition": "Home child care providers care for children on an ongoing or short-term basis. They care for the well-being and physical and social development of children, assist parents with child care and may assist with household duties. They provide care primarily in their own homes or in the children's homes, where they may also reside. They are employed by private households and child-care agencies, or they may be self-employed."
  },
  {
    "title": "Home support workers, caregivers and related occupations",
    "code": "44101",
    "teer": 4,
    "definition": "Home support workers, caregivers and related occupations, provide personal care and companionship for seniors, persons with disabilities and convalescent clients. They provide care in the client's residence, where they may also reside. They are employed by home care and support agencies, private households, or they may be self-employed."
  },
  {
    "title": "Primary combat members of the Canadian Armed Forces",
    "code": "44200",
    "teer": 4,
    "definition": "Primary combat members of the Canadian Armed Forces provide collective defence measures to protect Canadian waters, land, air space and other interests. They conduct raids and ambushes in combat missions and conduct patrols and escorts in security and stability missions. They also follow the military and strategic policies established by the leadership of the Canadian Army, the Royal Canadian Airforce and the Royal Canadian Navy."
  },
  {
    "title": "Student monitors, crossing guards and related occupations",
    "code": "45100",
    "teer": 5,
    "definition": "Student monitors, crossing guards and workers in related occupations supervise students to ensure their safety and monitor their behaviour during indoor or outdoor breaks and before and after school hours. School monitors are employed by public and private elementary and secondary schools. Crossing guards are employed by municipalities, public and private security agencies and schools."
  },
  {
    "title": "Library, archive, museum and art gallery managers",
    "code": "50010",
    "teer": 0,
    "definition": "Library, archive, museum and art gallery managers plan, organize, direct, control and evaluate the activities of libraries, archives, museums, art galleries or departments within such institutions. They are employed in libraries, archives, museums and non-retail art galleries."
  },
  {
    "title": "Managers - publishing, motion pictures, broadcasting and performing arts",
    "code": "50011",
    "teer": 0,
    "definition": "Managers in publishing, motion pictures, broadcasting and performing arts plan, organize, direct, control and evaluate operations within publishing firms, film, theatre and record production companies and broadcasting facilities. They are employed by radio and television stations, by newspaper, periodical and book publishing firms, and by film, theatre, record and video production companies."
  },
  {
    "title": "Recreation, sports and fitness program and service directors",
    "code": "50012",
    "teer": 0,
    "definition": "Recreation, sports and fitness program and service directors plan, organize, direct, control and evaluate the operations of comprehensive recreational, sports and fitness programs and services, national or provincial sports governing agencies and professional athletic teams. They are employed by municipalities, community and private recreational and fitness organizations, sports governing agencies and professional athletic team organizations."
  },
  {
    "title": "Librarians",
    "code": "51100",
    "teer": 1,
    "definition": "Librarians select, develop, organize and maintain library collections and provide advisory services for users. They are employed in libraries or other establishments with library services throughout the public and private sectors."
  },
  {
    "title": "Conservators and curators",
    "code": "51101",
    "teer": 1,
    "definition": "Conservators restore and conserve artifacts belonging to museums, galleries and owners of cultural property. Curators recommend the acquisition of museum artifacts and gallery works of art and research their artistic history. Conservators and curators are employed in museums, art galleries, archives, libraries, government agencies and universities. Conservators may be self-employed."
  },
  {
    "title": "Archivists",
    "code": "51102",
    "teer": 1,
    "definition": "Archivists manage, process, store and disseminate information contained in an organization's archives. They acquire, store and research textual material, pictures, maps, architectural documents, electronic materials, films and videos, and sound recordings and multimedia materials. They are employed in archives, in the public and para-public sectors and in private sector organizations."
  },
  {
    "title": "Editors",
    "code": "51110",
    "teer": 1,
    "definition": "Editors review, evaluate and edit manuscripts, articles, news reports and other material for publication, broadcast or interactive media and coordinate the activities of writers, journalists and other staff. They are employed by publishing firms, magazines, journals, newspapers, radio and television networks and stations, and by companies and government departments that produce publications such as newsletters, handbooks, manuals and Web sites. Editors may also work on a freelance basis."
  },
  {
    "title": "Authors and writers (except technical)",
    "code": "51111",
    "teer": 1,
    "definition": "Authors and writers plan, research and write books, scripts, storyboards, plays, essays, speeches and other non-journalistic articles for publication or presentation. They are employed by advertising agencies, governments, large corporations, private consulting firms, publishing firms, multimedia/new-media companies and other establishments, or they may be self-employed."
  },
  {
    "title": "Technical writers",
    "code": "51112",
    "teer": 1,
    "definition": "Technical writers write manuals and specifications for publication or presentation. They are employed by governments, large corporations, private consulting firms, publishing firms, and other establishments, or they may be self-employed."
  },
  {
    "title": "Journalists",
    "code": "51113",
    "teer": 1,
    "definition": "Journalists research, investigate, interpret and communicate news and public affairs through newspapers, television, radio and other media. They are employed by radio and television networks and stations, newspapers and magazines. Journalists may also work on a freelance basis."
  },
  {
    "title": "Translators, terminologists and interpreters",
    "code": "51114",
    "teer": 1,
    "definition": "Translators translate written material from one language to another. Interpreters translate oral communication from one language to another during speeches, meetings, conferences, debates and conversation, or in court or before administrative tribunals. Terminologists conduct research to itemize terms connected with a certain field, define them and find equivalents in another language. Sign language interpreters use sign language to translate spoken language and vice versa during meetings, conversations, television programs or in other instances. Translators, terminologists and interpreters are employed by government, private translation and interpretation agencies, in-house translation services, large private corporations, international organizations and the media, or they may be self-employed. Sign language interpreters work in schools and courts, and for social service agencies, interpretation services, government services and television stations, or they may be self-employed."
  },
  {
    "title": "Producers, directors, choreographers and related occupations",
    "code": "51120",
    "teer": 1,
    "definition": "Producers, directors, choreographers and professionals in related occupations oversee and control the technical and artistic aspects of film, television, video game, radio, dance and theatre productions. They are employed by film production companies, radio and television stations, video game companies, broadcast departments, advertising companies, sound recording studios, record production companies and dance companies. They may also be self-employed."
  },
  {
    "title": "Conductors, composers and arrangers",
    "code": "51121",
    "teer": 1,
    "definition": "Conductors, composers and arrangers conduct bands and orchestras, compose musical works and arrange instrumental and vocal compositions. They are employed by symphony and chamber orchestras, bands, choirs, sound recording companies, and orchestras for ballet and opera performances, or they may be self-employed."
  },
  {
    "title": "Musicians and singers",
    "code": "51122",
    "teer": 1,
    "definition": "Musicians and singers perform with orchestras, choirs, opera companies and popular bands in establishments such as concert halls, lounges and theatres and in film, television and recording studios. This unit group also includes music teachers who usually teach in conservatories, academies and private homes."
  },
  {
    "title": "Library and public archive technicians",
    "code": "52100",
    "teer": 2,
    "definition": "Library and public archive technicians assist users in accessing library or archive resources, assist in describing new acquisitions, participate in archive processing and storage, and conduct reference searches. They are employed by libraries and public archives."
  },
  {
    "title": "Film and video camera operators",
    "code": "52110",
    "teer": 2,
    "definition": "Film and video camera operators operate motion picture and video cameras and related equipment to record news, live events, films, videos and television broadcasts. They are employed by television networks and stations, motion picture and video production companies and in-house communications facilities of large corporations."
  },
  {
    "title": "Graphic arts technicians",
    "code": "52111",
    "teer": 2,
    "definition": "Graphic arts technicians assist in conceptualizing a project, interpreting design specifications or sketches, preparing the page make-up, lay-out and lettering, and preparing production materials for press, electronic or multimedia publishing. They are employed by publishing, communications, advertising, marketing, printing and multimedia establishments, and by television and film production companies. They may also be self-employed."
  },
  {
    "title": "Broadcast technicians",
    "code": "52112",
    "teer": 2,
    "definition": "Broadcast technicians install, set up, test, operate and repair electronic equipment used to record and transmit live and taped radio and television programs and to produce audio and video streaming broadcasts for the Internet. They are employed by radio and television broadcasting networks and stations, by broadcast equipment companies and by Internet-based communication providers."
  },
  {
    "title": "Audio and video recording technicians",
    "code": "52113",
    "teer": 2,
    "definition": "Audio and video recording technicians operate equipment to record, mix and edit sound, music and videotape, for motion pictures, television and radio programs, videos, recordings and live events. They are employed by multimedia companies, film, video and concert production companies, sound recording firms, theatre and dance companies, educational establishments, clubs, hotels, bands, radio stations, television networks and video production and editing companies."
  },
  {
    "title": "Announcers and other broadcasters",
    "code": "52114",
    "teer": 2,
    "definition": "Announcers and other broadcasters read news, sports, weather, commercial and public service messages and host entertainment and information programs for broadcast on radio or television. They are primarily employed by radio and television stations and networks and by commercial firms that produce advertisements for radio or television."
  },
  {
    "title": "Other technical and coordinating occupations in motion pictures, broadcasting and the performing arts",
    "code": "52119",
    "teer": 2,
    "definition": "Workers in other technical and coordinating occupations in motion pictures, broadcasting and the performing arts coordinate and perform specific activities for television, radio and motion picture productions, news broadcasts, theatre and stage productions, and other live or recorded productions. They are employed by television and radio stations and networks, recording studios, motion picture and video production companies, concert promoters and theatre, stage and dance companies."
  },
  {
    "title": "Graphic designers and illustrators",
    "code": "52120",
    "teer": 2,
    "definition": "Graphic designers conceptualize and produce graphic art and visual materials to effectively communicate information for publications, advertising, films, packaging, posters, signs and interactive media such as Web sites and CDs. They are employed by advertising and graphic design firms, by establishments with advertising or communications departments and by multimedia production companies, or they may be self-employed. Graphic designers who are also supervisors, project managers or consultants are included in this unit group. Illustrators conceptualize and create illustrations to represent information through images. They are almost solely self-employed."
  },
  {
    "title": "Interior designers and interior decorators",
    "code": "52121",
    "teer": 2,
    "definition": "Interior designers and interior decorators conceptualize and produce aesthetic, functional and safe designs for interior spaces in residential, commercial, cultural, institutional and industrial buildings. They are employed by architectural and interior design firms, retail establishments, construction companies, hospitals, airlines, hotel and restaurant chains, and other establishments, or they may be self-employed."
  },
  {
    "title": "Registrars, restorers, interpreters and other occupations related to museum and art galleries",
    "code": "53100",
    "teer": 3,
    "definition": "Registrars, restorers, interpreters and workers in other occupations related to museums and art galleries classify and catalogue museum artifacts and gallery works of art, construct and install exhibits and displays, restore, maintain and store museum and gallery collections, frame artwork, and perform other functions in support of curatorial and conservation activities. They are employed in museums and galleries. Picture framers and taxidermists may also be employed in retail settings or may be self-employed. This unit group also includes museum and other interpreters who conduct guided tours. They are employed by art galleries, museums, parks, aquariums, zoos, interpretive centres, botanical gardens, cultural centres, nature sanctuaries, historic and heritage sites, and other locations."
  },
  {
    "title": "Photographers",
    "code": "53110",
    "teer": 3,
    "definition": "Photographers operate still cameras to photograph people, events, scenes, materials, products and other subjects. They are employed by photographic studios, newspapers, magazines, museums and government, or they may be self-employed."
  },
  {
    "title": "Motion pictures, broadcasting, photography and performing arts assistants and operators",
    "code": "53111",
    "teer": 3,
    "definition": "Assistants and operators in motion pictures, broadcasting, photography and the performing arts perform duties related to these fields. They are employed by television and radio stations and networks, recording studios, motion picture and video production companies and by theatre and stage companies."
  },
  {
    "title": "Dancers",
    "code": "53120",
    "teer": 3,
    "definition": "Dancers are employed by ballet and dance companies, television and film productions and nightclubs and similar establishments. This unit group also includes dance teachers who are usually employed by dance academies and dance schools."
  },
  {
    "title": "Actors, comedians and circus performers",
    "code": "53121",
    "teer": 3,
    "definition": "Actors, comedians and circus performers perform roles and circus skills in circuses, motion picture, television, theatre and radio productions to entertain a variety of audiences. They are employed by motion picture, television, circuses, theatre and other production companies. This unit group includes acting teachers employed by private acting schools."
  },
  {
    "title": "Painters, sculptors and other visual artists",
    "code": "53122",
    "teer": 3,
    "definition": "Painters, sculptors and other visual artists create original paintings, drawings, sculptures, engravings and other artistic works. They are usually self-employed. This unit group also includes art instructors and teachers, who are usually employed by art schools."
  },
  {
    "title": "Theatre, fashion, exhibit and other creative designers",
    "code": "53123",
    "teer": 3,
    "definition": "Theatre, fashion, exhibit and other creative designers conceptualize and produce designs for film, television, theatre and video productions, garments and textiles, displays and exhibits, and for other creative items such as jewellery and trophies. Theatre designers are employed by performing arts and broadcasting companies and by festivals; fashion designers are employed by clothing and textile companies or may be self-employed; and exhibit designers are employed by museums. Other creative designers in this unit group are employed by manufacturing establishments or may be self-employed."
  },
  {
    "title": "Artisans and craftspersons",
    "code": "53124",
    "teer": 3,
    "definition": "Artisans and craftspersons use manual and artistic skills to design and make ornamental objects, pottery, stained glass, jewellery, rugs, blankets, other handicrafts and artistic floral arrangements. Makers of musical instruments are also included in this unit group. Most craftspersons are self-employed. Artistic floral arrangers are usually employed in florist shops and floral departments of retail establishments, or may be self-employed. Craft instructors are also included in this unit group and are employed by artisan guilds, colleges, private studios and recreational organizations."
  },
  {
    "title": "Patternmakers - textile, leather and fur products",
    "code": "53125",
    "teer": 3,
    "definition": "Patternmakers in textile, leather and fur products create master patterns for the production of garments, footwear and other textile, leather or fur products. They are employed by pattern manufacturers, textile, leather or fur products manufacturers, or they may be self-employed."
  },
  {
    "title": "Athletes",
    "code": "53200",
    "teer": 3,
    "definition": "Athletes participate in competitive sports events on an amateur or professional basis. They play team sports such as hockey, baseball, football and lacrosse; or compete in individual sports such as skiing, figure skating, boxing or track and field; or in games such as poker or chess. They are employed by professional team organizations or they may be self-employed."
  },
  {
    "title": "Coaches",
    "code": "53201",
    "teer": 3,
    "definition": "Coaches prepare and train individual athletes or teams for competitive events. They are employed by national and provincial sports organizations, professional and amateur sports teams, sports clubs and universities or they may be self-employed. This unit group also includes sports scouts who identify and recruit athletes for professional sports teams. They are employed by professional sports organizations."
  },
  {
    "title": "Sports officials and referees",
    "code": "53202",
    "teer": 3,
    "definition": "Sports officials and referees observe and enforce rules and regulations governing sporting events, athletic games and sports competitions. They are employed by national, provincial and local sporting commissions, organizations and leagues."
  },
  {
    "title": "Program leaders and instructors in recreation, sport and fitness",
    "code": "54100",
    "teer": 4,
    "definition": "Program leaders and instructors in recreation, sport and fitness lead and instruct groups and individuals in recreational, sports, fitness or athletic programs. Fitness appraisers conduct fitness tests and assessments and design, develop and deliver fitness programs. They are employed by community centres, sports and fitness clubs, outdoor centres, resorts, recreational facilities, health care facilities, retirement homes, correctional institutions, government departments, private businesses, tourism associations and similar establishments."
  },
  {
    "title": "Other performers",
    "code": "55109",
    "teer": 5,
    "definition": "Other performers include influencers, magicians, models, puppeteers and other performers. They are employed by nightclubs and theatre, advertising and other production companies, or they may be self-employed."
  },
  {
    "title": "Corporate sales managers",
    "code": "60010",
    "teer": 0,
    "definition": "Corporate sales managers plan, organize, direct, control and evaluate the activities of establishments and departments involved in commercial, industrial, institutional, e-business and wholesale and retail sales. They are employed by commercial, industrial and wholesale and retail trade establishments."
  },
  {
    "title": "Retail and wholesale trade managers",
    "code": "60020",
    "teer": 0,
    "definition": "Retail and wholesale trade managers plan, organize, direct, control and evaluate the operations of establishments that sell merchandise or services on a retail or wholesale basis. They are employed by retail and wholesale sales establishments or they may own and operate their own store."
  },
  {
    "title": "Restaurant and food service managers",
    "code": "60030",
    "teer": 0,
    "definition": "Restaurant and food service managers plan, organize, direct, control and evaluate the operations of restaurants, bars, cafeterias and other food and beverage services. They are employed in food and beverage service establishments, or they may be self-employed."
  },
  {
    "title": "Accommodation service managers",
    "code": "60031",
    "teer": 0,
    "definition": "Accommodation service managers plan, organize, direct, control and evaluate the operations of an accommodation establishment or of a department within such an establishment. They are employed by hotels, motels, resorts, student residences and other accommodation establishments, or they may be self-employed."
  },
  {
    "title": "Managers in customer and personal services",
    "code": "60040",
    "teer": 0,
    "definition": "Managers in customer and personal services provide services such as dry cleaning, hairdressing or residential cleaning. This group also includes managers of schools that provide non-vocational instruction in driving, languages, music, dance, art, cooking or fashion."
  },
  {
    "title": "Retail sales supervisors",
    "code": "62010",
    "teer": 2,
    "definition": "Retail sales supervisors supervise and coordinate the activities of workers in the following unit groups: Retail salespersons and visual merchandisers (64100), Cashiers (65100), Store shelf stockers, clerks and order fillers (65102) and Other sales related occupations (65109). They are employed by stores and other retail businesses, wholesale businesses that sell on a retail basis to the public, rental service establishments and businesses involved in door-to-door soliciting and telemarketing."
  },
  {
    "title": "Food service supervisors",
    "code": "62020",
    "teer": 2,
    "definition": "Food service supervisors supervise, direct and coordinate the activities of workers who prepare, portion and serve food. They are employed by hospitals and other health care establishments and by cafeterias, catering companies and other food service establishments."
  },
  {
    "title": "Executive housekeepers",
    "code": "62021",
    "teer": 2,
    "definition": "Executive housekeepers direct and control the operations of housekeeping departments within hotels, hospitals and other establishments."
  },
  {
    "title": "Accommodation, travel, tourism and related services supervisors",
    "code": "62022",
    "teer": 2,
    "definition": "Accommodation, travel, tourism and related services supervisors supervise and coordinate the activities of hotel accommodation service clerks, casino workers, reservation clerks and other travel and accommodations workers not elsewhere classified. They are employed by service establishments throughout the public and private sectors."
  },
  {
    "title": "Customer and information services supervisors",
    "code": "62023",
    "teer": 2,
    "definition": "Customer and information services supervisors supervise and coordinate the activities of workers in the following unit groups: Customer service representatives - financial institutions (64400) and Other customer and information services representatives (64409). They are employed by banks, trust companies, credit unions and similar financial institutions, retail establishments, contact centres, insurance, telephone and utility companies and other establishments throughout the public and private sectors."
  },
  {
    "title": "Cleaning supervisors",
    "code": "62024",
    "teer": 2,
    "definition": "Cleaning supervisors supervise and coordinate the activities of workers in the following unit groups: Light duty cleaners (65310), Specialized cleaners (65311), and Janitors, caretakers and building superintendents (73201). They are employed by hospitals and other health care institutions, hotels, motels, schools and other educational institutions, commercial and industrial establishments, home and office cleaning establishments and by various specialized cleaning companies."
  },
  {
    "title": "Other services supervisors",
    "code": "62029",
    "teer": 2,
    "definition": "Other services supervisors supervise and coordinate the activities of dry cleaning, laundry, ironing, pressing and finishing workers, theatre ushers and attendants, spa, sports and recreation club workers, commissionaires, security guards and other service workers. They are employed by service establishments throughout the public and private sectors."
  },
  {
    "title": "Technical sales specialists - wholesale trade",
    "code": "62100",
    "teer": 2,
    "definition": "Technical sales specialists in wholesale trade, sell a range of technical goods and services, such as scientific, agricultural and industrial products, electricity, telecommunications services and computer services, to governments and to commercial and industrial establishments in domestic and international localities. They are employed by establishments that produce or provide technical goods and services, such as pharmaceutical companies, industrial equipment manufacturing companies, grain elevators, computer services firms, engineering firms and hydroelectric companies, or they may be self-employed technical sales specialists/agents who contract their services to other companies. Technical sales specialists in wholesale trade who are supervisors are included in this unit group."
  },
  {
    "title": "Retail and wholesale buyers",
    "code": "62101",
    "teer": 2,
    "definition": "Retail and wholesale buyers buy merchandise for resale by retail or wholesale establishments and are usually responsible for the merchandising operations of retail or wholesale establishments. Retail and wholesale buyers who are supervisors and those who are assistants are included in this unit group."
  },
  {
    "title": "Chefs",
    "code": "62200",
    "teer": 2,
    "definition": "Chefs plan and direct food preparation and cooking activities and who prepare and cook meals and specialty foods. They are employed in restaurants, hotels, hospitals and other health care institutions, central food commissaries, clubs and similar establishments, and on ships."
  },
  {
    "title": "Funeral directors and embalmers",
    "code": "62201",
    "teer": 2,
    "definition": "Funeral directors coordinate and arrange all aspects of funeral services. Embalmers prepare the remains of deceased persons for public visitation and burial. Funeral directors and embalmers are employed by funeral homes."
  },
  {
    "title": "Jewellers, jewellery and watch repairers and related occupations",
    "code": "62202",
    "teer": 2,
    "definition": "Jewellers and workers in related occupations fabricate, assemble, repair and appraise fine jewellery. Watch repairers and related workers repair, clean, adjust and fabricate parts for clocks and watches. They are employed by jewellery, clock and watch manufacturers and retail stores, by jewellery and watch repair shops or they may be self-employed."
  },
  {
    "title": "Insurance agents and brokers",
    "code": "63100",
    "teer": 3,
    "definition": "Insurance agents and brokers sell life, automobile, property, health and other types of insurance to individuals, businesses and public institutions. Insurance agents are employed by individual insurance companies or are independent representatives of specific insurance companies. Insurance brokers are employed by brokerage firms, or may work in partnerships or hold sole proprietorship. Supervisors of insurance agents are included in this unit group."
  },
  {
    "title": "Real estate agents and salespersons",
    "code": "63101",
    "teer": 3,
    "definition": "Real estate agents and salespersons act as agents for the sale or purchase of houses, apartments, commercial buildings, land and other real estate. They are employed in the real estate industry."
  },
  {
    "title": "Financial sales representatives",
    "code": "63102",
    "teer": 3,
    "definition": "Financial sales representatives sell basic deposit, investment and loan products and services to individuals and businesses. They work in banks, credit unions, trust companies and similar financial institutions."
  },
  {
    "title": "Cooks",
    "code": "63200",
    "teer": 3,
    "definition": "Cooks prepare and cook a wide variety of foods. They are employed in restaurants, hotels, hospitals and other health care institutions, central food commissaries, educational institutions and other establishments. Cooks are also employed aboard ships and at construction and logging campsites. Apprentices are also included in this unit group."
  },
  {
    "title": "Butchers - retail and wholesale",
    "code": "63201",
    "teer": 3,
    "definition": "Butchers prepare standard and specialty cuts of meat, poultry, fish and shellfish for sale in retail or wholesale food establishments. They are employed in supermarkets, grocery stores, butcher shops and fish stores or may be self-employed. Butchers who are supervisors or heads of departments are included in this unit group. Apprentices are also included in this unit group."
  },
  {
    "title": "Bakers",
    "code": "63202",
    "teer": 3,
    "definition": "Bakers prepare bread, rolls, muffins, pies, pastries, cakes and cookies in retail and wholesale bakeries and dining establishments. They are employed in bakeries, supermarkets, catering companies, hotels, restaurants, hospitals, and other institutions, or they may be self-employed. Bakers who are supervisors are included in this unit group. Apprentices are also included in this unit group."
  },
  {
    "title": "Hairstylists and barbers",
    "code": "63210",
    "teer": 3,
    "definition": "Hairstylists and barbers cut and style hair and perform related services. They are employed in hairstyling or hairdressing salons, barber shops, vocational schools, health care establishments and theatre, film and television establishments. Apprentices are also included in this unit group."
  },
  {
    "title": "Estheticians, electrologists and related occupations",
    "code": "63211",
    "teer": 3,
    "definition": "Estheticians, electrologists and workers in related occupations provide facial and body treatments designed to enhance an individual's physical appearance. They are employed in beauty salons, electrolysis studios, scalp treatment and hair replacement clinics and other similar establishments and in cosmetic departments of retail establishments such as pharmacies and department stores, or they may be self-employed."
  },
  {
    "title": "Shoe repairers and shoemakers",
    "code": "63220",
    "teer": 3,
    "definition": "Shoe repairers repair footwear and shoemakers make specialized and custom shoes and boots. They are employed in shoe repair shops or custom shoemaking establishments, or they may be self-employed."
  },
  {
    "title": "Upholsterers",
    "code": "63221",
    "teer": 3,
    "definition": "Upholsterers cover furniture, fixtures and similar items with fabric, leather or other upholstery materials. They are employed by furniture, aircraft, motor vehicle and other manufacturing companies, furniture retail outlets and repair shops or they may be self-employed."
  },
  {
    "title": "Retail salespersons and visual merchandisers",
    "code": "64100",
    "teer": 4,
    "definition": "Retail salespersons sell, rent or lease a range of technical and non-technical goods and services directly to consumers. Visual merchandisers plan, create and implement windows and in-store displays. They are employed by stores and other retail businesses, as well as wholesale businesses that sell on a retail basis to the public."
  },
  {
    "title": "Sales and account representatives - wholesale trade (non-technical)",
    "code": "64101",
    "teer": 4,
    "definition": "Sales representatives in wholesale trade (non-technical), sell non-technical goods and services to retail, wholesale, commercial, industrial, professional and other clients domestically and internationally. They are employed by establishments that produce or provide goods and services such as petroleum companies, food, beverage and tobacco producers, clothing manufacturers, motor vehicles and parts manufacturers, hotels, business services firms, and transportation companies. Auctioneers are included in this unit group. Sales representatives in wholesale trade who are supervisors are also included in this unit group."
  },
  {
    "title": "Tailors, dressmakers, furriers and milliners",
    "code": "64200",
    "teer": 4,
    "definition": "Tailors, dressmakers and furriers make, alter and repair tailored clothing, dresses, coats and other made-to-measure garments. Milliners make, alter and repair hats. This unit group also includes alterationists who fit, alter and repair garments. They are employed by clothing retailers, clothing alteration shops, dry cleaners and garment manufacturing companies or they may be self-employed."
  },
  {
    "title": "Image, social and other personal consultants",
    "code": "64201",
    "teer": 4,
    "definition": "Image, social and other personal consultants advise clients on their personal appearance, speaking style, manners or other behaviours in order to improve personal or business images. They are employed by beauty salons, fashion boutiques, modelling schools, image consulting companies, weight loss centres or they may be self-employed."
  },
  {
    "title": "Maîtres d'hôtel and hosts/hostesses",
    "code": "64300",
    "teer": 4,
    "definition": "Maîtres d'hôtel and hosts/hostesses greet patrons and escort them to tables, and supervise and coordinate the activities of food and beverage servers. They are employed in restaurants, hotel dining rooms, private clubs, cocktail lounges and similar establishments."
  },
  {
    "title": "Bartenders",
    "code": "64301",
    "teer": 4,
    "definition": "Bartenders mix and serve alcoholic and non-alcoholic beverages. They are employed in restaurants, hotels, bars, taverns, private clubs, banquet halls and other licensed establishments. Supervisors of bartenders are included in this unit group."
  },
  {
    "title": "Travel counsellors",
    "code": "64310",
    "teer": 4,
    "definition": "Travel counsellors advise clients on travel options and tour packages, make bookings and reservations, prepare tickets and receive payment. They are employed in travel agencies, transportation and tourism firms and hotel chains."
  },
  {
    "title": "Pursers and flight attendants",
    "code": "64311",
    "teer": 4,
    "definition": "Pursers and flight attendants ensure the safety and comfort of passengers and crew members during flights. Ship pursers attend to the safety and comfort of passengers aboard ships. Airline pursers and flight attendants are employed by airline companies. Ship pursers are employed by tour boat or cruise ship companies."
  },
  {
    "title": "Airline ticket and service agents",
    "code": "64312",
    "teer": 4,
    "definition": "Airline ticket and service agents issue tickets, provide fare quotations, make reservations, conduct passenger check-in, trace missing baggage, arrange for cargo shipments and perform other related customer service duties to assist airline passengers. They are employed by airline companies."
  },
  {
    "title": "Ground and water transport ticket agents, cargo service representatives and related clerks",
    "code": "64313",
    "teer": 4,
    "definition": "Ground and water transport ticket agents, cargo service representatives and related clerks, quote fares and rates, make reservations, issue tickets, process cargo shipments, check baggage and perform other related customer service duties to assist travellers. They are employed by bus and railway companies, freight forwarding and shipping companies, boat cruise operators and other public transit establishments and by travel wholesalers."
  },
  {
    "title": "Hotel front desk clerks",
    "code": "64314",
    "teer": 4,
    "definition": "Hotel front desk clerks make room reservations, provide information and services to guests and receive payment for services. They are employed by hotels, motels and resorts."
  },
  {
    "title": "Tour and travel guides",
    "code": "64320",
    "teer": 4,
    "definition": "Tour and travel guides escort individuals and groups on trips, on sightseeing tours of cities and on tours of historical sites and establishments such as famous buildings, manufacturing plants, cathedrals and theme parks. They also provide descriptions and background information on interesting features. They are employed by tour operators, resorts and other establishments or may be self-employed."
  },
  {
    "title": "Casino workers",
    "code": "64321",
    "teer": 4,
    "definition": "Casino workers operate gaming tables, assist patrons using slot machines, accept keno wagers, pay out winning bets and jackpots and collect losing bets. They are employed by casinos."
  },
  {
    "title": "Outdoor sport and recreational guides",
    "code": "64322",
    "teer": 4,
    "definition": "Outdoor sport and recreational guides organize and conduct trips or expeditions for sports enthusiasts, adventurers, tourists and resort guests. They are employed by private companies and resorts or may be self-employed."
  },
  {
    "title": "Customer services representatives - financial institutions",
    "code": "64400",
    "teer": 4,
    "definition": "Customer services representatives in financial institutions process customers' financial transactions and provide information on related banking products and services. They are employed by banks, trust companies, credit unions and similar financial institutions."
  },
  {
    "title": "Postal services representatives",
    "code": "64401",
    "teer": 4,
    "definition": "Postal services representatives serve customers and record transactions at sales counters and postal wickets. They maintain inventory and order supplies in post offices and internal mail rooms. They are employed by Canada Post Corporation, courier and parcel express companies and establishments throughout the public and private sectors."
  },
  {
    "title": "Other customer and information services representatives",
    "code": "64409",
    "teer": 4,
    "definition": "Other customer and information services representatives answer enquiries, provide information regarding an establishment's goods, services and policies and provide customer services such as receiving payments and processing requests for services. They are employed by retail establishments, contact centres, insurance, telecommunications and utility companies and other establishments throughout the public and private sectors."
  },
  {
    "title": "Security guards and related security service occupations",
    "code": "64410",
    "teer": 4,
    "definition": "Security guards and workers in related security service occupations guard and implement security measures to protect property against theft, vandalism and fire; to control access to establishments; to maintain order and enforce regulations at public events and within establishments; to perform screening of passengers, luggage or cargo; to conduct private investigations for clients or employers and to provide other protective services not elsewhere classified. They are employed by public or private security agencies, residential complexes, educational, cultural, financial and health institutions, retail establishments, investigation service companies, transportation facilities, and organizations throughout the public and private sectors, or they may be self-employed."
  },
  {
    "title": "Cashiers",
    "code": "65100",
    "teer": 5,
    "definition": "Cashiers operate cash registers, optical price scanners, computers or other equipment to record and accept payment for the purchase of goods, services and admissions. They are employed in stores, restaurants, theatres, recreational and sports establishments, currency exchange booths, government offices, business offices and other service, retail and wholesale establishments."
  },
  {
    "title": "Service station attendants",
    "code": "65101",
    "teer": 5,
    "definition": "Service station attendants employed in automotive service stations sell fuel and other automotive products and perform such services as fuelling, cleaning, lubricating and performing minor repairs to motor vehicles. Those employed in marinas sell fuel, rent boats and related equipment, and maintain marina facilities."
  },
  {
    "title": "Store shelf stockers, clerks and order fillers",
    "code": "65102",
    "teer": 5,
    "definition": "Store shelf stockers, clerks and order fillers pack customers' purchases, price items, stock shelves with merchandise, and fill online, mail and telephone orders. They are employed in retail establishments, such as grocery, hardware and department stores, and in warehouses."
  },
  {
    "title": "Other sales related occupations",
    "code": "65109",
    "teer": 5,
    "definition": "Workers in other sales related occupations sell goods or services during home demonstrations or by telephone soliciting, retail exhibitions or street vending. They are employed by a wide range of retail and wholesale establishments, manufacturers, telemarketing companies and call centres, or they may be self-employed."
  },
  {
    "title": "Food and beverage servers",
    "code": "65200",
    "teer": 5,
    "definition": "Food and beverage servers take patrons' food and beverage orders and serve orders to patrons. They are employed in restaurants, hotels, bars, taverns, private clubs, banquet halls and similar establishments."
  },
  {
    "title": "Food counter attendants, kitchen helpers and related support occupations",
    "code": "65201",
    "teer": 5,
    "definition": "Food counter attendants and food preparers prepare, heat and finish cooking simple food items and serve customers at food counters. Kitchen helpers, food service helpers and dishwashers clear tables, clean kitchen areas, wash dishes, and perform various other activities to assist workers who prepare or serve food and beverages. They are employed by restaurants, cafés, hotels, fast food outlets, cafeterias, hospitals and other establishments."
  },
  {
    "title": "Meat cutters and fishmongers - retail and wholesale",
    "code": "65202",
    "teer": 5,
    "definition": "Meat cutters and fishmongers prepare and package pieces of meat, poultry and fish that are sold by food retailers or wholesalers. They use tools to cut, trim and package meat, poultry and fish on a daily basis. They are employed in grocery stores, fish stores, or they may be self-employed."
  },
  {
    "title": "Support occupations in accommodation, travel and facilities set-up services",
    "code": "65210",
    "teer": 5,
    "definition": "Workers in support occupations in accommodation, travel and facilities set-up services escort guests to their rooms, carry travellers' luggage at airports, in railway stations and aboard ships, clean and maintain public areas and passengers' rooms aboard ships and trains, and set up rooms and associated furnishings, commercial displays, exhibits, equipment and booths in facilities and establishments. They are employed by hotels, conference centres, retail establishments, passenger transport companies and throughout the private and public sectors."
  },
  {
    "title": "Operators and attendants in amusement, recreation and sport",
    "code": "65211",
    "teer": 5,
    "definition": "Operators and attendants in amusement, recreation and sport assist patrons, collect tickets and fees and supervise the use of recreational and sports equipment. They are employed by amusement parks, fairs, exhibitions, carnivals, arenas, billiard parlours, bowling alleys, golf courses, ski centres, tennis clubs, campgrounds and other recreational and sports facilities."
  },
  {
    "title": "Pet groomers and animal care workers",
    "code": "65220",
    "teer": 5,
    "definition": "Animal care workers feed, handle, train and groom animals and assist veterinarians, animal health technologists and technicians and animal breeders. Pet groomers clip coats, bathe and otherwise groom pets. They are employed by animal hospitals and clinics, animal shelters, breeding and boarding kennels, zoos, laboratories, retail pet shops, dog training schools, pet grooming establishments, or may be self-employed."
  },
  {
    "title": "Other support occupations in personal services",
    "code": "65229",
    "teer": 5,
    "definition": "Workers in other support occupations in personal services provide psychic consulting, fortune-telling, astrological services and other personal services. They are employed by call centres and personal service establishments, or are self-employed."
  },
  {
    "title": "Light duty cleaners",
    "code": "65310",
    "teer": 5,
    "definition": "Light duty cleaners clean lobbies, hallways, offices and rooms of hotels, motels, resorts, hospitals, schools, office buildings and private residences. They are employed by hotels, motels, resorts, recreational facilities, hospitals and other institutions, building management companies, cleaning service companies and private individuals. Housekeepers perform housekeeping duties in residential, and institutional settings."
  },
  {
    "title": "Specialized cleaners",
    "code": "65311",
    "teer": 5,
    "definition": "Specialized cleaners clean and refurbish building exteriors, carpets, chimneys, industrial equipment, ventilation systems, windows and other surfaces, using specialized equipment and techniques. They are employed by specialized cleaning service companies or they may be self-employed."
  },
  {
    "title": "Janitors, caretakers and heavy-duty cleaners",
    "code": "65312",
    "teer": 5,
    "definition": "Janitors, caretakers and heavy-duty cleaners clean and maintain the interior and exterior of commercial, institutional and residential buildings and their surrounding grounds. They are employed by office and apartment building management companies, condominium corporations, educational institutions, health care facilities, recreational and shopping facilities, religious, industrial and other establishments."
  },
  {
    "title": "Dry cleaning, laundry and related occupations",
    "code": "65320",
    "teer": 5,
    "definition": "Dry cleaning and laundry machine operators operate machines to dry-clean or launder garments and other articles. Dry cleaning and laundry inspectors and assemblers check finished garments and other articles to ensure that they meet required standards for dry-cleaning, laundering and pressing, and assemble and bag finished garments and other articles. This unit group also includes workers who iron, press or otherwise finish garments and household articles. They are employed in dry cleaning, laundry and fur cleaning establishments, and in the laundries of hotels, hospitals and other institutions."
  },
  {
    "title": "Other service support occupations",
    "code": "65329",
    "teer": 5,
    "definition": "Workers in other service support occupations perform a range of services. They are employed in a wide variety of establishments: places of employment are usually indicated in the job title."
  },
  {
    "title": "Construction managers",
    "code": "70010",
    "teer": 0,
    "definition": "Construction managers plan, organize, direct, control and evaluate the activities of a construction company or a construction department within a company, under the direction of a general manager or other senior manager. They are employed by residential, commercial and industrial construction companies and by construction departments of companies outside the construction industry."
  },
  {
    "title": "Home building and renovation managers",
    "code": "70011",
    "teer": 0,
    "definition": "Home building managers own, operate and manage companies engaged in the construction of new residential homes. Home renovation managers own, operate and manage companies engaged in the renovation of existing residential homes."
  },
  {
    "title": "Facility operation and maintenance managers",
    "code": "70012",
    "teer": 0,
    "definition": "Facility operation managers plan, organize, direct, control and evaluate the operations of commercial, transportation and recreational facilities and the included real estate. Facility operation managers are employed by a wide range of establishments, such as airports, harbours, canals, shopping centres, convention centres, warehouses and recreational facilities. Maintenance managers plan, organize, direct, control and evaluate the maintenance department within commercial, industrial, institutional, recreational and other facilities. Maintenance managers are employed by a wide range of establishments, such as office buildings, shopping centres, airports, harbours, warehouses, grain terminals, universities, schools and sports facilities, and by the maintenance and mechanical engineering departments of manufacturing and other industrial establishments."
  },
  {
    "title": "Managers in transportation",
    "code": "70020",
    "teer": 0,
    "definition": "Managers in transportation operations plan, organize, direct, control and evaluate the operations of transportation companies such as railways, airlines, bus lines, municipal transit systems, shipping lines and trucking companies, under the direction of a general manager or another senior manager. Managers in transportation freight traffic plan, organize, direct, control and evaluate companies or departments responsible for the transportation and movement of goods, under the direction of a general manager or another senior manager. They are employed by transportation, freight forwarding and shipping companies and by transportation departments of companies in retail and manufacturing sectors and utilities."
  },
  {
    "title": "Postal and courier services managers",
    "code": "70021",
    "teer": 0,
    "definition": "Postal and courier services managers plan, organize, direct, control and evaluate the activities and operations in postal facilities and in establishments that provide courier services. They are employed by Canada Post Corporation and by courier companies."
  },
  {
    "title": "Contractors and supervisors, machining, metal forming, shaping and erecting trades and related occupations",
    "code": "72010",
    "teer": 2,
    "definition": "Contractors and supervisors in machining, metal forming, shaping and erecting trades and related occupations supervise and coordinate the activities of workers classified in the following unit groups: Machinists and machining and tooling inspectors (72100), Tool and die makers (72101), Sheet metal workers (72102), Boilermakers (72103), Structural metal and platework fabricators and fitters (72104), Ironworkers (72105), Welders and related machine operators (72106) and Machining tool operators (94106). They are employed by structural, platework and related metal products fabrication, manufacturing and erecting companies and machine shops. Contractors may be self-employed."
  },
  {
    "title": "Contractors and supervisors, electrical trades and telecommunications occupations",
    "code": "72011",
    "teer": 2,
    "definition": "Contractors and supervisors in electrical trades and telecommunications occupations supervise and coordinate the activities of workers classified in the following unit groups: Electricians (72200), Industrial electricians (72201), Power system electricians (72202), Electrical power line and cable workers (72203), Telecommunications line and cable installers and repairers (72204) and Telecommunications equipment installation and cable television service technicians (72205). They are employed in a wide range of establishments; places of employment are indicated in the above unit group descriptions. Contractors may be self-employed."
  },
  {
    "title": "Contractors and supervisors, pipefitting trades",
    "code": "72012",
    "teer": 2,
    "definition": "Contractors and supervisors in pipefitting trades supervise and coordinate the activities of workers classified in the following unit groups: Plumbers (72300), Steamfitters, pipefitters and sprinkler system installers (72301) and Gas fitters (72302). They are employed by construction companies, mechanical, plumbing and pipefitting trade contractors and maintenance departments of industrial, commercial and manufacturing establishments. Contractors may be self-employed."
  },
  {
    "title": "Contractors and supervisors, carpentry trades",
    "code": "72013",
    "teer": 2,
    "definition": "Contractors and supervisors in carpentry trades supervise and coordinate the activities of workers classified in the following unit groups: Carpenters (72310) and Cabinetmakers (72311). They are employed by construction companies, carpentry contractors, maintenance departments of industrial establishments, and custom furniture and fixture manufacturing or repair companies. Contractors may be self-employed."
  },
  {
    "title": "Contractors and supervisors, other construction trades, installers, repairers and servicers",
    "code": "72014",
    "teer": 2,
    "definition": "Contractors and supervisors, other construction trades, installers, repairers and servicers supervise and coordinate the activities of various tradespersons, installers, repairers and servicers classified in the following minor groups: Bricklayers and Insulators (7232), Concrete finishers, tilesetters and plasterers (7310), Roofers, Glaziers, Painters, decorators and floor covering installers (7311) and Building maintenance installers, servicers and repairers (7320). They are employed by a wide range of establishments; places of employment are indicated in the unit group descriptions. Contractors may be self-employed. This unit group also includes prefabricated product installation and service contractors and proprietors of some repair and service establishments."
  },
  {
    "title": "Contractors and supervisors, mechanic trades",
    "code": "72020",
    "teer": 2,
    "definition": "Contractors and supervisors in mechanic trades supervise and coordinate the activities of workers classified in unit groups within the following minor groups: Machinery and transportation equipment mechanics (except motor vehicle) (7240), Automotive service technicians (7241) and Small motor, engine and equipment mechanics and related repairers (including electrical components) (7242). They are employed in a wide range of establishments; places of employment are indicated in the unit group descriptions of the above minor groups. Contractors may be self-employed."
  },
  {
    "title": "Contractors and supervisors, heavy equipment operator crews",
    "code": "72021",
    "teer": 2,
    "definition": "Contractors and supervisors of heavy equipment operator crews supervise and coordinate the activities of workers classified in the following unit groups: Crane operators (72500), Water well drillers (72501), Heavy equipment operators (73400), Drillers and blasters - surface mining, quarrying and construction (73402), Railway yard and track maintenance workers (74200), Public works maintenance equipment operators and related workers (74205), Longshore workers (75100), Material handlers (75101), and Public works and maintenance labourers (75212). They are employed in a wide range of establishments; places of employment are indicated in the above unit group descriptions. Contractors may be self-employed."
  },
  {
    "title": "Supervisors, printing and related occupations",
    "code": "72022",
    "teer": 2,
    "definition": "Supervisors of workers in printing and related occupations supervise and coordinate the activities of workers who produce camera work and printing plates and cylinders, process film, print text and illustrations on paper, metal and other material, and bind and finish printed products. They are employed by companies that specialize in commercial printing or one of its components, such as binding or colour reproduction, in combined printing and publishing companies, such as newspapers and magazines, and in various establishments in both the public and private sectors that have in-house printing departments."
  },
  {
    "title": "Supervisors, railway transport operations",
    "code": "72023",
    "teer": 2,
    "definition": "Supervisors of railway transport operations supervise and coordinate the activities of railway and yard locomotive engineers, railway yard workers and railway labourers. They are employed by railway transport companies."
  },
  {
    "title": "Supervisors, motor transport and other ground transit operators",
    "code": "72024",
    "teer": 2,
    "definition": "Supervisors of motor transport and other ground transit operators supervise and coordinate activities of truck drivers, bus drivers, delivery drivers, subway and other transit operators, chauffeurs and taxi and limousine drivers. This unit group also includes bus dispatchers who coordinate the activities of transit system bus drivers and subway traffic controllers who operate and monitor signal and track switch control panels. They are employed by motor transportation and ground transit companies and by urban transit systems."
  },
  {
    "title": "Supervisors, mail and message distribution occupations",
    "code": "72025",
    "teer": 2,
    "definition": "Supervisors in mail and message distribution supervise and coordinate the activities of workers in the following unit groups: Postal services representatives (64401), Letter carriers (74101), Mail and parcel sorters and related occupations (74100) and Couriers and messengers (74102). They are employed by Canada Post Corporation, courier companies, governments and large corporations."
  },
  {
    "title": "Machinists and machining and tooling inspectors",
    "code": "72100",
    "teer": 2,
    "definition": "Machinists set up and operate a variety of machine tools to cut or grind metal, plastic or other materials to make or modify parts or products with precise dimensions. Machining and tooling inspectors inspect machined parts and tooling in order to maintain quality control standards. They are employed by machinery, equipment, motor vehicle, automotive parts, aircraft and other metal products manufacturing companies and by machine shops. Apprentices are also included in this unit group."
  },
  {
    "title": "Tool and die makers",
    "code": "72101",
    "teer": 2,
    "definition": "Tool and die makers make, repair and modify custom-made, prototype or special tools, dies, jigs, fixtures and gauges using various metals, alloys and plastics which require precise dimensions. They are employed primarily in manufacturing industries such as automobile, aircraft, metal fabrication, electrical machinery and plastics, and in tool and die, mould making and machine shops. This unit group also includes metal patternmakers and metal mould makers. Apprentices are also included in this unit group."
  },
  {
    "title": "Sheet metal workers",
    "code": "72102",
    "teer": 2,
    "definition": "Sheet metal workers fabricate, assemble, install and repair sheet metal products. They are employed by sheet metal fabrication shops, sheet metal products manufacturing companies, sheet metal work contractors and various industrial sectors. Apprentices are also included in this unit group."
  },
  {
    "title": "Boilermakers",
    "code": "72103",
    "teer": 2,
    "definition": "Boilermakers fabricate, assemble, erect, test, maintain and repair boilers, vessels, tanks, towers, heat exchangers and other heavy-metal structures. They are employed in boiler fabrication, manufacturing, shipbuilding, construction, electric power generation and similar industrial establishments. Apprentices are also included in this unit group."
  },
  {
    "title": "Structural metal and platework fabricators and fitters",
    "code": "72104",
    "teer": 2,
    "definition": "Structural metal and platework fabricators and fitters fabricate, assemble, fit and install steel or other metal components for buildings, bridges, tanks, towers, boilers, pressure vessels and other similar structures and products. They are employed in structural steel, boiler and platework fabrication plants and by heavy machinery manufacturing and shipbuilding companies. Apprentices are also included in this unit group."
  },
  {
    "title": "Ironworkers",
    "code": "72105",
    "teer": 2,
    "definition": "Ironworkers fabricate, erect, hoist, install, repair and service structural ironwork, precast concrete, concrete reinforcing materials, curtain walls, ornamental iron and other metals used in the construction of buildings, bridges, highways, dams and other structures and equipment. They are employed by construction ironwork contractors. Apprentices are also included in this unit group."
  },
  {
    "title": "Welders and related machine operators",
    "code": "72106",
    "teer": 2,
    "definition": "Welders operate welding equipment to weld ferrous and non-ferrous metals. This unit group also includes machine operators who operate previously set up production welding, brazing and soldering equipment. They are employed by companies that manufacture structural steel and platework, boilers, heavy machinery, aircraft and ships and other metal products, and by welding contractors and welding shops, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Electricians (except industrial and power system)",
    "code": "72200",
    "teer": 2,
    "definition": "Electricians (except industrial and power system) lay out, assemble, install, test, troubleshoot and repair electrical wiring, fixtures, control devices and related equipment in buildings and other structures. They are employed by electrical contractors and maintenance departments of buildings and other establishments, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Industrial electricians",
    "code": "72201",
    "teer": 2,
    "definition": "Industrial electricians install, maintain, test, troubleshoot and repair industrial electrical equipment and associated electrical and electronic controls. They are employed by electrical contractors and maintenance departments of factories, plants, mines, shipyards and other industrial establishments. Apprentices are also included in this unit group."
  },
  {
    "title": "Power system electricians",
    "code": "72202",
    "teer": 2,
    "definition": "Power system electricians install, maintain, test and repair electrical power generation, transmission and distribution system equipment and apparatus. They are employed by electric power generation, transmission and distribution companies. Apprentices are also included in this unit group."
  },
  {
    "title": "Electrical power line and cable workers",
    "code": "72203",
    "teer": 2,
    "definition": "Electrical power line and cable workers construct, maintain and repair overhead and underground electrical power transmission and distribution systems. They are employed by electric power generation, transmission and distribution companies, electrical contractors and public utility commissions. Apprentices are also included in this unit group."
  },
  {
    "title": "Telecommunications line and cable installers and repairers",
    "code": "72204",
    "teer": 2,
    "definition": "Telecommunications line and cable installers and repairers install, repair and maintain telecommunication lines and cables, cable television transmission and distribution systems and associated hardware. They are employed by cable television, telephone and other telecommunications service companies. Apprentices are also included in this unit group."
  },
  {
    "title": "Telecommunications equipment installation and cable television service technicians",
    "code": "72205",
    "teer": 2,
    "definition": "Telecommunications equipment installation and cable television service technicians install, test, maintain and repair cable and satellite television, internet signal and associate equipment, telephones, telephone switching equipment and other telecommunications equipment related to transmission and processing of voice, video signals and other data over a variety of media including fibre optics, microwave, radio and satellite. They are employed by cable and satellite television, telephone and other telecommunications transmission service companies. Apprentices are also included in this unit group."
  },
  {
    "title": "Plumbers",
    "code": "72300",
    "teer": 2,
    "definition": "Plumbers install, repair and maintain pipes, fixtures and other plumbing equipment used for water distribution and waste water disposal in residential, commercial and industrial buildings. They are employed in maintenance departments of factories, plants and similar establishments, by plumbing contractors, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Steamfitters, pipefitters and sprinkler system installers",
    "code": "72301",
    "teer": 2,
    "definition": "Steamfitters and pipefitters lay out, assemble, fabricate, maintain, troubleshoot and repair piping systems carrying water, steam, chemicals and fuel in heating, cooling, lubricating and other process piping systems. Sprinkler system installers fabricate, install, test, maintain and repair water, foam, carbon dioxide and dry chemical sprinkler systems in buildings for fire protection purposes. Steamfitters, pipefitters and sprinkler system installers are employed in maintenance departments of factories, plants and similar establishments, and by pipefitting and sprinkler system contractors, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Gas fitters",
    "code": "72302",
    "teer": 2,
    "definition": "Gas fitters install, inspect, repair and maintain gas lines and gas equipment such as meters, regulators and heating units in residential, commercial and industrial establishments. They are employed by gas utility companies and gas servicing companies. Apprentices are also included in this unit group."
  },
  {
    "title": "Carpenters",
    "code": "72310",
    "teer": 2,
    "definition": "Carpenters construct, erect, install, maintain and repair structures and components of structures made of wood, wood substitutes, lightweight steel and other materials. They are employed by construction companies, carpentry contractors, and maintenance departments of factories, plants and other establishments, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Cabinetmakers",
    "code": "72311",
    "teer": 2,
    "definition": "Cabinetmakers use a variety of woods and laminates to construct and repair wooden cabinets, furniture, fixtures and related products. They are employed by furniture manufacturing or repair companies, construction companies and cabinetmaking contractors, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Bricklayers",
    "code": "72320",
    "teer": 2,
    "definition": "Bricklayers lay bricks, concrete blocks, stone and other similar materials to construct or repair walls, arches, chimneys, fireplaces and other structures in accordance with blueprints and specifications. They are employed by construction companies and bricklaying contractors or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Insulators",
    "code": "72321",
    "teer": 2,
    "definition": "Insulators apply insulation materials to plumbing, air-handling, heating, cooling and refrigeration systems, piping equipment and pressure vessels, and walls, floors and ceilings of buildings and other structures, to prevent or reduce the passage of heat, cold, sound or fire. They are employed by construction companies and insulation contractors, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Construction millwrights and industrial mechanics",
    "code": "72400",
    "teer": 2,
    "definition": "Construction millwrights and industrial mechanics install, maintain, troubleshoot, overhaul and repair stationary industrial machinery and mechanical equipment. This unit group includes industrial textile machinery mechanics and repairers. Construction millwrights are employed by millwrighting contractors. Industrial mechanics are employed in manufacturing plants, utilities and other industrial establishments. Apprentices are also included in this unit group."
  },
  {
    "title": "Heavy-duty equipment mechanics",
    "code": "72401",
    "teer": 2,
    "definition": "Heavy-duty equipment mechanics repair, troubleshoot, adjust, overhaul and maintain mobile heavy-duty equipment used in construction, transportation, forestry, mining, oil and gas, material handling, landscaping, land clearing, farming and similar activities. They are employed by companies which own and operate heavy equipment, and by heavy equipment dealers, rental and service establishments, railway transport companies and urban transit systems. Apprentices are also included in this unit group."
  },
  {
    "title": "Heating, refrigeration and air conditioning mechanics",
    "code": "72402",
    "teer": 2,
    "definition": "Heating, refrigeration and air conditioning mechanics install, maintain, repair and overhaul residential central air conditioning systems, commercial and industrial refrigeration and air conditioning systems and combined heating, ventilation and cooling systems. They are employed by heating, refrigeration and air conditioning installation contractors, various industrial settings, food wholesalers, engineering firms and retail and servicing establishments. Transport refrigeration mechanics are included in this unit group. Apprentices are also included in this unit group."
  },
  {
    "title": "Railway carmen/women",
    "code": "72403",
    "teer": 2,
    "definition": "Railway carmen/women inspect, troubleshoot, maintain and repair structural and mechanical components of railway freight, passenger and urban transit rail cars. They are employed by railway transport companies and urban transit systems. Apprentices are also included in this unit group."
  },
  {
    "title": "Aircraft mechanics and aircraft inspectors",
    "code": "72404",
    "teer": 2,
    "definition": "Aircraft mechanics maintain, repair, overhaul, modify and test aircraft structural, mechanical and hydraulic systems. Aircraft inspectors inspect aircraft and aircraft systems following manufacture, modification, maintenance, repair or overhaul. Aircraft mechanics and aircraft inspectors are employed by aircraft manufacturing, maintenance, repair and overhaul establishments, and by airlines and other aircraft operators. Apprentices are also included in this unit group."
  },
  {
    "title": "Machine fitters",
    "code": "72405",
    "teer": 2,
    "definition": "Machine fitters fit, assemble and otherwise build heavy industrial machinery and transportation equipment, including aircraft engines. They are employed in industrial machinery and transportation equipment manufacturing industries."
  },
  {
    "title": "Elevator constructors and mechanics",
    "code": "72406",
    "teer": 2,
    "definition": "Elevator constructors and mechanics assemble, install, maintain and repair freight and passenger elevators, escalators, moving walkways and other related equipment. They are employed by elevator construction and maintenance companies."
  },
  {
    "title": "Automotive service technicians, truck and bus mechanics and mechanical repairers",
    "code": "72410",
    "teer": 2,
    "definition": "Automotive service technicians, truck and bus mechanics and mechanical repairers inspect, diagnose, repair and service mechanical, electrical and electronic systems and components of cars, buses, and light and commercial transport trucks. They are employed by motor vehicle dealers, garages, truck and trailer dealerships, fleet maintenance companies, and service stations, automotive specialty shops, transportation companies and retail establishments which have automotive service shops. This unit group also includes mechanical repairers who perform major repairs and replacement of mechanical units on newly assembled motor vehicles. They are employed by motor vehicle manufacturing companies. Apprentices are also included in this unit group."
  },
  {
    "title": "Auto body collision, refinishing and glass technicians and damage repair estimators",
    "code": "72411",
    "teer": 2,
    "definition": "Auto body collision, refinishing and glass technicians repair and restore damaged motor vehicle body parts and interior finishing; repaint body surfaces; repair and/or replace automotive glass and repair defective automobile body parts and damage to the bodies of newly assembled cars. Damage repair estimators assess the degree of damage to a vehicle and estimate the cost of parts and labour. They are employed by automobile dealerships, automobile body repair shops, automobile appraisal centres and by motor vehicle manufacturers. This unit group also includes metal repairers. Apprentices are also included in this unit group."
  },
  {
    "title": "Oil and solid fuel heating mechanics",
    "code": "72420",
    "teer": 2,
    "definition": "Oil and solid fuel heating mechanics install and maintain oil, coal and wood heating systems in residential and commercial buildings. They are employed by heating systems installation and service companies. Apprentices are also included in this unit group."
  },
  {
    "title": "Appliance servicers and repairers",
    "code": "72421",
    "teer": 2,
    "definition": "Appliance servicers and repairers service and repair domestic and commercial appliances. They are employed by repair shops, appliance service companies and repair departments of retail and wholesale establishments, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Electrical mechanics",
    "code": "72422",
    "teer": 2,
    "definition": "Electrical mechanics maintain, test, rebuild and repair electric motors, transformers, switchgear and other electrical apparatus. They are employed by independent electrical repair shops, service shops of electrical equipment manufacturers and maintenance departments of manufacturing companies. Apprentices are also included in this unit group."
  },
  {
    "title": "Motorcycle, all-terrain vehicle and other related mechanics",
    "code": "72423",
    "teer": 2,
    "definition": "Motorcycle, all-terrain vehicle and other related mechanics test, repair and service motorcycles, motor scooters, snowmobiles, outboard motors, forklifts and all-terrain vehicles. They are employed by service shops of motorcycle dealers and retailers and by independent service establishments. Apprentices are also included in this unit group."
  },
  {
    "title": "Other small engine and small equipment repairers",
    "code": "72429",
    "teer": 2,
    "definition": "Other small engine and small equipment repairers test, repair and service small gasoline and diesel-powered engines and equipment, such as garden tractors, lawn mowers and other related equipment. They are employed by dealer service shops and by independent service establishments. Apprentices are also included in this unit group."
  },
  {
    "title": "Crane operators",
    "code": "72500",
    "teer": 2,
    "definition": "Crane operators operate cranes or draglines to lift, move, position or place machinery, equipment and other large objects at construction or industrial sites, ports, railway yards, surface mines and other similar locations. They are employed by construction, industrial, mining, cargo handling and railway companies. Apprentices are also included in this unit group."
  },
  {
    "title": "Water well drillers",
    "code": "72501",
    "teer": 2,
    "definition": "Water well drillers operate a variety of mobile water well drilling rigs and equipment to drill and monitor residential, commercial and industrial water wells. They are employed by water well drilling contractors and governments, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Air pilots, flight engineers and flying instructors",
    "code": "72600",
    "teer": 2,
    "definition": "Air pilots fly fixed wing aircraft and helicopters to provide air transportation and other services such as crop spraying and aerial surveying. Flight engineers assist air pilots with monitoring, troubleshooting and maintenance of aircraft systems and with pre- and post-flight inspections. Flying instructors teach flying techniques and procedures to student and licensed pilots. Air pilots, flight engineers and flight instructors are employed by airline and air freight companies, flying schools and by other public and private sector aircraft operators."
  },
  {
    "title": "Air traffic controllers and related occupations",
    "code": "72601",
    "teer": 2,
    "definition": "Air traffic controllers direct air traffic within assigned airspace, and control moving aircraft and service vehicles at airports. Flight service specialists provide pilots with flight information essential to aviation safety. Flight dispatchers authorize airline flights over assigned routes. Air traffic controllers and flight service specialists are employed by NAV Canada and the Canadian Forces. Flight dispatchers are employed by airline and air services companies and by the Canadian Forces."
  },
  {
    "title": "Deck officers, water transport",
    "code": "72602",
    "teer": 2,
    "definition": "Deck officers, water transport, operate and command ships or self-propelled vessels to transport passengers and cargo on oceans and coastal and inland waters, and supervise and coordinate the activities of deck crews. This unit group also includes Canadian Coast Guard deck officers. They are employed by marine transportation companies and federal government departments. Apprentices are also included in this unit group."
  },
  {
    "title": "Engineer officers, water transport",
    "code": "72603",
    "teer": 2,
    "definition": "Engineer officers in water transport, operate and maintain main engines, machinery and auxiliary equipment aboard ships and other self-propelled vessels, and supervise and coordinate the activities of engine room crews. They are employed by marine transportation companies and federal government departments. Apprentices are also included in this unit group."
  },
  {
    "title": "Railway traffic controllers and marine traffic regulators",
    "code": "72604",
    "teer": 2,
    "definition": "Railway traffic controllers coordinate passenger and freight train traffic on railways. They are employed by rail transport companies. Marine traffic regulators monitor and regulate coastal and inland marine traffic within assigned waterways. They are employed by port, harbour, canal and lock authorities and by the Canadian Coast Guard."
  },
  {
    "title": "Other technical trades and related occupations",
    "code": "72999",
    "teer": 2,
    "definition": "Workers in other trades occupations repair, service, install, calibrate or fabricate a variety of products. This unit group also includes commercial divers. They are employed by a wide range of establishments, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Concrete finishers",
    "code": "73100",
    "teer": 3,
    "definition": "Concrete finishers smooth and finish freshly poured concrete, apply curing or surface treatments and install, maintain and restore various masonry structures such as foundations, floors, ceilings, sidewalks, roads, patios and high-rise buildings. They are employed by construction companies, cement and concrete contractors and manufacturers of precast concrete products, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Tilesetters",
    "code": "73101",
    "teer": 3,
    "definition": "Tilesetters cover interior and exterior walls, floors and ceilings with ceramic, marble and quarry tile, mosaics or terrazzo. They are employed by construction companies and masonry contractors, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Plasterers, drywall installers and finishers and lathers",
    "code": "73102",
    "teer": 3,
    "definition": "Plasterers apply finish, and maintain and restore plaster or similar materials, on interior and exterior walls, ceilings and building partitions to produce plain or decorative surfaces. Drywall installers and finishers install and finish drywall sheets and various types of ceiling systems. Lathers install support framework for ceiling systems, interior and exterior walls and building partitions. They are employed by construction companies and by plastering, drywalling and lathing contractors, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Roofers and shinglers",
    "code": "73110",
    "teer": 3,
    "definition": "Roofers install, repair or replace flat roofs as well as shingles, shakes or other roofing tiles on sloped roofs. Shinglers install and replace shingles, tiles and similar coverings on sloped roofs. They are employed by roofing and general contractors, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Glaziers",
    "code": "73111",
    "teer": 3,
    "definition": "Glaziers cut, fit, install and replace glass in residential, commercial and industrial buildings, on exterior walls of buildings and other structures and in furniture and other products. They are employed by construction glass installation contractors, retail service and repair shops and glass fabrication shops, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Painters and decorators (except interior decorators)",
    "code": "73112",
    "teer": 3,
    "definition": "Painters and decorators apply paint, wallpaper and other finishes to interior and exterior surfaces of buildings and other structures. They are employed by construction companies, painting contractors and building maintenance contractors, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Floor covering installers",
    "code": "73113",
    "teer": 3,
    "definition": "Floor covering installers install carpet, wood, linoleum, vinyl and other resilient floor coverings in residential, commercial, industrial and institutional buildings. They are employed by construction companies, floor-covering contractors and carpet outlets, or they may be self-employed. Apprentices are also included in this unit group."
  },
  {
    "title": "Residential and commercial installers and servicers",
    "code": "73200",
    "teer": 3,
    "definition": "Residential and commercial installers and servicers install and service a wide variety of interior and exterior prefabricated products such as windows, doors, electrical appliances, water heaters, fences, play structures and septic and irrigation systems at residential, commercial or institutional properties. They are employed by companies specializing in specific product installation and service."
  },
  {
    "title": "General building maintenance workers and building superintendents",
    "code": "73201",
    "teer": 3,
    "definition": "General building maintenance workers perform tasks related to the general maintenance of buildings. They execute minor repair work, maintain equipment and installations and perform preventive inspection of systems relating to building mechanics. Building superintendents employed in large establishments are responsible for the operation of the establishment and may also supervise other workers. They are employed by office and apartment building management companies, condominium corporations, educational institutions, health care facilities, recreational and shopping facilities, religious, industrial and other establishments."
  },
  {
    "title": "Pest controllers and fumigators",
    "code": "73202",
    "teer": 3,
    "definition": "Pest controllers and fumigators inspect buildings and outside areas for pest infestation and spray chemical treatments to kill noxious and destructive insects, rodents and other pests or set cage traps to capture and remove animals. They are employed by pest control companies, or they may be self-employed."
  },
  {
    "title": "Other repairers and servicers",
    "code": "73209",
    "teer": 3,
    "definition": "Other repairers and servicers repair and service a wide variety of products, such as cameras, scales, musical instruments, coin machines, vending machines, sporting goods and other miscellaneous products and equipment. They are employed by product specialty repair shops and service establishments."
  },
  {
    "title": "Transport truck drivers",
    "code": "73300",
    "teer": 3,
    "definition": "Transport truck drivers drive straight trucks or tractor-trailers to transport freight. Long-haul truck drivers operate heavy trucks over urban, interurban, provincial and international routes, while short-haul and local transport truck drivers operate over urban and short interurban routes. They are employed by transportation, manufacturing, distribution and moving companies, and trucking employment service agencies, or they may be self-employed."
  },
  {
    "title": "Bus drivers, subway operators and other transit operators",
    "code": "73301",
    "teer": 3,
    "definition": "Bus drivers, subway operators and other transit operators drive buses and operate streetcars, subway trains and light rail transit vehicles to transport passengers on established routes. Bus drivers are employed by urban transit systems, school boards or transportation authorities and private transportation companies. Streetcar, subway and light rail transit operators are employed by urban transit systems."
  },
  {
    "title": "Railway and yard locomotive engineers",
    "code": "73310",
    "teer": 3,
    "definition": "Railway locomotive engineers operate railway locomotives to transport passengers and freight. They are employed by railway transport companies. Yard locomotive engineers operate locomotives within yards of railway, industrial or other establishments. They are employed by railway transport companies and industrial or commercial users of rail transport."
  },
  {
    "title": "Railway conductors and brakemen/women",
    "code": "73311",
    "teer": 3,
    "definition": "Railway conductors coordinate and supervise the activities of passenger and freight train crew members. Brakemen check train brakes and other systems and equipment prior to train run, and assist railway conductors in activities en route. They are employed by railway transport companies."
  },
  {
    "title": "Heavy equipment operators",
    "code": "73400",
    "teer": 3,
    "definition": "Heavy equipment operators operate heavy equipment used in the construction and maintenance of roads, bridges, airports, gas and oil pipelines, tunnels, buildings and other structures; in surface mining and quarrying activities; and in material handling work. They are employed by construction companies, heavy equipment contractors, public works departments and pipeline, logging, cargo-handling and other companies. Apprentices are also included in this unit group."
  },
  {
    "title": "Printing press operators",
    "code": "73401",
    "teer": 3,
    "definition": "Printing press operators set up and operate sheet and web-fed presses to print text, illustrations and designs on a wide variety of materials such as paper, plastic, glass, leather and metal. They are employed by commercial printing companies; newspapers, magazines, and other publishing companies; and establishments in the public and private sectors that have in-house printing departments. Apprentices are also included in this unit group."
  },
  {
    "title": "Drillers and blasters - surface mining, quarrying and construction",
    "code": "73402",
    "teer": 3,
    "definition": "Drillers and blasters in surface mining, quarrying and construction operate mobile drilling machines to bore blast holes in open-pit mines and quarries and to bore holes for blasting and for building foundations at construction sites. Blasters in this unit group fill blast holes with explosives and detonate explosives to dislodge coal, ore and rock or to demolish structures. They are employed by mining, quarrying and construction companies and by drilling and blasting contractors."
  },
  {
    "title": "Mail and parcel sorters and related occupations",
    "code": "74100",
    "teer": 4,
    "definition": "Mail and parcel sorters and workers in related occupations process and sort mail and parcels in post offices, mail processing plants, warehouses and internal mail rooms. They are employed by Canada Post Corporation, courier and parcel express companies and establishments throughout the public and private sectors."
  },
  {
    "title": "Letter carriers",
    "code": "74101",
    "teer": 4,
    "definition": "Letter carriers sort and deliver mail, record delivery of registered mail and collect money for cash-on-delivery parcels. They are employed by Canada Post Corporation."
  },
  {
    "title": "Couriers and messengers",
    "code": "74102",
    "teer": 4,
    "definition": "Couriers and messengers pick up and deliver letters, parcels, packages, messages and other items within and between establishments. They are employed by courier service companies and other establishments throughout the public and private sectors."
  },
  {
    "title": "Railway yard and track maintenance workers",
    "code": "74200",
    "teer": 4,
    "definition": "Railway yard workers regulate yard traffic, couple and uncouple trains and perform related yard activities. Railway track maintenance workers operate machines and equipment to lay, maintain and repair railway tracks. They are employed by railway transport companies."
  },
  {
    "title": "Water transport deck and engine room crew",
    "code": "74201",
    "teer": 4,
    "definition": "Water transport deck and engine room crew stand watch, operate and maintain deck equipment, perform other deck and bridge duties and assist ship engineer officers to operate, maintain and repair engines, machinery and auxiliary equipment aboard ships or self-propelled vessels. They are employed by marine transportation companies and federal government departments."
  },
  {
    "title": "Air transport ramp attendants",
    "code": "74202",
    "teer": 4,
    "definition": "Air transport ramp attendants operate ramp-servicing vehicles and equipment, handle cargo and baggage and perform other ground support duties at airports. They are employed by airline and air services companies and the federal government."
  },
  {
    "title": "Automotive and heavy truck and equipment parts installers and servicers",
    "code": "74203",
    "teer": 4,
    "definition": "Automotive and heavy truck and equipment parts installers and servicers install replacement automotive mechanical parts such as mufflers, exhaust pipes, shock absorbers, springs and radiators and perform routine maintenance service such as oil changes, lubrication and tire repairs on automobiles, trucks and heavy equipment. They are employed by automobile and truck service and repair shops, service departments of industrial establishments and construction, mining and logging companies."
  },
  {
    "title": "Utility maintenance workers",
    "code": "74204",
    "teer": 4,
    "definition": "Utility maintenance workers locate, repair, install and perform maintenance work to various equipment and facilities, such as water filtration and distribution plants, waste water treatment plants and power plants. They may also work on exterior and underground gas mains and distribution lines. They are employed by municipal, provincial and federal public works departments, private contractors under contract with government public works departments and gas distribution companies."
  },
  {
    "title": "Public works maintenance equipment operators and related workers",
    "code": "74205",
    "teer": 4,
    "definition": "Public works maintenance equipment operators and related workers operate vehicles and equipment to maintain streets, highways and sewer systems and operate trucks to collect garbage and recyclable materials. This unit group also includes workers who clear vegetation close to power lines. They are employed by municipal, provincial and federal public works departments, private contractors under contract with government public works departments and private companies involved in the collection of refuse and recyclable materials."
  },
  {
    "title": "Longshore workers",
    "code": "75100",
    "teer": 5,
    "definition": "Longshore workers transfer cargo throughout dock area and onto and from ships and other vessels. They are employed by marine cargo handling companies, shipping agencies and shipping lines."
  },
  {
    "title": "Material handlers",
    "code": "75101",
    "teer": 5,
    "definition": "Material handlers handle, move, load and unload materials by hand or using a variety of material handling equipment. They are employed by transportation, storage and moving companies, and by a variety of manufacturing and processing companies and retail and wholesale warehouses."
  },
  {
    "title": "Construction trades helpers and labourers",
    "code": "75110",
    "teer": 5,
    "definition": "Construction trades helpers and labourers assist skilled tradespersons and perform labouring activities at construction sites, in quarries and in surface mines. They are employed by construction companies, trade and labour contractors, and surface mine and quarry operators."
  },
  {
    "title": "Other trades helpers and labourers",
    "code": "75119",
    "teer": 5,
    "definition": "Other trades helpers and labourers assist skilled tradespersons and perform labouring activities in the installation, maintenance and repair of industrial machinery, refrigeration, heating and air conditioning equipment, in the maintenance and repair of transportation and heavy equipment, in the installation and repair of telecommunication and power cables and in other repair and service work settings. They are employed by a wide variety of manufacturing, utility and service companies."
  },
  {
    "title": "Taxi and limousine drivers and chauffeurs",
    "code": "75200",
    "teer": 5,
    "definition": "Taxi and limousine drivers drive automobiles and limousines to transport passengers. Chauffeurs drive automobiles and limousines to transport personnel and visitors of businesses, government or other organizations or members of private households. Taxi and limousine drivers are employed by taxi and other transportation service companies, or they may be self-employed. Chauffeurs are employed by businesses, government and other organizations, or private individuals or families."
  },
  {
    "title": "Delivery service drivers and door-to-door distributors",
    "code": "75201",
    "teer": 5,
    "definition": "Delivery service drivers drive automobiles, vans and light trucks to pick up and deliver various products. Door-to-door distributors deliver items to residences and businesses. They are employed by dairies, drug stores, newspaper distributors, take-out food establishments, dry cleaners, mobile caterers and many other establishments, or they may be self-employed."
  },
  {
    "title": "Boat and cable ferry operators and related occupations",
    "code": "75210",
    "teer": 5,
    "definition": "Boat and cable ferry operators and workers in related occupations operate lock gates, bridges and similar equipment along canal systems and operate cable ferries and ferry terminals. This unit group also includes boat operators, and owner-operators, who operate small motorboats or watercraft to transport passengers or freight. They are employed by the federal government, cable ferry companies, ferry terminals, marine companies and canal, port or harbour authorities. Owner-operators of small boats are self-employed."
  },
  {
    "title": "Railway and motor transport labourers",
    "code": "75211",
    "teer": 5,
    "definition": "Railway and motor transport labourers perform a variety of tasks to assist track maintenance workers and railway yard workers, or motor transport operators. They are employed by railway transport companies and motor transport companies."
  },
  {
    "title": "Public works and maintenance labourers",
    "code": "75212",
    "teer": 5,
    "definition": "Public works and maintenance labourers perform a variety of labouring activities to maintain sidewalks, streets, roads and similar areas. They are employed by public works departments in all levels of government or by private contractors under contract to governments."
  },
  {
    "title": "Managers in natural resources production and fishing",
    "code": "80010",
    "teer": 0,
    "definition": "Managers in natural resources production and fishing plan, organize, direct, control and evaluate the operations of establishments in forestry and logging, mining and quarrying, oil and gas drilling, production and servicing operations, and commercial fishing."
  },
  {
    "title": "Managers in agriculture",
    "code": "80020",
    "teer": 0,
    "definition": "Managers in agriculture plan, organize, direct, control and evaluate the operations and functions of farms. They are responsible for growing crops, raising and breeding livestock, poultry and other animals, marketing farm products and enhancing farms' sustainability through, notably, the implementation of new technologies. They usually own and operate their own establishment."
  },
  {
    "title": "Managers in horticulture",
    "code": "80021",
    "teer": 0,
    "definition": "Managers in horticulture plan, organize, direct and control the activities of nursery and greenhouse staff who grow and market trees, shrubs, flowers and plants."
  },
  {
    "title": "Managers in aquaculture",
    "code": "80022",
    "teer": 0,
    "definition": "Managers in aquaculture manage operations of facilities which cultivate and harvest fish, shellfish or marine plants for replenishment of wildlife stocks or for commercial sale. They are employed by public or private fish hatcheries and commercial aquatic farms, or they may be self-employed."
  },
  {
    "title": "Supervisors, logging and forestry",
    "code": "82010",
    "teer": 2,
    "definition": "Supervisors in logging and forestry supervise and coordinate the activities of workers engaged in logging operations and silvicultural operations. They are employed by logging companies, contractors and government agencies."
  },
  {
    "title": "Supervisors, mining and quarrying",
    "code": "82020",
    "teer": 2,
    "definition": "Supervisors in mining and quarrying supervise and coordinate activities of workers engaged in underground and surface mining operations and quarries. They are employed by coal, metal and non-metallic mineral mines and quarries."
  },
  {
    "title": "Contractors and supervisors, oil and gas drilling and services",
    "code": "82021",
    "teer": 2,
    "definition": "Contractors and supervisors in oil and gas drilling and services supervise and coordinate the activities in drilling for oil or gas, operating service rigs, or providing oil and gas well services. They are employed by drilling and well service contracting companies and petroleum producing companies. Contractors may be self-employed."
  },
  {
    "title": "Agricultural service contractors and farm supervisors",
    "code": "82030",
    "teer": 2,
    "definition": "Agricultural service contractors provide agricultural services such as livestock and poultry breeding, soil preparation, crop planting, crop spraying, cultivating or harvesting. Farm supervisors supervise the work of specialized livestock workers, farm machinery operators, livestock labourers, aquaculture labourers and harvesting labourers. They operate their own business or may be employed by farms and agricultural enterprises."
  },
  {
    "title": "Contractors and supervisors, landscaping, grounds maintenance and horticulture services",
    "code": "82031",
    "teer": 2,
    "definition": "Contractors and supervisors, landscaping, grounds maintenance and horticulture services supervise and coordinate the activities of workers in the following unit groups: Nursery and greenhouse workers (85103) and Landscaping and grounds maintenance labourers (85191). They are employed by landscaping companies, cemeteries, lawn care and tree service companies, nurseries and greenhouses and by landscaping operations of public works departments and private establishments. Contractors may be self-employed."
  },
  {
    "title": "Underground production and development miners",
    "code": "83100",
    "teer": 3,
    "definition": "Underground production and development miners drill, blast, operate mining machinery, and perform related duties to extract coal and ore in underground mines and to construct tunnels, passageways and shafts to facilitate mining operations. They are employed by coal, metal and non-metallic mineral underground mines and by specialized contractors in mine construction, shaft sinking and tunnelling. Apprentices are also included in this unit group."
  },
  {
    "title": "Oil and gas well drillers, servicers, testers and related workers",
    "code": "83101",
    "teer": 3,
    "definition": "Oil and gas well drillers and well servicers control the operation of drilling and hoisting equipment on drilling and service rigs, and direct the activities of the rig crew under supervision of the rig manager. Oil and gas well loggers, testers and related workers operate specialized mechanical or electronic equipment, tools or instruments to provide services in conjunction with well drilling, completion or servicing. They are employed by drilling and well service contractors, petroleum producing companies and well logging or testing companies."
  },
  {
    "title": "Logging machinery operators",
    "code": "83110",
    "teer": 3,
    "definition": "Logging machinery operators operate cable yarding systems, mechanical harvesters and forwarders and mechanical tree processors and loaders to fell, yard and process trees at logging sites. They are employed by logging companies and contractors."
  },
  {
    "title": "Fishing masters and officers",
    "code": "83120",
    "teer": 3,
    "definition": "Fishing masters and officers manage and operate saltwater and freshwater fishing vessels greater than 100 gross tonnes to pursue and land fish and other marine life. They are employed by establishments engaged in operating commercial fishing vessels."
  },
  {
    "title": "Fishermen/women",
    "code": "83121",
    "teer": 3,
    "definition": "Fishermen/women operate fishing vessels less than 100 gross tonnes to pursue and land fish and other marine life. They are usually self-employed owner-operators of fishing vessels."
  },
  {
    "title": "Underground mine service and support workers",
    "code": "84100",
    "teer": 4,
    "definition": "Underground mine service and support workers perform a range of duties related to the operation of orepasses, chutes and conveyor systems, the construction and support of underground structures, passages and roadways, and the supply of materials and supplies to support underground mining. They are employed by coal, metal and non-metallic mineral mines."
  },
  {
    "title": "Oil and gas well drilling and related workers and services operators",
    "code": "84101",
    "teer": 4,
    "definition": "Oil and gas well drilling workers operate drilling and service rig machinery as intermediate members of the rig crew. Oil and gas well services operators drive trucks and operate specialized hydraulic pumping systems to place cement in wells or to treat wells with chemicals, sand mixtures or gases to stimulate production. They are employed by drilling and well service contractors and by petroleum producing companies."
  },
  {
    "title": "Chain saw and skidder operators",
    "code": "84110",
    "teer": 4,
    "definition": "Chain saw and skidder operators operate chain saws to fell, delimb and buck trees, and operate skidders to move or yard the felled trees from the logging site to the landing area for processing and transportation. They are employed by logging companies and contractors."
  },
  {
    "title": "Silviculture and forestry workers",
    "code": "84111",
    "teer": 4,
    "definition": "Silviculture and forestry workers perform a variety of duties related to reforestation and to the management, improvement and conservation of forest lands. They are employed by logging companies, contractors and government services."
  },
  {
    "title": "Specialized livestock workers and farm machinery operators",
    "code": "84120",
    "teer": 4,
    "definition": "Specialized livestock workers carry out feeding, health and breeding programs on dairy, beef, sheep, poultry, swine and other livestock farms. Farm machinery operators operate and maintain farm machinery and equipment. They are employed on crop, livestock, fruit, vegetable and specialty farms."
  },
  {
    "title": "Fishing vessel deckhands",
    "code": "84121",
    "teer": 4,
    "definition": "Fishing vessel deckhands perform a variety of manual tasks on commercial fishing voyages, and maintain fishing vessels. They are employed by establishments that operate commercial fishing vessels and by self-employed fishermen/women."
  },
  {
    "title": "Livestock labourers",
    "code": "85100",
    "teer": 5,
    "definition": "Livestock labourers assist other farm workers to raise cattle, poultry and other animals, to help carry out feeding, health and breeding programs, to process animal products and to assist in the maintenance and repair of farm equipment and buildings. They are employed on livestock farms."
  },
  {
    "title": "Harvesting labourers",
    "code": "85101",
    "teer": 5,
    "definition": "Harvesting labourers and related workers assist other farm workers to plant, harvest, sort and pack crops. They participate in soil preparation, irrigation and crop planting, spraying and thinning. They are employed on fruit, vegetable and specialty crop farms."
  },
  {
    "title": "Aquaculture and marine harvest labourers",
    "code": "85102",
    "teer": 5,
    "definition": "Aquaculture and marine harvest labourers include aquaculture support workers, marine plant gatherers, shellfish diggers and other labourers in aquaculture and fishing. Aquaculture support workers are employed by public or private fish hatcheries and commercial aquatic farms. Marine plant gatherers and mollusk harvesters may be self-employed."
  },
  {
    "title": "Nursery and greenhouse labourers",
    "code": "85103",
    "teer": 5,
    "definition": "Nursery and greenhouse labourers plant, cultivate and harvest trees, shrubs, flowers and plants, and serve nursery and greenhouse customers. They are employed in indoor and outdoor nurseries and greenhouses."
  },
  {
    "title": "Trappers and hunters",
    "code": "85104",
    "teer": 5,
    "definition": "Trappers and hunters trap and hunt wild animals for pelts or live sale. They are usually self-employed and work on a seasonal basis."
  },
  {
    "title": "Mine labourers",
    "code": "85110",
    "teer": 5,
    "definition": "Mine labourers carry out a variety of general labouring duties to assist in the extraction of coal, minerals and ore, and in other services in support of underground mining. They are employed by coal, metal and non-metallic mineral mines."
  },
  {
    "title": "Oil and gas drilling, servicing and related labourers",
    "code": "85111",
    "teer": 5,
    "definition": "Oil and gas drilling, servicing and related labourers carry out a variety of general labouring duties and operate equipment to assist in the drilling and servicing of oil and gas wells. This unit group also includes labourers who assist in geophysical prospecting for oil and gas. They are employed by drilling and well servicing contractors and by petroleum producing companies."
  },
  {
    "title": "Logging and forestry labourers",
    "code": "85120",
    "teer": 5,
    "definition": "Logging and forestry labourers perform a variety of manual tasks such as attaching choker cables to logs, planting trees, clearing brush, spraying chemicals, cleaning up landing areas and assisting other workers in woodlands operations. They are employed by logging companies and contractors."
  },
  {
    "title": "Landscaping and grounds maintenance labourers",
    "code": "85121",
    "teer": 5,
    "definition": "Landscaping and grounds maintenance labourers perform work to assist in the construction of landscapes and related structures, and to maintain lawns, gardens, athletic fields, golf courses, cemeteries, parks, landscaped interiors and other landscaped areas. They are employed by landscaping and lawn care companies, golf courses, cemeteries, and landscaping operations of public works departments and private establishments."
  },
  {
    "title": "Manufacturing managers",
    "code": "90010",
    "teer": 0,
    "definition": "Manufacturing managers plan, organize, direct, control and evaluate the operations of a manufacturing establishment or of a production department within a manufacturing establishment, under the direction of a general manager or other senior manager. They are employed by manufacturing companies."
  },
  {
    "title": "Utilities managers",
    "code": "90011",
    "teer": 0,
    "definition": "Utilities managers plan, organize, direct, control and evaluate the operations of utility companies or services of heating fuel distribution companies. The services provided include treatment of water and waste, distribution of water, electricity, natural gas and heating oil to residential, commercial and industrial consumers, waste disposal and waste recycling. They are employed in public and private sector utilities and in heating fuel distribution companies."
  },
  {
    "title": "Supervisors, mineral and metal processing",
    "code": "92010",
    "teer": 2,
    "definition": "Supervisors in mineral and metal processing supervise and coordinate the activities of workers engaged in mineral and metal processing and manufacturing. They are employed in mineral ore and metal processing plants such as copper, lead and zinc refineries, uranium processing plants, steel mills, aluminum plants, precious metal refineries, cement processing plants, clay, glass and stone processing plants and foundries."
  },
  {
    "title": "Supervisors, petroleum, gas and chemical processing and utilities",
    "code": "92011",
    "teer": 2,
    "definition": "Supervisors in petroleum, gas and chemical processing and utilities supervise and coordinate the activities of workers in the following unit groups: Central control and process operators, petroleum, gas and chemical processing (93101), Power engineers and power systems operators (92100), Water and waste treatment plant operators (92101), Chemical plant machine operators (94110) and Labourers in chemical products processing and utilities (95102). They are employed by petroleum and natural gas processing, pipeline and petrochemical companies, chemical and pharmaceutical companies, electric power utilities, water and waste treatment utilities and in a range of other industries and institutions."
  },
  {
    "title": "Supervisors, food and beverage processing",
    "code": "92012",
    "teer": 2,
    "definition": "Supervisors in food and beverage processing supervise and coordinate the activities of workers who operate processing and packaging machines, and workers who grade food and beverage products. They are employed in fruit and vegetable processing plants, dairies, flour mills, bakeries, sugar refineries, fish plants, meat plants, breweries and other food and beverage processing establishments."
  },
  {
    "title": "Supervisors, plastic and rubber products manufacturing",
    "code": "92013",
    "teer": 2,
    "definition": "Supervisors in plastic and rubber products manufacturing supervise and coordinate the activities of workers who operate processing machines and who fabricate, assemble and inspect rubber or plastic products. They are employed by rubber and plastic products manufacturing companies and in plastic parts divisions of other manufacturing companies."
  },
  {
    "title": "Supervisors, forest products processing",
    "code": "92014",
    "teer": 2,
    "definition": "Supervisors in forest products processing supervise and coordinate the activities of workers engaged in pulp and paper production and wood processing and manufacturing. They are employed by pulp and paper companies, paper converting companies, sawmills, planing mills, wood treatment plants, waferboard plants and other wood processing companies."
  },
  {
    "title": "Supervisors, textile, fabric, fur and leather products processing and manufacturing",
    "code": "92015",
    "teer": 2,
    "definition": "Supervisors in textile, fabric, fur and leather products processing and manufacturing supervise and coordinate the activities of workers engaged in textile, fabric, fur and leather products processing and manufacturing. They are employed by textile manufacturing companies, tanneries and other manufacturers of fabric, fur and leather products."
  },
  {
    "title": "Supervisors, motor vehicle assembling",
    "code": "92020",
    "teer": 2,
    "definition": "Supervisors in motor vehicle assembling supervise and coordinate the activities of workers in motor vehicle production departments. They are employed in plants which manufacture automobiles, vans and light trucks."
  },
  {
    "title": "Supervisors, electronics and electrical products manufacturing",
    "code": "92021",
    "teer": 2,
    "definition": "Supervisors in electronics manufacturing supervise and coordinate the activities of workers who assemble, fabricate, test, repair and inspect electronic parts, components and systems. They are employed in electronics manufacturing plants. Supervisors in electrical products manufacturing supervise and coordinate the activities of workers who assemble, fabricate and inspect electrical components, appliances, motors and industrial equipment. They are employed by companies that manufacture electrical products."
  },
  {
    "title": "Supervisors, furniture and fixtures manufacturing",
    "code": "92022",
    "teer": 2,
    "definition": "Supervisors in furniture and fixtures manufacturing supervise and coordinate the activities of workers who manufacture furniture and fixtures made of wood or other materials. They are employed in furniture and fixtures manufacturing establishments."
  },
  {
    "title": "Supervisors, other mechanical and metal products manufacturing",
    "code": "92023",
    "teer": 2,
    "definition": "Supervisors in other mechanical and metal products manufacturing supervise and coordinate the activities of workers who fabricate, assemble and inspect mechanical and metal products, such as aircraft and aircraft parts, heavy trucks, buses, trailers, motor vehicle engines, transmissions, heating equipment, commercial refrigeration and similar metal products. They are employed by a wide variety of manufacturing companies."
  },
  {
    "title": "Supervisors, other products manufacturing and assembly",
    "code": "92024",
    "teer": 2,
    "definition": "Supervisors in other products manufacturing and assembly supervise and coordinate the activities of workers who assemble, fabricate and inspect a variety of products, such as jewellery, clocks and watches, millwork, sporting goods, toys and other miscellaneous products. They are employed in a wide variety of manufacturing companies."
  },
  {
    "title": "Power engineers and power systems operators",
    "code": "92100",
    "teer": 2,
    "definition": "Power engineers operate and maintain reactors, turbines, boilers, generators, stationary engines and auxiliary equipment to generate electrical power and to provide heat, light, refrigeration and other utility services for commercial, institutional and industrial buildings and other work sites. Power systems operators monitor and operate switchboards and related equipment in electrical control centres to control the distribution of electrical power in transmission networks. They are employed by power generation plants, electrical power utilities, manufacturing plants, hospitals, universities and government and commercial establishments. Apprentices are also included in this unit group."
  },
  {
    "title": "Water and waste treatment plant operators",
    "code": "92101",
    "teer": 2,
    "definition": "Water treatment plant operators monitor and operate computerized control systems and related equipment in water filtration and treatment plants to regulate the treatment and distribution of water. Liquid waste plant operators monitor and operate computerized control systems and related equipment in wastewater, sewage treatment and liquid waste plants to regulate the treatment and disposal of sewage and wastes. They are employed by municipal governments and industrial facilities. This unit group also includes waste treatment plant operators in composting plants and other waste management facilities."
  },
  {
    "title": "Central control and process operators, mineral and metal processing",
    "code": "93100",
    "teer": 3,
    "definition": "Central control and process operators, mineral and metal processing, operate and monitor multi-function process control machinery and equipment to control the processing of mineral ores, metals or cement. They are employed in mineral ore and metal processing plants such as copper, lead and zinc refineries, uranium processing plants, steel mills, aluminum plants, precious metal refineries and cement processing plants."
  },
  {
    "title": "Central control and process operators, petroleum, gas and chemical processing",
    "code": "93101",
    "teer": 3,
    "definition": "Central control and process operators in petroleum, gas and chemical processing monitor and operate petroleum, petrochemical and chemical plants and monitor, adjust and maintain processing units and equipment in these plants. They are employed by petroleum and natural gas processing, pipeline and petrochemical companies and industrial, agricultural and specialty chemical and pharmaceutical companies."
  },
  {
    "title": "Pulping, papermaking and coating control operators",
    "code": "93102",
    "teer": 3,
    "definition": "Pulping, papermaking and coating control operators operate and monitor multi-function process control machinery and equipment to control the processing of wood, scrap pulp, recyclable paper, cellulose materials, paper pulp and paperboard. They are employed by pulp and paper companies."
  },
  {
    "title": "Aircraft assemblers and aircraft assembly inspectors",
    "code": "93200",
    "teer": 3,
    "definition": "Aircraft assemblers assemble, fit and install prefabricated parts to manufacture fixed wing or rotary wing aircraft or aircraft subassemblies. Aircraft assembly inspectors inspect aircraft assemblies for adherence to engineering specifications. They are employed by aircraft and aircraft subassembly manufacturers."
  },
  {
    "title": "Machine operators, mineral and metal processing",
    "code": "94100",
    "teer": 4,
    "definition": "Machine operators in mineral and metal processing operate machinery to process mineral ore and metal. They are employed in mineral ore and metal processing plants such as copper, lead and zinc refineries, uranium processing plants, steel mills, aluminum plants, precious metal refineries and cement processing plants."
  },
  {
    "title": "Foundry workers",
    "code": "94101",
    "teer": 4,
    "definition": "Foundry workers make foundry moulds and cores by hand or machine, cast molten metal, and operate furnaces in the foundry industry. They are employed by metal foundries and foundry departments of metal products manufacturing companies."
  },
  {
    "title": "Glass forming and finishing machine operators and glass cutters",
    "code": "94102",
    "teer": 4,
    "definition": "Glass forming and finishing machine operators operate multi-function process control machinery or single-function machines to melt, form, cut or finish flat glass, glassware, bottles, and other glass products. Glass cutters cut flat glass of various thicknesses to specified sizes and shapes by hand. They are employed by glass and glass products manufacturing companies."
  },
  {
    "title": "Concrete, clay and stone forming operators",
    "code": "94103",
    "teer": 4,
    "definition": "Concrete, clay and stone forming operators cast and finish concrete products, operate machines to extrude, mould, press and bake clay products, and operate machines to form, cut and finish stone products. They are employed by concrete, clay and stone products manufacturing companies."
  },
  {
    "title": "Inspectors and testers, mineral and metal processing",
    "code": "94104",
    "teer": 4,
    "definition": "Inspectors and testers in mineral and metal processing inspect, grade, sample or test raw materials and products from mineral ore and metal processing operations. They are employed in mineral ore and metal processing plants such as copper, lead and zinc refineries, uranium processing plants, steel mills, aluminum plants, precious metal refineries, cement processing plants, clay, glass and stone processing plants and foundries."
  },
  {
    "title": "Metalworking and forging machine operators",
    "code": "94105",
    "teer": 4,
    "definition": "Light metalworking machine operators operate metalworking machines which shape and form sheet or other light metal into parts or products. Heavy metalworking machine operators operate metalworking machines which shape and form steel or other heavy metal into parts or products. Forging machine operators operate forging machines to form and shape metal into various shapes and sizes and impart desired strength, hardness or other characteristics. Light metalworking machine operators are employed by sheet metal products manufacturing companies, sheet metal shops and other light metal products manufacturing establishments. Heavy metalworking machine operators are employed by structural steel fabrication, boiler and platework manufacturing companies, heavy machinery manufacturing companies and in the shipbuilding industry. Forging machine operators are employed primarily in the fabricated metal products, machinery and transportation equipment manufacturing industries."
  },
  {
    "title": "Machining tool operators",
    "code": "94106",
    "teer": 4,
    "definition": "Machining tool operators set up and operate or tend metal-cutting machines designed for repetitive machining work. They are employed by metal products and other manufacturing companies and in machine shops. This unit group also includes workers who etch or chemically mill metal pieces."
  },
  {
    "title": "Machine operators of other metal products",
    "code": "94107",
    "teer": 4,
    "definition": "Other metal products machine operators operate one or more automatic or multi-purpose machines to produce a variety of metal parts and products, such as wire mesh, nails, bolts and chains. They are employed by a wide variety of metal products manufacturing companies."
  },
  {
    "title": "Chemical plant machine operators",
    "code": "94110",
    "teer": 4,
    "definition": "Chemical plant machine operators monitor and operate units and machinery to blend, mix, process and package a wide range of specialty chemicals, pharmaceuticals, cleaning and toiletry products. They are primarily employed in chemical, cleaning compound, ink and adhesive industries, but may also be employed by chemical processing departments in other industries."
  },
  {
    "title": "Plastics processing machine operators",
    "code": "94111",
    "teer": 4,
    "definition": "Plastics processing machine operators set up and operate plastic mixing, calendering, extruding and moulding processing machines used in the manufacture of plastic parts and plastic products. They are employed by plastic products manufacturing companies."
  },
  {
    "title": "Rubber processing machine operators and related workers",
    "code": "94112",
    "teer": 4,
    "definition": "Rubber processing machine operators and related workers operate rubber processing machinery and assemble and inspect rubber products. They are employed by tire manufacturers and other rubber products manufacturing companies."
  },
  {
    "title": "Sawmill machine operators",
    "code": "94120",
    "teer": 4,
    "definition": "Sawmill machine operators operate, monitor and control automated lumbermill equipment to saw timber logs into rough lumber; saw, trim and plane rough lumber into dressed lumber of various sizes; and saw or split shingles and shakes. They are employed in sawmills and planing mills."
  },
  {
    "title": "Pulp mill, papermaking and finishing machine operators",
    "code": "94121",
    "teer": 4,
    "definition": "Pulp mill and papermaking and finishing machine operators operate and monitor various types of processing machinery and equipment to produce pulp and assist papermaking and coating control operators to produce, coat and finish paper. They are employed by pulp and paper companies."
  },
  {
    "title": "Paper converting machine operators",
    "code": "94122",
    "teer": 4,
    "definition": "Paper converting machine operators operate various machines which fabricate and assemble paper products such as paper bags, containers, boxes, envelopes and similar articles. They are employed by paper products manufacturing companies."
  },
  {
    "title": "Lumber graders and other wood processing inspectors and graders",
    "code": "94123",
    "teer": 4,
    "definition": "Lumber graders and other wood processing inspectors and graders inspect and grade lumber, shingles, veneer, waferboard and similar wood products to identify defects, ensure conformance to company specifications and classify products according to industry standards. They are employed by sawmills, planing mills, wood treatment plants, waferboard plants and other wood processing companies."
  },
  {
    "title": "Woodworking machine operators",
    "code": "94124",
    "teer": 4,
    "definition": "Woodworking machine operators set up, program and operate one or more woodworking machines to fabricate or repair wooden parts for furniture, fixtures or other wood products. They are employed in furniture, fixture and other wood products manufacturing establishments."
  },
  {
    "title": "Other wood processing machine operators",
    "code": "94129",
    "teer": 4,
    "definition": "Other wood processing machine operators operate and tend wood processing equipment and machines to remove bark from logs, produce wood chips, preserve and treat wood, and produce waferboards, particleboards, hardboards, insulation boards, plywood, veneers and similar wood products. They are employed in sawmills, woodrooms of pulp mills, planing mills, wood treatment plants, waferboard plants and other wood processing plants."
  },
  {
    "title": "Textile fibre and yarn, hide and pelt processing machine operators and workers",
    "code": "94130",
    "teer": 4,
    "definition": "Textile fibre and yarn processing machine operators and workers operate machines to prepare textile fibres; spin, wind or twist yarn or thread; and bleach, dye or finish yarn, thread, cloth or textile products. They are employed by textile manufacturing companies. Hide and pelt processing machine operators and workers trim, scrape, clean, tan, buff and dye animal hides, pelts or skins to produce leather stock and finished furs. They are employed by leather tanning, fur dressing and leather and fur dyeing establishments."
  },
  {
    "title": "Weavers, knitters and other fabric making occupations",
    "code": "94131",
    "teer": 4,
    "definition": "Weavers, knitters and other workers in fabric making occupations operate machines to process yarn or thread into woven, non-woven and knitted products such as cloth, lace, carpets, rope, industrial fabric, hosiery and knitted garments or to quilt and embroider fabric. This unit group also includes workers who perform activities such as reproducing patterns, drawing-in and tying warps and setting up looms. They are employed by textile companies and by garment and mattress manufacturing companies."
  },
  {
    "title": "Industrial sewing machine operators",
    "code": "94132",
    "teer": 4,
    "definition": "Industrial sewing machine operators operate sewing machines to sew fabric, fur, leather or synthetic materials to produce or repair garments and other articles. They are employed in clothing, footwear, textile products, fur products and other manufacturing establishments and by furriers."
  },
  {
    "title": "Inspectors and graders, textile, fabric, fur and leather products manufacturing",
    "code": "94133",
    "teer": 4,
    "definition": "Inspectors and graders in textile, fabric, fur and leather products manufacturing inspect and grade textile, fabric, fur and leather products. They are employed by textile companies, leather tanning and fur dressing establishments and garment, fur and leather products manufacturers."
  },
  {
    "title": "Process control and machine operators, food and beverage processing",
    "code": "94140",
    "teer": 4,
    "definition": "Process control and machine operators in food and beverage processing operate multi-function process control machinery and single-function machines to process and package food and beverage products. They are employed in fruit and vegetable processing plants, dairies, flour mills, bakeries, sugar refineries, meat plants, breweries, and other food and beverage processing establishments."
  },
  {
    "title": "Industrial butchers and meat cutters, poultry preparers and related workers",
    "code": "94141",
    "teer": 4,
    "definition": "Industrial butchers and meat cutters, poultry preparers and related workers prepare meat and poultry for further processing or for packaging for wholesale distribution. They are employed in meat and poultry slaughtering, processing and packing establishments."
  },
  {
    "title": "Fish and seafood plant workers",
    "code": "94142",
    "teer": 4,
    "definition": "Labourers in fish and seafood processing perform clean-up, packaging, material handling and other elemental activities related to fish and seafood processing. They are employed in fish and seafood processing and packaging plants."
  },
  {
    "title": "Testers and graders, food and beverage processing",
    "code": "94143",
    "teer": 4,
    "definition": "Testers and graders in food and beverage processing test or grade ingredients and finished food or beverage products to ensure conformance to company standards. They are employed in fruit and vegetable processing plants, dairies, flour mills, bakeries, sugar refineries, fish plants, meat plants, breweries and other food and beverage processing plants."
  },
  {
    "title": "Plateless printing equipment operators",
    "code": "94150",
    "teer": 4,
    "definition": "Plateless printing equipment operators operate laser printers, computerized high speed colour copiers and other printing machines to print text, illustrations and designs on a wide variety of materials such as paper, plastic, glass, leather, and metal. They are employed in rapid printing services, newspaper and magazine publishing companies, commercial printing companies and in manufacturing and other establishments that have in-house printing facilities."
  },
  {
    "title": "Camera, platemaking and other prepress occupations",
    "code": "94151",
    "teer": 4,
    "definition": "Camera and platemaking workers operate graphic arts cameras and scanners, assemble film and negatives and prepare, engrave and etch printing plates or cylinders for various types of printing presses. They are employed in firms that specialize in colour graphics or platemaking and cylinder preparation, commercial publishing and printing companies, newspapers, magazines, and in various establishments in the public and private sectors that have in-house printing departments."
  },
  {
    "title": "Binding and finishing machine operators",
    "code": "94152",
    "teer": 4,
    "definition": "Binding and finishing machine operators set up, operate or oversee the operation of machines, equipment or computerized units that bind and finish printed material. Workers who perform finishing operations in the paper, carton and packaging industries, as well as those who encode and stamp plastic cards, are included in this unit group. They are employed by binderies, commercial printing companies, newspapers, magazines, and other publishing companies, and establishments in both the public and private sectors that have in-house printing, binding and finishing departments."
  },
  {
    "title": "Photographic and film processors",
    "code": "94153",
    "teer": 4,
    "definition": "Photographic and film processors process and finish still photographic film and motion picture film. They are employed in film processing laboratories and retail photofinishing establishments."
  },
  {
    "title": "Motor vehicle assemblers, inspectors and testers",
    "code": "94200",
    "teer": 4,
    "definition": "Motor vehicle assemblers assemble and install prefabricated motor vehicle parts and components to form subassemblies and finished motor vehicles. Motor vehicle inspectors and testers inspect and test parts, subassemblies, accessories and finished products to ensure proper performance and conformity to quality standards. They are employed in plants which manufacture automobiles, vans and light trucks."
  },
  {
    "title": "Electronics assemblers, fabricators, inspectors and testers",
    "code": "94201",
    "teer": 4,
    "definition": "Electronics assemblers and fabricators assemble and fabricate electronic equipment, parts and components. Electronics inspectors and testers inspect and test electronic and electromechanical assemblies, subassemblies, parts and components to ensure conformance to prescribed standards. They are employed in electronics manufacturing plants."
  },
  {
    "title": "Assemblers and inspectors, electrical appliance, apparatus and equipment manufacturing",
    "code": "94202",
    "teer": 4,
    "definition": "Assemblers in electrical appliance, apparatus and equipment manufacturing assemble prefabricated parts to produce household, commercial and industrial appliances and equipment. Inspectors inspect and test the assembled products. This unit group also includes workers who set up and prepare assembly lines for operation. They are employed by electrical appliance and electrical equipment manufacturing companies."
  },
  {
    "title": "Assemblers, fabricators and inspectors, industrial electrical motors and transformers",
    "code": "94203",
    "teer": 4,
    "definition": "Assemblers, fabricators and inspectors of industrial electrical motors and transformers assemble, fabricate, fit, wire and inspect heavy-duty industrial electrical equipment. They are employed by manufacturers of industrial electric motors, transformers, control equipment, railway locomotives, transit vehicles and other heavy electrical equipment."
  },
  {
    "title": "Mechanical assemblers and inspectors",
    "code": "94204",
    "teer": 4,
    "definition": "Mechanical assemblers assemble a wide variety of mechanical products such as trucks, buses, snowmobiles, garden tractors, automotive engines, transmissions, outboard motors, gearboxes, hydraulic pumps and sewing machines. Inspectors check and inspect subassemblies and finished products to ensure proper quality and product specifications. They are employed by machinery and transportation equipment manufacturers and by other manufacturing companies."
  },
  {
    "title": "Machine operators and inspectors, electrical apparatus manufacturing",
    "code": "94205",
    "teer": 4,
    "definition": "Machine operators and inspectors in electrical apparatus manufacturing operate machinery or equipment to fabricate complete products or parts for use in the assembly of electrical appliances and equipment, and electrical apparatus, such as batteries, fuses and plugs. Inspectors in this unit group inspect and test completed parts and production items. Workers in this unit group are employed by electrical appliance and electrical equipment manufacturing companies."
  },
  {
    "title": "Furniture and fixture assemblers, finishers, refinishers and inspectors",
    "code": "94210",
    "teer": 4,
    "definition": "Furniture and fixture assemblers assemble parts to form subassemblies or complete articles of furniture and fixtures. Furniture finishers finish new wood or metal furniture to specified colour and finish. Furniture refinishers refinish repaired, used or old furniture. Inspectors inspect furniture and fixture subassemblies and finished products to ensure product quality. They are employed by furniture manufacturing companies, manufacturing plants, retail furniture stores, refinishing and repair shops, or may be self-employed."
  },
  {
    "title": "Assemblers and inspectors of other wood products",
    "code": "94211",
    "teer": 4,
    "definition": "Assemblers of other wood products assemble a variety of wood products and millwork, such as window sashes and doors. Inspectors inspect wood products to ensure product quality. They are employed by establishments engaged in manufacturing a variety of wood and millwork products."
  },
  {
    "title": "Plastic products assemblers, finishers and inspectors",
    "code": "94212",
    "teer": 4,
    "definition": "Plastic products assemblers, finishers and inspectors assemble, finish and inspect plastic parts and finished products. They are employed by plastic products manufacturing companies and plastic parts divisions of aircraft or other manufacturing companies."
  },
  {
    "title": "Industrial painters, coaters and metal finishing process operators",
    "code": "94213",
    "teer": 4,
    "definition": "Industrial painters and coaters operate and tend machines or use brushes and spray equipment to apply paint, enamel, lacquer or other non-metallic protective and decorative coatings to surfaces of various products. Metal finishing process operators operate machines or equipment to deposit metallized substances on workpieces and surfaces to provide decorative, protective and restorative coatings. These workers are employed by manufacturing companies and custom refinishing, coating and plating shops."
  },
  {
    "title": "Other products assemblers, finishers and inspectors",
    "code": "94219",
    "teer": 4,
    "definition": "Other products assemblers, finishers and inspectors assemble, finish and inspect components or products of various materials, such as jewellery, silverware, buttons, pencils, non-prescription lenses, brushes, clocks and watches, musical instruments, sporting goods, toys, boats and other miscellaneous products. They are employed by a wide variety of manufacturing companies."
  },
  {
    "title": "Labourers in mineral and metal processing",
    "code": "95100",
    "teer": 5,
    "definition": "Labourers in mineral and metal processing perform material handling, clean-up, packaging and other elemental activities related to mineral ore and metal processing. They are employed in mineral ore and metal processing plants such as copper, lead and zinc refineries, uranium processing plants, steel mills, aluminum plants, precious metal refineries, cement processing plants, clay, glass and stone processing plants and foundries."
  },
  {
    "title": "Labourers in metal fabrication",
    "code": "95101",
    "teer": 5,
    "definition": "Labourers in metal fabrication remove excess metal and unwanted materials from metal parts, castings and other metal products and perform other labouring activities. They are employed in structural steel, boiler and platework fabrication plants, heavy machinery manufacturing plants, sheet metal fabrication shops, shipbuilding and other metal products manufacturing companies."
  },
  {
    "title": "Labourers in chemical products processing and utilities",
    "code": "95102",
    "teer": 5,
    "definition": "Labourers in chemical products processing and utilities carry out a variety of material handling, cleaning and routine general labouring activities. They are employed by petroleum and natural gas processing, pipeline and petrochemical, chemical and pharmaceutical companies, and by electrical, water and waste treatment utilities and services."
  },
  {
    "title": "Labourers in wood, pulp and paper processing",
    "code": "95103",
    "teer": 5,
    "definition": "Labourers in wood, pulp and paper processing carry out a variety of general labouring and routine wood processing activities and assist pulp mill and papermaking machine operators. They are employed by pulp and paper, and paper converting companies, sawmills, planing mills, wood treatment plants, waferboard plants and other wood processing companies."
  },
  {
    "title": "Labourers in rubber and plastic products manufacturing",
    "code": "95104",
    "teer": 5,
    "definition": "Labourers in rubber and plastic products manufacturing assist machine operators, transport materials and perform other similar tasks. They are employed by rubber and plastic products manufacturing companies."
  },
  {
    "title": "Labourers in textile processing and cutting",
    "code": "95105",
    "teer": 5,
    "definition": "Labourers in textile processing perform a variety of manual duties to assist in processing fibres into yarn or thread, or to assist in weaving, knitting, bleaching, dyeing or finishing textile fabrics or other textile products. Labourers in textile cutting cut fabric, fur, or leather to make parts for garments, linens, shoes and other articles. Labourers in textile processing and cutting are employed by clothing and textile manufacturers and other manufacturers of fabric products such as leather and fur."
  },
  {
    "title": "Labourers in food and beverage processing",
    "code": "95106",
    "teer": 5,
    "definition": "Labourers in food and beverage processing perform material handling, clean-up, packaging and other elemental activities related to food and beverage processing. They are employed in fruit and vegetable processing plants, dairies, flour mills, bakeries, sugar refineries, meat plants, breweries and other food and beverage processing and packaging plants."
  },
  {
    "title": "Labourers in fish and seafood processing",
    "code": "95107",
    "teer": 5,
    "definition": "Labourers in fish and seafood processing perform clean-up, packaging, material handling and other elemental activities related to fish and seafood processing. They are employed in fish and seafood processing and packaging plants."
  },
  {
    "title": "Other labourers in processing, manufacturing and utilities",
    "code": "95109",
    "teer": 5,
    "definition": "Other labourers in processing, manufacturing and utilities perform material handling, clean-up, packaging and other elemental activities in processing, manufacturing and utilities. They are employed by companies that manufacture products such as clothing, footwear, furniture and electrical and electronic products and by printing and packaging companies."
  }
];

export default nocOccupations;
