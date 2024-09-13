import React from 'react';
import Navbar from './Nav';
import Hero from './Hero';
import Mockup from './Mockup';
import Conten from './Conten';
import Conten1 from './Conten1';
import Conten2 from './Conten2';
import ReviewSection from './Riview';
import Footer from './Footer';
import './global.css';
const Home: React.FC = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Hero/>
      <Mockup/>
      <Conten/>
      <Conten1/>
      <Conten2/>
      <ReviewSection/>
      <Footer/>
    </div>
  );
};

export default Home;