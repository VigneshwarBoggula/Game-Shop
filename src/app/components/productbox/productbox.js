"use client"

import React from 'react';
import './productbox.css';

const ProductBox = ({ image, title, description }) => {
  return (
    <div className="product-box">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="buttons-container">
        <button className="add-to-cart-button">Add to Cart</button>
        <button className="more-button">More</button>
      </div>
    </div>
  );
};

export default ProductBox;
