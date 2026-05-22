"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./StorySection.module.css";

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

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

    [headingRef.current, textRef.current, photoRef.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.story} id="about">
      <div className={styles.content}>
        <h2 ref={headingRef} className={`${styles.heading} ${styles.reveal}`}>
          We Make stories
        </h2>

        <p ref={textRef} className={`${styles.description} ${styles.reveal}`}>
          We are a platform that captures the spirit of endurance sports through
          photography and narrative. It documents the people, moments, and
          experiences that define races and community events, preserving them as
          lasting stories beyond the finish line.
        </p>

        <div ref={photoRef} className={`${styles.photo} ${styles.reveal}`}>
          <Image
            src="/images/story-photo.png"
            alt="Endurance sports moment captured by Veloscope"
            fill
            sizes="(max-width: 768px) 90vw, 500px"
            className={styles.photoImage}
          />
        </div>
      </div>

      {/* Scroll thread line */}
      <div className={styles.scrollThread} />
    </section>
  );
}
