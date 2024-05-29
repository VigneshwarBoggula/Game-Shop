'use client';

import React, { useContext } from 'react';
import ProductBox from '../../models/productbox/productbox';
import { CartContext } from '../../contexts/cartcontext/cartcontext';
import '../styles/consoles.css';

const Consoles = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="consoles-page">
      <h1>Consoles</h1>
      <p>Browse by console</p>
      <hr className="divider"></hr>
      <div className="product-boxes-section">
        {/* Product Boxes */}
        <ProductBox
          id="4"
          image="/playstation.jpg"
          title="PlayStation 5"
          price="499.99"
          quantity={1}
          addToCart={addToCart}
        />
        <ProductBox
          id="5"
          image="/nintendo.jpg"
          title="Nintendo Switch"
          price="259.99"
          quantity={1}
          addToCart={addToCart}
        />
        <ProductBox
          id="6"
          image="/xbox.jpg"
          title="Xbox Series X"
          price="429.99"
          quantity={1}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default Consoles;
