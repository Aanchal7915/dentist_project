import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import FAQ from './FAQ';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
    </>
  );
}

export default Home;
