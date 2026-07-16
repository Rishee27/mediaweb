// ============================================================
// AIRPORT ADVERTISING DATA
// ============================================================

export const airportData = {
  title: "Airport Advertising",
  subtitle: "Reach high-income, frequent flyer audiences at India's busiest airports",
  heroStats: [
    { number: "25+", label: "Airports" },
    { number: "50Cr+", label: "Annual Passengers" },
    { number: "72%", label: "High Income Audience" },
    { number: "4.2x", label: "Brand Recall vs TV" }
  ],
  listings: [
    {
      id: "air-1",
      name: "Mumbai Airport - Terminal 2 Digital Screens",
      location: "Mumbai, Maharashtra",
      category: "airport",
      format: "Digital Screen",
      reach: "2,00,000 passengers/week",
      price: 75000,
      priceUnit: "per week",
      rating: 4.8,
      image: null,
      highlights: ["Chhatrapati Shivaji International", "T2 Departure Lounge", "High dwell time"],
      description: "Premium digital screen network in Mumbai's T2 terminal departure lounge. Target high-income travelers with dynamic content display.",
      audienceProfile: "Business travelers, frequent flyers, high-income group",
      available: true
    },
    {
      id: "air-2",
      name: "Delhi Airport - Aerobridge Branding",
      location: "New Delhi, Delhi",
      category: "airport",
      format: "Aerobridge Wrap",
      reach: "1,80,000 passengers/week",
      price: 65000,
      priceUnit: "per week",
      rating: 4.7,
      image: null,
      highlights: ["IGI Airport T3", "Full aerobridge wrap", "100% viewability"],
      description: "Full aerobridge branding at Indira Gandhi International Airport Terminal 3. Every passenger walks through your ad.",
      audienceProfile: "International & domestic travelers, corporate executives",
      available: true
    },
    {
      id: "air-3",
      name: "Bangalore Airport - Baggage Claim Display",
      location: "Bengaluru, Karnataka",
      category: "airport",
      format: "Static Display",
      reach: "1,20,000 passengers/week",
      price: 45000,
      priceUnit: "per week",
      rating: 4.6,
      image: null,
      highlights: ["KIAL Bengaluru", "High dwell area", "3-5 min average view time"],
      description: "Baggage claim area displays at Kempegowda International Airport. Captive audience waiting for luggage — average dwell time 3-5 minutes.",
      audienceProfile: "IT professionals, business travelers, tourists",
      available: true
    },
    {
      id: "air-4",
      name: "Hyderabad Airport - Check-in Counter Branding",
      location: "Hyderabad, Telangana",
      category: "airport",
      format: "Counter Branding",
      reach: "85,000 passengers/week",
      price: 35000,
      priceUnit: "per week",
      rating: 4.5,
      image: null,
      highlights: ["Rajiv Gandhi International", "Check-in queue branding", "Extended exposure"],
      description: "Check-in counter branding at Rajiv Gandhi International Airport. Long queue times mean extended brand exposure.",
      audienceProfile: "Business and leisure travelers",
      available: true
    },
    {
      id: "air-5",
      name: "Chennai Airport - Arrival Hall Display",
      location: "Chennai, Tamil Nadu",
      category: "airport",
      format: "LED Display",
      reach: "70,000 passengers/week",
      price: 28000,
      priceUnit: "per week",
      rating: 4.4,
      image: null,
      highlights: ["Chennai International", "Arrival hall", "First touchpoint for visitors"],
      description: "LED display panels in the arrival hall at Chennai International Airport. First thing passengers see on arrival.",
      audienceProfile: "Visitors to Chennai, business delegates, NRIs",
      available: true
    },
    {
      id: "air-6",
      name: "Pune Airport - Security Queue Standees",
      location: "Pune, Maharashtra",
      category: "airport",
      format: "Standee / Rollup",
      reach: "45,000 passengers/week",
      price: 18000,
      priceUnit: "per week",
      rating: 4.3,
      image: null,
      highlights: ["Lohegaon Airport", "Security zone", "Captive audience"],
      description: "Standee branding in security queue areas at Pune Airport. Passengers spend 10-15 minutes in queue — ideal brand exposure.",
      audienceProfile: "IT sector employees, business travelers, NRIs",
      available: true
    },
    {
      id: "air-7",
      name: "Kolkata Airport - Food Court Digital Screens",
      location: "Kolkata, West Bengal",
      category: "airport",
      format: "Digital Screen",
      reach: "60,000 passengers/week",
      price: 25000,
      priceUnit: "per week",
      rating: 4.4,
      image: null,
      highlights: ["NSCBI Airport", "Food court display", "Relaxed viewing environment"],
      description: "Digital screens in the food court area at Netaji Subhash Chandra Bose Airport. Relaxed atmosphere means longer ad engagement.",
      audienceProfile: "Leisure travelers, families, students",
      available: true
    },
    {
      id: "air-8",
      name: "Ahmedabad Airport - Departure Gate Branding",
      location: "Ahmedabad, Gujarat",
      category: "airport",
      format: "Gate Branding",
      reach: "55,000 passengers/week",
      price: 22000,
      priceUnit: "per week",
      rating: 4.3,
      image: null,
      highlights: ["Sardar Vallabhbhai Patel Airport", "Gate area", "15-30 min dwell time"],
      description: "Gate area branding at Ahmedabad Airport. Business community of Gujarat makes this a premium advertising spot.",
      audienceProfile: "Business community, traders, Gujarati NRIs",
      available: true
    },
    {
      id: "air-9",
      name: "Jaipur Airport - Lounge Branding",
      location: "Jaipur, Rajasthan",
      category: "airport",
      format: "Lounge Branding",
      reach: "35,000 passengers/week",
      price: 15000,
      priceUnit: "per week",
      rating: 4.2,
      image: null,
      highlights: ["Jaipur International Airport", "Lounge area", "Premium audience"],
      description: "Branding inside departure lounges at Jaipur Airport. Premium audience with extended dwell time — ideal for luxury brands.",
      audienceProfile: "Tourists, government officials, business travelers",
      available: true
    },
    {
      id: "air-10",
      name: "Goa Airport - Arrival Welcome Board",
      location: "Goa",
      category: "airport",
      format: "Welcome Board",
      reach: "80,000 passengers/week",
      price: 30000,
      priceUnit: "per week",
      rating: 4.6,
      image: null,
      highlights: ["Goa International Airport", "Tourist traffic", "Holiday mood audience"],
      description: "Welcome board branding at Goa Airport. Tourist-heavy traffic in holiday mood — perfect for hospitality, travel, and lifestyle brands.",
      audienceProfile: "Tourists, honeymooners, party travelers",
      available: true
    }
  ],
  formats: ["Digital Screen", "Aerobridge Wrap", "Static Display", "Counter Branding", 
            "LED Display", "Standee", "Gate Branding", "Lounge Branding", "Welcome Board"],
  locations: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
              "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Goa"],
  aboutSection: {
    title: "Why Advertise at Airports?",
    points: [
      { icon: "👔", title: "Premium Audience", desc: "72% of airport audience falls in SEC A & B — high income, decision makers" },
      { icon: "⏱️", title: "High Dwell Time", desc: "Average passenger spends 90 minutes at airport — longest dwell time of any OOH medium" },
      { icon: "🎯", title: "Captive Audience", desc: "No distractions, no choice — passengers must walk past your advertisement" },
      { icon: "🔄", title: "High Frequency", desc: "Business travelers fly multiple times per month — repeated brand exposure" }
    ]
  }
};

