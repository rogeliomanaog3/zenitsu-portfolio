import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, Flame, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { personal, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050505]/95 backdrop-blur-md pt-12 pb-16 px-4 sm:px-6 lg:px-8 z-10">
      {/* Hot Wheels Dual Racing Stripe at Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-[3px] bg-gradient-to-r from-transparent via-[#E10600] to-transparent shadow-[0_0_15px_#E10600]" />

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-between gap-8 sm:flex-row">
        
        {/* Brand & Racing Credit */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2.5 mb-2 font-black text-white">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#E10600] to-[#FF6A00] flex items-center justify-center text-white shadow-[0_0_10px_rgba(225,6,0,0.5)]">
              <Flame className="w-4 h-4 fill-white" />
            </span>
            <span className="tracking-tight text-base uppercase">{personal.name}</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E10600]/20 text-[#FFD400] border border-[#E10600]/40 uppercase tracking-widest font-bold">
              #03 RACER
            </span>
          </div>

          <p className="text-xs text-neutral-400 font-mono">
            Designed & Engineered for High Velocity • <span className="font-semibold text-neutral-200">{personal.school}</span>
          </p>

          <p className="text-[11px] text-neutral-500 mt-1 font-mono">
            © 2026 {personal.name}. All rights reserved.
          </p>
        </div>

        {/* Minimal Navigation & Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={socialLinks.github.url}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-black/60 hover:bg-[#E10600]/20 text-neutral-400 hover:text-white transition-colors border border-white/10 hover:border-[#E10600]/50"
          >
            <GithubIcon className="w-4 h-4 text-[#FF1A00]" />
          </a>

          <a
            href={socialLinks.linkedin.url}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-black/60 hover:bg-[#FF6A00]/20 text-neutral-400 hover:text-white transition-colors border border-white/10 hover:border-[#FF6A00]/50"
          >
            <LinkedinIcon className="w-4 h-4 text-[#FF6A00]" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="p-2.5 rounded-xl bg-black/60 hover:bg-[#FFD400]/20 text-neutral-400 hover:text-[#FFD400] transition-colors border border-white/10 hover:border-[#FFD400]/50"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Back to Starting Line Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to starting line"
            className="ml-2 p-2.5 rounded-xl bg-gradient-to-r from-[#E10600] to-[#FF6A00] text-white hover:from-[#FF1A00] hover:to-[#FFD400] transition-all shadow-[0_0_15px_rgba(225,6,0,0.4)] cursor-pointer"
            title="Return to Starting Line"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
