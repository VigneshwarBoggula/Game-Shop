'use client';

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductBox from '../../models/productbox/productbox';
import { CartContext } from '../../contexts/cartcontext/cartcontext';
import '../styles/videogames.css';

const VideoGame = () => {
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
    <div className="video-games-page">
      <h1>Video Games</h1>
      <p>Find your next adventure</p>
      <hr className="divider"></hr>
      <div className="filters-and-sort-sections">
        <div className="filters-section">
          <h2>Filters</h2>
          <div className="filter">
            <h3>Play On</h3>
            <input type="radio" name="playon" id="playon-all" defaultChecked />
            <label htmlFor="playon-all">All</label>
            <input type="radio" name="playon" id="playon-pc" />
            <label htmlFor="playon-pc">PC</label>
            <input type="radio" name="playon" id="playon-console" />
            <label htmlFor="playon-console">Console</label>
          </div>
          <div className="filter">
            <h3>Genre</h3>
            <input type="radio" name="genre" id="genre-all" defaultChecked />
            <label htmlFor="genre-all">All</label>
            <input type="radio" name="genre" id="genre-action" />
            <label htmlFor="genre-action">Action</label>
            <input type="radio" name="genre" id="genre-adventure" />
            <label htmlFor="genre-adventure">Adventure</label>
          </div>
          <div className="filter">
            <h3>Rating</h3>
            <input type="radio" name="rating" id="rating-all" defaultChecked />
            <label htmlFor="rating-all">All</label>
            <input type="radio" name="rating" id="rating-high" />
            <label htmlFor="rating-high">High</label>
            <input type="radio" name="rating" id="rating-low" />
            <label htmlFor="rating-low">Low</label>
          </div>
        </div>
        <div className="sort-by-section">
          <h2>Sort By</h2>
          <div className="sort-option">
            <input type="radio" name="sortby" id="sortby-featured" defaultChecked />
            <label htmlFor="sortby-featured">Featured</label>
          </div>
          <div className="sort-option">
            <input type="radio" name="sortby" id="sortby-release-date" />
            <label htmlFor="sortby-release-date">Release Date</label>
          </div>
          <div className="sort-option">
            <input type="radio" name="sortby" id="sortby-name-az" />
            <label htmlFor="sortby-name-az">Name A-Z</label>
          </div>
          <div className="sort-option">
            <input type="radio" name="sortby" id="sortby-name-za" />
            <label htmlFor="sortby-name-za">Name Z-A</label>
          </div>
        </div>
      </div>
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

export default VideoGame;