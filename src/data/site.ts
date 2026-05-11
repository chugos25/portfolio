import type { Locale } from "@/lib/site";

export type LocalizedText = Record<Locale, string>;

export type LocalizedList = Record<Locale, string[]>;

const t = (es: string, en: string): LocalizedText => ({ es, en });

export const navigation = [
  { href: "/", label: t("Inicio", "Home") },
  { href: "/projects", label: t("Proyectos", "Projects") },
  { href: "/about", label: t("Sobre mí", "About") },
  { href: "/cv", label: t("CV", "CV") },
  { href: "/contact", label: t("Contacto", "Contact") },
];

export const commonLabels = {
  downloadCv: t("Descargar CV", "Download CV"),
  viewProjects: t("Ver proyectos", "View projects"),
  contact: t("Contactar", "Contact"),
  viewCase: t("Ver caso", "View case"),
  methodsTools: t("Métodos y herramientas", "Methods and tools"),
  relatedProjects: t("Proyectos relacionados", "Related projects"),
  assets: t("Recursos", "Assets"),
  projected: t("Proyectado", "Projected"),
  groupProject: t("Proyecto grupal", "Group project"),
  academicProject: t("Proyecto académico", "Academic project"),
  professionalCase: t("Caso profesional", "Professional case"),
  confidentiality: t("Por confidencialidad", "For confidentiality"),
  moreProjects: t("Más proyectos", "More projects"),
  currentlyLearning: t("Actualmente reforzando", "Currently learning"),
  placeholderReady: t("Próximamente", "Coming soon"),
  viewSummary: t("Ver resumen", "View summary"),
  downloadReport: t("Descargar informe", "Download report"),
  viewNotebook: t("Ver notebook", "View notebook"),
  viewDashboard: t("Ver dashboard", "View dashboard"),
  publication: t("Publication / ORCID", "Publication / ORCID"),
};

export const filterLabels: Record<string, LocalizedText> = {
  all: t("Todos", "All"),
  "strategy-growth": t("Strategy & Growth", "Strategy & Growth"),
  "marketing-analytics-performance": t(
    "Marketing Analytics & Performance",
    "Marketing Analytics & Performance",
  ),
  "consumer-market-insights": t(
    "Consumer & Market Insights",
    "Consumer & Market Insights",
  ),
  "quantitative-business-analysis": t(
    "Quantitative Business Analysis",
    "Quantitative Business Analysis",
  ),
  "automotive-mobility": t("Automotive / Mobility", "Automotive / Mobility"),
  ecommerce: t("E-commerce", "E-commerce"),
  "crm-bi": t("CRM / BI", "CRM / BI"),
};

export const footerContent = {
  note: t(
    "Portfolio académico-profesional. Algunos datos han sido anonimizados o sintetizados por confidencialidad.",
    "Academic-professional portfolio. Some data has been anonymized or synthesized for confidentiality.",
  ),
  github: t("GitHub (placeholder)", "GitHub (placeholder)"),
  orcid: t("ORCID (optional)", "ORCID (optional)"),
  copyright: t(
    "Hugo Sánchez Nieto. Todos los derechos reservados.",
    "Hugo Sánchez Nieto. All rights reserved.",
  ),
};

export const contactLinks = [
  {
    label: t("Email", "Email"),
    value: "sancheznietohugo@gmail.com",
    href: "mailto:sancheznietohugo@gmail.com",
  },
  {
    label: t("LinkedIn", "LinkedIn"),
    value: "linkedin.com/in/hugo-sanchez-nieto",
    href: "https://www.linkedin.com/in/hugo-sanchez-nieto/",
  },
  {
    label: t("GitHub", "GitHub"),
    value: "Placeholder",
    href: "",
  },
  {
    label: t("ORCID", "ORCID"),
    value: "Optional",
    href: "",
  },
];

