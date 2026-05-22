"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const viewfinderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (viewfinderRef.current) {
        viewfinderRef.current.style.opacity = "1";
      }
    }, 100);
    setTimeout(() => {
      if (textRef.current) {
        textRef.current.style.opacity = "1";
      }
    }, 400);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Full-bleed photo */}
      <Image
        src="/images/hero-cyclist.png"
        alt="Veloscope sports photography"
        fill
        sizes="100vw"
        className={styles.bgImage}
        priority
      />

      {/* Dark vignette overlay */}
      <div className={styles.overlay} />

      {/* ─── Viewfinder UI ─── */}
      <div ref={viewfinderRef} className={styles.viewfinder}>

        {/* Corner brackets */}
        <span className={`${styles.corner} ${styles.cornerTL}`} />
        <span className={`${styles.corner} ${styles.cornerTR}`} />
        <span className={`${styles.corner} ${styles.cornerBL}`} />
        <span className={`${styles.corner} ${styles.cornerBR}`} />

        {/* Top-left: Brand tag */}
        <div className={styles.topLeft}>
          <span className={styles.mono}>VELOSCOPE</span>
          <span className={styles.monoMuted}>® SPORTS MEDIA</span>
        </div>

        {/* Top-right: Shutter readout */}
        <div className={styles.topRight}>
          <span className={styles.monoMuted}>f/1.8</span>
          <span className={styles.monoMuted}>1/2000s</span>
          <span className={styles.monoMuted}>ISO 400</span>
        </div>

        {/* Tagline + CTA — centered in the frame */}
        <div ref={textRef} className={styles.headlineBlock}>
          <p className={styles.headlineLight}>more than</p>
          <p className={styles.headlineBold}>just sports.</p>
          <div className={styles.ctaWrap}>
            <Link href="/work" className={styles.cta}>
              explore our work
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom center: Frame count */}
        <div className={styles.frameCount}>
          <span className={styles.monoMuted}>▶ REC</span>
          <span className={styles.monoAccent}>●</span>
          <span className={styles.monoMuted}>0001 / 2300</span>
        </div>

      </div>
    </section>
  );
}
