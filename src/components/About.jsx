import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, Code2, Briefcase, UserCheck } from 'lucide-react';

export default function About() {
  const { personal, aboutCards } = portfolioData;

  const keyFacts = [
    {
      icon: <GraduationCap className="w-4 h-4 text-amber-400" />,
      label: "Education",
      primary: "BS in Information Technology",
      secondary: "National College of Science and Technology",
    },
    {
      icon: <MapPin className="w-4 h-4 text-amber-400" />,
      label: "Location",
      primary: "Dasmariñas, Cavite",
      secondary: "Philippines (4114)",
    },
    {
      icon: <Code2 className="w-4 h-4 text-amber-400" />,
      label: "Core Focus",
      primary: "Web & Software Development",
      secondary: "React, PHP, Node.js & MySQL",
    },
    {
      icon: <Briefcase className="w-4 h-4 text-amber-400" />,
      label: "Goal",
      primary: "Full-Stack Developer",
      secondary: "Seeking internship & junior roles",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1E2536]/60">
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase mb-2">
            01 / Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        {/* Two-Column Grid: Narrative on Left, Fact Tiles on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am an Information Technology student at the <strong className="text-white font-medium">National College of Science and Technology (NCST)</strong> in Cavite, Philippines. My primary interest is in full-stack web development, software engineering fundamentals, and building reliable digital systems.
            </p>
            <p>
              Throughout my academic projects, I have developed functional web applications such as the <span className="text-neutral-100 font-medium">Go-On National College Online Enrollment Portal</span> and the <span className="text-neutral-100 font-medium">NCST Campus Lost & Found Web Portal</span>. I enjoy working directly with relational database schemas, form validation pipelines, and clean front-end component systems.
            </p>
            <p>
              My goal is to continue refining my engineering skills, learn from experienced developer teams, and contribute to production software that delivers genuine utility to users and institutions.
            </p>

            {/* Simple philosophy quote box */}
            <div className="p-4 rounded-lg bg-[#111622] border-l-2 border-amber-400 text-xs sm:text-sm text-neutral-300 font-mono mt-6">
              "Focus on learning every day, improving programming fundamentals, and building practical software that solves real problems."
            </div>
          </div>

          {/* Right Column: 4 Fact Tiles (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {keyFacts.map((fact) => (
              <div
                key={fact.label}
                className="p-4 rounded-xl bg-[#111622] border border-[#1E2536] hover:border-[#2D374D] transition-colors flex items-start gap-3.5"
              >
                <div className="p-2 rounded-lg bg-[#161C2A] border border-[#1E2536] shrink-0 mt-0.5">
                  {fact.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    {fact.label}
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5 truncate">
                    {fact.primary}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    {fact.secondary}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