// ============================================================
// CINEMA ADVERTISING DATA  
// ============================================================

export const cinemaData = {
  title: "Cinema Advertising",
  subtitle: "Engage audiences in a dark room with 100% attention on your brand",
  heroStats: [
    { number: "9,000+", label: "Screens Across India" },
    { number: "3Cr+", label: "Weekly Footfall" },
    { number: "95%", label: "Ad Recall Rate" },
    { number: "2.5x", label: "Higher Engagement vs TV" }
  ],
  listings: [
    {
      id: "cin-1",
      name: "PVR Multiplex - Pan India Network",
      location: "Pan India",
      category: "cinema",
      format: "On-Screen Ad (30 sec)",
      reach: "50,00,000 viewers/week",
      price: 150000,
      priceUnit: "per week",
      rating: 4.9,
      image: null,
      highlights: ["1000+ PVR screens", "Premium multiplex audience", "Blockbuster slots available"],
      description: "Run your 30-second TVC on PVR's premium multiplex network across India. Reach upper-middle class and affluent audiences in an immersive environment.",
      audienceProfile: "Upper-middle class, families, youth, couples",
      available: true
    },
    {
      id: "cin-2",
      name: "INOX Multiplex - Metro Cities",
      location: "Mumbai, Delhi, Bangalore, Pune",
      category: "cinema",
      format: "On-Screen Ad (30 sec)",
      reach: "30,00,000 viewers/week",
      price: 100000,
      priceUnit: "per week",
      rating: 4.8,
      image: null,
      highlights: ["600+ INOX screens", "Metro city focus", "Premium seat viewers"],
      description: "INOX multiplex advertising across metro cities. Perfect for brands targeting urban, affluent audiences.",
      audienceProfile: "Young professionals, couples, urban families",
      available: true
    },
    {
      id: "cin-3",
      name: "Cinepolis - Tier 1 & 2 Cities",
      location: "Pan India (Tier 1 & 2)",
      category: "cinema",
      format: "On-Screen Ad (20 sec)",
      reach: "20,00,000 viewers/week",
      price: 75000,
      priceUnit: "per week",
      rating: 4.7,
      image: null,
      highlights: ["Tier 2 city penetration", "Growing audience", "Affordable rates"],
      description: "Reach tier 2 and tier 3 city audiences through Cinepolis network. Ideal for FMCG, e-commerce, and mass consumer brands.",
      audienceProfile: "Middle class, aspirational buyers, youth",
      available: true
    },
    {
      id: "cin-4",
      name: "PVR Mumbai - Lobby Standee",
      location: "Mumbai, Maharashtra",
      category: "cinema",
      format: "Lobby Standee",
      reach: "5,00,000 visitors/week",
      price: 25000,
      priceUnit: "per week",
      rating: 4.5,
      image: null,
      highlights: ["PVR Mumbai locations", "Lobby branding", "Pre-show engagement"],
      description: "Standee branding in PVR Mumbai lobbies. Engage audiences during the pre-show browsing and snack purchase window.",
      audienceProfile: "Movie-goers, families, couples",
      available: true
    },
    {
      id: "cin-5",
      name: "Ticket Sleeve Advertising - PVR INOX",
      location: "Pan India",
      category: "cinema",
      format: "Ticket Sleeve",
      reach: "10,00,000 tickets/week",
      price: 35000,
      priceUnit: "per week",
      rating: 4.4,
      image: null,
      highlights: ["Physical touchpoint", "Taken home by viewer", "High retention medium"],
      description: "Your brand printed on ticket sleeves handed to every movie-goer. Physical keepsake that travels home with the audience.",
      audienceProfile: "All cinema-goers",
      available: true
    },
    {
      id: "cin-6",
      name: "Popcorn Box Branding - Metro Multiplexes",
      location: "Mumbai, Delhi, Bangalore",
      category: "cinema",
      format: "Popcorn Box Print",
      reach: "8,00,000 boxes/week",
      price: 40000,
      priceUnit: "per week",
      rating: 4.6,
      image: null,
      highlights: ["In-hand branding", "90-min engagement", "Food mood audience"],
      description: "Brand printed on popcorn boxes served across metro multiplexes. Audiences hold your brand for the entire movie duration.",
      audienceProfile: "Families, youth, couples, food enthusiasts",
      available: true
    },
    {
      id: "cin-7",
      name: "Single Screen Cinema - North India",
      location: "UP, Bihar, Rajasthan, MP",
      category: "cinema",
      format: "Slide Show Ad",
      reach: "15,00,000 viewers/week",
      price: 20000,
      priceUnit: "per week",
      rating: 4.2,
      image: null,
      highlights: ["Mass reach", "Rural & semi-urban", "Hindi belt audience"],
      description: "Slideshow advertising in single-screen cinemas across North India. Reach mass audiences in Hindi-speaking states at very affordable rates.",
      audienceProfile: "Mass market, rural, semi-urban consumers",
      available: true
    },
    {
      id: "cin-8",
      name: "Digital Screen Foyer - Bangalore",
      location: "Bengaluru, Karnataka",
      category: "cinema",
      format: "Digital Foyer Screen",
      reach: "3,00,000 visitors/week",
      price: 18000,
      priceUnit: "per week",
      rating: 4.5,
      image: null,
      highlights: ["IT crowd", "Digital natives", "High disposable income"],
      description: "Digital screens in cinema foyers across Bangalore. Target the tech-savvy IT crowd with dynamic digital content.",
      audienceProfile: "IT professionals, tech consumers, young adults",
      available: true
    }
  ],
  formats: ["On-Screen Ad 30sec", "On-Screen Ad 20sec", "On-Screen Ad 10sec",
            "Lobby Standee", "Ticket Sleeve", "Popcorn Box", "Slide Show", "Digital Foyer Screen"],
  locations: ["Pan India", "Mumbai", "Delhi", "Bangalore", "Pune", "Chennai",
              "Hyderabad", "Kolkata", "North India", "South India"],
  aboutSection: {
    title: "Why Cinema Advertising Works",
    points: [
      { icon: "🎬", title: "100% Attention", desc: "Dark room, no phone usage, full screen — audiences are completely focused on screen" },
      { icon: "🔊", title: "Immersive Experience", desc: "Dolby surround sound + large screen = emotional brand connection impossible elsewhere" },
      { icon: "📊", title: "95% Ad Recall", desc: "Cinema ads have the highest recall rate of any advertising medium in India" },
      { icon: "👨👩👧", title: "Family Decision Makers", desc: "Cinema brings together the whole family — the key decision-making unit for most purchases" }
    ]
  }
};

