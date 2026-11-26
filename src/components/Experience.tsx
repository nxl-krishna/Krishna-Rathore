"use client";

import { useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import styles from "./Experience.module.css";

const timelineData = [
  {
    type: "experience",
    title: "Contractual Software Development Engineer",
    subtitle: "Xelron AI",
    duration: "August 2026 – Present",
    location: "Remote",
    description: "Designing and validating software engineering benchmark tasks for AI coding agents.",
    details: [
      "Designed and validated 30+ benchmark tasks, including automated test suites and task environment debugging.",
      "Developed test cases and debugged evaluation workflows with Python, Linux/Bash, JavaScript, and JSON.",
      "Recognized as a top performer for high-quality benchmark tasks and reliable evaluation workflows."
    ],
    icon: Briefcase
  },
  {
    type: "experience",
    title: "Research Intern",
    subtitle: "Indian Institute of Information Technology Vadodara",
    duration: "May 2026 – July 2026",
    location: "Gandhinagar, Gujarat",
    description: "Developed a deep reinforcement learning framework for energy-efficient data collection in UAV-assisted IoT networks.",
    details: [
      "Built a D3QN framework to jointly optimize UAV trajectories and IoT device scheduling while minimizing Age of Information (AoI).",
      "Compared against RR, MAF, AWN, DQN, and DDQN; achieved 5.79% lower AoI and 8.53% lower energy use than DQN.",
      "Co-authored a paper accepted for IEEE TENCON 2026."
    ],
    icon: Briefcase
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
    icon: GraduationCap
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
    icon: GraduationCap
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
    icon: GraduationCap
  }
];

export default function Experience() {
  const [filter, setFilter] = useState("all");

  const filteredData = filter === "all" 
    ? timelineData 
    : timelineData.filter((item) => item.type === filter);

  return (
    <section id="experience" className={styles.experienceSection}>
      <div
        className={styles.headerArea}
      >
        <span className={styles.sectionBadge}>My Journey</span>
        <h2 className={styles.sectionTitle}>Experience & Education</h2>
        <p className={styles.sectionSubtitle}>
          Professional experience and education, based on my current resume.
        </p>
      </div>

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
      </div>

      {/* Timeline Tree */}
      <div
        key={filter}
        className={styles.timeline}
      >
        <div className={styles.timelineLine}></div>
        {filteredData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <article
              key={index}
              className={styles.timelineItem}
            >
              {/* Timeline Icon */}
              <div className={styles.timelineIcon}>
                <IconComponent size={18} />
              </div>

              {/* Card content */}
              <div className={styles.timelineContent}>
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
            </article>
          );
        })}
      </div>
    </section>
  );
}
