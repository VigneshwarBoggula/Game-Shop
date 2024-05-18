"use client"

import React from 'react';
import './productbox.css';

const ProductBox = ({ image, title, description }) => {
  return (
    <div className="product-box">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#">Buy Now</a>
    </div>
  );
};

export default ProductBox;
