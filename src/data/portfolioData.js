export const siteData = {
  name: "Vinay Kumar Tanneeru",
  shortName: "Vinay",
  role: "ML Engineer",
  headline:
    "I build AI systems, organize product thinking, and turn machine learning work into reliable user-facing experiences.",
  availability: "Open to ML engineering, AI platform, and cloud-focused opportunities.",
  intro:
    "I build AI systems that work in production, not just in notebooks. From model training to cloud deployment, I care about every layer of the stack.",
  location: "Based in the United States",
  email: "vinaykumartanneeru@gmail.com",
  github: "https://github.com/tvk12",
  linkedin: "https://www.linkedin.com/in/vinaykumartanneeru/",
  resumeHref: "/resume.pdf",
  brandLines: ["VINAY", ".KT"],
  profileImage: "/photo.png",
};

export const homeHero = {
  eyebrow: "ML engineer, cloud systems, product-minded execution",
  title:
    "I build intelligent systems, organize products, and transform ideas into reliable AI experiences.",
  mood: "Building",
  status: "production-ready systems",
};

export const heroSkillGroups = [
  {
    title: "AI / ML",
    icon: "ai",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "NLP", "LLMs", "MLOps"],
  },
  {
    title: "Cloud / DevOps",
    icon: "cloud",
    items: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform", "Jenkins"],
  },
  {
    title: "Data",
    icon: "data",
    items: ["SQL", "Pandas", "NoSQL", "Kafka", "ETL", "Distributed Systems"],
  },
  {
    title: "Languages / API",
    icon: "code",
    items: ["Python", "Java", "C++", "FastAPI", "React", "Serverless"],
  },
];

export const heroHighlights = [
  {
    icon: "clock3",
    title: "Experience",
    value: "AI / ML",
    detail:
      "Production-focused work across machine learning, backend systems, and cloud delivery.",
  },
  {
    icon: "code2",
    title: "Front-end",
    value: "React",
    detail:
      "Solid technical foundation for interface implementation, product polish, and developer handoff.",
  },
  {
    icon: "compass",
    title: "Main strategy",
    value: "Scale",
    detail:
      "Consistency, documentation, and sustainable system design for long-term product growth.",
  },
  {
    icon: "house",
    title: "Work model",
    value: "Remote",
    detail:
      "Distributed collaboration across product, engineering, and cloud-based workflows.",
  },
];

export const featuredCaseStudy = {
  eyebrow: "Featured case study",
  title: "SMS Spam Detection",
  description:
    "A production-style NLP system using BERT, optimized inference, and FastAPI delivery for high-confidence spam detection.",
  bullets: [
    "Transformer-based classification",
    "Sub-100ms optimized inference",
    "FastAPI deployment pipeline",
    "Built for practical production constraints",
  ],
  actions: [
    {
      label: "Learn about the project",
      href: "https://github.com/tvk12/SMS-Spam-Detection",
      tone: "purple",
    },
    {
      label: "Live demo",
      href: "https://vinay-sms-spam.vercel.app",
      tone: "yellow",
    },
    {
      label: "View code",
      href: "https://github.com/tvk12/SMS-Spam-Detection",
      tone: "yellow",
    },
  ],
};

export const projectGallery = [
  {
    key: "spam",
    title: "SMS Spam Detection",
    subtitle: "( NLP / BERT )",
    tone: "yellow",
    artwork: "logo-v",
    image: "/project-journey/spam-sms-detection.png",
  },
  {
    key: "stroke",
    title: "Brain Stroke Predictor",
    subtitle: "( Clinical ML )",
    tone: "red",
    artwork: "arc",
    image: "/project-journey/brain-stroke-predictor.png",
  },
  {
    key: "news",
    title: "News Legitimacy Verifier",
    subtitle: "( NLP pipeline )",
    tone: "white",
    artwork: "swoosh",
    image: "/project-journey/news-legitimacy-verifier.png",
  },
  {
    key: "cloud",
    title: "Cloud & MLOps",
    subtitle: "( System work )",
    tone: "green",
    artwork: "grid",
    image: "/project-journey/cloud-mlops.png",
  },
  {
    key: "mlops",
    title: "Applied Deployment",
    subtitle: "( Production )",
    tone: "orange",
    artwork: "pilot",
    image: "/project-journey/applied-deployment.png",
  },
  {
    key: "healmind",
    title: "HealMind Wellness Companion",
    subtitle: "( Mobile App )",
    tone: "green",
    artwork: "healmind",
    image: "/project-journey/healmind-wellness-companion.png",
  },
  {
    key: "neuralyn",
    title: "Neuralyn Workspace",
    subtitle: "( AI Workspace )",
    tone: "white",
    artwork: "neuralyn",
    image: "/project-journey/neuralyn-workspace.png",
  },
];

