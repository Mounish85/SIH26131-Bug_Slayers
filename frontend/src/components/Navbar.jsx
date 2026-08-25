import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, User } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <Sprout className="navbar-icon" />
          <span>CropGuard</span>
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/login" className="btn-login">Login</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;