'use client';

import { useRef, useEffect } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.classList.add(styles.visible);
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>

        {/* ── Heading ── */}
        <header className={styles.header}>
          <h1 ref={headingRef} className={`${styles.heading} ${styles.reveal}`}>
            Contact Us
          </h1>
          <p className={styles.subtext}>
            Got a race, event, or story to tell?<br />
            Let's talk.
          </p>
        </header>

        {/* ── Contact split ── */}
        <div className={styles.split}>

          {/* Left: form */}
          <section className={styles.formSection}>
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>Your name</label>
                <input id="name" type="text" placeholder="Jane Doe" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input id="email" type="email" placeholder="jane@example.com" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" rows={5} placeholder="Tell us about your event…" className={styles.textarea} />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send message →
              </button>
            </form>
          </section>

          {/* Right: info */}
          <section className={styles.infoSection}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Mail us @</span>
              <div className={styles.divider} />
              <a href="mailto:hello@veloscope.in" className={styles.email}>
                hello@veloscope.in
              </a>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Find us on</span>
              <div className={styles.divider} />
              <div className={styles.socials}>
                <a href="#" className={styles.socialLink} aria-label="Instagram">Instagram</a>
                <a href="#" className={styles.socialLink} aria-label="Facebook">Facebook</a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Based in</span>
              <div className={styles.divider} />
              <p className={styles.infoText}>Chennai, India</p>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
