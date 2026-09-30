import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, Zap, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { personal, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#07080D]/90 backdrop-blur-md pt-12 pb-16 px-4 sm:px-6 lg:px-8 z-10">
      {/* Katana subtle divider line highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.8)]" />

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-between gap-8 sm:flex-row">
        
        {/* Brand & Credit */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 mb-2 font-bold text-white">
            <span className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400">
              <Zap className="w-3.5 h-3.5 fill-amber-400" />
            </span>
            <span className="tracking-tight text-base font-extrabold">{personal.name}</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#161828] text-amber-400 border border-amber-400/30 uppercase tracking-widest">
              雷 • 壱ノ型
            </span>
          </div>

          <p className="text-xs text-neutral-400">
            Designed & Built by <span className="font-semibold text-neutral-200">{personal.name}</span>
          </p>

          <p className="text-[11px] text-neutral-500 mt-1 font-mono">
            © 2026 {personal.name}. All rights reserved.
          </p>
        </div>

        {/* Links & Quick Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={socialLinks.github.url}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full bg-[#141624] hover:bg-amber-400/20 text-neutral-400 hover:text-amber-400 transition-colors border border-white/10"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={socialLinks.linkedin.url}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full bg-[#141624] hover:bg-amber-400/20 text-neutral-400 hover:text-amber-400 transition-colors border border-white/10"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="p-2.5 rounded-full bg-[#141624] hover:bg-amber-400/20 text-neutral-400 hover:text-amber-400 transition-colors border border-white/10"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="ml-2 p-2.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 hover:from-amber-400 hover:to-yellow-400 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
