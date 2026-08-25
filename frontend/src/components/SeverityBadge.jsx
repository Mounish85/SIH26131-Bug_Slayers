import React from 'react';

const SeverityBadge = ({ severity, text }) => {
  let colorClass = 'badge-low';
  if (severity?.toLowerCase() === 'high' || severity?.toLowerCase() === 'severe') colorClass = 'badge-high';
  if (severity?.toLowerCase() === 'medium' || severity?.toLowerCase() === 'warning') colorClass = 'badge-medium';
  
  return (
    <span className={`badge ${colorClass}`}>
      {text || severity}
    </span>
  );
};
export default SeverityBadge;