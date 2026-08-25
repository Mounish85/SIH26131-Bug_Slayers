import React from 'react';

const ConfidenceScore = ({ score }) => {
  return (
    <div className="confidence-container">
      <div className="confidence-header">
        <span>Confidence Score</span>
        <span>{score}%</span>
      </div>
      <div className="confidence-bar-bg">
        <div className="confidence-bar-fill" style={{ width: `${score}%` }}></div>
      </div>
    </div>
  );
};
export default ConfidenceScore;