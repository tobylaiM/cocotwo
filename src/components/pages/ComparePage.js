import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { styles } from '../../styles/styles';
import { applications } from '../../data/applications';
import { dataSets } from '../../data/dataSets';

const ComparePage = () => {
  // Default to M365 Copilot App (index 0)
  const [selectedAppIndex, setSelectedAppIndex] = useState(0);

  // Get data for the selected application across all clouds using your existing data structure
  const getAppData = (appIndex) => {
    const gccData = dataSets['GCC'];
    const gccHighData = dataSets['GCC-High'];
    const dodData = dataSets['DOD'];
    
    return {
      mau: {
        gcc: parseFloat(gccData[0].values[appIndex].replace(/[M,K,-]/g, '')) || 0,
        gccHigh: parseFloat(gccHighData[0].values[appIndex].replace(/[M,K,-]/g, '')) || 0,
        dod: parseFloat(dodData[0].values[appIndex].replace(/[M,K,-]/g, '')) || 0
      },
      wau: {
        gcc: parseFloat(gccData[1].values[appIndex].replace(/[M,K,-]/g, '')) || 0,
        gccHigh: parseFloat(gccHighData[1].values[appIndex].replace(/[M,K,-]/g, '')) || 0,
        dod: parseFloat(dodData[1].values[appIndex].replace(/[M,K,-]/g, '')) || 0
      },
      dau: {
        gcc: parseFloat(gccData[2].values[appIndex].replace(/[M,K,-]/g, '')) || 0,
        gccHigh: parseFloat(gccHighData[2].values[appIndex].replace(/[M,K,-]/g, '')) || 0,
        dod: parseFloat(dodData[2].values[appIndex].replace(/[M,K,-]/g, '')) || 0
      },
      dauMau: {
        gcc: parseFloat(gccData[11].values[appIndex].replace(/[%,-]/g, '')) || 0,
        gccHigh: parseFloat(gccHighData[11].values[appIndex].replace(/[%,-]/g, '')) || 0,
        dod: parseFloat(dodData[11].values[appIndex].replace(/[%,-]/g, '')) || 0
      },
      nps: {
        gcc: parseFloat(gccData[5].values[appIndex].replace(/[n\/a,-]/g, '')) || 0,
        gccHigh: parseFloat(gccHighData[5].values[appIndex].replace(/[n\/a,-]/g, '')) || 0,
        dod: parseFloat(dodData[5].values[appIndex].replace(/[n\/a,-]/g, '')) || 0
      }
    };
  };

  // Create trend data from your actual data - simulating historical trends
  const createTrendData = (currentData) => {
    // Generate historical trend based on current values
    // This simulates 10 months of data leading up to current values
    const months = [
      'Jul \'24', 'Aug \'24', 'Sep \'24', 'Oct \'24', 'Nov \'24', 
      'Dec \'24', 'Jan \'25', 'Feb \'25', 'Mar \'25', 'Apr \'25'
    ];

    const mauTrend = months.map((month, index) => {
      // Create variance around current values (±10-20%)
      const variance = 0.8 + (index / 10) * 0.4; // Gradual increase over time
      return {
        month,
        GCC: Math.round(currentData.mau.gcc * variance),
        'GCC-High': Math.round(currentData.mau.gccHigh * variance),
        DOD: Math.round(currentData.mau.dod * variance)
      };
    });

    const engagementTrend = months.map((month, index) => {
      const variance = 0.85 + (index / 15) * 0.3;
      return {
        month,
        GCC: Math.round(currentData.dauMau.gcc * variance * 10) / 10,
        'GCC-High': Math.round(currentData.dauMau.gccHigh * variance * 10) / 10,
        DOD: Math.round(currentData.dauMau.dod * variance * 10) / 10
      };
    });

    const npsTrend = months.map((month, index) => {
      const variance = 0.8 + (index / 12) * 0.4;
      return {
        month,
        GCC: Math.round(currentData.nps.gcc * variance * 10) / 10,
        'GCC-High': Math.round(currentData.nps.gccHigh * variance * 10) / 10,
        DOD: Math.round(currentData.nps.dod * variance * 10) / 10
      };
    });

    return { mauTrend, engagementTrend, npsTrend };
  };

  const currentAppData = getAppData(selectedAppIndex);
  const trendData = createTrendData(currentAppData);
  const selectedApp = applications[selectedAppIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Application Selector */}
      <div style={styles.chartContainer}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={styles.chartTitle}>Application Trends Comparison</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '14px', color: '#374151', fontWeight: '500' }}>
              Compare Application:
            </span>
            <select 
              value={selectedAppIndex} 
              onChange={(e) => setSelectedAppIndex(parseInt(e.target.value))}
              style={{
                ...styles.select,
                fontSize: '14px',
                padding: '8px 12px',
                minWidth: '200px',
                fontWeight: '500'
              }}
            >
              {applications.map((app, index) => (
                <option key={index} value={index}>
                  {app.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Selected App Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px',
          backgroundColor: '#f8fafc',
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{
            ...styles.appIconContainer,
            backgroundColor: selectedApp.color,
            width: '32px',
            height: '32px',
            fontSize: '16px'
          }}>
            {/* Display just the app name initial if icon has .png */}
            {selectedApp.icon && selectedApp.icon.includes('.png') ? 
              selectedApp.name.charAt(0) : selectedApp.icon}
          </div>
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>
            {selectedApp.name}
          </span>
        </div>
      </div>

      {/* Monthly Active Users Trend Chart */}
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>Monthly Active Users Trend - {selectedApp.name}</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={trendData.mauTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              stroke="#666"
              fontSize={12}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
              tickFormatter={(value) => `${value}M`}
            />
            <Tooltip 
              formatter={(value, name) => [`${value}M`, name]}
              labelFormatter={(label) => `Month: ${label}`}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="GCC" 
              stroke="#3B82F6" 
              strokeWidth={3}
              name="GCC"
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="GCC-High" 
              stroke="#10B981" 
              strokeWidth={3}
              name="GCC-High"
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="DOD" 
              stroke="#EF4444" 
              strokeWidth={3}
              name="DOD"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Engagement Rate Trend Chart */}
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>DAU/MAU Engagement Rate Trend - {selectedApp.name}</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={trendData.engagementTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              stroke="#666"
              fontSize={12}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              formatter={(value, name) => [`${value}%`, name]}
              labelFormatter={(label) => `Month: ${label}`}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="GCC" 
              stroke="#3B82F6" 
              strokeWidth={3}
              name="GCC"
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="GCC-High" 
              stroke="#10B981" 
              strokeWidth={3}
              name="GCC-High"
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="DOD" 
              stroke="#EF4444" 
              strokeWidth={3}
              name="DOD"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* NPS Score Trend Chart */}
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>NPS Score Trend - {selectedApp.name}</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={trendData.npsTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              stroke="#666"
              fontSize={12}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
            />
            <Tooltip 
              formatter={(value, name) => [value, name]}
              labelFormatter={(label) => `Month: ${label}`}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="GCC" 
              stroke="#3B82F6" 
              strokeWidth={3}
              name="GCC"
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="GCC-High" 
              stroke="#10B981" 
              strokeWidth={3}
              name="GCC-High"
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="DOD" 
              stroke="#EF4444" 
              strokeWidth={3}
              name="DOD"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparePage;