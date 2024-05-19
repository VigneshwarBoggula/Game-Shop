"use client"

import React from 'react';
import './productbox.css';

const ProductBox = ({ id, title, price, image, description, quantity, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id, title, price, image, quantity});
  };
  
  return (
    <div className="product-box">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>{price}</h4>
      <p>{description}</p>
      <div className="buttons-container">
        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
        <button className="more-button">More</button>
      </div>
    </div>
  );
};

export default ProductBox;
