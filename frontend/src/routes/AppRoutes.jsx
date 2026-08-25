import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import DiseaseDetection from '../pages/DiseaseDetection';
import DetectionResult from '../pages/DetectionResult';
import CropHealth from '../pages/CropHealth';
import History from '../pages/History';
import Alerts from '../pages/Alerts';
import Recommendations from '../pages/Recommendations';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

const ProtectedLayout = ({ children }) => {
  // In a real app, check auth. Here we just show the layout.
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content-wrapper">
        <Navbar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
      <Route path="/register" element={<><Navbar /><Register /><Footer /></>} />
      
      <Route path="/dashboard" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
      <Route path="/detect" element={<ProtectedLayout><DiseaseDetection /></ProtectedLayout>} />
      <Route path="/detection-result" element={<ProtectedLayout><DetectionResult /></ProtectedLayout>} />
      <Route path="/crop-health" element={<ProtectedLayout><CropHealth /></ProtectedLayout>} />
      <Route path="/history" element={<ProtectedLayout><History /></ProtectedLayout>} />
      <Route path="/alerts" element={<ProtectedLayout><Alerts /></ProtectedLayout>} />
      <Route path="/recommendations" element={<ProtectedLayout><Recommendations /></ProtectedLayout>} />
      <Route path="/profile" element={<ProtectedLayout><Profile /></ProtectedLayout>} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;