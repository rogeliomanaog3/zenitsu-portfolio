import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-full flex flex-col justify-stretch">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full rounded-2xl sm:rounded-3xl border border-[#0088FF]/30 shadow-[0_15px_45px_rgba(0,0,0,0.85)] relative overflow-hidden bg-[#070B18] flex flex-col justify-between"
      >
        {/* Full Bleed Track Background with Blue Supercar & Orange Loop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hotwheels/hero_car_track.jpg"
            alt="Hot Wheels Racing Track"
            className="w-full h-full object-cover object-center opacity-85"
          />
          {/* Subtle Dark Gradient Overlay on the Left for Razor-Sharp Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040711]/95 via-[#040711]/75 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full">
          
          {/* Top Heading Content */}
          <div className="max-w-xl">
            <div className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#00D2FF] uppercase mb-2 drop-shadow-[0_0_8px_rgba(0,210,255,0.6)]">
              HELLO, I'M
            </div>

            {/* Large Bold Slanted Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.95] mb-3 select-none">
              <span className="block chrome-speed-text speed-font drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)]">
                ROGELIO
              </span>
              <span className="block flame-speed-text speed-font drop-shadow-[0_4px_25px_rgba(255,106,0,0.5)]">
                MANAOG
              </span>
            </h1>

            {/* Role Subhead Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0088FF]/20 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span>FULL-STACK DEVELOPER</span>
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-neutral-300 font-sans font-medium mb-6 max-w-md drop-shadow-md">
              Building digital experiences that move.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Primary Flame Button */}
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#FFB300] via-[#FF6A00] to-[#E10600] hover:from-[#FFD400] hover:to-[#FF1A00] shadow-[0_0_25px_rgba(255,106,0,0.6)] hover:shadow-[0_0_35px_rgba(255,106,0,0.85)] transition-all cursor-pointer transform hover:scale-105 active:scale-95"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Cyan Outline Button */}
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-black/50 hover:bg-[#0088FF]/20 border border-[#00D2FF]/60 hover:border-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.2)] transition-all cursor-pointer active:scale-95"
              >
                <span>CONTACT ME</span>
                <ArrowRight className="w-4 h-4 text-[#00D2FF]" />
              </button>
            </div>
          </div>

          {/* Bottom Racing Stripe Ribbon */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Checkered Flag Graphic */}
              <div className="flex gap-0.5 opacity-90">
                <span className="w-2 h-4 bg-white" />
                <span className="w-2 h-4 bg-black" />
                <span className="w-2 h-4 bg-white" />
                <span className="w-2 h-4 bg-black" />
                <span className="w-2 h-4 bg-white" />
              </div>

              {/* Speed / Code / Create */}
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
                SPEED &nbsp;/&nbsp; CODE &nbsp;/&nbsp; CREATE
              </span>
            </div>

            {/* Giant Stylized 01 Decal */}
            <div className="text-3xl sm:text-4xl font-black italic text-neutral-400/40 font-mono tracking-tighter speed-font select-none">
              01
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
