// src/Nfl.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Reuse the CSS file for styles

const primaryButtonClasses = 'bg-primary text-primary-foreground px-4 py-2 rounded';
const textButtonClasses = 'text-foreground hover:text-primary';
const textForegroundClasses = 'text-foreground';
const textMutedForegroundClasses = 'text-muted-foreground';
const flexCenterClasses = 'flex items-center';
const flexJustifyBetweenClasses = 'flex justify-between';
const py2Classes = 'py-2';
const cardClasses = 'bg-card p-4 rounded-lg shadow-md';
const inputClasses = 'bg-input text-foreground p-2 rounded';
const primaryBadgeClasses = 'bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs mr-2';


const afcStandings = [
  {
    division: 'AFC East',
    teams: [
      { rank: 1, team: 'Bills', w: 11, l: 6, pct: .647, pf: 451, pa: 311, home: '7-2', away: '4-4', strk: 'W5' },
      { rank: 2, team: 'Dolphins', w: 11, l: 6, pct: .647, pf: 496, pa: 391, home: '7-2', away: '4-4', strk: 'L2' },
      { rank: 3, team: 'Jets', w: 7, l: 10, pct: .412, pf: 268, pa: 355, home: '4-5', away: '3-5', strk: 'W1' },
      { rank: 4, team: 'Patriots', w: 4, l: 13, pct: .235, pf: 236, pa: 366, home: '1-8', away: '3-5', strk: 'L2' },
    ],
  },
  {
    division: 'AFC West',
    teams: [
      { rank: 1, team: 'Chiefs', w: 11, l: 6, pct: .647, pf: 371, pa: 294, home: '5-4', away: '6-2', strk: 'W2' },
      { rank: 2, team: 'Raiders', w: 8, l: 9, pct: .471, pf: 332, pa: 331, home: '6-3', away: '2-6', strk: 'W1' },
      { rank: 3, team: 'Broncos', w: 8, l: 9, pct: .471, pf: 357, pa: 413, home: '5-4', away: '3-5', strk: 'L1' },
      { rank: 4, team: 'Chargers', w: 5, l: 12, pct: .294, pf: 346, pa: 398, home: '2-7', away: '3-5', strk: 'L5' },
    ],
  },
  {
    division: 'AFC North',
    teams: [
      { rank: 1, team: 'Ravens', w: 13, l: 4, pct: .765, pf: 483, pa: 280, home: '6-3', away: '7-1', strk: 'L1' },
      { rank: 2, team: 'Browns', w: 11, l: 6, pct: .647, pf: 396, pa: 362, home: '8-1', away: '3-5', strk: 'L1' },
      { rank: 3, team: 'Steelers', w: 10, l: 7, pct: .588, pf: 304, pa: 324, home: '5-4', away: '5-3', strk: 'W3' },
      { rank: 4, team: 'Bengals', w: 9, l: 8, pct: .529, pf: 366, pa: 384, home: '6-3', away: '3-5', strk: 'W1' },
    ],
  },
  {
    division: 'AFC South',
    teams: [
      { rank: 1, team: 'Texans', w: 10, l: 7, pct: .588, pf: 377, pa: 353, home: '6-3', away: '4-4', strk: 'W2' },
      { rank: 2, team: 'Jaguars', w: 9, l: 8, pct: .529, pf: 377, pa: 371, home: '4-5', away: '5-3', strk: 'L1' },
      { rank: 3, team: 'Colts', w: 9, l: 8, pct: .529, pf: 396, pa: 415, home: '4-5', away: '5-3', strk: 'L1' },
      { rank: 4, team: 'Titans', w: 6, l: 11, pct: .353, pf: 305, pa: 367, home: '5-4', away: '1-7', strk: 'L7' },
    ],
  },
];

