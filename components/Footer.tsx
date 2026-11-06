import styles from "./Footer.module.css";

const LINKS = [
  { label: "Privacy Statement", href: "https://www.amgen.com/privacy-statement" },
  { label: "Consumer Health Data Privacy Policy", href: "https://www.amgen.com/healthdataprivacypolicy" },
  { label: "Your Cookie Preferences", href: "#" },
  { label: "Terms of Use", href: "https://www.amgen.com/terms-of-use" },
  { label: "Site Map", href: "https://www.pavblu.com/site-map" },
  { label: "Contact Us", href: "https://www.amgen.com/contact-us" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.logos}>
          <img src="/images/logo-amgen-biosimilars.svg" alt="Amgen Biosimilars" width={150} height={81} className={styles.biosimilars} />
          <img src="/images/logo-amgen.svg" alt="Amgen" width={290} height={74} className={styles.amgen} />
        </div>

        <nav aria-label="Legal" className={styles.links}>
          <ul>
            {LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.bottom}>
          <p>© 2026 Amgen Inc. All rights reserved.</p>
          <p>This site is intended for US residents only.</p>
        </div>

        <p className={styles.concept}>
          Redesign concept by Aniket Kale for a UI design assignment. Not affiliated with or endorsed by Amgen; not medical advice.
        </p>
      </div>
    </footer>
  );
}
