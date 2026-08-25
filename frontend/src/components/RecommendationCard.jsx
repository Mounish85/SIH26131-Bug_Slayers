import React from 'react';

const RecommendationCard = ({ recommendation }) => {
  return (
    <div className="card recommendation-card">
      <h3>{recommendation.disease}</h3>
      <div className="rec-section">
        <h4>Symptoms</h4>
        <ul>
          {recommendation.symptoms.map((s, idx) => <li key={idx}>{s}</li>)}
        </ul>
      </div>
      <div className="rec-section">
        <h4>Recommended Actions</h4>
        <ul>
          {recommendation.recommendedActions.map((s, idx) => <li key={idx}>{s}</li>)}
        </ul>
      </div>
      <div className="rec-section">
        <h4>Preventive Measures</h4>
        <ul>
          {recommendation.preventiveMeasures.map((s, idx) => <li key={idx}>{s}</li>)}
        </ul>
      </div>
    </div>
  );
};
export default RecommendationCard;