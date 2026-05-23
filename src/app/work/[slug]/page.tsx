import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import FooterCompact from '@/components/Landing/FooterCompact';

// ── Per-event data keyed by slug ──
const EVENTS: Record<string, {
  title: string;
  date: string;
  location: string;
  description: string;
  stats: { number: string; label: string }[];
  hero: string;
  gallery: string[];
}> = {
  'chennai-marathon-2020': {
    title: 'Skechers Performance Chennai Marathon',
    date: 'Jan 23rd, 2020',
    location: 'Chennai, India',
    description: 'One of South India\'s most prestigious road races, pushing thousands of runners through the heart of the city at dawn. We deployed 60 photographers across 14 strategic checkpoints to deliver 90,000 images in under 24 hours.',
    stats: [
      { number: '90,000', label: 'Images delivered' },
      { number: '1,000', label: 'Runners captured' },
      { number: '60', label: 'Photographers' }
    ],
    hero: '/images/figma/figma_672_2830.png',
    gallery: [
      '/images/figma/figma_712_2280.png',
      '/images/figma/figma_712_2280.png',
      '/images/figma/figma_752_3148.png',
      '/images/figma/figma_712_2283.png',
      '/images/figma/figma_712_2285.png',
      '/images/figma/figma_752_3294.png'
    ]
  },
  'ruggedian-kolhapur': {
    title: 'Ruggedian Kolhapur Run',
    date: 'Dec 15th, 2019',
    location: 'Kolhapur, India',
    description: 'The toughest off-road race in Maharashtra. 2,000 runners against rugged terrain, unforgiving light, and unpredictable weather. 80 photographers. 120,000 frames. Zero compromises.',
    stats: [
      { number: '120,000', label: 'Images delivered' },
      { number: '2,000', label: 'Runners captured' },
      { number: '80', label: 'Photographers' }
    ],
    hero: '/images/figma/figma_712_2283.png',
    gallery: [
      '/images/figma/figma_672_2828.png',
      '/images/figma/figma_672_2830.png',
      '/images/figma/figma_650_2701.png',
      '/images/figma/figma_650_2703.png',
      '/images/figma/figma_712_2280.png',
    ]
  },
  'yogi-run': {
    title: 'Yogi Run',
    date: 'Mar 10th, 2019',
    location: 'Pune, India',
    description: 'A community-first running event capturing the spirit of everyday athletes. 500 runners, 20 photographers, and a production turnaround of under 8 hours. A lean, high-output operation.',
    stats: [
      { number: '45,000', label: 'Images delivered' },
      { number: '500', label: 'Runners captured' },
      { number: '20', label: 'Photographers' }
    ],
    hero: '/images/figma/figma_712_2280.png',
    gallery: [
      '/images/figma/figma_672_2830.png',
      '/images/figma/figma_656_2710.png',
      '/images/figma/figma_656_2720.png',
      '/images/figma/figma_712_2285.png',
      '/images/figma/figma_712_2283.png',
    ]
  }
};

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = EVENTS[slug];

  console.log("SLUG IS: ", slug);
  if (!event) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>

        {/* ── Back Link ── */}
        <Link href="/work" className={styles.backLink}>
          ← back to work
        </Link>

        {/* ── Hero ── */}
        <div className={styles.heroWrapper}>
          <Image
            src={event.hero}
            alt={event.title}
            fill
            className={styles.heroImage}
            sizes="100vw"
            priority
          />
        </div>

        {/* ── Header ── */}
        <header className={styles.header}>
          <h1 className={styles.title}>{event.title}</h1>
          <div className={styles.metaBar}>
            <span>{event.date}</span>
            <span className={styles.metaDot}>•</span>
            <span>{event.location}</span>
          </div>
        </header>

        {/* ── Description + Stats ── */}
        <div className={styles.contentRow}>
          <p className={styles.description}>{event.description}</p>

          <div className={styles.statsRow}>
            {event.stats.map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Gallery ── */}
        <section>
          <p className={styles.galleryLabel}>Gallery</p>
          <div className={styles.gallery}>
            {event.gallery.map((src, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image
                  src={src}
                  alt={`${event.title} — photo ${i + 1}`}
                  fill
                  className={styles.galleryImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

      </div>

      <FooterCompact />
    </main>
  );
}
