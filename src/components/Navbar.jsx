import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#040711]/95 backdrop-blur-xl border-b border-[#0088FF]/30 shadow-[0_4px_30px_rgba(0,136,255,0.15)]'
            : 'bg-[#040711]/80 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <nav className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
          
          {/* Brand Logo: Flame RM */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img
              src="/assets/hotwheels/rm_logo.png"
              alt="RM Logo"
              className="h-7 sm:h-8 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Center Navigation Tabs */}
          <ul className="hidden md:flex items-center gap-1 sm:gap-2">
            {portfolioData.navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-4 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 block ${
                      isActive
                        ? 'text-[#00D2FF] bg-[#0088FF]/15 border border-[#00D2FF]/50 shadow-[0_0_15px_rgba(0,210,255,0.35)]'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Header Element: Checkered Flag & Slogan */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded bg-[#070B18] border border-white/10 text-xs font-mono">
              <div className="flex gap-0.5 opacity-80">
                <span className="w-1.5 h-3 bg-white" />
                <span className="w-1.5 h-3 bg-[#040711]" />
                <span className="w-1.5 h-3 bg-white" />
                <span className="w-1.5 h-3 bg-[#040711]" />
              </div>
              <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest">
                BUILT FOR WHAT'S NEXT
              </span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="md:hidden p-2 text-neutral-300 hover:text-[#00D2FF] hover:bg-white/5 rounded-lg transition-colors cursor-pointer border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00D2FF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-[#070B18]/98 backdrop-blur-2xl border-b border-[#00D2FF]/30 px-5 py-6 shadow-2xl"
          >
            <ul className="flex flex-col gap-2">
              {portfolioData.navigation.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono font-bold uppercase tracking-wider transition-colors ${
                        isActive
                          ? 'text-[#00D2FF] bg-[#0088FF]/20 border border-[#00D2FF]/50 shadow-[0_0_15px_rgba(0,210,255,0.3)]'
                          : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="text-[#00D2FF] text-xs">🏎️</span>}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
