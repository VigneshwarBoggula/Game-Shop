'use client';

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductBox from '../../models/productbox/productbox';
import { CartContext } from '../../contexts/cartcontext/cartcontext';
import '../styles/accessories.css';

const Accessories = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products/category/accessories`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="accessories-page">
      <h1>Accessories</h1>
      <hr className="divider"></hr>
      <p>Choose your hardware</p>
      <div className="product-boxes">
        {products.map((product) => (
          <ProductBox
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            quantity={1}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
