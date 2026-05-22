"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const navLinks = [
  { href: "/", label: "About us" },
  { href: "/work", label: "Our work" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Mobile Hamburger */}
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
      </button>

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
