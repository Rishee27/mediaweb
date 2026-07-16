import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaTh, FaList, FaSlidersH, FaSearch } from "react-icons/fa";
import { mediaData } from '../data/mediaData';
import MediaCard from './MediaCard';
import styles from './CategoryPage.module.css';

export default function CategoryPage({ category }) {
  // Original filtered list of this category
  const categoryListings = mediaData.filter(item => item.category === category);

  // Locations list
  const cities = [...new Set(categoryListings.map(item => item.location))];
  // Pricing models list
  const pricingModels = [...new Set(categoryListings.map(item => item.priceUnit.replace('/', '').trim()))];
  // Formats list
  const formats = [...new Set(categoryListings.map(item => item.format))];

  // Accordion filter states
  const [openSections, setOpenSections] = useState({
    location: true,
    budget: true,
    pricing: false,
    format: false
  });

  // Filter criteria states
  const [locSearch, setLocSearch] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);
  const [budgetLimit, setBudgetLimit] = useState(5000000); // 50L
  const [selectedPricing, setSelectedPricing] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);

  // Sort and view states
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  // Final listings state
  const [filteredListings, setFilteredListings] = useState(categoryListings);

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCityToggle = (city) => {
    setSelectedCities(prev => 
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    );
  };

  const handlePricingToggle = (model) => {
    setSelectedPricing(prev => 
      prev.includes(model) ? prev.filter(m => m !== model) : [...prev, model]
    );
  };

  const handleFormatToggle = (fmt) => {
    setSelectedFormats(prev => 
      prev.includes(fmt) ? prev.filter(f => f !== fmt) : [...prev, fmt]
    );
  };

  const resetFilters = () => {
    setSelectedCities([]);
    setBudgetLimit(5000000);
    setSelectedPricing([]);
    setSelectedFormats([]);
    setLocSearch('');
    setFilteredListings(categoryListings);
  };

  const applyFilters = () => {
    let result = [...categoryListings];

    // Filter by Cities
    if (selectedCities.length > 0) {
      result = result.filter(item => selectedCities.includes(item.location));
    }

    // Filter by Budget (under or equal)
    result = result.filter(item => item.price <= budgetLimit);

    // Filter by Pricing Models
    if (selectedPricing.length > 0) {
      result = result.filter(item => 
        selectedPricing.includes(item.priceUnit.replace('/', '').trim())
      );
    }

    // Filter by Formats
    if (selectedFormats.length > 0) {
      result = result.filter(item => selectedFormats.includes(item.format));
    }

    // Apply Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredListings(result);
  };

  // Run initial apply on sort change
  useEffect(() => {
    applyFilters();
  }, [sortBy, category]);

  const formattedBudget = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(budgetLimit);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Left Sidebar Filter Section */}
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Filters</h2>

          {/* Section 1: Location */}
          <div className={styles.filterBlock}>
            <div className={styles.filterHeader} onClick={() => toggleSection('location')}>
              <span>📍 Location</span>
              <FaChevronDown style={{ transform: openSections.location ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', fontSize: '14px' }} />
            </div>
            {openSections.location && (
              <div className={styles.filterContent}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e2e0f0', borderRadius: '8px', padding: '8px 12px', gap: '8px', marginBottom: '8px', backgroundColor: '#f9f9fc' }}>
                  <FaSearch className="text-gray-400 text-sm flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search city..."
                    style={{ border: 'none', outline: 'none', fontSize: '13px', width: '100%', background: 'transparent', color: '#1a1a2e' }}
                    value={locSearch}
                    onChange={(e) => setLocSearch(e.target.value)}
                  />
                </div>
                <div style={{ maxHeight: '150px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                  {cities
                    .filter(c => c.toLowerCase().includes(locSearch.toLowerCase()))
                    .map((city) => (
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
            )}
          </div>

          {/* Section 2: Budget */}
          <div className={styles.filterBlock}>
            <div className={styles.filterHeader} onClick={() => toggleSection('budget')}>
              <span>💰 Budget Range</span>
              <FaChevronDown style={{ transform: openSections.budget ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', fontSize: '14px' }} />
            </div>
            {openSections.budget && (
              <div className={styles.filterContent}>
                <div className={styles.sliderLabel}>
                  <span>Min: ₹5,000</span>
                  <span>Max: {formattedBudget}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="2000000"
                  step="10000"
                  value={budgetLimit}
                  onChange={(e) => setBudgetLimit(Number(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>
            )}
          </div>

          {/* Section 3: Pricing Models */}
          {pricingModels.length > 0 && (
            <div className={styles.filterBlock}>
              <div className={styles.filterHeader} onClick={() => toggleSection('pricing')}>
                <span>📊 Pricing Model</span>
                <FaChevronDown style={{ transform: openSections.pricing ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', fontSize: '14px' }} />
              </div>
              {openSections.pricing && (
                <div className={styles.filterContent}>
                  {pricingModels.map((model) => (
                    <label key={model} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={selectedPricing.includes(model)}
                        onChange={() => handlePricingToggle(model)}
                      />
                      <span>{model}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Section 4: Ad Format */}
          {formats.length > 0 && (
            <div className={styles.filterBlock}>
              <div className={styles.filterHeader} onClick={() => toggleSection('format')}>
                <span>🎯 Ad Format</span>
                <FaChevronDown style={{ transform: openSections.format ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', fontSize: '14px' }} />
              </div>
              {openSections.format && (
                <div className={styles.filterContent}>
                  {formats.map((fmt) => (
                    <label key={fmt} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={selectedFormats.includes(fmt)}
                        onChange={() => handleFormatToggle(fmt)}
                      />
                      <span>{fmt}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Apply & Reset Buttons */}
          <button type="button" onClick={applyFilters} className={styles.applyBtn}>
            Apply Filters
          </button>
          <button type="button" onClick={resetFilters} className={styles.resetLink}>
            Reset Filters
          </button>
        </aside>

        {/* Right Main Content Block */}
        <main className={styles.mainContent}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link> &gt; <span style={{ textTransform: 'capitalize' }}>{category}</span>
          </div>

          {/* Title */}
          <h1 className={styles.h1}>Advertising in {category}</h1>
          
          {/* Controls Bar */}
          <div className={styles.subtitleRow}>
            <span className={styles.countText}>
              {filteredListings.length} {filteredListings.length === 1 ? 'option' : 'options'} found
            </span>

            <div className={styles.controlsRow}>
              {/* Sorting */}
              <select 
                className={styles.sortDropdown}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popularity">Popularity</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>

              {/* View Grid/List toggle */}
              <div className={styles.viewToggle}>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${viewMode === 'grid' ? styles.toggleActive : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <FaTh style={{ fontSize: '14px' }} />
                </button>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${viewMode === 'list' ? styles.toggleActive : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <FaList style={{ fontSize: '14px' }} />
                </button>
              </div>
            </div>
          </div>

          {/* Media Cards Grid */}
          {filteredListings.length > 0 ? (
            <div className={viewMode === 'grid' ? styles.cardsGrid : styles.listLayout}>
              {filteredListings.map((item) => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <FaSlidersH className="text-gray-400 text-3xl" style={{ marginBottom: '12px' }} />
              <h3>No matching campaigns found</h3>
              <p style={{ fontSize: '13px', marginTop: '4px' }}>Try resetting or updating your filter selections.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
