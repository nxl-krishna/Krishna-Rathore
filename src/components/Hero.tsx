"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Trophy } from "lucide-react";
import styles from "./Hero.module.css";

const typewriterWords = [
  "Research Intern",
  "Full-Stack Developer",
  "Machine Learning Specialist",
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const wordIndex = 0; // standard fallback
  // We can write a custom rotating text hook
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Intro Tag */}
        <motion.div variants={itemVariants} className={styles.introTag}>
          <span className={styles.pulseDot}></span>
          Available for Opportunities
        </motion.div>

        {/* Big Name */}
        <motion.h1 variants={itemVariants} className={`${styles.name} gradient-text`}>
          Krishna Rathore
        </motion.h1>

        {/* Rotating Subtitle */}
        <motion.div variants={itemVariants} className={styles.roleContainer}>
          <span className={styles.staticRole}>I am a </span>
          <span className={styles.animatedRole}>
            <span key={currentWordIndex} className={styles.typingText}>
              {typewriterWords[currentWordIndex]}
            </span>
          </span>
        </motion.div>

        {/* Hero Description */}
        <motion.p variants={itemVariants} className={styles.description}>
          B.Tech Computer Science student at <strong>IIIT Vadodara</strong>.
          Specializing in machine learning and full-stack systems, with successfully published <strong>two IEEE conference papers</strong> and a strong portfolio of medical imaging and RAG-based research work.
        </motion.p>

        {/* Highlighted Metrics / Achievements Grid */}
        <motion.div variants={itemVariants} className={styles.metricsGrid}>
          {/* <div className={styles.metricCard}>
            <BookOpen className={styles.metricIcon} size={24} />
            <div className={styles.metricContent}>
              <span className={styles.metricValue}>2 IEEE</span>
              <span className={styles.metricLabel}>Papers Published</span>
            </div>
          </div>
          <div className={styles.metricCard}>
            <Trophy className={styles.metricIcon} size={24} />
            <div className={styles.metricContent}>
              <span className={styles.metricValue}>Flowathon</span>
              <span className={styles.metricLabel}>National Runner-up</span>
            </div>
          </div> */}
          {/* <div className={styles.metricCard}>
            <div className={`${styles.metricIcon} ${styles.mlIcon}`}>🧠</div>
            <div className={styles.metricContent}>
              <span className={styles.metricValue}>74.5% AUC</span>
              <span className={styles.metricLabel}>Brain MRI Classifier</span>
            </div>
          </div> */}
        </motion.div>

        {/* CTA Actions */}
        <motion.div variants={itemVariants} className={styles.actions}>
          <button onClick={() => scrollToSection("#research")} className="btn-primary">
            Explore Research <ArrowRight size={18} />
          </button>
          <button onClick={() => scrollToSection("#projects")} className="btn-secondary">
            View Projects
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
