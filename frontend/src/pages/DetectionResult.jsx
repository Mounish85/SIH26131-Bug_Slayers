import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfidenceScore from '../components/ConfidenceScore';
import SeverityBadge from '../components/SeverityBadge';
import RecommendationCard from '../components/RecommendationCard';
import '../styles/result.css';

const DetectionResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, imagePreview } = location.state || {};

  if (!result) {
    return <div className="page-container"><p>No results found. Please run an analysis first.</p></div>;
  }

  return (
    <div className="page-container">
      <h1>Analysis Result</h1>
      
      <div className="result-grid">
        <div className="card result-image-card">
          {imagePreview && <img src={imagePreview} alt="Uploaded crop" className="result-image" />}
        </div>
        
        <div className="card result-details-card">
          <h2>{result.disease}</h2>
          <div className="result-meta">
            <span><strong>Crop:</strong> {result.crop}</span>
            <span><strong>Severity:</strong> <SeverityBadge severity={result.severity} /></span>
          </div>
          <ConfidenceScore score={result.confidence} />
          
          <div className="result-actions">
            <button className="btn btn-primary" onClick={() => alert('Detection saved to history!')}>Save Detection</button>
            <button className="btn btn-secondary" onClick={() => navigate('/detect')}>Scan Another Crop</button>
          </div>
        </div>
      </div>

      <div className="recommendations-container">
        <RecommendationCard recommendation={result} />
      </div>
    </div>
  );
};
export default DetectionResult;