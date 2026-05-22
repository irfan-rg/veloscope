"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./StorySection.module.css";

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const statsRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 }
    );

    [headingRef.current, photoRef.current, statsRowRef.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.story} id="about">
      {/* Dark background section */}
      <div className={styles.inner}>
        {/* Eyebrow label */}
        <div ref={headingRef} className={`${styles.topBlock} ${styles.reveal}`}>
          <span className={styles.eyebrow}>/ Our mission</span>
          <h2 className={styles.heading}>
            we make<br />
            <span className={styles.headingAccent}>stories.</span>
          </h2>
          <p className={styles.body}>
            Capturing the spirit of endurance sports through photography and narrative.
            The people, moments, and experiences that define races, preserved beyond the finish line.
          </p>
        </div>

        {/* Photo */}
        <div ref={photoRef} className={`${styles.photoWrapper} ${styles.reveal}`}>
          <Image
            src="/images/story-photo.png"
            alt="Endurance sports moment captured by Veloscope"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className={styles.photoImage}
          />
          <div className={styles.photoTag}>
            <span>Chennai Marathon, 2020</span>
          </div>
        </div>

        {/* Mini stats row */}
        <div ref={statsRowRef} className={`${styles.miniStats} ${styles.reveal}`}>
          <div className={styles.miniStat}>
            <span className={styles.miniStatVal}>2020</span>
            <span className={styles.miniStatLabel}>Founded</span>
          </div>
          <div className={styles.miniStatDivider} />
          <div className={styles.miniStat}>
            <span className={styles.miniStatVal}>India</span>
            <span className={styles.miniStatLabel}>Headquarters</span>
          </div>
          <div className={styles.miniStatDivider} />
          <div className={styles.miniStat}>
            <span className={styles.miniStatVal}>60+</span>
            <span className={styles.miniStatLabel}>Photographers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
