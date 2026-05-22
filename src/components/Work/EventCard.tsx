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
          sizes="(max-width: 768px) 100vw, 359px"
        />
        
        {/* Hover Overlay */}
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
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
      </div>
      
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>{date}</p>
      </div>
    </Link>
  );
};

export default EventCard;
