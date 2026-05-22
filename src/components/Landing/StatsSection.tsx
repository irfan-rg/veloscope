"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";

interface StatItem {
  value: string;
  numericEnd: number;
  suffix: string;
  label: string;
  color: "accent" | "default";
}

const stats: StatItem[] = [
  { value: "200mil+", numericEnd: 200, suffix: "mil+", label: "Photos", color: "accent" },
  { value: "3,000+", numericEnd: 3000, suffix: "+", label: "graphers", color: "default" },
  { value: "2,300+", numericEnd: 2300, suffix: "+", label: "Events", color: "accent" },
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
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function StatCounter({ stat, inView }: { stat: StatItem; inView: boolean }) {
  const count = useCountUp(stat.numericEnd, 2000, inView);

  const formatCount = (n: number): string => {
    if (stat.suffix === "mil+") return `${n}mil+`;
    return `${n.toLocaleString()}+`;
  };

  return (
    <div className={styles.stat}>
      <span
        className={`${styles.statValue} ${
          stat.color === "accent" ? styles.accent : ""
        }`}
      >
        {inView ? formatCount(count) : "0"}
      </span>
      <span className={styles.statLabel}>{stat.label}</span>
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className={styles.content}>
        {stats.map((stat, i) => (
          <StatCounter key={i} stat={stat} inView={inView} />
        ))}
      </div>

      {/* Decorative shapes (stacked grey rectangles from Figma) */}
      <div className={styles.decoration}>
        <div className={styles.decorBar} style={{ background: "#ECECEC", width: 190, height: 135 }} />
        <div className={styles.decorBar} style={{ background: "#9F9F9F", width: 221, height: 120 }} />
        <div className={styles.decorBar} style={{ background: "#C2C2C2", width: 165, height: 141 }} />
        <div className={styles.decorBar} style={{ background: "#959595", width: 260, height: 82 }} />
        <div className={styles.decorBar} style={{ background: "#686868", width: 284, height: 25 }} />
      </div>
    </section>
  );
}
