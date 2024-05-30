'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navigationbar.css';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="logo">
        <Link href="/home">GameShop</Link>
      </div>
      <div className="nav-links">
        <Link href="/home">Home</Link>
        <div className="dropdown">
          <Link href="#" className="dropbtn">Products</Link>
          <div className="dropdown-content">
            <Link href="/videogames">Video Games</Link>
            <Link href="/consoles">Consoles</Link>
            <Link href="/accessories">Accessories</Link>
          </div>
        </div>
        <Link href="/press">Press & Reviews</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="icons">
        <Image src="/search_icon.png" alt="Search" width="25" height="10"/>
        <Link href="/cart">
          <Image src="/cart_icon.png" alt="Cart" width="25" height="10"/>
        </Link>
        <Link href="/account">
          <Image src="/account_icon.png" alt="Account" width="25" height="10"/>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
