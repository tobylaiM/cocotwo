// src/components/Header.js
import React from 'react';
import { Search, HelpCircle, User } from 'lucide-react';
import { styles } from '../styles/styles';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}>
            <div style={styles.logoSquare}></div>
          </div>
          <span style={{ fontSize: '18px', fontWeight: '600' }}>Ask IDEAS</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={styles.searchContainer}>
            <Search style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search reports or query data"
              style={styles.searchInput}
            />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button style={styles.copilotButton}>
              IDEAS Copilot
            </button>
            <span style={{ color: '#fed7aa' }}>🤖</span>
          </div>
          
          <button style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>
            <HelpCircle size={20} />
          </button>
          
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#3b82f6',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;