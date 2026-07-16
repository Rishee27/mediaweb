import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from '../data/mediaData';
import styles from './TestimonialSlider.module.css';

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5s auto-scroll

    return () => clearInterval(interval);
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[index];

  return (
    <section className={styles.container} id="testimonials">
      <h2 className={styles.title}>What Our Clients Say</h2>

      <div className={styles.sliderFrame}>
        {/* Quote */}
        <p className={styles.quoteText}>
          "{activeTestimonial.quote}"
        </p>

        <hr className={styles.divider} />

        {/* Client Meta block */}
        <div className={styles.clientMeta}>
          <div className={styles.avatar}>
            {activeTestimonial.avatar}
          </div>
          <div className={styles.clientInfo}>
            <span className={styles.name}>{activeTestimonial.name}</span>
            <span className={styles.company}>{activeTestimonial.designation}, {activeTestimonial.company}</span>
          </div>
        </div>

        {/* Arrow Controls */}
        <button 
          onClick={handlePrev} 
          className={`${styles.navArrow} ${styles.prevArrow}`}
          aria-label="Previous Testimonial"
        >
          <FaChevronLeft style={{ fontSize: '20px' }} />
        </button>
        <button 
          onClick={handleNext} 
          className={`${styles.navArrow} ${styles.nextArrow}`}
          aria-label="Next Testimonial"
        >
          <FaChevronRight style={{ fontSize: '20px' }} />
        </button>
      </div>

      {/* Dots Row */}
      <div className={styles.dotsRow}>
        {testimonials.map((_, dotIdx) => (
          <button
            key={dotIdx}
            className={`${styles.dot} ${dotIdx === index ? styles.activeDot : ''}`}
            onClick={() => setIndex(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