export const featuredProjects = [
  {
    id: "01",
    title: "SMS Spam Detection",
    description:
      "Transformer-based spam classification service optimized for fast inference and practical deployment.",
    summary:
      "Fine-tuned BERT with ONNX optimization and served it through FastAPI for sub-100ms inference in a production-style deployment.",
    links: {
      github: "https://github.com/tvk12/SMS-Spam-Detection",
      demo: "https://vinay-sms-spam.vercel.app",
    },
    artwork: "spam-dashboard",
    cardTone: "lavender",
  },
  {
    id: "02",
    title: "Brain Stroke Predictor",
    description:
      "Clinical risk scoring pipeline designed for high recall and better interpretability on imbalanced patient data.",
    summary:
      "Combined feature engineering, SMOTE, and ensemble models to prioritize recall for a medically sensitive use case.",
    links: {
      github: "https://github.com/tvk12/Brain-Stroke-Detection",
    },
    artwork: "logo-v",
    cardTone: "lavender",
  },
  {
    id: "03",
    title: "News Legitimacy Verifier",
    description:
      "Real-time article classification workflow created to flag misinformation patterns at scale.",
    summary:
      "Built with TF-IDF and a PassiveAggressive classifier to balance accuracy, speed, and scalable text processing.",
    links: {
      github: "https://github.com/tvk12/News-Legitimacy",
    },
    artwork: "split-screen",
    cardTone: "lavender",
  },
];

