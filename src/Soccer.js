// src/Soccer.js
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
    league: "EURO",
    matches: [
      { teams: "Switzerland VS Germany", time: "2024-06-23 12:45 PM" },
      { teams: "Scotland VS Hungary", time: "2024-06-23 14:15 PM" }
    ]
  },
  {
    league: "Copa América",
    matches: [
      { teams: "USA VS Bolivia", time: "2024-06-23 18:00 PM" },
      { teams: "Uruguay VS Panama", time: "2024-06-23 21:00 PM" }
    ]
  },
  {
    league: "LaLiga 2",
    matches: [
      { teams: "Espanyol VS Real Oviedo", time: "2024-06-23 11:15 AM" }
    ]
  }
];

const gamesYesterday = [
  {
    league: "EURO",
    matches: [
      { teams: "Portugal VS France", time: "2024-06-22 12:45 PM" },
      { teams: "Netherlands VS Italy", time: "2024-06-22 14:15 PM" }
    ]
  },
  {
    league: "Copa América",
    matches: [
      { teams: "Argentina VS Brazil", time: "2024-06-22 18:00 PM" },
      { teams: "Colombia VS Chile", time: "2024-06-22 21:00 PM" }
    ]
  },
  {
    league: "LaLiga 2",
    matches: [
      { teams: "Levante VS Malaga", time: "2024-06-22 11:15 AM" }
    ]
  }
];

const gamesTomorrow = [
  {
    league: "EURO",
    matches: [
      { teams: "Belgium VS Spain", time: "2024-06-24 12:45 PM" },
      { teams: "Poland VS Austria", time: "2024-06-24 14:15 PM" }
    ]
  },
  {
    league: "Copa América",
    matches: [
      { teams: "Paraguay VS Venezuela", time: "2024-06-24 18:00 PM" },
      { teams: "Peru VS Ecuador", time: "2024-06-24 21:00 PM" }
    ]
  },
  {
    league: "LaLiga 2",
    matches: [
      { teams: "Almeria VS Tenerife", time: "2024-06-24 11:15 AM" }
    ]
  }
];

