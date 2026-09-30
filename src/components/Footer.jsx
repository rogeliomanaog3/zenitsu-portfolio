import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="w-full border-t border-[#0088FF]/30 bg-[#040711] py-4 px-4 sm:px-8 mt-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: RM Hot Wheels Logo + Copyright */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/hotwheels/rm_logo.png"
            alt="RM Hot Wheels Logo"
            className="h-6 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,106,0,0.6)]"
          />
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-400">
            <span className="font-bold text-white uppercase speed-font">{personal.name}</span>
            <span className="text-neutral-600">|</span>
            <span>© 2026. All rights reserved.</span>
          </div>
        </div>

        {/* Right: Skewed Checkered Flag + Speed Tagline */}
        <div className="flex items-center gap-3">
          {/* Custom Stylized Skewed Checkered Flag */}
          <div className="flex items-center -skew-x-12 opacity-85">
            <div className="grid grid-cols-4 grid-rows-2 gap-[2px] w-7 h-3.5">
              <div className="bg-[#00D2FF]" />
              <div className="bg-transparent border border-[#00D2FF]/40" />
              <div className="bg-white" />
              <div className="bg-transparent border border-white/40" />
              <div className="bg-transparent border border-[#00D2FF]/40" />
              <div className="bg-[#00D2FF]" />
              <div className="bg-transparent border border-white/40" />
              <div className="bg-white" />
            </div>
          </div>

          <span className="text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase speed-font">
            CODE &nbsp;/&nbsp; BUILD &nbsp;/&nbsp; RACE
          </span>
        </div>

      </div>
    </footer>
  );
}
