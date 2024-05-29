"use client";

import React, { useContext } from 'react';
import Link from 'next/link';
import ProductBox from '../../models/productbox/productbox';
import { CartContext } from '../../contexts/cartcontext/cartcontext';
import '../styles/home.css';

const Home = () => {
  const { addToCart } = useContext(CartContext);

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

export default Home;