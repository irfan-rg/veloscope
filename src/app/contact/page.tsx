'use client';

import React from 'react';
import styles from './page.module.css';
import FooterCompact from '@/components/Landing/FooterCompact';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>

        {/* ── Heading ── */}
        <header className={styles.header}>
          <h1 className={styles.heading}>let's talk<span className={styles.accent}>.</span></h1>
          <p className={styles.subheading}>Got a race, event, or story to tell?</p>
        </header>

        {/* ── Contact split ── */}
        <div className={styles.split}>

          {/* Left: Brutalist Form */}
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
                <textarea id="message" placeholder="Tell us about your event..." className={styles.textarea} />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send message <span>→</span>
              </button>
            </form>
          </section>

          {/* Right: Info */}
          <section className={styles.infoSection}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Mail us @</span>
              <a href="mailto:veloscope@gmail.com" className={styles.email}>
                veloscope@gmail.com
              </a>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Based in</span>
              <p className={styles.infoText}>Chennai, India</p>
            </div>
          </section>
        </div>

      </div>

      <FooterCompact />
    </main>
  );
}