// ============================================================
// OUTDOOR ADVERTISING DATA
// ============================================================

export const outdoorData = {
  title: "Outdoor Advertising",
  subtitle: "Dominate the streets with high-visibility outdoor advertising across India",
  heroStats: [
    { number: "1 Lakh+", label: "OOH Sites" },
    { number: "50+", label: "Cities Covered" },
    { number: "80%", label: "Urban Population Reach" },
    { number: "3x", label: "More Cost-Effective than TV" }
  ],
  listings: [
    {
      id: "out-1",
      name: "Mumbai Western Express Highway - Billboard",
      location: "Mumbai, Maharashtra",
      category: "outdoor",
      format: "Large Format Billboard",
      reach: "5,00,000 vehicles/day",
      price: 80000,
      priceUnit: "per month",
      rating: 4.9,
      image: null,
      highlights: ["WEH Mumbai", "40x20 ft billboard", "Premium commuter route"],
      description: "Large format billboard on Western Express Highway — Mumbai's busiest commuter route. 5 lakh vehicles pass daily.",
      audienceProfile: "Office commuters, business travelers, upper-middle class",
      available: true
    },
    {
      id: "out-2",
      name: "Delhi Connaught Place - Unipole",
      location: "New Delhi, Delhi",
      category: "outdoor",
      format: "Unipole",
      reach: "3,00,000 people/day",
      price: 65000,
      priceUnit: "per month",
      rating: 4.8,
      image: null,
      highlights: ["CP Central Delhi", "Premium location", "High footfall area"],
      description: "Unipole at Connaught Place — Delhi's most premium commercial hub. Massive footfall of shoppers, office workers, and tourists.",
      audienceProfile: "Shoppers, office workers, tourists, government officials",
      available: true
    },
    {
      id: "out-3",
      name: "Bangalore MG Road - LED Billboard",
      location: "Bengaluru, Karnataka",
      category: "outdoor",
      format: "LED Billboard",
      reach: "4,00,000 people/day",
      price: 70000,
      priceUnit: "per month",
      rating: 4.8,
      image: null,
      highlights: ["MG Road Bangalore", "LED display", "IT corridor"],
      description: "LED billboard on MG Road — Bangalore's prime commercial street. Dynamic content display reaching IT professionals and shoppers.",
      audienceProfile: "IT professionals, young adults, shoppers",
      available: true
    },
    {
      id: "out-4",
      name: "Hyderabad HITEC City - Hoarding",
      location: "Hyderabad, Telangana",
      category: "outdoor",
      format: "Hoarding",
      reach: "2,50,000 people/day",
      price: 45000,
      priceUnit: "per month",
      rating: 4.7,
      image: null,
      highlights: ["HITEC City IT hub", "Tech audience", "High income zone"],
      description: "Premium hoarding in HITEC City — Hyderabad's technology corridor. Reach India's largest concentration of IT professionals.",
      audienceProfile: "IT employees, tech professionals, entrepreneurs",
      available: true
    },
    {
      id: "out-5",
      name: "Pune Hinjewadi IT Park - Outdoor Hoarding",
      location: "Pune, Maharashtra",
      category: "outdoor",
      format: "Hoarding",
      reach: "1,50,000 people/day",
      price: 35000,
      priceUnit: "per month",
      rating: 4.6,
      image: null,
      highlights: ["Hinjewadi IT Park", "Tech workforce", "Morning commute"],
      description: "Outdoor hoarding near Hinjewadi IT Park — Pune's Silicon Valley. Daily captive audience of tech workers.",
      audienceProfile: "IT professionals, young working adults",
      available: true
    },
    {
      id: "out-6",
      name: "Chennai Anna Salai - Gantry",
      location: "Chennai, Tamil Nadu",
      category: "outdoor",
      format: "Gantry",
      reach: "3,50,000 vehicles/day",
      price: 55000,
      priceUnit: "per month",
      rating: 4.7,
      image: null,
      highlights: ["Anna Salai main road", "Gantry over highway", "North-South connectivity"],
      description: "Road gantry on Anna Salai — Chennai's main artery. Spans the full width of the road for maximum visibility.",
      audienceProfile: "Commuters, business travelers, shoppers",
      available: true
    },
    {
      id: "out-7",
      name: "Mumbai Local Train Station - Platform Hoarding",
      location: "Mumbai, Maharashtra",
      category: "outdoor",
      format: "Station Hoarding",
      reach: "8,00,000 commuters/day",
      price: 40000,
      priceUnit: "per month",
      rating: 4.8,
      image: null,
      highlights: ["Mumbai local network", "Mass reach", "Daily commuters"],
      description: "Platform hoardings across Mumbai local train stations. Reach 80 lakh daily commuters — the highest footfall OOH medium in India.",
      audienceProfile: "Mass market, office workers, students, daily commuters",
      available: true
    },
    {
      id: "out-8",
      name: "Delhi Metro Station - Lightbox",
      location: "New Delhi, Delhi",
      category: "outdoor",
      format: "Metro Station Lightbox",
      reach: "6,00,000 commuters/day",
      price: 50000,
      priceUnit: "per month",
      rating: 4.7,
      image: null,
      highlights: ["Delhi Metro network", "Captive audience", "High income commuters"],
      description: "Backlit lightbox displays inside Delhi Metro stations. Commuters have extended dwell time on platforms — ideal for brand building.",
      audienceProfile: "Middle to upper-middle class, young professionals, students",
      available: true
    },
    {
      id: "out-9",
      name: "Kolkata Park Street - Wall Mural",
      location: "Kolkata, West Bengal",
      category: "outdoor",
      format: "Wall Mural",
      reach: "2,00,000 people/day",
      price: 30000,
      priceUnit: "per month",
      rating: 4.5,
      image: null,
      highlights: ["Park Street Kolkata", "Cultural hub", "Instagram-worthy"],
      description: "Large wall mural on Park Street — Kolkata's cultural and social hub. Creates shareable, viral moments alongside strong brand visibility.",
      audienceProfile: "Youth, culturally-minded consumers, food & lifestyle audience",
      available: true
    },
    {
      id: "out-10",
      name: "Jaipur Pink City - Rickshaw Branding",
      location: "Jaipur, Rajasthan",
      category: "outdoor",
      format: "Transit Branding",
      reach: "1,00,000 tourists/day",
      price: 12000,
      priceUnit: "per month",
      rating: 4.4,
      image: null,
      highlights: ["Pink City Jaipur", "Tourist circuit", "Mobile medium"],
      description: "Auto-rickshaw branding across Jaipur's Pink City tourist circuit. Mobile advertising that follows tourists throughout their city journey.",
      audienceProfile: "Domestic & international tourists, local consumers",
      available: true
    }
  ],
  formats: ["Large Format Billboard", "Unipole", "LED Billboard", "Hoarding", 
            "Gantry", "Station Hoarding", "Metro Lightbox", "Wall Mural", "Transit Branding"],
  locations: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai", 
              "Kolkata", "Ahmedabad", "Jaipur", "Goa", "Lucknow", "Chandigarh"],
  aboutSection: {
    title: "Why Outdoor Advertising Works",
    points: [
      { icon: "👁️", title: "24/7 Visibility", desc: "Your brand is visible round the clock — no ad-skip, no ad-blocker possible" },
      { icon: "📍", title: "Hyperlocal Targeting", desc: "Place ads exactly where your target customers live, work, and shop" },
      { icon: "💪", title: "Brand Dominance", desc: "Large format outdoor creates a dominant brand presence in the market" },
      { icon: "💰", title: "Cost Effective", desc: "Lowest CPM (cost per thousand) of any major advertising medium" }
    ]
  }
};

