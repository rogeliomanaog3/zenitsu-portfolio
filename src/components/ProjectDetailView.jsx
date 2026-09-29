import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowUpRight,
  X,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectDetailView({ project, onClose, onPrev, onNext }) {
  const containerRef = useRef(null);

  // Accordion state
  const [architectureOpen, setArchitectureOpen] = useState(true);
  const [highlightsOpen, setHighlightsOpen] = useState(true);

  // Lock body scroll when modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  // Scroll to top whenever project changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [project.id]);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#07080D]/95 backdrop-blur-3xl text-neutral-50"
      ref={containerRef}
    >
      {/* Background ambient lightning glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Sticky Top Navigation Bar (Always Visible & Above Content) */}
      <div className="sticky top-0 z-30 w-full bg-[#08090E]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3.5 shadow-xl shadow-black/50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          
          {/* Prominent Back to Projects Button */}
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121422] hover:bg-amber-400 hover:text-neutral-950 border border-amber-400/50 text-amber-300 font-bold text-xs sm:text-sm shadow-lg shadow-black/60 hover:shadow-amber-400/30 transition-all duration-200 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:text-neutral-950 group-hover:-translate-x-1 transition-all" />
            <span>← Back to Projects</span>
          </button>

          {/* Right Controls: Previous / Next & Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="p-2 rounded-lg bg-[#141624] hover:bg-[#1E2235] border border-white/10 hover:border-amber-400/50 text-neutral-300 hover:text-white transition-all cursor-pointer shadow-sm"
              title="Previous Project (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="p-2 rounded-lg bg-[#141624] hover:bg-[#1E2235] border border-white/10 hover:border-amber-400/50 text-neutral-300 hover:text-white transition-all cursor-pointer shadow-sm"
              title="Next Project (Right Arrow)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-red-400 hover:text-red-300 transition-all cursor-pointer shadow-sm ml-1"
              title="Close View (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col justify-between">
        
        <div>
          {/* Project Title Header & Category Tag */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>
            <span className="px-3 py-1 rounded text-xs font-mono font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-neutral-300 self-start shrink-0">
              {project.category}
            </span>
          </div>

          {/* Bold Lead Paragraph */}
          <p className="font-bold text-white text-base sm:text-lg leading-relaxed mb-3">
            {project.lead}
          </p>

          {/* Detailed Narrative */}
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Large Hero Browser Mockup Showcase */}
          <div className="rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl mb-8 group">
            {/* Browser Mockup Chrome Header */}
            <div className="px-4 py-2.5 bg-[#121422] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-neutral-400 truncate max-w-xs">
                https://{project.liveUrl}
              </span>
              <span className="text-[10px] text-amber-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE
              </span>
            </div>

            {/* Screenshot Frame */}
            <div className="relative bg-[#090A12] flex items-center justify-center overflow-hidden">
              <img
                src={project.heroImage || project.thumbnail}
                alt={project.title}
                className="w-full h-auto object-cover max-h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* System Capabilities Paragraph */}
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
            {project.overview}
          </p>

          {/* Interactive Collapsible Accordions (Reference Image 2) */}
          <div className="space-y-4 mb-10">
            {/* Accordion 1: Architecture & Design System */}
            <div className="rounded-2xl bg-[#0D0F18]/90 border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
              <button
                onClick={() => setArchitectureOpen(!architectureOpen)}
                className="w-full px-6 py-4.5 flex items-center justify-between text-left cursor-pointer group"
              >
                <div>
                  <div className="font-bold text-white text-base sm:text-lg group-hover:text-amber-400 transition-colors">
                    {project.architecture.title}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 mt-0.5">
                    {project.architecture.subtitle}
                  </div>
                </div>
                <div className="p-1 rounded-lg bg-white/5 group-hover:bg-amber-400/20 text-neutral-400 group-hover:text-amber-400 transition-colors">
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
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion 2: Key Implementations & Highlights */}
            <div className="rounded-2xl bg-[#0D0F18]/90 border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
              <button
                onClick={() => setHighlightsOpen(!highlightsOpen)}
                className="w-full px-6 py-4.5 flex items-center justify-between text-left cursor-pointer group"
              >
                <div>
                  <div className="font-bold text-white text-base sm:text-lg group-hover:text-amber-400 transition-colors">
                    {project.highlights.title}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 mt-0.5">
                    {project.highlights.subtitle}
                  </div>
                </div>
                <div className="p-1 rounded-lg bg-white/5 group-hover:bg-amber-400/20 text-neutral-400 group-hover:text-amber-400 transition-colors">
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
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Technical Metadata & Deployment Table (Exact Match to Image 2) */}
          <div className="mb-10">
            {/* Live Link Monospace Header */}
            <div className="mb-4">
              <a
                href={project.liveUrlFull || '#'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4 decoration-amber-400/50 hover:decoration-amber-300 transition-colors"
              >
                <span>{project.liveUrl}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-neutral-400 mt-1">
                {project.lead}
              </p>
            </div>

            {/* 4-Column Technical Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden bg-[#0D0F18]/90 backdrop-blur-md">
              {/* Row 1, Col 1: Crafted By */}
              <div className="p-4 sm:p-5 border-b sm:border-r border-white/10">
                <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  CRAFTED BY
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-white">
                  {project.craftedBy}
                </div>
              </div>

              {/* Row 1, Col 2: Date */}
              <div className="p-4 sm:p-5 border-b md:border-r border-white/10">
                <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  DATE
                </div>
                <div className="text-xs sm:text-sm font-mono font-semibold text-neutral-200">
                  {project.tableDate}
                </div>
              </div>

              {/* Row 1, Col 3: Category */}
              <div className="p-4 sm:p-5 border-b sm:border-r border-white/10">
                <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  CATEGORY
                </div>
                <div className="text-xs sm:text-sm font-semibold text-neutral-200">
                  {project.categoryFull}
                </div>
              </div>

              {/* Row 1, Col 4: Deployed On */}
              <div className="p-4 sm:p-5 border-b border-white/10">
                <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  DEPLOYED ON
                </div>
                <div className="text-xs sm:text-sm font-mono text-neutral-200 truncate">
                  {project.deployedOn}
                </div>
              </div>

              {/* Row 2, Col 1: Live URL */}
              <div className="p-4 sm:p-5 border-b sm:border-b-0 sm:border-r border-white/10">
                <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  LIVE URL
                </div>
                <a
                  href={project.liveUrlFull || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm font-mono text-amber-400 hover:text-amber-300 underline truncate block"
                >
                  {project.liveUrl} ↗
                </a>
              </div>

              {/* Row 2, Col 2: Status */}
              <div className="p-4 sm:p-5 border-b sm:border-b-0 md:border-r border-white/10">
                <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  STATUS
                </div>
                <div className="text-xs sm:text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Row 2, Col 3 & 4 (Span 2): Tech Stack */}
              <div className="p-4 sm:p-5 sm:col-span-2">
                <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  STACK
                </div>
                <div className="text-xs text-neutral-300 leading-relaxed font-mono">
                  {project.stack}
                </div>
              </div>
            </div>
          </div>

          {/* Large Bottom Back to Projects Button */}
          <div className="my-12 text-center">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 font-bold text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-950" />
              <span>Back to Projects Overview</span>
            </button>
          </div>

        </div>

        {/* Modal Bottom Bar / Footer */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
          <div className="font-mono font-bold text-white tracking-wider">
            &lt;ROGELIO.DEV/&gt;
          </div>

          <div className="flex items-center gap-6 font-medium">
            <a
              href={portfolioData.socialLinks.github.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="hover:text-amber-400 transition-colors"
            >
              Email
            </a>
            <a
              href={portfolioData.socialLinks.facebook.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Facebook
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer font-mono"
          >
            [ Back to Top ↑ ]
          </button>
        </div>

      </div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}
