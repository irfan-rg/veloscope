import React from 'react';
import styles from './page.module.css';
import FooterCompact from '@/components/Landing/FooterCompact';

// Minimal typography placeholders
const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Creative Lead',
    role: 'Vision & Direction',
    description: "Curating the aesthetic and guiding the visual narrative from start to finish."
  },
  {
    id: 2,
    name: 'Senior Shooter',
    role: 'Action Photography',
    description: "Always in the mud, always finding the perfect race-day angle."
  },
  {
    id: 3,
    name: 'Editorial Chief',
    role: 'Post-Production',
    description: "Translating raw captures into the high-contrast editorial look."
  }
];

const DefaultAvatar = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={styles.avatarSvg}
  >
    <path 
      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" 
      fill="currentColor"
    />
  </svg>
);

export default function TeamPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <h1 className={styles.heading}>our team<span className={styles.accent}>.</span></h1>
          <p className={styles.subheading}>The eyes behind the lens.</p>
        </header>

        {/* Magazine Editorial Layout */}
        <section className={styles.editorialGrid}>
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className={styles.memberBlock}>
              
              <div className={styles.imageWrapper}>
                <DefaultAvatar />
              </div>

              <div className={styles.info}>
                <h2 className={styles.name}>{member.name}</h2>
                <span className={styles.role}>{member.role}</span>
                <p className={styles.description}>{member.description}</p>
              </div>

            </div>
          ))}
        </section>

        <footer className={styles.footer}>
          <h2 className={styles.tagline}>And a battalion of photographers.</h2>
        </footer>
        
      </div>

      <FooterCompact />
    </main>
  );
}