// ============================================================
// TELEVISION ADVERTISING DATA
// ============================================================

export const televisionData = {
  title: "Television Advertising",
  subtitle: "Reach India's 90 crore TV viewers with impactful video advertisements",
  heroStats: [
    { number: "900+", label: "TV Channels" },
    { number: "90Cr+", label: "TV Viewers" },
    { number: "4.5hrs", label: "Daily TV Watch Time" },
    { number: "65%", label: "Households with TV" }
  ],
  listings: [
    {
      id: "tv-1",
      name: "Star Plus - Prime Time 30 sec TVC",
      location: "Pan India",
      category: "television",
      format: "30 sec TVC",
      reach: "5,00,00,000 viewers",
      price: 300000,
      priceUnit: "per 10 insertions",
      rating: 4.9,
      highlights: ["#1 Hindi GEC", "Prime time slot", "Saas-bahu drama audience"],
      description: "Prime time advertising on Star Plus — India's #1 Hindi general entertainment channel. Access India's largest drama-watching audience.",
      audienceProfile: "Housewives, families, Hindi-speaking India 25-54",
      available: true
    },
    {
      id: "tv-2",
      name: "Colors TV - Weekend Prime",
      location: "Pan India",
      category: "television",
      format: "30 sec TVC",
      reach: "3,50,00,000 viewers",
      price: 250000,
      priceUnit: "per 10 insertions",
      rating: 4.8,
      highlights: ["Top 3 Hindi GEC", "Reality show audience", "Bigg Boss property"],
      description: "Weekend prime time on Colors TV during high-rated reality shows. Massive engagement during Bigg Boss season.",
      audienceProfile: "Urban families, youth, Hindi-speaking belt",
      available: true
    },
    {
      id: "tv-3",
      name: "Sony SAB - Comedy Prime Time",
      location: "Pan India",
      category: "television",
      format: "20 sec TVC",
      reach: "2,00,00,000 viewers",
      price: 150000,
      priceUnit: "per 10 insertions",
      rating: 4.7,
      highlights: ["Family comedy channel", "Positive brand environment", "All age groups"],
      description: "Comedy prime time on Sony SAB. Family-friendly environment with all age group viewers — ideal for FMCG and family brands.",
      audienceProfile: "All age groups, families, positive sentiment audience",
      available: true
    },
    {
      id: "tv-4",
      name: "Sun TV - South India Prime",
      location: "Tamil Nadu & South India",
      category: "television",
      format: "30 sec TVC",
      reach: "4,00,00,000 viewers",
      price: 200000,
      priceUnit: "per 10 insertions",
      rating: 4.8,
      highlights: ["#1 Tamil channel", "South India dominance", "Serial audience"],
      description: "Prime time advertising on Sun TV — the #1 Tamil language channel with dominant reach across South India.",
      audienceProfile: "Tamil households, South Indian families, SEC B & C",
      available: true
    },
    {
      id: "tv-5",
      name: "Zee News - News Break Ads",
      location: "Pan India",
      category: "television",
      format: "10 sec TVC",
      reach: "1,50,00,000 viewers",
      price: 80000,
      priceUnit: "per 10 insertions",
      rating: 4.5,
      highlights: ["News channel", "Educated audience", "Breaking news slots"],
      description: "News break advertising on Zee News. Educated, urban, opinion-leading audience who are decision-makers.",
      audienceProfile: "Urban educated, professionals, news consumers aged 30-55",
      available: true
    },
    {
      id: "tv-6",
      name: "Star Sports - IPL Match Advertising",
      location: "Pan India",
      category: "television",
      format: "60 sec commercial",
      reach: "20,00,00,000 viewers/match",
      price: 1500000,
      priceUnit: "per match",
      rating: 5.0,
      highlights: ["IPL matches", "Highest rated property", "Male 18-45 audience"],
      description: "Prime advertising during IPL matches on Star Sports. India's highest-rated TV property with 20 crore+ viewers per match.",
      audienceProfile: "Males 18-45, sports enthusiasts, urban India",
      available: true
    },
    {
      id: "tv-7",
      name: "Regional Channel Package - 5 States",
      location: "Maharashtra, UP, MP, Bihar, Rajasthan",
      category: "television",
      format: "30 sec TVC",
      reach: "8,00,00,000 viewers",
      price: 175000,
      priceUnit: "per week",
      rating: 4.6,
      highlights: ["Hindi belt states", "Rural + urban mix", "Mass reach package"],
      description: "Combined regional channel package across 5 Hindi belt states. Best value for mass market FMCG and consumer brands.",
      audienceProfile: "Mass market, Hindi-speaking, urban + rural mix",
      available: true
    }
  ],
  formats: ["30 sec TVC", "20 sec TVC", "10 sec TVC", "60 sec Spot", 
            "L-Band", "Ticker", "Aston Band", "Sponsored Segment"],
  locations: ["Pan India", "North India", "South India", "Maharashtra", 
              "Tamil Nadu", "Bengal", "Gujarat", "Andhra Pradesh"],
  aboutSection: {
    title: "Why Television Advertising Works",
    points: [
      { icon: "📺", title: "Massive Reach", desc: "90 crore TV viewers — no other medium comes close to TV's reach in India" },
      { icon: "🎭", title: "Audio-Visual Impact", desc: "Combination of sight, sound and motion creates strongest brand impression" },
      { icon: "🏠", title: "Household Penetration", desc: "TV reaches all members of a household simultaneously — ideal for family brands" },
      { icon: "💫", title: "Premium Brand Image", desc: "TV presence builds brand credibility and premium perception in consumers' minds" }
    ]
  }
};

