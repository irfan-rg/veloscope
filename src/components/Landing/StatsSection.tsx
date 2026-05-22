"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";

interface StatItem {
  numericEnd: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  { numericEnd: 200, suffix: "M+", label: "Photos", description: "Shot across events" },
  { numericEnd: 3000, suffix: "+", label: "Photographers", description: "In our network" },
  { numericEnd: 2300, suffix: "+", label: "Events", description: "Covered across India" },
];

function useCountUp(end: number, duration: number, start: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function StatCard({ stat, inView, index }: { stat: StatItem; inView: boolean; index: number }) {
  const count = useCountUp(stat.numericEnd, 2000, inView);

  const formatCount = (n: number): string => {
    if (stat.suffix === "M+") return `${n}M+`;
    return `${n.toLocaleString()}+`;
  };

  return (
    <div className={styles.statCard} style={{ transitionDelay: `${index * 0.12}s` }}>
      <div className={styles.statNumber}>
        {inView ? formatCount(count) : "0"}
      </div>
      <div className={styles.statInfo}>
        <span className={styles.statLabel}>{stat.label}</span>
        <span className={styles.statDesc}>{stat.description}</span>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.stats} ${inView ? styles.inView : ""}`}>
      {/* Accent stripe */}
      <div className={styles.accentStripe} />

      <div className={styles.inner}>
        <div className={styles.sectionLabel}>
          <span>/ By the numbers</span>
        </div>

        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
