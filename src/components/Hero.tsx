import { ArrowDownRight, ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowRule} />
            Software engineer · AI/ML builder · researcher
          </p>

          <h1 className={styles.name}>
            Krishna
            <span>Rathore<span className={styles.namePeriod}>.</span></span>
          </h1>

          <div className={styles.roleContainer}>
            <span className={styles.roleMark}>01 /</span>
            <h2>Thoughtful software for complicated problems.</h2>
          </div>

          <p className={styles.description}>
            Computer Science and Engineering student at IIIT Vadodara. I work across full-stack product engineering, applied AI, and research in deep reinforcement learning.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className="btn-primary">
              Explore selected work <ArrowRight size={17} />
            </a>
            <a href="#experience" className={styles.textLink}>
              A little about me <ArrowDownRight size={17} />
            </a>
          </div>
        </div>

        <aside className={styles.sidePanel} aria-label="Current focus">
          <div className={styles.orbitArt} aria-hidden="true">
            <span className={styles.orbitRing} />
            <span className={styles.orbitRing} />
            <span className={styles.orbitCore}>KR</span>
            <span className={styles.orbitSatellite} />
            <span className={styles.orbitCross}>+</span>
          </div>
          <div className={styles.sideCaption}>
            <p className={styles.sideLabel}>Currently</p>
            <p className={styles.sideRole}>Software Development Engineer</p>
            <p className={styles.sideCompany}>Xelron AI <span>·</span> Remote</p>
          </div>
          <div className={styles.sideFooter}>
            <span>Vadodara, India</span>
            <span>Open to ideas ↗</span>
          </div>
        </aside>

        <div className={styles.verticalNote} aria-hidden="true">PORTFOLIO / 2026</div>
      </div>
    </section>
  );
}
