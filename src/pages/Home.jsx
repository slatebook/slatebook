import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import LaunchingSoon from '../sections/LaunchingSoon';
import VideoDemo from '../sections/VideoDemo';
import Problems from '../sections/Problems';
import Solution from '../sections/Solution';
import FeatureWorkflow from '../sections/FeatureWorkflow';
import Team from '../sections/Team';
import Contact from '../sections/Contact';
import Products from '../sections/Products';
import Roadmap from '../sections/Roadmap';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <Hero />
      <Products />
      <Roadmap />
      <LaunchingSoon />
      <VideoDemo />
      <Problems />
      <Solution />
      <FeatureWorkflow />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

