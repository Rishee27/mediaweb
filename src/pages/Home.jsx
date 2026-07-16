import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  FaPlane, FaFilm, FaBroadcastTower, FaTv, FaVolumeUp,
  FaLaptop, FaTrophy, FaBook, FaBus, FaNewspaper,
  FaStar, FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn
} from "react-icons/fa";

// Components
import HeroSection from '../components/HeroSection';
import AIChatbot from '../components/AIChatbot';
import GenreGrid from '../components/GenreGrid';
import TestimonialSlider from '../components/TestimonialSlider';
import ClientLogos from '../components/ClientLogos';
import FAQSection from '../components/FAQSection';

// Data
import { mediaData, blogPosts } from '../data/mediaData';
import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  const scrollRef = React.useRef(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  const checkScrollArrows = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollArrows);
      checkScrollArrows();
      window.addEventListener('resize', checkScrollArrows);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScrollArrows);
      window.removeEventListener('resize', checkScrollArrows);
    };
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  // Top spends list mapping
  const topSpendsList = [
    {
      rank: "#1",
      name: "Hotstar",
      category: "Digital",
      id: "dig-4",
      leftText: <>JIOHOTSTAR</>,
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/JioHotstar_logo.svg/200px-JioHotstar_logo.svg.png",
      fallback: <div className={styles.spendLogoFallback} style={{ display: 'none', background: 'linear-gradient(135deg, #101524 0%, #1e293b 100%)', color: '#fff', fontSize: '24px' }}>⭐</div>
    },
    {
      rank: "#2",
      name: "Hyderabad Airport",
      category: "Airport",
      id: "air-4",
      leftText: <>HYDERABAD<br/><span style={{ fontSize: '14px', fontWeight: '700', color: '#555' }}>AIRPORT</span></>,
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Rajiv_Gandhi_International_Airport_logo.svg/200px-Rajiv_Gandhi_International_Airport_logo.svg.png",
      fallback: <div className={styles.spendLogoFallback} style={{ display: 'none', backgroundColor: '#0284c7', color: '#fff', fontSize: '13px', textAlign: 'center', lineHeight: '1.2' }}>✈️<br/>HYD</div>
    },
    {
      rank: "#3",
      name: "Amazon MX Player",
      category: "Digital",
      id: "dig-8",
      leftText: <>AMAZON MX<br/><span style={{ fontSize: '14px', fontWeight: '700', color: '#555' }}>PLAYER</span></>,
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Amazon_MX_Player_logo.svg/200px-Amazon_MX_Player_logo.svg.png",
      fallback: <div className={styles.spendLogoFallback} style={{ display: 'none', backgroundColor: '#f97316', color: '#fff', fontSize: '24px' }}>▶</div>
    },
    {
      rank: "#4",
      name: "Delhi Metro",
      category: "Nontraditional",
      id: "out-8",
      leftText: <>DELHI<br/><span style={{ fontSize: '14px', fontWeight: '700', color: '#555' }}>METRO</span></>,
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Delhi_Metro_Logo.svg/200px-Delhi_Metro_Logo.svg.png",
      fallback: <div className={styles.spendLogoFallback} style={{ display: 'none', backgroundColor: '#0284c7', color: '#fff', fontSize: '24px' }}>🚇</div>
    },
    {
      rank: "#5",
      name: "Delhi Airport",
      category: "Airport",
      id: "air-2",
      leftText: <>DELHI<br/><span style={{ fontSize: '14px', fontWeight: '700', color: '#555' }}>AIRPORT</span></>,
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Indira_Gandhi_International_Airport_Logo.svg/200px-Indira_Gandhi_International_Airport_Logo.svg.png",
      fallback: <div className={styles.spendLogoFallback} style={{ display: 'none', backgroundColor: '#7c3aed', color: '#fff', fontSize: '13px', textAlign: 'center', lineHeight: '1.2' }}>✈️<br/>DEL</div>
    },
    {
      rank: "#6",
      name: "Times Of India Bangalore",
      category: "Newspaper",
      id: "new-1",
      leftText: <>THE TIMES<br/><span style={{ fontSize: '13px', fontWeight: '700', color: '#555' }}>OF INDIA</span><br/><span style={{ fontSize: '11px', fontWeight: '600', color: '#777' }}>BANGALORE</span></>,
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/The-times-of-india.jpg/200px-The-times-of-india.jpg",
      fallback: <div className={styles.spendLogoFallback} style={{ display: 'none', backgroundColor: '#fff', color: '#e11d48', fontSize: '18px', fontWeight: 'bold' }}>TOI</div>
    },
    {
      rank: "#7",
      name: "Newspaper Inserts Bangalore",
      category: "Newspaper",
      id: "new-2",
      leftText: <>NEWSPAPER<br/><span style={{ fontSize: '13px', fontWeight: '700', color: '#555' }}>INSERTS</span><br/><span style={{ fontSize: '11px', fontWeight: '600', color: '#777' }}>BANGALORE</span></>,
      logoUrl: "", // Fallback only!
      fallback: <div className={styles.spendLogoFallback} style={{ display: 'flex', backgroundColor: '#fed7aa', color: '#ea580c', fontSize: '11px', flexDirection: 'column', gap: '2px', textAlign: 'center', lineHeight: '1.2' }}>📰<br/>INSERTS</div>
    },
    {
      rank: "#8",
      name: "Google App Install",
      category: "Digital",
      id: "dig-1",
      leftText: <>GOOGLE<br/><span style={{ fontSize: '14px', fontWeight: '700', color: '#555' }}>PLAYSTORE</span></>,
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/200px-Google_Play_Store_badge_EN.svg.png",
      fallback: <div className={styles.spendLogoFallback} style={{ display: 'none', backgroundColor: '#ffffff', color: '#10b981', fontSize: '24px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 3 L21 12 L3 21 Z" fill="currentColor"/></svg>
      </div>
    },
    {
      rank: "#9",
      name: "Facebook",
      category: "Digital",
      id: "dig-2",
      leftText: <>FACEBOOK</>,
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/200px-Facebook_Logo_%282019%29.png",
      fallback: <div className={styles.spendLogoFallback} style={{ display: 'none', backgroundColor: '#1877f2', color: '#ffffff', fontSize: '32px', fontWeight: 'bold' }}>f</div>
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'airport': return <FaPlane className="text-white text-3xl" />;
      case 'cinema': return <FaFilm className="text-white text-3xl" />;
      case 'outdoor': return <FaBroadcastTower className="text-white text-3xl" />;
      case 'nontraditional': return <FaBus className="text-white text-3xl" />;
      case 'television': return <FaTv className="text-white text-3xl" />;
      case 'radio': return <FaVolumeUp className="text-white text-3xl" />;
      case 'digital': return <FaLaptop className="text-white text-3xl" />;
      case 'sports': return <FaTrophy className="text-white text-3xl" />;
      case 'magazine': return <FaBook className="text-white text-3xl" />;
      case 'newspaper': return <FaNewspaper className="text-white text-3xl" />;
      case 'ctv': return <FaTv className="text-white text-3xl" />;
      default: return <FaBroadcastTower className="text-white text-3xl" />;
    }
  };

  // Latest Additions: First 10 items from mock database
  const latestList = mediaData.slice(0, 10);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '20px' }}>
      
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: AI CHATBOT BOX */}
      <AIChatbot />

      {/* SECTION 3: BROWSE MEDIA BY GENRE */}
      <GenreGrid />

      {/* SECTION 4: AGENCY PARTNER BANNER */}
      <section className="container">
        <div className={styles.agencyBanner}>
          <div className={styles.agencyLeft}>
            <h2 className={styles.agencyTitle}>Become an Agency Partner</h2>
            <p className={styles.agencySubtitle}>
              Get exclusive access to Advantage 360 – Plan, Compare & Sell Media Smarter with Real-Time Rates & Tools.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className={styles.agencyCta}
            >
              JOIN NOW
            </button>
          </div>
          <div className={styles.agencyRight}>
            <svg width="400" height="280" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Large Circle center */}
              <circle cx="200" cy="140" r="70" fill="rgba(255, 255, 255, 0.1)" />
              
              {/* Handshake graphic paths */}
              <path d="M 60,110 L 120,130 L 110,165 L 50,145 Z" fill="#4E3BC9" stroke="#ffffff" strokeWidth="2"/>
              <path d="M 340,110 L 280,130 L 290,165 L 350,145 Z" fill="#6C5CE7" stroke="#ffffff" strokeWidth="2"/>
              
              <path d="M 120,130 L 170,120 C 180,115 190,125 185,135 L 175,150 L 140,160 Z" fill="#ffb347" />
              <path d="M 280,130 L 230,120 C 220,115 210,125 215,135 L 225,150 L 260,160 Z" fill="#ffb347" />
              
              <path d="M 170,120 C 185,115 200,115 215,120 C 220,125 220,135 210,140 C 195,145 180,145 165,140 C 160,135 160,125 170,120 Z" fill="#ffb347" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M 185,125 Q 190,135 195,125" stroke="#ffffff" strokeWidth="2" fill="none" />
              <path d="M 190,130 Q 195,140 200,130" stroke="#ffffff" strokeWidth="2" fill="none" />
              <path d="M 195,135 Q 200,145 205,135" stroke="#ffffff" strokeWidth="2" fill="none" />
              
              {/* Floating Coins & Icons */}
              <g className={styles.float1}>
                <circle cx="100" cy="70" r="22" fill="#ffffff" />
                <text x="100" y="77" fontSize="20" fontWeight="bold" fill="#4E3BC9" textAnchor="middle">₹</text>
              </g>
              
              <g className={styles.float2}>
                <circle cx="300" cy="70" r="22" fill="#ffffff" />
                <rect x="288" y="65" width="6" height="12" fill="#4E3BC9" rx="1"/>
                <rect x="297" y="59" width="6" height="18" fill="#4E3BC9" rx="1"/>
                <rect x="306" y="53" width="6" height="24" fill="#4E3BC9" rx="1"/>
              </g>
              
              <g className={styles.float3}>
                <circle cx="200" cy="220" r="22" fill="#ffffff" />
                <circle cx="200" cy="220" r="14" fill="none" stroke="#4E3BC9" strokeWidth="2" />
                <path d="M 186,220 L 214,220" stroke="#4E3BC9" strokeWidth="1.5" />
                <path d="M 200,206 L 200,234" stroke="#4E3BC9" strokeWidth="1.5" />
                <path d="M 189,211 Q 200,220 211,211" fill="none" stroke="#4E3BC9" strokeWidth="1" />
                <path d="M 189,229 Q 200,220 211,229" fill="none" stroke="#4E3BC9" strokeWidth="1" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 5: TOP MEDIA SPENDS */}
      <section className="container" style={{ position: 'relative', overflow: 'visible' }}>
        <h2 className={styles.topSpendsTitle}>Top Media Spends</h2>
        
        {/* Left Navigation Arrow */}
        {showLeftArrow && (
          <button 
            type="button" 
            className={styles.scrollArrowLeft} 
            onClick={() => handleScroll('left')}
            aria-label="Scroll Left"
          >
            ‹
          </button>
        )}

        {/* Scroll Container */}
        <div 
          className={styles.spendsRow} 
          ref={scrollRef}
          onScroll={checkScrollArrows}
        >
          {topSpendsList.map((item) => (
            <div 
              key={item.rank} 
              className={styles.spendCard}
              onClick={() => navigate(`/media/${item.id}`)}
            >
              {/* Green Pentagon Rank Badge */}
              <div className={styles.spendRankBadge}>
                {item.rank}
              </div>

              {/* TOP SECTION (height: 150px) */}
              <div className={styles.spendTopSection}>
                {/* LEFT HALF (55% width) */}
                <div className={styles.spendLeftHalf}>
                  <div className={styles.spendPlatformName}>
                    {item.leftText}
                  </div>
                </div>

                {/* RIGHT HALF (45% width) */}
                <div className={styles.spendRightHalf}>
                  <div className={styles.spendLogoContainer}>
                    {item.logoUrl ? (
                      <>
                        <img 
                          src={item.logoUrl} 
                          alt={item.name} 
                          className={styles.spendLogoImg}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.nextSibling) {
                              e.currentTarget.nextSibling.style.display = 'flex';
                            }
                          }}
                        />
                        {item.fallback}
                      </>
                    ) : (
                      item.fallback
                    )}
                  </div>
                </div>
              </div>

              {/* BOTTOM SECTION (height: 70px) */}
              <div className={styles.spendBottomSection}>
                <div className={styles.spendBottomName}>{item.name}</div>
                <div className={styles.spendBottomCategory}>{item.category}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        {showRightArrow && (
          <button 
            type="button" 
            className={styles.scrollArrowRight} 
            onClick={() => handleScroll('right')}
            aria-label="Scroll Right"
          >
            ›
          </button>
        )}
      </section>

      {/* SECTION 6: LATEST ADDITIONS */}
      <section className={styles.latestAdditions}>
        <h2 className={styles.sectionTitle}>Latest Addition</h2>
        <div className={styles.latestRow}>
          {latestList.map((item) => (
            <div 
              key={item.id} 
              className={styles.latestCard}
              onClick={() => navigate(`/media/${item.id}`)}
            >
              <div className={styles.latestImage}>
                {/* Category specific symbol */}
                <FaStar className="text-white text-xl" />
              </div>
              <div className={styles.latestInfo}>
                <h3 className={styles.latestName}>{item.name}</h3>
                <span className={styles.latestTag}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: CONFUSED SECTION */}
      {/* SECTION 7: CONFUSED SECTION */}
      <section className={styles.confusedSection}>
        <div className={styles.confusedContent}>
          
          {/* LEFT TEXT */}
          <div className={styles.confusedLeft}>
            <span className={styles.confusedTag}>
              Completely Free!
            </span>
            <h2 className={styles.confusedTitle1}>
              Confused?
            </h2>
            <h2 className={styles.confusedTitle2}>
              We can help you plan the perfect campaign!
            </h2>
            <p className={styles.confusedSubtitle}>
              Hire our expert media planners to find, plan and place your next promotion.
            </p>
            <div className={styles.confusedBtnGroup}>
              <button 
                onClick={() => navigate('/contact')}
                className={styles.confusedBtn1}
              >
                Consult Media Planners
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className={styles.confusedBtn2}
              >
                Completely Free!
              </button>
            </div>
          </div>

          {/* RIGHT — Girl SVG */}
          <div className={styles.confusedRight}>
            <svg 
              viewBox="0 0 320 500"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.girlSvg}
            >
              {/* Question marks — left of girl */}
              <text x="10" y="120" fontSize="70" fill="#FF5722" fontWeight="900" fontFamily="Georgia,serif">?</text>
              <text x="60" y="200" fontSize="48" fill="#FF5722" fontWeight="900" fontFamily="Georgia,serif">?</text>

              {/* === HAIR — dark navy === */}
              <ellipse cx="195" cy="90" rx="105" ry="105" fill="#1a1744"/>
              {/* Right hair flowing down — touches right edge */}
              <path d="M285 95 Q315 180 315 320 Q315 420 300 500 L275 500 Q290 415 290 315 Q288 175 265 100 Z" fill="#1a1744"/>
              {/* Left hair */}
              <path d="M100 95 Q80 170 85 280 L98 278 Q93 168 112 98 Z" fill="#1a1744"/>
              {/* Top hair */}
              <path d="M100 60 Q145 20 195 18 Q250 20 285 55 Q300 75 295 100 Q265 70 195 68 Q130 68 100 95 Z" fill="#1a1744"/>

              {/* === FACE === */}
              <ellipse cx="195" cy="155" rx="88" ry="95" fill="#F5A876"/>

              {/* === EARS === */}
              <ellipse cx="108" cy="158" rx="13" ry="17" fill="#F5A876"/>
              <ellipse cx="282" cy="158" rx="13" ry="17" fill="#F5A876"/>

              {/* === GLASSES === */}
              {/* Left glass */}
              <circle cx="168" cy="152" r="28" fill="white" stroke="#1a1744" strokeWidth="4.5"/>
              {/* Right glass */}
              <circle cx="222" cy="152" r="28" fill="white" stroke="#1a1744" strokeWidth="4.5"/>
              {/* Bridge */}
              <line x1="196" y1="152" x2="194" y2="152" stroke="#1a1744" strokeWidth="4"/>
              {/* Arms */}
              <line x1="140" y1="149" x2="108" y2="145" stroke="#1a1744" strokeWidth="3.5"/>
              <line x1="250" y1="149" x2="282" y2="145" stroke="#1a1744" strokeWidth="3.5"/>

              {/* Left pupil */}
              <circle cx="168" cy="152" r="14" fill="#1a1744"/>
              <circle cx="162" cy="146" r="5" fill="white"/>

              {/* Right pupil */}
              <circle cx="222" cy="152" r="14" fill="#1a1744"/>
              <circle cx="216" cy="146" r="5" fill="white"/>

              {/* === EYEBROWS === */}
              <path d="M143 118 Q168 107 193 116" stroke="#1a1744" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
              <path d="M197 116 Q222 107 247 116" stroke="#1a1744" strokeWidth="4.5" fill="none" strokeLinecap="round"/>

              {/* === NOSE === */}
              <path d="M188 175 Q195 192 205 180" stroke="#d4754a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

              {/* === MOUTH — thinking/sad === */}
              <path d="M178 210 Q195 203 212 210" stroke="#c0502a" strokeWidth="3" fill="none" strokeLinecap="round"/>

              {/* === NECK === */}
              <rect x="178" y="242" width="34" height="38" rx="10" fill="#F5A876"/>

              {/* === TORSO — salmon pink top === */}
              <path d="M95 272 Q85 300 82 400 L315 400 Q315 300 305 272 Q278 255 195 250 Q115 255 95 272 Z" fill="#E8956D"/>

              {/* V-neck */}
              <path d="M178 256 L195 282 L212 256" fill="white" opacity="0.45"/>

              {/* === LEFT ARM — raised, finger on cheek === */}
              <path d="M100 282 Q65 268 48 248 Q32 226 40 205 Q48 188 65 192 Q80 196 85 216 Q92 238 100 262" stroke="#F5A876" strokeWidth="34" fill="none" strokeLinecap="round"/>
              <path d="M46 212 Q52 180 70 160 Q88 142 108 138" stroke="#F5A876" strokeWidth="30" fill="none" strokeLinecap="round"/>
              {/* Hand on cheek */}
              <circle cx="112" cy="134" r="18" fill="#F5A876"/>
              {/* Index finger up */}
              <rect x="106" y="104" width="13" height="34" rx="6.5" fill="#F5A876"/>
              {/* Other fingers */}
              <circle cx="100" cy="138" r="9" fill="#f09060"/>
              <circle cx="124" cy="136" r="9" fill="#f09060"/>

              {/* === RIGHT ARM — folded/crossed === */}
              <path d="M305 280 Q338 295 340 325 Q342 348 320 358 Q288 368 248 362 Q228 358 210 350" stroke="#E8956D" strokeWidth="32" fill="none" strokeLinecap="round"/>
              <circle cx="212" cy="350" r="19" fill="#F5A876"/>

              {/* === BOTTOM — dark pants crop === */}
              <rect x="82" y="388" width="233" height="112" fill="#1a1744"/>
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 8: POPULAR BLOG POSTS */}
      <section className={styles.blogsSection}>
        <div className={styles.blogsHeader}>
          <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>Popular Blog Posts</h2>
          <Link to="/about" className={styles.viewAll} style={{ fontSize: '14px', fontWeight: '600', color: 'var(--primary-color)' }}>
            View All
          </Link>
        </div>

        <div className={styles.blogsGrid}>
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className={styles.blogCard}
              onClick={() => navigate('/about')}
            >
              <div className={styles.blogImage}>
                <div className={styles.blogImageImg}></div>
              </div>
              <div className={styles.blogInfo}>
                <div className={styles.blogMeta}>
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className={styles.blogTitle}>{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS */}
      <TestimonialSlider />

      {/* SECTION 10: OUR CLIENTS */}
      <ClientLogos />

      {/* SECTION 11: FAQ */}
      <FAQSection />

      {/* SECTION A — "Looking for more information?" BANNER */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#5B21B6", minHeight: "280px" }}
      >
        <div className="max-w-6xl mx-auto px-8 py-16 
          flex flex-row items-center justify-between relative">

          {/* LEFT — text + button */}
          <div className="flex items-center gap-8 z-10">
            <h2 className="text-white font-bold text-3xl md:text-4xl">
              Looking for more information?
            </h2>
            <button
              onClick={() => navigate("/contact-us")}
              className="bg-green-500 hover:bg-green-600 text-white 
                font-bold px-8 py-3 rounded uppercase tracking-wider 
                whitespace-nowrap transition duration-200 flex-shrink-0"
            >
              Contact Us
            </button>
          </div>

          {/* RIGHT — Girl SVG (same style as Confused section) */}
          <div
            className="absolute hidden md:block"
            style={{ right: "0px", top: "-10px", width: "260px" }}
          >
            <svg
              viewBox="0 0 320 400"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", height: "320px", overflow: "visible" }}
            >
              {/* Hair */}
              <ellipse cx="160" cy="85" rx="90" ry="88" fill="#1a1744"/>
              <path d="M238 88 Q265 160 262 300 L245 300 
                Q248 158 222 92 Z" fill="#1a1744"/>
              <path d="M82 88 Q62 155 66 260 L80 258 
                Q76 152 95 92 Z" fill="#1a1744"/>
              <path d="M82 58 Q120 20 160 18 Q202 20 238 55 
                Q250 72 245 92 Q218 65 160 63 
                Q105 63 82 88 Z" fill="#1a1744"/>

              {/* Face */}
              <ellipse cx="160" cy="148" rx="80" ry="88" fill="#F5A876"/>

              {/* Ears */}
              <ellipse cx="82" cy="150" rx="12" ry="15" fill="#F5A876"/>
              <ellipse cx="238" cy="150" rx="12" ry="15" fill="#F5A876"/>

              {/* Glasses left */}
              <circle cx="136" cy="145" r="25" fill="white"
                stroke="#1a1744" strokeWidth="4"/>
              {/* Glasses right */}
              <circle cx="184" cy="145" r="25" fill="white"
                stroke="#1a1744" strokeWidth="4"/>
              {/* Bridge */}
              <line x1="161" y1="145" x2="159" y2="145"
                stroke="#1a1744" strokeWidth="4"/>
              {/* Arms */}
              <line x1="111" y1="142" x2="82" y2="138"
                stroke="#1a1744" strokeWidth="3.5"/>
              <line x1="209" y1="142" x2="238" y2="138"
                stroke="#1a1744" strokeWidth="3.5"/>

              {/* Pupils */}
              <circle cx="136" cy="145" r="12" fill="#1a1744"/>
              <circle cx="131" cy="140" r="4" fill="white"/>
              <circle cx="184" cy="145" r="12" fill="#1a1744"/>
              <circle cx="179" cy="140" r="4" fill="white"/>

              {/* Eyebrows */}
              <path d="M114 114 Q136 104 158 112"
                stroke="#1a1744" strokeWidth="4"
                fill="none" strokeLinecap="round"/>
              <path d="M162 112 Q184 103 206 112"
                stroke="#1a1744" strokeWidth="4"
                fill="none" strokeLinecap="round"/>

              {/* Nose */}
              <path d="M154 168 Q160 182 168 172"
                stroke="#d4754a" strokeWidth="2.5"
                fill="none" strokeLinecap="round"/>

              {/* Mouth */}
              <path d="M146 200 Q160 194 174 200"
                stroke="#c0502a" strokeWidth="3"
                fill="none" strokeLinecap="round"/>

              {/* Neck */}
              <rect x="145" y="228" width="30" height="32"
                rx="8" fill="#F5A876"/>

              {/* Torso */}
              <path d="M75 255 Q65 285 62 370
                L258 370 Q255 285 245 255
                Q220 240 160 236 Q102 240 75 255 Z"
                fill="#E8956D"/>

              {/* V-neck */}
              <path d="M145 242 L160 265 L175 242"
                fill="white" opacity="0.4"/>

              {/* Left arm — crossed/folded */}
              <path d="M78 262 Q48 272 42 300 
                Q38 322 58 330 Q82 338 110 328 
                Q135 320 145 305"
                stroke="#E8956D" strokeWidth="30"
                fill="none" strokeLinecap="round"/>
              <circle cx="148" cy="302" r="16" fill="#F5A876"/>

              {/* Right arm — crossed over */}
              <path d="M242 262 Q268 275 272 302 
                Q274 322 255 330"
                stroke="#E8956D" strokeWidth="28"
                fill="none" strokeLinecap="round"/>

              {/* Bottom crop — dark pants */}
              <rect x="62" y="358" width="196" height="80"
                fill="#1a1744"/>

            </svg>
          </div>

        </div>

        {/* Divider line */}
        <div className="max-w-6xl mx-auto px-8">
          <hr style={{ borderColor: "rgba(255,255,255,0.25)" }}/>
        </div>

        {/* Follow Us row */}
        <div className="max-w-6xl mx-auto px-8 py-8 
          flex items-center gap-6">
          <span className="text-white font-semibold text-xl">
            Follow Us
          </span>
          <div className="flex items-center gap-5">
            <a href="https://instagram.com" target="_blank" 
              rel="noreferrer">
              <FaInstagram className="text-white text-3xl 
                hover:text-pink-300 transition duration-200" />
            </a>
            <a href="https://facebook.com" target="_blank" 
              rel="noreferrer">
              <FaFacebook className="text-white text-3xl 
                hover:text-blue-300 transition duration-200" />
            </a>
            <a href="https://twitter.com" target="_blank" 
              rel="noreferrer">
              <FaTwitter className="text-white text-3xl 
                hover:text-sky-300 transition duration-200" />
            </a>
            <a href="https://linkedin.com" target="_blank" 
              rel="noreferrer">
              <FaLinkedinIn className="text-white text-3xl 
                hover:text-blue-200 transition duration-200" />
            </a>
          </div>
        </div>

      </section>

      {/* SECTION B — CERTIFICATION BAR */}
      <div className="bg-white py-5 px-8 flex justify-center">
        <div className="border border-gray-200 rounded-xl 
          px-10 py-4 flex items-center gap-6 
          shadow-sm max-w-lg w-full justify-center">

          {/* Google badge */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center 
              justify-center">
              <svg viewBox="0 0 48 48" width="36" height="36">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 
                  1.22 9.21 3.6l6.85-6.85C35.9 2.38 
                  30.47 0 24 0 14.62 0 6.51 5.38 
                  2.56 13.22l7.98 6.19C12.43 13.72 
                  17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57
                  -.15-3.09-.38-4.55H24v9.02h12.94c-.58 
                  2.96-2.26 5.48-4.78 7.18l7.73 6c4.51
                  -4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48
                  -1.45-.76-2.99-.76-4.59s.27-3.14.76
                  -4.59l-7.98-6.19C.92 16.46 0 20.12 
                  0 24c0 3.88.92 7.54 2.56 10.78l7.97
                  -6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 
                  11.93-2.13 15.89-5.81l-7.73-6c-2.15 
                  1.45-4.92 2.3-8.16 2.3-6.26 0-11.57
                  -4.22-13.47-9.91l-7.98 6.19C6.51 
                  42.62 14.62 48 24 48z"/>
              </svg>
            </div>
            <span className="text-xs text-gray-500 font-medium 
              leading-tight">Google<br/>Partner</span>
          </div>

          <div className="w-px h-10 bg-gray-200"/>

          {/* INS badge */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-700 rounded 
              flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                INS
              </span>
            </div>
            <span className="text-xs text-gray-500 font-medium 
              leading-tight">INS<br/>Accredited</span>
          </div>

          <div className="w-px h-10 bg-gray-200"/>

          <span className="text-gray-600 font-medium text-sm">
            Certified by <strong>Google</strong> and{" "}
            <strong>INS</strong>
          </span>

        </div>
      </div>
    </div>
  );
}
