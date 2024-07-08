// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import the updated CSS file
import background from './assets/background.jpg'; // Import the background image
import Soccer from './Soccer'; // Import the Soccer component

const NAV_LINKS = [
  { text: 'Soccer', href: '/soccer' },
  { text: 'MLB', href: '#' },
  { text: 'NBA', href: '#' },
  { text: 'NHL', href: '#' },
  { text: 'NFL', href: '#' },
  { text: 'MMA', href: '#' }
];

const App = () => {
  return (
    <Router>
      <div className="background-image" style={{ backgroundImage: `url(${background})` }}>
        <nav className="navbar">
          <div className="header">SportsEntourage</div>
          <div className="nav-links-container">
            {NAV_LINKS.map((link, index) => (
              <Link key={index} to={link.href} className="nav-link">{link.text}</Link>
            ))}
          </div>
          <button className="signup-button">Sign up</button>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="main-content">
              <h1>SportsEntourage</h1>
              <p>Watch all the sports you want</p>
            </div>
          } />
          <Route path="/soccer" element={<Soccer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
