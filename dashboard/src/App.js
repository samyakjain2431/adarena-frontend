import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import AllURLs from './Components/AllURls';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PrivateRoute from './Components/PrivateRoute';
import { AuthProvider } from './AuthContext'; // <- import context
import Home from './Components/Home';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home/>} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/all-urls"
                element={
                  <PrivateRoute>
                    <AllURLs />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
