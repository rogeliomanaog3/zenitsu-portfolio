import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, Flame, Zap, Send } from 'lucide-react';

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
            ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-[#E10600]/30 shadow-[0_4px_30px_rgba(225,6,0,0.18)]'
            : 'bg-[#050505]/75 backdrop-blur-md border-b border-white/10'
        }`}
      >
        {/* Subtle Dual Hot Wheels Racing Stripe at Top Edge */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#E10600] to-transparent shadow-[0_0_10px_#E10600]" />

        <nav className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Brand Tag: Hot Wheels inspired ROGELIO.DEV with racing emblem */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 font-mono text-sm sm:text-base font-extrabold tracking-wider text-white group cursor-pointer"
          >
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#E10600] via-[#FF6A00] to-[#FFD400] flex items-center justify-center text-white shadow-[0_0_12px_rgba(225,6,0,0.5)] group-hover:scale-110 transition-transform">
              <Flame className="w-4 h-4 fill-white text-white" />
            </span>
            <span className="tracking-tight text-white font-black">
              ROGELIO<span className="text-[#FF6A00]">.DEV</span>
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase rounded bg-[#E10600]/20 text-[#FFD400] border border-[#E10600]/40">
              #03 RACING
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1">
            {portfolioData.navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.label} className="relative">
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 block ${
                      isActive
                        ? 'text-[#FF1A00] drop-shadow-[0_0_8px_rgba(225,6,0,0.7)]'
                        : 'text-neutral-400 hover:text-[#FF6A00] hover:drop-shadow-[0_0_6px_rgba(255,106,0,0.5)]'
                    }`}
                  >
                    {item.label}

                    {/* Thin Red/Orange Racing Line underneath active section */}
                    {isActive && (
                      <motion.div
                        layoutId="activeRacingLine"
                        className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-gradient-to-r from-[#E10600] via-[#FF6A00] to-[#FFD400] shadow-[0_0_10px_#FF6A00]"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action Elements: Pit Stop / Let's Talk CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#E10600] to-[#FF6A00] hover:from-[#FF1A00] hover:to-[#FFD400] text-white shadow-[0_0_18px_rgba(225,6,0,0.45)] hover:shadow-[0_0_25px_rgba(255,106,0,0.6)] transition-all cursor-pointer speed-sweep active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>PIT STOP / LET'S TALK</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="md:hidden p-2 text-neutral-300 hover:text-[#FF6A00] hover:bg-white/5 rounded-xl transition-colors cursor-pointer border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF1A00]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Racing Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-[#0a0a0f]/98 backdrop-blur-2xl border-b border-[#E10600]/40 px-5 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          >
            {/* Checkered Racing Border Accent */}
            <div className="w-full h-1 mb-4 bg-gradient-to-r from-[#E10600] via-[#FF6A00] to-[#FFD400]" />

            <ul className="flex flex-col gap-2">
              {portfolioData.navigation.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                        isActive
                          ? 'text-white bg-[#E10600]/20 border border-[#E10600]/50 shadow-[0_0_15px_rgba(225,6,0,0.3)]'
                          : 'text-neutral-300 hover:bg-white/5 hover:text-[#FF6A00]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                        <span>{item.label}</span>
                      </div>
                      {isActive && <span className="text-xs text-[#FFD400]">🏎️ RACING</span>}
                    </a>
                  </li>
                );
              })}
              <li className="pt-3">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E10600] to-[#FF6A00] text-white font-extrabold uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(225,6,0,0.4)]"
                >
                  <Send className="w-4 h-4" />
                  <span>PIT STOP / CONTACT</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
