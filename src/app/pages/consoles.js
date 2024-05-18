'use client';

import React from 'react';
import '../styles/consoles.css';

const Consoles = () => {
  return (
    <div className="consoles-page">
      <h1>Consoles</h1>
      <p>Browse by Platform</p>
      <div className="product-boxes-section">
        {/* Product Boxes */}
        <div className="product-box">
          <img src="/playstation.jpg" alt="PlayStation" />
          <h3>PlayStation</h3>
          <a href="#">Shop Now</a>
        </div>
        <div className="product-box">
          <img src="/nintendo.jpg" alt="Nintendo" />
          <h3>Nintendo</h3>
          <a href="#">Shop Now</a>
        </div>
        <div className="product-box">
          <img src="/xbox.jpg" alt="Xbox" />
          <h3>Xbox</h3>
          <a href="#">Shop Now</a>
        </div>
      </div>
    </div>
  );
};

export default Consoles;
