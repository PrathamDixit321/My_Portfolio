export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Featured' | 'AI & Systems' | 'Full-Stack' | 'ML & Research';
  featured: boolean;
  problem: string;
  solution: string;
  architectureDetails: string[];
  keyFeatures: string[];
  myContribution: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  statusBadge: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Internship' | 'Job Simulation' | 'Leadership';
  category: 'Engineering & AI' | 'Product & Project Management';
  bullets: string[];
  skills: string[];
  badge?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Core Mastery' | 'Advanced' | 'Proficient';
    context?: string;
    highlight?: boolean;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Hackathon' | 'Open Source' | 'Competition' | 'Certification';
  highlightMetric?: string;
  description: string;
  verificationBadge?: string;
}

export interface BuildLogArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  takeaways: string[];
  content: string[];
  tags: string[];
}

export const PERSONAL_INFO = {
  name: 'Pratham Dixit',
  role: 'AI/ML Engineer & Systems Builder',
  tagline: 'Building enterprise AI systems, RAG architectures, and multi-agent platforms with product-grounded engineering.',
  heroBio: 'Computer Science (AI & ML) engineer bridging modern generative AI systems (LLMs, LangGraph, RAG) with robust backend software and product thinking. Currently architecting NEXUS, an open-source enterprise AI operating system.',
  email: 'prathamdixit.582@gmail.com',
  phone: '+91 8595791195',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  location: 'India',
  education: {
    degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
    institution: 'KCC Institute of Technology & Management',
    batch: '2024 – 2028',
    status: 'Undergraduate',
  },
  status: {
    text: 'Building NEXUS • Open for AI/ML Roles & Collaborations',
    available: true,
  },
  stats: [
    { label: 'Open-Source Ranking', value: 'Top 50', sub: 'APERTRE 3.0 Program' },
    { label: 'Industry Simulations', value: '10+', sub: 'AWS, BCG X, Siemens, Lloyds' },
    { label: 'QuizOff 2026', value: '525k+', sub: 'Competed among India-wide peers' },
    { label: 'Core AI Stack', value: 'LangGraph & RAG', sub: 'Multi-Agent Orchestration' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Generative AI & LLM Engineering',
    iconName: 'Brain',
    description: 'Production LLM application architecture, agentic orchestration, and retrieval-augmented systems.',
    skills: [
      { name: 'LLM APIs (OpenAI / Gemini)', level: 'Core Mastery', context: 'High-throughput structured generation & function calling', highlight: true },
      { name: 'LangGraph & Multi-Agent Systems', level: 'Core Mastery', context: 'Stateful cyclic graphs, agent supervisor patterns', highlight: true },
      { name: 'LangChain & CrewAI', level: 'Advanced', context: 'Chain composition and collaborative role-based agents' },
      { name: 'RAG Architecture & Hybrid Retrieval', level: 'Core Mastery', context: 'Dense vector search, re-ranking & permission filtering', highlight: true },
      { name: 'Prompt & Context Engineering', level: 'Advanced', context: 'Few-shot framing, system instructions & guardrails' },
      { name: 'Function & Tool Calling', level: 'Core Mastery', context: 'Dynamic API invocation & schema enforcement' },
      { name: 'Hugging Face Transformers', level: 'Advanced', context: 'Model inference, tokenization & pipeline setup' },
    ],
  },
  {
    title: 'Machine Learning & Computer Vision',
    iconName: 'Cpu',
    description: 'Statistical modeling, predictive algorithms, evaluation, and vision processing.',
    skills: [
      { name: 'Machine Learning & Predictive Modeling', level: 'Core Mastery', context: 'Classification, churn modeling & regression pipelines', highlight: true },
      { name: 'PyTorch & Scikit-learn', level: 'Advanced', context: 'Feature engineering, model training and evaluation metrics' },
      { name: 'Deep Learning & NLP', level: 'Advanced', context: 'Text representation, embeddings & sequence models' },
      { name: 'Computer Vision & OpenCV', level: 'Proficient', context: 'Image preprocessing, feature extraction & spatial transforms' },
      { name: 'Feature Engineering & Data Preprocessing', level: 'Core Mastery', context: 'Handling tabular/multimodal datasets cleanly' },
    ],
  },
  {
    title: 'Databases, Vector Stores & Backend',
    iconName: 'Database',
    description: 'High-performance data storage, semantic indexing, and backend REST APIs.',
    skills: [
      { name: 'PostgreSQL & MySQL', level: 'Advanced', context: 'Relational data modeling, indexing & ACID transactions', highlight: true },
      { name: 'Vector Search (Pinecone & FAISS)', level: 'Core Mastery', context: 'High-dimensional similarity indexing and ANN search', highlight: true },
      { name: 'MongoDB & SQLite', level: 'Advanced', context: 'Document storage and lightweight embedded persistence' },
      { name: 'FastAPI & Python Async', level: 'Core Mastery', context: 'High-concurrency async endpoints with Pydantic validation', highlight: true },
      { name: 'REST APIs & Webhooks', level: 'Core Mastery', context: 'Clean API contract design, n8n workflow integration' },
    ],
  },
  {
    title: 'Programming & Languages',
    iconName: 'Code',
    description: 'Core programming foundations across systems, scripting, and web platforms.',
    skills: [
      { name: 'Python', level: 'Core Mastery', context: 'Async, typing, ML/AI ecosystem, FastAPI, data pipelines', highlight: true },
      { name: 'C++', level: 'Advanced', context: 'Object-oriented programming, algorithms & data structures' },
      { name: 'JavaScript & React', level: 'Advanced', context: 'Interactive UI components, state management & hooks' },
      { name: 'SQL', level: 'Advanced', context: 'Complex queries, schema design & analytical aggregation' },
      { name: 'HTML5 / Modern CSS (Tailwind)', level: 'Advanced', context: 'Responsive layout math, accessibility & micro-interactions' },
    ],
  },
  {
    title: 'Product & Project Management',
    iconName: 'LayoutGrid',
    description: 'Translating technical capabilities into user-centered product requirements and business value.',
    skills: [
      { name: 'PRD & User Story Documentation', level: 'Advanced', context: 'Structured requirements, edge case definition & scope control', highlight: true },
      { name: 'Roadmap & Prioritization Thinking', level: 'Advanced', context: 'Balancing technical feasibility with business impact' },
      { name: 'KPI Development & Dashboards', level: 'Advanced', context: 'Actionable tracking metrics from raw telemetry' },
      { name: 'Technical-to-Non-Technical Translation', level: 'Core Mastery', context: 'Cross-functional stakeholder storytelling & trade-offs', highlight: true },
      { name: 'Design Thinking & Customer Discovery', level: 'Advanced', context: 'Problem framing, customer interviews & iterative validation' },
    ],
  },
  {
    title: 'Developer Tools & Automation',
    iconName: 'Terminal',
    description: 'Version control, development environments, automation workflows, and research tooling.',
    skills: [
      { name: 'Git & GitHub', level: 'Core Mastery', context: 'Branching strategies, PR reviews & collaborative open-source' },
      { name: 'n8n Workflow Automation', level: 'Advanced', context: 'Event-driven agent triggers and webhook orchestration' },
      { name: 'VS Code & Jupyter Notebook', level: 'Core Mastery', context: 'Rapid prototyping, debugging & reproducible research' },
      { name: 'Kafka & H2 Architectural Fundamentals', level: 'Proficient', context: 'Event streaming and in-memory evaluation patterns' },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'nexus-ai-os',
    title: 'NEXUS — Enterprise AI Operating System',
    tagline: 'Open-source enterprise AI platform combining RAG, permission-aware vector retrieval, LangGraph agents, and n8n workflow automation.',
    category: 'Featured',
    featured: true,
    statusBadge: 'Active Development • Flagship',
    problem:
      'Enterprise teams struggle to safely adopt generative AI due to fragmented data silos, absence of granular access-control in vector search, and uncoordinated autonomous agents executing sensitive actions without governance.',
    solution:
      'Architected NEXUS as a unified enterprise AI platform that enforces permission-aware RAG pipelines, coordinates specialized LangGraph agents, and connects to enterprise workflows via n8n automation, all backed by strict Pydantic structured schemas.',
    architectureDetails: [
      'LangGraph Cyclic Multi-Agent Supervisor directing specialized agents for research, data query, and action execution',
      'Permission-aware Vector Retrieval layer filtering embeddings based on authenticated user roles and tenant policies',
      'FastAPI async backend handling high-concurrency LLM streaming and webhook events',
      'n8n workflow integration for automated ticket dispatch and cross-system task completion',
      'Dual-provider LLM failover between OpenAI and Google Gemini APIs with structured JSON output enforcement',
    ],
    keyFeatures: [
      'Role-based access-controlled vector search across enterprise documents',
      'Multi-agent task orchestration with real-time streaming state updates',
      'Autonomous tool execution with human-in-the-loop approval checkpoints',
      'Product lifecycle driven: Complete PRD, user persona mappings, and roadmap',
    ],
    myContribution:
      'Personally driving the full product lifecycle (problem discovery, competitor analysis, PRDs, roadmap prioritization) while simultaneously building the engineering core in Python, FastAPI, PostgreSQL, LangGraph, and React.',
    technologies: ['Python', 'FastAPI', 'LangGraph', 'OpenAI API', 'Gemini API', 'PostgreSQL', 'React', 'n8n', 'Pinecone/FAISS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
  },
  {
    id: 'hemolink',
    title: 'HemoLink — Emergency Blood Donor Matching Platform',
    tagline: 'Real-time blood donor management platform connecting donors with recipients to accelerate critical emergency responses.',
    category: 'Full-Stack',
    featured: true,
    statusBadge: 'Completed System',
    problem:
      'Emergency medical situations suffer from fatal delays when hospitals or patients search for specific compatible blood types across informal networks without verified real-time availability.',
    solution:
      'Conceptualized and built HemoLink to provide a real-time matching engine that connects nearby eligible blood donors with emergency requests using fast geographic filtering and automated alert workflows.',
    architectureDetails: [
      'Real-time donor-recipient matching engine with distance and blood compatibility matrices',
      'Live request broadcasting with instant status synchronization',
      'Donor eligibility tracking and donation history verification',
      'Clean responsive user interface built for high-stress mobile usage',
    ],
    keyFeatures: [
      'Sub-minute emergency request broadcasting to verified donors',
      'Compatible blood-type matrix matching algorithm',
      'Real-time availability toggles for registered volunteer donors',
      'Direct coordination bridge between patient guardians and donors',
    ],
    myContribution:
      'Identified the real-world gap in emergency coordination, formulated the problem definition, created product specifications, and engineered the complete functional matching platform.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB/PostgreSQL', 'REST APIs', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'innoverse',
    title: 'Innoverse — Student Developer & Project Discovery Hub',
    tagline: 'Community-driven collaborative platform solving project discovery and peer-connection challenges for student builders.',
    category: 'Full-Stack',
    featured: false,
    statusBadge: 'Community Platform',
    problem:
      'Student developers and hackathon builders lack dedicated spaces to discover peer-built open-source work, receive constructive technical feedback, and find complementary co-builders for projects.',
    solution:
      'Designed and engineered Innoverse: a collaborative web platform tailored for technical builders to showcase architecture breakdowns, request feedback, and discover project teammates.',
    architectureDetails: [
      'Structured project showcase feed with tech stack tags and live repo links',
      'Peer-connection matching algorithm based on skill complementarities',
      'Clean interactive UI with responsive filtering and discovery search',
    ],
    keyFeatures: [
      'Interactive project cards with architecture breakdowns and demo previews',
      'Skill-based builder search for hackathon team formation',
      'Feedback threads with structured technical review rubrics',
    ],
    myContribution:
      'Led the product concept from user interviews through UI design and full-stack implementation.',
    technologies: ['React', 'JavaScript', 'REST APIs', 'Tailwind CSS', 'Git/GitHub'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'ai-voice-assistant',
    title: 'Autonomous AI Voice Assistant',
    tagline: 'End-to-end voice-command system automating routine developer and desktop tasks through conversational natural language.',
    category: 'AI & Systems',
    featured: false,
    statusBadge: 'Functional Prototype',
    problem:
      'Standard desktop interactions require repetitive manual clicks and keystrokes for daily routines (workspace setup, information retrieval, quick scheduling).',
    solution:
      'Scoped and built an intelligent voice assistant capable of parsing spoken commands, calling external tools/APIs, and executing automated desktop tasks through natural dialogue.',
    architectureDetails: [
      'Speech-to-text pipeline using streaming audio capture',
      'LLM reasoning loop parsing intent into executable function calls',
      'OS-level task execution scripts for workflow automation',
      'Natural-sounding speech synthesis audio response stream',
    ],
    keyFeatures: [
      'Hands-free voice recognition with low-latency execution',
      'Contextual multi-turn dialogue memory for complex instructions',
      'Automated desktop workflow triggers and information summaries',
    ],
    myContribution:
      'Scoped requirements, implemented the speech-to-intent pipeline in Python, and integrated LLM function calling for system actions.',
    technologies: ['Python', 'OpenAI API / Gemini API', 'Speech Recognition', 'NLP', 'Async Programming'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'amd-hackathon-ml',
    title: 'AMD AI Reinforcement Learning & Predictive ML',
    tagline: 'Data preprocessing, feature engineering, and predictive ML models built during the AMD AI RL Hackathon at IIT Delhi.',
    category: 'ML & Research',
    featured: false,
    statusBadge: 'Hackathon Project',
    problem:
      'Rapidly modeling complex sequential decision-making and predictive analytics under strict hackathon time and compute constraints.',
    solution:
      'Developed data preprocessing pipelines, engineered predictive features, and evaluated reinforcement learning and machine learning models for high-accuracy scoring.',
    architectureDetails: [
      'Robust data cleaning and missing value imputation pipeline',
      'Feature correlation analysis and dimensional reduction',
      'Model validation with cross-validation and hyperparameter tuning',
    ],
    keyFeatures: [
      'High-speed data ingestion and exploratory visual reporting',
      'Comparative evaluation between ensemble methods and RL baseline',
      'Stakeholder-ready summary of model performance metrics',
    ],
    myContribution:
      'Engineered the ML pipeline, performed feature engineering, and conducted model evaluation at the IIT Delhi hackathon venue.',
    technologies: ['Python', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter Notebook'],
    githubUrl: 'https://github.com',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'future-interns-ml',
    role: 'Machine Learning Intern',
    organization: 'Future Interns',
    period: 'Dec 2025 – Jan 2026',
    type: 'Internship',
    category: 'Engineering & AI',
    badge: 'Industry Internship',
    bullets: [
      'Built a customer churn prediction model using engineered behavioral features to accurately flag at-risk accounts for proactive retention outreach.',
      'Developed an LLM-powered conversational assistant using OpenAI and Gemini APIs with structured prompt engineering and response guardrails.',
      'Performed rigorous data preprocessing, feature engineering, and model evaluation across multiple ML workflows in Python.',
      'Built KPI dashboards used for business insight reporting, translating raw model telemetry and metrics into stakeholder-ready visuals.',
      'Collaborated cross-functionally on predictive analytics models, gathering requirements and communicating technical trade-offs to non-technical stakeholders.',
      'Practiced end-to-end product thinking from raw data preprocessing through user insight delivery.',
    ],
    skills: ['Python', 'Machine Learning', 'OpenAI API', 'Gemini API', 'Scikit-learn', 'KPI Dashboards', 'Stakeholder Communication'],
  },
];

export const JOB_SIMULATIONS: ExperienceItem[] = [
  {
    id: 'bcg-x',
    role: 'GenAI Consultant Simulation',
    organization: 'BCG X (Forage)',
    period: 'Jul 2026',
    type: 'Job Simulation',
    category: 'Engineering & AI',
    badge: 'GenAI & Financial AI',
    bullets: [
      'Extracted, structured, and analyzed complex financial data across enterprise corporate documents.',
      'Developed an AI-powered financial conversational chatbot capable of answering complex metric inquiries with data grounding.',
      'Structured technical output into concise executive-ready business insights.',
    ],
    skills: ['Generative AI', 'Data Extraction', 'Financial Chatbot', 'Python', 'Executive Reporting'],
  },
  {
    id: 'aws-sim',
    role: 'Solutions Architect Simulation',
    organization: 'Amazon Web Services (AWS) (Forage)',
    period: 'Sep 2025',
    type: 'Job Simulation',
    category: 'Engineering & AI',
    badge: 'Cloud Architecture',
    bullets: [
      'Designed a scalable, highly available cloud hosting architecture aligned with AWS Well-Architected Framework principles.',
      'Formulated trade-offs between compute latency, multi-region redundancy, and cost optimization.',
    ],
    skills: ['Solutions Architecture', 'Cloud Infrastructure', 'Scalability', 'System Design'],
  },
  {
    id: 'jpmorgan-sim',
    role: 'Software Engineering Simulation',
    organization: 'JPMorgan Chase (Forage)',
    period: 'Sep 2025',
    type: 'Job Simulation',
    category: 'Engineering & AI',
    badge: 'Backend & Event Streams',
    bullets: [
      'Designed and built high-performance REST APIs integrated with Apache Kafka event streams and H2 in-memory databases.',
      'Evaluated distributed data consistency and system performance under simulated financial transaction loads.',
    ],
    skills: ['REST APIs', 'Apache Kafka', 'H2 Database', 'Backend Architecture'],
  },
  {
    id: 'siemens-pm',
    role: 'Project Manager Simulation',
    organization: 'Siemens (Forage)',
    period: 'Jul 2026',
    type: 'Job Simulation',
    category: 'Product & Project Management',
    badge: 'KPIs & Delivery Governance',
    bullets: [
      'Formulated actionable KPIs and structured tracking dashboards to monitor software engineering milestones and delivery progress.',
      'Managed risk mitigation strategies and cross-team dependencies across technical deliverables.',
    ],
    skills: ['KPI Development', 'Project Dashboards', 'Risk Mitigation', 'Delivery Governance'],
  },
  {
    id: 'pm-forage',
    role: 'Product Management Simulation',
    organization: 'Product Management (Forage)',
    period: 'Aug 2026',
    type: 'Job Simulation',
    category: 'Product & Project Management',
    badge: 'Product Strategy',
    bullets: [
      'Analyzed user product performance metrics, retention funnels, and churn indicators.',
      'Planned, structured, and delivered a persuasive stakeholder presentation justifying feature roadmap prioritization.',
    ],
    skills: ['Product Analytics', 'Roadmap Prioritization', 'Stakeholder Presentations', 'User Funnels'],
  },
  {
    id: 'lloyds-sim',
    role: 'Technology Engineering Simulation',
    organization: 'Lloyds Banking Group (Forage)',
    period: 'Sep 2025',
    type: 'Job Simulation',
    category: 'Product & Project Management',
    badge: 'Design Thinking & Testing',
    bullets: [
      'Applied a formal design-thinking framework: deeply understood user customer pain points, engineered a viable solution, built and tested prototypes, and iterated on feedback.',
    ],
    skills: ['Design Thinking', 'Customer Needs', 'Solution Prototyping', 'Iterative Testing'],
  },
  {
    id: 'tata-analytics',
    role: 'GenAI Powered Data Analytics Simulation',
    organization: 'TATA (Forage)',
    period: 'Sep 2025',
    type: 'Job Simulation',
    category: 'Engineering & AI',
    badge: 'Data Storytelling & Risk',
    bullets: [
      'Conducted exploratory data analysis and predictive risk profiling on high-volume customer accounts.',
      'Synthesized findings into a business report and strategic data narrative to inform an optimized collections strategy.',
    ],
    skills: ['GenAI Data Analytics', 'Risk Profiling', 'Business Storytelling', 'EDA'],
  },
  {
    id: 'walmart-sim',
    role: 'Advanced Software Engineering Simulation',
    organization: 'Walmart Global Tech (Forage)',
    period: 'Sep 2025',
    type: 'Job Simulation',
    category: 'Engineering & AI',
    badge: 'Data Structures & Architecture',
    bullets: [
      'Worked across advanced data structures, software architecture patterns, and relational database schema optimizations.',
    ],
    skills: ['Data Structures', 'Database Design', 'Software Architecture'],
  },
  {
    id: 'vista-ai',
    role: 'AI in Action Simulation',
    organization: 'VISTA (Forage)',
    period: 'Jul 2026',
    type: 'Job Simulation',
    category: 'Engineering & AI',
    badge: 'Prompt Engineering',
    bullets: [
      'Built deep fluency in prompt and contextual engineering, automating enterprise professional workflows using generative AI.',
    ],
    skills: ['Contextual Prompting', 'Workflow Automation', 'AI Integration'],
  },
  {
    id: 'eab-sim',
    role: 'GenAI for Proposal Generation Simulation',
    organization: 'EAB (Forage)',
    period: 'Jul 2026',
    type: 'Job Simulation',
    category: 'Product & Project Management',
    badge: 'Iterative Discovery',
    bullets: [
      'Leveraged generative AI systems to draft, refine, and evaluate business proposals through iterative client discovery.',
    ],
    skills: ['Proposal Generation', 'Discovery Framing', 'Iterative Prompting'],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'apertre-top50',
    title: 'Top 50 Performer — APERTRE 3.0 Open Source Program',
    issuer: 'APERTRE 3.0 Open Source Program',
    date: '2026',
    category: 'Open Source',
    highlightMetric: 'Top 50',
    description: 'Recognized as a Top 50 Performer across nationwide open-source contributions, pull requests, and software deliverables.',
    verificationBadge: 'Verified Top Performer',
  },
  {
    id: 'amd-iitd',
    title: 'AMD AI Reinforcement Learning Hackathon',
    issuer: 'IIT Delhi & AMD',
    date: 'Feb 2026',
    category: 'Hackathon',
    highlightMetric: 'IIT Delhi',
    description: 'Competed on-site at IIT Delhi, engineering ML preprocessing pipelines, predictive models, and reinforcement learning strategies under rigorous competition constraints.',
    verificationBadge: 'IIT Delhi On-Site',
  },
  {
    id: 'quizoff-2026',
    title: "QuizOff 2026: India's Biggest AI Quiz",
    issuer: 'National AI Initiative',
    date: 'Jul 2026',
    category: 'Competition',
    highlightMetric: '5,25,000+ Competitors',
    description: "Competed in India's largest AI competition alongside 5,25,000+ students representing 48,500+ academic institutions nationwide.",
    verificationBadge: 'Nationwide Competitor',
  },
  {
    id: 'lyzr-agent-cert',
    title: 'AI Agent Development Certification',
    issuer: 'Lyzr Agent Studio & Architect',
    date: 'Feb 2026',
    category: 'Certification',
    highlightMetric: 'Certified Agent Architect',
    description: 'Specialized credential validating expertise in multi-agent orchestration, autonomous agents, tool integrations, and agentic workflows.',
    verificationBadge: 'Verified Certification',
  },
  {
    id: 'guvi-hcl-genai',
    title: 'Master Generative AI: Roadmap to a Successful Career',
    issuer: 'GUVI x HCL Workshop',
    date: 'Dec 2025',
    category: 'Certification',
    description: 'Intensive workshop covering state-of-the-art generative AI pipelines, transformer foundations, and production application blueprints.',
    verificationBadge: 'Verified Workshop',
  },
  {
    id: 'tcs-ion-ai',
    title: 'Generative AI Essentials & AI/Cybersecurity Awareness',
    issuer: 'TCS iON ("AI for All" Initiative)',
    date: 'Apr 2026',
    category: 'Certification',
    description: 'Comprehensive certification in generative AI mechanics, safety guardrails, cybersecurity implications, and responsible AI governance.',
    verificationBadge: 'TCS iON Verified',
  },
];

export const HACKATHON_LIST = [
  { name: 'AMD AI Reinforcement Learning Hackathon', organizer: 'IIT Delhi', year: '2026', role: 'ML & Predictive Modeling' },
  { name: 'HackIndia Spark 4', organizer: 'HackIndia', year: '2026', role: 'Full-Stack & AI Builder' },
  { name: 'India Innovates 2026', organizer: 'National Innovation Hub', year: '2026', role: 'Product & System Architect' },
  { name: 'MasterX Hackathon', organizer: 'MasterX', year: '2026', role: 'AI Systems Developer' },
  { name: 'Unstop RIFT \'26 & Execute 5.0', organizer: 'Unstop', year: '2026', role: 'Algorithm & System Builder' },
  { name: 'HackO\'Clock 2.0', organizer: 'Hackathon Community', year: '2026', role: 'AI/ML Engineering' },
];

export const WORKSHOPS_AND_PROGRAMS = [
  { name: 'Google & Kaggle 5-Day AI Agents Course', focus: 'Multi-Agent Systems & Tool Calling' },
  { name: 'Bleep Prompt Engineering', focus: 'Cisco & E-Cell IIT Hyderabad' },
  { name: 'Be10x AI Tools Workshop', focus: 'Productivity & Autonomous Tooling' },
  { name: 'Forage Data Labeling with PII Governance', focus: 'Data Quality & Privacy Compliance' },
  { name: 'Mastering Technical Interviews', focus: 'Structured Problem Solving & System Communication' },
];

export const RESEARCH_AND_EXPERIMENTS = [
  {
    id: 'exp-1',
    title: 'Permission-Aware Vector Retrieval in Cyclic Multi-Agent Systems',
    status: 'Experimental Build in NEXUS',
    domain: 'Enterprise RAG & Access Control',
    abstract:
      'Traditional RAG pipelines retrieve chunk embeddings indiscriminately from dense vector databases, creating major data leakage risks in multi-tenant enterprise environments. In this architectural experiment, we evaluate pre-filtering vs metadata payload filtering in Pinecone and FAISS, integrated directly into LangGraph state graphs before LLM context synthesis.',
    stack: ['LangGraph', 'FAISS', 'Pinecone', 'Python', 'FastAPI'],
    keyFindings: [
      'Metadata payload pre-filtering eliminates unauthorized chunk retrieval with <4ms latency overhead.',
      'LangGraph supervisor routing isolates sensitive queries to verified domain agents only.',
    ],
  },
  {
    id: 'exp-2',
    title: 'Predictive Churn Modeling with Engineered Customer Features & LLM Outreach',
    status: 'Applied ML Experiment at Future Interns',
    domain: 'Supervised ML + LLM Automation',
    abstract:
      'Explored bridging classical tree-based classification (Scikit-learn) for customer churn risk scoring with automated personalized retention outreach via LLM APIs (OpenAI & Gemini), converting raw tabular risk factors into contextualized customer success interventions.',
    stack: ['Python', 'Scikit-learn', 'OpenAI API', 'Gemini API', 'Pandas'],
    keyFindings: [
      'Engineered engagement frequency and ticket resolution lag yielded the highest feature importance.',
      'Context-injected LLM draft messages reduced retention turnaround time while keeping humans in the loop.',
    ],
  },
  {
    id: 'exp-3',
    title: 'Real-Time Multimodal Intent Routing & Voice Synthesis',
    status: 'Autonomous Voice System Prototype',
    domain: 'Conversational Voice & Tool Execution',
    abstract:
      'Engineered an end-to-end voice-command pipeline evaluating low-latency audio capture, streaming transcription, intent classification via structured function calling, and asynchronous execution of desktop workflows.',
    stack: ['Python', 'SpeechRecognition', 'LLM Function Calling', 'AsyncIO'],
    keyFindings: [
      'Async streaming dialogue loops reduced perceived response latency by 42% compared to sequential execution.',
    ],
  },
];

export const BUILD_LOG_ARTICLES: BuildLogArticle[] = [
  {
    id: 'architecting-nexus-rag',
    title: 'Why Enterprise RAG Needs State Graphs, Not Just Chains',
    category: 'AI Architecture',
    readTime: '5 min read',
    date: 'Feb 2026',
    summary:
      'Linear LangChain pipelines break down when an agent encounters missing context, ambiguity, or permission constraints. Here is why we switched to LangGraph cyclic state machines in NEXUS.',
    takeaways: [
      'Linear chains fail silently on imperfect retrieval; cyclic graphs allow query rewriting and re-evaluation.',
      'Permission boundaries must be enforced at retrieval time, not as a post-generation prompt guardrail.',
      'Pydantic structured outputs prevent tool calling hallucinations in multi-agent handoffs.',
    ],
    content: [
      'When building simple prototypes, standard vector search with a top-k retrieval chain works smoothly. But when designing an enterprise platform like NEXUS, real-world edge cases quickly surface: What if the retrieved chunks do not answer the user question? What if the user does not possess security clearance for the retrieved document? What if the tool call fails?',
      'In a linear chain (LangChain Expression Language), errors cascade downwards. By migrating to LangGraph state machines, we model AI agents as cyclic graphs with explicit state schemas. If a retrieved chunk has low relevance score, a feedback node triggers query rewriting or fallback retrieval rather than fabricating a response.',
      'Furthermore, separating the Agent Supervisor from specialized tool-executing Worker Agents ensures that sensitive API calls (like n8n webhook triggers or database updates) require explicit confirmation gates before mutating live data.',
    ],
    tags: ['LangGraph', 'RAG', 'Python', 'Enterprise AI', 'System Design'],
  },
  {
    id: 'product-thinking-for-engineers',
    title: 'Why Great AI Engineers Must Write PRDs and Think in KPIs',
    category: 'Product & Engineering',
    readTime: '4 min read',
    date: 'Jan 2026',
    summary:
      'Building an accurate model is only half the battle. If you cannot define the core problem, user journey, and business trade-offs, even the smartest LLM app fails to deliver value.',
    takeaways: [
      'A Product Requirements Document (PRD) clarifies latency, cost per query, and accuracy constraints before writing code.',
      'Translating technical metrics (F1 score, precision) into business KPIs (churn reduced, hours saved) aligns engineering with stakeholders.',
      'Customer discovery prevents over-engineering non-critical features.',
    ],
    content: [
      'During my internships and industry simulations with Siemens, BCG X, and Lloyds Banking Group, one insight repeated itself: technical fluency is magnified tenfold when paired with clear product discovery and structured communication.',
      'When building HemoLink, the hardest engineering problem was not database indexing—it was understanding why existing emergency blood groups fail (latency in notifications, spam, lack of verified availability). Defining user stories and acceptance criteria first meant we built a lean, high-impact matching engine rather than unnecessary fluff.',
      'For every AI project I build now, I begin with a structured PRD: What is the core problem? What are the non-functional requirements (p95 latency, token cost budget)? How will we measure success? This bridges the gap between high-level ideas and rock-solid software.',
    ],
    tags: ['Product Management', 'PRD', 'KPIs', 'Engineering Culture', 'Design Thinking'],
  },
];
