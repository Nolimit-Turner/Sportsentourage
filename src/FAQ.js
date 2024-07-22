// src/FAQ.js
import React from 'react';
import './App.css'; // Reuse the CSS file for styles

const cardClasses = 'bg-card p-4 rounded-lg shadow-md mb-4';
const textMutedForegroundClasses = 'text-muted-foreground';
const textForegroundClasses = 'text-foreground';

const faqs = [
  {
    question: "How can I sign up for an account?",
    answer: "To sign up for an account, click the 'Sign up' button on the top-right corner of the homepage and follow the instructions."
  },
  {
    question: "How do I watch a live stream?",
    answer: "You can watch a live stream by selecting a match from the 'Today' section and clicking on the link. This will take you to the live chat and streaming page."
  },
  {
    question: "Can I view past matches?",
    answer: "Yes, you can view past matches by clicking on the 'Yesterday' button. This will show you the list of matches that were streamed the day before."
  },
  {
    question: "How do I check the standings of a league?",
    answer: "League standings are displayed on the right side of the screen when you select a sport. You can view detailed standings by choosing the desired league from the dropdown menu."
  },
  {
    question: "Is there a way to interact with other viewers?",
    answer: "Yes, you can interact with other viewers using the live chat feature available during live streams. Simply type your message and it will appear in the chat."
  },
  {
    question: "What sports are available on this website?",
    answer: "We offer live streams and VODs for various sports including Soccer, MLB, NBA, NHL, and NFL."
  },
  {
    question: "How do I change the language of the website?",
    answer: "You can change the language of the website by selecting your preferred language from the language dropdown menu located at the top-right corner of the page."
  },
  {
    question: "How do I report a problem with the stream?",
    answer: "If you encounter any issues with the stream, please use the 'Contact Us' form available at the bottom of the page to report the problem. Our support team will assist you as soon as possible."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
        <nav className="flex space-x-4">
        </nav>
      </header>
      <main>
        {faqs.map((faq, index) => (
          <div key={index} className={cardClasses}>
            <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
            <p className={textMutedForegroundClasses}>{faq.answer}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default FAQ;