// ============================================================
// RADIO ADVERTISING DATA
// ============================================================

export const radioData = {
  title: "Radio Advertising",
  subtitle: "Connect with audiences during commute, work, and daily activities",
  heroStats: [
    { number: "65Cr+", label: "Radio Listeners" },
    { number: "400+", label: "Radio Stations" },
    { number: "3hrs", label: "Daily Listening Time" },
    { number: "30%", label: "Lower Cost than TV" }
  ],
  listings: [
    {
      id: "rad-1",
      name: "Radio Mirchi 98.3 - Mumbai Morning Drive",
      location: "Mumbai, Maharashtra",
      category: "radio",
      format: "30 sec Spot",
      reach: "25,00,000 listeners/day",
      price: 25000,
      priceUnit: "per day (10 spots)",
      rating: 4.8,
      highlights: ["#1 Mumbai station", "Morning 7-10am", "Office commuter audience"],
      description: "Morning drive time advertising on Radio Mirchi 98.3 Mumbai. Reach 25 lakh commuters heading to work in a receptive mindset.",
      audienceProfile: "Working professionals 22-45, urban commuters, SEC A & B",
      available: true
    },
    {
      id: "rad-2",
      name: "Red FM 93.5 - Delhi Evening Drive",
      location: "New Delhi, Delhi",
      category: "radio",
      format: "45 sec Spot",
      reach: "20,00,000 listeners/day",
      price: 22000,
      priceUnit: "per day (10 spots)",
      rating: 4.7,
      highlights: ["Red FM Delhi", "Evening 5-9pm", "Return commute"],
      description: "Evening drive time on Red FM 93.5 Delhi. Commuters returning home — relaxed, receptive mood for brand messages.",
      audienceProfile: "Working adults, youth, urban Delhi listeners",
      available: true
    },
    {
      id: "rad-3",
      name: "Big FM 92.7 - Pan India Network",
      location: "Pan India (45 cities)",
      category: "radio",
      format: "30 sec Spot",
      reach: "1,00,00,000 listeners/day",
      price: 80000,
      priceUnit: "per day",
      rating: 4.8,
      highlights: ["45-city network", "Widest radio reach", "Single buy Pan India"],
      description: "Pan India advertising on Big FM's 45-city network. Single insertion reaches audiences across all major Indian cities simultaneously.",
      audienceProfile: "Urban India, working class, youth, families",
      available: true
    },
    {
      id: "rad-4",
      name: "Radio City 91.1 - Bangalore",
      location: "Bengaluru, Karnataka",
      category: "radio",
      format: "30 sec Spot",
      reach: "12,00,000 listeners/day",
      price: 15000,
      priceUnit: "per day (10 spots)",
      rating: 4.6,
      highlights: ["Bangalore's top station", "IT crowd listener base", "English & Kannada"],
      description: "Advertising on Radio City 91.1 Bangalore. Preferred station of the city's massive IT workforce — highest income radio audience in South India.",
      audienceProfile: "IT professionals, young adults, Bangalore metro audience",
      available: true
    },
    {
      id: "rad-5",
      name: "Fever FM 104 - Mumbai",
      location: "Mumbai, Maharashtra",
      category: "radio",
      format: "20 sec Spot",
      reach: "15,00,000 listeners/day",
      price: 18000,
      priceUnit: "per day (10 spots)",
      rating: 4.6,
      highlights: ["English music station", "Youth audience", "Premium listenership"],
      description: "English music radio advertising on Fever FM 104 Mumbai. Premium English-speaking, high-income youth audience.",
      audienceProfile: "English-speaking youth 18-35, premium income, cosmopolitan",
      available: true
    },
    {
      id: "rad-6",
      name: "AIR FM Gold - Government & PSU Targeting",
      location: "Pan India",
      category: "radio",
      format: "30 sec Spot",
      reach: "5,00,00,000 listeners/day",
      price: 40000,
      priceUnit: "per day",
      rating: 4.4,
      highlights: ["Govt. radio network", "Rural + urban", "Widest geographical reach"],
      description: "All India Radio FM Gold reaches the widest geographical audience in India including rural areas. Essential for government schemes and mass brands.",
      audienceProfile: "Rural, semi-urban, government employees, older demographics",
      available: true
    }
  ],
  formats: ["10 sec Spot", "20 sec Spot", "30 sec Spot", "45 sec Spot", 
            "60 sec Spot", "RJ Mention", "Sponsored Show", "Contest Integration"],
  locations: ["Pan India", "Mumbai", "Delhi", "Bangalore", "Hyderabad", 
              "Chennai", "Pune", "Kolkata", "Ahmedabad", "Jaipur"],
  aboutSection: {
    title: "Why Radio Advertising Works",
    points: [
      { icon: "🚗", title: "Commute Companion", desc: "Radio reaches audiences during commute — when they are most receptive to messages" },
      { icon: "🔄", title: "High Frequency", desc: "Radio allows highest frequency of any medium — repeat exposure builds strong brand recall" },
      { icon: "💰", title: "Cost Effective", desc: "Lowest production cost + affordable airtime = best ROI for local businesses" },
      { icon: "🎯", title: "City-Level Targeting", desc: "Target specific cities, neighborhoods, and even time bands with precision" }
    ]
  }
};

