import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import {
  Flame,
  Gauge,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;

  // Typewriter effect cycling through speed-inspired roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = personal.typewriterRoles[roleIndex];
    const typingSpeed = isDeleting ? 25 : 55;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullRole.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
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
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 lg:pt-36 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Cinematic Racing Line Streak Entrance (Short 0.6s intro) */}
      <motion.div
        initial={{ x: '-100%', opacity: 1 }}
        animate={{ x: '200%', opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#FF1A00] to-[#FFD400] shadow-[0_0_20px_#FF1A00] pointer-events-none z-30"
      />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* Left Column: Racing Launchpad & Dossier (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          {/* Hot Wheels Staged Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141c]/90 border border-[#E10600]/40 text-neutral-200 text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(225,6,0,0.25)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1A00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1A00]" />
            </span>
            <span className="text-[#FFD400]">🏎️ #03 RACING DIVISION</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-300">NCST CAVITE</span>
          </div>

          {/* Intro Pre-title */}
          <div className="text-sm sm:text-base font-extrabold text-[#FF6A00] tracking-widest uppercase font-mono mb-2 flex items-center gap-2">
            <Flame className="w-4 h-4 fill-[#FF6A00] text-[#FF6A00]" />
            <span>STARTING LINE // FULL THROTTLE</span>
          </div>

          {/* Large Bold Hot Wheels Name Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 leading-tight uppercase">
            <span className="chrome-gradient-text drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]">
              {personal.name.split(',')[0]}
            </span>
            <br />
            <span className="flame-gradient-text drop-shadow-[0_0_25px_rgba(225,6,0,0.4)]">
              {personal.name.split(',')[1] || personal.shortName}
            </span>
          </h1>

          {/* Dynamic Speed Typewriter Headline */}
          <div className="flex items-center gap-2 text-base sm:text-xl font-bold text-neutral-200 mb-6 font-mono min-h-[36px]">
            <span className="text-[#FFD400] text-sm sm:text-base">⚡</span>
            <span className="text-white drop-shadow-[0_0_8px_rgba(255,106,0,0.6)]">
              {displayedText}
            </span>
            <span className="w-2.5 h-5 bg-[#FF1A00] animate-pulse inline-block" />
          </div>

          {/* Authentic Biography / Narrative */}
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
            {personal.shortIntro}
          </p>

          {/* Telemetry RPM Bar Widget */}
          <div className="w-full max-w-md p-3.5 rounded-2xl bg-[#0f0f15]/90 border border-[#E10600]/30 mb-8 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-400 mb-2">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Gauge className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>ENGINE TELEMETRY</span>
              </span>
              <span className="text-[#FFD400]">8,800 RPM // STAGED</span>
            </div>
            
            {/* RPM LED Bar */}
            <div className="w-full h-2.5 bg-black/60 rounded-full overflow-hidden p-0.5 border border-white/10 flex gap-0.5">
              <div className="h-full w-[25%] bg-emerald-500 rounded-sm" />
              <div className="h-full w-[25%] bg-emerald-400 rounded-sm" />
              <div className="h-full w-[25%] bg-[#FFD400] rounded-sm" />
              <div className="h-full w-[25%] bg-gradient-to-r from-[#FF6A00] to-[#E10600] rounded-sm animate-pulse" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1.5 px-0.5">
              <span>IDLE</span>
              <span>POWER BAND</span>
              <span className="text-[#FF1A00] font-bold">REDLINE</span>
            </div>
          </div>

          {/* Racing CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            {/* Primary View Projects Button */}
            <button
              onClick={() => scrollTo('#projects')}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#E10600] via-[#FF1A00] to-[#FF6A00] hover:from-[#FF1A00] hover:to-[#FFD400] shadow-[0_0_25px_rgba(225,6,0,0.5)] hover:shadow-[0_0_35px_rgba(255,106,0,0.7)] transition-all duration-300 cursor-pointer speed-sweep active:scale-95 group"
            >
              <Flame className="w-4 h-4 fill-white text-white group-hover:scale-125 transition-transform" />
              <span>ENTER PROJECT GARAGE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Driver Profile Button */}
            <button
              onClick={() => scrollTo('#about')}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold uppercase tracking-wider text-neutral-200 bg-[#12121a] hover:bg-[#181824] border border-[#E10600]/40 hover:border-[#FF6A00] shadow-sm hover:shadow-[0_0_20px_rgba(225,6,0,0.25)] transition-all cursor-pointer active:scale-95"
            >
              <span>DRIVER DOSSIER</span>
              <ChevronRight className="w-4 h-4 text-[#FF6A00]" />
            </button>
          </div>

        </motion.div>

        {/* Right Column: Driver Telemetry Card (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center z-10"
        >
          {/* Rear Hot Wheels Flame Exhaust Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#E10600]/25 via-[#FF6A00]/25 to-[#FFD400]/20 rounded-3xl blur-2xl -z-10 animate-tach-pulse" />

          {/* Carbon Fiber Driver Card */}
          <div className="w-full max-w-sm rounded-3xl carbon-panel border-2 border-[#E10600]/60 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative overflow-hidden group">
            
            {/* Top Decal Bar with Racing Stripes */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E10600] shadow-[0_0_8px_#E10600]" />
                <span className="text-[11px] font-mono font-black text-neutral-300 tracking-widest uppercase">
                  PILOT TELEMETRY
                </span>
              </div>
              <span className="text-xs font-mono font-black px-2 py-0.5 rounded bg-[#E10600] text-white tracking-widest">
                #03
              </span>
            </div>

            {/* Official Profile Photo in Anodized Flame Bezel */}
            <div className="relative mx-auto w-36 h-36 sm:w-40 sm:h-40 rounded-2xl p-1 bg-gradient-to-tr from-[#E10600] via-[#FF6A00] to-[#FFD400] shadow-[0_0_20px_rgba(225,6,0,0.5)] mb-5">
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-full h-full object-cover rounded-xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-[#FF6A00]/60 text-[10px] font-mono font-black text-[#FFD400]">
                ACTIVE
              </div>
            </div>

            {/* Pilot Specifications */}
            <div className="text-center mb-5">
              <h2 className="text-xl font-black text-white tracking-tight uppercase">
                {personal.name}
              </h2>
              <div className="text-xs font-mono font-bold text-[#FF6A00] mt-0.5 uppercase tracking-wide">
                {personal.course}
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                {personal.school}
              </div>
            </div>

            {/* 3 Telemetry Quick Gauges */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
              <div className="p-2 rounded-xl bg-black/60 border border-white/5">
                <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                  VEHICLES
                </div>
                <div className="text-lg font-black text-[#FFD400] font-mono">
                  3+
                </div>
              </div>

              <div className="p-2 rounded-xl bg-black/60 border border-white/5">
                <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                  SPECS
                </div>
                <div className="text-lg font-black text-[#FF6A00] font-mono">
                  12+
                </div>
              </div>

              <div className="p-2 rounded-xl bg-black/60 border border-white/5">
                <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                  DIVISION
                </div>
                <div className="text-lg font-black text-[#FF1A00] font-mono">
                  BSIT
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
