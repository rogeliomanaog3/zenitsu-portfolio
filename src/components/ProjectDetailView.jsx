import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  X,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectDetailView({ project, onClose, onPrev, onNext }) {
  const containerRef = useRef(null);

  // Accordion state
  const [architectureOpen, setArchitectureOpen] = useState(true);
  const [highlightsOpen, setHighlightsOpen] = useState(true);

  // Compute clean URLs
  const projectUrl = project.liveUrlFull || (
    project.liveUrl && project.liveUrl !== '#'
      ? (project.liveUrl.startsWith('http://') || project.liveUrl.startsWith('https://')
          ? project.liveUrl
          : `https://${project.liveUrl}`)
      : null
  );

  const isFigma = projectUrl && projectUrl.includes('figma.com');

  const envUrl = project.deployedOn
    ? (() => {
        if (isFigma) return projectUrl;
        const clean = project.deployedOn.replace(/^[▲\s]+/, '').trim();
        return clean.includes('.') ? `https://${clean}` : null;
      })()
    : null;

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
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#0B0E14] text-neutral-100"
      ref={containerRef}
    >
      {/* Sticky Top Navigation Bar */}
      <div className="sticky top-0 z-30 w-full bg-[#0D111A]/95 backdrop-blur-md border-b border-[#1E2536] px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          
          {/* Back to Projects Button */}
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#161C2A] hover:bg-[#1E2536] border border-[#1E2536] text-neutral-200 hover:text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Back to Projects</span>
          </button>

          {/* Right Controls: Visit Live Site + Previous / Next & Close */}
          <div className="flex items-center gap-2">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs transition-colors"
              >
                <span>{isFigma ? 'Figma Design' : 'Live Site'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <div className="flex items-center gap-1">
              <button
                onClick={onPrev}
                className="p-1.5 rounded-lg bg-[#161C2A] hover:bg-[#1E2536] border border-[#1E2536] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                title="Previous Project (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={onNext}
                className="p-1.5 rounded-lg bg-[#161C2A] hover:bg-[#1E2536] border border-[#1E2536] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                title="Next Project (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#161C2A] hover:bg-red-500/20 hover:text-red-400 border border-[#1E2536] text-neutral-400 transition-colors cursor-pointer ml-1"
                title="Close View (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col justify-between">
        
        <div>
          {/* Project Title Header & Category Tag */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                Project Case Study
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {project.title}
              </h1>
            </div>
            <div className="flex items-center gap-2 self-start shrink-0">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium tracking-wider uppercase bg-[#161C2A] border border-[#1E2536] text-neutral-300">
                {project.category}
              </span>
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-amber-400 text-neutral-950"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Lead Paragraph */}
          <p className="font-medium text-neutral-200 text-base sm:text-lg leading-relaxed mb-3">
            {project.lead}
          </p>

          {/* Detailed Narrative */}
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Large Hero Browser Mockup Showcase */}
          <div className="rounded-xl overflow-hidden bg-neutral-900 border border-[#1E2536] mb-8 shadow-sm">
            {/* Browser Mockup Header */}
            <div className="px-4 py-2.5 bg-[#111622] border-b border-[#1E2536] flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              </div>

              {projectUrl ? (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded bg-[#0B0E14] border border-[#1E2536] hover:border-amber-400/50 text-[11px] font-mono text-neutral-300 hover:text-amber-400 flex items-center gap-1.5 truncate max-w-sm transition-colors group cursor-pointer"
                  title="Open live website in new tab"
                >
                  <span className="truncate">
                    {project.liveUrl ? `https://${project.liveUrl.replace(/^https?:\/\//, '')}` : projectUrl}
                  </span>
                  <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-amber-400 shrink-0" />
                </a>
              ) : (
                <span className="text-[11px] font-mono text-neutral-400 truncate max-w-xs">
                  https://{project.liveUrl}
                </span>
              )}

              <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                VERIFIED
              </span>
            </div>

            {/* Screenshot Frame */}
            <div className="bg-[#0B0E14] flex items-center justify-center">
              <img
                src={project.heroImage || project.thumbnail}
                alt={project.title}
                className="w-full h-auto object-cover max-h-[520px]"
              />
            </div>
          </div>

          {/* System Capabilities Paragraph */}
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
            {project.overview}
          </p>

          {/* Technical Collapsible Sections */}
          <div className="space-y-4 mb-10">
            {/* Accordion 1: Architecture & Design System */}
            <div className="rounded-xl bg-[#111622] border border-[#1E2536] overflow-hidden">
              <button
                onClick={() => setArchitectureOpen(!architectureOpen)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer group"
              >
                <div>
                  <div className="font-semibold text-white text-base group-hover:text-amber-400 transition-colors">
                    {project.architecture.title}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 mt-0.5">
                    {project.architecture.subtitle}
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                    architectureOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {architectureOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-[#1E2536] space-y-2">
                      {project.architecture.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300">
                          <span className="text-amber-400 shrink-0 font-mono text-xs mt-0.5">▸</span>
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion 2: Key Implementations & Highlights */}
            <div className="rounded-xl bg-[#111622] border border-[#1E2536] overflow-hidden">
              <button
                onClick={() => setHighlightsOpen(!highlightsOpen)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer group"
              >
                <div>
                  <div className="font-semibold text-white text-base group-hover:text-amber-400 transition-colors">
                    {project.highlights.title}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 mt-0.5">
                    {project.highlights.subtitle}
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                    highlightsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {highlightsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-[#1E2536] space-y-2">
                      {project.highlights.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300">
                          <span className="text-amber-400 shrink-0 font-mono text-xs mt-0.5">▸</span>
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Technical Metadata & Deployment Table */}
          <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-[#1E2536] rounded-xl overflow-hidden bg-[#111622]">
              {/* Col 1: Crafted By */}
              <div className="p-4 border-b sm:border-r border-[#1E2536]">
                <div className="text-[10px] font-mono font-medium text-neutral-400 uppercase tracking-wider mb-1">
                  AUTHOR / DEV
                </div>
                <a
                  href={`mailto:${project.craftedBy}`}
                  className="text-xs font-mono font-medium text-white hover:text-amber-400 transition-colors break-all block"
                >
                  {project.craftedBy}
                </a>
              </div>

              {/* Col 2: Date */}
              <div className="p-4 border-b md:border-r border-[#1E2536]">
                <div className="text-[10px] font-mono font-medium text-neutral-400 uppercase tracking-wider mb-1">
                  DATE
                </div>
                <div className="text-xs font-mono font-medium text-neutral-200">
                  {project.tableDate}
                </div>
              </div>

              {/* Col 3: Category */}
              <div className="p-4 border-b sm:border-r border-[#1E2536]">
                <div className="text-[10px] font-mono font-medium text-neutral-400 uppercase tracking-wider mb-1">
                  CATEGORY
                </div>
                <div className="text-xs font-medium text-neutral-200">
                  {project.categoryFull}
                </div>
              </div>

              {/* Col 4: Deployed On */}
              <div className="p-4 border-b border-[#1E2536]">
                <div className="text-[10px] font-mono font-medium text-neutral-400 uppercase tracking-wider mb-1">
                  ENVIRONMENT
                </div>
                {envUrl ? (
                  <a
                    href={envUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono font-medium text-neutral-200 hover:text-amber-400 transition-colors flex items-center gap-1.5 truncate group"
                    title={`Open ${envUrl}`}
                  >
                    <span className="truncate">{project.deployedOn}</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-amber-400 shrink-0" />
                  </a>
                ) : (
                  <div className="text-xs font-mono font-medium text-neutral-200 truncate">
                    {project.deployedOn}
                  </div>
                )}
              </div>

              {/* Row 2: Live URL (Made Clickable) */}
              <div className="p-4 border-b sm:border-b-0 sm:border-r border-[#1E2536]">
                <div className="text-[10px] font-mono font-medium text-neutral-400 uppercase tracking-wider mb-1">
                  SYSTEM URL
                </div>
                {projectUrl ? (
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1.5 truncate group"
                    title={`Visit ${projectUrl}`}
                  >
                    <span className="truncate">{project.liveUrl}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-neutral-400 truncate block">
                    {project.liveUrl}
                  </span>
                )}
              </div>

              {/* Row 2: Status */}
              <div className="p-4 border-b sm:border-b-0 md:border-r border-[#1E2536]">
                <div className="text-[10px] font-mono font-medium text-neutral-400 uppercase tracking-wider mb-1">
                  STATUS
                </div>
                <div className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{project.status}</span>
                </div>
              </div>

              {/* Row 2: Stack (Span 2) */}
              <div className="p-4 sm:col-span-2">
                <div className="text-[10px] font-mono font-medium text-neutral-400 uppercase tracking-wider mb-1">
                  STACK BREAKDOWN
                </div>
                <div className="text-xs text-neutral-300 leading-relaxed font-mono">
                  {project.stack}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Back to Projects & Live Site Buttons */}
          <div className="my-10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#161C2A] hover:bg-[#1E2536] border border-[#1E2536] text-neutral-200 hover:text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>

            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <span>{isFigma ? 'Open Figma Design' : 'Visit Live Project'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>

        {/* Modal Bottom Bar / Footer */}
        <div className="pt-6 border-t border-[#1E2536] flex items-center justify-between text-xs text-neutral-400">
          <div className="font-mono text-neutral-300">
            rogelio.dev
          </div>

          <div className="flex items-center gap-4">
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
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors cursor-pointer font-mono"
          >
            [ Top ↑ ]
          </button>
        </div>

      </div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}
