import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Globe, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { personal } = portfolioData;
  const [showRealPhoto, setShowRealPhoto] = useState(false);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative h-full flex flex-col justify-stretch">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full h-full rounded-2xl sm:rounded-3xl border border-[#0088FF]/40 bg-[#070B18] p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch h-full">
          
          {/* Left Column: Driver Narrative & Signature (7 Cols on desktop) */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase mb-2">
                <span className="text-sm">🏁</span>
                <span>ABOUT ME</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight text-white mb-3 speed-font">
                DRIVER <span className="text-[#00D2FF]">PROFILE</span>
              </h2>

              {/* Bio Paragraph */}
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-4">
                I'm a passionate full-stack developer who loves turning ideas into real, functional web applications. I enjoy building clean, responsive, and user-friendly interfaces while working with modern technologies to create meaningful digital experiences.
              </p>

              {/* Cursive Signature */}
              <div className="my-2">
                <span className="text-2xl sm:text-3xl text-[#00D2FF] italic tracking-wider signature-font font-bold">
                  R. Manaog
                </span>
              </div>
            </div>

            {/* Status Button */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                STATUS
              </div>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#040711] border border-[#00D2FF]/60 hover:border-[#00D2FF] text-xs font-mono font-bold text-white transition-all cursor-pointer group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="tracking-wider">AVAILABLE</span>
                <span className="text-[#00D2FF] group-hover:translate-x-0.5 transition-transform font-bold">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Driver Telemetry HUD Identity Card (5 Cols on desktop) */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="w-full rounded-2xl bg-[#030612] border border-[#0088FF]/50 p-4 shadow-xl relative overflow-hidden flex flex-col justify-between">
              
              {/* Header inside HUD Card */}
              <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-white/10">
                <span className="text-sm">🏁</span>
                <div className="min-w-0">
                  <div className="text-xs font-black text-white uppercase tracking-wider speed-font truncate">
                    ROGELIO MANAOG
                  </div>
                  <div className="text-[9px] font-mono text-[#00D2FF] uppercase tracking-widest truncate">
                    FULL-STACK DEVELOPER
                  </div>
                </div>
              </div>

              {/* Main Content: Telemetry on Left, Pilot/Helmet on Right (Flex layout - NO overlapping) */}
              <div className="flex items-center justify-between gap-3 my-1">
                
                {/* Telemetry rows */}
                <div className="space-y-2 text-xs font-mono min-w-0 flex-1">
                  <div>
                    <div className="flex items-center gap-1 text-[8px] text-[#00D2FF] uppercase font-bold tracking-wider">
                      <MapPin className="w-2.5 h-2.5 shrink-0" />
                      <span>LOCATION</span>
                    </div>
                    <div className="font-bold text-white text-xs mt-0.5 truncate">
                      Philippines
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-[8px] text-[#00D2FF] uppercase font-bold tracking-wider">
                      <Globe className="w-2.5 h-2.5 shrink-0" />
                      <span>SPECIALIZATION</span>
                    </div>
                    <div className="font-bold text-white text-xs mt-0.5 whitespace-nowrap">
                      Web Development
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-[8px] text-[#00D2FF] uppercase font-bold tracking-wider">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                      <span>STATUS</span>
                    </div>
                    <div className="font-bold text-emerald-400 text-xs mt-0.5">
                      Available
                    </div>
                  </div>
                </div>

                {/* Pilot / Helmet Portrait */}
                <div className="shrink-0 flex flex-col items-center">
                  <div
                    onClick={() => setShowRealPhoto(!showRealPhoto)}
                    title="Click to toggle Pilot Helmet / Real Photo"
                    className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border border-[#00D2FF] bg-[#02040A] cursor-pointer group"
                  >
                    <img
                      src={showRealPhoto ? personal.profileImage : '/assets/hotwheels/driver_helm.jpg'}
                      alt="Pilot"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute bottom-0 inset-x-0 text-center text-[7px] font-mono text-[#00D2FF] bg-black/90 py-0.5 font-bold">
                      {showRealPhoto ? 'ROGELIO' : 'PILOT #01'}
                    </div>
                  </div>
                </div>

              </div>

              {/* Decal at bottom: 01 + Checkered strip */}
              <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
                {/* Skewed Blue Checkered Flag */}
                <div className="flex items-center -skew-x-12 opacity-85">
                  <div className="grid grid-cols-4 grid-rows-2 gap-[2px] w-6 h-3">
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

                <div className="text-xl font-black italic font-mono text-neutral-400/50 speed-font">
                  01
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Diagonal Solid Flame Slashes at Bottom Right */}
        <div className="absolute bottom-2 right-4 flex gap-1 -skew-x-12 pointer-events-none">
          <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#FF5500]" />
          <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#FF5500]" />
          <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#FF5500]" />
        </div>
      </motion.div>
    </section>
  );
}
