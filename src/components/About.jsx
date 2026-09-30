import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import {
  GraduationCap,
  Code2,
  MapPin,
  Flame,
  Gauge,
  Flag,
} from 'lucide-react';

export default function About() {
  const { personal, aboutCards } = portfolioData;

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Background Volumetric Heat Glow */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#E10600]/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header: Hot Wheels Racing Dossier */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E10600]/15 border border-[#E10600]/40 text-[#FF6A00] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_12px_rgba(225,6,0,0.3)]">
            <Flag className="w-3.5 h-3.5 fill-[#E10600] text-[#E10600]" />
            <span>SECTION 01 // RACING DOSSIER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase flex items-center justify-center sm:justify-start gap-3">
            <span>DRIVER PROFILE</span>
            <span className="text-[#E10600] font-mono text-2xl sm:text-3xl">#03</span>
          </h2>

          <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-xl font-mono">
            Full-throttle academic background, developer philosophy, and machine telemetry.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E10600] via-[#FF6A00] to-[#FFD400] rounded-full mt-4 sm:mx-0 mx-auto shadow-[0_0_8px_#FF6A00]" />
        </div>

        {/* Two-Column Racing Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Official Pilot Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm rounded-3xl carbon-panel border-2 border-[#E10600]/50 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.85)] group">
              
              {/* Top Carbon Header Bar with Racing Number */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 fill-[#E10600] text-[#E10600]" />
                  <span className="text-[11px] font-mono font-black uppercase text-neutral-300 tracking-wider">
                    DRIVER IDENTIFICATION
                  </span>
                </div>
                <span className="text-xs font-mono font-black text-[#FFD400]">
                  NCST-03
                </span>
              </div>

              {/* Portrait Frame with Red-Orange Bezel */}
              <div className="w-full aspect-[4/5] rounded-2xl bg-black/80 border-2 border-[#E10600]/40 relative overflow-hidden group shadow-[inset_0_0_20px_rgba(225,6,0,0.2)]">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Corner Racing Decals */}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/85 border border-[#FF6A00]/50 text-[10px] font-mono font-bold text-white">
                  PILOT // 2026
                </div>
                
                <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-[#E10600]/90 backdrop-blur-md text-[10px] font-mono font-black text-white shadow-md">
                  HOT WHEELS DIV
                </div>
              </div>

              {/* Driver Specs Breakdown */}
              <div className="mt-4 p-3 rounded-2xl bg-black/60 border border-white/10 space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                  <span className="text-neutral-400">DRIVER:</span>
                  <span className="font-bold text-white">{personal.name}</span>
                </div>
                <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                  <span className="text-neutral-400">STATUS:</span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AVAILABLE FOR HIRE
                  </span>
                </div>
                <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                  <span className="text-neutral-400">SPECIALIZATION:</span>
                  <span className="font-bold text-[#FF6A00]">WEB DEVELOPMENT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">ACADEMIC BASE:</span>
                  <span className="font-bold text-[#FFD400]">NCST CAVITE</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Narrative Dossier & High-Performance Telemetry Cards (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Driving Philosophy Manifesto */}
            <div className="p-6 rounded-3xl carbon-panel border border-[#E10600]/30 shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <Gauge className="w-4 h-4 text-[#FF1A00]" />
                <span className="text-xs font-mono font-black uppercase tracking-wider text-[#FF6A00]">
                  DRIVING PHILOSOPHY & MANIFESTO
                </span>
              </div>

              <blockquote className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-3">
                "{personal.bio}"
              </blockquote>

              <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                {personal.careerGoal}
              </p>
            </div>

            {/* 3 High-Performance Telemetry Specification Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Card 1: Education */}
              <div className="p-5 rounded-2xl bg-[#0e0e14]/90 border border-white/10 hover:border-[#E10600]/60 transition-all duration-300 group shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#E10600]/15 flex items-center justify-center text-[#FF1A00] group-hover:scale-110 transition-transform mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  {aboutCards.education.title}
                </div>
                <div className="text-sm font-black text-white mt-1 leading-snug">
                  {aboutCards.education.value}
                </div>
                <div className="text-xs text-neutral-400 mt-1 line-clamp-1">
                  {aboutCards.education.subtitle}
                </div>
              </div>

              {/* Card 2: Focus */}
              <div className="p-5 rounded-2xl bg-[#0e0e14]/90 border border-white/10 hover:border-[#FF6A00]/60 transition-all duration-300 group shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 flex items-center justify-center text-[#FF6A00] group-hover:scale-110 transition-transform mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  {aboutCards.focus.title}
                </div>
                <div className="text-sm font-black text-white mt-1 leading-snug">
                  {aboutCards.focus.value}
                </div>
                <div className="text-xs text-neutral-400 mt-1 line-clamp-1">
                  {aboutCards.focus.subtitle}
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="p-5 rounded-2xl bg-[#0e0e14]/90 border border-white/10 hover:border-[#FFD400]/60 transition-all duration-300 group shadow-md">
                <div className="w-10 h-10 rounded-xl bg-[#FFD400]/15 flex items-center justify-center text-[#FFD400] group-hover:scale-110 transition-transform mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  {aboutCards.location.title}
                </div>
                <div className="text-sm font-black text-white mt-1 leading-snug">
                  {aboutCards.location.value}
                </div>
                <div className="text-xs text-neutral-400 mt-1 line-clamp-1">
                  {aboutCards.location.subtitle}
                </div>
              </div>

            </div>

            {/* Track Telemetry HUD Footer Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-black/60 border border-white/10 text-xs font-mono">
              <span className="text-neutral-400">
                HEADQUARTERS: <span className="text-white font-bold">{personal.location}</span>
              </span>
              <span className="text-[#FF6A00] font-bold">
                LAP: 2026 // SEASON 03
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
