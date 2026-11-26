"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import styles from "./Header.module.css";

const navItems = [
  { number: "01", label: "Home", href: "#home" },
  { number: "02", label: "Work", href: "#projects" },
  { number: "03", label: "Research", href: "#research" },
  { number: "04", label: "Journey", href: "#experience" },
  { number: "05", label: "Skills", href: "#skills" },
  { number: "06", label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] }
    );

    document.querySelectorAll("main section[id], footer[id]").forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of header
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
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.container}>
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className={styles.logo}>
          <span className={styles.logoInitials}>KR</span>
          <span className={styles.logoDot}>.</span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`${styles.navLink} ${activeSection === item.href ? styles.activeNavLink : ""}`}
            >
              <span className={styles.navNumber}>{item.number}</span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className={styles.socials}>
          <a href="https://github.com/nxl-krishna/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcon}>
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/krishna-rathore-a8a93628b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
            <Linkedin size={18} />
          </a>
          <a href="mailto:krishnarathore2792005@gmail.com" aria-label="Email" className={styles.socialIcon}>
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileDrawer}
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileNavContainer}>
              <nav className={styles.mobileNav}>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`${styles.mobileNavLink} ${activeSection === item.href ? styles.activeMobileNavLink : ""}`}
                  >
                    <span className={styles.navNumber}>{item.number}</span>
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className={styles.mobileSocials}>
                <a href="https://github.com/nxl-krishna/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/krishnarathore-a8a93628b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
                  <Linkedin size={20} />
                </a>
                <a href="mailto:krishnarathore2792005@gmail.com" className={styles.socialIcon}>
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
