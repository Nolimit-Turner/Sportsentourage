// src/Nba.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Reuse the CSS file for styles

const primaryBadgeClasses = 'bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs mr-2';
const primaryButtonClasses = 'bg-primary text-primary-foreground px-4 py-2 rounded';
const textButtonClasses = 'text-foreground hover:text-primary';
const textForegroundClasses = 'text-foreground';
const textMutedForegroundClasses = 'text-muted-foreground';
const flexCenterClasses = 'flex items-center';
const flexJustifyBetweenClasses = 'flex justify-between';
const py2Classes = 'py-2';
const cardClasses = 'bg-card p-4 rounded-lg shadow-md';
const inputClasses = 'bg-input text-foreground p-2 rounded';

const easternConferenceStandings = [
  {
    division: 'Eastern Conference',
    teams: [
      { rank: 1, team: 'Celtics', w: 64, l: 18, pct: .780, gb: '-', conf: '41-11', home: '37-4', away: '27-14', l10: '7-3', strk: 'W2' },
      { rank: 2, team: 'Knicks', w: 50, l: 32, pct: .610, gb: '14.0', conf: '35-17', home: '35-17', away: '23-18', l10: '6-4', strk: 'W5' },
      { rank: 3, team: 'Bucks', w: 49, l: 33, pct: .598, gb: '15.0', conf: '34-18', home: '31-11', away: '18-22', l10: '3-7', strk: 'L2' },
      { rank: 4, team: 'Cavaliers', w: 48, l: 34, pct: .585, gb: '16.0', conf: '31-21', home: '26-15', away: '22-19', l10: '4-6', strk: 'L1' },
      { rank: 5, team: 'Magic', w: 47, l: 35, pct: .573, gb: '17.0', conf: '32-20', home: '19-23', away: '5-5', l10: '5-5', strk: 'W1' },
      { rank: 6, team: 'Pacers', w: 47, l: 35, pct: .573, gb: '17.0', conf: '32-20', home: '21-20', away: '7-3', l10: '7-3', strk: 'W1' },
      { rank: 7, team: '76ers', w: 47, l: 35, pct: .573, gb: '17.0', conf: '31-21', home: '25-16', away: '22-19', l10: '8-2', strk: 'W8' },
      { rank: 8, team: 'Heat', w: 46, l: 36, pct: .561, gb: '18.0', conf: '32-20', home: '22-19', away: '24-17', l10: '7-3', strk: 'W2' },
      { rank: 9, team: 'Bulls', w: 39, l: 43, pct: .476, gb: '25.0', conf: '22-29', home: '20-21', away: '19-22', l10: '5-5', strk: 'L1' },
      { rank: 10, team: 'Hawks', w: 36, l: 46, pct: .439, gb: '28.0', conf: '22-30', home: '21-20', away: '15-26', l10: '3-7', strk: 'L6' },
      { rank: 11, team: 'Nets', w: 32, l: 50, pct: .390, gb: '32.0', conf: '24-28', home: '20-21', away: '12-29', l10: '5-5', strk: 'L2' },
      { rank: 12, team: 'Raptors', w: 25, l: 57, pct: .305, gb: '39.0', conf: '18-34', home: '14-27', away: '11-30', l10: '2-8', strk: 'L4' },
      { rank: 13, team: 'Hornets', w: 21, l: 61, pct: .256, gb: '43.0', conf: '14-30', home: '11-30', away: '10-31', l10: '3-7', strk: 'L1' },
      { rank: 14, team: 'Wizards', w: 15, l: 67, pct: .183, gb: '49.0', conf: '11-41', home: '7-34', away: '8-33', l10: '1-9', strk: 'L6' },
      { rank: 15, team: 'Pistons', w: 14, l: 68, pct: .171, gb: '50.0', conf: '10-41', home: '7-35', away: '7-35', l10: '2-8', strk: 'L5' },
    ],
  },
];

const westernConferenceStandings = [
  {
    division: 'Western Conference',
    teams: [
      { rank: 1, team: 'Thunder', w: 57, l: 25, pct: .695, gb: '-', conf: '36-16', home: '33-8', away: '24-17', l10: '7-3', strk: 'W5' },
      { rank: 2, team: 'Nuggets', w: 57, l: 25, pct: .695, gb: '-', conf: '33-19', home: '33-8', away: '24-17', l10: '6-4', strk: 'W1' },
      { rank: 3, team: 'Timberwolves', w: 56, l: 26, pct: .683, gb: '1.0', conf: '37-15', home: '30-11', away: '26-15', l10: '6-4', strk: 'L1' },
      { rank: 4, team: 'Clippers', w: 51, l: 31, pct: .622, gb: '6.0', conf: '30-22', home: '25-16', away: '26-15', l10: '6-4', strk: 'L3' },
      { rank: 5, team: 'Mavericks', w: 50, l: 32, pct: .610, gb: '7.0', conf: '31-20', home: '25-16', away: '25-16', l10: '7-3', strk: 'L2' },
      { rank: 6, team: 'Suns', w: 49, l: 33, pct: .598, gb: '8.0', conf: '29-23', home: '25-16', away: '24-17', l10: '7-3', strk: 'W3' },
      { rank: 7, team: 'Lakers', w: 47, l: 35, pct: .573, gb: '10.0', conf: '27-25', home: '28-14', away: '19-21', l10: '7-3', strk: 'W2' },
      { rank: 8, team: 'Pelicans', w: 49, l: 33, pct: .598, gb: '8.0', conf: '30-22', home: '21-18', away: '24-17', l10: '5-5', strk: 'L1' },
      { rank: 9, team: 'Kings', w: 46, l: 36, pct: .561, gb: '11.0', conf: '30-22', home: '24-17', away: '21-19', l10: '4-6', strk: 'W1' },
      { rank: 10, team: 'Warriors', w: 46, l: 36, pct: .561, gb: '11.0', conf: '26-26', home: '21-20', away: '25-16', l10: '8-2', strk: 'W1' },
      { rank: 11, team: 'Rockets', w: 41, l: 41, pct: .500, gb: '16.0', conf: '28-24', home: '27-14', away: '14-27', l10: '4-6', strk: 'W2' },
      { rank: 12, team: 'Jazz', w: 31, l: 51, pct: .378, gb: '26.0', conf: '16-36', home: '21-20', away: '10-31', l10: '2-8', strk: 'L5' },
      { rank: 13, team: 'Grizzlies', w: 27, l: 55, pct: .329, gb: '30.0', conf: '14-37', home: '9-32', away: '18-23', l10: '3-7', strk: 'L5' },
      { rank: 14, team: 'Spurs', w: 22, l: 60, pct: .268, gb: '35.0', conf: '15-34', home: '12-30', away: '19-31', l10: '6-4', strk: 'W4' },
      { rank: 15, team: 'Trail Blazers', w: 21, l: 61, pct: .256, gb: '36.0', conf: '8-44', home: '11-30', away: '10-31', l10: '2-8', strk: 'L5' },
    ],
  },
];

