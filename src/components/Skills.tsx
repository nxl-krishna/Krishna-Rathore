"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    skills: [
      { name: "Next.js / React", level: 90 },
      { name: "FastAPI", level: 88 },
      { name: "scikit-learn", level: 92 },
      { name: "TensorFlow / Keras", level: 80 },
      { name: "Pandas & NumPy", level: 85 },
      { name: "Tailwind CSS", level: 88 }
    ]
  },
  {
    id: "corecs",
    title: "Core CS & ML",
    skills: [
      { name: "Machine Learning / Deep Learning", level: 93 },
      { name: "Data Structures & Algorithms", level: 88 },
      { name: "DBMS / PostgreSQL", level: 82 },
      { name: "Computer Networks & OS", level: 80 }
    ]
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    skills: [
      { name: "Docker", level: 88 },
      { name: "AWS (EC2/S3)", level: 82 },
      { name: "Git & GitHub", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "MLflow", level: 78 }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages");

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="glow-spot" style={{ top: "80%", left: "20%" }}></div>

      <motion.div
        className={styles.headerArea}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionBadge}>Expertise</span>
        <h2 className={`${styles.sectionTitle} gradient-text`}>Technical Skills</h2>
        <p className={styles.sectionSubtitle}>
          A breakdown of my programming languages, frameworks, core fundamentals, and deployment tools.
        </p>
      </motion.div>

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
      <motion.div
        key={activeTab}
        className={styles.skillsGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {activeCategory.skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`${styles.skillCard} glass-card`}
          >
            <div className={styles.skillMeta}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillPercent}>{skill.level}%</span>
            </div>
            <div className={styles.barContainer}>
              <motion.div
                className={styles.fillBar}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" as const, delay: 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
