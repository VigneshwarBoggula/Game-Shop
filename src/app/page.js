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
import ShoppingCart from './pages/cart';
import AccountSettings from './pages/account';
import Order from './pages/order';

const Page = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videogames" element={<VideoGames />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/press" element={<Press />} />
        <Route path="/playstation_article" element={<PlayStation5Review />} />
        <Route path="/mw3_article" element={<ModernWarfare3Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
};

export default Page;