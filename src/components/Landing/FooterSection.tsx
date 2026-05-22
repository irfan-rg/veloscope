"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./FooterSection.module.css";

const cyclingWords = ["Events", "Races", "Stories", "Memories", "Moments"];

export default function FooterSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Typewriter effect
  useEffect(() => {
    const currentWord = cyclingWords[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          if (displayText.length === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % cyclingWords.length);
          }
        }
      },
      isDeleting ? 60 : 120
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <footer ref={sectionRef} className={styles.footer} id="contact">
      {/* Main tagline */}
      <div className={styles.tagline}>
        <span className={styles.taglineText}>You make </span>
        <span className={styles.taglineHighlight}>
          {displayText}
          <span className={styles.cursor}>|</span>
        </span>
        <span className={styles.taglineText}> , We make them memorable.</span>
      </div>

      {/* Footer grid */}
      <div className={styles.grid}>
        {/* Left: Links */}
        <div className={styles.linksCol}>
          <Link href="/team" className={styles.link}>
            Our team
          </Link>
          <Link href="/careers" className={styles.link}>
            Career
          </Link>
          <Link href="/legal" className={styles.link}>
            Terms & Conditions
          </Link>
          <Link href="/legal" className={styles.link}>
            Privacy Policy
          </Link>
        </div>

        {/* Right: Contact + Social */}
        <div className={styles.contactCol}>
          <div className={styles.socialIcons}>
            {/* Facebook */}
            <a
              href="https://facebook.com/veloscope"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Facebook"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/veloscope.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="https://x.com/veloscope"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="X (Twitter)"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
          </div>

          <div className={styles.contact}>
            <span className={styles.mailLabel}>Mail us @</span>
            <div className={styles.divider} />
            <a
              href="mailto:veloscope@gmail.com"
              className={styles.email}
            >
              veloscope@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative dots */}
      <div className={styles.bottomDots}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.dot} />
        ))}
      </div>
    </footer>
  );
}
