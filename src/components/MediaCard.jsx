import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaHeart, FaRegHeart, FaPlane, FaFilm, FaLaptop, FaUsers, FaTv, 
  FaNewspaper, FaMapMarkerAlt, FaBus, FaBroadcastTower, FaVolumeUp, 
  FaTrophy, FaBook 
} from "react-icons/fa";
import { BagContext } from '../App';
import styles from './MediaCard.module.css';

export default function MediaCard({ item }) {
  const navigate = useNavigate();
  const { bagItems, addToBag, removeFromBag } = useContext(BagContext);
  const [favorite, setFavorite] = useState(false);

  // Check if item is in the bag
  const isInBag = bagItems.some((bagItem) => bagItem.id === item.id);

  const handleBagToggle = (e) => {
    e.stopPropagation();
    if (isInBag) {
      removeFromBag(item.id);
    } else {
      addToBag(item);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setFavorite(!favorite);
  };

  // Get matching icon based on category type
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'airport': return <FaPlane className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
      case 'cinema': return <FaFilm className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
      case 'outdoor': return <FaBroadcastTower className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
      case 'nontraditional': return <FaBus className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
      case 'television': return <FaTv className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
      case 'radio': return <FaVolumeUp className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
      case 'digital': return <FaLaptop className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
      case 'sports': return <FaTrophy className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
      case 'magazine': return <FaBook className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
      case 'influencer': return <FaUsers className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
      case 'newspaper': return <FaNewspaper className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
      case 'ctv': return <FaTv className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
      default: return <FaBroadcastTower className={styles.placeholderIcon} style={{ fontSize: '40px' }} />;
    }
  };

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(item.price);

  return (
    <div className={styles.card} onClick={() => navigate(`/media/${item.id}`)}>
      {/* Top Image Box */}
      <div className={styles.imageContainer}>
        {getCategoryIcon(item.category)}
        <span className={styles.categoryBadge}>{item.category}</span>
        <button
          type="button"
          className={`${styles.favoriteBtn} ${favorite ? styles.favoriteBtnActive : ''}`}
          onClick={handleFavoriteClick}
        >
          {favorite ? <FaHeart className="text-base text-red-500" /> : <FaRegHeart className="text-base text-gray-400" />}
        </button>
      </div>

      {/* Info Block */}
      <div className={styles.details}>
        <h3 className={styles.title} title={item.name}>{item.name}</h3>
        
        <div className={styles.metaRow}>
          <div className={styles.metaItem} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FaMapMarkerAlt className="text-gray-400 text-sm flex-shrink-0" />
            <span>{item.location}</span>
          </div>
          <div className={styles.metaItem} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FaUsers className="text-gray-400 text-sm flex-shrink-0" />
            <span>{item.reach}</span>
          </div>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>{formattedPrice}</span>
          <span className={styles.priceLabel}>{item.priceUnit}</span>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.addBtn} ${isInBag ? styles.addBtnActive : ''}`}
            onClick={handleBagToggle}
          >
            {isInBag ? 'Added to Bag' : 'Add to Bag'}
          </button>
        </div>
      </div>
    </div>
  );
}