export const homeContent = {
  hero: {
    name: "Hugo Sánchez Nieto",
    eyebrow: t("Perfil junior orientado a negocio", "Junior business-facing profile"),
    headline: t("Junior Business & Marketing Data Analyst", "Junior Business & Marketing Data Analyst"),
    subheadline: t(
      "Strategy · Analytics · Consumer Insights · Digital Growth",
      "Strategy · Analytics · Consumer Insights · Digital Growth",
    ),
    body: t(
      "Analizo problemas de negocio, marketing y comportamiento del consumidor para convertirlos en dashboards, segmentaciones, modelos e insights accionables. Busco incorporarme a consultoría, agencias, Big 4, multinacionales o equipos de growth donde pueda aprender rápido y aportar criterio analítico desde el primer día.",
      "I analyse business, marketing, and consumer-behaviour problems and turn them into dashboards, segmentation, models, and actionable insights. I am looking to join consulting firms, agencies, Big 4 teams, multinationals, or growth environments where I can learn quickly and contribute analytical judgement from day one.",
    ),
    primaryCta: t("Ver proyectos", "View projects"),
    secondaryCta: t("Descargar CV", "Download CV"),
    tertiaryCta: t("Contactar", "Contact"),
    visualCards: [
      {
        title: t("Funnel Analysis", "Funnel Analysis"),
        metric: t("Mapa de drop-off", "Drop-off map"),
        detail: t("Detectar fricción por etapa", "Identify friction by stage"),
      },
      {
        title: t("RFM Segmentation", "RFM Segmentation"),
        metric: t("6 segmentos", "6 segments"),
        detail: t("Priorizar retención y CRM", "Prioritise retention and CRM"),
      },
      {
        title: t("Pricing", "Pricing"),
        metric: t("Elasticidades", "Elasticities"),
        detail: t("Atributos que explican valor", "Attributes that explain value"),
      },
      {
        title: t("Consumer Insights", "Consumer Insights"),
        metric: t("350+ respuestas", "350+ responses"),
        detail: t("Barreras y motivaciones", "Barriers and motivations"),
      },
      {
        title: t("ROI / ROAS", "ROI / ROAS"),
        metric: t("ROAS proj. 12,95", "ROAS proj. 12.95"),
        detail: t("Escenarios proyectados", "Projected scenarios"),
      },
      {
        title: t("SEM / SEO", "SEM / SEO"),
        metric: t("Intento de búsqueda", "Search intent"),
        detail: t("Captación cualificada", "Qualified acquisition"),
      },
    ],
  },
  valueSection: {
    title: t("Qué aporto", "What I bring"),
    subtitle: t(
      "Marketing, análisis cuantitativo y decisión de negocio en el mismo marco de trabajo.",
      "Marketing, quantitative analysis, and business decision-making in the same working frame.",
    ),
    cards: [
      {
        title: t("Business & Strategy", "Business & Strategy"),
        text: t(
          "Análisis de mercado, diagnóstico competitivo, posicionamiento, customer journey, pricing, go-to-market, P&L, ROI, ROAS, CLV:CAC y recomendaciones accionables.",
          "Market analysis, competitive diagnosis, positioning, customer journey, pricing, go-to-market, P&L, ROI, ROAS, CLV:CAC, and actionable recommendations.",
        ),
      },
      {
        title: t("Marketing Analytics & Digital Growth", "Marketing Analytics & Digital Growth"),
        text: t(
          "SEO/SEM, performance marketing, funnel analysis, CRM, segmentación RFM, dashboards, KPIs, campañas digitales y reporting para optimizar captación, conversión y fidelización.",
          "SEO/SEM, performance marketing, funnel analysis, CRM, RFM segmentation, dashboards, KPIs, digital campaigns, and reporting to optimize acquisition, conversion, and retention.",
        ),
      },
      {
        title: t("Quantitative & Consumer Insights", "Quantitative & Consumer Insights"),
        text: t(
          "Investigación de mercados, análisis estadístico, regresión, SEM/CFA, MANOVA, inferencia bayesiana, clustering y modelos aplicados a comportamiento del consumidor y toma de decisiones.",
          "Market research, statistical analysis, regression, SEM/CFA, MANOVA, Bayesian inference, clustering, and models applied to consumer behaviour and decision-making.",
        ),
      },
    ],
  },
  featuredSection: {
    title: t("Proyectos seleccionados", "Featured projects"),
    subtitle: t(
      "Seis casos para ver cómo estructuro un problema, analizo datos y traduzco hallazgos a decisiones.",
      "Six cases showing how I structure a problem, analyse data, and translate findings into decisions.",
    ),
  },
  processSection: {
    title: t("Cómo trabajo", "How I work"),
    steps: [
      {
        title: t("Entender el problema de negocio", "Understand the business problem"),
        text: t(
          "Antes de elegir una herramienta, defino qué decisión hay que tomar, qué incertidumbre existe y qué métrica importa.",
          "Before choosing a tool, I define which decision needs to be made, what uncertainty exists, and which metric matters.",
        ),
      },
      {
        title: t("Estructurar datos y contexto", "Structure data and context"),
        text: t(
          "Combino datos cuantitativos, investigación de mercado, comportamiento del consumidor y contexto competitivo.",
          "I combine quantitative data, market research, consumer behaviour, and competitive context.",
        ),
      },
      {
        title: t("Analizar con rigor", "Analyse rigorously"),
        text: t(
          "Uso dashboards, modelos estadísticos, segmentación, benchmarking, forecasting o inferencia según lo que requiera el problema.",
          "I use dashboards, statistical models, segmentation, benchmarking, forecasting, or inference depending on what the problem requires.",
        ),
      },
      {
        title: t("Traducir a acción", "Translate into action"),
        text: t(
          "El análisis termina en recomendaciones claras: qué hacer, qué medir, qué priorizar y qué riesgos vigilar.",
          "The analysis ends with clear recommendations: what to do, what to measure, what to prioritise, and which risks to monitor.",
        ),
      },
    ],
  },
  metricsSection: {
    title: t("Métricas seleccionadas", "Selected metrics"),
    cards: [
      { value: "10/10", label: t("Matrícula de Honor — TFG", "Honours — bachelor thesis") },
      { value: "9.6/10", label: t("TFM Máster Marketing Digital", "Digital Marketing master thesis") },
      { value: "+2% ROI", label: t("Mejora atribuida en prácticas de performance", "Uplift contributed during performance internship") },
      { value: "100.000 €", label: t("Presupuesto modelizado — plan cooperativa oleícola", "Modelled budget — olive oil cooperative plan"), projected: true },
      { value: "5,12 %", label: t("ROI proyectado — plan cooperativa oleícola", "Projected ROI — olive oil cooperative plan"), projected: true },
      { value: "12,95", label: t("ROAS proyectado — plan cooperativa oleícola", "Projected ROAS — olive oil cooperative plan"), projected: true },
      { value: "4,3:1", label: t("CLV:CAC proyectado — plan cooperativa oleícola", "Projected CLV:CAC — olive oil cooperative plan"), projected: true },
    ],
  },
  learningSection: {
    title: t("Actualmente reforzando", "Currently strengthening"),
    body: t(
      "Además de mi formación formal, sigo ampliando de forma autónoma mis capacidades en data analytics, machine learning, IA aplicada al marketing y gestión de proyectos.",
      "Alongside my formal education, I continue to strengthen my capabilities in data analytics, machine learning, AI applied to marketing, and project management through self-directed learning.",
    ),
    items: [
      "IBM Data Science Professional Certificate — in progress",
      "Google Data Analytics Professional Certificate — in progress",
      "Google Digital Marketing & E-commerce Professional Certificate — in progress",
      "Generative AI for Digital Marketing Specialization — in progress",
      "Google Project Management Professional Certificate — in progress",
      "Google UX Design Professional Certificate — in progress",
      "Google AI Essentials — in progress",
      "Google Prompting Essentials — in progress",
    ],
  },
};

