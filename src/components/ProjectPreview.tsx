import styles from "./ProjectPreview.module.css";

export type ProjectVariant = "velo" | "finova" | "yuva" | "churn" | "absa" | "fraud" | "aankh" | "visual-rag";

type ProjectPreviewProps = {
  variant: ProjectVariant;
  title: string;
};

export default function ProjectPreview({ variant, title }: ProjectPreviewProps) {
  return (
    <div className={`${styles.frame} ${styles[variant]}`} role="img" aria-label={`Conceptual interface mockup for ${title}`}>
      <div className={styles.topBar}>
        <span className={styles.windowDots}><i /><i /><i /></span>
        <span className={styles.windowLabel}>{variant === "visual-rag" ? "CATALOG / DISCOVERY" : title.split(":")[0].toUpperCase()}</span>
        <span className={styles.windowMark}>INTERFACE STUDY</span>
      </div>
      {variant === "velo" && (
        <div className={styles.kanban}>
          <aside className={styles.appRail}><b>V</b><span>▦</span><span>◉</span><span>⌘</span></aside>
          <div className={styles.kanbanBoard}>
            <div className={styles.boardHeading}><div><small>WORKSPACE / PRODUCT</small><b>Launch board</b></div><span className={styles.addButton}>＋ New task</span></div>
            <div className={styles.columns}>
              {["Backlog", "In progress", "Review"].map((name, index) => <div className={styles.column} key={name}><b>{name}</b><span className={styles.task}><i style={{ background: index === 1 ? "#b65339" : "#c7d16d" }} />{["Map user flows", "Polish dashboard", "Auth review"][index]}</span><span className={styles.taskMuted} /></div>)}
            </div>
          </div>
        </div>
      )}
      {variant === "finova" && (
        <div className={styles.finance}>
          <div className={styles.financeSidebar}><b>finova</b><span>Overview</span><span>Activity</span><span>Portfolio</span></div>
          <div className={styles.financeMain}><small>PORTFOLIO OVERVIEW</small><b className={styles.financeTitle}>Your money, in focus.</b><div className={styles.financeTiles}><span>NET WORTH <i>↗</i></span><span>MONTHLY FLOW <i>↗</i></span><span>PORTFOLIO <i>↗</i></span></div><svg viewBox="0 0 520 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 82 C50 73 68 88 112 58 S180 70 220 42 S284 54 328 24 S389 42 428 20 S478 32 520 8" /></svg></div>
        </div>
      )}
      {variant === "yuva" && (
        <div className={styles.agentCanvas}>
          <div className={styles.agentTitle}><small>RESEARCH FLOW</small><b>Evidence, connected.</b></div>
          <svg viewBox="0 0 600 250" aria-hidden="true"><path d="M90 128 H225 M265 128 L365 58 M265 128 H365 M265 128 L365 198 M405 58 H505 M405 128 H505 M405 198 H505" /></svg>
          <span className={`${styles.node} ${styles.nodePlanner}`}>Planner</span><span className={`${styles.node} ${styles.nodeSearch}`}>Search</span><span className={`${styles.node} ${styles.nodeRetrieve}`}>Retrieve</span><span className={`${styles.node} ${styles.nodeJudge}`}>Evaluate</span><span className={`${styles.node} ${styles.nodeAnswer}`}>Cited answer</span>
        </div>
      )}
      {variant === "churn" && (
        <div className={styles.analytics}>
          <div className={styles.analyticsHead}><div><small>RETENTION / MODEL VIEW</small><b>Customer signals</b></div><span>Risk overview</span></div>
          <div className={styles.chartArea}><div className={styles.chartLabels}><span>HIGH RISK</span><span>WATCH</span><span>HEALTHY</span></div><div className={styles.chartBars}>{[32, 54, 43, 72, 48, 84, 61, 92, 68, 77, 50, 87].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
          <div className={styles.legend}><span><i /> Retention opportunity</span><span>Model insights ↗</span></div>
        </div>
      )}
      {variant === "absa" && (
        <div className={styles.sentiment}>
          <div className={styles.sentimentCopy}><small>REVIEW INTELLIGENCE</small><b>Understand what people mean.</b><span>Aspect extraction → sentiment</span></div>
          <div className={styles.review}><span>“The pasta was lovely, service took too long.”</span><div><i>FOOD <b>Positive</b></i><i>SERVICE <b>Negative</b></i></div></div>
          <div className={styles.sentimentSide}><span>ASPECT</span><b>food</b><em>positive</em><hr /><span>ASPECT</span><b>service</b><em className={styles.negative}>negative</em></div>
        </div>
      )}
      {variant === "fraud" && (
        <div className={styles.riskView}>
          <div className={styles.riskRail}><b>F</b><span>◌</span><span>⌁</span><span>⌖</span></div>
          <div className={styles.riskMain}><div><small>TRANSACTION MONITOR</small><b>Risk signals</b></div><div className={styles.riskPlot}><svg viewBox="0 0 500 150" preserveAspectRatio="none" aria-hidden="true"><path className={styles.riskArea} d="M0 120 L45 109 L90 122 L140 72 L180 100 L220 85 L270 102 L310 32 L350 74 L395 60 L440 18 L500 48 L500 150 L0 150Z" /><path className={styles.riskLine} d="M0 120 L45 109 L90 122 L140 72 L180 100 L220 85 L270 102 L310 32 L350 74 L395 60 L440 18 L500 48" /></svg></div><span className={styles.riskLegend}><i /> Flagged pattern <i /> Drift watch</span></div>
        </div>
      )}
      {variant === "aankh" && (
        <div className={styles.mapView}>
          <div className={styles.mapGrid} aria-hidden="true"><svg viewBox="0 0 600 280" preserveAspectRatio="none"><path d="M68 225 C135 202 105 154 205 166 S280 82 364 110 S464 80 535 45" /><circle cx="68" cy="225" r="7" /><circle cx="535" cy="45" r="7" /></svg></div>
          <div className={styles.mapPanel}><small>BEAT OVERVIEW</small><b>Patrol in progress</b><span><i /> Route active</span><span>Officer dispatch <b>View details ↗</b></span></div>
          <div className={styles.mapPin}>A</div>
        </div>
      )}
      {variant === "visual-rag" && (
        <div className={styles.catalog}>
          <div className={styles.catalogIntro}><small>VISUAL PRODUCT SEARCH</small><b>Find it by describing it.</b><div className={styles.searchBar}>A sculptural reading lamp in warm brass <span>⌕</span></div></div>
          <div className={styles.productRow}><div className={styles.product}><div className={styles.productArt}><i /></div><span>Arc lamp</span></div><div className={styles.product}><div className={styles.productArt}><i /></div><span>Studio light</span></div><div className={styles.product}><div className={styles.productArt}><i /></div><span>Brass desk lamp</span></div></div>
        </div>
      )}
    </div>
  );
}
