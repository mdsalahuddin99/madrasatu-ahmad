import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Departments from './components/Departments';
import Stats from './components/Stats';
import HifzSection from './components/HifzSection';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar />
      <main> 
        <Gallery />
        <Hero />
        <Stats />                
        <Features />
        <About />
        <Departments />
        
        <HifzSection />
       
       
      </main>
      <Footer />
    </div>
  );
};

export default App;