import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaTag, FaStar, FaAward, FaUniversity } from "react-icons/fa";
import { BagContext } from '../App';
import { mediaData } from '../data/mediaData';
import styles from './MediaDetail.module.css';

export default function MediaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { bagItems, addToBag, removeFromBag } = useContext(BagContext);

  const [activeTab, setActiveTab] = useState('overview');

  // Resolve matching media listing
  const item = mediaData.find(m => m.id === id);

  if (!item) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container} style={{ textAlign: 'center', padding: '60px 0' }}>
          <h2>Listing Not Found</h2>
          <p style={{ marginTop: '10px', color: 'var(--text-secondary)' }}>
            We could not resolve a media listing with ID "{id}".
          </p>
          <button onClick={() => navigate('/')} className={styles.addBtn} style={{ marginTop: '20px', display: 'inline-block' }}>
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const isInBag = bagItems.some(bagItem => bagItem.id === item.id);

  const handleBagToggle = () => {
    if (isInBag) {
      removeFromBag(item.id);
    } else {
      addToBag(item);
    }
  };

  const handleGetQuote = () => {
    alert(`Thank you! A quote request for "${item.name}" has been registered. Our account experts will contact you on your registered email.`);
    navigate('/contact');
  };

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(item.price);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Back Link */}
        <button onClick={() => navigate(-1)} className={styles.backBtn}>
          <FaArrowLeft style={{ fontSize: '16px' }} />
          <span>Back to Browse</span>
        </button>

        {/* Main Details Card */}
        <div className={styles.mainCard}>
          {/* Logo/Image Preview */}
          <div className={styles.mediaPreview}>
            <div 
              className={styles.previewLogo} 
              style={{ backgroundColor: item.logoColor || 'var(--primary-color)', color: item.textBlack ? '#000000' : '#ffffff' }}
            >
              {item.logo}
            </div>
          </div>

          {/* Details */}
          <div className={styles.mediaInfo}>
            <div className={styles.badgeRow}>
              <span className={styles.categoryTag}>{item.category}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#ffcc00', fontWeight: '700' }}>
                <FaStar style={{ fontSize: '16px', color: '#ffcc00' }} />
                <span>4.8 (12 reviews)</span>
              </div>
            </div>

            <h1 className={styles.h1}>{item.name}</h1>

            <div className={styles.priceBlock}>
              <span className={styles.price}>{formattedPrice}</span>
              <span className={styles.priceLbl}>{item.priceUnit}</span>
            </div>

            {/* Meta Grid */}
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLbl}>📍 City / Location</span>
                <span className={styles.metaVal}>{item.location}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLbl}>👥 Weekly Reach</span>
                <span className={styles.metaVal}>{item.reach}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLbl}>🎯 Ad Format</span>
                <span className={styles.metaVal}>{item.format}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.btnGroup}>
              <button
                onClick={handleBagToggle}
                className={`${styles.actionBtn} ${styles.addBtn} ${isInBag ? styles.addBtnActive : ''}`}
              >
                {isInBag ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <FaCheck style={{ fontSize: '16px' }} /> Added to Bag
                  </span>
                ) : (
                  'Add to Campaign Bag'
                )}
              </button>
              <button
                onClick={handleGetQuote}
                className={`${styles.actionBtn} ${styles.quoteBtn}`}
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tabs Section */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabsHeader}>
            <button
              onClick={() => setActiveTab('overview')}
              className={`${styles.tabBtn} ${activeTab === 'overview' ? styles.tabActive : ''}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`${styles.tabBtn} ${activeTab === 'pricing' ? styles.tabActive : ''}`}
            >
              Ad Options & Rates
            </button>
            <button
              onClick={() => setActiveTab('audience')}
              className={`${styles.tabBtn} ${activeTab === 'audience' ? styles.tabActive : ''}`}
            >
              Audience Data
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`${styles.tabBtn} ${activeTab === 'reviews' ? styles.tabActive : ''}`}
            >
              Reviews (12)
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className={styles.tabContent}>
            
            {/* TABS 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div>
                <h3 className={styles.tabTitle}>Campaign Overview</h3>
                <p className={styles.tabText}>
                  Advertising in **{item.name}** offers a highly premium layout to display your brand brief. Positioned in the prime traffic zone of **{item.location}**, this media space targets a concentration of high-intent consumers, professionals, and decision-makers daily.
                </p>
                <p className={styles.tabText} style={{ marginTop: '14px' }}>
                  By booking this option, your brand receives complete end-to-end execution support from The Owl Media, including digital monitoring, print run vouchers, or timestamp verification logs delivered directly to your client dashboard.
                </p>
              </div>
            )}

            {/* TABS 2: PRICING SPEC TABLE */}
            {activeTab === 'pricing' && (
              <div>
                <h3 className={styles.tabTitle}>Available Ad Specs & Pricing</h3>
                <table className={styles.specTable}>
                  <thead>
                    <tr>
                      <th className={styles.specTh}>Option Name</th>
                      <th className={styles.specTh}>Size / Specs</th>
                      <th className={styles.specTh}>Model</th>
                      <th className={styles.specTh}>Base Rate (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styles.specTd}><strong>Standard Placement</strong></td>
                      <td className={styles.specTd}>{item.format}</td>
                      <td className={styles.specTd}>{item.priceUnit}</td>
                      <td className={styles.specTd}>{formattedPrice}</td>
                    </tr>
                    <tr>
                      <td className={styles.specTd}>Premium Dominance Slot</td>
                      <td className={styles.specTd}>Double Display Area</td>
                      <td className={styles.specTd}>{item.priceUnit}</td>
                      <td className={styles.specTd}>{formatCurrency(item.price * 1.7)}</td>
                    </tr>
                    <tr>
                      <td className={styles.specTd}>Prime Time / Festival Slot</td>
                      <td className={styles.specTd}>Guaranteed High Traffic Block</td>
                      <td className={styles.specTd}>{item.priceUnit}</td>
                      <td className={styles.specTd}>{formatCurrency(item.price * 1.3)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* TABS 3: AUDIENCE DATA GRAPH */}
            {activeTab === 'audience' && (
              <div>
                <h3 className={styles.tabTitle}>Estimated Audience Demographics</h3>
                <p className={styles.tabText} style={{ marginBottom: '20px' }}>
                  Audience split by age group and gender for this specific inventory location:
                </p>
                
                {/* SVG/HTML visual representations of data */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '400px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px', fontWeight: '600' }}>
                      <span>Age 18 - 30 (Youth)</span>
                      <span>45%</span>
                    </div>
                    <div style={{ height: '8px', backgroundColor: '#f0f0f5', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '45%', height: '100%', backgroundColor: 'var(--primary-color)' }}></div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px', fontWeight: '600' }}>
                      <span>Age 31 - 50 (Corporate/Family)</span>
                      <span>38%</span>
                    </div>
                    <div style={{ height: '8px', backgroundColor: '#f0f0f5', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '38%', height: '100%', backgroundColor: 'var(--primary-color)' }}></div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px', fontWeight: '600' }}>
                      <span>Age 50+</span>
                      <span>17%</span>
                    </div>
                    <div style={{ height: '8px', backgroundColor: '#f0f0f5', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '17%', height: '100%', backgroundColor: 'var(--primary-color)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TABS 4: REVIEWS LIST */}
            {activeTab === 'reviews' && (
              <div>
                <h3 className={styles.tabTitle}>Customer Feedback</h3>
                <div className={styles.reviewsList}>
                  <div className={styles.reviewItem}>
                    <div className={styles.reviewHead}>
                      <span>Abhishek G., Brand Lead</span>
                      <span className={styles.reviewRating}>★★★★★</span>
                    </div>
                    <p className={styles.reviewComment}>
                      "Great visibility! The execution logs were shared on time, and we observed a clear uplift in website checkouts in this region."
                    </p>
                  </div>
                  <div className={styles.reviewItem}>
                    <div className={styles.reviewHead}>
                      <span>Ritu S., Agency Planner</span>
                      <span className={styles.reviewRating}>★★★★☆</span>
                    </div>
                    <p className={styles.reviewComment}>
                      "Highly responsive support. The booking rate was very competitive compared to other agency channels."
                    </p>
                  </div>
                  <div className={styles.reviewItem}>
                    <div className={styles.reviewHead}>
                      <span>Meera K., Startup Founder</span>
                      <span className={styles.reviewRating}>★★★★★</span>
                    </div>
                    <p className={styles.reviewComment}>
                      "Extremely easy self-serve booking process. Combined this space with digital banner ads, highly recommended."
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );

  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }
}
