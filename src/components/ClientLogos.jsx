import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ClientLogos.module.css';

export default function ClientLogos() {
  const clients = [
    "TechCorp", "BrandX", "StartupY", "RetailZ", "FinanceABC",
    "EduTech", "HealthPlus", "AutoMate", "FoodChain", "MediaHouse"
  ];

  // Repeat the client list to support seamless scrolling
  const scrollList = [...clients, ...clients];

  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <h2 className={styles.title}>Our Clients</h2>
        <Link to="/about" className={styles.viewAll}>View All</Link>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {scrollList.map((client, index) => (
            <div key={index} className={styles.logoItem}>
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
