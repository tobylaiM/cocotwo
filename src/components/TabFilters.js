// src/components/TabFilters.js
import React from 'react';
import { AlertTriangle, ChevronRight, Settings } from 'lucide-react';
import { styles } from '../styles/styles';

const TabFilters = ({ toggleState, setToggleState }) => {
  return (
    <div style={styles.filters}>
      <div style={styles.filterGroup}>
        <div style={styles.filterItem}>
          <span style={styles.filterLabel}>Platform:</span>
          <select style={styles.select}>
            <option>All</option>
          </select>
        </div>
        
        <div style={styles.filterItem}>
          <span style={styles.filterLabel}>Operating System:</span>
          <select style={styles.select}>
            <option>All</option>
          </select>
        </div>
        
        <div style={styles.filterItem}>
          <span style={styles.filterLabel}>Customer Segment:</span>
          <select style={styles.select}>
            <option>All</option>
          </select>
        </div>
        
        <div style={styles.filterItem}>
          <span style={styles.filterLabel}>Area:</span>
          <select style={styles.select}>
            <option>All</option>
          </select>
        </div>
        
        <div style={styles.filterItem}>
          <span style={styles.filterLabel}>Area Summary:</span>
          <select style={styles.select}>
            <option>All</option>
          </select>
        </div>
        
        <button style={styles.resetButton}>Reset</button>
      </div>
      
      <div style={styles.rightFilters}>
        <div style={styles.filterItem}>
          <AlertTriangle size={16} style={{ color: '#f59e0b' }} />
          <span style={styles.filterLabel}>Period:</span>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>Latest</span>
          <button style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}>
            <ChevronRight size={16} style={{ transform: 'rotate(90deg)' }} />
          </button>
        </div>
        
        <div style={styles.filterItem}>
          <span style={styles.filterLabel}>Personalized view:</span>
          <label style={styles.toggle}>
            <input 
              type="checkbox" 
              style={styles.toggleInput}
              checked={toggleState}
              onChange={(e) => setToggleState(e.target.checked)}
            />
            <div style={{
              ...styles.toggleSlider,
              backgroundColor: toggleState ? '#2563eb' : '#d1d5db'
            }}>
              <div style={{
                ...styles.toggleKnob,
                transform: toggleState ? 'translateX(20px)' : 'translateX(0)'
              }}></div>
            </div>
          </label>
        </div>
        
        <button style={{ color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer' }}>
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
};

export default TabFilters;