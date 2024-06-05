'use client';

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductBox from '../../models/productbox/productbox';
import { CartContext } from '../../contexts/cartcontext/cartcontext';
import '../styles/consoles.css';

const Consoles = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products/category/consoles`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="consoles-page">
      <h1>Consoles</h1>
      <p>Browse by console</p>
      <hr className="divider"></hr>
      <div className="product-boxes">
        {products.map((product) => (
          <ProductBox
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            quantity={1}
            description={product.description}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Consoles;
