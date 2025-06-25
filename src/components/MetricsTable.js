import React from 'react';
import { applications } from '../data/applications';
import { styles } from '../styles/styles';

const MetricsTable = ({ data }) => {
  return (
    <div style={styles.table}>
      <table style={styles.tableElement}>
        <thead>
          <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
            <th style={styles.th}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button style={styles.expandButton}>▼</button>
                Active Usage
              </div>
            </th>
            {applications.map((app, index) => (
              <th key={index} style={styles.thCenter}>
                <div style={styles.thContent}>
                  <div style={{ 
                    ...styles.thIcon, 
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    padding: '4px'
                  }}>
                    <img 
                      src={app.icon} 
                      alt={app.name}
                      style={{ 
                        width: '24px', 
                        height: '24px',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        // Fallback to emoji with original styling if image fails
                        e.target.style.display = 'none';
                        e.target.parentNode.style.backgroundColor = app.color;
                        e.target.parentNode.style.border = 'none';
                        e.target.parentNode.innerHTML = `<span style="color: white; font-size: 14px;">${app.emoji}</span>`;
                      }}
                    />
                  </div>
                  <span style={styles.thText}>{app.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 5).map((row, rowIndex) => (
            <tr key={rowIndex} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={styles.td}>
                <div style={styles.metricRow}>
                  <button style={styles.expandButton}>▶</button>
                  <span style={styles.metricText}>{row.metric}</span>
                  {row.trend && <span style={{ marginLeft: '8px' }}>{row.trend}</span>}
                </div>
              </td>
              {row.values.map((value, colIndex) => (
                <td key={colIndex} style={styles.tdCenter}>
                  <span style={value === '-' ? styles.emptyValue : styles.valueText}>
                    {value}
                  </span>
                </td>
              ))}
            </tr>
          ))}
          
          {/* Health Section */}
          <tr style={styles.sectionHeader}>
            <td style={styles.td}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button style={styles.expandButton}>▼</button>
                <span style={{ fontWeight: '500', color: '#111827' }}>Health</span>
              </div>
            </td>
            {applications.map((_, index) => (
              <td key={index} style={styles.tdCenter}></td>
            ))}
          </tr>
          
          {data.slice(5, 11).map((row, rowIndex) => (
            <tr key={rowIndex + 5} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={styles.td}>
                <div style={{ paddingLeft: '24px' }}>
                  <span style={styles.metricText}>{row.metric}</span>
                </div>
              </td>
              {row.values.map((value, colIndex) => (
                <td key={colIndex} style={styles.tdCenter}>
                  <span style={(value === '-' || value === 'n/a') ? styles.emptyValue : styles.valueText}>
                    {value}
                  </span>
                </td>
              ))}
            </tr>
          ))}
          
          {/* Engagement Section */}
          <tr style={styles.sectionHeader}>
            <td style={styles.td}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button style={styles.expandButton}>▼</button>
                <span style={{ fontWeight: '500', color: '#111827' }}>Engagement</span>
              </div>
            </td>
            {applications.map((_, index) => (
              <td key={index} style={styles.tdCenter}></td>
            ))}
          </tr>
          
          {data.slice(11).map((row, rowIndex) => (
            <tr key={rowIndex + 11} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={styles.td}>
                <div style={{ paddingLeft: '24px' }}>
                  <span style={styles.metricText}>{row.metric}</span>
                  {row.trend && <span style={{ marginLeft: '8px' }}>{row.trend}</span>}
                </div>
              </td>
              {row.values.map((value, colIndex) => (
                <td key={colIndex} style={styles.tdCenter}>
                  <span style={value === '-' ? styles.emptyValue : styles.valueText}>
                    {value}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MetricsTable;