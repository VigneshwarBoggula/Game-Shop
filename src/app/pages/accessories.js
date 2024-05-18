'use client';

import React from 'react';
import '../styles/products.css';

const Accessories = () => {
  return (
    <div className="accessories-page">
      <h1>Accessories</h1>
      <div className="buttons">
        <button className="filter-btn">Filter</button>
        <button className="sort-btn">Sort</button>
      </div>
      <div className="product-boxes-section">
        {/* Product Boxes */}
        <div className="product-box">
          <img src="/headsets.jpg" alt="Headsets" />
          <h3>Headsets</h3>
          <a href="#">Browse Now</a>
        </div>
        <div className="product-box">
          <img src="/controllers.jpg" alt="Controllers" />
          <h3>Controllers</h3>
          <a href="#">Browse Now</a>
        </div>
        <div className="product-box">
          <img src="/chargers.jpg" alt="Chargers" />
          <h3>Chargers</h3>
          <a href="#">Browse Now</a>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
