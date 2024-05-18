"use client"

import React from 'react';
import './navigationbar.css';

const NavigationBar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="index.html">GameShop</a>
      </div>
      <div className="nav-links">
        <a href="./home/index.html">Home</a>
        <div className="dropdown">
          <a href="#" className="dropbtn">Products</a>
          <div className="dropdown-content">
            <a href="../products/videogames.html">Video Games</a>
            <a href="../products/consoles.html">Consoles</a>
            <a href="../products/accessories.html">Accessories</a>
          </div>
        </div>
        <a href="../press/press.html">Press & Reviews</a>
        <a href="../contact/contact.html">Contact</a>
      </div>
      <div className="icons">
        <img src="../../../public/search_icon.png" alt="Search" />
        <a href="../cart/cart.html">
          <img src="../../../public/cart_icon.png" alt="Cart" />
        </a>
        <a href="../account/account.html">
          <img src="../../../public/account_icon.png" alt="Account" />
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