// ============================================================
// DIGITAL ADVERTISING DATA
// ============================================================

export const digitalData = {
  title: "Digital Advertising",
  subtitle: "Precision-targeted digital campaigns across India's largest digital platforms",
  heroStats: [
    { number: "75Cr+", label: "Internet Users" },
    { number: "50Cr+", label: "Social Media Users" },
    { number: "6hrs", label: "Daily Screen Time" },
    { number: "100%", label: "Measurable ROI" }
  ],
  listings: [
    {
      id: "dig-1",
      name: "Google Search Ads",
      location: "Pan India / Global",
      category: "digital",
      format: "Search Ad (CPC)",
      reach: "50Cr+ monthly searches",
      price: 15,
      priceUnit: "per click (CPC)",
      rating: 4.9,
      highlights: ["High intent audience", "Pay per click", "Instant results"],
      description: "Google Search Ads reach users actively searching for your product or service. Highest intent audience — they want what you offer.",
      audienceProfile: "Active searchers with high purchase intent",
      available: true
    },
    {
      id: "dig-2",
      name: "Facebook & Instagram Feed Ads",
      location: "Pan India",
      category: "digital",
      format: "Feed Ad (CPM/CPC)",
      reach: "35Cr+ Indian users",
      price: 120,
      priceUnit: "per 1000 impressions (CPM)",
      rating: 4.8,
      highlights: ["Demographic targeting", "Interest targeting", "Lookalike audience"],
      description: "Meta's Facebook and Instagram feed advertising with India's most advanced demographic and interest-based targeting.",
      audienceProfile: "Highly targetable — any demographic, interest, behavior",
      available: true
    },
    {
      id: "dig-3",
      name: "YouTube Pre-Roll Video Ads",
      location: "Pan India",
      category: "digital",
      format: "Video Ad (CPV)",
      reach: "50Cr+ monthly users",
      price: 1.5,
      priceUnit: "per view (CPV)",
      rating: 4.8,
      highlights: ["Video format", "Skippable & non-skippable", "Brand storytelling"],
      description: "YouTube video advertising — India's largest video platform. Tell your brand story to 50 crore monthly users.",
      audienceProfile: "All demographics, entertainment seekers, learners",
      available: true
    },
    {
      id: "dig-4",
      name: "JioHotstar OTT Advertising",
      location: "Pan India",
      category: "digital",
      format: "OTT Video Ad",
      reach: "25Cr+ subscribers",
      price: 350,
      priceUnit: "per 1000 impressions",
      rating: 4.9,
      highlights: ["Premium OTT", "IPL streaming", "Ad-free paid users see ads only here"],
      description: "Advertise on JioHotstar — India's #1 OTT platform with IPL, Bollywood, and Hollywood content. Premium, engaged audience.",
      audienceProfile: "Premium subscribers, urban, high income, sports fans",
      available: true
    },
    {
      id: "dig-5",
      name: "Instagram Reels Ads",
      location: "Pan India",
      category: "digital",
      format: "Reels Video Ad",
      reach: "25Cr+ Indian users",
      price: 150,
      priceUnit: "per 1000 impressions",
      rating: 4.7,
      highlights: ["Short video format", "Youth audience", "High engagement"],
      description: "Instagram Reels advertising — the fastest growing content format in India. Perfect for brand awareness among 18-35 urban audience.",
      audienceProfile: "Youth 18-35, fashion, beauty, food, lifestyle enthusiasts",
      available: true
    },
    {
      id: "dig-6",
      name: "Google Display Network",
      location: "Pan India / Global",
      category: "digital",
      format: "Display Banner (CPM)",
      reach: "2M+ websites & apps",
      price: 60,
      priceUnit: "per 1000 impressions",
      rating: 4.6,
      highlights: ["2 million+ sites", "Retargeting capability", "Visual brand building"],
      description: "Google Display Network reaches users across 2 million websites and apps. Powerful for retargeting and brand awareness campaigns.",
      audienceProfile: "Web browsers, retargeted visitors, contextual audiences",
      available: true
    },
    {
      id: "dig-7",
      name: "LinkedIn Ads - B2B Targeting",
      location: "Pan India",
      category: "digital",
      format: "Sponsored Content",
      reach: "10Cr+ professionals",
      price: 400,
      priceUnit: "per 1000 impressions",
      rating: 4.7,
      highlights: ["Professional audience", "Job title targeting", "B2B marketing"],
      description: "LinkedIn advertising for B2B brands. Target by job title, company, industry, seniority — the only platform for true B2B targeting in India.",
      audienceProfile: "Business professionals, decision-makers, C-suite executives",
      available: true
    },
    {
      id: "dig-8",
      name: "MX Player In-App Ads",
      location: "Pan India",
      category: "digital",
      format: "In-App Video Ad",
      reach: "30Cr+ monthly users",
      price: 180,
      priceUnit: "per 1000 impressions",
      rating: 4.6,
      highlights: ["Free OTT users", "Tier 2 & 3 India", "Entertainment content"],
      description: "MX Player in-app advertising reaches India's free OTT audience across tier 2 and tier 3 cities. Mass digital reach at affordable CPM.",
      audienceProfile: "Mass market, Tier 2-3 India, entertainment seekers",
      available: true
    }
  ],
  formats: ["Search Ad CPC", "Display CPM", "Video CPV", "OTT Video", 
            "Social Media Feed", "Reels/Shorts", "Native Ad", "Programmatic"],
  locations: ["Pan India", "Metro Cities", "Tier 2 Cities", "Global"],
  aboutSection: {
    title: "Why Digital Advertising Works",
    points: [
      { icon: "🎯", title: "Precision Targeting", desc: "Target by age, gender, city, interest, behavior — zero wasted impressions" },
      { icon: "📊", title: "100% Measurable", desc: "Track every click, view, conversion in real-time — know exactly what works" },
      { icon: "⚡", title: "Instant Results", desc: "Campaigns can go live in hours — see results the same day you launch" },
      { icon: "💰", title: "Any Budget", desc: "Start from ₹500/day — digital is the only medium accessible to every business size" }
    ]
  }
};

// ============================================================
// SPORTS ADVERTISING DATA
// ============================================================

