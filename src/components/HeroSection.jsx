import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaCalendarAlt, FaFileAlt, FaArrowRight } from "react-icons/fa";
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const navigate = useNavigate();

  const headlines = [
    "Find and buy the best advertising options online",
    "India's Largest Media Planning Platform",
    "Empowering All To Advertise"
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headlines.length);
        setFade(true);
      }, 500); // 500ms fadeout transition
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        {/* Left Side Info */}
        <div className={styles.leftSec}>
          <span className={styles.badge}>India's Largest Media Planning Platform</span>
          
          <div className={styles.carouselWrapper}>
            <h1 className={`${styles.carouselText} ${fade ? styles.carouselTextActive : ''}`}>
              {headlines[index]}
            </h1>
          </div>

          <p className={styles.subtitle}>
            Plan, Compare and Book advertising options online across multiple genres with complete execution logs.
          </p>
        </div>

        {/* Right Side Cards */}
        <div className={styles.rightSec}>
          <div className={styles.cardsGrid}>
            {/* Card 1 */}
            <div className={styles.card} onClick={() => navigate('/find')}>
              <div className={styles.cardTop}>
                <div className={styles.cardIconWrapper}>
                  <FaSearch className="text-3xl" style={{ fontSize: '32px' }} />
                </div>
                <span className={styles.rupeeIcon}>₹</span>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardTitleBlock}>
                  <span className={styles.cardTitle}>Find</span>
                  <span className={styles.cardSubtitle}>Media Rates</span>
                </div>
                <FaArrowRight className={`${styles.arrowIcon} text-xl`} />
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.card} onClick={() => navigate('/plan')}>
              <div className={styles.cardTop}>
                <div className={styles.cardIconWrapper}>
                  <FaCalendarAlt className="text-3xl" style={{ fontSize: '32px' }} />
                </div>
                <span className={styles.rupeeIcon}>₹</span>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardTitleBlock}>
                  <span className={styles.cardTitle}>Plan</span>
                  <span className={styles.cardSubtitle}>Media Spend</span>
                </div>
                <FaArrowRight className={`${styles.arrowIcon} text-xl`} />
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.card} onClick={() => navigate('/dashboard')}>
              <div className={styles.cardTop}>
                <div className={styles.cardIconWrapper}>
                  <FaFileAlt className="text-3xl" style={{ fontSize: '32px' }} />
                </div>
                <span className={styles.rupeeIcon}>₹</span>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardTitleBlock}>
                  <span className={styles.cardTitle}>Buy</span>
                  <span className={styles.cardSubtitle}>Media Spots</span>
                </div>
                <FaArrowRight className={`${styles.arrowIcon} text-xl`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
