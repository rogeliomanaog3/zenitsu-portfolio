import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import {
  GraduationCap,
  Code2,
  MapPin,
  Target,
  Sparkles,
  Zap,
  User,
} from 'lucide-react';

export default function About() {
  const { personal, aboutCards } = portfolioData;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <Zap className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>DISCOVER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mt-3 sm:mx-0 mx-auto" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait / Profile Placeholder Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm rounded-3xl p-3 bg-[#111320]/90 backdrop-blur-xl border border-amber-400/40 shadow-xl shadow-amber-500/10 group">
              
              {/* Image Frame */}
              <div className="w-full aspect-[4/5] rounded-2xl bg-[#090A12] border border-amber-400/30 relative overflow-hidden group">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle dark ambient gradient at the bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A12]/90 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
                  <div className="px-3.5 py-1.5 rounded-full bg-[#141624]/90 backdrop-blur-md border border-amber-400/40 text-[11px] font-mono font-semibold text-amber-400 shadow-lg shadow-black/60">
                    ⚡ STATUS: {personal.status}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Pills Under Photo */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-4">
              <div className="p-3.5 rounded-2xl bg-[#111320]/80 backdrop-blur-md border border-white/10 text-center">
                <div className="text-xs text-neutral-400">Philosophy</div>
                <div className="text-xs font-bold text-white mt-0.5">
                  Clean & Resilient
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#111320]/80 backdrop-blur-md border border-white/10 text-center">
                <div className="text-xs text-neutral-400">Execution</div>
                <div className="text-xs font-bold text-amber-400 mt-0.5">
                  Thunder Speed
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Academic Credentials, Goals & Modular Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Biography Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#111320]/85 backdrop-blur-xl border border-white/10 shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Biography</span>
              </div>
              <p className="text-neutral-200 text-base leading-relaxed mb-4">
                {personal.bio}
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Currently pursuing <span className="font-semibold text-white">{personal.course}</span> at <span className="font-semibold text-amber-400">{personal.school}</span> in <span className="font-semibold text-white">{personal.location}</span>.
              </p>
            </div>

            {/* Modular Info Cards (Education, Focus, Location) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Education Card */}
              <div className="p-5 rounded-2xl bg-[#111320]/85 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 transition-colors shadow-sm group">
                <div className="w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-xs text-neutral-400 font-medium">
                  {aboutCards.education.title}
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {aboutCards.education.value}
                </div>
                <div className="text-[11px] text-amber-400/80 mt-0.5">
                  {aboutCards.education.subtitle}
                </div>
              </div>

              {/* Focus Card */}
              <div className="p-5 rounded-2xl bg-[#111320]/85 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 transition-colors shadow-sm group">
                <div className="w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-xs text-neutral-400 font-medium">
                  {aboutCards.focus.title}
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {aboutCards.focus.value}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {aboutCards.focus.subtitle}
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#111320]/85 backdrop-blur-xl border border-white/10 hover:border-amber-400/50 transition-colors shadow-sm group">
                <div className="w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs text-neutral-400 font-medium">
                  {aboutCards.location.title}
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {aboutCards.location.value}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {aboutCards.location.subtitle}
                </div>
              </div>
            </div>

            {/* Career Goals & Interests Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-400/10 via-[#111320]/90 to-[#111320]/90 backdrop-blur-xl border border-amber-400/30 shadow-md flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-neutral-950 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/30">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 font-mono">
                  Career Aspirations
                </div>
                <div className="text-sm font-semibold text-neutral-200 leading-snug">
                  {personal.careerGoal}
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
