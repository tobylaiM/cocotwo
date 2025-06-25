// src/components/pages/GCCPage.js
import React from 'react';
import MetricsTable from '../MetricsTable';
import { dataSets } from '../../data/dataSets';

const GCCPage = () => {
  return <MetricsTable data={dataSets['GCC']} />;
};

export default GCCPage;