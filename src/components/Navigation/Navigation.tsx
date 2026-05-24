"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const navLinks = [
  { href: "/", label: "About us", num: "01" },
  { href: "/work", label: "Our work", num: "02" },
  { href: "/team", label: "Our team", num: "03" },
  { href: "/contact", label: "Contact Us", num: "04" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open (prevents iOS background scroll)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Top bar — transparent on hero, dark on scroll (mobile & desktop) */}
      <div className={`${styles.mobileBar} ${scrolled ? styles.scrolled : ""}`}>
        <Link href="/" className={styles.mobileLogoLink} aria-label="Veloscope home">
          <Image
            src="/images/veloscope-logo.png"
            alt="Veloscope"
            width={32}
            height={32}
            className={styles.mobileLogoImg}
            priority
          />
          <span className={styles.mobileLogoText}>veloscope</span>
        </Link>

        {/* Desktop Top Links (Hidden on mobile) */}
        <div className={styles.desktopTopLinks}>
          {navLinks.filter(link => link.href !== "/").map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.desktopTopLink} ${isActive ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger (Hidden on desktop) */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            className={styles.shutterIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <line x1="12" y1="2" x2="12" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="15.5" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="2" y1="12" x2="8.5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="15.5" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="4.93" y1="4.93" x2="9.52" y2="9.52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="14.48" y1="14.48" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="19.07" y1="4.93" x2="14.48" y2="9.52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="9.52" y1="14.48" x2="4.93" y2="19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(false)}
      />
      <div className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}>
        <div className={styles.mobileNavInner}>

          {/* Big numbered links */}
          <nav className={styles.mobileLinks}>
            {navLinks.map((link, i) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileLink} ${isActive ? styles.active : ""}`}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
                >
                  <span className={styles.mobileLinkNum}>{link.num}</span>
                  <span className={styles.mobileLinkLabel}>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer strip inside drawer */}
          <div className={styles.mobileNavFooter}>
            <a href="mailto:veloscope@gmail.com" className={styles.mobileNavEmail}>
              veloscope@gmail.com
            </a>
            <div className={styles.mobileNavSocials}>
              <a href="https://instagram.com/veloscope.in" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>IG</a>
              <a href="https://x.com/veloscope" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>X</a>
              <a href="https://facebook.com/veloscope" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>FB</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

