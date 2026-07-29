"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, ShoppingCart, MessageSquare } from "lucide-react";
import { Github } from "@/components/Icons";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Network Security & Phishing Detection",
    description: "An end-to-end phishing detection system implementing data validation pipelines and containerized FastAPI services, tracked via MLflow and hosted on AWS EC2.",
    bullets: [
      "Built models with XGBoost, Random Forest, and AdaBoost for highly accurate phishing URL classification.",
      "Leveraged Docker for microservice containment and MLflow for experimental tracking & metadata logging."
    ],
    tech: ["Python", "FastAPI", "MongoDB", "scikit-learn", "MLflow", "Docker", "AWS EC2"],
    github: "https://github.com",
    demo: null,
    icon: ShieldCheck,
    color: "#06b6d4" // teal
  },
  {
    title: "Multimodal RAG E-Commerce Assistant",
    description: "A hybrid-retrieval RAG assistant facilitating semantic search over product catalogs, using embeddings, vector storage, and metadata filtering.",
    bullets: [
      "Developed multimodal catalog indexing utilizing LangChain, FAISS vector index, and HuggingFace models.",
      "Implemented hybrid retrieval combined with LLM-driven structured queries for context-aware recommendations."
    ],
    tech: ["Python", "LangChain", "FAISS", "HuggingFace", "Groq", "LLMs"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: ShoppingCart,
    color: "#a855f7" // purple
  },
  {
    title: "WhisperBox: Anonymous Grievance Redressal",
    description: "A secure feedback collection app that guarantees untraceable submission logs through cryptographic signatures, featuring automated AI content screening.",
    bullets: [
      "Integrated RSA Blind Signatures to enable public verify-ability while decoupling user identities from data payloads.",
      "Implemented Gemini AI API moderation to catch inappropriate posts, deploying a production Next.js & Firebase stack."
    ],
    tech: ["Next.js", "TypeScript", "Firebase", "Gemini AI", "RSA Cryptography"],
    github: "https://github.com",
    demo: "https://example.com",
    icon: MessageSquare,
    color: "#f43f5e" // rose
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="glow-spot" style={{ top: "60%", left: "80%" }}></div>

      <motion.div
        className={styles.headerArea}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionBadge}>Build Portfolio</span>
        <h2 className={`${styles.sectionTitle} gradient-text`}>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>
          A showcase of systems ranging from machine learning pipelines to secure full-stack software.
        </p>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <motion.div
              key={index}
              className={`${styles.card} glass-card`}
              variants={cardVariants}
            >
              <div className={styles.cardHeader}>
                <div 
                  className={styles.iconContainer}
                  style={{ backgroundColor: `${project.color}10`, border: `1px solid ${project.color}25` }}
                >
                  <IconComponent size={24} style={{ color: project.color }} />
                </div>
                <h3 className={styles.title}>{project.title}</h3>
              </div>

              <p className={styles.description}>{project.description}</p>

              <ul className={styles.bulletList}>
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className={styles.bulletItem}>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className={styles.techStack}>
                {project.tech.map((tag, tIdx) => (
                  <span key={tIdx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.footerLinks}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.linkButton}
                  style={{ "--hover-color": project.color } as React.CSSProperties}
                >
                  <Github size={16} /> Code
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.linkButton}
                    style={{ "--hover-color": project.color } as React.CSSProperties}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
