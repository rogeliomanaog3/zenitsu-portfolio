import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

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
        className="w-full h-full rounded-2xl sm:rounded-3xl border border-[#0088FF]/30 shadow-[0_15px_45px_rgba(0,0,0,0.85)] bg-[#070B18]/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden"
      >
        {/* Subtle Ambient Heat Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0088FF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Driver Narrative & Signature (6.5 Cols) */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase mb-2">
                <span className="text-sm">🏁</span>
                <span>ABOUT ME</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-tight text-white mb-3 speed-font">
                DRIVER <span className="text-[#00D2FF] drop-shadow-[0_0_12px_rgba(0,210,255,0.6)]">PROFILE</span>
              </h2>

              {/* Bio Paragraph */}
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-4">
                I'm a passionate full-stack developer who loves turning ideas into real, functional web applications. I enjoy building clean, responsive, and user-friendly interfaces while working with modern technologies to create meaningful digital experiences.
              </p>

              {/* Cursive Signature */}
              <div className="my-2">
                <span className="text-2xl sm:text-3xl text-[#00D2FF] italic tracking-wider drop-shadow-[0_0_10px_rgba(0,210,255,0.8)] signature-font font-bold">
                  R. Manaog
                </span>
              </div>
            </div>

            {/* Status Button */}
            <div className="pt-3">
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                STATUS
              </div>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#040711] border border-[#00D2FF]/60 hover:border-[#00D2FF] text-xs font-mono font-bold text-white transition-all shadow-[0_0_15px_rgba(0,210,255,0.25)] cursor-pointer group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-wider">AVAILABLE</span>
                <span className="text-[#00D2FF] group-hover:translate-x-0.5 transition-transform font-bold">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Driver Telemetry HUD Identity Card (5.5 Cols) */}
          <div className="md:col-span-6 lg:col-span-5 flex justify-center">
            <div className="w-full rounded-2xl bg-[#030612]/95 border-2 border-[#0088FF]/50 p-4 sm:p-5 shadow-[0_0_25px_rgba(0,136,255,0.2)] relative overflow-hidden">
              
              {/* Inner HUD Glow Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00D2FF]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Header inside HUD Card */}
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-white/10">
                <span className="text-base">🏁</span>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wider speed-font">
                    ROGELIO MANAOG
                  </div>
                  <div className="text-[9px] font-mono text-[#00D2FF] uppercase tracking-widest">
                    FULL-STACK DEVELOPER
                  </div>
                </div>
              </div>

              {/* Main Content: Telemetry on Left, Pilot/Helmet on Right */}
              <div className="grid grid-cols-12 gap-3 items-center">
                
                {/* Telemetry rows (7 cols) */}
                <div className="col-span-7 space-y-2.5 text-xs font-mono">
                  <div>
                    <div className="flex items-center gap-1.5 text-[9px] text-[#00D2FF] uppercase font-bold tracking-wider">
                      <MapPin className="w-2.5 h-2.5" />
                      <span>LOCATION</span>
                    </div>
                    <div className="font-bold text-white text-xs mt-0.5">Philippines</div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-[9px] text-[#00D2FF] uppercase font-bold tracking-wider">
                      <Globe className="w-2.5 h-2.5" />
                      <span>SPECIALIZATION</span>
                    </div>
                    <div className="font-bold text-white text-xs mt-0.5">Web Development</div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-[9px] text-[#00D2FF] uppercase font-bold tracking-wider">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                      <span>STATUS</span>
                    </div>
                    <div className="font-bold text-emerald-400 text-xs mt-0.5">Available</div>
                  </div>
                </div>

                {/* Pilot / Helmet Portrait (5 cols) */}
                <div className="col-span-5 flex flex-col items-center">
                  <div
                    onClick={() => setShowRealPhoto(!showRealPhoto)}
                    title="Click to toggle Pilot Helmet / Real Photo"
                    className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-[#00D2FF]/60 shadow-[0_0_15px_rgba(0,210,255,0.4)] cursor-pointer group"
                  >
                    <img
                      src={showRealPhoto ? personal.profileImage : '/assets/hotwheels/driver_helm.jpg'}
                      alt="Pilot"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-1 inset-x-0 text-center text-[7px] font-mono text-[#00D2FF] bg-black/70 py-0.5">
                      {showRealPhoto ? 'ROGELIO' : 'PILOT #01'}
                    </div>
                  </div>
                </div>

              </div>

              {/* Decal at bottom right: 01 + Checkered strip */}
              <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
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

                <div className="text-2xl font-black italic font-mono text-neutral-400/50 speed-font">
                  01
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Diagonal Flame Speed Slashes at Bottom Right of Outer Card */}
        <div className="absolute bottom-2 right-4 flex gap-1 -skew-x-12 pointer-events-none">
          <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#FF6A00] shadow-[0_0_10px_rgba(255,106,0,0.8)]" />
          <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#FF6A00] shadow-[0_0_10px_rgba(255,106,0,0.8)]" />
          <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#FF6A00] shadow-[0_0_10px_rgba(255,106,0,0.8)]" />
        </div>
      </motion.div>
    </section>
  );
}