const Soccer = () => {
  const [selectedDay, setSelectedDay] = useState('Today');

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const games = selectedDay === 'Yesterday' ? gamesYesterday : selectedDay === 'Tomorrow' ? gamesTomorrow : gamesToday;

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Soccer</h1>
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
                      <span><Link to={`/live/${match.teams}`} className={textForegroundClasses}>{match.teams}</Link></span>
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
            <select className={inputClasses}>
              <option>Premier League</option>
              <option>LaLiga</option>
              <option>Serie A</option>
              <option>Bundesliga</option>
            </select>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-muted">
                <th className="py-2">#</th>
                <th className="py-2">Team</th>
                <th className="py-2">MP</th>
                <th className="py-2">W</th>
                <th className="py-2">D</th>
                <th className="py-2">L</th>
                <th className="py-2">GF</th>
                <th className="py-2">GA</th>
                <th className="py-2">GD</th>
                <th className="py-2">Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-muted">
                <td className="py-2">1.</td>
                <td className="py-2">Man City</td>
                <td className="py-2">38</td>
                <td className="py-2">28</td>
                <td className="py-2">7</td>
                <td className="py-2">3</td>
                <td className="py-2">96</td>
                <td className="py-2">34</td>
                <td className="py-2">62</td>
                <td className="py-2">91</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">2.</td>
                <td className="py-2">Arsenal</td>
                <td className="py-2">38</td>
                <td className="py-2">28</td>
                <td className="py-2">5</td>
                <td className="py-2">5</td>
                <td className="py-2">91</td>
                <td className="py-2">29</td>
                <td className="py-2">62</td>
                <td className="py-2">89</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">3.</td>
                <td className="py-2">Liverpool</td>
                <td className="py-2">38</td>
                <td className="py-2">24</td>
                <td className="py-2">10</td>
                <td className="py-2">4</td>
                <td className="py-2">86</td>
                <td className="py-2">41</td>
                <td className="py-2">45</td>
                <td className="py-2">82</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">4.</td>
                <td className="py-2">Aston Villa</td>
                <td className="py-2">38</td>
                <td className="py-2">20</td>
                <td className="py-2">10</td>
                <td className="py-2">8</td>
                <td className="py-2">76</td>
                <td className="py-2">61</td>
                <td className="py-2">15</td>
                <td className="py-2">68</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">5.</td>
                <td className="py-2">Tottenham</td>
                <td className="py-2">38</td>
                <td className="py-2">20</td>
                <td className="py-2">6</td>
                <td className="py-2">12</td>
                <td className="py-2">74</td>
                <td className="py-2">61</td>
                <td className="py-2">13</td>
                <td className="py-2">66</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">6.</td>
                <td className="py-2">Chelsea</td>
                <td className="py-2">38</td>
                <td className="py-2">18</td>
                <td className="py-2">9</td>
                <td className="py-2">11</td>
                <td className="py-2">77</td>
                <td className="py-2">63</td>
                <td className="py-2">14</td>
                <td className="py-2">63</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">7.</td>
                <td className="py-2">Newcastle</td>
                <td className="py-2">38</td>
                <td className="py-2">18</td>
                <td className="py-2">6</td>
                <td className="py-2">14</td>
                <td className="py-2">65</td>
                <td className="py-2">63</td>
                <td className="py-2">2</td>
                <td className="py-2">60</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">8.</td>
                <td className="py-2">Man United</td>
                <td className="py-2">38</td>
                <td className="py-2">18</td>
                <td className="py-2">6</td>
                <td className="py-2">14</td>
                <td className="py-2">57</td>
                <td className="py-2">58</td>
                <td className="py-2">-1</td>
                <td className="py-2">60</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">9.</td>
                <td className="py-2">West Ham</td>
                <td className="py-2">38</td>
                <td className="py-2">14</td>
                <td className="py-2">10</td>
                <td className="py-2">14</td>
                <td className="py-2">60</td>
                <td className="py-2">74</td>
                <td className="py-2">-14</td>
                <td className="py-2">52</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">10.</td>
                <td className="py-2">Crystal Palace</td>
                <td className="py-2">38</td>
                <td className="py-2">13</td>
                <td className="py-2">10</td>
                <td className="py-2">15</td>
                <td className="py-2">57</td>
                <td className="py-2">58</td>
                <td className="py-2">-1</td>
                <td className="py-2">49</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">11.</td>
                <td className="py-2">Brighton</td>
                <td className="py-2">38</td>
                <td className="py-2">12</td>
                <td className="py-2">14</td>
                <td className="py-2">12</td>
                <td className="py-2">55</td>
                <td className="py-2">62</td>
                <td className="py-2">-7</td>
                <td className="py-2">48</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">12.</td>
                <td className="py-2">Bournemouth</td>
                <td className="py-2">38</td>
                <td className="py-2">13</td>
                <td className="py-2">9</td>
                <td className="py-2">16</td>
                <td className="py-2">54</td>
                <td className="py-2">67</td>
                <td className="py-2">-13</td>
                <td className="py-2">48</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">13.</td>
                <td className="py-2">Fulham</td>
                <td className="py-2">38</td>
                <td className="py-2">13</td>
                <td className="py-2">8</td>
                <td className="py-2">17</td>
                <td className="py-2">55</td>
                <td className="py-2">61</td>
                <td className="py-2">-6</td>
                <td className="py-2">47</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">14.</td>
                <td className="py-2">Wolves</td>
                <td className="py-2">38</td>
                <td className="py-2">13</td>
                <td className="py-2">7</td>
                <td className="py-2">18</td>
                <td className="py-2">50</td>
                <td className="py-2">65</td>
                <td className="py-2">-15</td>
                <td className="py-2">46</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">15.</td>
                <td className="py-2">Everton</td>
                <td className="py-2">38</td>
                <td className="py-2">13</td>
                <td class="py-2">9</td>
                <td class="py-2">16</td>
                <td class="py-2">40</td>
                <td class="py-2">51</td>
                <td class="py-2">-11</td>
                <td class="py-2">48</td>
              </tr>
              <tr class="border-b border-muted">
                <td class="py-2">16.</td>
                <td class="py-2">Brentford</td>
                <td class="py-2">38</td>
                <td class="py-2">10</td>
                <td class="py-2">9</td>
                <td class="py-2">19</td>
                <td class="py-2">56</td>
                <td class="py-2">65</td>
                <td class="py-2">-9</td>
                <td class="py-2">39</td>
              </tr>
              <tr class="border-b border-muted">
                <td class="py-2">17.</td>
                <td class="py-2">Nottingham Forest</td>
                <td class="py-2">38</td>
                <td class="py-2">9</td>
                <td class="py-2">9</td>
                <td class="py-2">20</td>
                <td class="py-2">49</td>
                <td class="py-2">67</td>
                <td class="py-2">-18</td>
                <td class="py-2">32</td>
              </tr>
              <tr class="border-b border-muted">
                <td class="py-2">18.</td>
                <td class="py-2">Luton Town</td>
                <td class="py-2">38</td>
                <td class="py-2">6</td>
                <td class="py-2">8</td>
                <td class="py-2">24</td>
                <td class="py-2">52</td>
                <td class="py-2">85</td>
                <td class="py-2">-33</td>
                <td class="py-2">26</td>
              </tr>
              <tr class="border-b border-muted">
                <td class="py-2">19.</td>
                <td class="py-2">Burnley</td>
                <td class="py-2">38</td>
                <td class="py-2">5</td>
                <td class="py-2">9</td>
                <td class="py-2">24</td>
                <td class="py-2">41</td>
                <td class="py-2">78</td>
                <td class="py-2">-37</td>
                <td class="py-2">27</td>
              </tr>
              <tr class="border-b border-muted">
                <td class="py-2">20.</td>
                <td class="py-2">Sheffield United</td>
                <td class="py-2">38</td>
                <td class="py-2">3</td>
                <td class="py-2">7</td>
                <td class="py-2">28</td>
                <td class="py-2">34</td>
                <td class="py-2">104</td>
                <td class="py-2">-69</td>
                <td class="py-2">16</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </main>
    </div>
  );
};

export default Soccer;
