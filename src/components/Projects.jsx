import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectDetailView from './ProjectDetailView';

// 6 Projects mapped to match the 2x3 mockup layout with real assets
const featuredCards = [
  {
    num: '01',
    numColor: 'bg-[#0088FF] text-white',
    title: 'Go-On Online Enrollment Portal',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    image: '/assets/projects/go-on-campus-large.png',
    projectId: 'go-on-enrollment',
    borderColor: 'border-[#0088FF]/40 hover:border-[#00D2FF]',
    glowColor: 'hover:shadow-[0_0_25px_rgba(0,210,255,0.3)]',
  },
  {
    num: '02',
    numColor: 'bg-[#FF6A00] text-white',
    title: 'SNEAKRS Footwear Concept',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    image: '/assets/projects/sneakrs-large.png',
    projectId: 'sneakrs-concept',
    borderColor: 'border-[#FF6A00]/40 hover:border-[#FF6A00]',
    glowColor: 'hover:shadow-[0_0_25px_rgba(255,106,0,0.3)]',
  },
  {
    num: '03',
    numColor: 'bg-[#FFD400] text-black font-black',
    title: 'NCST Campus Lost & Found',
    tags: ['PHP', 'Bootstrap', 'MySQL'],
    image: '/assets/projects/ncst-lostfound-large.png',
    projectId: 'ncst-lost-found',
    borderColor: 'border-[#FFD400]/40 hover:border-[#FFD400]',
    glowColor: 'hover:shadow-[0_0_25px_rgba(255,212,0,0.3)]',
  },
  {
    num: '04',
    numColor: 'bg-[#0088FF] text-white',
    title: 'Modern Developer Portfolio',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    image: '/assets/projects/go-on-campus-thumb.png',
    projectId: 'go-on-enrollment',
    borderColor: 'border-[#0088FF]/40 hover:border-[#00D2FF]',
    glowColor: 'hover:shadow-[0_0_25px_rgba(0,210,255,0.3)]',
  },
  {
    num: '05',
    numColor: 'bg-[#FF6A00] text-white',
    title: 'Interactive Digital Storefront',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    image: '/assets/projects/sneakrs-thumb.png',
    projectId: 'sneakrs-concept',
    borderColor: 'border-[#FF6A00]/40 hover:border-[#FF6A00]',
    glowColor: 'hover:shadow-[0_0_25px_rgba(255,106,0,0.3)]',
  },
  {
    num: '06',
    numColor: 'bg-[#00D2FF] text-black font-black',
    title: 'Campus Management Dashboard',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/assets/projects/ncst-lostfound-thumb.png',
    projectId: 'ncst-lost-found',
    borderColor: 'border-[#00D2FF]/40 hover:border-[#00D2FF]',
    glowColor: 'hover:shadow-[0_0_25px_rgba(0,210,255,0.3)]',
  },
];

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (projectId) => {
    const found = projects.find((p) => p.id === projectId) || projects[0];
    setSelectedProject(found);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  return (
    <section id="projects" className="relative h-full flex flex-col justify-stretch">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full h-full rounded-2xl sm:rounded-3xl border border-[#0088FF]/30 shadow-[0_15px_45px_rgba(0,0,0,0.85)] bg-[#070B18]/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden"
      >
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase mb-1">
              <div className="flex gap-0.5 opacity-80">
                <span className="w-1.5 h-3 bg-[#00D2FF]" />
                <span className="w-1.5 h-3 bg-transparent border border-[#00D2FF]" />
              </div>
              <span>MY GARAGE</span>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="text-xl sm:text-3xl font-black italic uppercase tracking-tight text-white">
                FEATURED <span className="text-[#00D2FF]">PROJECTS</span>
              </h2>

              <div className="hidden sm:flex gap-0.5 opacity-80">
                <span className="w-2 h-4 bg-white" />
                <span className="w-2 h-4 bg-black" />
                <span className="w-2 h-4 bg-white" />
                <span className="w-2 h-4 bg-black" />
                <span className="w-2 h-4 bg-white" />
              </div>
            </div>
          </div>

          <a
            href={portfolioData.socialLinks.github.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-400 hover:text-[#00D2FF] transition-colors"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Card 2x3 Grid Matching Mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {featuredCards.map((card, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenProject(card.projectId)}
              className={`p-3.5 rounded-2xl bg-[#040711]/90 border ${card.borderColor} ${card.glowColor} transition-all duration-300 flex flex-col justify-between cursor-pointer group cyber-chamfer-sm hover:-translate-y-1`}
            >
              <div>
                {/* Thumbnail Image */}
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/60 border border-white/5 mb-3 relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Number + Title */}
                <div className="flex items-start gap-2 mb-2">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${card.numColor}`}>
                    {card.num}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00D2FF] transition-colors line-clamp-1 leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-1 mb-3">
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Link */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono font-bold text-[#00D2FF] group-hover:underline">
                <span>VIEW PROJECT →</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

      </motion.div>

      {/* Interactive Project Detail View / Page Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailView
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
