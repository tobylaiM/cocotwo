// src/components/pages/GCCHighPage.js
import React from 'react';
import MetricsTable from '../MetricsTable';
import { dataSets } from '../../data/dataSets';

const GCCHighPage = () => {
  return <MetricsTable data={dataSets['GCC-High']} />;
};

export default GCCHighPage;