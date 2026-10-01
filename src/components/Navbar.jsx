import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-[#0B0E14]/90 backdrop-blur-md border-b border-[#1E2536] shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
          
          {/* Developer Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2.5 font-mono text-sm sm:text-base font-semibold text-white hover:text-amber-400 transition-colors group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="tracking-tight">
              rogelio<span className="text-amber-400">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1">
            {portfolioData.navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-white bg-[#161C2A] font-semibold'
                        : 'text-neutral-400 hover:text-white hover:bg-[#161C2A]/60'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Contact Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 text-neutral-400 hover:text-white hover:bg-[#161C2A] rounded-md transition-colors cursor-pointer border border-[#1E2536]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-[#0D111A] border-b border-[#1E2536] px-5 py-4 shadow-xl"
          >
            <ul className="flex flex-col gap-1">
              {portfolioData.navigation.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-white bg-[#161C2A] font-semibold'
                          : 'text-neutral-300 hover:bg-[#161C2A]/60 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2 mt-1 border-t border-[#1E2536]">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-md bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-sm transition-colors"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
