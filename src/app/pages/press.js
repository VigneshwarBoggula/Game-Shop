'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/press.css';
import playstationImg from '../../../public/playstation.jpg';
import mw3Img from '../../../public/mw3.jpg';

const Press = () => {
  return (
    <div>
      <div className="press-content">
        <h1>Press & Reviews</h1>
        <div className="press-item">
          <div className="press-image">
<<<<<<< HEAD
            <img src="/playstation.jpg" alt="PlayStation" />
=======
            <img src={"playstation.jpg"} alt="PlayStation" />
>>>>>>> e3bbd0e29cfa41c105c65ce82eed48ddd40ade7d
          </div>
          <div className="press-text">
            <h2>PlayStation 5: Game Changer or Disappointment?</h2>
            <Link to="/playstation_article" className="read-more-button">Read More</Link>
          </div>
        </div>

        <div className="press-item">
          <div className="press-image">
<<<<<<< HEAD
            <img src="/mw3.jpg" alt="Modern Warfare 3" />
=======
            <img src={"/mw3.jpg"} alt="Modern Warfare 3" />
>>>>>>> e3bbd0e29cfa41c105c65ce82eed48ddd40ade7d
          </div>
          <div className="press-text">
            <h2>Modern Warfare 3: Hit or Miss?</h2>
            <Link to="/mw3_article" className="read-more-button">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;