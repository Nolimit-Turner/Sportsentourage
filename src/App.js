// src/App.js
import React from 'react';
import './App.css'; // Import the updated CSS file
import background from './assets/background.jpg'; // Import the background image

const NAV_LINKS = [
  { text: 'Soccer', href: '#' },
  { text: 'MLB', href: '#' },
  { text: 'NBA', href: '#' },
  { text: 'NHL', href: '#' },
  { text: 'NFL', href: '#' },
  { text: 'MMA', href: '#' }
];

const App = () => {
  return (
    <div className="background-image" style={{ backgroundImage: `url(${background})` }}>
      <nav className="navbar">
        <div className="header">SportsEntourage</div>
        <div className="nav-links-container">
          {NAV_LINKS.map((link, index) => (
            <a key={index} href={link.href} className="nav-link">{link.text}</a>
          ))}
        </div>
        <button className="signup-button">Sign up</button>
      </nav>

      <div className="main-content">
        <h1>SportsEntourage</h1>
        <p>Watch all the sports you want</p>
      </div>
    </div>
  );
};

export default App;
