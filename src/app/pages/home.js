'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import ProductBox from '../components/productbox/productbox';
import '../styles/home.css';

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
        <ProductBox
          image="/product1.jpg"
          title="Legend of Zelda: Tears of the Kingdom"
          description="Play as Link and save Hyrule."
        />
        {/* Product 2 */}
        <ProductBox
          image="/product2.jpg"
          title="God of War: Ragnarok"
          description="Help Kratos face the trials of Vallhala."
        />
        {/* Product 3 */}
        <ProductBox
          image="/product3.png"
          title="Minecraft"
          description="Make the sandbox your own with Steve!"
        />
      </div>
    </div>
  );
};

export default Home;