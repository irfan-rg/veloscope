'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import FooterCompact from '@/components/Landing/FooterCompact';

const CAREERS = [
  { id: 'content', role: 'Content writer', location: 'Remote', type: 'Full-time' },
  { id: 'photographer', role: 'Photographer', location: 'Global', type: 'Contract' },
  { id: 'frontend', role: 'Front end dev', location: 'Remote', type: 'Full-time' },
  { id: 'backend', role: 'Back end dev', location: 'Remote', type: 'Full-time' },
  { id: 'designer', role: 'Designer', location: 'Remote', type: 'Full-time' }
];

export default function CareersPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        {/* ── Heading ── */}
        <header className={styles.header}>
          <h1 className={styles.heading}>join us<span className={styles.accent}>.</span></h1>
          <p className={styles.subheading}>Join our battalion of photographers, editors, and creatives.</p>
        </header>

        {/* ── Interactive Roster List ── */}
        <section className={styles.rolesList}>
          {CAREERS.map(career => (
            <Link key={career.id} href={`/careers/${career.id}`} className={styles.roleRow}>
              
              <div className={styles.roleInfo}>
                <h2 className={styles.roleTitle}>{career.role}</h2>
                <div className={styles.roleMeta}>
                  <span className={styles.metaItem}>{career.location}</span>
                  <span className={styles.metaDot}>•</span>
                  <span className={styles.metaItem}>{career.type}</span>
                </div>
              </div>

              <div className={styles.arrowWrapper}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

            </Link>
          ))}
        </section>

      </div>
      
      <FooterCompact />
    </main>
  );
}
