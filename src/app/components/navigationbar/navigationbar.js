"use client"

import React from 'react';
import './navigationbar.css';

const NavigationBar = ({ onSelectPage }) => {
  return (
    <nav className="navigation-bar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#" onClick={() => onSelectPage('home')}>Home</a></li>
        <li className="nav-item"><a href="#" onClick={() => onSelectPage('videogames')}>VideoGames</a></li>
        <li className="nav-item"><a href="#" onClick={() => onSelectPage('consoles')}>Consoles</a></li>
        <li className="nav-item"><a href="#" onClick={() => onSelectPage('accessories')}>Accessories</a></li>
        <li className="nav-item"><a href="#" onClick={() => onSelectPage('press')}>Press & Reviews</a></li>
        <li className="nav-item"><a href="#" onClick={() => onSelectPage('playstation_article')}>PS Article</a></li>
        <li className="nav-item"><a href="#" onClick={() => onSelectPage('mw3_article')}>MW3 Article</a></li>
        <li className="nav-item"><a href="#" onClick={() => onSelectPage('contact')}>Contact</a></li>
        <li className="nav-item"><a href="#" onClick={() => onSelectPage('cart')}>Cart</a></li>
        <li className="nav-item"><a href="#" onClick={() => onSelectPage('account')}>Account</a></li>
        <li className="nav-item"><a href="#" onClick={() => onSelectPage('order')}>Order History</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
