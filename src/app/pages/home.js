'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Home = () => {
  return (
    <div className="home-page-content">
      <div className="top-image">
        <img src="/top_image.png" alt="Top Image" />
      </div>
      <hr className="divider" />
      <div className="section-header">
        <h2>Popular Games</h2>
        <Link to="/videogames" className="shop-all-link">
          <button className="shop-all-button">
            Shop All <span>&rarr;</span>
          </button>
        </Link>
      </div>
      <div className="product-boxes">
        {/* Product 1 */}
        <div className="product-box">
          <img src="/product1.jpg" alt="Legend of Zelda: Tears of the Kingdom" />
          <h3>Legend of Zelda: Tears of the Kingdom</h3>
          <p>Play as Link and save Hyrule.</p>
          <a href="#">Buy Now</a>
        </div>
        {/* Product 2 */}
        <div className="product-box">
          <img src="/product2.jpg" alt="God of War: Ragnarok" />
          <h3>God of War: Ragnarok</h3>
          <p>Help Kratos face the trials of Vallhala.</p>
          <a href="#">Buy Now</a>
        </div>
        {/* Product 3 */}
        <div className="product-box">
          <img src="/product3.png" alt="Minecraft" />
          <h3>Minecraft</h3>
          <p>Make the sandbox your own with Steve!</p>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default Home;