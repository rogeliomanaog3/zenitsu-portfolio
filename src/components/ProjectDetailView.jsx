import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  Flame,
  Gauge,
  Zap,
  CheckCircle2,
} from 'lucide-react';

export default function ProjectDetailView({ project, onClose, onPrev, onNext }) {
  const containerRef = useRef(null);

  // Accordion state
  const [architectureOpen, setArchitectureOpen] = useState(true);
  const [highlightsOpen, setHighlightsOpen] = useState(true);

  // Lock body scroll when modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  // Scroll to top when switching projects
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [project.id]);

  if (typeof document === 'undefined') return null;

  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#050505]/98 backdrop-blur-3xl text-neutral-50"
      ref={containerRef}
    >
      {/* Background Volumetric Heat Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#E10600]/12 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Sticky Top Racing Navigation Bar */}
      <div className="sticky top-0 z-30 w-full bg-[#07070b]/95 backdrop-blur-xl border-b border-[#E10600]/30 px-4 sm:px-6 lg:px-8 py-3.5 shadow-xl shadow-black/80">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          
          {/* Return to Garage Button */}
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14141d] hover:bg-[#E10600] hover:text-white border border-[#E10600]/50 text-neutral-200 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all duration-200 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF1A00] group-hover:text-white group-hover:-translate-x-1 transition-all" />
            <span>← RETURN TO GARAGE</span>
          </button>

          {/* Right Controls: Previous / Next & Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="p-2 rounded-xl bg-[#14141d] hover:bg-[#1f1f2e] border border-white/10 hover:border-[#FF6A00] text-neutral-300 hover:text-white transition-all cursor-pointer shadow-sm"
              title="Previous Vehicle (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="p-2 rounded-xl bg-[#14141d] hover:bg-[#1f1f2e] border border-white/10 hover:border-[#FF6A00] text-neutral-300 hover:text-white transition-all cursor-pointer shadow-sm"
              title="Next Vehicle (Right Arrow)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-red-400 hover:text-red-300 transition-all cursor-pointer shadow-sm ml-1"
              title="Close Blueprint (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col justify-between">
        
        <div>
          {/* Vehicle Decal Header Tag */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E10600]/15 border border-[#E10600]/40 text-[#FFD400] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Flame className="w-3.5 h-3.5 fill-[#E10600] text-[#E10600]" />
                <span>HOT WHEELS GARAGE BLUEPRINT</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black text-white tracking-tight uppercase leading-tight">
                {project.title}
              </h1>
            </div>

            <span className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold tracking-widest uppercase bg-black/60 border border-[#FF6A00]/50 text-[#FF6A00] self-start shrink-0">
              {project.category}
            </span>
          </div>

          {/* Bold Lead Paragraph */}
          <div className="p-4 sm:p-5 rounded-2xl carbon-panel border border-[#E10600]/30 mb-8">
            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-sans font-medium">
              {project.lead}
            </p>
          </div>

          {/* High-Resolution Project Screenshot in Racing Bezel */}
          <div className="mb-10 rounded-3xl p-1 bg-gradient-to-tr from-[#E10600] via-[#FF6A00] to-[#FFD400] shadow-[0_15px_45px_rgba(225,6,0,0.35)]">
            <div className="rounded-[22px] overflow-hidden bg-black/90 relative">
              <img
                src={project.heroImage || project.thumbnail}
                alt={project.title}
                className="w-full h-auto object-cover max-h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E10600]/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* System Capabilities Overview */}
          <div className="mb-8 p-6 rounded-2xl bg-[#0e0e14] border border-white/10">
            <div className="text-xs font-mono font-bold text-[#FF6A00] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-[#FF1A00]" />
              <span>VEHICLE ARCHITECTURE & CAPABILITIES</span>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Interactive Collapsible Accordions */}
          <div className="space-y-4 mb-10">
            {/* Accordion 1: Architecture & Design System */}
            <div className="rounded-2xl carbon-panel border border-white/10 hover:border-[#E10600]/40 transition-colors overflow-hidden">
              <button
                onClick={() => setArchitectureOpen(!architectureOpen)}
                className="w-full px-6 py-4.5 flex items-center justify-between text-left cursor-pointer group"
              >
                <div>
                  <div className="font-black text-white text-base sm:text-lg group-hover:text-[#FF6A00] transition-colors uppercase">
                    {project.architecture.title}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 mt-0.5">
                    {project.architecture.subtitle}
                  </div>
                </div>
                <div className="p-1 rounded-lg bg-white/5 group-hover:bg-[#E10600]/20 text-neutral-400 group-hover:text-[#FF1A00] transition-colors">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      architectureOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {architectureOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-2.5">
                      {project.architecture.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion 2: Key Implementations & Highlights */}
            <div className="rounded-2xl carbon-panel border border-white/10 hover:border-[#FF6A00]/40 transition-colors overflow-hidden">
              <button
                onClick={() => setHighlightsOpen(!highlightsOpen)}
                className="w-full px-6 py-4.5 flex items-center justify-between text-left cursor-pointer group"
              >
                <div>
                  <div className="font-black text-white text-base sm:text-lg group-hover:text-[#FFD400] transition-colors uppercase">
                    {project.highlights.title}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 mt-0.5">
                    {project.highlights.subtitle}
                  </div>
                </div>
                <div className="p-1 rounded-lg bg-white/5 group-hover:bg-[#FF6A00]/20 text-neutral-400 group-hover:text-[#FFD400] transition-colors">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      highlightsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {highlightsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-2.5">
                      {project.highlights.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                          <Zap className="w-4 h-4 text-[#FFD400] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* 4-Column Technical Machine Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-[#E10600]/30 rounded-2xl overflow-hidden carbon-panel mb-8">
            {/* Row 1, Col 1: Crafted By */}
            <div className="p-4 sm:p-5 border-b sm:border-r border-white/10">
              <div className="text-[10px] font-mono font-black text-neutral-400 uppercase tracking-wider mb-1">
                CRAFTED BY
              </div>
              <a
                href={`mailto:${project.craftedBy}`}
                className="text-xs sm:text-sm font-mono font-bold text-white hover:text-[#FF6A00] transition-colors break-all block"
                title={`Email ${project.craftedBy}`}
              >
                {project.craftedBy}
              </a>
            </div>

            {/* Row 1, Col 2: Date */}
            <div className="p-4 sm:p-5 border-b md:border-r border-white/10">
              <div className="text-[10px] font-mono font-black text-neutral-400 uppercase tracking-wider mb-1">
                DEPLOYED ON TRACK
              </div>
              <div className="text-xs sm:text-sm font-mono font-bold text-neutral-200">
                {project.tableDate}
              </div>
            </div>

            {/* Row 1, Col 3: Category */}
            <div className="p-4 sm:p-5 border-b sm:border-r border-white/10">
              <div className="text-[10px] font-mono font-black text-neutral-400 uppercase tracking-wider mb-1">
                VEHICLE CLASS
              </div>
              <div className="text-xs sm:text-sm font-mono font-bold text-white uppercase">
                {project.category}
              </div>
            </div>

            {/* Row 1, Col 4: Status */}
            <div className="p-4 sm:p-5 border-b border-white/10">
              <div className="text-[10px] font-mono font-black text-neutral-400 uppercase tracking-wider mb-1">
                TRACK STATUS
              </div>
              <div className="text-xs sm:text-sm font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {project.status}
              </div>
            </div>
          </div>

          {/* Tech Stack Ribbon */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/10 mb-8 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-neutral-400 uppercase mr-2">
              POWERTRAIN:
            </span>
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-bold text-[#FFD400]"
              >
                {t}
              </span>
            ))}
          </div>

        </div>

        {/* Bottom Return Action */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E10600] to-[#FF6A00] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(225,6,0,0.5)] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO GARAGE</span>
          </button>

          <span className="text-xs font-mono text-neutral-500">
            PRESS <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-bold">ESC</kbd> TO EXIT
          </span>
        </div>

      </div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}
