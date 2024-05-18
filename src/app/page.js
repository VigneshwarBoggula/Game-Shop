'use client';

import React, { useState } from 'react';
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
  const [selectedPage, setSelectedPage] = useState('home');

  const renderPageContent = () => {
    switch (selectedPage) {
      case 'videogames':
        return <VideoGames />;
      case 'consoles':
        return <Consoles />;
      case 'accessories':
        return <Accessories />;
      case 'press':
        return <Press />;
      case 'playstation_article':
        return <PlayStation5Review />;
      case 'mw3_article':
        return <ModernWarfare3Review />;
      case 'contact':
        return <Contact />;
      case 'cart':
        return <Cart />;
      case 'account':
        return <Account />;
      case 'order':
        return <Order />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <NavigationBar onSelectPage={setSelectedPage} />
      {renderPageContent()}
    </>
  );
};

export default Page;
