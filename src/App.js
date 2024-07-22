// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import the updated CSS file
import background from './assets/background.jpg'; // Import the background image
import Soccer from './Soccer'; // Import the Soccer component
import Mlb from './Mlb'; // Import the Mlb component
import Nba from './Nba'; // Import the Nba component
import Nhl from './Nhl'; // Import the Nhl component
import Nfl from './Nfl'; // Import the Nfl component
import FAQ from './FAQ'; // Import the FAQ component
import SignUpPopup from './SignUpPopup'; // Import the SignUpPopup component
import LiveChat from './LiveChat'; // Import the LiveChat component
import LiveChatSoccer from './LiveChatSoccer'; // Import the LiveChatSoccer component
import LiveChatMlb from './LiveChatMlb'; // Import the LiveChatMlb component
import LiveChatNba from './LiveChatNba'; // Import the LiveChatNba component
import LiveChatNhl from './LiveChatNhl'; // Import the LiveChatNba component
import LiveChatNfl from './LiveChatNfl'; // Import the LiveChatNba component

const NAV_LINKS = [
  { text: 'SOCCER', href: '/soccer' },
  { text: 'MLB', href: '/mlb' },
  { text: 'NBA', href: '/nba' },
  { text: 'NHL', href: '/nhl' },
  { text: 'NFL', href: '/nfl' },
  { text: 'FAQ', href: '/faq' },
];

const App = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openSignUp = () => {
    setIsSignUpOpen(true);
  };

  const closeSignUp = () => {
    setIsSignUpOpen(false);
  };

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
          <button className="signup-button" onClick={openSignUp}>Sign up</button>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="main-content">
              <h1>SportsEntourage</h1>
              <p>Watch all the sports you want</p>
            </div>
          } />
          <Route path="/soccer" element={<Soccer />} />
          <Route path="/mlb" element={<Mlb />} />
          <Route path="/nba" element={<Nba />} />
          <Route path="/nhl" element={<Nhl />} />
          <Route path="/nfl" element={<Nfl />} />
          <Route path="/live" element={<LiveChat />} />
          <Route path="/live/:game" element={<LiveChatSoccer />} />
          <Route path="/live-mlb/:game" element={<LiveChatMlb />} />
          <Route path="/live-nba/:game" element={<LiveChatNba />} />
          <Route path="/live/nhl/:game" element={<LiveChatNhl />} />
          <Route path="/live/nfl/:game" element={<LiveChatNfl />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>

        <SignUpPopup isOpen={isSignUpOpen} onClose={closeSignUp} />
      </div>
    </Router>
  );
};

export default App;
