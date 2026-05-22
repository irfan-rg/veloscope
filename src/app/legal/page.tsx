import React from 'react';
import styles from './page.module.css';
import ScrollProgress from '@/components/shared/ScrollProgress';
import CustomCursor from '@/components/shared/CustomCursor';

export default function LegalPage() {
  return (
    <main className={styles.main}>
      <ScrollProgress />
      <CustomCursor />
      
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Legal</h1>
          <p className={styles.subtext}>Terms of Service & Privacy Policy</p>
        </header>

        <section className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Terms of Service</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className={styles.text}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Privacy Policy</h2>
            <p className={styles.text}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className={styles.text}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