export const aboutContent = {
  title: t("Sobre mí", "About"),
  intro: [
    t(
      "Soy Hugo Sánchez Nieto, perfil junior en business analysis, marketing analytics y consumer insights.",
      "I am Hugo Sánchez Nieto, a junior profile in business analysis, marketing analytics, and consumer insights.",
    ),
    t(
      "Mi formación combina tres áreas: Marketing e Investigación de Mercados, Marketing Digital y Técnicas Cuantitativas en Gestión Empresarial. Esta combinación me permite trabajar en problemas donde no basta con saber usar herramientas, pero tampoco basta con entender el negocio de forma intuitiva: hay que conectar datos, consumidor, mercado y decisión.",
      "My background combines three areas: Marketing and Market Research, Digital Marketing, and Quantitative Techniques in Business Management. This combination allows me to work on problems where tools alone are not enough, but intuitive business understanding is not enough either: data, consumer, market, and decision must connect.",
    ),
    t(
      "Mi foco actual está en roles junior de Marketing Data Analyst, Marketing Analyst, Business Analyst, Customer Insights Analyst, CRM Analyst, BI Analyst, Performance Marketing Analyst y posiciones vinculadas a estrategia digital, analytics, market intelligence o producto.",
      "My current focus is on junior roles such as Marketing Data Analyst, Marketing Analyst, Business Analyst, Customer Insights Analyst, CRM Analyst, BI Analyst, Performance Marketing Analyst, and positions linked to digital strategy, analytics, market intelligence, or product.",
    ),
    t(
      "He trabajado con dashboards en Power BI, análisis de funnel, segmentación RFM, HubSpot CRM y reporting de marketing. Además, he desarrollado proyectos aplicados en e-commerce, pricing, adopción de vehículos eléctricos, inferencia bayesiana, SEO/SEM, performance marketing, planificación estratégica y análisis financiero.",
      "I have worked with Power BI dashboards, funnel analysis, RFM segmentation, HubSpot CRM, and marketing reporting. I have also developed applied projects in e-commerce, pricing, electric vehicle adoption, Bayesian inference, SEO/SEM, performance marketing, strategic planning, and financial analysis.",
    ),
    t(
      "Mi objetivo profesional es incorporarme a un entorno exigente —agencia, Big 4, consultora, multinacional o equipo de alto rendimiento— donde pueda aprender rápido, ganar criterio profesional y aportar rigor analítico desde el primer día.",
      "My professional goal is to join a demanding environment —agency, Big 4, consulting firm, multinational, or high-performance team— where I can learn quickly, build professional judgement, and contribute analytical rigour from day one.",
    ),
  ],
  lookingForTitle: t("Qué estoy buscando", "What I am looking for"),
  lookingFor: [
    "Marketing Data Analyst Intern / Junior",
    "Marketing Analyst Intern",
    "Business Analyst Intern",
    "Performance Marketing Analyst Intern",
    "CRM Analyst Intern",
    "BI Analyst Intern",
    "Customer Insights Analyst Intern",
    "Digital Marketing Analyst Junior",
    "Growth Analyst Intern",
    "Market Intelligence Analyst Junior",
    "Product Analyst Junior",
  ],
  learningTitle: t("Aprendizaje autónomo", "Self-directed learning"),
  learningBody: t(
    "Una parte importante de mi perfil es la capacidad de aprender técnicas nuevas cuando el problema lo exige. El mejor ejemplo es mi capítulo académico en IGI Global: partí de un TFG con Matrícula de Honor y, por iniciativa propia, amplié el alcance metodológico aprendiendo SEM, CFA y MANOVA para elevar el trabajo a un estándar publicable. Actualmente continúo reforzando mi base en data analytics, data science, machine learning e IA aplicada al marketing.",
    "An important part of my profile is the ability to learn new techniques when the problem requires it. The clearest example is my IGI Global academic chapter: I started from an honours bachelor thesis and proactively expanded the methodological scope by learning SEM, CFA, and MANOVA to raise the work to a publishable standard. I am currently continuing to strengthen my foundation in data analytics, data science, machine learning, and AI applied to marketing.",
  ),
  valuesTitle: t("Valores de trabajo", "Working principles"),
  values: [
    t("Rigor antes que apariencia", "Rigour before appearance"),
    t("Aprendizaje rápido", "Fast learning"),
    t("Orientación a negocio", "Business orientation"),
    t("Claridad al comunicar", "Clarity in communication"),
    t("Honestidad con las limitaciones", "Honesty about limitations"),
    t("Curiosidad técnica aplicada", "Applied technical curiosity"),
  ],
};

