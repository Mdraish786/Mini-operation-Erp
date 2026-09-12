import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Navbar from './components/Navbar';
import RoleBanner from './components/RoleBanner';
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import WorkOrders from './pages/WorkOrders';
import Transfers from './pages/Transfers';
import CustomerOrders from './pages/CustomerOrders';

function AppLayout({ children }) {
  const { isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {isAuthenticated && (
        <>
          <Navbar />
          <RoleBanner />
        </>
      )}
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/inventory"
              element={
                <ProtectedRoute>
                  <Inventory />
                </ProtectedRoute>
              }
            />

            <Route
              path="/work-orders"
              element={
                <ProtectedRoute>
                  <WorkOrders />
                </ProtectedRoute>
              }
            />

            <Route
              path="/transfers"
              element={
                <ProtectedRoute>
                  <Transfers />
                </ProtectedRoute>
              }
            />

            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <CustomerOrders />
                </ProtectedRoute>
              }
            />

            {/* Default redirect based on user is handled cleanly */}
            <Route path="/" element={<Navigate to="/inventory" replace />} />
            <Route path="*" element={<Navigate to="/inventory" replace />} />
          </Routes>
        </AppLayout>
      </Router>
    </AuthProvider>
  );
}
