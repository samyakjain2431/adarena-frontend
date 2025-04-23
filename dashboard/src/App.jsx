import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './pages/Dashboard';
import AllUrls from './pages/AllUrls';
import Analytics from './pages/Analytics';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/"
              element={
                // <PrivateRoute>
                  <Dashboard />
                // </PrivateRoute>
              }
            />
            <Route
              path="/all-urls"
              element={
                <PrivateRoute>
                  <AllUrls />
                </PrivateRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <PrivateRoute>
                  <Analytics />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 