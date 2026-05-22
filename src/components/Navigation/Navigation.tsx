"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const navLinks = [
  { href: "/", label: "About us" },
  { href: "/work", label: "Our work" },
  { href: "/team", label: "Our team" },
  { href: "/contact", label: "Contact Us" },
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
      {/* Desktop Sidebar */}
      <nav
        className={`${styles.sidebar} ${scrolled ? styles.scrolled : ""}`}
        aria-label="Main navigation"
      >
        <div className={styles.logoMark}>
          <svg
            width="38"
            height="36"
            viewBox="0 0 38 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logoSvg}
          >
            <circle
              cx="19"
              cy="18"
              r="16"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <line x1="19" y1="2" x2="19" y2="34" stroke="currentColor" strokeWidth="1" />
            <line x1="3" y1="18" x2="35" y2="18" stroke="currentColor" strokeWidth="1" />
            <line x1="7" y1="6" x2="31" y2="30" stroke="currentColor" strokeWidth="1" />
            <line x1="31" y1="6" x2="7" y2="30" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className={styles.navLinks}>
          {navLinks.map((link, i) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <div key={link.href} className={styles.navItem}>
                {i === 0 && <div className={styles.crossMark} />}
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`}
                >
                  <span className={styles.navLinkText}>{link.label}</span>
                </Link>
                {i === 0 && <div className={styles.dividerDot} />}
                {i === 0 && <div className={styles.underline} />}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile top bar — transparent on hero, dark on scroll */}
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
          <span className={styles.mobileLogoText}>Veloscope</span>
        </Link>

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
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${
                  isActive ? styles.active : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
