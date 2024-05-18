import React from 'react';
// import './press.css';
import searchIcon from '../../../public/search_icon.png';
import cartIcon from '../../../public/cart_icon.png';
import accountIcon from '../../../public/account_icon.png';
import playstationImg from '../../../public/playstation.jpg';
import mw3Img from '../../../public/mw3.jpg';

const Press = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="../home/index.html">GameShop</a>
        </div>
        <div className="nav-links">
          <a href="../home/index.html">Home</a>
          <div className="dropdown">
            <a href="#" className="dropbtn">Products</a>
            <div className="dropdown-content">
              <a href="../products/videogames.html">Video Games</a>
              <a href="../products/consoles.html">Consoles</a>
              <a href="../products/accessories.html">Accessories</a>
            </div>
          </div>
          <a href="../press/press.html">Press & Reviews</a>
          <a href="../contact/contact.html">Contact</a>
        </div>
        <div className="icons">
          <img src={searchIcon} alt="Search" />
          <a href="../cart/cart.html">
            <img src={cartIcon} alt="Cart" />
          </a>
          <a href="../account/account.html">
            <img src={accountIcon} alt="Account" />
          </a>
        </div>
      </nav>

      <div className="press-content">
        <h1>Press & Reviews</h1>
        <div className="press-item">
          <div className="press-image">
            <img src={playstationImg} alt="PlayStation" />
          </div>
          <div className="press-text">
            <h2>PlayStation 5: Game Changer or Disappointment?</h2>
            <a href="playstation_article.html" className="read-more-button">Read More</a>
          </div>
        </div>

        <div className="press-item">
          <div className="press-image">
            <img src={mw3Img} alt="Modern Warfare 3" />
          </div>
          <div className="press-text">
            <h2>Modern Warfare 3: Hit or Miss?</h2>
            <a href="mw3_article.html" className="read-more-button">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;