export const cvContent = {
  title: t("CV", "CV"),
  profileTitle: t("Profile", "Profile"),
  profile: t(
    "Junior Business & Marketing Data Analyst con enfoque cuantitativo. Formación en Marketing, Marketing Digital y Técnicas Cuantitativas, con experiencia en dashboards de Power BI, análisis de funnel, segmentación RFM, CRM y reporting. Interés en roles de marketing analytics, business analysis, CRM/BI, consumer insights, performance y estrategia digital en entornos exigentes.",
    "Junior Business & Marketing Data Analyst with a quantitative focus. Training in Marketing, Digital Marketing, and Quantitative Techniques, with experience in Power BI dashboards, funnel analysis, RFM segmentation, CRM, and reporting. Interested in marketing analytics, business analysis, CRM/BI, consumer insights, performance, and digital strategy roles in demanding environments.",
  ),
  experienceTitle: t("Experience", "Experience"),
  experience: [
    {
      company: "Euroinnova – EDUCA EDTECH Group",
      role: "Performance Marketing Analyst Intern",
      period: "Oct 2024 – Apr 2025",
      bullets: [
        "Designed and maintained Power BI dashboards to track marketing KPIs and support executive reporting.",
        "Analysed funnel performance, identifying drop-off points and contributing to a 2% uplift in ROI.",
        "Developed clustering and RFM customer segmentation models to support targeting and CRM decisions.",
      ],
    },
    {
      company: "ISAM Education",
      role: "Marketing Intern",
      period: "Nov 2022 – Feb 2023",
      bullets: [
        "Supported management and analysis of international client data using HubSpot CRM.",
        "Prepared marketing reports and supported client database organisation for international markets.",
      ],
    },
    {
      company: "El Nido Alojamiento Turístico",
      role: "Co-founder & Marketing Specialist",
      period: "Oct 2022 – Present",
      bullets: [
        "Created digital assets on WordPress, Airbnb and Booking.",
        "Implemented organic lead capture systems, generating over 50 potential customers in the first ten months.",
      ],
    },
    {
      company: "MAPFRE",
      role: "Junior Commercial Agent",
      period: "Sep 2023 – Mar 2024",
      bullets: [
        "Supported commercial follow-up of clients and opportunities.",
        "Prepared sales and deviation reports for management.",
      ],
    },
  ],
  educationTitle: t("Education", "Education"),
  education: [
    {
      institution: "Universidad de Granada",
      title: "Master’s Degree in Quantitative Techniques in Business Management",
      period: "Nov 2025 – Present",
      detail: t("En curso. Enfoque cuantitativo aplicado a gestión empresarial.", "In progress. Quantitative focus applied to business management."),
    },
    {
      institution: "ESIC Business & Marketing School",
      title: "Master’s in Digital Marketing",
      period: "2024 – 2025",
      detail: t(
        "GPA 4. 10/10 en SEM y 9,6/10 en SEO en el proyecto para Coca-Cola Europacific Partners. 9,6/10 en el TFM: plan de marketing digital para cooperativa oleícola real.",
        "4 GPA. 10/10 in SEM and 9.6/10 in SEO in the project for Coca-Cola Europacific Partners. 9.6/10 in the final master project: digital marketing plan for a real olive oil cooperative.",
      ),
    },
    {
      institution: "Universidad de Almería",
      title: "Bachelor’s Degree in Marketing and Market Research",
      period: "2019 – 2024",
      detail: t(
        "TFG 10/10 con Matrícula de Honor; nominado a mejor TFG del Departamento de Ciencias Económicas. Investigación ampliada a capítulo académico revisado por pares en IGI Global.",
        "Bachelor thesis 10/10 with Honours; nominated for Best Thesis in the Economics Department. Research later expanded into an IGI Global peer-reviewed academic chapter.",
      ),
    },
    {
      institution: "Università degli Studi di Modena e Reggio Emilia",
      title: "Erasmus Programme",
      period: "2023",
      detail: t(
        "Asignaturas en italiano y trabajo en grupo internacional.",
        "Subjects in Italian and international group work.",
      ),
    },
  ],
  skillsTitle: t("Skills", "Skills"),
  skillGroups: [
    {
      title: "Analytics & BI",
      items: ["Power BI", "Power Query", "Excel avanzado", "SQL", "Tableau", "GA4"],
    },
    {
      title: "Statistics & Modelling",
      items: [
        "R",
        "SPSS",
        "AMOS",
        "SEM",
        "CFA",
        "MANOVA",
        "Logistic Regression",
        "OLS Regression",
        "Bayesian Inference",
        "Clustering",
        "RFM Segmentation",
      ],
    },
    {
      title: "Marketing & Business",
      items: [
        "Performance Marketing",
        "SEO/SEM",
        "CRM",
        "Customer Journey",
        "Buyer Persona",
        "STP",
        "Pricing",
        "Benchmarking",
        "Market Research",
        "Go-to-market",
        "CLV:CAC",
        "ROI/ROAS",
        "P&L",
      ],
    },
    {
      title: "Tools & Workflow",
      items: [
        "HubSpot CRM",
        "Google Ads",
        "Meta Ads",
        "Screaming Frog",
        "Microsoft Office",
        "Jira",
        "Slack",
        "n8n",
        "Make",
        "Python básico / pandas",
      ],
    },
  ],
  coursesTitle: t("Currently completing / En curso", "Currently completing / En curso"),
  courses: [
    "IBM Data Science Professional Certificate",
    "Google Data Analytics Professional Certificate",
    "Google Digital Marketing & E-commerce Professional Certificate",
    "Generative AI for Digital Marketing Specialization",
    "Google Project Management Professional Certificate",
    "Google UX Design Professional Certificate",
    "Google AI Essentials",
    "Google Prompting Essentials",
  ],
  completedTitle: t("Completed certifications", "Completed certifications"),
  completed: [
    "Microsoft Career Essentials in Data Analysis",
    "Columbia University Learning AI Through Visualization",
    "Cambridge English Assessment CEFR B2",
  ],
  languagesTitle: t("Languages", "Languages"),
  languages: [
    t("Español: nativo (C2)", "Spanish: Native (C2)"),
    t("English: Advanced C1", "English: Advanced C1"),
    t("Français: básico A2", "French: Basic A2"),
    t("Italiano: básico A2", "Italian: Basic A2"),
  ],
};

export const contactContent = {
  title: t("Contacto", "Contact"),
  body: t(
    "Estoy abierto a oportunidades junior o prácticas en business analysis, marketing analytics, CRM/BI, consumer insights, performance marketing, estrategia digital y growth.",
    "I am open to junior opportunities or internships in business analysis, marketing analytics, CRM/BI, consumer insights, performance marketing, digital strategy, and growth.",
  ),
  methodsTitle: t("Canales de contacto", "Contact channels"),
};
