'use client';

import React, { useContext } from 'react';
import ProductBox from '../components/productbox/productbox';
import { CartContext } from '../components/cartcontext/cartcontext';
import '../styles/videogames.css';

const VideoGame = () => {
  const { addToCart } = useContext(CartContext);
  
  return (
    <div className="video-games-page">
      <h1>Video Games</h1>
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
      <div className="product-boxes">
        {/* Product 1 */}
        <ProductBox
          id="1"
          image="/product1.jpg"
          title="Legend of Zelda: Tears of the Kingdom"
          price="69.99"
          quantity={1}
          description="Play as Link and save Hyrule."
          addToCart={addToCart}
        />
        {/* Product 2 */}
        <ProductBox
          id="2"
          image="/product2.jpg"
          title="God of War: Ragnarok"
          price="59.99"
          quantity={1}
          description="Help Kratos face the trials of Vallhala."
          addToCart={addToCart}
        />
        {/* Product 3 */}
        <ProductBox
          id="3"
          image="/product3.png"
          title="Minecraft"
          price="49.99"
          quantity={1}
          description="Make the sandbox your own with Steve!"
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default VideoGame;