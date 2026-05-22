"use client";

import { useEffect, useRef } from "react";
import styles from "./PartnersSection.module.css";
import { SiRedbull, SiNike, SiPuma, SiAdidas, SiGarmin, SiStrava } from "react-icons/si";

const partners = [
  SiRedbull,
  SiNike,
  SiPuma,
  SiAdidas,
  SiGarmin,
  SiStrava,
];

export default function PartnersSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

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

    [headingRef.current, marqueeRef.current].forEach((el) => {
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
      </div>

      {/* Horizontal Continuous Marquee */}
      <div
        ref={marqueeRef}
        className={`${styles.marqueeContainer} ${styles.reveal}`}
      >
        <div className={styles.marqueeTrack}>
          {/* Double the list to create a seamless loop */}
          {[...partners, ...partners].map((Logo, i) => (
            <div key={i} className={styles.partnerItem}>
              <div className={styles.partnerLogo}>
                <Logo size={50} />
              </div>
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
    </section>
  );
}
