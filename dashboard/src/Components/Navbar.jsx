import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          AD arena
        </Link>
        <div className="nav-links">
          {isAuthenticated ? (
            <>
              <Link to="/" className="nav-link">Dashboard</Link>
              <Link to="/all-urls" className="nav-link">All URLs</Link>
              <Link to="/analytics" className="nav-link">Analytics</Link>
              <button onClick={handleLogout} className="nav-link">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/signup" className="nav-link">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
