import type { Locale } from "@/lib/site";
import { commonLabels } from "@/data/site";

export type LocalizedText = Record<Locale, string>;

type LocalizedItem = Record<Locale, string>;

export type ProjectAssetKind = "summary" | "report" | "notebook" | "dashboard" | "publication";

export type ProjectMetric = {
  value: string;
  label: LocalizedText;
  projected?: boolean;
};

export type ProjectAsset = {
  kind: ProjectAssetKind;
  file?: string;
  href?: string;
  external?: boolean;
  note?: LocalizedText;
};

export type Project = {
  slug: string;
  title: string;
  spanishTitle: string;
  category: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
  shortSummary: LocalizedText;
  tags: string[];
  tools: string[];
  methods: string[];
  output: LocalizedText;
  featured: boolean;
  secondary: boolean;
  filters: string[];
  confidentialityNote?: LocalizedText;
  heroHighlight?: LocalizedText;
  projectType?: "group" | "individual" | "professional";
  sections: {
    executiveSummary: LocalizedText;
    whyItMatters?: LocalizedText;
    businessContext: LocalizedText;
    myRole: LocalizedText;
    selfDirectedLearning?: {
      title: LocalizedText;
      body: LocalizedText;
      bullets: LocalizedText[];
      closing: LocalizedText;
    };
    researchQuestions?: LocalizedText[];
    dataMethodsIntro?: LocalizedText;
    dataMethods: LocalizedText[];
    process: LocalizedText[];
    keyOutputs?: LocalizedText[];
    keyFindings: LocalizedText[];
    businessImplications: LocalizedText[];
    transferabilityNote?: LocalizedText;
    proofPoints?: LocalizedText[];
    limitations: LocalizedText[];
    nextSteps: LocalizedText[];
    suggestedVisuals: LocalizedText[];
  };
  metrics: ProjectMetric[];
  assets: ProjectAsset[];
  relatedProjects: string[];
};

const t = (es: string, en: string): LocalizedText => ({ es, en });

