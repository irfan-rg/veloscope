import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import FooterCompact from '@/components/Landing/FooterCompact';

// ── Dummy Data ──
const JOB_DATA = {
  content: {
    title: 'Content writer',
    location: 'Remote',
    type: 'Full-time',
    about: 'We are seeking an exceptional Content Writer to shape the narrative voice of Veloscope. You will be responsible for translating visual masterpieces into compelling editorial stories, crafting interviews, and writing copy that matches our premium, brutalist aesthetic.',
    requirements: [
      'Passionate about sports photography and editorial design.',
      'Does not use AI for writing; we want raw, human storytelling.',
      '3+ years of experience in high-end editorial or agency environments.',
      'Flawless command of the English language with a distinct, authoritative tone.'
    ]
  },
  photographer: {
    title: 'Photographer',
    location: 'Global',
    type: 'Contract',
    about: 'Join our elite global roster. We need photographers who don\'t just take pictures, but capture cinematic moments that tell a story. You will be deployed to high-profile sporting events worldwide.',
    requirements: [
      'An exceptional portfolio demonstrating a cinematic eye.',
      'Experience with both analog film and digital formats.',
      'Ability to thrive in high-pressure, fast-paced environments.',
      'Deep understanding of lighting and brutalist composition.'
    ]
  },
  frontend: {
    title: 'Front end dev',
    location: 'Remote',
    type: 'Full-time',
    about: 'As a Front End Developer at Veloscope, you will be the architect of our digital experience. Your job is to translate cutting-edge Figma designs into buttery-smooth, pixel-perfect web interfaces that wow our users.',
    requirements: [
      'Pixel-perfect precision and extreme attention to detail.',
      'Mastery of React, Next.js, and modern CSS (animations, grid, etc.).',
      'Strong understanding of interaction design and micro-animations.',
      'A portfolio showcasing premium, non-generic web applications.'
    ]
  },
  backend: {
    title: 'Back end dev',
    location: 'Remote',
    type: 'Full-time',
    about: 'We need a robust architectural mind to handle our massive media pipeline. You will build and optimize the systems that deliver high-res photography to our global audience with zero latency.',
    requirements: [
      'Database architect with a security-first mindset.',
      'Deep expertise in Node.js, PostgreSQL, and media delivery (CDNs).',
      'Experience scaling systems to handle massive traffic spikes.',
      'Obsession with performance and clean, maintainable code.'
    ]
  },
  designer: {
    title: 'Designer',
    location: 'Remote',
    type: 'Full-time',
    about: 'You will own the visual language of Veloscope. From web interfaces to marketing materials, you will push the boundaries of sports editorial design, favoring brutalist typography and high-contrast layouts.',
    requirements: [
      'A master of Figma, capable of rapid prototyping and system design.',
      'Strong alignment with the brutalist, high-contrast aesthetic.',
      'Experience working closely with developers to ensure 1:1 execution.',
      'Ability to design without relying on generic templates or stock assets.'
    ]
  }
};

export default async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const job = JOB_DATA[resolvedParams.id as keyof typeof JOB_DATA];

  if (!job) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        {/* ── Top Bar ── */}
        <div className={styles.topBar}>
          <Link href="/careers" className={styles.backLink}>
            ← Back to careers
          </Link>
        </div>

        {/* ── Header ── */}
        <header className={styles.header}>
          <h1 className={styles.roleTitle}>{job.title}</h1>
          <div className={styles.metaBar}>
            <span className={styles.metaItem}>{job.location}</span>
            <span className={styles.metaDot}>•</span>
            <span className={styles.metaItem}>{job.type}</span>
          </div>
        </header>

        {/* ── Content Grid ── */}
        <div className={styles.contentGrid}>
          
          {/* Left: Info */}
          <div className={styles.leftCol}>
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>The Role</h3>
              <p className={styles.sectionText}>{job.about}</p>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Requirements</h3>
              <ul className={styles.reqList}>
                {job.requirements.map((req, i) => (
                  <li key={i} className={styles.reqItem}>{req}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right: CTA */}
          <div className={styles.rightCol}>
            <div className={styles.stickyWrapper}>
              <h2 className={styles.ctaTitle}>Apply for this role</h2>
              <p className={styles.ctaText}>
                Think you have what it takes? Send us an email with your resume, portfolio, and a brief intro.
              </p>
              <a href="mailto:veloscope@gmail.com" className={styles.applyBtn}>
                Apply Now <span>↗</span>
              </a>
            </div>
          </div>

        </div>

      </div>
      
      <FooterCompact />
    </main>
  );
}
