'use client';

import React from 'react';
import Link from 'next/link';
import '../styles/press.css';

const Press = () => {
  return (
    <div className="press-content">
      <h1>Press & Reviews</h1>
      <div className="press-item">
        <div className="press-image">
          <img src='/playstation.jpg' alt="PlayStation" />
        </div>
        <div className="press-text">
          <h2>PlayStation 5: Game Changer or Disappointment?</h2>
          <Link href="/playstation_article" className="read-more-button">Read More</Link>
        </div>
      </div>

      <div className="press-item">
        <div className="press-image">
          <img src='/mw3.jpg' alt="Modern Warfare 3" />
        </div>
        <div className="press-text">
          <h2>Modern Warfare 3: Hit or Miss?</h2>
          <Link href="/mw3_article" className="read-more-button">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Press;
