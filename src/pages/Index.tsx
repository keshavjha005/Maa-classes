
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import StatsCounter from '../components/home/StatsCounter';
import Features from '../components/home/Features';
import Toppers from '../components/home/Toppers';
import Testimonials from '../components/home/Testimonials';
import WhyJoin from '../components/home/WhyJoin';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <StatsCounter />
        <Features />
        <Toppers />
        <Testimonials />
        <WhyJoin />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
