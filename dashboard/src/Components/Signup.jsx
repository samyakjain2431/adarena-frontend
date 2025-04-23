import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/auth.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already logged in by making a request to /me endpoint
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/client-auth/me', {
          credentials: 'include'
        });
        if (response.ok) {
          navigate('/');
        }
      } catch (err) {
        console.error('Auth check failed:', err);
      }
    };
    checkAuth();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    console.log("Signup form submitted with data:", formData);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      console.log("Password mismatch error");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/client-auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          name: formData.name,
          email: formData.email,
          password: formData.password,
          bio: formData.bio
        }),
        credentials: 'include'
      });

      const data = await response.json();
      console.log("Signup response:", data);

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      navigate('/');
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Join us to start growing</p>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>} 
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Choose a username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio (Optional)</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself"
            rows="3"
          />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
        <p className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup; 