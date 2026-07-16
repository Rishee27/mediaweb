import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Find from './pages/Find';
import Plan from './pages/Plan';
import Dashboard from './pages/Dashboard';
import Airport from './pages/Airport';
import Cinema from './pages/Cinema';
import Outdoor from './pages/Outdoor';
import Television from './pages/Television';
import Radio from './pages/Radio';
import Digital from './pages/Digital';
import Sports from './pages/Sports';
import Magazine from './pages/Magazine';
import CTV from './pages/CTV';
import About from './pages/About';
import Contact from './pages/Contact';
import MediaDetail from './pages/MediaDetail';
import NotFound from './pages/NotFound';

// Context Definitions
export const BagContext = createContext();
export const SearchContext = createContext();
export const UserContext = createContext();

export default function App() {
  // Bag State
  const [bagItems, setBagItems] = useState([]);
  
  const addToBag = (item) => {
    setBagItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromBag = (itemId) => {
    setBagItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearBag = () => {
    setBagItems([]);
  };

  const totalPrice = bagItems.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);

  // Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Mock User Login State
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({ name: 'Rohit K.', email: 'rohit@theowlmedia.com', company: 'Rohit Brands Ltd' });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        <BagContext.Provider value={{ bagItems, addToBag, removeFromBag, clearBag, totalPrice }}>
          <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Navbar />
              <main style={{ flex: 1, minHeight: 'calc(100vh - 280px)' }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/find" element={<Find />} />
                  <Route path="/plan" element={<Plan />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/airport" element={<Airport />} />
                  <Route path="/cinema" element={<Cinema />} />
                  <Route path="/outdoor" element={<Outdoor />} />
                  <Route path="/television" element={<Television />} />
                  <Route path="/radio" element={<Radio />} />
                  <Route path="/digital" element={<Digital />} />
                  <Route path="/sports" element={<Sports />} />
                  <Route path="/magazine" element={<Magazine />} />
                  <Route path="/ctv" element={<CTV />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/contact-us" element={<Contact />} />
                  <Route path="/media/:id" element={<MediaDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </BagContext.Provider>
      </SearchContext.Provider>
    </UserContext.Provider>
  );
}
