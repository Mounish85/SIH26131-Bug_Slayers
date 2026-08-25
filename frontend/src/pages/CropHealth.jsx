import React from 'react';
import CropCard from '../components/CropCard';
import HealthStatus from '../components/HealthStatus';
import { crops } from '../data/crops';
import '../styles/global.css';

const CropHealth = () => {
  const dummyCrops = crops.map((c, i) => ({
    name: c,
    status: i % 3 === 0 ? 'High' : (i % 2 === 0 ? 'Warning' : 'Healthy'),
    lastScanned: '2023-10-14',
    latestIssue: i % 3 === 0 ? 'Blight' : (i % 2 === 0 ? 'Pest' : null)
  }));

  return (
    <div className="page-container">
      <h1>My Crops Health Overview</h1>
      <HealthStatus healthy={2} warning={2} severe={2} />
      
      <div className="crops-grid">
        {dummyCrops.map((crop, idx) => (
          <CropCard key={idx} crop={crop} />
        ))}
      </div>
    </div>
  );
};
export default CropHealth;