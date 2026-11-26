import styles from "./Projects.module.css";
import ProjectPreview from "./ProjectPreview";

const projects = [
  {
    title: "Velo: AI-Assisted Engineering Project Manager",
    type: "Product engineering",
    preview: "velo",
    description: "A full-stack project management platform with collaborative Kanban boards, role-based access, and AI-assisted workflows.",
    bullets: [
      "Built interactive drag-and-drop Kanban boards with multi-tier role-based access control.",
      "Added Gemini task summaries and assignee suggestions, JWT authentication, password recovery, and BullMQ/Redis background notifications."
    ],
    tech: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Gemini API", "BullMQ", "Redis"],
  },
  {
    title: "Finova: Personal Finance & Portfolio Intelligence",
    type: "Fintech",
    preview: "finova",
    description: "A personal finance dashboard for expenses, budgets, net worth, and investment portfolio performance.",
    bullets: [
      "Tracked expenses, monthly category budgets, net worth, asset cost basis, and realized/unrealized trade P&L.",
      "Added cash flow charts, normalized PostgreSQL data, JWT httpOnly sessions, Server Actions, and user-level data isolation."
    ],
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Recharts", "JWT"],
  },
  {
    title: "Yuva AI: Multi-Agent Research System",
    type: "Generative AI",
    preview: "yuva",
    description: "A multi-agent research assistant that searches, retrieves, and evaluates evidence with citation grounding.",
    bullets: [
      "Built a cyclical LangGraph workflow with a supervisor, parallel web search, and evaluator-optimizer review loop.",
      "Implemented corrective RAG with semantic retrieval, relevance grading, query reformulation, and citation evaluation against a single-agent baseline."
    ],
    tech: ["LangGraph", "LangChain", "Python", "Gemini", "Vector Search", "Docker"],
  },
  {
    title: "Customer Churn Prediction & Retention Platform",
    type: "Machine learning",
    preview: "churn",
    description: "An end-to-end machine learning workflow and dashboard for assessing customer churn risk.",
    bullets: [
      "Processed 7,000+ records with data cleaning, feature engineering, and encoding.",
      "Compared Logistic Regression, Random Forest, and HistGradientBoosting; achieved 88.2% recall and 0.842 ROC-AUC."
    ],
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
  },
  {
    title: "Customer Feedback Intelligence: ABSA",
    type: "Natural language processing",
    preview: "absa",
    description: "An aspect-based sentiment analysis system for identifying product aspects and classifying review sentiment.",
    bullets: [
      "Built a two-stage DeBERTa-v3 model for aspect extraction and sentiment classification.",
      "Achieved 90.8% F1 for aspect extraction and 87.1% sentiment accuracy on SemEval-2014 Restaurant data."
    ],
    tech: ["Python", "PyTorch", "DeBERTa-v3", "FastAPI"],
  },
  {
    title: "Real-Time Financial Fraud Detection & Monitoring",
    type: "Applied machine learning",
    preview: "fraud",
    description: "A fraud detection and monitoring pipeline for highly imbalanced transaction data.",
    bullets: [
      "Processed 284K+ transactions with chronological validation and robust transformations for skewed amounts.",
      "Tuned a class-weighted Random Forest to 76.8% PR-AUC, 79.6% precision, 75.0% recall, and 0.024% false positive rate; added SHAP explanations and PSI drift monitoring."
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Pandas"],
  },
  {
    title: "Aankh: Smart E-Beat Management & Police Patrol System",
    type: "Civic technology",
    preview: "aankh",
    description: "A web platform for digitizing police patrol workflows, beat allocations, and officer performance analytics.",
    bullets: [
      "Built REST APIs and MongoDB workflows for officer records, emergency alerts, and periodic GPS polling.",
      "Added Mapbox geospatial patrol tracking and Recharts duty analytics."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Mapbox", "Recharts"],
  },
  {
    title: "Visual RAG: Multimodal E-Commerce Product Assistant",
    type: "Multimodal AI",
    preview: "visual-rag",
    description: "A product discovery assistant that grounds answers in a catalog using image-aware and hybrid retrieval.",
    bullets: [
      "Converted product imagery into search vectors and combined FAISS similarity search with metadata filtering and cached indexes.",
      "Reduced unsupported answers with closed-context prompts, category validation, and structured query parsing."
    ],
    tech: ["Python", "LangChain", "Streamlit", "Groq Vision", "FAISS", "Pydantic v2"],
  }
] as const;

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.headerArea}>
        <span className={styles.sectionBadge}>Selected work</span>
        <h2 className={styles.sectionTitle}>Projects with a point of view.</h2>
        <p className={styles.sectionSubtitle}>
          Full-stack products, multi-agent AI systems, and applied machine learning projects from my resume.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <article key={project.title} className={`${styles.project} ${styles[`project${index + 1}`]}`}>
            <ProjectPreview variant={project.preview} title={project.title} />
            <div className={styles.projectBody}>
              <div className={styles.projectMeta}>
                <span>{project.type}</span>
                <span className={styles.projectIndex}>0{index + 1}</span>
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.bulletList}>
                {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div className={styles.techStack}>
                {project.tech.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
