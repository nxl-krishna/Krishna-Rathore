import { Trophy, Award, Code, BookOpen } from "lucide-react";
import styles from "./Achievements.module.css";

const achievements = [
  {
    title: "Runner-Up, Flowathon 2025",
    description: "Ranked among the top 3 teams out of 75 in a prestigious national-level hackathon.",
    icon: Trophy,
    tag: "National Hackathon"
  },
  {
    title: "CodeSpire 3.0 Finalist",
    description: "Ranked 4th among 50 competing teams and secured a position in the Top 10 finalists.",
    icon: Award,
    tag: "Coding Competition"
  },
  {
    title: "500+ LeetCode Problems",
    description: "Solved more than 500 algorithmic programming problems and achieved a contest rating above 1500.",
    icon: Code,
    tag: "Algorithms"
  },
  {
    title: "Two IEEE Research Papers",
    description: "Co-authored research papers published in IEEE TENCON and IEEE GSCON.",
    icon: BookOpen,
    tag: "Research Publications"
  },
  {
    title: "99-Hour Data Science & ML Course",
    description: "Completed a 99-hour Data Science and Machine Learning course on Udemy.",
    icon: BookOpen,
    tag: "Course Completion"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className={styles.achievementsSection}>
      <div
        className={styles.headerArea}
      >
        <span className={styles.sectionBadge}>Highlights</span>
        <h2 className={styles.sectionTitle}>Achievements</h2>
        <p className={styles.sectionSubtitle}>
          Highlighting hackathons, coding achievements, and academic credentials.
        </p>
      </div>

      <div className={styles.grid}>
        {achievements.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <article
              key={index}
              className={styles.card}
            >
              <div className={styles.iconContainer} aria-hidden="true">
                <IconComponent size={20} />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.cardTag}>
                  {item.tag}
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
