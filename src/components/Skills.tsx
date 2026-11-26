"use client";

import { useState } from "react";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      "Python", "Java", "TypeScript", "JavaScript", "SQL"
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    skills: [
      "Next.js", "React.js", "Node.js", "FastAPI", "REST APIs", "Tailwind CSS", "Prisma ORM"
    ]
  },
  {
    id: "generativeai",
    title: "Generative AI",
    skills: [
      "LLMs", "RAG", "Corrective RAG", "LangChain", "LangGraph", "Multi-Agent Systems", "Prompt Engineering", "LLM Evaluation"
    ]
  },
  {
    id: "machinelearning",
    title: "Machine Learning",
    skills: [
      "Scikit-learn", "PyTorch", "TensorFlow", "Feature Engineering", "Model Evaluation", "Deep Reinforcement Learning"
    ]
  },
  {
    id: "databases",
    title: "Databases & Retrieval",
    skills: [
      "PostgreSQL", "pgvector", "Firebase", "Redis", "FAISS", "Semantic Search", "Embeddings"
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: [
      "AWS", "Docker", "Git", "GitHub Actions", "CI/CD", "Kubernetes", "Trivy"
    ]
  },
  {
    id: "corecs",
    title: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "System Design"
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages");

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div
        className={styles.headerArea}
      >
        <span className={styles.sectionBadge}>Expertise</span>
        <h2 className={styles.sectionTitle}>Technical Skills</h2>
        <p className={styles.sectionSubtitle}>
          Technologies and areas of focus listed in my resume.
        </p>
      </div>

      {/* Tabs */}
      <div className={styles.tabContainer}>
        {skillCategories.map((category) => (
          <button
            key={category.id}
            className={`${styles.tabBtn} ${activeTab === category.id ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Active Skills Grid */}
      <div
        key={activeTab}
        className={styles.skillsGrid}
      >
        {activeCategory.skills.map((skill, index) => (
          <div
            key={index}
            className={styles.skillCard}
          >
            <span className={styles.skillName}>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