export const projects = [
  {
    id: "01",
    title: "SMS Spam Detection",
    eyebrow: "NLP · Production API",
    description:
      "Transformer-based spam classification service optimized for fast inference and real deployment scenarios.",
    summary:
      "Fine-tuned BERT with ONNX optimization and served it through FastAPI for sub-100ms inference in a production-style deployment.",
    tags: ["PyTorch", "BERT", "FastAPI", "Docker", "AWS"],
    metrics: {
      Accuracy: "98.2%",
      Precision: "97.5%",
      Recall: "96.8%",
      Inference: "<100ms",
    },
    links: {
      github: "https://github.com/tvk12/SMS-Spam-Detection",
      demo: "https://vinay-sms-spam.vercel.app",
    },
    details: {
      challenge:
        "SMS spam evolves quickly, and basic keyword filters fail against more adversarial or context-aware attacks.",
      approach:
        "Used a fine-tuned bert-base-uncased classifier with class balancing, model optimization, and an API wrapper suitable for deployment.",
      outcome:
        "Delivered high accuracy with efficient latency while keeping the inference stack practical for real-world use.",
      notes: [
        "Monitored false positives for legitimate promotional content.",
        "Avoided logging sensitive message content during inference.",
        "Applied rate limiting to reduce abuse of the public endpoint.",
      ],
    },
    artwork: "logo-v",
    cardTone: "lavender",
  },
  {
    id: "02",
    title: "Brain Stroke Predictor",
    eyebrow: "Healthcare ML",
    description:
      "Clinical risk scoring pipeline designed for high recall and better interpretability on imbalanced patient data.",
    summary:
      "Combined feature engineering, SMOTE, and ensemble models to prioritize recall for a medically sensitive use case.",
    tags: ["Scikit-Learn", "XGBoost", "SMOTE", "Streamlit", "Plotly"],
    metrics: {
      Accuracy: "95.1%",
      Precision: "89.0%",
      Recall: "94.0%",
      "F1 Score": "0.91",
    },
    links: {
      github: "https://github.com/tvk12/Brain-Stroke-Detection",
    },
    details: {
      challenge:
        "Clinical datasets are highly imbalanced, and missing a positive case can be much more costly than a false alarm.",
      approach:
        "Built a preprocessing and modeling pipeline with SMOTE, engineered features, and an ensemble of XGBoost and Random Forest models.",
      outcome:
        "Produced a strong-recall system with dashboard support and explainability signals for practical use.",
      notes: [
        "The tool is assistive and not intended as a diagnostic replacement.",
        "Feature importance was surfaced to improve transparency.",
        "Class imbalance handling was central to the model strategy.",
      ],
    },
    artwork: "split-screen",
    cardTone: "lavender",
  },
  {
    id: "03",
    title: "News Legitimacy Verifier",
    eyebrow: "Misinformation Detection",
    description:
      "Real-time article classification pipeline designed to flag likely misinformation patterns at scale.",
    summary:
      "Created a modular NLP flow using TF-IDF and a PassiveAggressive classifier to balance accuracy and computational efficiency.",
    tags: ["NLP", "TF-IDF", "Scikit-Learn", "Flask", "NLTK", "Pandas"],
    metrics: {
      Accuracy: "93.4%",
      Precision: "92.5%",
      Recall: "94.1%",
      Dataset: "40k+ articles",
    },
    links: {
      github: "https://github.com/tvk12/News-Legitimacy",
    },
    details: {
      challenge:
        "Misinformation spreads fast, so verification tools need to process large volumes of text without becoming too slow or opaque.",
      approach:
        "Used tokenization, stop-word removal, TF-IDF vectorization, and a PassiveAggressiveClassifier suited for iterative learning and lower latency.",
      outcome:
        "Delivered an efficient text-classification workflow that scales better than heavier approaches for this use case.",
      notes: [
        "The system detects stylistic and linguistic patterns, not universal factual truth.",
        "Dataset composition was considered to reduce overt source bias.",
        "The project was framed to avoid misuse for adversarial content generation.",
      ],
    },
    artwork: "dark-dashboard",
    cardTone: "lavender",
  },
  {
    id: "04",
    title: "HealMind Wellness Mobile App",
    eyebrow: "Mobile Health AI",
    description:
      "AI-assisted wellness mobile experience designed to support daily reflection, guidance, and habit consistency.",
    summary:
      "Built as a mobile-first product concept focused on accessible wellness support, lightweight interaction design, and practical AI assistance.",
    tags: ["React Native", "Mobile UX", "Wellness AI", "LLMs"],
    metrics: {
      Platform: "Mobile",
      Focus: "Wellness",
      Mode: "AI Guided",
      UX: "Mobile-first",
    },
    links: {
      demo: "https://apps.apple.com/us/app/healmind-wellness-app/id6760637708",
    },
    details: {
      challenge:
        "Wellness products need to feel supportive, private, and low-friction rather than overwhelming or overly clinical.",
      approach:
        "Designed a mobile wellness flow centered on simple interactions, supportive prompts, and AI-assisted engagement patterns.",
      outcome:
        "Created a concept that balances emotional design, usability, and scalable AI product thinking.",
      notes: [
        "Prioritized supportive UX over notification-heavy engagement.",
        "Considered privacy-sensitive interaction patterns.",
        "Framed the app around habit support and emotional clarity.",
      ],
    },
    artwork: "healmind",
    cardTone: "lavender",
  },
  {
    id: "05",
    title: "HealMind Wellness Web App",
    eyebrow: "Web Wellness Platform",
    description:
      "Browser-based wellness platform extending the HealMind experience with dashboards, guided sessions, and account-level continuity.",
    summary:
      "Designed as a complementary web experience for broader accessibility, structured flows, and richer analytics-friendly interfaces.",
    tags: ["React", "Web App", "Dashboard", "AI UX"],
    metrics: {
      Platform: "Web",
      Focus: "Wellness",
      Experience: "Dashboard",
      Access: "Cross-device",
    },
    links: {
      github: siteData.github,
    },
    details: {
      challenge:
        "A web experience must support deeper workflows and continuity without losing the calm, focused tone of the product.",
      approach:
        "Shaped the web app around guided modules, cleaner dashboards, and cross-device usability for longer sessions.",
      outcome:
        "Produced a web extension of the wellness product that feels structured, scalable, and product-ready.",
      notes: [
        "Extended the core HealMind language into a broader dashboard format.",
        "Optimized for accessibility and longer-form usage.",
        "Kept the interface focused on clarity and emotional safety.",
      ],
    },
    artwork: "split-screen",
    cardTone: "lavender",
  },
  {
    id: "06",
    title: "Grocery Agent",
    eyebrow: "Agentic Shopping Assistant",
    description:
      "AI agent concept for planning grocery runs, organizing lists, and recommending efficient shopping decisions from user intent.",
    summary:
      "Built around agentic workflows that translate natural-language requests into structured shopping actions, preferences, and prioritization.",
    tags: ["Agents", "Planning", "Automation", "LLMs"],
    metrics: {
      Type: "AI Agent",
      Domain: "Retail",
      Input: "Natural Language",
      Output: "Actionable Lists",
    },
    links: {
      github: "https://github.com/tvk12/Grocery-Agent",
    },
    details: {
      challenge:
        "Grocery planning involves fragmented user intent, budget tradeoffs, and repetitive manual organization.",
      approach:
        "Designed an AI-driven agent flow that captures intent, builds structured lists, and helps optimize decisions around shopping tasks.",
      outcome:
        "Created a practical agent use case focused on utility, planning clarity, and real-world everyday assistance.",
      notes: [
        "Focused on decision support rather than generic chatbot behavior.",
        "Structured outputs to make the agent genuinely usable.",
        "Designed for extensibility into future retail workflows.",
      ],
    },
    artwork: "grocery-agent",
    cardTone: "lavender",
  },
];

