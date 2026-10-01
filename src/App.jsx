import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // ScrollSpy logic with clean thresholds
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.2) {
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
    <div className="relative min-h-screen bg-[#0B0E14] text-neutral-100 selection:bg-amber-400 selection:text-neutral-950 font-sans">
      {/* Subtle, Static Developer Grid Background */}
      <div className="fixed inset-0 dev-dot-pattern opacity-40 pointer-events-none z-0" />

      {/* Clean Fixed Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Clean Developer Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
