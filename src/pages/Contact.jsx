import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaPhone, FaGlobe, FaCheckCircle } from "react-icons/fa";
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Contact Us</h1>

        <div className={styles.layout}>
          {/* Left Column: Form */}
          <div className={styles.formBox}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <FaCheckCircle className="text-indigo-600" style={{ fontSize: '48px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)' }}>
                  Enquiry Submitted Successfully!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '400px', lineHeight: '1.6' }}>
                  Thank you for reaching out to **The Owl Media**. One of our expert media planners will connect with you via email or phone within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', company: '', subject: 'General Inquiry', message: '' });
                  }}
                  className={styles.submitBtn}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="e.g. +91 9999999999"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Company / Brand Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.input}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Campaign Planning Request">Campaign Planning Request</option>
                    <option value="Rate Negotiation passes">Rate Negotiation passes</option>
                    <option value="Agency Partnership Application">Agency Partnership Application</option>
                    <option value="Reporting & log validation issue">Reporting & log validation issue</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Message / Brief</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.input}
                    style={{ resize: 'none' }}
                    placeholder="Describe your target cities, budget ranges, and campaign dates..."
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info */}
          <aside className={styles.infoBox}>
            <div className={styles.infoSection}>
              {/* Mail */}
              <div className={styles.infoItem}>
                <FaEnvelope className={`${styles.infoIcon} text-xl`} />
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  <div className={styles.infoVal}>ad@theowlmedia.com</div>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.infoItem}>
                <FaPhone className={`${styles.infoIcon} text-xl`} />
                <div>
                  <span className={styles.infoLabel}>Phone</span>
                  <div className={styles.infoVal}>+91 22 4567 8910</div>
                </div>
              </div>

              {/* Address */}
              <div className={styles.infoItem}>
                <FaMapMarkerAlt className={`${styles.infoIcon} text-xl`} />
                <div>
                  <span className={styles.infoLabel}>Office Address</span>
                  <div className={styles.infoVal}>
                    The Owl Media India Pvt Ltd,<br />
                    B-Wing, 402, Supreme Chambers,<br />
                    Andheri West, Mumbai - 400053
                  </div>
                </div>
              </div>

              {/* Clock */}
              <div className={styles.infoItem}>
                <FaClock className={`${styles.infoIcon} text-xl`} />
                <div>
                  <span className={styles.infoLabel}>Working Hours</span>
                  <div className={styles.infoVal}>Mon - Sat: 9:30 AM - 6:30 PM</div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className={styles.mapPlaceholder}>
              <FaGlobe style={{ fontSize: '18px', marginRight: '8px' }} />
              <span>[Interactive Office Map Grid]</span>
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
}
