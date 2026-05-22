"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./FooterSection.module.css";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const cyclingWords = ["events", "races", "stories", "memories", "moments"];

export default function FooterSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Typewriter effect
  useEffect(() => {
    const currentWord = cyclingWords[wordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayText !== currentWord) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          // Pause at the end of the word
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting backward
        if (displayText !== "") {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          // Move to next word
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % cyclingWords.length);
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <footer ref={sectionRef} className={styles.footer} id="contact">
      <div className={styles.footerContent}>
        {/* Tagline */}
        <div className={styles.taglineBox}>
          <div className={styles.taglineRow}>
            <span className={styles.taglineText}>you make </span>
            <span className={styles.taglineHighlightWrapper}>
              <span className={styles.taglineHighlight}>
                {displayText}
                <span className={styles.cursor}>|</span>
              </span>
            </span>
          </div>
          <span className={styles.taglineText}>we make them memorable.</span>
        </div>

        {/* Info Grid */}
        <div className={styles.infoGrid}>
          {/* Explore + Legal side by side */}
          <div className={styles.linksRow}>
            <div className={styles.infoColumn}>
              <h3 className={styles.columnTitle}>Explore</h3>
              <Link href="/team" className={styles.link}>Our team</Link>
              <Link href="/careers" className={styles.link}>Career</Link>
            </div>
            
            <div className={styles.infoColumn}>
              <h3 className={styles.columnTitle}>Legal</h3>
              <Link href="/legal" className={styles.link}>Terms & Conditions</Link>
              <Link href="/legal" className={styles.link}>Privacy Policy</Link>
            </div>
          </div>

          <div className={styles.infoColumn}>
            <h3 className={styles.columnTitle}>Connect</h3>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com/veloscope" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook"><SiFacebook /></a>
              <a href="https://instagram.com/veloscope.in" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram"><SiInstagram /></a>
              <a href="https://x.com/veloscope" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X"><SiX /></a>
            </div>
            <a href="mailto:veloscope@gmail.com" className={styles.email}>
              veloscope@gmail.com
            </a>
          </div>
        </div>

        {/* Massive outlined wordmark */}
        <div className={styles.massiveTextWrapper}>
          <h2 className={styles.massiveText} aria-hidden="true">VELOSCOPE</h2>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <span>© {new Date().getFullYear()} Veloscope. All rights reserved.</span>
          <span>Endurance Sports Photography</span>
        </div>
      </div>
    </footer>
  );
}
