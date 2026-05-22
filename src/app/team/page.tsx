import React from 'react';
import styles from './page.module.css';
import ScrollProgress from '@/components/shared/ScrollProgress';
import CustomCursor from '@/components/shared/CustomCursor';

// Dummy Team Data
const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'XXXX',
    role: 'XXXX',
    description: "He's pretty cool"
  },
  {
    id: 2,
    name: 'XXXX',
    role: 'XXXX',
    description: "He's cool"
  },
  {
    id: 3,
    name: 'XXXXX',
    role: 'XXXXX',
    description: "He's"
  }
];

export default function TeamPage() {
  return (
    <main className={styles.main}>
      <ScrollProgress />
      <CustomCursor />
      
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Our team</h1>
          <div className={styles.headerImageWrapper}>
            <div className={styles.placeholderTexture}></div>
          </div>
        </header>

        <section className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.avatar}>
                {/* SVG Person icon from Figma */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="var(--color-muted)"/>
                </svg>
              </div>
              <div className={styles.memberInfo}>
                <h2 className={styles.name}>
                  {member.name} <span className={styles.dash}>-</span> {member.role}
                </h2>
                <p className={styles.description}>{member.description}</p>
              </div>
            </div>
          ))}
        </section>

        <footer className={styles.footer}>
          <h2 className={styles.tagline}>And a battalion of photographer's.</h2>
        </footer>
      </div>

      {/* Decorative Grid Lines - Desktop Only */}
      <div className={styles.gridDecorations}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={`line-v-${i}`} className={styles.verticalLine} style={{ left: `${(i + 1) * 183.5}px` }}>
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={`cross-${i}-${j}`} className={styles.cross} style={{ top: `${(j + 1) * 25}%` }}></div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
