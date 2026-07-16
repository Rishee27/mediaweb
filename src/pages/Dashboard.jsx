import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaShoppingBag, FaQuestionCircle, FaCheckCircle } from "react-icons/fa";
import { BagContext } from '../App';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const { bagItems, removeFromBag, totalPrice, clearBag } = useContext(BagContext);

  const gstTax = totalPrice * 0.18;
  const grandTotal = totalPrice + gstTax;

  const handleCheckout = () => {
    alert('Thank you for booking with The Owl Media! Our expert media planners will verify availability and send execution logs within 24 hours.');
    clearBag();
    navigate('/');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Your Campaign Bag</h1>

        <div className={styles.layout}>
          {/* Left section: items in bag */}
          <div className={styles.leftSection}>
            <h2 className={styles.sectionTitle}>Campaign Items ({bagItems.length})</h2>

            {bagItems.length > 0 ? (
              bagItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <div className={styles.itemMeta}>
                      <span>📍 {item.location}</span>
                      <span>👥 {item.reach}</span>
                      <span style={{ textTransform: 'capitalize' }}>🏷️ {item.category}</span>
                    </div>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemPrice}>{formatCurrency(item.price)}</span>
                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={() => removeFromBag(item.id)}
                      title="Remove from Bag"
                    >
                      <FaTrash style={{ fontSize: '16px' }} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.emptyState}>
                <FaShoppingBag className="text-gray-400 text-3xl" style={{ fontSize: '48px', marginBottom: '16px' }} />
                <h3>Your bag is empty</h3>
                <p style={{ fontSize: '13px', marginTop: '6px' }}>
                  Explore categories to find the best rates for your advertising campaign.
                </p>
                <Link to="/find" className={styles.browseBtn}>
                  Browse Media Options
                </Link>
              </div>
            )}
          </div>

          {/* Right section: summary billing checkout */}
          <aside className={styles.rightSection}>
            <h2 className={styles.sectionTitle} style={{ borderBottom: '1px solid #f2f0f9', paddingBottom: '12px' }}>
              Summary
            </h2>

            <div style={{ marginTop: '16px' }}>
              <div className={styles.summaryRow}>
                <span>Subtotal ({bagItems.length} items)</span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>GST Tax (18%)</span>
                <span>{formatCurrency(gstTax)}</span>
              </div>

              <div className={styles.totalRow}>
                <span>Total Budget</span>
                <span>{formatCurrency(grandTotal)}</span>
              </div>

              <button
                type="button"
                className={styles.checkoutBtn}
                disabled={bagItems.length === 0}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>

              <Link to="/contact" className={styles.helpLink}>
                <HelpCircle size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                Get Expert Help
              </Link>
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
}
