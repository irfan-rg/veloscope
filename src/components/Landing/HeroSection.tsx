"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const photo1Ref = useRef<HTMLDivElement>(null);
  const photo2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered entrance animations
    const elements = [
      { el: logoRef.current, delay: 0 },
      { el: titleRef.current, delay: 200 },
      { el: subtitleRef.current, delay: 400 },
      { el: photo1Ref.current, delay: 300 },
      { el: photo2Ref.current, delay: 500 },
    ];

    elements.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition =
          "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay + 200);
    });

    // Parallax on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (photo1Ref.current) {
        photo1Ref.current.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
      if (photo2Ref.current) {
        photo2Ref.current.style.transform = `translateY(${scrollY * 0.12}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero} id="hero">
      {/* Veloscope Logo */}
      <div ref={logoRef} className={styles.logoContainer}>
        <Image
          src="/images/veloscope-logo.png"
          alt="Veloscope aperture logo"
          width={103}
          height={103}
          className={styles.logo}
          priority
        />
      </div>

      {/* Title */}
      <h1 ref={titleRef} className={styles.title}>
        Veloscope
      </h1>

      {/* Subtitle */}
      <p ref={subtitleRef} className={styles.subtitle}>
        More than just sports
      </p>

      {/* Photo 1 - Left skewed */}
      <div ref={photo1Ref} className={styles.photoLeft}>
        <div className={styles.photoInner}>
          <Image
            src="/images/hero-cyclist.png"
            alt="Cyclist in endurance race captured by Veloscope"
            fill
            sizes="(max-width: 768px) 60vw, 458px"
            className={styles.photoImage}
            priority
          />
        </div>
      </div>

      {/* Photo 2 - Right */}
      <div ref={photo2Ref} className={styles.photoRight}>
        <div className={styles.photoInner}>
          <Image
            src="/images/hero-runner.png"
            alt="Trail runner in motion captured by Veloscope"
            fill
            sizes="(max-width: 768px) 50vw, 319px"
            className={styles.photoImage}
            priority
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
