import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome, ANDY</h1>
        <p className="welcome-subtitle">
          Manage your URLs, track analytics, and optimize your links all in one place.
        </p>
      </div>
      
      <div className="stats-container">
        <div className="stat-card">
          <h3 className="stat-title">Total URLs</h3>
          <p className="stat-value">20</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-title">Clicks Today</h3>
          <p className="stat-value">156</p>
        </div>
        <div className="stat-card">
          <h3 className="stat-title">Conversion Rate</h3>
          <p className="stat-value">24%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
