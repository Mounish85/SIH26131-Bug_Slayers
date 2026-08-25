import React from 'react';
import SeverityBadge from './SeverityBadge';

const DetectionCard = ({ detection }) => {
  return (
    <div className="card detection-card">
      <div className="detection-header">
        <h4>{detection.crop} - {detection.disease}</h4>
        <SeverityBadge severity={detection.severity} />
      </div>
      <div className="detection-body">
        <p><strong>Date:</strong> {detection.date}</p>
        <p><strong>Confidence:</strong> {detection.confidence}%</p>
      </div>
    </div>
  );
};
export default DetectionCard;