const nfcStandings = [
  {
    division: 'NFC East',
    teams: [
      { rank: 1, team: 'Cowboys', w: 12, l: 5, pct: .706, pf: 509, pa: 315, home: '8-0', away: '4-5', strk: 'W2' },
      { rank: 2, team: 'Eagles', w: 11, l: 6, pct: .647, pf: 433, pa: 428, home: '6-2', away: '5-4', strk: 'L2' },
      { rank: 3, team: 'Giants', w: 6, l: 11, pct: .353, pf: 266, pa: 407, home: '4-4', away: '2-7', strk: 'W1' },
      { rank: 4, team: 'Commanders', w: 4, l: 13, pct: .235, pf: 329, pa: 518, home: '1-7', away: '3-6', strk: 'L8' },
    ],
  },
  {
    division: 'NFC West',
    teams: [
      { rank: 1, team: '49ers', w: 12, l: 5, pct: .706, pf: 491, pa: 298, home: '5-3', away: '7-2', strk: 'L1' },
      { rank: 2, team: 'Rams', w: 10, l: 7, pct: .588, pf: 404, pa: 377, home: '5-3', away: '5-4', strk: 'W4' },
      { rank: 3, team: 'Seahawks', w: 9, l: 8, pct: .529, pf: 364, pa: 402, home: '5-3', away: '4-5', strk: 'W1' },
      { rank: 4, team: 'Cardinals', w: 4, l: 13, pct: .235, pf: 330, pa: 455, home: '2-6', away: '2-7', strk: 'L1' },
    ],
  },
  {
    division: 'NFC North',
    teams: [
      { rank: 1, team: 'Lions', w: 12, l: 5, pct: .706, pf: 461, pa: 395, home: '6-2', away: '6-3', strk: 'W1' },
      { rank: 2, team: 'Packers', w: 9, l: 8, pct: .529, pf: 383, pa: 350, home: '5-3', away: '4-5', strk: 'W3' },
      { rank: 3, team: 'Vikings', w: 7, l: 10, pct: .412, pf: 344, pa: 362, home: '2-6', away: '5-4', strk: 'L4' },
      { rank: 4, team: 'Bears', w: 7, l: 10, pct: .412, pf: 360, pa: 379, home: '5-3', away: '2-7', strk: 'L1' },
    ],
  },
  {
    division: 'NFC South',
    teams: [
      { rank: 1, team: 'Buccaneers', w: 9, l: 8, pct: .529, pf: 348, pa: 325, home: '4-4', away: '5-4', strk: 'W1' },
      { rank: 2, team: 'Saints', w: 9, l: 8, pct: .529, pf: 402, pa: 327, home: '5-3', away: '4-5', strk: 'W2' },
      { rank: 3, team: 'Falcons', w: 7, l: 10, pct: .412, pf: 321, pa: 373, home: '5-3', away: '2-7', strk: 'L2' },
      { rank: 4, team: 'Panthers', w: 2, l: 15, pct: .118, pf: 236, pa: 416, home: '2-6', away: '0-9', strk: 'L3' },
    ],
  },
];

const gamesToday = [
  { league: 'NFL', teams: 'Bills Vs Dolphins', time: '2024-07-21 12:35 PM' },
  { league: 'NFL', teams: 'Jets Vs Patriots', time: '2024-07-21 16:05 PM' },
  { league: 'NFL', teams: 'Chiefs Vs Raiders', time: '2024-07-21 18:40 PM' },
  { league: 'NFL', teams: 'Broncos Vs Chargers', time: '2024-07-21 19:10 PM' },
  { league: 'NFL', teams: 'Ravens Vs Browns', time: '2024-07-21 20:10 PM' },
  { league: 'NFL', teams: 'Steelers Vs Bengals', time: '2024-07-21 21:38 PM' },
];

