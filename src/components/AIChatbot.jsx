import React, { useState } from 'react';
import { FaPaperPlane, FaFileAlt, FaUniversity, FaInfoCircle, FaRegCommentDots } from "react-icons/fa";
import styles from './AIChatbot.module.css';

export default function AIChatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const quickActions = [
    { label: 'Get a Media Plan', prefix: <FaFileAlt style={{ fontSize: '14px' }} />, text: 'Hello! I need a media plan for my consumer brand. Budget is ₹5,00,000 in Mumbai.' },
    { label: 'Check Rates or Reach Data', prefix: <FaUniversity style={{ fontSize: '14px' }} />, text: 'What is the reach and cost for advertising on Hotstar during cricket leagues?' },
    { label: 'Know More About Us', prefix: <FaInfoCircle style={{ fontSize: '14px' }} />, text: 'Tell me about The Owl Media platforms and credentials.' },
    { label: 'Talk to A Human', prefix: <FaRegCommentDots style={{ fontSize: '14px' }} />, text: 'How do I connect with your planning experts?' }
  ];

  const handleQueryChange = (e) => {
    if (e.target.value.length <= 250) {
      setQuery(e.target.value);
    }
  };

  const handleQuickActionClick = (action) => {
    setQuery(action.text);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');

    setTimeout(() => {
      setLoading(false);
      const text = query.toLowerCase();

      if (text.includes('plan') || text.includes('budget')) {
        setResponse('Based on your planning brief, I recommend allocating 50% to OTT/Streaming (Hotstar/JioCinema) for video reach, 30% to Instagram Reels Ads for direct click generation, and 20% to Outdoor billboard locations in high-traffic hubs like Bandra or Western Express Highway.');
      } else if (text.includes('rates') || text.includes('reach') || text.includes('hotstar')) {
        setResponse('Hotstar video CPM starts around ₹200 to ₹400 per 10s depending on targeting filters. Reach peaks around 12-15 crore impressions per match during marquee sporting events. I recommend a combination of pre-roll and mid-roll sponsorships.');
      } else if (text.includes('about') || text.includes('mediaweb') || text.includes('credentials') || text.includes('owl')) {
        setResponse('The Owl Media is India\'s largest digital-first media buying platform serving 10,000+ brands. We offer end-to-end campaign launch execution across 12+ online and offline advertising channels with 100% verified log records.');
      } else if (text.includes('human') || text.includes('expert') || text.includes('connect')) {
        setResponse('Sure! You can speak with our media consulting planners directly. Email us at ad@theowlmedia.com or submit a request on our Contact Us page, and our team will get back to you within 24 hours.');
      } else {
        setResponse(`Thanks for your query: "${query}". I suggest a combined strategy of Digital Programmatic Ads + Cinema Slides to build initial local city awareness. Let me connect you to our consultant experts at ad@theowlmedia.com for detailed negotiation passes!`);
      }
    }, 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSearchSubmit();
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        {/* Top Header Row */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className={styles.sparkle}>✦</span>
            <span>Ask Anto, Our AI Chatbot</span>
          </div>
          <span className={styles.counter}>{query.length}/250</span>
        </div>

        {/* Input Textarea Block */}
        <form onSubmit={handleSearchSubmit} className={styles.inputArea}>
          <textarea
            className={styles.textarea}
            placeholder="What is the cost of advertising in..."
            value={query}
            onChange={handleQueryChange}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            className={styles.sendBtn}
            disabled={!query.trim() || loading}
          >
            <FaPaperPlane style={{ fontSize: '16px' }} />
          </button>
        </form>

        {/* Quick Action Button Pills */}
        <div className={styles.quickActions}>
          {quickActions.map((action) => (
            <button
              key={action.label}
              type="button"
              className={styles.pillBtn}
              onClick={() => handleQuickActionClick(action)}
            >
              {action.prefix}
              <span>{action.label}</span>
            </button>
          ))}
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div style={{ fontSize: '13px', color: 'var(--primary-color)', fontWeight: '600', animation: 'pulse 1.5s infinite' }}>
            Anto is typing...
          </div>
        )}

        {/* AI Answer Response Box */}
        {response && !loading && (
          <div className={styles.responseBox}>
            <div className={styles.responseHeader}>
              <span>Anto Response</span>
              <button 
                type="button" 
                className={styles.closeResponseBtn}
                onClick={() => setResponse('')}
              >
                Clear
              </button>
            </div>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
