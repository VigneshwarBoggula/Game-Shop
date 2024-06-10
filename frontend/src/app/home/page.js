"use client";

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import ProductBox from '../../models/productbox/productbox';
import { CartContext } from '../../contexts/cartcontext/cartcontext';
import '../styles/home.css';

const Home = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products/category/videogames`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-page-content">
      <div className="top-image">
        <img src="/top_image.webp" alt="Top Image" />
      </div>
      <hr className="divider"></hr>
      <div className="section-header">
        <h2>Popular Games</h2>
        <Link href="/videogames" className="shop-all-link">
          <button className="shop-all-button">
            Shop All <span>&rarr;</span>
          </button>
        </Link>
      </div>
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

export default Home;
