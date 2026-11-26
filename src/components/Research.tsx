"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp, Award } from "lucide-react";
import styles from "./Research.module.css";

const publications = [
  {
    title: "DRL-Based Energy-Efficient and AoI-Aware Trajectory and Scheduling in UAV-Assisted IoT Networks",
    type: "IEEE Conference Paper",
    status: "Accepted · TENCON 2026",
    journal: "IEEE TENCON 2026",
    abstract: "Co-authored research on a D3QN-based deep reinforcement learning framework that jointly optimizes UAV trajectories and IoT device scheduling for energy-efficient data collection and Age of Information (AoI) minimization. Simulation results achieved 5.79% lower AoI and 8.53% lower energy consumption than DQN.",
    tags: ["Deep Reinforcement Learning", "D3QN", "UAV Networks", "IoT", "Age of Information"]
  }
];

export default function Research() {
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);

  const toggleAbstract = (index: number) => {
    if (expandedPaper === index) {
      setExpandedPaper(null);
    } else {
      setExpandedPaper(index);
    }
  };

  return (
    <section id="research" className={styles.researchSection}>
      <div className={styles.headerArea}>
        <span className={styles.sectionBadge}>Academic Work</span>
        <h2 className={styles.sectionTitle}>Publications & Research</h2>
        <p className={styles.sectionSubtitle}>
          Co-authored two IEEE research papers, including work on energy-efficient UAV-assisted IoT networks.
        </p>
      </div>

      {/* Research Intern Highlight */}
      <article className={styles.internshipCard}>
        <div className={styles.cardHeader}>
          <div className={styles.cardMeta}>
            <span className={styles.badgePrimary}>Research Experience</span>
            <span className={styles.dateText}>May 2026 – July 2026</span>
          </div>
          <h3 className={styles.cardTitle}>Research Intern</h3>
          <h4 className={styles.cardInstitution}>Indian Institute of Information Technology Vadodara</h4>
        </div>
        <p className={styles.cardDescription}>
          As a Research Intern at the <strong>Indian Institute of Information Technology Vadodara</strong>, developed a deep reinforcement learning approach for UAV-assisted IoT data collection.
        </p>
        <ul className={styles.pointsList}>
          <li>
            Developed a <strong>D3QN-based framework</strong> to jointly optimize UAV trajectories and IoT device scheduling for energy efficiency and Age of Information (AoI).
          </li>
          <li>
            Benchmarked against RR, MAF, AWN, DQN, and DDQN, reducing AoI by <strong>5.79%</strong> and energy consumption by <strong>8.53%</strong> compared with DQN.
          </li>
        </ul>
      </article>

      {/* Publications Grid */}
      <div className={styles.publicationsContainer}>
        <h3 className={styles.subHeading}>Selected IEEE Research</h3>
        <div className={styles.grid}>
          {publications.map((paper, index) => (
            <article
              key={index}
              className={styles.pubCard}
            >
              <div className={styles.pubBadgeLine}>
                <span className={styles.pubBadge}>
                  <BookOpen size={12} style={{ marginRight: "4px" }} /> {paper.type}
                </span>
                <span className={styles.statusBadge}>
                  <Award size={12} style={{ marginRight: "4px" }} /> {paper.status}
                </span>
              </div>

              <h4 className={styles.pubTitle}>{paper.title}</h4>
              <p className={styles.pubJournal}>{paper.journal}</p>

              {/* Tags */}
              <div className={styles.pubTags}>
                {paper.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={styles.pubTag}>{tag}</span>
                ))}
              </div>

              {/* Expandable abstract */}
              <div className={styles.expandableArea}>
                <button
                  className={styles.toggleBtn}
                  onClick={() => toggleAbstract(index)}
                  aria-expanded={expandedPaper === index}
                >
                  {expandedPaper === index ? (
                    <>Hide Abstract <ChevronUp size={16} /></>
                  ) : (
                    <>Read Abstract <ChevronDown size={16} /></>
                  )}
                </button>

                <AnimatePresence>
                  {expandedPaper === index && (
                    <motion.div
                      className={styles.abstractContainer}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className={styles.abstractText}>{paper.abstract}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
