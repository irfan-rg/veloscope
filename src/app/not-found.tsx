import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.message}>
          This route doesn't exist. You've strayed off the course.
        </p>
        <Link href="/" className={styles.homeLink}>
          Return to base
        </Link>
      </div>
    </main>
  );
}
