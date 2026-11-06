import type { ReactNode } from "react";
import styles from "./LinkCard.module.css";
import { ArrowUpRightIcon } from "./icons";

type LinkCardProps = {
  href: string;
  icon: ReactNode;
  /** Shown as text, or as an accessible name when a logo replaces the title. */
  title: string;
  logo?: string;
  children: ReactNode;
  tone?: "blue" | "navy";
  className?: string;
};

export default function LinkCard({ href, icon, title, logo, children, tone = "blue", className }: LinkCardProps) {
  return (
    <a href={href} className={`${styles.card} ${styles[tone]} ${className ?? ""}`}>
      <span className={styles.top}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.arrow} aria-hidden="true">
          <ArrowUpRightIcon />
        </span>
      </span>
      <span className={styles.bottom}>
        {logo ? (
          <img className={styles.logo} src={logo} alt={title} width={150} height={25} />
        ) : (
          <span className={styles.title}>{title}</span>
        )}
        <span className={`${styles.body} ${logo ? styles.bodyStrong : ""}`}>{children}</span>
      </span>
    </a>
  );
}
