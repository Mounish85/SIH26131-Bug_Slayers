import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUploader from '../components/ImageUploader';
import { crops } from '../data/crops';
import { detectDiseaseAPI } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/detection.css';

const DiseaseDetection = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [crop, setCrop] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!imageFile || !crop || !location) {
      alert('Please fill all fields and upload an image.');
      return;
    }
    setLoading(true);
    const result = await detectDiseaseAPI(imageFile, crop, location);
    setLoading(false);
    navigate('/detection-result', { state: { result, imagePreview: URL.createObjectURL(imageFile) } });
  };

  return (
    <div className="page-container">
      <h1>Detect Crop Disease</h1>
      <p>Upload a clear image of the affected plant part (leaf, stem, fruit) for analysis.</p>
      
      <div className="detection-layout">
        <div className="card detection-form-card">
          <ImageUploader onImageSelect={(file) => setImageFile(file)} />
          
          <div className="form-group">
            <label htmlFor="detection-crop">Select Crop</label>
            <select id="detection-crop" value={crop} onChange={(e) => setCrop(e.target.value)}>
              <option value="">-- Choose Crop --</option>
              {crops.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="detection-location">Location / Region</label>
            <input id="detection-location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="E.g., North Field, Punjab" />
          </div>

          <button type="button" className="btn btn-primary btn-block" onClick={handleAnalyze} disabled={loading}>
            {loading ? 'Analyzing...' : 'Analyze Crop'}
          </button>
        </div>
      </div>
      {loading && <LoadingSpinner />}
    </div>
  );
};
export default DiseaseDetection;