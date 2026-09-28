import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon } from './Icons';
import { X, CheckCircle2, Zap, ExternalLink, Layers } from 'lucide-react';

export default function CaseStudyModal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-neutral-900 border border-amber-400/40 dark:border-amber-400/30 p-6 sm:p-8 shadow-2xl shadow-amber-500/20 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-400/20 text-amber-500">
                <Zap className="w-4 h-4 fill-amber-400" />
              </span>
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase">
                  CASE STUDY ARCHIVE
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-neutral-50">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800">
            <div>
              <div className="text-[11px] text-neutral-400 font-mono">SCOPE</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {project.caseStudy.client}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-neutral-400 font-mono">TIMELINE</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {project.caseStudy.duration}
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-[11px] text-neutral-400 font-mono">ROLE</div>
              <div className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400">
                {project.role}
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 text-sm text-neutral-700 dark:text-neutral-300">
            <div>
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-500">⚡</span> Problem Statement
              </h4>
              <p className="leading-relaxed bg-neutral-50 dark:bg-neutral-800/40 p-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800">
                {project.problemSolved}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-500">⚡</span> Engineering Solution
              </h4>
              <p className="leading-relaxed bg-neutral-50 dark:bg-neutral-800/40 p-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800">
                {project.solution}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-500">⚡</span> Key Capabilities & Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/40 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metric */}
            <div className="p-4 rounded-2xl bg-amber-400/10 dark:bg-amber-400/5 border border-amber-400/30 text-amber-900 dark:text-amber-300 flex items-center gap-3">
              <Zap className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <span className="font-bold text-xs uppercase tracking-wider block font-mono">MEASURED IMPACT:</span>
                <span className="text-xs sm:text-sm font-semibold">{project.caseStudy.impact}</span>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-end gap-3 mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Close Archive
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold hover:shadow-lg hover:shadow-amber-500/20 transition-all"
            >
              <span>Launch Prototype</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
