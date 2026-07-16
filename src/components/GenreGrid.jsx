import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaPlane, FaFilm, FaLaptop, FaTv, FaBroadcastTower, 
  FaVolumeUp, FaTrophy, FaBook 
} from "react-icons/fa";
import styles from './GenreGrid.module.css';

export default function GenreGrid() {
  const navigate = useNavigate();

  const genres = [
    { name: 'Airport', path: '/airport', icon: <FaPlane className="text-3xl" style={{ color: '#4f46e5' }} />, bg: '#e0e7ff' },
    { name: 'Cinema', path: '/cinema', icon: <FaFilm className="text-3xl" style={{ color: '#db2777' }} />, bg: '#fce7f3' },
    { name: 'Digital', path: '/digital', icon: <FaLaptop className="text-3xl" style={{ color: '#9333ea' }} />, bg: '#f3e8ff' },
    { name: 'CTV', path: '/ctv', icon: <FaTv className="text-3xl" style={{ color: '#2563eb' }} />, bg: '#dbeafe' },
    { name: 'Outdoor', path: '/outdoor', icon: <FaBroadcastTower className="text-3xl" style={{ color: '#16a34a' }} />, bg: '#dcfce7' },
    { name: 'Radio', path: '/radio', icon: <FaVolumeUp className="text-3xl" style={{ color: '#ca8a04' }} />, bg: '#fef9c3' },
    { name: 'Sports', path: '/sports', icon: <FaTrophy className="text-3xl" style={{ color: '#ea580c' }} />, bg: '#ffedd5' },
    { name: 'Television', path: '/television', icon: <FaTv className="text-3xl" style={{ color: '#2563eb' }} />, bg: '#dbeafe' },
    { name: 'Magazine', path: '/magazine', icon: <FaBook className="text-3xl" style={{ color: '#dc2626' }} />, bg: '#fee2e2' }
  ];

  return (
    <section className={styles.container}>
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>Browse Media by Genre</h2>
      </div>

      <div className={styles.grid}>
        {genres.map((genre) => (
          <div
            key={genre.name}
            className={styles.card}
            onClick={() => navigate(genre.path)}
          >
            <div className={styles.iconWrapper} style={{ backgroundColor: genre.bg }}>
              {genre.icon}
            </div>
            <span className={styles.cardName}>{genre.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
