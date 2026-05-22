"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const delay = (ms: number) =>
      new Promise((res) => setTimeout(res, ms));

    (async () => {
      await delay(150);
      if (headlineRef.current) {
        headlineRef.current.style.opacity = "1";
        headlineRef.current.style.transform = "translateY(0)";
      }
      await delay(250);
      if (ctaRef.current) {
        ctaRef.current.style.opacity = "1";
        ctaRef.current.style.transform = "translateY(0)";
      }
    })();
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Full-bleed background */}
      <Image
        src="/images/hero-cyclist.png"
        alt="Veloscope sports photography"
        fill
        sizes="100vw"
        className={styles.bgImage}
        priority
      />

      {/* Bottom-heavy gradient — clear sky, dark ground */}
      <div className={styles.overlay} />

      {/* All content at the bottom */}
      <div className={styles.content}>

        {/* Tag line */}
        <p className={styles.tag}>
          <span className={styles.tagDot} />
          sports photography
        </p>

        {/* Headline — two distinct weights */}
        <div ref={headlineRef} className={styles.headline}>
          <p className={styles.headlineLight}>more than</p>
          <p className={styles.headlineBold}>just sports.</p>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className={styles.ctaWrap}>
          <Link href="/work" className={styles.cta}>
            explore our work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <span className={styles.ctaMeta}>2,300+ events · 200M+ photos</span>
        </div>

      </div>
    </section>
  );
}