export const sportsData = {
  title: "Sports Marketing",
  subtitle: "Connect your brand with India's passion for cricket, football and sports",
  heroStats: [
    { number: "100Cr+", label: "Sports Fans in India" },
    { number: "50Cr+", label: "Watched IPL 2024" },
    { number: "4x", label: "Higher Engagement" },
    { number: "85%", label: "Youth 18-35 Audience" }
  ],
  listings: [
    {
      id: "spo-1",
      name: "IPL 2025 - Stadium Perimeter Branding",
      location: "Pan India (10 IPL venues)",
      category: "sports",
      format: "Stadium Perimeter Board",
      reach: "30,000 live + 5Cr TV viewers/match",
      price: 800000,
      priceUnit: "per match",
      rating: 5.0,
      highlights: ["IPL 2025", "Live + TV exposure", "Brand visibility on every replay"],
      description: "Perimeter board branding at IPL matches — visible to 30,000 live fans and 5 crore TV viewers per match. Your brand on every highlight and replay.",
      audienceProfile: "Cricket fans, male 18-45, sports enthusiasts, urban India",
      available: true
    },
    {
      id: "spo-2",
      name: "IPL 2025 - Team Jersey Sponsorship",
      location: "Pan India",
      category: "sports",
      format: "Jersey Branding",
      reach: "74 matches season coverage",
      price: 5000000,
      priceUnit: "per season",
      rating: 5.0,
      highlights: ["Season-long visibility", "Most photographed sportswear", "Global reach"],
      description: "Brand logo on IPL team jersey — visible across all 74 matches, press conferences, social media, and merchandise throughout the season.",
      audienceProfile: "All cricket fans, global Indian diaspora",
      available: true
    },
    {
      id: "spo-3",
      name: "Pro Kabaddi League - Ground Branding",
      location: "Pan India",
      category: "sports",
      format: "Ground Branding",
      reach: "10,000 live + 1Cr TV viewers/match",
      price: 150000,
      priceUnit: "per match",
      rating: 4.7,
      highlights: ["Fast-growing league", "Rural + urban audience", "Affordable entry"],
      description: "Ground branding at Pro Kabaddi League matches. India's second most watched sports league with strong rural heartland audience.",
      audienceProfile: "Mass market, rural + urban, sports fans, 18-50",
      available: true
    },
    {
      id: "spo-4",
      name: "ISL Football - Stadium Banners",
      location: "Mumbai, Delhi, Kolkata, Chennai, Goa",
      category: "sports",
      format: "Stadium Banner",
      reach: "20,000 live + 50L TV viewers/match",
      price: 200000,
      priceUnit: "per match",
      rating: 4.6,
      highlights: ["Indian Super League", "Youth football fans", "Growing viewership"],
      description: "Banner advertising at Indian Super League football matches. Target India's young, urban, modern sports fan base.",
      audienceProfile: "Youth 18-35, urban, football fans, brand-conscious consumers",
      available: true
    },
    {
      id: "spo-5",
      name: "Cricket Ground - Boundary Rope Branding",
      location: "Multiple venues",
      category: "sports",
      format: "Boundary Rope",
      reach: "Varies by match",
      price: 50000,
      priceUnit: "per match",
      rating: 4.5,
      highlights: ["On-ground presence", "TV close-ups", "Budget option"],
      description: "Boundary rope branding at domestic cricket matches. Visible in every wide-angle shot broadcast on television.",
      audienceProfile: "Cricket fans, sports viewers",
      available: true
    },
    {
      id: "spo-6",
      name: "Badminton Premier League - Court Side",
      location: "Delhi, Hyderabad, Bangalore, Mumbai",
      category: "sports",
      format: "Courtside Branding",
      reach: "5,000 live + 20L TV viewers/match",
      price: 75000,
      priceUnit: "per match",
      rating: 4.4,
      highlights: ["Premium indoor sport", "Upper class audience", "Growing viewership"],
      description: "Courtside branding at Badminton Premier League. Premium indoor sport attracting upper-class, educated audience.",
      audienceProfile: "Upper-middle class, educated professionals, family audience",
      available: true
    }
  ],
  formats: ["Perimeter Board", "Jersey Branding", "Ground Banner", "Boundary Rope", 
            "Courtside Branding", "Digital Scoreboard", "PA Announcement", "Fan Zone Activation"],
  locations: ["Pan India", "Mumbai", "Delhi", "Kolkata", "Chennai", "Bangalore", 
              "Hyderabad", "Goa", "Ahmedabad", "Pune"],
  aboutSection: {
    title: "Why Sports Advertising Works",
    points: [
      { icon: "❤️", title: "Emotional Connection", desc: "Sports fans have the strongest brand affinity — loyalty to sponsors mirrors loyalty to their team" },
      { icon: "👥", title: "Social Viewing", desc: "Sports is watched together — your ad gets multiple viewers and discussions" },
      { icon: "📱", title: "Multi-Screen Reach", desc: "Sports content is consumed on TV, mobile, OTT simultaneously — maximum touchpoints" },
      { icon: "🌍", title: "Pan India Reach", desc: "IPL and cricket unite all of India — no other medium crosses language and regional barriers like sports" }
    ]
  }
};

// ============================================================
// CTV ADVERTISING DATA
// ============================================================

