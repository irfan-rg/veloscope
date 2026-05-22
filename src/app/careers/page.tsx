import React from 'react';
import styles from './page.module.css';
import ScrollProgress from '@/components/shared/ScrollProgress';
import CustomCursor from '@/components/shared/CustomCursor';

const CAREERS = [
  { id: 'photographer', role: 'Event Photographer', location: 'Remote / On-site', type: 'Contract' },
  { id: 'content', role: 'Content Writer', location: 'Remote', type: 'Part-time' },
  { id: 'frontend', role: 'Frontend Developer', location: 'Remote', type: 'Full-time' }
];

export default function CareersPage() {
  return (
    <main className={styles.main}>
      <ScrollProgress />
      <CustomCursor />
      
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Careers</h1>
          <p className={styles.subtext}>Join our battalion.</p>
        </header>

        <section className={styles.rolesList}>
          {CAREERS.map(career => (
            <div key={career.id} className={styles.roleCard}>
              <div className={styles.roleInfo}>
                <h2 className={styles.roleTitle}>{career.role}</h2>
                <div className={styles.roleMeta}>
                  <span className={styles.metaItem}>{career.location}</span>
                  <span className={styles.metaDot}>•</span>
                  <span className={styles.metaItem}>{career.type}</span>
                </div>
              </div>
              <button className={styles.applyBtn}>Apply now</button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
