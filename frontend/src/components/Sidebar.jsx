import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Scan, Sprout, Clock, FileText, Bell, User, LogOut } from 'lucide-react';
import '../styles/sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { path: '/dashboard', name: 'Dashboard', icon: <LayoutDashboard /> },
    { path: '/detect', name: 'Detect Disease', icon: <Scan /> },
    { path: '/crop-health', name: 'My Crops', icon: <Sprout /> },
    { path: '/history', name: 'Detection History', icon: <Clock /> },
    { path: '/recommendations', name: 'Recommendations', icon: <FileText /> },
    { path: '/alerts', name: 'Alerts', icon: <Bell /> },
    { path: '/profile', name: 'Profile', icon: <User /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Sprout className="sidebar-logo" />
        <h2>CropGuard</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink key={item.name} to={item.path} className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"}>
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button className="sidebar-item logout-btn">
          <LogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;