export const aboutParagraphs = [
  "I build ML systems that work in the real world. Currently co-founding Neuralyn, where I focus on turning promising AI ideas into production-ready tools that solve concrete business problems.",
  "My background spans model development, data engineering, API design, and cloud infrastructure. I care about the full lifecycle: reliable data flows, efficient training, fast inference, observable deployments, and thoughtful developer experience.",
  "I completed my M.S. in Computer Science at the University of Dayton in December 2024. My work and coursework centered on machine learning, AI, NLP, cloud computing, and scalable systems.",
  "Outside of shipping products, I think a lot about model ethics, interpretability, and the gap between research prototypes and systems people can actually trust.",
];

export const aboutHighlights = [
  {
    icon: "clock3",
    title: "Experience",
    value: "AI / ML",
    detail: "Machine learning systems, product delivery, and collaboration with engineering.",
  },
  {
    icon: "compass",
    title: "Specialty",
    value: "Scale",
    detail: "Documentation, governance, and maintainable systems built with a systemic approach.",
  },
  {
    icon: "code2",
    title: "Technical basis",
    value: "Front-end",
    detail: "Implementation analysis, feasibility study, and translation of design into real interface.",
  },
  {
    icon: "house",
    title: "Work model",
    value: "Remote",
    detail: "Distributed collaboration, clear rituals, and steady alignment across teams.",
  },
];

export const valueCards = [
  {
    title: "Where do I generate the most value?",
    body:
      "Documentation, tokens, library maintenance, governance, and translation of design criteria into real-world implementation.",
    tone: "white",
  },
  {
    title: "How I work",
    body:
      "With proximity between areas, coherent technical defense, and enough organization to scale quality without losing clarity.",
    tone: "blue",
  },
];

export const operationCards = [
  {
    icon: "compass",
    title: "Governance",
    body:
      "Create a structure so the system keeps growing without becoming operational noise.",
  },
  {
    icon: "clock3",
    title: "Documentation",
    body:
      "Provide enough context for use, decisions, and maintenance without turning the system into bureaucracy.",
  },
  {
    icon: "code2",
    title: "Tokens and libraries",
    body:
      "Organize the visual and technical foundation to scale implementation consistently.",
  },
  {
    icon: "house",
    title: "Partnership with engineering",
    body:
      "Connect stakeholders, design, and development in the same conversation.",
  },
];

export const trajectory = [
  {
    period: "2024 - Present",
    title: "Co-Founder & Founding ML Engineer",
    org: "Neuralyn LLC",
    detail:
      "Building AI products from the ground up across product direction, model workflows, backend services, and deployment architecture.",
    type: "Work",
  },
  {
    period: "2023 - 2024",
    title: "Master of Science in Computer Science",
    org: "University of Dayton",
    detail:
      "Dean's List with a 3.64/4.0 GPA. Coursework included machine learning, artificial intelligence, NLP, cloud computing, computer vision, and database systems.",
    type: "Education",
  },
  {
    period: "2019 - 2023",
    title: "Bachelor of Science in Computer Science",
    org: "Sri Vasavi Engineering College",
    detail:
      "Built a strong foundation in algorithms, data structures, software engineering, and systems thinking.",
    type: "Education",
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Dayton, Dayton, OH",
    period: "December 2024",
    meta: "GPA 3.64/4.0 · Dean's List",
    description:
      "Relevant coursework: Machine Learning, Artificial Intelligence, Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Vision, Natural Language Processing, and Cloud Computing Frameworks.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Sri Vasavi Engineering College, Andhra Pradesh, India",
    period: "2023",
    meta: "Undergraduate studies",
    description:
      "Strong foundation in core computer science principles, engineering fundamentals, and software problem solving.",
  },
];

export const certifications = [
  "National Level Project Expo 2022",
  "APSSDC AWS Cloud Computing 2021",
];

export const socialLinks = [
  { label: "LinkedIn", href: siteData.linkedin, external: true },
  { label: "GitHub", href: siteData.github, external: true },
  { label: "Email", href: `mailto:${siteData.email}`, external: false },
  { label: "Resume", href: siteData.resumeHref, external: true },
];
