import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoaderCircle } from 'lucide-react';
import { crops } from '../data/crops';
import { registerUser } from '../services/authService';
import '../styles/global.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', password: '', location: '', primaryCrop: '' });
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsRegistering(true);
    setError('');

    try {
      const data = await registerUser(formData);
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      navigate('/dashboard');
    } catch (registerError) {
      console.error('Registration failed:', registerError);
      setError(registerError.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="card auth-card">
        <h2>Register Form</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="register-name">Farmer Name</label>
            <input id="register-name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="register-mobile">Mobile Number</label>
            <input id="register-mobile" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} placeholder="Mobile number" required />
          </div>
          <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input id="register-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input id="register-password" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Create password" required />
          </div>
          <div className="form-group">
            <label htmlFor="register-location">Location</label>
            <input id="register-location" name="location" type="text" value={formData.location} onChange={handleChange} placeholder="Village / District" required />
          </div>
          <div className="form-group">
            <label htmlFor="register-crop">Primary Crop</label>
            <select id="register-crop" name="primaryCrop" value={formData.primaryCrop} onChange={handleChange} required>
              <option value="">Select Primary Crop</option>
              {crops.map(crop => <option key={crop} value={crop}>{crop}</option>)}
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={isRegistering}>
            {isRegistering ? <><LoaderCircle className="button-spinner" size={17} /> Registering...</> : 'Register'}
          </button>
          {error && <p className="form-error" role="alert">{error}</p>}
        </form>
        <div className="auth-links">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};
export default Register;