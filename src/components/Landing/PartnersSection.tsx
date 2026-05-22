"use client";

import { useEffect, useRef } from "react";
import styles from "./PartnersSection.module.css";

const partners = [
  "Maha Marathon",
  "Maha Marathon",
  "Maha Marathon",
  "Maha Marathon",
  "Maha Marathon",
  "Maha Marathon",
  "Maha Marathon",
  "Maha Marathon",
  "Maha Marathon",
  "Maha Marathon",
  "Maha Marathon",
];

export default function PartnersSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    [headingRef.current, listRef.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.partners}>
      <div className={styles.content}>
        <h2
          ref={headingRef}
          className={`${styles.heading} ${styles.reveal}`}
        >
          Our Partners
        </h2>

        <div className={styles.subtext}>We got&apos;em all</div>

        <div
          ref={listRef}
          className={`${styles.partnerList} ${styles.reveal}`}
        >
          {/* Active partner */}
          <div className={styles.partnerItem}>
            <span className={styles.partnerName}>Maha Marathon</span>
          </div>

          {/* Greyed out partners in a marquee-style list */}
          <div className={styles.partnerScroll}>
            {partners.map((name, i) => (
              <div key={i} className={styles.partnerItemMuted}>
                <span className={styles.partnerNameMuted}>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rotating arrows decoration */}
        <div className={styles.arrowDecoration}>
          <div className={styles.arrowGroup}>
            <div className={styles.arrowBar} />
            <div className={styles.arrowBar} />
            <div className={styles.arrowBar} />
            <div className={styles.arrowBar} />
            <div className={styles.arrowBar} />
          </div>
        </div>
      </div>
    </section>
  );
}
