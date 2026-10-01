import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from './Icons';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { personal, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1E2536] bg-[#0B0E14] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Information */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold text-white tracking-tight">
              rogelio<span className="text-amber-400">.dev</span>
            </span>
            <span className="text-neutral-600 text-xs">•</span>
            <span className="text-xs text-neutral-400">
              BSIT Student @ NCST
            </span>
          </div>

          <p className="text-xs text-neutral-400">
            Designed & coded by <span className="text-neutral-200 font-medium">{personal.name}</span>. Built with React & Tailwind CSS.
          </p>

          <p className="text-[11px] font-mono text-neutral-500 pt-0.5">
            © {new Date().getFullYear()} Rogelio Manaog. All rights reserved.
          </p>
        </div>

        {/* Right: Profiles & Back to Top */}
        <div className="flex items-center gap-2.5">
          <a
            href={socialLinks.github.url}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-[#111622] hover:bg-[#1E2536] text-neutral-400 hover:text-white transition-colors border border-[#1E2536]"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={socialLinks.linkedin.url}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-[#111622] hover:bg-[#1E2536] text-neutral-400 hover:text-white transition-colors border border-[#1E2536]"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            aria-label="Send direct email"
            className="p-2 rounded-lg bg-[#111622] hover:bg-[#1E2536] text-neutral-400 hover:text-white transition-colors border border-[#1E2536]"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Clean Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#111622] hover:bg-[#1E2536] text-neutral-300 hover:text-white transition-colors border border-[#1E2536] text-xs font-mono ml-2 cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
