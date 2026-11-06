import styles from "./Stats.module.css";

const STATS = [
  { value: "1 Million+", label: "Units shipped", text: "To wholesalers since launch" },
  { value: "~2K", label: "Retina specialists", text: "Have adopted PAVBLU® since launch" },
  { value: "40+ Years", label: "Of Amgen", text: "Heritage and expertise behind PAVBLU®" },
  { value: ">90%", label: "Patients covered", text: "National coverage for eligible PAVBLU® patients" },
];

export default function Stats() {
  return (
    <dl className={styles.stats}>
      {STATS.map((s) => (
        <div key={s.label} className={styles.stat}>
          <dt>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </dt>
          <dd className={styles.text}>{s.text}</dd>
        </div>
      ))}
    </dl>
  );
}
