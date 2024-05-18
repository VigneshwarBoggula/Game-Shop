'use client';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navigationbar/navigationbar';
import Home from './pages/home';
import VideoGames from './pages/videogames';
import Consoles from './pages/consoles';
import Accessories from './pages/accessories';
import Press from './pages/press';
import PlayStation5Review from './pages/playstation_article';
import ModernWarfare3Review from './pages/mw3_article';
import Contact from './pages/contact';
import Cart from './pages/cart';
import Account from './pages/account';
import Order from './pages/order';
// import './app/home/styles.css';

const Page = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<VideoGames />} />
        <Route path="/about" element={<Consoles />} />
        <Route path="/contact" element={<Accessories />} />
        <Route path="/press" element={<Press />} />
        <Route path="/playstation_article" element={<PlayStation5Review />} />
        <Route path="/mw3_article" element={<ModernWarfare3Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
};

export default Page;