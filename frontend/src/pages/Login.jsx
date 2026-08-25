import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoaderCircle } from 'lucide-react';
import '../styles/global.css';
import { loginUser } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    setError('');

    try {
      const data = await loginUser({ username, password });

      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      navigate('/dashboard');
    } catch (loginError) {
      console.error('Login failed:', loginError);
      setError(loginError.response?.data?.message || 'Invalid username or password');
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="card auth-card">
        <h2>Farmer Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="login-identifier">Email or Mobile Number</label>
            <input id="login-identifier" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter email or mobile" required />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={isSigningIn}>
            {isSigningIn ? <><LoaderCircle className="button-spinner" size={17} /> Signing in...</> : 'Login'}
          </button>
          {error && <p className="form-error" role="alert">{error}</p>}
        </form>
        <div className="auth-links">
          <Link to="#">Forgot Password?</Link>
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};
export default Login;