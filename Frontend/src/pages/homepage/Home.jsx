// Home.jsx
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import HeadlineCards from './HeadlineCards';
import Items from './ItemsCards';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero />
        <HeadlineCards />
        <Items />
        <Footer />
      </div>
  );
};

export default Home;
