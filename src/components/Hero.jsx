import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Mail, MapPin, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const ROLES = [
  "BSIT Student @ NCST Cavite",
  "Full-Stack Web Developer",
  "React & PHP Builder"
];

export default function Hero() {
  const { personal, socialLinks } = portfolioData;

  // Typewriter effect cycling through natural roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#1E2536]/60"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Authentic Developer Introduction (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111622] border border-[#1E2536] text-neutral-300 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Available for internships & junior roles</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
            Hi, I'm <span className="text-white">Rogelio Manaog</span>.
          </h1>

          {/* Dynamic Role Line */}
          <div className="flex items-center gap-2 text-lg sm:text-xl font-mono text-amber-400 font-medium mb-5 min-h-[1.75rem]">
            <span>&gt; {displayedText}</span>
            <span className="w-2 h-5 bg-amber-400 animate-pulse inline-block" />
          </div>

          {/* Bio text */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed mb-8">
            Information Technology student at the National College of Science and Technology in Dasmariñas, Cavite. I build clean, practical web applications with React, Node.js, PHP, and relational databases.
          </p>

          {/* Dual Action Buttons & Socials */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
            {/* View Projects Button */}
            <button
              onClick={() => scrollTo('#projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-sm transition-colors cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            {/* Contact Button */}
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111622] hover:bg-[#161C2A] border border-[#1E2536] hover:border-[#2D374D] text-neutral-200 text-sm font-medium transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Contact Me</span>
            </button>

            {/* Quick Links */}
            <div className="flex items-center gap-2 sm:ml-2">
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-[#111622] hover:bg-[#161C2A] border border-[#1E2536] hover:border-[#2D374D] text-neutral-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-[#111622] hover:bg-[#161C2A] border border-[#1E2536] hover:border-[#2D374D] text-neutral-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Simple, Real Developer Stats Row */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1E2536] w-full max-w-lg text-left">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                3
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Completed Projects
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                BSIT
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                NCST Cavite
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                2026
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Expected Grad
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Clean, Professional Developer Identity Card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm rounded-xl bg-[#111622] border border-[#1E2536] p-5 shadow-sm">
            
            {/* Top Bar of the Card */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1E2536] text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>ACTIVE DEV</span>
              </span>
              <span>NCST • CAVITE</span>
            </div>

            {/* Profile Photo */}
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900 border border-[#1E2536] mb-4">
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Identity Details */}
            <div className="space-y-2">
              <div>
                <div className="text-base font-bold text-white">
                  {personal.name}
                </div>
                <div className="text-xs text-amber-400/90 font-mono mt-0.5">
                  BS in Information Technology
                </div>
              </div>

              <div className="pt-3 border-t border-[#1E2536] space-y-1.5 text-xs text-neutral-300 font-mono">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">National College of Science and Tech</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>Dasmariñas, Cavite, Philippines</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
