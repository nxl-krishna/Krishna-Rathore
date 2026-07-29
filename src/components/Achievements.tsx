"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Code, BookOpen } from "lucide-react";
import styles from "./Achievements.module.css";

const achievements = [
  {
    title: "Runner-Up, Flowathon 2025",
    description: "Ranked among the top 3 teams out of 75 in a prestigious national-level hackathon.",
    icon: Trophy,
    color: "#eab308", // gold
    accentBg: "rgba(234, 179, 8, 0.08)",
    accentBorder: "rgba(234, 179, 8, 0.2)",
    tag: "National Hackathon"
  },
  {
    title: "CodeSpire 3.0 Finalist",
    description: "Ranked 4th among 50 competing teams and secured a position in the Top 10 finalists.",
    icon: Award,
    color: "#a855f7", // purple
    accentBg: "rgba(168, 85, 247, 0.08)",
    accentBorder: "rgba(168, 85, 247, 0.2)",
    tag: "Coding Competition"
  },
  {
    title: "300+ LeetCode Solutions",
    description: "Solved over 300 algorithmic problems and achieved a contest rating of 1500+.",
    icon: Code,
    color: "#06b6d4", // teal
    accentBg: "rgba(6, 182, 212, 0.08)",
    accentBorder: "rgba(6, 182, 212, 0.2)",
    tag: "Algorithms"
  },
  {
    title: "Complete Data Science & ML",
    description: "Successfully completed a comprehensive 99-hour advanced curriculum on Udemy.",
    icon: BookOpen,
    color: "#f43f5e", // rose
    accentBg: "rgba(244, 63, 94, 0.08)",
    accentBorder: "rgba(244, 63, 94, 0.2)",
    tag: "Professional Certification"
  }
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="achievements" className={styles.achievementsSection}>
      <div className="glow-spot" style={{ top: "40%", left: "10%" }}></div>

      <motion.div
        className={styles.headerArea}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionBadge}>Success Metrics</span>
        <h2 className={`${styles.sectionTitle} gradient-text`}>Achievements</h2>
        <p className={styles.sectionSubtitle}>
          Highlighting hackathons, coding achievements, and academic credentials.
        </p>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {achievements.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              className={`${styles.card} glass-card`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                borderColor: item.color,
                boxShadow: `0 12px 30px ${item.accentBg}` 
              }}
            >
              <div 
                className={styles.iconContainer} 
                style={{ 
                  backgroundColor: item.accentBg, 
                  border: `1px solid ${item.accentBorder}`
                }}
              >
                <IconComponent size={28} style={{ color: item.color }} />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.cardTag} style={{ color: item.color }}>
                  {item.tag}
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
