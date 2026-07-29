"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className="glow-spot" style={{ bottom: "0", left: "50%", transform: "translateX(-50%)" }}></div>

      <div className={styles.container}>
        <motion.div
          className={styles.connectBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Get In Touch</span>
          <h2 className={`${styles.title} gradient-text`}>Let's Create Something Great</h2>
          <p className={styles.description}>
            I am always open to exploring new research collaborations, engineering challenges, or internship positions. Feel free to shoot me an email!
          </p>

          <a href="mailto:krishnarathore2792005@gmail.com" className={`${styles.mailBtn} btn-primary`}>
            <Mail size={18} /> krishnarathore2792005@gmail.com
          </a>
        </motion.div>

        <div className={styles.divider}></div>

        <div className={styles.footerBottom}>
          <div className={styles.info}>
            <span className={styles.logo}>
              Krishna Rathore<span className={styles.logoDot}>.</span>
            </span>
            <p className={styles.copy}>
              &copy; {currentYear} Krishna Rathore. All rights reserved.
            </p>
          </div>

          <div className={styles.linksArea}>
            <div className={styles.socials}>
              <a href="https://github.com/nxl-krishna/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcon}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/krishnarathore-a8a93628b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:krishnarathore2792005@gmail.com" aria-label="Email" className={styles.socialIcon}>
                <Mail size={20} />
              </a>
            </div>

            <button onClick={scrollToTop} className={styles.scrollBtn} aria-label="Scroll to top">
              Back to top <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