export const projects: Project[] = [
  {
    slug: "digital-growth-olive-oil",
    title: "Digital Growth Plan for Olive Oil Cooperative",
    spanishTitle: "Plan de crecimiento digital para cooperativa oleícola",
    category: t("Strategy & Growth", "Strategy & Growth"),
    subtitle: t(
      "Reposicionamiento, e-commerce, performance marketing y modelo financiero para transformar una cooperativa orientada a granel en una marca B2C premium.",
      "Repositioning, e-commerce, performance marketing, and financial modelling to transform a bulk-oriented cooperative into a premium B2C brand.",
    ),
    summary: t(
      "Proyecto de TFM del Máster en Marketing Digital para una cooperativa real de aceite de oliva. El objetivo era construir un plan integral de crecimiento digital que permitiera pasar de una lógica de venta a granel y bajo margen a una propuesta B2C premium, apoyada en marca, e-commerce, performance marketing y fidelización.",
      "Master final project for a real olive oil cooperative. The goal was to build an end-to-end digital growth plan enabling a shift from low-margin bulk sales to a premium direct-to-consumer proposition supported by brand, e-commerce, performance marketing, and retention.",
    ),
    shortSummary: t(
      "Plan integral para reposicionar una cooperativa real hacia una propuesta B2C premium con e-commerce, media y business case.",
      "End-to-end plan to reposition a real cooperative into a premium D2C proposition with e-commerce, media, and a financial business case.",
    ),
    tags: ["Digital Strategy", "E-commerce", "SEO/SEM", "Performance", "Branding", "P&L"],
    tools: ["Shopify", "Excel", "Looker-style KPI thinking"],
    methods: [
      "PESTEL",
      "Porter Five Forces",
      "TAM / SAM / SOM",
      "VRIO",
      "SWOT / CAME",
      "STP",
      "Customer Journey",
      "Pricing architecture",
      "P&L",
      "ROI / ROAS / CLV:CAC",
    ],
    output: t("Plan estratégico digital + business case", "Digital growth strategy + business case"),
    featured: true,
    secondary: false,
    filters: ["strategy-growth", "ecommerce"],
    projectType: "group",
    sections: {
      executiveSummary: t(
        "Caso de estrategia y growth donde el problema no era solo vender más, sino capturar más valor. El proyecto tradujo un producto de calidad y origen diferenciado en una arquitectura de marca, canal directo, plan de captación y modelo financiero con métricas claramente señaladas como proyectadas.",
        "A strategy and growth case where the challenge was not only to sell more, but to capture more value. The project translated a high-quality, origin-driven product into a brand architecture, direct channel, acquisition plan, and financial model with metrics clearly labelled as projected.",
      ),
      businessContext: t(
        "La cooperativa contaba con producto de alta calidad, origen diferenciado y DOP Sierra Mágina, pero no capturaba suficiente valor de marca. El reto era crear una estrategia digital capaz de mejorar margen, construir marca y abrir un canal directo al consumidor.",
        "The cooperative had a high-quality product, differentiated origin, and DOP Sierra Mágina, but it was not capturing enough brand value. The challenge was to create a digital strategy capable of improving margins, building the brand, and opening a direct-to-consumer channel.",
      ),
      myRole: t(
        "Proyecto grupal. Mi contribución se centró en análisis de mercado, diagnóstico estratégico, posicionamiento, arquitectura de producto, pricing, modelo financiero, KPIs y construcción del business case.",
        "Group project. My contribution focused on market analysis, strategic diagnosis, positioning, product architecture, pricing, financial modelling, KPIs, and business-case construction.",
      ),
      dataMethods: [
        t("PESTEL, Porter Five Forces, TAM / SAM / SOM, VRIO y benchmarking competitivo.", "PESTEL, Porter Five Forces, TAM / SAM / SOM, VRIO, and competitive benchmarking."),
        t("SWOT / CAME, STP, buyer persona y customer journey.", "SWOT / CAME, STP, buyer persona, and customer journey."),
        t("Arquitectura de producto, pricing y planificación e-commerce sobre Shopify.", "Product architecture, pricing, and e-commerce planning on Shopify."),
        t("Plan SEO / SEM, social ads, email marketing y loyalty program.", "SEO / SEM plan, social ads, email marketing, and loyalty programme."),
        t("P&L, ROI, ROAS, CLV:CAC, payback y cuadro de mando de KPIs.", "P&L, ROI, ROAS, CLV:CAC, payback, and KPI dashboard."),
      ],
      process: [
        t("Diagnóstico externo e interno.", "External and internal diagnosis."),
        t("Identificación del problema: dependencia de canales de bajo margen.", "Problem identification: dependence on low-margin channels."),
        t("Reposicionamiento estratégico bajo una marca premium.", "Strategic repositioning under a premium brand."),
        t("Definición de buyer persona y customer journey.", "Definition of buyer persona and customer journey."),
        t("Diseño de arquitectura de producto en tres niveles.", "Design of a three-tier product architecture."),
        t("Diseño del ecosistema digital: Shopify, SEO, SEM, social ads y email marketing.", "Design of the digital ecosystem: Shopify, SEO, SEM, social ads, and email marketing."),
        t("Diseño de fidelización: Club del Olivar.", "Retention design: Club del Olivar."),
        t("Modelización financiera y cuadro de mando.", "Financial modelling and dashboard design."),
      ],
      keyOutputs: [
        t("Nueva identidad de marca: “Milagro de la Sierra”.", "New brand identity: “Milagro de la Sierra”."),
        t("Arquitectura de producto en tres niveles.", "Three-tier product architecture."),
        t("Estrategia B2C directa al consumidor y e-commerce en Shopify.", "Direct-to-consumer B2C strategy and Shopify e-commerce."),
        t("Plan SEO/SEM, social ads, display, email marketing e influencers.", "SEO/SEM plan, social ads, display, email marketing, and influencers."),
        t("Club de fidelización, presupuesto, P&L, ROI, ROAS, CLV:CAC y payback.", "Loyalty club, budget, P&L, ROI, ROAS, CLV:CAC, and payback."),
      ],
      keyFindings: [
        t("La cooperativa tenía margen para capturar más valor si salía de la lógica de commodity.", "The cooperative had room to capture more value by moving away from a commodity logic."),
        t("La propuesta premium exigía coherencia entre posicionamiento, canal, arquitectura de producto y pricing.", "The premium proposition required consistency across positioning, channel, product architecture, and pricing."),
        t("El canal directo permitía defender mejor margen y construir relación con cliente final.", "The direct channel made it easier to defend margins and build a relationship with the final customer."),
        t("La fidelización y el CRM eran necesarios para sostener CAC y rentabilidad a medio plazo.", "Retention and CRM were necessary to sustain CAC and mid-term profitability."),
      ],
      businessImplications: [
        t("Demuestra capacidad para conectar estrategia, marketing digital, rentabilidad y ejecución.", "It demonstrates the ability to connect strategy, digital marketing, profitability, and execution."),
        t("Es especialmente relevante para consultoría, agencias, Big 4, growth teams, e-commerce y marketing estratégico.", "It is especially relevant for consulting, agencies, Big 4 firms, growth teams, e-commerce, and strategic marketing."),
      ],
      limitations: [
        t("Proyecto académico.", "Academic project."),
        t("Métricas proyectadas, no resultados reales post-implementación.", "Projected metrics, not real post-implementation results."),
        t("Supuestos financieros sujetos a validación en mercado.", "Financial assumptions subject to market validation."),
      ],
      nextSteps: [
        t("Validar pricing con test de demanda.", "Validate pricing with demand testing."),
        t("Lanzar un MVP de Shopify.", "Launch a Shopify MVP."),
        t("Ejecutar campañas piloto y medir CAC real por canal.", "Run pilot campaigns and measure actual CAC by channel."),
        t("Comparar cohortes de fidelización.", "Compare retention cohorts."),
        t("Construir un dashboard real conectado a GA4, Shopify y CRM.", "Build a live dashboard connected to GA4, Shopify, and CRM."),
      ],
      suggestedVisuals: [
        t("Strategy map.", "Strategy map."),
        t("Funnel acquisition-conversion-loyalty.", "Acquisition-conversion-loyalty funnel."),
        t("Product architecture pyramid.", "Product architecture pyramid."),
        t("KPI dashboard mockup.", "KPI dashboard mockup."),
        t("P&L metric cards.", "P&L metric cards."),
        t("Timeline Q1-Q4.", "Q1-Q4 timeline."),
      ],
    },
    metrics: [
      { value: "100.000 €", label: t("Presupuesto total", "Total budget"), projected: true },
      { value: "5,12 %", label: t("ROI proyectado", "Projected ROI"), projected: true },
      { value: "12,95", label: t("ROAS proyectado", "Projected ROAS"), projected: true },
      { value: "4,3:1", label: t("CLV:CAC proyectado", "Projected CLV:CAC"), projected: true },
      { value: "105.121 €", label: t("Beneficio neto proyectado", "Projected net profit"), projected: true },
      { value: "1,14 años", label: t("Payback proyectado", "Projected payback"), projected: true },
    ],
    assets: [
      { kind: "summary", file: "files/olive-oil-growth-plan-summary.pdf" },
      { kind: "report", file: "files/olive-oil-growth-plan-summary.pdf", note: t("Resumen en PDF cuando esté disponible.", "PDF summary when available.") },
      { kind: "dashboard", note: t("Mockup de dashboard previsto para esta versión.", "Dashboard mockup planned for this version.") },
    ],
    relatedProjects: ["seo-sem-bartalent", "performance-dashboard-rfm", "lg-cro"],
  },
  {
    slug: "seo-sem-bartalent",
    title: "SEO & SEM Strategy for Bartalent Lab / Coca-Cola",
    spanishTitle: "Estrategia SEO & SEM para Bartalent Lab",
    category: t("Marketing Analytics & Performance", "Marketing Analytics & Performance"),
    subtitle: t(
      "Auditoría técnica, arquitectura web, keyword research y campañas Google Ads para mejorar visibilidad, leads y conversión en una plataforma de Coca-Cola orientada a hostelería.",
      "Technical audit, web architecture, keyword research, and Google Ads campaigns to improve visibility, leads, and conversion for a Coca-Cola platform aimed at hospitality professionals.",
    ),
    summary: t(
      "Plan SEO/SEM para Bartalent Lab, plataforma de Coca-Cola dirigida al sector hostelero. El objetivo era aumentar tráfico orgánico cualificado, mejorar la experiencia de usuario, captar registros y estructurar campañas de búsqueda con intención de conversión.",
      "SEO/SEM plan for Bartalent Lab, a Coca-Cola platform focused on the hospitality sector. The goal was to increase qualified organic traffic, improve UX, capture registrations, and structure search campaigns around conversion intent.",
    ),
    shortSummary: t(
      "Auditoría y propuesta SEO/SEM para visibilidad, captación y medición de una plataforma B2B/B2C del entorno Coca-Cola.",
      "SEO/SEM audit and proposal for visibility, acquisition, and measurement in a Coca-Cola ecosystem platform.",
    ),
    tags: ["SEO", "SEM", "Google Ads", "Technical SEO", "Keyword Research", "Lead Generation"],
    tools: ["Screaming Frog", "Google Ads", "GA / GSC mindset", "Looker Studio"],
    methods: [
      "Technical SEO audit",
      "Indexation analysis",
      "UX evaluation",
      "Keyword research",
      "Google Ads structure",
      "Negative keywords",
      "Conversion forecasting",
    ],
    output: t("SEO roadmap + SEM campaign structure", "SEO roadmap + SEM campaign structure"),
    featured: true,
    secondary: false,
    filters: ["marketing-analytics-performance"],
    projectType: "group",
    sections: {
      executiveSummary: t(
        "Caso orientado a captación donde la palanca no era una sola campaña, sino el sistema completo de visibilidad, intención de búsqueda, arquitectura web y medición. La propuesta combinó SEO técnico, contenidos y SEM con foco en registros.",
        "An acquisition-oriented case where the lever was not a single campaign, but the full visibility, search-intent, web architecture, and measurement system. The proposal combined technical SEO, content, and SEM with a registration focus.",
      ),
      businessContext: t(
        "Bartalent Lab necesitaba mejorar su visibilidad online y aumentar su base de usuarios registrados. El diagnóstico incluía problemas técnicos, rendimiento móvil mejorable, oportunidades de contenido, necesidad de mejor arquitectura web y campañas SEM más estructuradas.",
        "Bartalent Lab needed better online visibility and a larger registered user base. The diagnosis included technical issues, room for improvement in mobile performance, content opportunities, the need for a stronger site architecture, and a more structured SEM setup.",
      ),
      myRole: t(
        "Proyecto académico/grupal. Participé en análisis SEO/SEM, investigación de palabras clave, evaluación de estructura web, propuesta de campañas, medición de KPIs y enfoque de captación.",
        "Academic group project. I contributed to the SEO/SEM analysis, keyword research, web-structure evaluation, campaign proposal, KPI definition, and acquisition approach.",
      ),
      dataMethods: [
        t("Auditoría SEO técnica, indexación, robots.txt y sitemap.xml.", "Technical SEO audit, indexation review, robots.txt, and sitemap.xml."),
        t("Evaluación de UX y revisión de Core Web Vitals.", "UX evaluation and Core Web Vitals review."),
        t("Keyword research y GAP analysis.", "Keyword research and gap analysis."),
        t("Diseño de campañas Google Ads por intención de búsqueda.", "Google Ads campaign design by search intent."),
        t("Negative keywords, ad copy, escenarios de presupuesto y previsión de conversiones.", "Negative keywords, ad copy, budget scenarios, and conversion forecasting."),
        t("Framework de medición con Google Analytics, Search Console y Looker Studio.", "Measurement framework using Google Analytics, Search Console, and Looker Studio."),
      ],
      process: [
        t("Diagnóstico de situación y objetivos.", "Situation and objective diagnosis."),
        t("Auditoría SEO técnica.", "Technical SEO audit."),
        t("Revisión de indexación, sitemap, robots y arquitectura.", "Review of indexation, sitemap, robots, and architecture."),
        t("Evaluación de UX con visión SEO.", "UX evaluation through an SEO lens."),
        t("Keyword research y análisis de oportunidad.", "Keyword research and opportunity analysis."),
        t("Propuesta de contenidos SEO.", "SEO content proposal."),
        t("Diseño de campañas SEM por intención de búsqueda.", "SEM campaign design by search intent."),
        t("Definición de creatividades, negativas y presupuesto.", "Definition of creatives, negatives, and budget."),
        t("Sistema de medición con KPIs.", "Measurement system with KPIs."),
      ],
      keyOutputs: [
        t("SEO roadmap.", "SEO roadmap."),
        t("Nueva estructura web propuesta.", "Proposed site architecture."),
        t("Nuevos contenidos SEO y acción de linkbuilding.", "Additional SEO content and linkbuilding action."),
        t("Campañas Google Ads y lista de negativas.", "Google Ads campaigns and negative keyword list."),
        t("Framework de medición y dashboard conceptual.", "Measurement framework and conceptual dashboard."),
      ],
      keyFindings: [
        t("La captación dependía tanto de problemas técnicos como de intención de búsqueda mal estructurada.", "Acquisition depended on both technical issues and poorly structured search intent."),
        t("Había margen para mejorar el rendimiento orgánico sin depender solo de paid media.", "There was room to improve organic performance without relying only on paid media."),
        t("La arquitectura web y la experiencia móvil condicionaban la conversión potencial.", "Web architecture and mobile experience constrained potential conversion."),
        t("Las campañas SEM debían segmentarse por intención y no solo por temática.", "SEM campaigns had to be segmented by intent, not just by topic."),
      ],
      businessImplications: [
        t("Demuestra capacidad para trabajar en performance marketing, captación, optimización SEO/SEM y medición de conversión.", "It demonstrates the ability to work on performance marketing, acquisition, SEO/SEM optimisation, and conversion measurement."),
        t("Es especialmente relevante para agencias, departamentos digitales, growth teams y roles de performance marketing analyst.", "It is especially relevant for agencies, digital departments, growth teams, and performance marketing analyst roles."),
      ],
      limitations: [
        t("Proyecto académico.", "Academic project."),
        t("Sin acceso a datos internos reales de conversión post-implementación.", "No access to post-implementation internal conversion data."),
        t("Algunas estimaciones dependen de supuestos de mercado y herramientas externas.", "Some estimates depend on market assumptions and external tools."),
      ],
      nextSteps: [
        t("Implementar tracking GA4 completo.", "Implement full GA4 tracking."),
        t("Conectar Search Console y Looker Studio.", "Connect Search Console and Looker Studio."),
        t("Ejecutar A/B tests de landing pages.", "Run landing-page A/B tests."),
        t("Analizar Quality Score real y optimizar pujas por CPA.", "Analyse actual Quality Score and optimise bids towards CPA."),
        t("Comparar rendimiento orgánico vs paid.", "Compare organic vs paid performance."),
      ],
      suggestedVisuals: [
        t("SEO audit summary.", "SEO audit summary."),
        t("Keyword matrix.", "Keyword matrix."),
        t("Campaign architecture.", "Campaign architecture."),
        t("Funnel impression > click > registration.", "Impression > click > registration funnel."),
        t("Dashboard mockup.", "Dashboard mockup."),
      ],
    },
    metrics: [],
    assets: [
      { kind: "summary", file: "files/seo-sem-bartalent-summary.pdf" },
      { kind: "dashboard", note: t("Dashboard de captación previsto como mockup.", "Acquisition dashboard planned as a mockup.") },
    ],
    relatedProjects: ["digital-growth-olive-oil", "performance-dashboard-rfm", "publicis-commerce"],
  },
  {
    slug: "performance-dashboard-rfm",
    title: "Performance Dashboard & RFM Segmentation",
    spanishTitle: "Dashboard de performance y segmentación RFM",
    category: t("Marketing Analytics & Performance", "Marketing Analytics & Performance"),
    subtitle: t(
      "Caso basado en experiencia profesional en performance marketing: dashboards de Power BI, análisis de funnel, KPIs y segmentación de clientes.",
      "Case based on professional performance marketing experience: Power BI dashboards, funnel analysis, KPIs, and customer segmentation.",
    ),
    summary: t(
      "Durante mis prácticas en performance marketing trabajé en dashboards de Power BI, seguimiento de KPIs, análisis del funnel de conversión y segmentación de clientes mediante RFM/clustering. Este caso muestra el tipo de razonamiento y estructura analítica aplicada, sin exponer datos confidenciales.",
      "During my performance marketing internship I worked on Power BI dashboards, KPI monitoring, conversion-funnel analysis, and customer segmentation through RFM/clustering. This case shows the analytical reasoning and structure applied without exposing confidential data.",
    ),
    shortSummary: t(
      "Dashboarding, funnel analysis y segmentación de clientes para reporting ejecutivo y decisiones de CRM/performance.",
      "Dashboarding, funnel analysis, and customer segmentation for executive reporting and CRM/performance decisions.",
    ),
    tags: ["Power BI", "Funnel Analysis", "RFM", "CRM", "Dashboards", "Segmentation"],
    tools: ["Power BI", "Power Query", "Excel", "CRM workflows"],
    methods: ["Funnel metrics", "RFM segmentation", "Clustering", "KPI tracking", "ROI analysis"],
    output: t("Dashboard ejecutivo + lógica de segmentación", "Executive dashboard + segmentation logic"),
    featured: true,
    secondary: false,
    filters: ["marketing-analytics-performance", "crm-bi"],
    projectType: "professional",
    confidentialityNote: t(
      "Por confidencialidad, este caso no muestra datos reales de la empresa. Utiliza estructuras anonimizadas y visuales sintéticos basados en el flujo analítico trabajado.",
      "For confidentiality, this case does not show real company data. It uses anonymised structures and synthetic visuals based on the analytical workflow used.",
    ),
    sections: {
      executiveSummary: t(
        "Caso profesional enfocado en reporting ejecutivo, salud del funnel y activación CRM. Más que una visualización, el valor estaba en estructurar KPIs, detectar puntos de fuga y traducir segmentos en acciones de marketing.",
        "A professional case focused on executive reporting, funnel health, and CRM activation. The value was not just the visualisation, but structuring KPIs, identifying leakage points, and translating segments into marketing actions.",
      ),
      businessContext: t(
        "Los equipos de marketing necesitan visibilidad sobre qué campañas generan tráfico, dónde se pierde conversión, qué segmentos tienen mayor valor y dónde priorizar acciones de activación, retargeting o inversión.",
        "Marketing teams need visibility into which campaigns generate traffic, where conversion is lost, which segments have greater value, and where activation, retargeting, or budget should be prioritised.",
      ),
      myRole: t(
        "Experiencia profesional individual en prácticas. Diseñé y mantuve dashboards en Power BI, monitoricé KPIs de marketing, analicé puntos de caída del funnel, contribuí a una mejora del ROI del 2% y desarrollé segmentación RFM/clustering para apoyar decisiones de targeting y CRM.",
        "Individual professional internship experience. I designed and maintained Power BI dashboards, monitored marketing KPIs, analysed funnel drop-off points, contributed to a 2% ROI uplift, and developed RFM/clustering segmentation to support targeting and CRM decisions.",
      ),
      dataMethods: [
        t("Power BI y Power Query para modelado y reporting.", "Power BI and Power Query for modelling and reporting."),
        t("KPIs de funnel, campañas y revenue.", "Funnel, campaign, and revenue KPIs."),
        t("Segmentación RFM y clustering orientado a CRM.", "RFM segmentation and CRM-oriented clustering."),
        t("Análisis de ROI y métricas de captación/retención.", "ROI analysis and acquisition/retention metrics."),
      ],
      process: [
        t("Definir KPIs relevantes.", "Define relevant KPIs."),
        t("Limpiar y transformar datos.", "Clean and transform data."),
        t("Diseñar dashboard ejecutivo.", "Design an executive dashboard."),
        t("Analizar el funnel y detectar puntos de caída.", "Analyse the funnel and detect drop-off points."),
        t("Crear segmentación RFM.", "Create RFM segmentation."),
        t("Traducir segmentos en acciones de marketing.", "Translate segments into marketing actions."),
        t("Reportar insights para toma de decisiones.", "Report insights for decision-making."),
      ],
      keyFindings: [
        t("El reporting debía servir para reasignar presupuesto, no solo para describir campañas.", "Reporting had to serve budget reallocation, not only campaign description."),
        t("Los puntos de caída del funnel permitían priorizar hipótesis de mejora concretas.", "Funnel drop-off points made it possible to prioritise concrete improvement hypotheses."),
        t("La segmentación RFM abría una lógica más precisa de activación, nurturing y retención.", "RFM segmentation opened a more precise logic for activation, nurturing, and retention."),
        t("La mejora del ROI estaba conectada a una lectura más estructurada del performance.", "The ROI improvement was linked to a more structured reading of performance."),
      ],
      businessImplications: [
        t("Este caso demuestra capacidad para conectar datos de marketing con decisiones operativas.", "This case demonstrates the ability to connect marketing data with operational decisions."),
        t("Es relevante para CRM/BI, performance, reporting ejecutivo y marketing analytics.", "It is relevant for CRM/BI, performance, executive reporting, and marketing analytics."),
      ],
      limitations: [
        t("Visuales sintéticos.", "Synthetic visuals."),
        t("Datos reales no públicos.", "Real data is not public."),
        t("No se muestra infraestructura interna por confidencialidad.", "Internal infrastructure is not shown for confidentiality reasons."),
      ],
      nextSteps: [
        t("Conectar dashboard con CRM y GA4.", "Connect the dashboard with CRM and GA4."),
        t("Añadir cohort analysis.", "Add cohort analysis."),
        t("Crear alertas automáticas de caída de conversión.", "Create automated conversion-drop alerts."),
        t("Modelar propensión a conversión.", "Model conversion propensity."),
        t("Integrar CAC y LTV por segmento.", "Integrate CAC and LTV by segment."),
      ],
      suggestedVisuals: [
        t("Mock Power BI dashboard.", "Mock Power BI dashboard."),
        t("Funnel chart.", "Funnel chart."),
        t("RFM matrix.", "RFM matrix."),
        t("Segment cards.", "Segment cards."),
        t("Decision tree for campaign actions.", "Decision tree for campaign actions."),
      ],
    },
    metrics: [
      { value: "+2%", label: t("ROI uplift en prácticas", "ROI uplift during internship") },
    ],
    assets: [
      { kind: "dashboard", file: "files/performance-dashboard-mockup.png", note: t("Mockup sintético del dashboard.", "Synthetic dashboard mockup.") },
      { kind: "summary", note: t("Resumen del caso en preparación.", "Case summary in preparation.") },
    ],
    relatedProjects: ["seo-sem-bartalent", "digital-growth-olive-oil", "bayesian-conversion-analysis"],
  },
  {
    slug: "ev-adoption-research",
    title: "Consumer Insights & EV Adoption Research",
    spanishTitle: "Investigación sobre adopción de vehículos sostenibles",
    category: t("Consumer & Market Insights", "Consumer & Market Insights"),
    subtitle: t(
      "De un TFG con Matrícula de Honor a un capítulo académico revisado por pares: aprendizaje autónomo, métodos estadísticos avanzados y consumer insights aplicados a la adopción de EV/HEV/PHEV.",
      "From an honours bachelor thesis to a peer-reviewed academic chapter: self-directed learning, advanced statistical methods, and consumer insights applied to EV/HEV/PHEV adoption.",
    ),
    summary: t(
      "Este proyecto comenzó como mi Trabajo de Fin de Grado en Marketing e Investigación de Mercados, calificado con 10/10 y Matrícula de Honor, y nominado a mejor TFG del Departamento de Ciencias Económicas. Después decidí no dejarlo como un simple entregable académico: amplié el alcance, reforcé el marco metodológico y aprendí por mi cuenta técnicas estadísticas avanzadas como SEM, CFA y MANOVA para hacerlo suficientemente robusto como para publicación académica.",
      "This project started as my bachelor thesis in Marketing and Market Research, graded 10/10 with honours and nominated for Best Thesis in the Economics Department. I then chose not to leave it as a standard academic deliverable: I expanded the scope, strengthened the methodological framework, and taught myself advanced statistical techniques such as SEM, CFA, and MANOVA to make it robust enough for peer-reviewed publication.",
    ),
    shortSummary: t(
      "Investigación de consumer insights y adopción sostenible que demuestra iniciativa, rigor y aprendizaje autónomo de métodos avanzados.",
      "Consumer-insights research on sustainable adoption that demonstrates initiative, rigour, and self-directed learning of advanced methods.",
    ),
    tags: ["Consumer Insights", "Market Research", "SEM", "CFA", "MANOVA", "Sustainability"],
    tools: ["SPSS", "AMOS", "Excel"],
    methods: ["Primary survey", "CADM", "SEM", "CFA", "Logistic regression", "MANOVA"],
    output: t("Investigación + publicación académica", "Research + academic publication"),
    featured: true,
    secondary: false,
    filters: ["consumer-market-insights", "automotive-mobility"],
    projectType: "individual",
    heroHighlight: t(
      "No me limité a entregar un buen TFG. Lo usé como plataforma para aprender métodos más avanzados, elevar el estándar analítico y convertir el trabajo en una publicación revisada por pares.",
      "I did not stop at delivering a strong thesis. I used it as a platform to learn more advanced methods, raise the analytical bar, and turn the work into a peer-reviewed publication.",
    ),
    sections: {
      executiveSummary: t(
        "El valor de este proyecto no está solo en el sector aplicado. Está en el modo de trabajo: detectar que el encargo inicial se quedaba corto, aprender nuevas técnicas cuando el problema lo requería y convertir un trabajo académico en un resultado de mayor estándar.",
        "The value of this project does not lie only in the applied sector. It lies in the way the work evolved: recognising that the initial brief was not enough, learning new techniques when the problem required them, and turning an academic project into a higher-standard outcome.",
      ),
      whyItMatters: t(
        "Este caso muestra iniciativa, rigor y velocidad de aprendizaje. Automotive aparece como contexto aplicado, pero la capacidad transferible es consumer insight, análisis avanzado y traducción a decisión.",
        "This case shows initiative, rigour, and learning velocity. Automotive appears as the applied context, but the transferable capability is consumer insight, advanced analysis, and translation into decisions.",
      ),
      businessContext: t(
        "La adopción de vehículos sostenibles no depende solo de tecnología, precio o incentivos. También depende de barreras percibidas, normas sociales, percepción de control, intención de compra y comportamiento del consumidor. Para empresas, instituciones y marcas, entender quién adopta y por qué es clave para diseñar comunicación, producto, infraestructura e incentivos.",
        "The adoption of sustainable vehicles does not depend only on technology, price, or incentives. It also depends on perceived barriers, social norms, perceived control, purchase intention, and consumer behaviour. For companies, institutions, and brands, understanding who adopts and why is key to designing communication, product, infrastructure, and incentives.",
      ),
      myRole: t(
        "Proyecto individual de investigación que comenzó como TFG y evolucionó a publicación revisada por pares. Obtuve 10/10 con Matrícula de Honor, fui nominado a mejor TFG del Departamento de Ciencias Económicas y amplié el alcance metodológico de forma proactiva aprendiendo técnicas estadísticas avanzadas para reforzar el trabajo.",
        "Individual research project that started as a bachelor thesis and evolved into a peer-reviewed publication. It received 10/10 with honours, was nominated for Best Thesis in the Economics Department, and I proactively expanded the methodological scope by learning advanced statistical techniques to strengthen the work.",
      ),
      selfDirectedLearning: {
        title: t("Aprendizaje autónomo", "Self-directed learning"),
        body: t(
          "Para ir más allá del análisis descriptivo y de la regresión básica, estudié por mi cuenta Modelos de Ecuaciones Estructurales, Análisis Factorial Confirmatorio y MANOVA. El objetivo no era añadir complejidad por añadirla, sino elegir métodos que respondieran mejor a las preguntas de investigación.",
          "To go beyond descriptive analysis and basic regression, I independently studied Structural Equation Modelling, Confirmatory Factor Analysis, and MANOVA. The goal was not to add complexity for its own sake, but to choose methods that better answered the research questions.",
        ),
        bullets: [
          t("SEM para analizar relaciones entre factores psicológicos de adopción.", "SEM to analyse relationships between psychological adoption factors."),
          t("CFA para evaluar la validez del modelo de medición.", "CFA to evaluate the validity of the measurement model."),
          t("Regresión logística para perfilar adoptantes de vehículos sostenibles.", "Logistic regression to profile sustainable-vehicle adopters."),
          t("MANOVA para comparar diferencias conductuales entre adoptantes y no adoptantes.", "MANOVA to compare behavioural differences between adopters and non-adopters."),
        ],
        closing: t(
          "Esta experiencia me enseñó a aprender métodos técnicos de forma autónoma, evaluar si eran adecuados y traducir resultados estadísticos en recomendaciones prácticas.",
          "This experience taught me how to learn technical methods independently, assess whether they were appropriate, and translate statistical results into practical recommendations.",
        ),
      },
      researchQuestions: [
        t("¿Qué factores psicológicos explican la decisión de adquirir un vehículo sostenible?", "Which psychological factors explain the decision to acquire a sustainable vehicle?"),
        t("¿Quiénes son los adoptantes actuales en términos sociodemográficos?", "Who are current adopters in sociodemographic terms?"),
        t("¿Existen diferencias psicológicas y conductuales entre adoptantes y no adoptantes?", "Are there psychological and behavioural differences between adopters and non-adopters?"),
      ],
      dataMethods: [
        t("Investigación primaria con encuesta de 350+ respuestas.", "Primary research with a 350+ response survey."),
        t("Modelo CADM como base conceptual.", "CADM model as the conceptual base."),
        t("SEM y CFA para validar relaciones y medición.", "SEM and CFA to validate relationships and measurement."),
        t("Regresión logística para perfilar adoptantes.", "Logistic regression to profile adopters."),
        t("MANOVA para comparar diferencias conductuales.", "MANOVA to compare behavioural differences."),
        t("SPSS, AMOS y Excel.", "SPSS, AMOS, and Excel."),
      ],
      process: [
        t("Definir el problema de adopción desde comportamiento del consumidor.", "Define the adoption problem from a consumer-behaviour perspective."),
        t("Revisar literatura sobre TPB, NAM, CADM y movilidad sostenible.", "Review literature on TPB, NAM, CADM, and sustainable mobility."),
        t("Diseñar el modelo conceptual.", "Design the conceptual model."),
        t("Recoger y preparar datos.", "Collect and prepare the data."),
        t("Validar el modelo psicológico con SEM.", "Validate the psychological model with SEM."),
        t("Refinar la medición mediante CFA.", "Refine the measurement through CFA."),
        t("Construir el perfil del adoptante mediante regresión logística.", "Build the adopter profile through logistic regression."),
        t("Comparar perfiles con MANOVA.", "Compare profiles with MANOVA."),
        t("Traducir resultados en implicaciones para empresas y sector público.", "Translate results into implications for companies and the public sector."),
      ],
      keyFindings: [
        t("La adopción no puede explicarse únicamente por conciencia ambiental.", "Adoption cannot be explained only by environmental awareness."),
        t("La percepción de control y la viabilidad percibida son claves.", "Perceived control and perceived feasibility are key."),
        t("Infraestructura, precio, incertidumbre y confianza condicionan la intención.", "Infrastructure, price, uncertainty, and trust shape intention."),
        t("Los adoptantes muestran patrones diferenciados que permiten segmentación.", "Adopters show differentiated patterns that enable segmentation."),
        t("El reto no es solo vender vehículos sostenibles, sino hacer que la alternativa parezca viable, tangible y socialmente normalizada.", "The challenge is not only to sell sustainable vehicles, but to make the alternative feel viable, tangible, and socially normalised."),
      ],
      businessImplications: [
        t("Para fabricantes: comunicar facilidad, confianza, autonomía, coste total y reducción de incertidumbre.", "For manufacturers: communicate ease, trust, range, total cost, and uncertainty reduction."),
        t("Para concesionarios: argumentos de venta basados en barreras reales del consumidor.", "For dealerships: sales arguments based on real consumer barriers."),
        t("Para administraciones: incentivos e infraestructura como reducción de fricción psicológica.", "For public institutions: incentives and infrastructure as psychological-friction reducers."),
        t("Para marketing: segmentar por motivaciones y barreras, no solo por demografía.", "For marketing: segment by motivations and barriers, not only demographics."),
      ],
      transferabilityNote: t(
        "Aunque el caso se centra en movilidad, la lógica analítica es transferible a cualquier categoría donde la adopción dependa del precio, el valor percibido, las barreras del consumidor, la confianza y el posicionamiento.",
        "Although the case focuses on mobility, the analytical logic is transferable to any category where adoption depends on price, perceived value, consumer barriers, trust, and positioning.",
      ),
      proofPoints: [
        t("Aprendo por mi cuenta cuando el problema lo exige.", "I learn independently when the problem requires it."),
        t("No me conformo con el mínimo entregable.", "I do not settle for the minimum deliverable."),
        t("Puedo elevar un proyecto académico a un estándar publicable.", "I can raise an academic project to a publishable standard."),
        t("Conecto comportamiento del consumidor, estadística y decisión de negocio.", "I connect consumer behaviour, statistics, and business decisions."),
        t("Sé traducir análisis complejo en implicaciones comprensibles.", "I can translate complex analysis into understandable implications."),
      ],
      limitations: [
        t("Contexto académico.", "Academic context."),
        t("Muestra limitada a una población concreta.", "Sample limited to a specific population."),
        t("Resultados sujetos al diseño del cuestionario.", "Results are subject to the survey design."),
        t("La publicación valida el rigor, pero no equivale a experiencia profesional en automoción.", "The publication validates rigour, but it is not equivalent to professional automotive experience."),
      ],
      nextSteps: [
        t("Replicar el estudio con muestra nacional representativa.", "Replicate the study with a nationally representative sample."),
        t("Incorporar datos reales de ventas o configuradores.", "Incorporate actual sales or configurator data."),
        t("Crear segmentos accionables para campañas.", "Create actionable segments for campaigns."),
        t("Probar mensajes mediante experimentos A/B.", "Test messaging through A/B experiments."),
        t("Usar machine learning para modelar propensión de adopción.", "Use machine learning to model adoption propensity."),
        t("Desarrollar un dashboard de barreras por segmento.", "Develop a barrier-by-segment dashboard."),
      ],
      suggestedVisuals: [
        t("CADM model diagram.", "CADM model diagram."),
        t("Methodology flow.", "Methodology flow."),
        t("Survey sample card.", "Survey sample card."),
        t("SEM/CFA conceptual diagram.", "SEM/CFA conceptual diagram."),
        t("Adopter profile card.", "Adopter profile card."),
        t("Business implications grid.", "Business implications grid."),
        t("From thesis to peer-reviewed chapter timeline.", "From thesis to peer-reviewed chapter timeline."),
      ],
    },
    metrics: [
      { value: "10/10", label: t("TFG con Matrícula de Honor", "Honours bachelor thesis") },
      { value: "350+", label: t("Respuestas en encuesta", "Survey responses") },
    ],
    assets: [
      { kind: "publication", note: t("Publication / ORCID placeholder hasta confirmar enlace público.", "Publication / ORCID placeholder until a public link is confirmed.") },
      { kind: "summary", file: "files/ev-adoption-summary.pdf" },
    ],
    relatedProjects: ["ev-pricing-analysis", "bayesian-conversion-analysis", "digital-growth-olive-oil"],
  },
  {
    slug: "ev-pricing-analysis",
    title: "EV Pricing Analysis",
    spanishTitle: "Análisis de pricing de vehículos eléctricos",
    category: t("Quantitative Business Analysis", "Quantitative Business Analysis"),
    subtitle: t(
      "Modelo hedónico de precios para analizar cómo autonomía, potencia y segmento explican el precio de vehículos eléctricos en el mercado europeo.",
      "Hedonic pricing model to analyse how range, power, and segment explain electric-vehicle pricing in the European market.",
    ),
    summary: t(
      "Análisis econométrico sobre vehículos eléctricos para estudiar la relación entre atributos técnicos y precio. El objetivo era entender si la autonomía real influye en el precio y si su efecto cambia según el posicionamiento del vehículo.",
      "Econometric analysis of electric vehicles to study the relationship between technical attributes and price. The goal was to understand whether real range affects price and whether that effect changes depending on vehicle positioning.",
    ),
    shortSummary: t(
      "Caso de econometría aplicada a pricing y market intelligence con EVs como contexto transferible.",
      "Applied econometrics case for pricing and market intelligence with EVs as a transferable context.",
    ),
    tags: ["Pricing", "Econometrics", "R", "OLS", "Robust Errors", "Market Intelligence"],
    tools: ["R"],
    methods: ["OLS regression", "Log-log model", "Interaction effects", "Robust errors HC1", "RESET", "VIF checks"],
    output: t("Modelo de pricing + interpretación estratégica", "Pricing model + strategic interpretation"),
    featured: true,
    secondary: false,
    filters: ["quantitative-business-analysis", "automotive-mobility"],
    projectType: "individual",
    sections: {
      executiveSummary: t(
        "Caso cuantitativo centrado en una pregunta de pricing: cómo valorar atributos técnicos y cómo cambia ese valor por segmento. El sector es automoción, pero la lógica es útil para producto, consultoría y market intelligence más allá de ese contexto.",
        "Quantitative case centred on a pricing question: how to value technical attributes and how that value changes by segment. The sector is automotive, but the logic is useful for product, consulting, and market intelligence beyond that context.",
      ),
      businessContext: t(
        "En mercados con productos técnicos y comparables, como automoción, electrónica o SaaS, el pricing no depende solo del coste. Depende del valor percibido de atributos, del segmento, del posicionamiento y de la competencia. Este caso usa EVs como contexto para demostrar análisis de pricing transferible.",
        "In markets with technical and comparable products, such as automotive, electronics, or SaaS, pricing does not depend only on cost. It depends on the perceived value of attributes, segment, positioning, and competition. This case uses EVs as a context to demonstrate transferable pricing analysis.",
      ),
      myRole: t(
        "Proyecto académico individual. Realicé preparación de datos, selección de variables, especificación del modelo, OLS log-log, dummy de segmento, efectos de interacción, errores robustos, diagnósticos y lectura de negocio de elasticidades.",
        "Individual academic project. I handled data preparation, variable selection, model specification, log-log OLS, segment dummy creation, interaction effects, robust errors, diagnostics, and business interpretation of elasticities.",
      ),
      dataMethods: [
        t("Dataset de vehículos eléctricos.", "Electric-vehicle dataset."),
        t("R y regresión OLS.", "R and OLS regression."),
        t("Modelo log-log con término de interacción.", "Log-log model with interaction term."),
        t("Errores estándar robustos HC1.", "HC1 robust standard errors."),
        t("RESET test y comprobaciones de multicolinealidad.", "RESET test and multicollinearity checks."),
      ],
      process: [
        t("Filtrar dataset para EVs.", "Filter the dataset for EVs."),
        t("Definir precio como variable dependiente.", "Set price as the dependent variable."),
        t("Transformar variables con logaritmos.", "Transform variables using logarithms."),
        t("Incorporar autonomía, potencia y segmento.", "Include range, power, and segment."),
        t("Crear dummy High-End e interacción autonomía x segmento.", "Create a High-End dummy and range-by-segment interaction."),
        t("Evaluar heterocedasticidad y robustez.", "Evaluate heteroscedasticity and robustness."),
        t("Interpretar elasticidades y traducir implicaciones.", "Interpret elasticities and translate implications."),
      ],
      keyFindings: [
        t("La autonomía debe tratarse como atributo central en estudios de pricing de EVs.", "Range should be treated as a central attribute in EV pricing studies."),
        t("La valoración marginal de la autonomía no es homogénea: depende del segmento y del posicionamiento.", "The marginal valuation of range is not homogeneous: it depends on segment and positioning."),
        t("La potencia y el segmento ayudan a explicar primas de precio más allá del valor medio.", "Power and segment help explain price premiums beyond the average level."),
      ],
      businessImplications: [
        t("Para producto: definir gamas según atributos valorados.", "For product teams: define ranges according to valued attributes."),
        t("Para pricing: justificar primas por autonomía según segmento.", "For pricing: justify range-related premiums by segment."),
        t("Para marketing: adaptar mensajes a atributos que explican valor.", "For marketing: adapt messages to value-driving attributes."),
        t("Para market intelligence: comparar competidores por atributos y no solo por precio final.", "For market intelligence: compare competitors by attributes, not only final price."),
      ],
      limitations: [
        t("Dataset académico/secundario.", "Academic/secondary dataset."),
        t("No incluye incentivos, descuentos reales o financiación.", "Does not include incentives, real discounts, or financing."),
        t("No prueba causalidad pura.", "Does not prove pure causality."),
        t("El precio de mercado puede diferir del precio transaccional real.", "Market price may differ from real transaction price."),
      ],
      nextSteps: [
        t("Añadir datos de promociones e incentivos.", "Add promotion and incentive data."),
        t("Comparar precio configurador vs precio real.", "Compare configurator price vs actual price."),
        t("Incorporar marca, equipamiento y coste total de propiedad.", "Incorporate brand, equipment, and total cost of ownership."),
        t("Usar modelos no lineales o machine learning.", "Use non-linear models or machine learning."),
        t("Crear dashboard competitivo por segmento.", "Create a competitive dashboard by segment."),
      ],
      suggestedVisuals: [
        t("Scatter plot price vs range.", "Scatter plot: price vs range."),
        t("Segment comparison.", "Segment comparison."),
        t("Regression coefficient table.", "Regression coefficient table."),
        t("Pricing implication cards.", "Pricing implication cards."),
        t("R code snippet.", "R code snippet."),
      ],
    },
    metrics: [],
    assets: [
      { kind: "report", file: "files/ev-pricing-report.pdf" },
      { kind: "notebook", note: t("Notebook placeholder para futura versión reproducible.", "Notebook placeholder for a future reproducible version.") },
    ],
    relatedProjects: ["ev-adoption-research", "bayesian-conversion-analysis", "lg-cro"],
  },
  {
    slug: "bayesian-conversion-analysis",
    title: "Bayesian Conversion Analysis",
    spanishTitle: "Análisis bayesiano de conversión comercial",
    category: t("Quantitative Business Analysis", "Quantitative Business Analysis"),
    subtitle: t(
      "Modelo Binomial–Beta aplicado a conversión en campañas comerciales para estimar incertidumbre, actualizar evidencia y apoyar decisiones de marketing.",
      "Binomial–Beta model applied to commercial-campaign conversion to estimate uncertainty, update evidence, and support marketing decisions.",
    ),
    summary: t(
      "Caso de inferencia bayesiana aplicado al dataset Bank Marketing. El objetivo era estimar la tasa real de conversión, cuantificar incertidumbre y traducir la probabilidad en expectativas operativas.",
      "Bayesian inference case applied to the Bank Marketing dataset. The goal was to estimate the real conversion rate, quantify uncertainty, and translate probability into operating expectations.",
    ),
    shortSummary: t(
      "Caso de decision science y probabilidad para traducir conversión esperada e incertidumbre en decisiones de marketing.",
      "Decision-science and probability case translating expected conversion and uncertainty into marketing decisions.",
    ),
    tags: ["Bayesian Inference", "Conversion", "Marketing Analytics", "Decision Science", "Probability"],
    tools: ["FirstBayes", "Excel"],
    methods: ["Binomial likelihood", "Beta prior", "Posterior update", "Predictive distribution"],
    output: t("Modelo probabilístico de conversión", "Probabilistic conversion model"),
    featured: true,
    secondary: false,
    filters: ["quantitative-business-analysis"],
    projectType: "individual",
    sections: {
      executiveSummary: t(
        "Caso útil para marketing analytics porque cambia la conversación de “cuál fue la conversión observada” a “qué rango de conversión es plausible y con qué probabilidad”. Esa lógica ayuda a decidir sin sobrerreaccionar al ruido.",
        "A useful marketing analytics case because it shifts the conversation from “what was the observed conversion” to “what range of conversion is plausible and with what probability”. That logic helps decisions without overreacting to noise.",
      ),
      businessContext: t(
        "En marketing, no basta con saber la conversión observada. Hay que distinguir variabilidad normal de cambios reales en rendimiento. La inferencia bayesiana permite actualizar creencias conforme llega nueva evidencia y estimar rangos plausibles para la toma de decisiones.",
        "In marketing, it is not enough to know the observed conversion. We need to distinguish normal variability from real performance changes. Bayesian inference allows beliefs to be updated as evidence arrives and helps estimate plausible ranges for decisions.",
      ),
      myRole: t(
        "Proyecto académico individual. Enfoqué el problema, interpreté el dataset, construí la lógica prior/posterior, modelicé la Binomial-Beta y traduje la distribución predictiva a expectativas operativas.",
        "Individual academic project. I framed the problem, interpreted the dataset, built the prior/posterior logic, modelled the Binomial–Beta setup, and translated the predictive distribution into operating expectations.",
      ),
      dataMethods: [
        t("Bank Marketing dataset.", "Bank Marketing dataset."),
        t("Variable binaria de conversión.", "Binary conversion variable."),
        t("Likelihood binomial y prior Beta.", "Binomial likelihood and Beta prior."),
        t("Actualización posterior y distribución predictiva.", "Posterior update and predictive distribution."),
        t("FirstBayes y Excel.", "FirstBayes and Excel."),
      ],
      process: [
        t("Definir el problema de decisión.", "Define the decision problem."),
        t("Interpretar el dataset y la variable de conversión.", "Interpret the dataset and conversion variable."),
        t("Seleccionar prior y especificar la likelihood.", "Select the prior and specify the likelihood."),
        t("Actualizar a posterior con la evidencia observada.", "Update to the posterior with observed evidence."),
        t("Construir distribución predictiva.", "Build the predictive distribution."),
        t("Traducir probabilidades a expectativas operativas.", "Translate probabilities into operating expectations."),
      ],
      keyFindings: [
        t("Tasa de conversión estimada cercana al 11,5 %.", "Estimated conversion rate close to 11.5%."),
        t("Expectativa operativa: 11–12 conversiones por cada 100 contactos.", "Operational expectation: 11–12 conversions for every 100 contacts."),
        t("Rango plausible: 6–18 conversiones por cada 100 contactos.", "Plausible range: 6–18 conversions per 100 contacts."),
        t("Probabilidad aproximada del 17,7 % de alcanzar 15 o más conversiones.", "Approximate 17.7% probability of reaching 15 or more conversions."),
      ],
      businessImplications: [
        t("Permite planificar campañas con rangos de incertidumbre.", "It allows campaigns to be planned with uncertainty ranges."),
        t("Evita sobrerreaccionar ante variaciones normales.", "It prevents overreaction to normal variation."),
        t("Ayuda a definir expectativas realistas de conversión.", "It helps define realistic conversion expectations."),
      ],
      limitations: [
        t("Dataset externo.", "External dataset."),
        t("Modelo simple.", "Simple model."),
        t("No incorpora variables predictoras individuales.", "It does not incorporate individual predictors."),
        t("No sustituye un modelo de scoring o uplift.", "It does not replace a scoring or uplift model."),
      ],
      nextSteps: [
        t("Incorporar variables del cliente.", "Incorporate customer variables."),
        t("Comparar segmentos.", "Compare segments."),
        t("Construir modelo predictivo.", "Build a predictive model."),
        t("Usar machine learning para propensity scoring.", "Use machine learning for propensity scoring."),
        t("Crear simulador de conversión por presupuesto.", "Create a budget-based conversion simulator."),
      ],
      suggestedVisuals: [
        t("Prior/posterior chart.", "Prior/posterior chart."),
        t("Predictive distribution.", "Predictive distribution."),
        t("Conversion probability cards.", "Conversion probability cards."),
        t("Expected conversions per 100 contacts chart.", "Expected conversions per 100 contacts chart."),
      ],
    },
    metrics: [
      { value: "11,5 %", label: t("Tasa estimada de conversión", "Estimated conversion rate") },
      { value: "17,7 %", label: t("Probabilidad de 15+ conversiones", "Probability of 15+ conversions") },
    ],
    assets: [
      { kind: "summary", file: "files/bayesian-conversion-summary.pdf" },
      { kind: "notebook", note: t("Notebook placeholder con lógica reproducible.", "Notebook placeholder with reproducible logic.") },
    ],
    relatedProjects: ["performance-dashboard-rfm", "ev-pricing-analysis", "ev-adoption-research"],
  },
  {
    slug: "zara-preowned",
    title: "Zara Pre-Owned Strategic Innovation Case",
    spanishTitle: "Caso de innovación estratégica para Zara Pre-Owned",
    category: t("Strategy & Growth", "Strategy & Growth"),
    subtitle: t(
      "Análisis estratégico de innovación, circular economy, customer insights y marketing digital para Zara Pre-Owned.",
      "Strategic innovation, circular-economy, customer-insight, and digital-marketing analysis for Zara Pre-Owned.",
    ),
    summary: t(
      "Caso estratégico centrado en circular economy, innovación de modelo y customer insights aplicados a retail.",
      "Strategic case focused on circular economy, model innovation, and customer insights applied to retail.",
    ),
    shortSummary: t(
      "Innovación y circularidad en retail como caso de estrategia de crecimiento y customer insight.",
      "Innovation and circularity in retail as a strategy-and-customer-insight growth case.",
    ),
    tags: ["Innovation", "Circular Economy", "Retail", "Digital Strategy", "Customer Insights"],
    tools: ["Benchmarking", "Retail case frameworks"],
    methods: ["Strategic diagnosis", "Consumer insight framing"],
    output: t("Caso estratégico resumido", "Strategic case summary"),
    featured: false,
    secondary: true,
    filters: ["strategy-growth", "ecommerce"],
    projectType: "group",
    sections: {
      executiveSummary: t("Caso de innovación aplicado a retail circular y propuesta de valor.", "Innovation case applied to circular retail and value proposition."),
      businessContext: t("El reto era entender cómo una iniciativa como Zara Pre-Owned puede reforzar marca, relevancia y modelo de negocio.", "The challenge was to understand how an initiative such as Zara Pre-Owned can reinforce brand, relevance, and business model."),
      myRole: t("Proyecto académico con contribución en análisis estratégico, customer insight y narrativa de propuesta de valor.", "Academic project with contribution in strategic analysis, customer insight, and value-proposition narrative."),
      dataMethods: [t("Benchmarking competitivo y framing estratégico.", "Competitive benchmarking and strategic framing.")],
      process: [t("Diagnóstico, propuesta y lectura de oportunidad.", "Diagnosis, proposal, and opportunity reading.")],
      keyFindings: [t("La circularidad puede generar crecimiento, diferenciación y señal de marca.", "Circularity can generate growth, differentiation, and brand signalling.")],
      businessImplications: [t("Útil para roles de estrategia, innovación y customer insight.", "Useful for strategy, innovation, and customer-insight roles.")],
      limitations: [t("Caso resumido en esta versión del portfolio.", "Summarised case in this portfolio version.")],
      nextSteps: [t("Profundizar en economics y operación del modelo.", "Deepen the economics and operating model.")],
      suggestedVisuals: [t("Innovation canvas.", "Innovation canvas.")],
    },
    metrics: [],
    assets: [{ kind: "summary", note: t("Resumen ampliable si se requiere.", "Summary can be expanded if needed.") }],
    relatedProjects: ["digital-growth-olive-oil", "publicis-commerce"],
  },
  {
    slug: "publicis-commerce",
    title: "Publicis Commerce Landing Strategy",
    spanishTitle: "Estrategia de landing para Publicis Commerce",
    category: t("Marketing Analytics & Performance", "Marketing Analytics & Performance"),
    subtitle: t(
      "Buyer personas, propuesta de valor y estrategia de landing para comunicar servicios de commerce, creatividad, datos y tecnología.",
      "Buyer personas, value proposition, and landing-page strategy to communicate commerce, creativity, data, and technology services.",
    ),
    summary: t(
      "Caso B2B de propuesta de valor, buyer persona y arquitectura de mensaje para una landing orientada a captación.",
      "B2B case focused on value proposition, buyer persona, and message architecture for an acquisition landing page.",
    ),
    shortSummary: t("Caso B2B de posicionamiento y landing strategy.", "B2B positioning and landing-strategy case."),
    tags: ["B2B Marketing", "Landing Strategy", "Buyer Persona", "Value Proposition"],
    tools: ["Messaging framework"],
    methods: ["Buyer persona", "Value proposition"],
    output: t("Arquitectura de landing y mensaje", "Landing architecture and messaging"),
    featured: false,
    secondary: true,
    filters: ["marketing-analytics-performance"],
    projectType: "group",
    sections: {
      executiveSummary: t("Caso de comunicación B2B orientado a claridad de propuesta de valor y captación.", "B2B communication case focused on value-proposition clarity and acquisition."),
      businessContext: t("El reto era explicar servicios complejos de forma clara y orientada a conversión.", "The challenge was to explain complex services clearly and in a conversion-oriented way."),
      myRole: t("Contribuí en buyer personas, jerarquía de mensaje y estructura de landing.", "I contributed to buyer personas, message hierarchy, and landing-page structure."),
      dataMethods: [t("Buyer persona y propuesta de valor.", "Buyer persona and value proposition.")],
      process: [t("Diagnóstico, estructura de mensaje y lógica de conversión.", "Diagnosis, message structure, and conversion logic.")],
      keyFindings: [t("La claridad de mensaje es una palanca central de conversión B2B.", "Message clarity is a core B2B conversion lever.")],
      businessImplications: [t("Útil para agencias, growth y marketing B2B.", "Useful for agencies, growth, and B2B marketing.")],
      limitations: [t("Caso resumido.", "Summarised case.")],
      nextSteps: [t("Añadir experimentación de landing y métricas reales.", "Add landing experimentation and real metrics.")],
      suggestedVisuals: [t("Message architecture mockup.", "Message architecture mockup.")],
    },
    metrics: [],
    assets: [{ kind: "summary", note: t("Resumen ampliable si se requiere.", "Summary can be expanded if needed.") }],
    relatedProjects: ["seo-sem-bartalent", "konverting"],
  },
  {
    slug: "konverting",
    title: "B2B SaaS Funnel Strategy for Konverting.io",
    spanishTitle: "Estrategia de funnel B2B SaaS para Konverting.io",
    category: t("Strategy & Growth", "Strategy & Growth"),
    subtitle: t(
      "Estrategia de funnel B2B SaaS con LinkedIn Ads, webinars, contenidos, demos, retargeting y lead nurturing.",
      "B2B SaaS funnel strategy with LinkedIn Ads, webinars, content, demos, retargeting, and lead nurturing.",
    ),
    summary: t(
      "Caso orientado a captación B2B SaaS y secuencia de adquisición, educación y conversión.",
      "Case focused on B2B SaaS acquisition and the sequence of acquisition, education, and conversion.",
    ),
    shortSummary: t("Funnel B2B SaaS con enfoque growth y lead generation.", "B2B SaaS funnel with a growth and lead-generation focus."),
    tags: ["B2B SaaS", "Funnel", "Lead Generation", "LinkedIn Ads", "Webinars"],
    tools: ["LinkedIn Ads planning", "Content funnel"],
    methods: ["Funnel mapping", "Lead nurturing"],
    output: t("Funnel strategy", "Funnel strategy"),
    featured: false,
    secondary: true,
    filters: ["strategy-growth"],
    projectType: "group",
    sections: {
      executiveSummary: t("Caso orientado a crecimiento B2B con foco en secuencia y activación.", "B2B growth case focused on sequence and activation."),
      businessContext: t("El reto era estructurar una lógica de adquisición y nurturing para un producto SaaS B2B.", "The challenge was to structure an acquisition and nurturing logic for a B2B SaaS product."),
      myRole: t("Contribución en arquitectura de funnel y lectura de canales.", "Contribution focused on funnel architecture and channel logic."),
      dataMethods: [t("Funnel mapping, content journey y lead nurturing.", "Funnel mapping, content journey, and lead nurturing.")],
      process: [t("Definición de TOFU, MOFU y BOFU.", "TOFU, MOFU, and BOFU definition.")],
      keyFindings: [t("La coordinación entre contenido, demo y retargeting era crítica.", "Coordination between content, demo, and retargeting was critical.")],
      businessImplications: [t("Útil para growth, SaaS y demand generation.", "Useful for growth, SaaS, and demand generation.")],
      limitations: [t("Caso resumido.", "Summarised case.")],
      nextSteps: [t("Añadir métricas reales por etapa.", "Add actual stage-level metrics.")],
      suggestedVisuals: [t("SaaS funnel map.", "SaaS funnel map.")],
    },
    metrics: [],
    assets: [{ kind: "summary", note: t("Resumen ampliable si se requiere.", "Summary can be expanded if needed.") }],
    relatedProjects: ["publicis-commerce", "seo-sem-bartalent"],
  },
  {
    slug: "lg-cro",
    title: "LG E-commerce CRO Scenario Modelling",
    spanishTitle: "Modelización de escenarios CRO para LG e-commerce",
    category: t("Quantitative Business Analysis", "Quantitative Business Analysis"),
    subtitle: t(
      "Modelización de escenarios CRO y e-commerce con ROI, ROAS, CAC, CLV:CAC y crecimiento proyectado.",
      "CRO and e-commerce scenario modelling with ROI, ROAS, CAC, CLV:CAC, and projected growth.",
    ),
    summary: t(
      "Caso de modelización financiera y de performance para decisiones CRO en e-commerce.",
      "Financial and performance modelling case for CRO decisions in e-commerce.",
    ),
    shortSummary: t("CRO, escenarios y lectura financiera para e-commerce.", "CRO, scenarios, and financial reading for e-commerce."),
    tags: ["CRO", "E-commerce", "Financial Modelling", "ROI", "ROAS", "CAC", "CLV"],
    tools: ["Spreadsheet modelling"],
    methods: ["Scenario analysis", "Unit economics"],
    output: t("Modelo de escenarios", "Scenario model"),
    featured: false,
    secondary: true,
    filters: ["quantitative-business-analysis", "ecommerce"],
    projectType: "group",
    sections: {
      executiveSummary: t("Caso de modelización para priorizar hipótesis CRO con lógica financiera.", "Modelling case to prioritise CRO hypotheses using financial logic."),
      businessContext: t("La mejora de conversión debe leerse junto a CAC, ROAS y rentabilidad.", "Conversion improvement has to be read alongside CAC, ROAS, and profitability."),
      myRole: t("Contribución en escenarios, métricas y lectura de negocio.", "Contribution focused on scenarios, metrics, and business interpretation."),
      dataMethods: [t("Scenario modelling y unit economics.", "Scenario modelling and unit economics.")],
      process: [t("Definición de hipótesis, escenarios y sensibilidad.", "Define hypotheses, scenarios, and sensitivity.")],
      keyFindings: [t("No toda mejora de conversión crea el mismo impacto económico.", "Not every conversion improvement creates the same economic impact.")],
      businessImplications: [t("Útil para CRO, e-commerce y performance con lógica financiera.", "Useful for CRO, e-commerce, and performance with financial logic.")],
      limitations: [t("Escenarios proyectados.", "Projected scenarios.")],
      nextSteps: [t("Conectar escenarios con experimentos reales.", "Connect scenarios with real experiments.")],
      suggestedVisuals: [t("Scenario cards.", "Scenario cards.")],
    },
    metrics: [],
    assets: [{ kind: "summary", note: t("Resumen ampliable si se requiere.", "Summary can be expanded if needed.") }],
    relatedProjects: ["digital-growth-olive-oil", "performance-dashboard-rfm", "ev-pricing-analysis"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getCoreProjects() {
  return projects.filter((project) => !project.secondary);
}

export function getSecondaryProjects() {
  return projects.filter((project) => project.secondary);
}

export function getRelatedProjects(slugs: string[]) {
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => Boolean(project));
}

export function getAssetLabel(kind: ProjectAssetKind) {
  switch (kind) {
    case "summary":
      return commonLabels.viewSummary;
    case "report":
      return commonLabels.downloadReport;
    case "notebook":
      return commonLabels.viewNotebook;
    case "dashboard":
      return commonLabels.viewDashboard;
    case "publication":
      return commonLabels.publication;
    default:
      return commonLabels.placeholderReady;
  }
}

export function getProjectDisplayTitle(project: Project, locale: Locale) {
  return locale === "es" ? project.spanishTitle : project.title;
}
