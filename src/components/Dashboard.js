import React, { useState } from 'react';
import { Star } from 'lucide-react';
import Header from './Header';
import Navigation from './Navigation';
import ApplicationIcons from './ApplicationIcons';
import TabFilters from './TabFilters';
import GCCPage from './pages/GCCPage';
import GCCHighPage from './pages/GCCHighPage';
import DODPage from './pages/DODPage';
import ComparePage from './pages/ComparePage';
import { styles } from '../styles/styles';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('GCC');
  const [toggleState, setToggleState] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'GCC':
        return <GCCPage />;
      case 'GCC-High':
        return <GCCHighPage />;
      case 'DOD':
        return <DODPage />;
      case 'Compare':
        return <ComparePage />;
      default:
        return <GCCPage />;
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <Navigation />

      {/* Main Content */}
      <div style={styles.main}>
        {/* Title */}
        <div style={styles.title}>
          <h1 style={styles.titleText}>Application Dashboard (ITAR)</h1>
          <Star size={20} style={{ color: '#eab308' }} />
        </div>

        {/* Description */}
        <div style={styles.description}>
          <p>
            Standard metrics across core E&D applications. Click{' '}
            <a href="#" style={styles.link}>here</a> for definitions. Click{' '}
            <a href="#" style={styles.link}>here</a> to compare metrics across applications. Click{' '}
            <a href="#" style={styles.link}>here</a> for trended report of the metrics.
          </p>
        </div>

        {/* Tabs */}
        <div style={styles.tabs}>
          {['GCC', 'GCC-High', 'DOD', 'Compare'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.tab,
                ...(activeTab === tab ? styles.activeTab : styles.inactiveTab)
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <TabFilters toggleState={toggleState} setToggleState={setToggleState} />

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard;