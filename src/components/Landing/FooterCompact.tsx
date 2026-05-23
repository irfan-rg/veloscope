import Link from "next/link";
import styles from "./FooterCompact.module.css";

export default function FooterCompact() {
  return (
    <footer className={styles.footer}>

      {/* Email CTA */}
      <div className={styles.emailRow}>
        <span className={styles.emailLabel}>get in touch</span>
        <a href="mailto:veloscope@gmail.com" className={styles.email}>
          veloscope@gmail.com
        </a>
      </div>

      {/* Bottom: Links + Socials + Copyright */}
      <div className={styles.bottomRow}>
        <nav className={styles.links}>
          <Link href="/" className={styles.link}>About us</Link>
          <Link href="/work" className={styles.link}>Our work</Link>
          <Link href="/team" className={styles.link}>Our team</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
          <Link href="/careers" className={styles.link}>Careers</Link>
          <Link href="/legal" className={styles.link}>Legal</Link>
        </nav>

        <div className={styles.metaRow}>
          <div className={styles.socials}>
            <a href="https://instagram.com/veloscope.in" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>IG</a>
            <a href="https://x.com/veloscope" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>X</a>
            <a href="https://facebook.com/veloscope" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>FB</a>
          </div>
          <span className={styles.copyright}>© {new Date().getFullYear()} Veloscope</span>
        </div>
      </div>

    </footer>
  );
}
