import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, BellRing, Sprout } from 'lucide-react';
import '../styles/global.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Protect Your Crops Before It's Too Late</h1>
        <p>Early Detection and Management of Crop Diseases and Pest Infestations using AI.</p>
        <div className="hero-buttons">
          <Link to="/detect" className="btn btn-primary">Detect Disease</Link>
          <Link to="/register" className="btn btn-secondary">Get Started</Link>
        </div>
      </header>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Detect</h3>
            <p>Upload a photo of the affected plant.</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Analyse</h3>
            <p>Our system analyzes the image for diseases and pests.</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Recommend</h3>
            <p>Get actionable insights and treatments.</p>
          </div>
          <div className="step">
            <div className="step-icon">4</div>
            <h3>Alert & Monitor</h3>
            <p>Receive local alerts and track crop health over time.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Features & Benefits</h2>
        <div className="feature-grid">
          <div className="card feature-card">
            <Sprout size={40} className="feature-icon" />
            <h3>Supported Crops</h3>
            <p>Works with Tomato, Rice, Wheat, Cotton, Maize, and Potato.</p>
          </div>
          <div className="card feature-card">
            <ShieldCheck size={40} className="feature-icon" />
            <h3>Early Prevention</h3>
            <p>Catch diseases early and prevent massive yield losses.</p>
          </div>
          <div className="card feature-card">
            <TrendingUp size={40} className="feature-icon" />
            <h3>Increase Yield</h3>
            <p>Healthy crops mean better harvest and more profit.</p>
          </div>
          <div className="card feature-card">
            <BellRing size={40} className="feature-icon" />
            <h3>Regional Alerts</h3>
            <p>Stay informed about outbreaks in your farming area.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;