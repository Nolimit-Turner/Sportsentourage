// src/LiveChatSoccer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const avatarUrl = 'https://placehold.co/40x40';
const flagUrl1 = 'https://placehold.co/60x40';
const flagUrl2 = 'https://placehold.co/60x40';
const commonFlexItems = 'flex items-start space-x-2';
const commonAvatarClass = 'rounded-full';

// Generate random chat messages
const generateRandomChatData = () => {
  const messages = [
    { name: 'Helena Hills', message: 'WHAT A STRIKE' },
    { name: 'Carlo Emilio', message: "Let's go" },
    { name: 'Oscar Davis', message: 'Trueeeeee' },
    { name: 'Daniel Jay Park', message: 'lol yeah they winning?' },
    { name: 'Mark', message: 'What a strike man' },
    { name: 'Giannis Constantinou', message: 'yep 👏👏' },
    { name: 'Briana Lewis', message: 'GOALLLLLLLL' },
    { name: 'Partcat', message: 'Easy moneyyyyyyyy' },
    { name: 'Sherry Roy', message: 'They need a new goalie man' },
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

const LiveChatSoccer = () => {
  const { game } = useParams();
  const [chatData, setChatData] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const chatInterval = setInterval(() => {
      setChatData((prevChatData) => [
        ...prevChatData,
        generateRandomChatData(),
      ]);
    }, 1000);

    const timeInterval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(chatInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <div className="w-1/3 border-r border-border p-4">
        <h2 className="text-xl font-bold mb-4">Live chat</h2>
        <div className="space-y-4 overflow-y-auto h-full">
          {chatData.map((chat, index) => (
            <div key={index} className={commonFlexItems}>
              <img src={avatarUrl} alt="User Avatar" className={commonAvatarClass} />
              <div>
                <p className="font-bold">{chat.name}</p>
                <p className="text-muted-foreground">{chat.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 p-4 flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold mb-4">{game}</h2>
        <div className="flex items-center space-x-4">
          <img src={flagUrl1} alt="Uruguay Flag" />
          <div className="text-center">
            <p className="text-xl font-bold">LIVE SCORE</p>
            <div className="flex items-center space-x-8">
              <p className="text-3xl font-bold">1</p>
              <p className="text-xl">{formatTime(time)}</p>
              <p className="text-3xl font-bold">0</p>
            </div>
          </div>
          <img src={flagUrl2} alt="Panama Flag" />
        </div>
        <div className="relative w-full max-w-lg h-64 bg-black flex items-center justify-center">
          <button className="text-white text-6xl">▶</button>
        </div>
      </div>
    </div>
  );
};

export default LiveChatSoccer;
