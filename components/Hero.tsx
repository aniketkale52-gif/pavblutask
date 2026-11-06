import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            Lead with PAVBLU<sup>®</sup>
          </h1>
          <p className={styles.subtitle}>Experience that inspires confidence</p>
        </div>

        {/* Vial + syringe hover slowly with a gentle 3D sway.
            The soft shadow is drawn in CSS and breathes with the height of the hover. */}
        <div className={styles.product}>
          <div className={styles.float}>
            <img
              className={styles.vial}
              src="/images/hero-vial.png"
              alt="PAVBLU vial with a prefilled syringe"
              width={351}
              height={485}
            />
          </div>
          <span className={styles.shadow} aria-hidden="true" />
        </div>

        <p className={styles.lead}>
          PAVBLU<sup>®</sup> (aflibercept-ayyh) delivers highly similar safety and efficacy to EYLEA<sup>®</sup>{" "}
          (aflibercept), with no clinically meaningful differences<sup>1</sup>
        </p>
      </div>
    </section>
  );
}
