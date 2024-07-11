import React from 'react';
// import Navbar from '../components/navbar';
import Navbar from './navbar/navbar';
import Hero from '../components/hero';
import Mission from '../components/mission';
import Features from '../components/features';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission />
      <Features />
    </div>
  );
};

export default Home;