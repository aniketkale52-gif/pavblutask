import styles from "./WhyPavblu.module.css";
import LinkCard from "./LinkCard";
import Stats from "./Stats";
import { BottleArt, HeadsetIcon, SyringeArt } from "./icons";

export default function WhyPavblu() {
  return (
    <section className={styles.section} aria-labelledby="why-title">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <p className="eyebrow">
              Why PAVBLU<sup>®</sup>
            </p>
            <h2 id="why-title" className="heading">
              Backed by the doctors
              <br />
              and known organizations
            </h2>
          </div>

          <LinkCard
            className={styles.safety}
            href="https://www.pavblu.com/safety-efficacy"
            icon={<img src="/images/icon-chart.svg" alt="" width={30} height={30} />}
            title="Safety & Efficacy Data"
          >
            See the clinical data and real-world evidence studies<sup>2,3</sup>
          </LinkCard>

          <div className={`${styles.deco} ${styles.bottle}`} aria-hidden="true">
            <BottleArt />
          </div>

          <LinkCard
            className={styles.pfs}
            href="https://www.pavblu.com/dosing#pfsdesign"
            icon={<img src="/images/icon-syringe.svg" alt="" width={30} height={30} />}
            title="PFS Design & Handling"
          >
            100K+ patients served with the prefilled syringe since launch
          </LinkCard>

          <LinkCard
            className={styles.support}
            href="https://www.amgensupportplus.com"
            icon={<HeadsetIcon />}
            title="Amgen Support+"
            logo="/images/logo-amgen-support.svg"
            tone="navy"
          >
            Comprehensive resources and support for patients
          </LinkCard>

          <div className={`${styles.deco} ${styles.syringe}`} aria-hidden="true">
            <SyringeArt />
          </div>

          {/* Card + Q-Code strip behave as one unit (shared corners, lift together on hover) */}
          <div className={styles.coverage}>
            <LinkCard
              className={styles.coverageCard}
              href="https://www.pavblu.com/support-and-resources#coverage"
              icon={<img src="/images/icon-search.svg" alt="" width={30} height={30} />}
              title="Local Coverage Finder"
              tone="navy"
            >
              Check coverage for PAVBLU<sup>®</sup> in your area
            </LinkCard>
            <p className={styles.tag}>Permanent Q-Code Q5147</p>
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
}
