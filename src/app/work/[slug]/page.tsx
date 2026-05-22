import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Dummy content generator based on slug
const getEventDetails = (slug: string) => {
  // Common dummy data
  return {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    date: 'Jan 23rd, 2020',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    stats: [
      { number: '90,000', label: 'images', color: 'lime' },
      { number: '1000', label: 'Runners', color: 'purple' },
      { number: '60', label: 'Photographers', color: 'lime' }
    ],
    heroImages: [
      '/images/event-runners.png',
      '/images/event-bridge.png',
      '/images/event-woman.png',
      '/images/event-group.png'
    ],
    galleryImages: [
      '/images/portfolio-card.png',
      '/images/hero-cyclist.png',
      '/images/story-photo.png'
    ]
  };
};

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = getEventDetails(params.slug);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/work" className={styles.backLink}>
          ← Back to work
        </Link>

        {/* Hero Image Grid */}
        <section className={styles.heroGrid}>
          {event.heroImages.map((src, idx) => (
            <div key={idx} className={styles.heroImageWrapper}>
              <Image 
                src={src} 
                alt={`Hero ${idx + 1}`} 
                fill 
                className={styles.image} 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </section>

        {/* Header Content */}
        <section className={styles.contentSection}>
          <div className={styles.headerInfo}>
            <h1 className={styles.title}>{event.title}</h1>
            <p className={styles.date}>{event.date}</p>
          </div>
          
          <div className={styles.descriptionBlock}>
            <p className={styles.description}>{event.description}</p>
          </div>
        </section>

        {/* Stats Row */}
        <section className={styles.statsRow}>
          {event.stats.map((stat, idx) => (
            <div key={idx} className={`${styles.statCard} ${styles[stat.color]}`}>
              <div className={styles.statContent}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Gallery */}
        <section className={styles.gallery}>
          {event.galleryImages.map((src, idx) => (
            <div key={idx} className={styles.galleryImageWrapper}>
              <Image 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                fill 
                className={styles.image} 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
