import React from 'react';
import { AlertTriangle, MapPin, Calendar } from 'lucide-react';
import SeverityBadge from './SeverityBadge';

const AlertCard = ({ alert }) => {
  return (
    <div className="card alert-card">
      <div className="alert-header">
        <div className="alert-title-container">
          <AlertTriangle className="alert-icon" />
          <h3>{alert.title}</h3>
        </div>
        <SeverityBadge severity={alert.severity} />
      </div>
      <div className="alert-body">
        <p><MapPin size={16}/> <strong>Region:</strong> {alert.region}</p>
        <p><strong>Target Crop:</strong> {alert.crop}</p>
        <p><strong>Action:</strong> {alert.action}</p>
        <p className="alert-date"><Calendar size={16}/> {alert.date}</p>
      </div>
    </div>
  );
};
export default AlertCard;