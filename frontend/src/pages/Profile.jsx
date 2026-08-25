import React from 'react';
import { User } from 'lucide-react';
import '../styles/global.css';

const Profile = () => {
  return (
    <div className="page-container">
      <h1>Farmer Profile</h1>
      <div className="card profile-card">
        <div className="profile-header">
          <div className="profile-avatar"><User size={64} /></div>
          <div>
            <h2>Ramesh Kumar</h2>
            <p>Punjab, India</p>
          </div>
        </div>
        <div className="profile-details">
          <p><strong>Mobile:</strong> +91 9876543210</p>
          <p><strong>Email:</strong> ramesh@example.com</p>
          <p><strong>Primary Crop:</strong> Wheat</p>
          <p><strong>Language Preference:</strong> English</p>
        </div>
        <button className="btn btn-secondary">Edit Profile</button>
      </div>
    </div>
  );
};
export default Profile;