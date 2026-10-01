import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import {
  ArrowRight,
  Mail,
  Zap,
  Code2,
  Database,
  User,
} from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  // Typewriter effect cycling through roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = personal.typewriterRoles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullRole.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullRole.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayedText(currentFullRole.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personal.typewriterRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, personal.typewriterRoles]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-32 pb-24 lg:pt-36 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* Left Content Column (7 cols) - FRNKLYNRD Layout */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          {/* Academic Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12141F]/90 backdrop-blur-md border border-white/10 text-neutral-300 text-xs font-mono mb-5 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>BSIT Student • NCST Cavite</span>
          </div>

          {/* Small Intro Label */}
          <div className="text-sm sm:text-base font-semibold text-amber-400/90 mb-1 tracking-wider uppercase font-mono">
            {personal.greeting}
          </div>

          {/* Large Name Heading with Golden Glowing Gradient */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 leading-tight drop-shadow-[0_0_25px_rgba(245,158,11,0.25)]">
            <span className="gold-gradient-text">{personal.name}</span>
          </h1>

          {/* Dynamic Subtitle / Typewriter Line */}
          <div className="flex items-center flex-wrap gap-2 text-base sm:text-xl font-bold text-neutral-200 mb-4 min-h-[2.2rem]">
            <span className="text-amber-400 font-bold drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
              {displayedText}
            </span>
            <span className="w-0.5 h-5 bg-amber-400 animate-pulse ml-0.5" />
          </div>

          {/* Subtitle / Short Introduction */}
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed mb-6">
            {personal.shortIntro}
          </p>

          {/* Dual Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
            {/* Primary Glowing Golden Pill */}
            <button
              onClick={() => scrollTo('#projects')}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-bold text-sm shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-neutral-950 text-neutral-950 group-hover:scale-110 transition-transform" />
              <span>Explore My Projects</span>
            </button>

            {/* Secondary Frosted Dark Glass Pill */}
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#141622]/85 hover:bg-[#1C1F2E]/90 backdrop-blur-md border border-white/15 hover:border-amber-400/50 text-white font-semibold text-sm shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Key Metrics Counter Bar */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1">
                <span className="text-amber-400">3+</span>
              </div>
              <div className="text-xs text-neutral-400 font-medium mt-0.5">
                Built Projects
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1">
                <span className="text-amber-400">12+</span>
              </div>
              <div className="text-xs text-neutral-400 font-medium mt-0.5">
                Tech & Tools
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1">
                <span className="text-amber-400">BSIT</span>
              </div>
              <div className="text-xs text-neutral-400 font-medium mt-0.5">
                NCST College
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Visual Column (5 cols) - Profile Card (FRNKLYNRD Style with Avatar Icon, NOT Zenitsu video) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative z-10"
        >
          {/* Glowing Profile Card Container */}
          <div className="relative w-72 sm:w-84 aspect-square rounded-3xl p-6 bg-[#0E1019]/90 backdrop-blur-2xl border-2 border-amber-400/75 shadow-[0_0_35px_rgba(245,158,11,0.3)] flex flex-col items-center justify-center text-center group">
            
            {/* Ambient Background Aura inside Card */}
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.15)_0%,_transparent_75%)] pointer-events-none" />

            {/* Center Developer / Student Profile Photo */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-amber-400 via-amber-500 to-yellow-500 shadow-[0_0_25px_rgba(245,158,11,0.45)] mb-4 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 border-2 border-[#0E1019]">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Profile Name & Academic Tag */}
            <div className="font-extrabold text-xl sm:text-2xl text-white tracking-wide mb-1 z-10">
              {personal.name}
            </div>

            <div className="text-xs font-mono text-amber-400 tracking-wider font-semibold z-10 uppercase">
              {personal.school} • {personal.course}
            </div>

            {/* Subtle Katana Hairline Slice on hover */}
            <div className="absolute inset-x-6 bottom-7 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
