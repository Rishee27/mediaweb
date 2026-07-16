import React, { useState } from 'react';
import styles from './FAQSection.module.css';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What does The Owl Media do?",
      a: "The Owl Media is an advertising platform that helps brands plan, buy, and execute campaigns across online and offline channels. Our platform enables brands to discover ad options across TV, Digital, Outdoor, Radio, Magazine, Cinema, Sports, CTV, and Airport advertising — compare pricing instantly and book campaigns with transparent workflows."
    },
    {
      q: "Why should brands work with The Owl Media?",
      a: "We combine the reliability of an experienced advertising platform with the convenience of technology. We help marketers plan smarter, buy faster, and run campaigns confidently across India."
    },
    {
      q: "How does The Owl Media simplify media planning?",
      a: "Our platform brings all advertising options into one place. Brands can discover media options, access ad rates, filter by location, audience, budget and format, and compare transparent pricing instantly."
    },
    {
      q: "What types of advertising services does The Owl Media offer?",
      a: "We offer Airport, Cinema, Outdoor, Television, Radio, Magazine, Digital, Sports, and CTV advertising."
    },
    {
      q: "How do I book an ad through The Owl Media?",
      a: "Visit our website, choose a media category, search or filter options, compare rates and book directly. Or use our AI chatbot to share your requirement and get personalized recommendations."
    },
    {
      q: "Are advertising rates negotiable?",
      a: "Yes, rates are negotiable based on inventory availability, seasonality, campaign duration, and budget volumes."
    },
    {
      q: "Who can advertise with The Owl Media?",
      a: "Any business can advertise with us — startups, SMEs, large enterprises, agencies, and individual marketers across India."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>FAQ's</h2>

      <div className={styles.accordionList}>
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div key={index} className={styles.item}>
              <button
                type="button"
                className={styles.questionHeader}
                onClick={() => handleToggle(index)}
              >
                <span>{faq.q}</span>
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>+</span>
              </button>

              <div className={`${styles.answerWrapper} ${isOpen ? styles.answerOpen : ''}`}>
                <div className={styles.answerText}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
