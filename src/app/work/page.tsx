import React from 'react';
import styles from './page.module.css';
import EventCard from '@/components/Work/EventCard';
import ScrollProgress from '@/components/shared/ScrollProgress';
import CustomCursor from '@/components/shared/CustomCursor';

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
    title: 'Ruggedian kolhapur run',
    date: 'Dec 15th, 2019',
    image: '/images/event-woman.png',
    stats: { images: '120,000', runners: '2000', photographers: '80' }
  },
  {
    id: 'yogi-run',
    title: 'Yogi run',
    date: 'Mar 10th, 2019',
    image: '/images/portfolio-card.png',
    stats: { images: '45,000', runners: '500', photographers: '20' }
  }
];

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <ScrollProgress />
      <CustomCursor />
      
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Our work</h1>
        </header>

        <div className={styles.grid}>
          {/* Desktop Left Column - Labels */}
          <div className={styles.labelsCol}>
            {EVENTS.map((event, index) => (
              <div key={`label-${event.id}`} className={styles.labelWrapper}>
                <span className={styles.sideLabel}>{event.title}</span>
              </div>
            ))}
          </div>

          {/* Center Column - Cards */}
          <div className={styles.cardsCol}>
            {EVENTS.map((event) => (
              <div key={event.id} className={styles.cardWrapper}>
                {/* Mobile only label */}
                <span className={styles.mobileLabel}>{event.title}</span>
                <EventCard {...event} />
              </div>
            ))}
            
            <div className={styles.scrollMarkers}>
              <span className={styles.marker}>keep scrolling</span>
              <span className={styles.marker}>Ik there's a lot</span>
              <span className={styles.marker}>That's it!</span>
            </div>
          </div>

          {/* Desktop Right Column - Additional Images (Hidden on mobile) */}
          <div className={styles.imagesCol}>
            <div className={styles.sideImageWrapper}>
              {/* These would be the large side images from Figma */}
              <div className={styles.placeholderImage}></div>
            </div>
            <div className={styles.sideImageWrapper}>
              <div className={styles.placeholderImage}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
