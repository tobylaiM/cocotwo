import React from 'react';
import { applications } from '../data/applications';
import { styles } from '../styles/styles';

const ApplicationIcons = () => {
  return (
    <div style={styles.appIcons}>
      {applications.map((app, index) => (
        <div key={index} style={styles.appItem}>
          <div style={{ 
            ...styles.appIconContainer, 
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            padding: '8px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <img 
              src={app.icon} 
              alt={app.name}
              style={{ 
                width: '32px', 
                height: '32px',
                objectFit: 'contain'
              }}
              onError={(e) => {
                // Fallback to emoji with original styling if image fails
                e.target.style.display = 'none';
                e.target.parentNode.style.backgroundColor = app.color;
                e.target.parentNode.style.border = 'none';
                e.target.parentNode.innerHTML = `<span style="color: white; font-size: 20px;">${app.emoji}</span>`;
              }}
            />
          </div>
          <span style={styles.appName}>
            {app.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ApplicationIcons;