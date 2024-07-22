// src/Nhl.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Reuse the CSS file for styles

const primaryButtonClasses = 'bg-primary text-primary-foreground px-4 py-2 rounded';
const textButtonClasses = 'text-foreground hover:text-primary';
const cardClasses = 'bg-card p-4 rounded-lg';
const mutedClasses = 'bg-muted p-2 rounded';
const mutedForegroundClasses = 'text-muted-foreground';
const inputClasses = 'bg-input text-foreground p-2 rounded';
const textForegroundClasses = 'text-foreground';

const gamesToday = [
  {
    league: "NHL",
    matches: [
      { teams: "Stars VS Jets", time: "2024-07-21 19:00 PM" },
      { teams: "Avalanche VS Predators", time: "2024-07-21 20:00 PM" }
    ]
  },
  {
    league: "NHL",
    matches: [
      { teams: "Canucks VS Oilers", time: "2024-07-21 21:00 PM" },
      { teams: "Kings VS Golden Knights", time: "2024-07-21 22:00 PM" }
    ]
  }
];

const gamesYesterday = [
  {
    league: "NHL",
    matches: [
      { teams: "Panthers VS Bruins", time: "2024-07-20 19:00 PM" },
      { teams: "Maple Leafs VS Lightning", time: "2024-07-20 20:00 PM" }
    ]
  },
  {
    league: "NHL",
    matches: [
      { teams: "Rangers VS Hurricanes", time: "2024-07-20 21:00 PM" },
      { teams: "Islanders VS Capitals", time: "2024-07-20 22:00 PM" }
    ]
  }
];

const gamesTomorrow = [
  {
    league: "NHL",
    matches: [
      { teams: "Red Wings VS Sabres", time: "2024-07-22 19:00 PM" },
      { teams: "Senators VS Canadiens", time: "2024-07-22 20:00 PM" }
    ]
  },
  {
    league: "NHL",
    matches: [
      { teams: "Flyers VS Penguins", time: "2024-07-22 21:00 PM" },
      { teams: "Devils VS Blue Jackets", time: "2024-07-22 22:00 PM" }
    ]
  }
];

const centralDivisionStandings = [
  { team: 'Stars', gp: 82, w: 52, l: 21, otl: 9, pts: 113, gf: 298, ga: 234, diff: 64 },
  { team: 'Jets', gp: 82, w: 52, l: 24, otl: 6, pts: 110, gf: 259, ga: 199, diff: 60 },
  { team: 'Avalanche', gp: 82, w: 50, l: 25, otl: 7, pts: 107, gf: 304, ga: 254, diff: 50 },
  { team: 'Predators', gp: 82, w: 47, l: 30, otl: 5, pts: 99, gf: 269, ga: 248, diff: 21 },
  { team: 'Blues', gp: 82, w: 43, l: 33, otl: 6, pts: 92, gf: 239, ga: 250, diff: -11 },
  { team: 'Wild', gp: 82, w: 39, l: 34, otl: 9, pts: 87, gf: 251, ga: 263, diff: -12 },
  { team: 'Coyotes', gp: 82, w: 36, l: 41, otl: 5, pts: 77, gf: 256, ga: 274, diff: -18 },
  { team: 'Blackhawks', gp: 82, w: 23, l: 53, otl: 6, pts: 52, gf: 179, ga: 290, diff: -111 }
];

const pacificDivisionStandings = [
  { team: 'Canucks', gp: 82, w: 50, l: 23, otl: 9, pts: 109, gf: 279, ga: 223, diff: 56 },
  { team: 'Oilers', gp: 82, w: 49, l: 27, otl: 6, pts: 104, gf: 294, ga: 237, diff: 57 },
  { team: 'Kings', gp: 82, w: 44, l: 27, otl: 11, pts: 99, gf: 256, ga: 215, diff: 41 },
  { team: 'Golden Knights', gp: 82, w: 45, l: 29, otl: 8, pts: 98, gf: 267, ga: 245, diff: 22 },
  { team: 'Flames', gp: 82, w: 38, l: 39, otl: 5, pts: 81, gf: 253, ga: 271, diff: -18 },
  { team: 'Kraken', gp: 82, w: 34, l: 35, otl: 13, pts: 81, gf: 217, ga: 236, diff: -19 },
  { team: 'Ducks', gp: 82, w: 27, l: 50, otl: 5, pts: 59, gf: 204, ga: 295, diff: -91 },
  { team: 'Sharks', gp: 82, w: 19, l: 54, otl: 9, pts: 47, gf: 181, ga: 331, diff: -150 }
];

const atlanticDivisionStandings = [
  { team: 'Panthers', gp: 82, w: 52, l: 24, otl: 6, pts: 110, gf: 268, ga: 200, diff: 68 },
  { team: 'Bruins', gp: 82, w: 47, l: 20, otl: 15, pts: 109, gf: 267, ga: 224, diff: 43 },
  { team: 'Maple Leafs', gp: 82, w: 46, l: 26, otl: 10, pts: 102, gf: 303, ga: 263, diff: 40 },
  { team: 'Lightning', gp: 82, w: 45, l: 29, otl: 8, pts: 291, gf: 268, ga: 23, diff: 23 },
  { team: 'Red Wings', gp: 82, w: 41, l: 32, otl: 9, pts: 278, gf: 274, diff: 4 },
  { team: 'Sabres', gp: 82, w: 39, l: 37, otl: 6, pts: 244, gf: 244, ga: 2 },
  { team: 'Senators', gp: 82, w: 37, l: 41, otl: 4, pts: 281, gf: 255, ga: -26 },
  { team: 'Canadiens', gp: 82, w: 30, l: 36, otl: 16, pts: 289, gf: 236, ga: -53 }
];

