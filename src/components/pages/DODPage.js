// src/components/pages/DODPage.js
import React from 'react';
import MetricsTable from '../MetricsTable';
import { dataSets } from '../../data/dataSets';

const DODPage = () => {
  return <MetricsTable data={dataSets['DOD']} />;
};

export default DODPage;