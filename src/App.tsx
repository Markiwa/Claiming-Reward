import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TrackingPage from './pages/TrackingPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuth');
    if (adminAuth === 'true') {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<TrackingPage />} />
      <Route
        path="/admin/login"
        element={
          isLoggedIn ? <Navigate to="/admin/dashboard" /> :
          <AdminLogin onSuccess={() => {
            setIsLoggedIn(true);
            localStorage.setItem('adminAuth', 'true');
          }} />
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          isLoggedIn ?
          <AdminDashboard onLogout={() => {
            setIsLoggedIn(false);
            localStorage.removeItem('adminAuth');
          }} /> :
          <Navigate to="/admin/login" />
        }
      />
      <Route path="/admin" element={<Navigate to={isLoggedIn ? "/admin/dashboard" : "/admin/login"} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
