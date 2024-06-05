"use client";

import React from 'react';
import PropTypes from 'prop-types';
import './productbox.css';

const ProductBox = ({ id, title, price, image, description, quantity, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id, title, price, image, quantity});
  };
  
  return (
    <div className="product-box">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>${price}</h4>
      <p>{description}</p>
      <div className="buttons-container">
        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductBox;
