import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { BagContext } from '../App';
import { mediaData } from '../data/mediaData';
import styles from './Plan.module.css';

export default function Plan() {
  const navigate = useNavigate();
  const { addToBag, bagItems } = useContext(BagContext);

  const [currentStep, setCurrentStep] = useState(1);

  // Form State Values
  const [objective, setObjective] = useState('Brand Awareness');
  const [ageRange, setAgeRange] = useState(35); // 18 - 65
  const [genders, setGenders] = useState(['Male', 'Female']);
  const [selectedCities, setSelectedCities] = useState(['Mumbai', 'Delhi']);
  const [interests, setInterests] = useState(['Tech', 'Fashion']);
  const [budget, setBudget] = useState(150000); // 1.5L initial

  const objectivesList = [
    { name: 'Brand Awareness', emoji: '🎯', desc: 'Maximize your reach and capture audience attention.' },
    { name: 'Lead Generation', emoji: '📈', desc: 'Acquire user contacts and potential inquiries.' },
    { name: 'Sales & Conversion', emoji: '🛒', desc: 'Directly drive product orders and checkouts.' },
    { name: 'App Downloads', emoji: '📱', desc: 'Increase conversions and app installations.' },
    { name: 'Website Traffic', emoji: '🌐', desc: 'Drive high intent visits to your portals.' }
  ];

  const allCities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata', 'Ahmedabad'];
  const allInterests = ['Tech', 'Fashion', 'Finance', 'Sports', 'Entertainment', 'Travel', 'Food', 'Business'];

  const handleGenderToggle = (gender) => {
    setGenders(prev =>
      prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]
    );
  };

  const handleCityToggle = (city) => {
    setSelectedCities(prev =>
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    );
  };

  const handleInterestToggle = (interest) => {
    setInterests(prev =>
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Generate dynamic packages based on budget and objective
  const getRecommendations = () => {
    // Determine allocation percentages
    let digitalPct = 40;
    let outdoorPct = 30;
    let cinemaPct = 30;

    if (objective === 'Lead Generation' || objective === 'Website Traffic') {
      digitalPct = 70;
      outdoorPct = 15;
      cinemaPct = 15;
    } else if (objective === 'Sales & Conversion' || objective === 'App Downloads') {
      digitalPct = 80;
      outdoorPct = 10;
      cinemaPct = 10;
    }

    const digitalAllocation = (budget * digitalPct) / 100;
    const outdoorAllocation = (budget * outdoorPct) / 100;
    const cinemaAllocation = (budget * cinemaPct) / 100;

    // Pick 1 mock item from each category that is closest to allocation budget
    const getBestMatch = (cat, allocation) => {
      const candidates = mediaData.filter(i => i.category === cat);
      if (candidates.length === 0) return null;
      // Sort by price proximity to allocation budget
      candidates.sort((a, b) => Math.abs(a.price - allocation) - Math.abs(b.price - allocation));
      return candidates[0];
    };

    const digItem = getBestMatch('digital', digitalAllocation) || { name: 'Google Display Ads', price: 15000, category: 'digital', id: 'dig-1' };
    const outItem = getBestMatch('outdoor', outdoorAllocation) || { name: 'Local Billboard Placement', price: 60000, category: 'outdoor', id: 'out-1' };
    const cinItem = getBestMatch('cinema', cinemaAllocation) || { name: 'PVR Cinema Pre-Roll', price: 25000, category: 'cinema', id: 'cin-1' };

    return [
      { channel: 'Digital OTT / Search', allocation: digitalPct, budget: digitalAllocation, match: digItem, reach: 'Approx 15L impressions' },
      { channel: 'Outdoor Billboards', allocation: outdoorPct, budget: outdoorAllocation, match: outItem, reach: 'Approx 3.5L commuters' },
      { channel: 'Cinema Screen Slides', allocation: cinemaPct, budget: cinemaAllocation, match: cinItem, reach: 'Approx 40K film viewers' }
    ];
  };

  const recommendations = getRecommendations();

  const handleAddAllToBag = () => {
    recommendations.forEach(rec => {
      if (rec.match) {
        addToBag(rec.match);
      }
    });
    alert('All recommended campaign spaces added to Your Bag!');
    navigate('/dashboard');
  };

  const formattedBudget = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(budget);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Title */}
        <div className={styles.titleBlock}>
          <h1 className={styles.h1}>Plan Your Media Spend</h1>
          <p className={styles.subtitle}>
            Enter campaign details to get custom AI recommendations instantly.
          </p>
        </div>

        {/* Stepper Node Indicators */}
        <div className={styles.stepper}>
          {['Goal', 'Audience', 'Budget', 'Recommendations'].map((stepName, stepIdx) => {
            const stepNum = stepIdx + 1;
            const isActive = currentStep >= stepNum;
            return (
              <div key={stepName} className={styles.stepNode}>
                <div className={`${styles.stepCircle} ${isActive ? styles.stepCircleActive : ''}`}>
                  {stepNum}
                </div>
                <span className={`${styles.stepLabel} ${currentStep === stepNum ? styles.stepLabelActive : ''}`}>
                  {stepName}
                </span>
              </div>
            );
          })}
        </div>

        {/* Step Card Frame */}
        <div className={styles.cardFrame}>
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div>
              <h2 className={styles.stepTitle}>What's your advertising objective?</h2>
              <div className={styles.objectiveGrid}>
                {objectivesList.map((obj) => {
                  const isActive = objective === obj.name;
                  return (
                    <div
                      key={obj.name}
                      className={`${styles.objectiveCard} ${isActive ? styles.objectiveCardActive : ''}`}
                      onClick={() => setObjective(obj.name)}
                    >
                      <span className={styles.objectiveEmoji}>{obj.emoji}</span>
                      <span className={styles.objectiveName}>{obj.name}</span>
                      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        {obj.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div>
              <h2 className={styles.stepTitle}>Select your target audience</h2>
              <div className={styles.audienceLayout}>
                {/* Age */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Target Audience Core Age: {ageRange} years</label>
                  <input
                    type="range"
                    min="18"
                    max="65"
                    value={ageRange}
                    onChange={(e) => setAgeRange(Number(e.target.value))}
                    className={styles.sliderInput}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#999' }}>
                    <span>18 yrs</span>
                    <span>65+ yrs</span>
                  </div>
                </div>

                {/* Gender */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Gender</label>
                  <div className={styles.rowInputs}>
                    {['Male', 'Female', 'Others'].map(g => (
                      <label key={g} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={genders.includes(g)}
                          onChange={() => handleGenderToggle(g)}
                        />
                        <span>{g}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Cities */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Target Cities</label>
                  <div className={styles.multiselect}>
                    {allCities.map(city => (
                      <label key={city} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={selectedCities.includes(city)}
                          onChange={() => handleCityToggle(city)}
                        />
                        <span>{city}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Interests / Industries</label>
                  <div className={styles.multiselect}>
                    {allInterests.map(interest => (
                      <label key={interest} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={interests.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                        />
                        <span>{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div>
              <h2 className={styles.stepTitle}>Set your budget</h2>
              <div className={styles.budgetLayout}>
                <div className={styles.budgetRow}>
                  <span className={styles.budgetDisplay}>{formattedBudget}</span>
                  <input
                    type="range"
                    min="10000"
                    max="10000000"
                    step="10000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className={styles.sliderInput}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#999', width: '100%' }}>
                    <span>₹10,000</span>
                    <span>₹1,00,00,000 (1 Cr)</span>
                  </div>
                </div>

                {/* Mock breakdown Pie Chart SVG */}
                <div>
                  <h4 style={{ fontSize: '14px', marginBottom: '14px', fontWeight: '700', textAlign: 'center' }}>
                    Mock Allocation Ratio Chart
                  </h4>
                  <svg width="200" height="200" viewBox="0 0 200 200" style={{ transform: 'rotate(-90deg)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.08))' }}>
                    {/* Pie Segments */}
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#4E3BC9" strokeWidth="40" strokeDasharray="301 502" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#6C5CE7" strokeWidth="40" strokeDasharray="150 502" strokeDashoffset="-301" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#c0392b" strokeWidth="40" strokeDasharray="51 502" strokeDashoffset="-451" />
                  </svg>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px', fontSize: '11px', fontWeight: '600' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#4E3BC9' }}></span> Digital</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#6C5CE7' }}></span> Outdoor</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#c0392b' }}></span> Cinema</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div>
              <h2 className={styles.stepTitle}>Recommended Media Mix</h2>
              <div className={styles.recsLayout}>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '10px' }}>
                  Based on target objective **{objective}** with budget **{formattedBudget}**, we recommend the following mix:
                </p>

                <table className={styles.recsTable}>
                  <thead>
                    <tr>
                      <th className={styles.recsTh}>Channel</th>
                      <th className={styles.recsTh}>Allocation</th>
                      <th className={styles.recsTh}>Estimated Reach</th>
                      <th className={styles.recsTh}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recommendations.map((rec, index) => (
                      <tr key={index}>
                        <td className={styles.recsTd}>
                          <strong>{rec.channel}</strong>
                          <div className={styles.pctBar}>
                            <div className={styles.pctFill} style={{ width: `${rec.allocation}%` }}></div>
                          </div>
                        </td>
                        <td className={styles.recsTd}>{rec.allocation}%</td>
                        <td className={styles.recsTd}>{rec.reach}</td>
                        <td className={styles.recsTd}>
                          {rec.match ? (
                            <Link to={`/media/${rec.match.id}`} style={{ color: 'var(--primary-color)', fontWeight: '700' }}>
                              View Space
                            </Link>
                          ) : (
                            <span>Custom Spec</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <button
                    type="button"
                    onClick={handleAddAllToBag}
                    className={`${styles.navBtn} ${styles.primaryBtn}`}
                    style={{ width: '100%', padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <FaShoppingBag style={{ marginRight: '8px', fontSize: '18px' }} />
                    ADD ALL RECOMMENDED TO BAG & CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Stepper Nav buttons */}
          <div className={styles.btnGroup}>
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`${styles.navBtn} ${currentStep === 1 ? styles.navBtnDisabled : ''}`}
            >
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className={`${styles.navBtn} ${styles.primaryBtn}`}
              >
                Next Step
              </button>
            ) : (
              <button
                type="button"
                onClick={() => { resetFilters(); setCurrentStep(1); }}
                className={styles.navBtn}
              >
                Reset Planner
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
