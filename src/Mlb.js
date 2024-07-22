// src/Mlb.js
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

const americanLeagueStandings = [
  {
    division: 'American League East',
    teams: [
      { rank: 1, team: 'Orioles', w: 57, l: 33, pct: .633, gb: '-', home: '29-17', away: '28-16', l10: '7-3' },
      { rank: 2, team: 'Yankees', w: 55, l: 37, pct: .598, gb: '3.0', home: '25-19', away: '30-18', l10: '3-7' },
      { rank: 3, team: 'Red Sox', w: 49, l: 40, pct: .551, gb: '7.5', home: '20-23', away: '29-17', l10: '6-4' },
      { rank: 4, team: 'Rays', w: 44, l: 46, pct: .489, gb: '13.0', home: '23-25', away: '21-21', l10: '4-6' },
      { rank: 5, team: 'Blue Jays', w: 41, l: 49, pct: .456, gb: '16.0', home: '21-24', away: '20-25', l10: '4-6' },
    ],
  },
  {
    division: 'American League Central',
    teams: [
      { rank: 1, team: 'Guardians', w: 56, l: 32, pct: .636, gb: '-', home: '30-11', away: '26-21', l10: '5-5' },
      { rank: 2, team: 'Twins', w: 51, l: 39, pct: .567, gb: '6.0', home: '27-18', away: '24-21', l10: '7-3' },
      { rank: 3, team: 'Royals', w: 49, l: 43, pct: .533, gb: '9.0', home: '31-18', away: '18-25', l10: '5-5' },
      { rank: 4, team: 'Tigers', w: 42, l: 48, pct: .467, gb: '15.0', home: '19-23', away: '23-26', l10: '5-5' },
      { rank: 5, team: 'White Sox', w: 26, l: 66, pct: .283, gb: '32.0', home: '16-29', away: '10-37', l10: '5-5' },
    ],
  },
  {
    division: 'American League West',
    teams: [
      { rank: 1, team: 'Mariners', w: 49, l: 43, pct: .533, gb: '-', home: '30-18', away: '19-25', l10: '4-6' },
      { rank: 2, team: 'Astros', w: 46, l: 44, pct: .511, gb: '2.0', home: '24-19', away: '22-25', l10: '6-4' },
      { rank: 3, team: 'Rangers', w: 42, l: 48, pct: .467, gb: '6.0', home: '24-21', away: '18-27', l10: '5-5' },
      { rank: 4, team: 'Angels', w: 37, l: 52, pct: .416, gb: '10.5', home: '18-26', away: '19-26', l10: '4-6' },
      { rank: 5, team: 'Athletics', w: 34, l: 58, pct: .370, gb: '15.0', home: '22-25', away: '12-33', l10: '5-5' },
    ],
  },
];

const nationalLeagueStandings = [
  {
    division: 'National League East',
    teams: [
      { rank: 1, team: 'Phillies', w: 58, l: 32, pct: .644, gb: '-', home: '33-14', away: '25-18', l10: '5-5' },
      { rank: 2, team: 'Braves', w: 49, l: 39, pct: .557, gb: '8.0', home: '29-17', away: '20-22', l10: '5-5' },
      { rank: 3, team: 'Mets', w: 44, l: 45, pct: .494, gb: '13.5', home: '21-25', away: '23-20', l10: '4-6' },
      { rank: 4, team: 'Nationals', w: 42, l: 48, pct: .467, gb: '16.0', home: '20-23', away: '22-25', l10: '4-6' },
      { rank: 5, team: 'Marlins', w: 32, l: 58, pct: .356, gb: '26.0', home: '18-31', away: '14-27', l10: '4-6' },
    ],
  },
  {
    division: 'National League Central',
    teams: [
      { rank: 1, team: 'Brewers', w: 53, l: 38, pct: .582, gb: '-', home: '27-13', away: '26-25', l10: '5-5' },
      { rank: 2, team: 'Cardinals', w: 47, l: 42, pct: .528, gb: '5.0', home: '24-18', away: '23-24', l10: '6-4' },
      { rank: 3, team: 'Pirates', w: 43, l: 47, pct: .478, gb: '9.5', home: '22-24', away: '21-23', l10: '4-6' },
      { rank: 4, team: 'Reds', w: 42, l: 48, pct: .467, gb: '10.5', home: '20-26', away: '22-22', l10: '5-5' },
      { rank: 5, team: 'Cubs', w: 42, l: 49, pct: .462, gb: '11.0', home: '25-21', away: '17-28', l10: '5-5' },
    ],
  },
  {
    division: 'National League West',
    teams: [
      { rank: 1, team: 'Dodgers', w: 55, l: 36, pct: .604, gb: '-', home: '28-19', away: '27-17', l10: '5-5' },
      { rank: 2, team: 'Padres', w: 49, l: 45, pct: .521, gb: '7.5', home: '25-24', away: '24-21', l10: '6-4' },
      { rank: 3, team: 'Diamondbacks', w: 45, l: 45, pct: .500, gb: '9.5', home: '22-21', away: '23-24', l10: '5-5' },
      { rank: 4, team: 'Giants', w: 44, l: 47, pct: .484, gb: '11.0', home: '19-28', away: '25-19', l10: '5-5' },
      { rank: 5, team: 'Rockies', w: 32, l: 58, pct: .356, gb: '22.5', home: '20-27', away: '12-31', l10: '5-5' },
    ],
  },
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
        <th className="py-2">Home</th>
        <th className="py-2">Away</th>
        <th className="py-2">L10</th>
      </tr>
    </thead>
    {standings.map((division, index) => (
      <tbody key={index}>
        <tr>
          <th colSpan="9" className="py-2">{division.division}</th>
        </tr>
        {division.teams.map((team, index) => (
          <tr key={index} className="border-b border-muted">
            <td className="py-2">{team.rank}</td>
            <td className="py-2">{team.team}</td>
            <td className="py-2">{team.w}</td>
            <td className="py-2">{team.l}</td>
            <td className="py-2">{team.pct}</td>
            <td className="py-2">{team.gb}</td>
            <td className="py-2">{team.home}</td>
            <td className="py-2">{team.away}</td>
            <td className="py-2">{team.l10}</td>
          </tr>
        ))}
      </tbody>
    ))}
  </table>
);

