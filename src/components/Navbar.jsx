import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, Send } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
      <header className="fixed top-4 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-300 shadow-xl ${
            scrolled
              ? 'bg-[#0E1017]/90 dark:bg-[#0A0B10]/95 backdrop-blur-2xl border-white/10 dark:border-amber-500/20 shadow-black/40'
              : 'bg-[#12141D]/80 dark:bg-[#0D0F17]/85 backdrop-blur-xl border-white/10 dark:border-white/10 shadow-black/20'
          }`}
        >
          {/* Brand Tag styled as <ROGELIO.DEV/> */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-white group pr-1 sm:pr-2"
          >
            <span className="text-amber-400 group-hover:scale-110 transition-transform font-extrabold">&lt;</span>
            <span className="tracking-wider">ROGELIO<span className="text-amber-400">.DEV</span></span>
            <span className="text-amber-400 group-hover:scale-110 transition-transform font-extrabold">/&gt;</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {portfolioData.navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.label} className="relative">
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 rounded-full ${
                      isActive
                        ? 'text-white'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-amber-400/25 border border-amber-400/50 rounded-full -z-10 shadow-[0_0_12px_rgba(245,158,11,0.3)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action Elements: Let's Talk CTA & Mobile Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Quick "Let's Talk" CTA Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-bold text-xs shadow-md shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Let's Talk</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="lg:hidden p-1.5 text-neutral-300 hover:text-amber-400 rounded-full"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden bg-[#0F111A]/95 backdrop-blur-2xl border border-amber-400/20 rounded-3xl p-6 shadow-2xl shadow-black/60"
          >
            <ul className="flex flex-col gap-3">
              {portfolioData.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold text-neutral-200 hover:bg-amber-400/15 hover:text-amber-400 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-amber-400">⚡</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
