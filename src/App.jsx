import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GarageBanner from './components/GarageBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // ScrollSpy logic
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
    <div className="relative min-h-screen bg-[#030611] text-neutral-50 selection:bg-[#FF6A00] selection:text-black">
      {/* Ambient Cyber Racing Glow Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-right Cyan flare */}
        <div className="absolute -top-40 right-10 w-[550px] h-[550px] bg-[#0088FF]/10 rounded-full blur-[160px]" />
        {/* Bottom-left Flame Orange flare */}
        <div className="absolute -bottom-40 left-10 w-[550px] h-[550px] bg-[#FF6A00]/10 rounded-full blur-[160px]" />
        {/* Subtle Cyber Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#00D2FF 1px, transparent 1px), linear-gradient(90deg, #00D2FF 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Top Cyber Racing Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Hot Wheels Command Dashboard Grid */}
      <main className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 space-y-4 sm:space-y-5">
        
        {/* Row 1: Hero (Left) & Driver Profile HUD (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-stretch">
            <Hero />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-stretch">
            <About />
          </div>
        </div>

        {/* Row 2: Technical Specifications / Skills (Left) & Featured Projects (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-stretch">
            <Skills />
          </div>
          <div className="lg:col-span-7 flex flex-col justify-stretch">
            <Projects />
          </div>
        </div>

        {/* Row 3: More Projects in Garage (Left) & Let's Connect / Ready to Build (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-stretch">
            <GarageBanner />
          </div>
          <div className="lg:col-span-7 flex flex-col justify-stretch">
            <Contact />
          </div>
        </div>

      </main>

      {/* Footer */}
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