const gamesYesterday = [
  { league: 'NFL', teams: 'Texans Vs Jaguars', time: '2024-07-20 12:35 PM' },
  { league: 'NFL', teams: 'Colts Vs Titans', time: '2024-07-20 16:05 PM' },
  { league: 'NFL', teams: 'Cowboys Vs Eagles', time: '2024-07-20 18:40 PM' },
  { league: 'NFL', teams: 'Giants Vs Commanders', time: '2024-07-20 19:10 PM' },
  { league: 'NFL', teams: '49ers Vs Rams', time: '2024-07-20 20:10 PM' },
  { league: 'NFL', teams: 'Seahawks Vs Cardinals', time: '2024-07-20 21:38 PM' },
];

const gamesTomorrow = [
  { league: 'NFL', teams: 'Lions Vs Packers', time: '2024-07-22 12:35 PM' },
  { league: 'NFL', teams: 'Vikings Vs Bears', time: '2024-07-22 16:05 PM' },
  { league: 'NFL', teams: 'Buccaneers Vs Saints', time: '2024-07-22 18:40 PM' },
  { league: 'NFL', teams: 'Falcons Vs Panthers', time: '2024-07-22 19:10 PM' },
  { league: 'NFL', teams: 'Texans Vs Jaguars', time: '2024-07-22 20:10 PM' },
  { league: 'NFL', teams: 'Colts Vs Titans', time: '2024-07-22 21:38 PM' },
];

const StandingsTable = ({ standings }) => (
  <table className="w-full text-left">
    <thead>
      <tr className="border-b border-muted">
        <th className="py-2">#</th>
        <th className="py-2">Team</th>
        <th className="py-2">W</th>
        <th className="py-2">L</th>
        <th className="py-2">T</th>
        <th className="py-2">Pct</th>
        <th className="py-2">PF</th>
        <th className="py-2">PA</th>
        <th className="py-2">Home</th>
        <th className="py-2">Away</th>
        <th className="py-2">Strk</th>
      </tr>
    </thead>
    {standings.map((division, index) => (
      <tbody key={index}>
        <tr>
          <th colSpan="11" className="py-2">{division.division}</th>
        </tr>
        {division.teams.map((team, index) => (
          <tr key={index} className="border-b border-muted">
            <td className="py-2">{team.rank}</td>
            <td className="py-2">{team.team}</td>
            <td className="py-2">{team.w}</td>
            <td className="py-2">{team.l}</td>
            <td className="py-2">{team.t}</td>
            <td className="py-2">{team.pct}</td>
            <td className="py-2">{team.pf}</td>
            <td className="py-2">{team.pa}</td>
            <td className="py-2">{team.home}</td>
            <td className="py-2">{team.away}</td>
            <td className="py-2">{team.strk}</td>
          </tr>
        ))}
      </tbody>
    ))}
  </table>
);

const Nfl = () => {
  const [selectedDay, setSelectedDay] = useState('Today');

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const games = selectedDay === 'Yesterday' ? gamesYesterday : selectedDay === 'Tomorrow' ? gamesTomorrow : gamesToday;

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">NFL</h1>
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
          <div className={cardClasses}>
            <ul className="divide-y divide-border">
              {games.map((game, index) => (
                <li key={index} className={flexJustifyBetweenClasses + ' ' + py2Classes}>
                  <div className={flexCenterClasses}>
                    <span className={primaryBadgeClasses}>{game.league}</span>
                    <Link to={`/live/nfl/${game.teams}`} className={textForegroundClasses}>{game.teams}</Link>
                  </div>
                  <span className={textMutedForegroundClasses + ' text-sm'}>{game.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <aside className={cardClasses}>
          <h3 className="text-lg font-bold mb-4">STANDINGS:</h3>
          <div className="mb-4">
            <select className={inputClasses} onChange={handleDayChange}>
              <option value="AFC">AFC</option>
              <option value="NFC">NFC</option>
            </select>
          </div>
          <StandingsTable standings={selectedDay === 'AFC' ? afcStandings : nfcStandings} />
        </aside>
      </main>
    </div>
  );
};

export default Nfl;
