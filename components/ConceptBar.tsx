import styles from "./ConceptBar.module.css";

// Honest labelling: this page reuses a real brand, so it says clearly that it is a design concept.
export default function ConceptBar() {
  return (
    <div className={styles.bar} role="note">
      Redesign concept for a UI design assignment · Not the official PAVBLU® website ·{" "}
      <a href="https://www.pavblu.com" target="_blank" rel="noreferrer">
        Visit pavblu.com
      </a>
    </div>
  );
}