const gamesToday = [
  { league: 'NBA', teams: 'Celtics Vs Bucks', time: '2024-07-08 12:35 PM' },
  { league: 'NBA', teams: 'Wizards Vs Pacers', time: '2024-07-08 16:05 PM' },
  { league: 'NBA', teams: 'Pistons Vs Cavaliers', time: '2024-07-08 18:40 PM' },
  { league: 'NBA', teams: 'Clippers Vs Nuggets', time: '2024-07-08 19:10 PM' },
  { league: 'NBA', teams: 'Jazz Vs Timberwolves', time: '2024-07-08 20:10 PM' },
  { league: 'NBA', teams: 'Lakers Vs Rockets', time: '2024-07-08 21:38 PM' },
];

const gamesYesterday = [
  { league: 'NBA', teams: 'Nets Vs Knicks', time: '2024-07-07 12:35 PM' },
  { league: 'NBA', teams: 'Hornets Vs Raptors', time: '2024-07-07 16:05 PM' },
  { league: 'NBA', teams: 'Heat Vs 76ers', time: '2024-07-07 18:40 PM' },
  { league: 'NBA', teams: 'Bulls Vs Hawks', time: '2024-07-07 19:10 PM' },
  { league: 'NBA', teams: 'Celtics Vs Magic', time: '2024-07-07 20:10 PM' },
  { league: 'NBA', teams: 'Warriors Vs Spurs', time: '2024-07-07 21:38 PM' },
];

const gamesTomorrow = [
  { league: 'NBA', teams: '76ers Vs Heat', time: '2024-07-09 12:35 PM' },
  { league: 'NBA', teams: 'Knicks Vs Nets', time: '2024-07-09 16:05 PM' },
  { league: 'NBA', teams: 'Raptors Vs Hornets', time: '2024-07-09 18:40 PM' },
  { league: 'NBA', teams: 'Hawks Vs Bulls', time: '2024-07-09 19:10 PM' },
  { league: 'NBA', teams: 'Magic Vs Celtics', time: '2024-07-09 20:10 PM' },
  { league: 'NBA', teams: 'Spurs Vs Warriors', time: '2024-07-09 21:38 PM' },
];

const StandingsTable = ({ standings }) => (
  <table className="w-full text-left">
    <thead>
      <tr className="border-b border-muted">
        <th className="py-2">#</th>
        <th className="py-2">Team</th>
        <th className="py-2">W</th>
        <th className="py-2">L</th>
        <th className="py-2">Pct</th>
        <th className="py-2">GB</th>
        <th className="py-2">Conf</th>
        <th className="py-2">Home</th>
        <th className="py-2">Away</th>
        <th className="py-2">L10</th>
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
            <td className="py-2">{team.pct}</td>
            <td className="py-2">{team.gb}</td>
            <td className="py-2">{team.conf}</td>
            <td className="py-2">{team.home}</td>
            <td className="py-2">{team.away}</td>
            <td className="py-2">{team.l10}</td>
            <td className="py-2">{team.strk}</td>
          </tr>
        ))}
      </tbody>
    ))}
  </table>
);

const Nba = () => {
  const [selectedDay, setSelectedDay] = useState('Today');
  const [selectedConference, setSelectedConference] = useState('Eastern Conference');

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const handleConferenceChange = (event) => {
    setSelectedConference(event.target.value);
  };

  const games = selectedDay === 'Yesterday' ? gamesYesterday : selectedDay === 'Tomorrow' ? gamesTomorrow : gamesToday;
  const standings = selectedConference === 'Eastern Conference' ? easternConferenceStandings : westernConferenceStandings;

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">NBA</h1>
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
                    <Link to={`/live-nba/${game.teams.replace(/\s+/g, '-').toLowerCase()}`} className={textForegroundClasses}>{game.teams}</Link>
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
            <select className={inputClasses} value={selectedConference} onChange={handleConferenceChange}>
              <option>Eastern Conference</option>
              <option>Western Conference</option>
            </select>
          </div>
          <StandingsTable standings={standings} />
        </aside>
      </main>
    </div>
  );
};

export default Nba;
