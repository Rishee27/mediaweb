import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch, FaSlidersH } from "react-icons/fa";
import { mediaData } from '../data/mediaData';
import MediaCard from '../components/MediaCard';
import styles from './Find.module.css';

export default function Find() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchQuery = searchParams.get('q') || '';
  const initialCityQuery = searchParams.get('city') || '';

  // Local query state
  const [searchVal, setSearchVal] = useState(initialSearchQuery);
  const [selectedCities, setSelectedCities] = useState(initialCityQuery ? [initialCityQuery] : []);
  const [selectedCats, setSelectedCats] = useState([]);
  const [budgetRange, setBudgetRange] = useState(5000000); // Max 50L

  const allCities = [...new Set(mediaData.map(item => item.location))];
  const allCategories = [...new Set(mediaData.map(item => item.category))];

  // Update queries when URL changes
  useEffect(() => {
    const q = searchParams.get('q') || '';
    const city = searchParams.get('city') || '';
    setSearchVal(q);
    if (city) {
      setSelectedCities([city]);
    } else {
      setSelectedCities([]);
    }
  }, [searchParams]);

  const handleCityToggle = (city) => {
    setSelectedCities(prev => 
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    );
  };

  const handleCategoryToggle = (cat) => {
    setSelectedCats(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchVal });
  };

  const resetFilters = () => {
    setSelectedCities([]);
    setSelectedCats([]);
    setBudgetRange(5000000);
    setSearchVal('');
    setSearchParams({});
  };

  // Dynamic filter matching logic
  const filteredListings = mediaData.filter(item => {
    // 1. Text Search matching name or location
    const query = searchVal.toLowerCase();
    const matchesSearch = !query || 
      item.name.toLowerCase().includes(query) || 
      item.location.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);

    // 2. City filter match
    const matchesCity = selectedCities.length === 0 || selectedCities.includes(item.location);

    // 3. Category filter match
    const matchesCategory = selectedCats.length === 0 || selectedCats.includes(item.category);

    // 4. Budget filter match
    const matchesBudget = item.price <= budgetRange;

    return matchesSearch && matchesCity && matchesCategory && matchesBudget;
  });

  const formattedBudget = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(budgetRange);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Header Block */}
        <header className={styles.headerBlock}>
          <h1 className={styles.h1}>Find Media Rates</h1>
          <p className={styles.subtitle}>
            Instantly discover, compare, and check rates for 100+ advertising spaces in India.
          </p>

          <div className={styles.searchBoxWrapper}>
            <form onSubmit={handleSearchSubmit} className={styles.searchBar}>
              <FaSearch className={`${styles.searchIcon} text-gray-400 text-base`} />
              <input
                type="text"
                placeholder="Search platforms, spaces, or locations..."
                className={styles.searchInput}
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
            </form>
          </div>
        </header>

        {/* Layout Grid */}
        <div className={styles.layout}>
          {/* Left Sidebar filter section */}
          <aside className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Filter Listings</h2>

            {/* Filter: Category */}
            <div className={styles.filterBlock}>
              <h3 className={styles.filterTitle}>Category</h3>
              <div className={styles.checkboxList}>
                {allCategories.map(cat => (
                  <label key={cat} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={selectedCats.includes(cat)}
                      onChange={() => handleCategoryToggle(cat)}
                    />
                    <span style={{ textTransform: 'capitalize' }}>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter: City Location */}
            <div className={styles.filterBlock}>
              <h3 className={styles.filterTitle}>Location</h3>
              <div className={styles.checkboxList}>
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

            {/* Filter: Budget Limit */}
            <div className={styles.filterBlock}>
              <h3 className={styles.filterTitle}>Budget</h3>
              <div className={styles.sliderLabel}>
                <span>Max Budget</span>
                <span>{formattedBudget}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="2000000"
                step="10000"
                value={budgetRange}
                onChange={(e) => setBudgetRange(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <button type="button" onClick={resetFilters} className={styles.resetBtn}>
              Reset Filters
            </button>
          </aside>

          {/* Right Listings Grid */}
          <main className={styles.resultsArea}>
            <div className={styles.resultsHeader}>
              <span className={styles.resultsCount}>
                Showing {filteredListings.length} {filteredListings.length === 1 ? 'result' : 'results'}
              </span>
            </div>

            {filteredListings.length > 0 ? (
              <div className={styles.resultsGrid}>
                {filteredListings.map(item => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <FaSlidersH className="text-gray-400 text-3xl" style={{ marginBottom: '12px' }} />
                <h3>No options found</h3>
                <p style={{ fontSize: '13px', marginTop: '4px' }}>Try relaxing your search terms or sidebar filters.</p>
              </div>
            )}
          </main>
        </div>

      </div>
    </div>
  );
}
