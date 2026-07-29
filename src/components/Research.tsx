"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ExternalLink, ChevronDown, ChevronUp, FileText, Award } from "lucide-react";
import styles from "./Research.module.css";

const publications = [
  {
    title: "Deep Learning-driven IDH Mutation and MGMT Methylation Prediction from Brain MRI Scans",
    type: "IEEE Conference Paper",
    status: "Published",
    journal: "IEEE International Conference on Bioinformatics and Biomedicine (BIBM)",
    abstract: "Predicting Isocitrate Dehydrogenase (IDH) mutation status and O6-methylguanine-DNA methyltransferase (MGMT) promoter methylation status from magnetic resonance imaging (MRI) is vital for glioma patient management. This paper proposes an automated medical imaging pipeline. Utilizing multimodal brain MRI scans, we perform image pre-processing, co-registration, and skull-stripping. We extract radiomics features and input them to an optimized ensemble learning model (XGBoost, LightGBM). Our model achieves 74.5% AUC for mutation classification, illustrating that machine learning models can accurately predict genomic markers non-invasively, thereby improving clinical diagnosis workflow.",
    tags: ["Medical Imaging", "Ensemble Learning", "XGBoost", "LightGBM", "Radiomics", "Oncology"],
    link: "#"
  },
  {
    title: "Securing Decentralized Anonymous Grievance Redressal with RSA Blind Signatures",
    type: "IEEE Conference Paper",
    status: "Published",
    journal: "IEEE International Conference on Trust, Security and Privacy (TrustCom)",
    abstract: "Feedback systems in academic and corporate institutions often suffer from low user engagement due to fears of retaliation. We introduce a secure, anonymous grievance redressal protocol utilizing RSA Blind Signatures to ensure untraceability while maintaining system integrity. Submissions are cryptographically signed by an authority without revealing the content, and later verified by the portal. We integrate real-time content moderation powered by Gemini AI API to filter toxic comments. Security analysis proves the system holds strong anonymity under active adversaries, providing a template for future anonymous submission systems.",
    tags: ["Cryptography", "RSA Blind Signatures", "Gemini AI", "Next.js", "Information Security"],
    link: "#"
  }
];

export default function Research() {
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const toggleAbstract = (index: number) => {
    if (expandedPaper === index) {
      setExpandedPaper(null);
    } else {
      setExpandedPaper(index);
    }
  };

  return (
    <section id="research" className={styles.researchSection}>
      <div className="glow-spot" style={{ top: "10%", left: "70%" }}></div>

      <motion.div
        className={styles.headerArea}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionBadge}>Academic Work</span>
        <h2 className={`${styles.sectionTitle} gradient-text`}>Publications & Research</h2>
        <p className={styles.sectionSubtitle}>
          Highlighting my published peer-reviewed IEEE conference papers and medical imaging research work.
        </p>
      </motion.div>

      {/* Research Intern Highlight */}
      <motion.div
        className={`${styles.internshipCard} glass-card`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className={styles.cardHeader}>
          <div className={styles.cardMeta}>
            <span className={styles.badgePrimary}>Current Research Role</span>
            <span className={styles.dateText}>May 2026 – Present</span>
          </div>
          <h3 className={styles.cardTitle}>Research Intern</h3>
          <h4 className={styles.cardInstitution}>Indian Institute of Information Technology Vadodara</h4>
        </div>
        <p className={styles.cardDescription}>
          Spearheading a research project focused on medical imaging ML pipelines. Our focus is predicting <strong>IDH mutation and MGMT methylation</strong> from multi-parametric brain MRI scans to enable non-invasive diagnosis.
        </p>
        <ul className={styles.pointsList}>
          <li>
            Built a complete pipeline using <strong>XGBoost, LightGBM, and ensemble models</strong>, achieving an area under the curve (<strong>AUC) of 74.5%</strong>.
          </li>
          <li>
            Implemented robust features engineering, exhaustive ablation tests, and <strong>k-fold cross-validation</strong> for survival rate prediction, achieving a <strong>0.72 balanced accuracy</strong> score.
          </li>
        </ul>
      </motion.div>

      {/* Publications Grid */}
      <motion.div
        className={styles.publicationsContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 className={styles.subHeading}>IEEE Conference Publications</h3>
        <div className={styles.grid}>
          {publications.map((paper, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${styles.pubCard} glass-card`}
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

              {/* Action Link */}
              <div className={styles.cardActions}>
                <a href={paper.link} className={styles.paperLink}>
                  View on IEEE Xplore <ExternalLink size={14} style={{ marginLeft: "4px" }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
