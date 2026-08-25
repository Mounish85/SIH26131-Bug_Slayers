import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShieldAlert, CheckCircle, Bell, Activity } from 'lucide-react';
import StatCard from '../components/StatCard';
import DetectionCard from '../components/DetectionCard';
import { detectionHistory } from '../data/detectionHistory';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, Farmer!</h1>
          <p>Here is your farm's overview today.</p>
          <span className="monitoring-status"><Activity size={14} /> AI Crop Monitoring Active</span>
        </div>
        <Link to="/detect" className="btn btn-primary">Detect Disease</Link>
      </div>

      <div className="stats-grid">
        <StatCard title="Total Crops" value="6" icon={<Sprout size={32} />} colorClass="stat-primary" />
        <StatCard title="Healthy Crops" value="4" icon={<CheckCircle size={32} />} colorClass="stat-success" />
        <StatCard title="Requires Attention" value="2" icon={<ShieldAlert size={32} />} colorClass="stat-danger" />
        <StatCard title="Active Alerts" value="3" icon={<Bell size={32} />} colorClass="stat-warning" />
      </div>

      <div className="dashboard-sections">
        <section className="dashboard-section card">
          <h3>Recent Detections</h3>
          <div className="recent-list">
            {detectionHistory.slice(0, 3).map(det => (
              <DetectionCard key={det.id} detection={det} />
            ))}
          </div>
          <Link to="/history" className="view-all">View all history →</Link>
        </section>

        <section className="dashboard-section card">
          <h3>Recent Alerts</h3>
          <div className="alert-mini-list">
            <div className="alert-mini warning">
              <strong>Medium Severity:</strong> Aphid Swarm in Central Valley
            </div>
            <div className="alert-mini danger">
              <strong>High Severity:</strong> High Risk of Leaf Rust for Wheat
            </div>
          </div>
          <Link to="/alerts" className="view-all">View all alerts →</Link>
        </section>
      </div>
    </div>
  );
};
export default Dashboard;