import React from 'react';
import { diseases } from '../data/diseases';
import RecommendationCard from '../components/RecommendationCard';
import '../styles/global.css';

const Recommendations = () => {
  return (
    <div className="page-container">
      <h1>General Recommendations</h1>
      <p>Best practices and treatments for common crop diseases.</p>
      <div className="recommendations-grid">
        {diseases.map(d => (
          <RecommendationCard key={d.id} recommendation={d} />
        ))}
      </div>
    </div>
  );
};
export default Recommendations;