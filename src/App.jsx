import React, { useState, useEffect } from 'react';
import HotWheelsBackground from './components/HotWheelsBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // ScrollSpy logic for tracking active racing checkpoint
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.45 && rect.bottom >= windowHeight * 0.15) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#E10600] selection:text-white transition-colors duration-300">
      {/* Immersive Hot Wheels Racing Dynamic Background with Volumetric Lights & Speed Particles */}
      <HotWheelsBackground />

      {/* Sleek Racing Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections: Progression through the Racing Track */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Racing Footer */}
      <Footer />
    </div>
  );
}
