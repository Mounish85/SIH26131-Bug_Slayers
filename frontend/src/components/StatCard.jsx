import React from 'react';

const StatCard = ({ title, value, icon, colorClass }) => {
  return (
    <div className={`stat-card ${colorClass}`}>
      <div className="stat-icon-wrapper">
        {icon}
      </div>
      <div className="stat-info">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};
export default StatCard;