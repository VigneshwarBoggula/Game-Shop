'use client';

import React, { useContext } from 'react';
import ProductBox from '../../models/productbox/productbox';
import { CartContext } from '../../contexts/cartcontext/cartcontext';
import '../styles/accessories.css';

const Accessories = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="accessories-page">
      <h1>Accessories</h1>
      <hr className="divider"></hr>
      <p>Choose your hardware</p>
      <div className="product-boxes-section">
        {/* Product Boxes */}
        <ProductBox
          id="7"
          image="/headsets.jpg"
          title="Headset"
          price="39.99"
          quantity={1}
          addToCart={addToCart}
        />
        <ProductBox
          id="8"
          image="/controllers.jpg"
          title="Controller"
          price="59.99"
          quantity={1}
          addToCart={addToCart}
        />
        <ProductBox
          id="9"
          image="/chargers.jpg"
          title="Charger"
          price="19.99"
          quantity={1}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default Accessories;
