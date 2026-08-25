import React from 'react';
import { Activity } from 'lucide-react';
import SeverityBadge from './SeverityBadge';

const CropCard = ({ crop }) => {
  return (
    <div className="card crop-card">
      <div className="crop-card-header">
        <h3>{crop.name}</h3>
        <Activity className="crop-icon" />
      </div>
      <div className="crop-card-body">
        <p><strong>Status:</strong> <SeverityBadge severity={crop.status === 'Healthy' ? 'Low' : (crop.status === 'Warning' ? 'Medium' : 'High')} text={crop.status} /></p>
        <p><strong>Last Scanned:</strong> {crop.lastScanned}</p>
        <p><strong>Latest Issue:</strong> {crop.latestIssue || 'None'}</p>
      </div>
    </div>
  );
};
export default CropCard;