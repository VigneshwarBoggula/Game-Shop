'use client';

import React from 'react';
import '../styles/products.css';

const VideoGame = () => {
  return (
    <div className="video-games-page">
      <h1>Video Games</h1>
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
      <div className="product-boxes-section">
        <div className="product-box">
          <img src="/product1.jpg" alt="Product 1" />
          <h3>Legend of Zelda: Tears of the Kingdom</h3>
          <p>Play as Link and save Hyrule.</p>
          <a href="#">Buy Now</a>
        </div>
        <div className="product-box">
          <img src="/product2.jpg" alt="Product 2" />
          <h3>God of War: Ragnarok</h3>
          <p>Help Kratos face the trails of Vallhala.</p>
          <a href="#">Buy Now</a>
        </div>
        <div className="product-box">
          <img src="/product3.png" alt="Product 3" />
          <h3>Minecraft</h3>
          <p>Make the sandbox your own with Steve!</p>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default VideoGame;