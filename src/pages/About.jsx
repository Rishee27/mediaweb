import { FaShieldAlt, FaFire, FaMicrochip, FaHeadphones } from "react-icons/fa";
import styles from './About.module.css';

export default function About() {
  const stats = [
    { value: '10,000+', label: 'Brands Served' },
    { value: '15,000+', label: 'Campaigns Launched' },
    { value: '3.5 Lakh+', label: 'Ad Options Available' }
  ];

  const team = [
    { name: 'Rohit Khandelwal', role: 'Founder & CEO', initials: 'RK' },
    { name: 'Shreya Iyer', role: 'Head of Media Planning', initials: 'SI' },
    { name: 'Nikhil Mehta', role: 'VP Operations', initials: 'NM' }
  ];

  const whyUs = [
    {
      title: 'Verified Log Proofs',
      desc: 'Get absolute transparency. Every single print release, radio check-log, and banner screenshot is uploaded directly to your tracking dashboard.',
      icon: <FaShieldAlt className={styles.whyIcon} style={{ fontSize: '28px' }} />
    },
    {
      title: 'Lowest Price Guarantee',
      desc: 'We buy in bulk directly from publishers and media partners, passing discounts back to you with zero hidden margins.',
      icon: <FaFire className={styles.whyIcon} style={{ fontSize: '28px' }} />
    },
    {
      title: 'Smart Media Allocation',
      desc: 'Use our AI planner algorithm to quickly map target audiences to channels and budgets, saving weeks of manual email chains.',
      icon: <FaMicrochip className={styles.whyIcon} style={{ fontSize: '28px' }} />
    },
    {
      title: 'Dedicated Campaign Managers',
      desc: 'Get expert planner support. Speak directly to campaign operators to customize delivery parameters and negotiate placements.',
      icon: <FaHeadphones className={styles.whyIcon} style={{ fontSize: '28px' }} />
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      
      {/* Hero Header */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>About The Owl Media</h1>
      </section>

      {/* Main Container */}
      <div className={styles.container}>
        
        {/* Story */}
        <section className={styles.section}>
          <h2 className={styles.title}>Our Story</h2>
          <p className={styles.text}>
            Launched in 2020, The Owl Media was founded on a simple insight: offline and online advertising planning is unnecessarily fragmented. Marketers spent weeks coordinating emails with separate representatives to get outdoor rate metrics, cinema lists, print specs, or digital OTT programmatic slots.
          </p>
          <p className={styles.text}>
            We built The Owl Media to bring complete transparency to media booking. Today, we aggregate inventory details for over 3.5 Lakh spaces across India, giving startups, SMEs, and agencies the self-serve capability to discover options, compare pricing, and deploy omni-channel campaigns in one unified dashboard.
          </p>
        </section>

        {/* Mission */}
        <section className={styles.section}>
          <h2 className={styles.title}>Our Mission</h2>
          <div className={styles.missionBox}>
            "Empowering All To Advertise"
          </div>
          <p className={styles.text} style={{ textAlign: 'center' }}>
            We believe that high-impact brand campaigns should not be exclusive to massive corporations. By democratizing access to data, rates, and execution systems, we enable brands of every size to reach their audience confidently.
          </p>
        </section>

        {/* Stats */}
        <section className={styles.section}>
          <div className={styles.statsRow}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <div className={styles.statVal}>{stat.value}</div>
                <div className={styles.statLbl}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className={styles.section}>
          <h2 className={styles.title}>Leadership Team</h2>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{member.initials}</div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.section}>
          <h2 className={styles.title}>Why Brands Trust Us</h2>
          <div className={styles.whyGrid}>
            {whyUs.map((feature) => (
              <div key={feature.title} className={styles.whyCard}>
                {feature.icon}
                <div>
                  <h3 className={styles.whyTitle}>{feature.title}</h3>
                  <p className={styles.whyDesc}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
