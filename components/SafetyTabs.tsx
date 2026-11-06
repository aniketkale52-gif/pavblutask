"use client";

import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import styles from "./SafetyTabs.module.css";

const TABS = [
  {
    id: "contraindications",
    label: "Contraindications",
    items: [
      "PAVBLU® is contraindicated in patients with ocular or periocular infections, active intraocular inflammation, or known hypersensitivity to aflibercept or to any of the excipients in PAVBLU.",
    ],
  },
  {
    id: "warnings",
    label: "Warnings and precautions",
    items: [
      "Intravitreal injections, including those with aflibercept products, have been associated with endophthalmitis and retinal detachments and, more rarely, retinal vasculitis with or without occlusion. Proper aseptic injection technique must always be used when administering PAVBLU. Patients and/or caregivers should be instructed to report any signs and/or symptoms suggestive of endophthalmitis, retinal detachment, or retinal vasculitis without delay and should be managed appropriately.",
      "Acute increases in intraocular pressure have been seen within 60 minutes of intravitreal injection, including with aflibercept products. Sustained increases in intraocular pressure have also been reported after repeated intravitreal dosing with VEGF inhibitors. Intraocular pressure and the perfusion of the optic nerve head should be monitored and managed appropriately.",
      "There is a potential risk of arterial thromboembolic events (ATEs) following intravitreal use of VEGF inhibitors, including aflibercept products. ATEs are defined as nonfatal stroke, nonfatal myocardial infarction, or vascular death (including deaths of unknown cause).",
      "The incidence of reported thromboembolic events in wet AMD studies during the first year was 1.8% (32 out of 1824) in the combined group of patients treated with aflibercept compared with 1.5% (9 out of 595) in patients treated with ranibizumab; through 96 weeks, the incidence was 3.3% (60 out of 1824) in the aflibercept group compared with 3.2% (19 out of 595) in the ranibizumab group. The incidence in the DME studies from baseline to week 52 was 3.3% (19 out of 578) in the combined group of patients treated with aflibercept compared with 2.8% (8 out of 287) in the control group; from baseline to week 100, the incidence was 6.4% (37 out of 578) in the combined group of patients treated with aflibercept compared with 4.2% (12 out of 287) in the control group. There were no reported thromboembolic events in the patients treated with aflibercept in the first six months of the RVO studies.",
    ],
  },
  {
    id: "adverse",
    label: "Adverse reactions",
    items: [
      "Serious adverse reactions related to the injection procedure have occurred in <0.1% of intravitreal injections with aflibercept including endophthalmitis and retinal detachment.",
      "The most common adverse reactions (≥5%) reported in patients receiving aflibercept were conjunctival hemorrhage, eye pain, cataract, vitreous detachment, vitreous floaters, and intraocular pressure increased.",
      "Patients may experience temporary visual disturbances after an intravitreal injection with PAVBLU and the associated eye examinations. Advise patients not to drive or use machinery until visual function has recovered sufficiently.",
    ],
  },
];

export default function SafetyTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Arrow keys move between tabs (WAI-ARIA tabs pattern).
  // Restarts the progress line (and the timer) whenever a tab is chosen, even the same one.
  const [cycle, setCycle] = useState(0);
  // Autoplay pauses while the pointer is over the tabs or keyboard focus is inside them.
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  // …and only runs while the section is on screen.
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const paused = hovered || focused || !inView;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const select = (i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  };

  // When the progress line finishes, move to the next tab (wraps around).
  const onProgressEnd = () => select((active + 1) % TABS.length);

  // Animate the panel area's height between tabs (each tab has a different amount of text).
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [height, setHeight] = useState<number>();
  useLayoutEffect(() => {
    const el = panelRefs.current[active];
    if (!el) return;
    const update = () => setHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [active]);

  // On narrow screens the tab row scrolls sideways: keep the active tab visible.
  useEffect(() => {
    const tab = tabRefs.current[active];
    const list = tab?.parentElement;
    if (tab && list && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: Math.max(0, tab.offsetLeft - 16), behavior: "smooth" });
    }
  }, [active]);

  // Arrow keys move between tabs (WAI-ARIA tabs pattern).
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = TABS.length - 1;
    let next = active;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="isi-title">
      <div className="container">
        <p className="eyebrow">What to consider</p>
        <h2 id="isi-title" className="heading">
          Important Safety Information
        </h2>

        <div
          className={`${styles.tabs} ${paused ? styles.paused : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={(e) => {
            // Only keyboard focus pauses; a mouse click keeps the timer running (like the reference)
            if ((e.target as HTMLElement).matches(":focus-visible")) setFocused(true);
          }}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
          }}
        >
          <div className={styles.tablist} role="tablist" aria-label="Important Safety Information" onKeyDown={onKeyDown}>
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={active === i}
                aria-controls={`panel-${tab.id}`}
                tabIndex={active === i ? 0 : -1}
                className={styles.tab}
                onClick={() => select(i)}
              >
                {/* Progress line: fills across the active tab, then advances to the next tab */}
                <span className={styles.track} aria-hidden="true">
                  {active === i && (
                    <span key={cycle} className={styles.fill} onAnimationEnd={onProgressEnd} />
                  )}
                </span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.panels} style={height ? { height } : undefined}>
            {TABS.map((tab, i) => (
              <div
                key={tab.id}
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
                role="tabpanel"
                id={`panel-${tab.id}`}
                aria-labelledby={`tab-${tab.id}`}
                aria-hidden={active !== i}
                inert={active !== i}
                className={`${styles.panel} ${active === i ? styles.active : ""}`}
                tabIndex={active === i ? 0 : -1}
              >
                <ul>
                  {tab.items.map((item) => (
                    <li key={item.slice(0, 40)}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.note}>
          Please see full{" "}
          <a href="https://www.pi.amgen.com/united_states/pavblu/pavblu_fpi_english.pdf" target="_blank" rel="noreferrer">
            Prescribing Information
          </a>{" "}
          for PAVBLU<sup>®</sup>. You are encouraged to report negative side effects of prescription drugs to the FDA. Visit{" "}
          <a href="https://www.fda.gov/medwatch" target="_blank" rel="noreferrer">
            www.fda.gov/medwatch
          </a>
          , or call 1-800-FDA-1088.
        </p>
      </div>
    </section>
  );
}
