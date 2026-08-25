import React from 'react';
import AlertCard from '../components/AlertCard';
import { alerts } from '../data/alerts';
import '../styles/global.css';

const Alerts = () => {
  return (
    <div className="page-container">
      <h1>Regional Alerts</h1>
      <p>Stay updated with diseases, pests, and weather alerts in your area.</p>
      <div className="alerts-grid">
        {alerts.map(alert => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
};
export default Alerts;