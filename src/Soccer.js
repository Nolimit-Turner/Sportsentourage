// src/Soccer.js
import React from 'react';
import './App.css'; // Reuse the CSS file for styles

const primaryButtonClasses = 'bg-primary text-primary-foreground px-4 py-2 rounded';
const textButtonClasses = 'text-foreground hover:text-primary';
const cardClasses = 'bg-card p-4 rounded-lg';
const mutedClasses = 'bg-muted p-2 rounded';
const mutedForegroundClasses = 'text-muted-foreground';
const inputClasses = 'bg-input text-foreground p-2 rounded';

const Soccer = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">SportsEntourage</h1>
        <nav className="flex space-x-4">
          <button className={primaryButtonClasses}>SOCCER</button>
          <button className={textButtonClasses}>MLB</button>
          <button className={textButtonClasses}>NBA</button>
          <button className={textButtonClasses}>NHL</button>
          <button className={textButtonClasses}>NFL</button>
          <button className={textButtonClasses}>MMA</button>
        </nav>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">SOCCER</h2>
          <div className="flex space-x-4 mb-4">
            <button className={textButtonClasses}>Yesterday</button>
            <button className={primaryButtonClasses}>Today</button>
            <button className={textButtonClasses}>Tomorrow</button>
          </div>
          <div className="space-y-4">
            <div className={cardClasses}>
              <h3 className="text-lg font-bold flex items-center mb-2">
                <img src="https://placehold.co/24x24" alt="EURO icon" className="mr-2" />
                EURO
              </h3>
              <div className="space-y-2">
                <div className={`flex justify-between items-center ${mutedClasses}`}>
                  <span>SOCCER | Switzerland VS Germany</span>
                  <span className={mutedForegroundClasses}>2024-06-23 12:45 PM</span>
                </div>
                <div className={`flex justify-between items-center ${mutedClasses}`}>
                  <span>SOCCER | Scotland VS Hungary</span>
                  <span className={mutedForegroundClasses}>2024-06-23 14:15 PM</span>
                </div>
              </div>
            </div>
            <div className={cardClasses}>
              <h3 className="text-lg font-bold flex items-center mb-2">
                <img src="https://placehold.co/24x24" alt="Copa América icon" className="mr-2" />
                Copa América
              </h3>
              <div className="space-y-2">
                <div className={`flex justify-between items-center ${mutedClasses}`}>
                  <span>SOCCER | USA VS Bolivia</span>
                  <span className={mutedForegroundClasses}>2024-06-23 18:00 PM</span>
                </div>
                <div className={`flex justify-between items-center ${mutedClasses}`}>
                  <span>SOCCER | Uruguay VS Panama</span>
                  <span className={mutedForegroundClasses}>2024-06-23 21:00 PM</span>
                </div>
              </div>
            </div>
            <div className={cardClasses}>
              <h3 className="text-lg font-bold flex items-center mb-2">
                <img src="https://placehold.co/24x24" alt="LaLiga 2 icon" className="mr-2" />
                LaLiga 2
              </h3>
              <div className="space-y-2">
                <div className={`flex justify-between items-center ${mutedClasses}`}>
                  <span>SOCCER | Espanyol VS Real Oviedo</span>
                  <span className={mutedForegroundClasses}>2024-06-23 11:15 AM</span>
                </div>
              </div>
            </div>
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
                <th className="py-2">Pts</th>
                <th className="py-2">P</th>
                <th className="py-2">W</th>
                <th className="py-2">D</th>
                <th className="py-2">L</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-muted">
                <td className="py-2">1.</td>
                <td className="py-2">Man City</td>
                <td className="py-2">91</td>
                <td className="py-2">38</td>
                <td className="py-2">28</td>
                <td className="py-2">8</td>
                <td className="py-2">3</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">2.</td>
                <td className="py-2">Arsenal</td>
                <td className="py-2">89</td>
                <td className="py-2">38</td>
                <td className="py-2">28</td>
                <td className="py-2">5</td>
                <td className="py-2">5</td>
              </tr>
              <tr className="border-b border-muted">
                <td className="py-2">3.</td>
                <td className="py-2">Liverpool</td>
                <td className="py-2">82</td>
                <td className="py-2">38</td>
                <td className="py-2">24</td>
                <td className="py-2">10</td>
                <td className="py-2">4</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </main>
    </div>
  );
};

export default Soccer;
