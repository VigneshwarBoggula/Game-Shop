import React from 'react';
import NavigationBar from '../components/navigationbar/navigationbar';
import HomePageContent from './home/home';
import ProductBox from '../components/productbox/productbox';
import '../app/home/styles.css';

const Page = () => {
  return (
    <>
      <NavigationBar />
      <HomePageContent />
      <ProductBox
        image="../../public/product1.jpg"
        title="Legend of Zelda: Tears of the Kingdom"
        description="Play as Link and save Hyrule."
      />
      <ProductBox
        image="../../public/product2.jpg"
        title="God of War: Ragnarok"
        description="Help Kratos face the trails of Vallhala."
      />
      <ProductBox
        image="../../public/product3.png"
        title="Minecraft"
        description="Make the sandbox your own with Steve!"
      />
    </>
  );
};

export default Page;