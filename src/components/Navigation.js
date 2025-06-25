// src/components/Navigation.js
import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { styles } from '../styles/styles';

const Navigation = () => {
  return (
    <div style={styles.breadcrumb}>
      <div style={styles.breadcrumbContent}>
        <Home size={16} style={{ marginRight: '4px' }} />
        <span>Home</span>
        <ChevronRight size={16} style={{ margin: '0 4px' }} />
        <span style={{ color: '#111827' }}>Application Dashboard (ITAR)</span>
      </div>
    </div>
  );
};

export default Navigation;