import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div style={{ backgroundColor: '#faf9ff', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
      <FaQuestionCircle className="text-gray-400 text-3xl" style={{ fontSize: '64px', marginBottom: '20px', color: 'var(--primary-color)' }} />
      <h1 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '10px' }}>
        404 - Page Not Found
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '15px' }}>
        The page you are looking for does not exist or has been relocated.
      </p>
      <Link 
        to="/" 
        style={{ backgroundColor: 'var(--primary-color)', color: '#ffffff', fontWeight: '700', padding: '12px 28px', borderRadius: 'var(--border-radius-btn)', fontSize: '14px' }}
      >
        Return to Homepage
      </Link>
    </div>
  );
}
