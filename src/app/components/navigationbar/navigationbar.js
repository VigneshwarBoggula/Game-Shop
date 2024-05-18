'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import './navigationbar.css';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/products">Video Games</Link></li>
        <li className="nav-item"><Link to="/about">Consoles</Link></li>
        <li className="nav-item"><Link to="/contact">Accessories</Link></li>
        <li className="nav-item"><Link to="/press">Press & Reviews</Link></li>
        <li className="nav-item"><Link to="/playstation_article">PS Article</Link></li>
        <li className="nav-item"><Link to="/mw3_article">MW3 Article</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
        <li className="nav-item"><Link to="/cart">Cart</Link></li>
        <li className="nav-item"><Link to="/account">Account</Link></li>
        <li className="nav-item"><Link to="/order">Order History</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