const metropolitanDivisionStandings = [
  { team: 'Rangers', gp: 82, w: 55, l: 23, otl: 4, pts: 114, gf: 229, ga: 53 },
  { team: 'Hurricanes', gp: 82, w: 52, l: 23, otl: 7, pts: 111, gf: 279, ga: 63 },
  { team: 'Islanders', gp: 82, w: 39, l: 27, otl: 16, pts: 263, gf: 177, ga: -17 },
  { team: 'Capitals', gp: 82, w: 40, l: 31, otl: 11, pts: 257, gf: 37 },
  { team: 'Penguins', gp: 82, w: 38, l: 32, otl: 12, pts: 255, gf: 4 },
  { team: 'Flyers', gp: 82, w: 33, l: 38, otl: 11, pts: 251, ga: -26 },
  { team: 'Devils', gp: 82, w: 32, l: 39, otl: 11, pts: 264, gf: -19 },
  { team: 'Blue Jackets', gp: 82, w: 27, l: 43, otl: 12, pts: 300, gf: 63 }
];

const StandingsTable = ({ standings }) => (
  <table className="w-full text-left">
    <thead>
      <tr className="border-b border-muted">
        <th className="py-2">#</th>
        <th className="py-2">Team</th>
        <th className="py-2">GP</th>
        <th className="py-2">W</th>
        <th className="py-2">L</th>
        <th className="py-2">OTL</th>
        <th className="py-2">Pts</th>
        <th className="py-2">GF</th>
        <th className="py-2">GA</th>
        <th className="py-2">Diff</th>
      </tr>
    </thead>
    <tbody>
      {standings.map((team, index) => (
        <tr key={index} className="border-b border-muted">
          <td className="py-2">{index + 1}</td>
          <td className="py-2">{team.team}</td>
          <td className="py-2">{team.gp}</td>
          <td className="py-2">{team.w}</td>
          <td className="py-2">{team.l}</td>
          <td className="py-2">{team.otl}</td>
          <td className="py-2">{team.pts}</td>
          <td className="py-2">{team.gf}</td>
          <td className="py-2">{team.ga}</td>
          <td className="py-2">{team.diff}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Nhl = () => {
  const [selectedDay, setSelectedDay] = useState('Today');
  const [selectedDivision, setSelectedDivision] = useState('Central Division');

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
  };

  const games = selectedDay === 'Yesterday' ? gamesYesterday : selectedDay === 'Tomorrow' ? gamesTomorrow : gamesToday;
  const standings = selectedDivision === 'Central Division' ? centralDivisionStandings :
    selectedDivision === 'Pacific Division' ? pacificDivisionStandings :
      selectedDivision === 'Atlantic Division' ? atlanticDivisionStandings : metropolitanDivisionStandings;

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">NHL</h1>
        <nav className="flex space-x-4">
        </nav>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="lg:col-span-2">
          <div className="flex space-x-4 mb-4">
            <button
              className={`${selectedDay === 'Yesterday' ? primaryButtonClasses : textButtonClasses}`}
              onClick={() => handleDayChange('Yesterday')}
            >
              Yesterday
            </button>
            <button
              className={`${selectedDay === 'Today' ? primaryButtonClasses : textButtonClasses}`}
              onClick={() => handleDayChange('Today')}
            >
              Today
            </button>
            <button
              className={`${selectedDay === 'Tomorrow' ? primaryButtonClasses : textButtonClasses}`}
              onClick={() => handleDayChange('Tomorrow')}
            >
              Tomorrow
            </button>
          </div>
          <div className="space-y-4">
            {games.map((league, index) => (
              <div key={index} className={cardClasses}>
                <h3 className="text-lg font-bold mb-2">{league.league}</h3>
                <div className="space-y-2">
                  {league.matches.map((match, idx) => (
                    <div key={idx} className={`flex justify-between items-center ${mutedClasses}`}>
                      <span><Link to={`/live/nhl/${match.teams.replace(/\s+/g, '_')}`} className={textForegroundClasses}>{match.teams}</Link></span>
                      <span className={mutedForegroundClasses}>{match.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <aside className={cardClasses}>
          <h3 className="text-lg font-bold mb-4">STANDINGS:</h3>
          <div className="mb-4">
            <select className={inputClasses} value={selectedDivision} onChange={handleDivisionChange}>
              <option>Central Division</option>
              <option>Pacific Division</option>
              <option>Atlantic Division</option>
              <option>Metropolitan Division</option>
            </select>
          </div>
          <StandingsTable standings={standings} />
        </aside>
      </main>
    </div>
  );
};

export default Nhl;
