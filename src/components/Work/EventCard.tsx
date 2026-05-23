import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EventCard.module.css';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  image: string;
  stats: {
    images: string;
    runners: string;
    photographers: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ id, title, date, image, stats }) => {
  return (
    <Link href={`/work/${id}`} className={styles.card}>
      
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={styles.image} 
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      {/* Viewfinder Corners */}
      <span className={`${styles.corner} ${styles.cornerTL}`} />
      <span className={`${styles.corner} ${styles.cornerTR}`} />

      {/* Content */}
      <div className={styles.content}>
        <div>
          <p className={styles.date}>{date}</p>
          <h3 className={styles.title}>{title}</h3>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statGroup}>
            <span className={styles.statNumber}>{stats.images}</span>
            <span className={styles.statLabel}>images</span>
          </div>
          <div className={styles.statGroup}>
            <span className={styles.statNumber}>{stats.runners}</span>
            <span className={styles.statLabel}>Runners</span>
          </div>
          <div className={styles.statGroup}>
            <span className={styles.statNumber}>{stats.photographers}</span>
            <span className={styles.statLabel}>Photographers</span>
          </div>
        </div>
      </div>
      
    </Link>
  );
};

export default EventCard;
