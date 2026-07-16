import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  FaBars, FaSearch, FaUserCircle, FaShoppingBag, FaTimes,
  FaPlane, FaFilm, FaBroadcastTower, FaTv, FaVolumeUp,
  FaLaptop, FaTrophy, FaBus, FaBook
} from "react-icons/fa";
import { SearchContext, BagContext, UserContext } from '../App';
import { mediaData } from '../data/mediaData';
import styles from './Navbar.module.css';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { bagItems } = useContext(BagContext);
  const { user, login, logout } = useContext(UserContext);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [suggestions, setSuggestions] = useState({ categories: [], items: [], cities: [] });
  
  const dropdownRef = useRef(null);

  const categoriesList = [
    { name: 'Airport', path: '/airport', icon: '✈️' },
    { name: 'Cinema', path: '/cinema', icon: '🎬' },
    { name: 'Outdoor', path: '/outdoor', icon: '🗺️' },
    { name: 'Television', path: '/television', icon: '📺' },
    { name: 'Radio', path: '/radio', icon: '📻' },
    { name: 'Digital', path: '/digital', icon: '💻' },
    { name: 'Sports', path: '/sports', icon: '🏆' },
    { name: 'CTV', path: '/ctv', icon: '📺' },
    { name: 'Magazine', path: '/magazine', icon: '📖' }
  ];

  const navCategories = [
    { icon: FaPlane, label: "Airport", path: "/airport" },
    { icon: FaFilm, label: "Cinema", path: "/cinema" },
    { icon: FaBroadcastTower, label: "Outdoor", path: "/outdoor" },
    { icon: FaTv, label: "Television", path: "/television" },
    { icon: FaVolumeUp, label: "Radio", path: "/radio" },
    { icon: FaLaptop, label: "Digital", path: "/digital" },
    { icon: FaTrophy, label: "Sports", path: "/sports" },
    { icon: FaBus, label: "BTL", path: "/nontraditional" },
    { icon: FaBook, label: "Magazine", path: "/magazine" },
  ];

  // Total items inside the bag (counting distinct ones or quantities)
  const bagCount = bagItems.reduce((acc, item) => acc + (item.qty || 1), 0);

  // Suggestions search logic
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions({ categories: [], items: [], cities: [] });
      setShowDropdown(false);
      return;
    }

    const query = searchQuery.toLowerCase();

    // Match categories
    const matchedCategories = categoriesList.filter(cat => 
      cat.name.toLowerCase().includes(query)
    );

    // Match listings
    const matchedItems = mediaData.filter(item => 
      item.name.toLowerCase().includes(query)
    ).slice(0, 5);

    // Match unique cities
    const uniqueCities = [...new Set(mediaData.map(item => item.location))];
    const matchedCities = uniqueCities.filter(city => 
      city.toLowerCase().includes(query) && city.toLowerCase() !== 'pan india'
    ).slice(0, 3);

    setSuggestions({
      categories: matchedCategories,
      items: matchedItems,
      cities: matchedCities
    });
    setShowDropdown(true);
  }, [searchQuery]);

  // Click outside suggestions logic
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setShowDropdown(false);
    navigate(`/find?q=${searchQuery}`);
  };

  const handleSuggestionClick = (type, value, path) => {
    setShowDropdown(false);
    if (type === 'category') {
      navigate(path);
      setSearchQuery('');
    } else if (type === 'item') {
      navigate(`/media/${value.id}`);
      setSearchQuery('');
    } else if (type === 'city') {
      navigate(`/find?city=${value}`);
      setSearchQuery('');
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full shadow-md">
      
      {/* ROW 1 — TOP HEADER BAR */}
      <div style={{ backgroundColor: "#5B21B6" }} className="px-6 py-3 flex justify-between items-center">
        {/* Left — Hamburger + Logo */}
        <div className="flex items-center gap-4">
          <FaBars 
            onClick={() => setDrawerOpen(true)}
            className="text-white text-xl cursor-pointer hover:opacity-80 transition" 
          />
          <img
            src="/images/media_logo.png"
            alt="The Owl Media"
            style={{ 
              filter: "brightness(0) invert(1)",
              height: "56px",
              width: "auto",
              objectFit: "contain",
              cursor: "pointer"
            }}
            onClick={() => navigate("/")}
          />
        </div>

        {/* Center — Search bar */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 gap-2 w-96 relative" ref={dropdownRef}>
          <FaSearch className="text-gray-400 text-sm flex-shrink-0" />
          <form onSubmit={handleSearchSubmit} className="w-full">
            <input
              type="text"
              placeholder='Search "India Today"'
              className="w-full text-sm text-gray-700 outline-none bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery.trim() && setShowDropdown(true)}
            />
          </form>

          {/* Autocomplete Dropdown List */}
          {showDropdown && (
            <div className={styles.dropdown} style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px', zIndex: 1010 }}>
              {suggestions.categories.length > 0 && (
                <div className={styles.dropdownGroup}>
                  <div className={styles.dropdownTitle}>Media Genres</div>
                  {suggestions.categories.map((cat) => (
                    <div
                      key={cat.name}
                      className={styles.dropdownItem}
                      onClick={() => handleSuggestionClick('category', cat, cat.path)}
                    >
                      <span>{cat.icon} {cat.name}</span>
                    </div>
                  ))}
                </div>
              )}
              {suggestions.cities.length > 0 && (
                <div className={styles.dropdownGroup}>
                  <div className={styles.dropdownTitle}>Cities</div>
                  {suggestions.cities.map((city) => (
                    <div
                      key={city}
                      className={styles.dropdownItem}
                      onClick={() => handleSuggestionClick('city', city)}
                    >
                      <span>📍 {city}</span>
                      <span className={styles.dropdownLocation}>Popular Location</span>
                    </div>
                  ))}
                </div>
              )}
              {suggestions.items.length > 0 && (
                <div className={styles.dropdownGroup}>
                  <div className={styles.dropdownTitle}>Popular Listings</div>
                  {suggestions.items.map((item) => (
                    <div
                      key={item.id}
                      className={styles.dropdownItem}
                      onClick={() => handleSuggestionClick('item', item)}
                    >
                      <span>{item.name}</span>
                      <span className={styles.dropdownLocation}>{item.location}</span>
                    </div>
                  ))}
                </div>
              )}
              {suggestions.categories.length === 0 &&
               suggestions.items.length === 0 &&
               suggestions.cities.length === 0 && (
                <div style={{ padding: '16px', textAlign: 'center', fontSize: '13px', color: '#999' }}>
                  No results found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right — Contact, Login, Bag */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/contact-us")}
            className="text-white text-sm font-medium hover:opacity-80 transition bg-transparent border-none p-0 cursor-pointer"
          >
            Contact Us
          </button>
          <button 
            onClick={user ? logout : login}
            className="flex items-center gap-1.5 text-white text-sm font-medium hover:opacity-80 transition bg-transparent border-none p-0 cursor-pointer"
          >
            <FaUserCircle className="text-xl" />
            {user ? `Logout (${user.name.split(' ')[0]})` : "Login"}
          </button>
          <button 
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-1.5 text-white text-sm font-medium hover:opacity-80 transition bg-transparent border-none p-0 relative cursor-pointer"
          >
            <FaShoppingBag className="text-xl" />
            <span>Your Bag</span>
            {bagCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                {bagCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ROW 2 — CATEGORY NAVIGATION TAB BAR */}
      <div style={{ backgroundColor: "#111827" }} className="overflow-x-auto">
        <div className="flex items-center min-w-max mx-auto px-4">
          {navCategories.map((cat) => {
            const isActive = location.pathname === cat.path;
            return (
              <button
                key={cat.label}
                onClick={() => navigate(cat.path)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap transition duration-200 border-b-2 cursor-pointer bg-transparent ${
                  isActive
                    ? "text-white border-indigo-400"
                    : "text-gray-300 border-transparent hover:text-white hover:border-gray-500"
                }`}
              >
                <cat.icon className="text-base flex-shrink-0" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className={styles.drawerOverlay} onClick={() => setDrawerOpen(false)}>
          <div 
            className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.drawerHeader}>
              <img
                src="/images/media_logo.png"
                alt="The Owl Media"
                style={{ 
                  filter: "brightness(0)",
                  height: "32px",
                  width: "auto",
                  objectFit: "contain",
                  cursor: "pointer"
                }}
                onClick={() => { navigate("/"); setDrawerOpen(false); }}
              />
              <button className={styles.drawerCloseBtn} onClick={() => setDrawerOpen(false)}>
                <FaTimes size={24} />
              </button>
            </div>
            
            <div className={styles.drawerBody}>
              <Link to="/" className={styles.drawerLink} onClick={() => setDrawerOpen(false)}>Home</Link>
              <Link to="/find" className={styles.drawerLink} onClick={() => setDrawerOpen(false)}>Find Media</Link>
              <Link to="/plan" className={styles.drawerLink} onClick={() => setDrawerOpen(false)}>Plan Campaigns</Link>
              <Link to="/about" className={styles.drawerLink} onClick={() => setDrawerOpen(false)}>About Us</Link>
              <Link to="/contact-us" className={styles.drawerLink} onClick={() => setDrawerOpen(false)}>Contact Us</Link>
              
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {user ? (
                  <button 
                    onClick={() => { logout(); setDrawerOpen(false); }} 
                    className={styles.loginBtn}
                    style={{ width: '100%' }}
                  >
                    Logout ({user.name})
                  </button>
                ) : (
                  <button 
                    onClick={() => { login(); setDrawerOpen(false); }} 
                    className={styles.loginBtn}
                    style={{ width: '100%' }}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
