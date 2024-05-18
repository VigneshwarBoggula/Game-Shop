'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import './navigationbar.css';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="logo">
        <Link to="/">GameShop</Link>
      </div>
      <div className="testing">
        <Link to="/mw3_article">MW3</Link>

        <Link to="/playstation_article">PS5</Link>
        
        <Link to="/order">Order</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <Link to="#" className="dropbtn">Products</Link>
          <div className="dropdown-content">
            <Link to="/videogames">Video Games</Link>
            <Link to="/consoles">Consoles</Link>
            <Link to="/accessories">Accessories</Link>
          </div>
        </div>
        <Link to="/press">Press & Reviews</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="icons">
        <img src="/search_icon.png" alt="Search" />
        <Link to="/cart">
          <img src="/cart_icon.png" alt="Cart" />
        </Link>
        <Link to="/account">
          <img src="/account_icon.png" alt="Account" />
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
