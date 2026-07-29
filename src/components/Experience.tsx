"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import styles from "./Experience.module.css";

const timelineData = [
  {
    type: "experience",
    title: "Research Intern",
    subtitle: "Indian Institute of Information Technology Vadodara",
    duration: "May 2026 – Present",
    location: "Gandhinagar, Gujarat",
    description: "Developing machine learning and computer vision classification frameworks for medical imaging diagnostics.",
    details: [
      "Built brain MRI tumor analysis pipelines for IDH and MGMT marker identification.",
      "Achieved 74.5% classification AUC and 0.72 balanced survival rate prediction accuracy."
    ],
    icon: Briefcase,
    color: "#06b6d4"
  },
  {
    type: "education",
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Indian Institute of Information Technology Vadodara",
    duration: "August 2023 – May 2027",
    location: "Gandhinagar, Gujarat",
    description: "Focusing on core algorithms, systems, software engineering, and artificial intelligence models.",
    details: [
      "Current cumulative CPI: 7.17 / 10.00",
      "Active participation in campus coding communities and research work."
    ],
    icon: GraduationCap,
    color: "#a855f7"
  },
  {
    type: "volunteering",
    title: "Dance Club Mod5 - Core Member",
    subtitle: "IIIT Vadodara Cultural Council",
    duration: "September 2023 – Present",
    location: "Gandhinagar, Gujarat",
    description: "Organizing workshops, cultural festivals, and leading performing teams for campus functions.",
    details: [
      "Co-coordinated a college Garba Workshop, managing choreography and teaching 100+ students.",
      "Collaborated with club council to pitch, organize, and execute annual cultural festivals."
    ],
    icon: Users,
    color: "#f43f5e"
  },
  {
    type: "education",
    title: "Class XII (CBSE Senior Secondary)",
    subtitle: "Shree Mahaveer Higher Secondary School",
    duration: "April 2022 – March 2023",
    location: "Alote, Madhya Pradesh",
    description: "Completed higher secondary curriculum with a focus on Mathematics, Physics, and Chemistry.",
    details: [
      "Scored a cumulative percentage of 78.20% in board examinations."
    ],
    icon: GraduationCap,
    color: "#3b82f6"
  },
  {
    type: "education",
    title: "Class X (CBSE Secondary)",
    subtitle: "Shree Mahaveer Higher Secondary School",
    duration: "April 2020 – March 2021",
    location: "Alote, Madhya Pradesh",
    description: "Primary board education completed with distinction honors.",
    details: [
      "Scored a cumulative board percentage of 91.20%."
    ],
    icon: GraduationCap,
    color: "#3b82f6"
  }
];

export default function Experience() {
  const [filter, setFilter] = useState("all");

  const filteredData = filter === "all" 
    ? timelineData 
    : timelineData.filter((item) => item.type === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="glow-spot" style={{ top: "30%", left: "80%" }}></div>

      <motion.div
        className={styles.headerArea}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionBadge}>My Journey</span>
        <h2 className={`${styles.sectionTitle} gradient-text`}>Experience & Education</h2>
        <p className={styles.sectionSubtitle}>
          An overview of my academic pathway, corporate internships, and voluntary contributions.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterBtn} ${filter === "all" ? styles.activeFilter : ""}`}
          onClick={() => setFilter("all")}
        >
          Show All
        </button>
        <button
          className={`${styles.filterBtn} ${filter === "experience" ? styles.activeFilter : ""}`}
          onClick={() => setFilter("experience")}
        >
          Experience
        </button>
        <button
          className={`${styles.filterBtn} ${filter === "education" ? styles.activeFilter : ""}`}
          onClick={() => setFilter("education")}
        >
          Education
        </button>
        <button
          className={`${styles.filterBtn} ${filter === "volunteering" ? styles.activeFilter : ""}`}
          onClick={() => setFilter("volunteering")}
        >
          Volunteering
        </button>
      </div>

      {/* Timeline Tree */}
      <motion.div
        key={filter}
        className={styles.timeline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.timelineLine}></div>
        {filteredData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              className={styles.timelineItem}
              variants={itemVariants}
            >
              {/* Timeline Icon */}
              <div 
                className={styles.timelineIcon}
                style={{ 
                  backgroundColor: "#030712",
                  border: `2px solid ${item.color}`,
                  boxShadow: `0 0 10px ${item.color}30`
                }}
              >
                <IconComponent size={18} style={{ color: item.color }} />
              </div>

              {/* Card content */}
              <div className={`${styles.timelineContent} glass-card`}>
                <div className={styles.cardHeader}>
                  <div className={styles.titleLine}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <span className={styles.duration}>{item.duration}</span>
                  </div>
                  <div className={styles.subtitleLine}>
                    <span className={styles.subtitle}>{item.subtitle}</span>
                    <span className={styles.location}>{item.location}</span>
                  </div>
                </div>

                <p className={styles.description}>{item.description}</p>

                {item.details && item.details.length > 0 && (
                  <ul className={styles.bulletList}>
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className={styles.bulletItem}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