const gamesToday = [
  { teams: "Pittsburgh Pirates Vs New York Mets", time: "2024-07-08 12:35 PM" },
  { teams: "Washington Nationals Vs St. Louis Cardinals", time: "2024-07-08 16:05 PM" },
  { teams: "Detroit Tigers Vs Cleveland Guardians", time: "2024-07-08 18:40 PM" },
  { teams: "Cincinnati Reds Vs Colorado Rockies", time: "2024-07-08 19:10 PM" },
  { teams: "Chicago White Sox Vs Minnesota Twins", time: "2024-07-08 20:10 PM" },
  { teams: "Los Angeles Angels Vs Texas Rangers", time: "2024-07-08 21:38 PM" },
  { teams: "Arizona Diamondbacks Vs Atlanta Braves", time: "2024-07-08 21:40 PM" }
];

const gamesYesterday = [
  { teams: "Boston Red Sox Vs Baltimore Orioles", time: "2024-07-07 12:35 PM" },
  { teams: "Toronto Blue Jays Vs Tampa Bay Rays", time: "2024-07-07 16:05 PM" },
  { teams: "Kansas City Royals Vs Chicago White Sox", time: "2024-07-07 18:40 PM" },
  { teams: "Houston Astros Vs Los Angeles Angels", time: "2024-07-07 19:10 PM" },
  { teams: "Seattle Mariners Vs Oakland Athletics", time: "2024-07-07 20:10 PM" },
  { teams: "Texas Rangers Vs New York Yankees", time: "2024-07-07 21:38 PM" },
  { teams: "Cleveland Guardians Vs Detroit Tigers", time: "2024-07-07 21:40 PM" }
];

const gamesTomorrow = [
  { teams: "San Francisco Giants Vs San Diego Padres", time: "2024-07-09 12:35 PM" },
  { teams: "Milwaukee Brewers Vs St. Louis Cardinals", time: "2024-07-09 16:05 PM" },
  { teams: "Arizona Diamondbacks Vs Colorado Rockies", time: "2024-07-09 18:40 PM" },
  { teams: "Miami Marlins Vs Atlanta Braves", time: "2024-07-09 19:10 PM" },
  { teams: "Chicago Cubs Vs Cincinnati Reds", time: "2024-07-09 20:10 PM" },
  { teams: "Los Angeles Dodgers Vs Washington Nationals", time: "2024-07-09 21:38 PM" },
  { teams: "Philadelphia Phillies Vs New York Mets", time: "2024-07-09 21:40 PM" }
];

const Mlb = () => {
  const [selectedDay, setSelectedDay] = useState('Today');
  const [selectedLeague, setSelectedLeague] = useState('American League');

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const handleLeagueChange = (event) => {
    setSelectedLeague(event.target.value);
  };

  const standings = selectedLeague === 'American League' ? americanLeagueStandings : nationalLeagueStandings;
  const games = selectedDay === 'Yesterday' ? gamesYesterday : selectedDay === 'Tomorrow' ? gamesTomorrow : gamesToday;

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">MLB</h1>
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
                    <Link to={`/live-mlb/${encodeURIComponent(game.teams)}`} className={textForegroundClasses}>{game.teams}</Link>
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
            <select className={inputClasses} value={selectedLeague} onChange={handleLeagueChange}>
              <option>American League</option>
              <option>National League</option>
            </select>
          </div>
          <StandingsTable standings={standings} />
        </aside>
      </main>
    </div>
  );
};

export default Mlb;
