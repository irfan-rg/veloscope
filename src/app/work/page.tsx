import React from 'react';
import styles from './page.module.css';
import EventCard from '@/components/Work/EventCard';
import FooterCompact from '@/components/Landing/FooterCompact';

// Dummy data based on Figma text nodes
const EVENTS = [
  {
    id: 'chennai-marathon-2020',
    title: 'Skechers Performance Chennai Marathon',
    date: 'Jan 23rd, 2020',
    image: '/images/event-runners.png',
    stats: { images: '90,000', runners: '1000', photographers: '60' }
  },
  {
    id: 'chennai-marathon-2019',
    title: 'Skechers Performance Chennai Marathon',
    date: 'Sep 11th, 2019',
    image: '/images/event-bridge.png',
    stats: { images: '85,000', runners: '850', photographers: '45' }
  },
  {
    id: 'ruggedian-kolhapur',
    title: 'Ruggedian Kolhapur Run',
    date: 'Dec 15th, 2019',
    image: '/images/event-woman.png',
    stats: { images: '120,000', runners: '2000', photographers: '80' }
  },
  {
    id: 'yogi-run',
    title: 'Yogi Run',
    date: 'Mar 10th, 2019',
    image: '/images/portfolio-card.png',
    stats: { images: '45,000', runners: '500', photographers: '20' }
  }
];

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>our work<span className={styles.accent}>.</span></h1>
        </header>

        {/* Mobile-First Massive Gallery Grid */}
        <div className={styles.grid}>
          {EVENTS.map((event) => (
            <div key={event.id} className={styles.cardWrapper}>
              <EventCard {...event} />
            </div>
          ))}
        </div>

        {/* Scroll Markers */}
        <div className={styles.scrollMarkers}>
          <span className={styles.marker}>that's it!</span>
        </div>
      </div>
      
      <FooterCompact />
    </main>
  );
}