export const ctvData = {
  title: "CTV Advertising",
  subtitle: "Reach cord-cutting audiences on Connected TV and Smart TV screens",
  heroStats: [
    { number: "10Cr+", label: "Smart TV Homes" },
    { number: "4hrs", label: "Daily CTV Watch Time" },
    { number: "95%", label: "Completion Rate" },
    { number: "3x", label: "Higher Recall vs Mobile" }
  ],
  listings: [
    {
      id: "ctv-1",
      name: "JioHotstar CTV - Pre-Roll",
      location: "Pan India",
      category: "ctv",
      format: "15 sec Pre-Roll",
      reach: "5Cr Smart TV households",
      price: 500,
      priceUnit: "per 1000 impressions",
      rating: 4.9,
      highlights: ["#1 OTT platform", "Smart TV audience", "Premium content adjacency"],
      description: "Pre-roll advertising on JioHotstar's Connected TV app. Reach premium households watching Bollywood, Hollywood, and cricket on big screens.",
      audienceProfile: "Premium households, high income, urban SEC A",
      available: true
    },
    {
      id: "ctv-2",
      name: "Amazon Prime Video CTV Ads",
      location: "Pan India",
      category: "ctv",
      format: "30 sec Video Ad",
      reach: "3Cr CTV households",
      price: 600,
      priceUnit: "per 1000 impressions",
      rating: 4.8,
      highlights: ["Premium OTT", "High income audience", "International content"],
      description: "CTV advertising on Amazon Prime Video. India's most premium OTT platform audience — high income, urban, educated households.",
      audienceProfile: "Premium income, urban, educated, 25-45",
      available: true
    },
    {
      id: "ctv-3",
      name: "Samsung Smart TV - Home Screen Ad",
      location: "Pan India",
      category: "ctv",
      format: "Home Screen Banner",
      reach: "2Cr Samsung TV users",
      price: 400,
      priceUnit: "per 1000 impressions",
      rating: 4.7,
      highlights: ["Samsung TV ecosystem", "Home screen placement", "First screen brands see"],
      description: "Home screen advertising on Samsung Smart TVs. Your brand is the first thing users see every time they turn on their TV.",
      audienceProfile: "Samsung TV owners, upper-middle class, tech-savvy households",
      available: true
    }
  ],
  formats: ["Pre-Roll 15sec", "Pre-Roll 30sec", "Mid-Roll", "Pause Ad", "Home Screen Banner", "Content Integration"],
  locations: ["Pan India", "Metro Cities", "Tier 1 Cities"],
  aboutSection: {
    title: "Why CTV Advertising is the Future",
    points: [
      { icon: "📺", title: "Big Screen Impact", desc: "TV-sized screen with digital targeting precision — best of both worlds" },
      { icon: "🎯", title: "Household Targeting", desc: "Target households by income, location, content preference — impossible on traditional TV" },
      { icon: "📊", title: "Fully Measurable", desc: "Unlike traditional TV, CTV gives complete view-through and conversion tracking" },
      { icon: "🚀", title: "Fastest Growing", desc: "CTV audience is growing 40% YoY — early movers get best rates and inventory" }
    ]
  }
};

// ============================================================
// MAGAZINE ADVERTISING DATA
// ============================================================

// ============================================================
// MAGAZINE ADVERTISING DATA
// ============================================================

export const magazineData = {
  title: "Magazine Advertising",
  subtitle: "Premium print advertising in India's most trusted publications",
  heroStats: [
    { number: "150+", label: "Magazines" },
    { number: "2Cr+", label: "Monthly Readership" },
    { number: "80%", label: "Decision Makers" },
    { number: "3.5x", label: "Longer Shelf Life vs Newspaper" }
  ],
  listings: [
    {
      id: "mag-1",
      name: "India Today - Full Page Ad",
      location: "Pan India",
      category: "magazine",
      format: "Full Page Color",
      reach: "15,00,000 readers/month",
      price: 120000,
      priceUnit: "per insertion",
      rating: 4.8,
      highlights: ["#1 News magazine", "Premium print quality", "High-profile readers"],
      description: "Full-page color advertisement in India Today, the country's most respected weekly news magazine. Target corporate leaders and policy makers.",
      audienceProfile: "Corporate executives, policymakers, opinion leaders",
      available: true
    },
    {
      id: "mag-2",
      name: "Forbes India - Back Cover",
      location: "Pan India",
      category: "magazine",
      format: "Back Cover",
      reach: "8,00,00,000 readers/month",
      price: 250000,
      priceUnit: "per insertion",
      rating: 4.9,
      highlights: ["Premium business monthly", "Back cover dominance", "High net worth audience"],
      description: "Back cover advertisement in Forbes India. Unmatched visibility among business owners, investors, and startup founders.",
      audienceProfile: "HNIs, CEOs, business owners, investors",
      available: true
    },
    {
      id: "mag-3",
      name: "Vogue India - Inside Page",
      location: "Pan India",
      category: "magazine",
      format: "Inside Page Color",
      reach: "5,00,00,000 readers/month",
      price: 180000,
      priceUnit: "per insertion",
      rating: 4.7,
      highlights: ["#1 Fashion magazine", "High brand association", "Premium paper quality"],
      description: "Inside page color ad in Vogue India. Ideal for luxury fashion, jewelry, beauty, and premium lifestyle brands.",
      audienceProfile: "Affluent women, fashion enthusiasts, brand lovers",
      available: true
    }
  ],
  formats: ["Full Page Color", "Half Page", "Double Spread", "Back Cover", "Inside Cover"],
  locations: ["Pan India"],
  aboutSection: {
    title: "Why Advertise in Magazines?",
    points: [
      { icon: "📖", title: "High Trust", desc: "Magazines are trusted source of content — advertising benefits from this authority" },
      { icon: "⏳", title: "Long Shelf Life", desc: "Magazines lie on coffee tables for months — repeated exposure over weeks" },
      { icon: "🎨", title: "Glossy Quality", desc: "Superior print and paper quality makes luxury brands look exceptionally premium" },
      { icon: "🎯", title: "Niche Targeting", desc: "Reach exact interests (business, fashion, tech, sports) without spillover" }
    ]
  }
};


// ============================================================
// COMBINED MEDIA DATA ARRAY
// ============================================================

export const mediaData = [
  ...airportData.listings,
  ...cinemaData.listings,
  ...outdoorData.listings,
  ...televisionData.listings,
  ...radioData.listings,
  ...digitalData.listings,
  ...sportsData.listings,
  ...ctvData.listings,
  ...magazineData.listings
];

export const blogPosts = [
  {
    id: 1,
    title: "How to Plan an Outdoor Campaign in Mumbai",
    summary: "Discover the best locations, rate formats, and tracking tools to execute billboards.",
    date: "July 12, 2026",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Why CTV Advertising is Dominating Metro Cities",
    summary: "Connected TV has grown 40% YoY. Here is how modern brands leverage it.",
    date: "July 10, 2026",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "FMCG Brand Strategy: Combined TV & Cinema Ads",
    summary: "A study on why running television ads along with pre-rolls boosts recall.",
    date: "July 08, 2026",
    readTime: "6 min read"
  }
];

export const testimonials = [
  {
    quote: "The Owl Media cut down our offline media booking cycle from 3 weeks to just 2 days. The verified log proofs gave us total peace of mind.",
    author: "Aditya Sen",
    role: "Brand Director, StyleUp"
  },
  {
    quote: "The programmatic digital OTT and CTV ads performed exceptionally. The dashboard reporting is clear and real-time.",
    author: "Pooja Hegde",
    role: "Marketing VP, FinGlow"
  }
];
