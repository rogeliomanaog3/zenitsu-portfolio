import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';
import {
  Zap,
  ExternalLink,
  Code2,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

export default function FeaturedProject() {
  const { featuredProject } = portfolioData;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Golden Energy Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-96 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-6xl w-full mx-auto">
          {/* Main Card with Golden Energy Border Glow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#0F111A]/90 backdrop-blur-2xl border-2 border-amber-400/60 shadow-[0_0_40px_rgba(245,158,11,0.2)] hover:shadow-[0_0_50px_rgba(245,158,11,0.35)] transition-all duration-500 overflow-hidden group"
          >
            {/* Katana-inspired Diagonal Energy Sweep Line */}
            <div className="absolute -top-12 -right-12 w-48 h-48 pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity">
              <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500">
                <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="20" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>

            {/* Top Label Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-extrabold tracking-widest uppercase shadow-md">
                <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{featuredProject.tag}</span>
              </div>
              <div className="text-xs font-mono tracking-widest text-amber-400/80 uppercase">
                {featuredProject.japaneseSubhead}
              </div>
            </div>

            {/* Grid Layout: Screenshot Preview (6 cols) & Project Details (6 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Large Screenshot Placeholder (6 cols) */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group-hover:scale-[1.01] transition-transform duration-500">
                  {/* Browser Mockup Chrome Header */}
                  <div className="px-4 py-2.5 bg-[#141624] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400">
                      https://preview.app.internal
                    </span>
                    <span className="text-[10px] text-amber-400 font-mono">⚡ LIVE</span>
                  </div>

                  {/* Screenshot Viewport Placeholder */}
                  <div className="aspect-[16/10] w-full flex flex-col items-center justify-center p-8 text-center bg-radial from-amber-500/15 via-[#090A12] to-black relative">
                    <div className="w-16 h-16 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-400 mb-3 shadow-[0_0_25px_rgba(245,158,11,0.35)]">
                      <Zap className="w-8 h-8 fill-amber-400" />
                    </div>
                    <div className="font-bold text-white text-base mb-1">
                      {featuredProject.image}
                    </div>
                    <div className="text-xs text-neutral-400 max-w-xs leading-relaxed">
                      High-Resolution Project Interface & Responsive Dashboard Preview
                    </div>

                    {/* Katana energy slice highlight across preview */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 via-transparent to-amber-400/5 pointer-events-none" />
                  </div>
                </div>

                {/* Sub-badge: Role */}
                <div className="mt-3 flex items-center justify-between text-xs text-neutral-400 px-1">
                  <span>My Role: <strong className="text-white">{featuredProject.role}</strong></span>
                  <span className="font-mono text-amber-400">PRODUCTION READY</span>
                </div>
              </div>

              {/* Right Column: Narrative, Problem, Solution & Features (6 cols) */}
              <div className="lg:col-span-6 flex flex-col">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                  {featuredProject.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                {/* Problem vs Solution Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-[#141624] border border-white/10">
                    <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase mb-1">
                      Problem Solved
                    </div>
                    <div className="text-xs text-neutral-300 leading-snug">
                      {featuredProject.problemSolved}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-400/15 border border-amber-400/40">
                    <div className="text-[11px] font-mono font-bold text-amber-300 uppercase mb-1">
                      Solution
                    </div>
                    <div className="text-xs text-neutral-200 leading-snug">
                      {featuredProject.solution}
                    </div>
                  </div>
                </div>

                {/* Key Features Bullet List */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase">
                    Core Capabilities
                  </div>
                  {featuredProject.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#161828] text-neutral-200 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Case Study</span>
                  </button>

                  <a
                    href={featuredProject.codeUrl}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#161828] hover:bg-[#1E2135] text-neutral-200 font-semibold text-xs uppercase tracking-wider transition-colors border border-white/10 cursor-pointer"
                  >
                    <Code2 className="w-4 h-4 text-amber-400" />
                    <span>View Code</span>
                  </a>
                </div>

              </div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={featuredProject}
      />
    </>
  );
}
