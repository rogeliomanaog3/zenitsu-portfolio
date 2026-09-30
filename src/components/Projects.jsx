import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectDetailView from './ProjectDetailView';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header (Matching Reference Image 1) */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Handwritten 'stuff i've built ⤹' Badge */}
            <div className="hidden sm:block select-none pointer-events-none -mt-2">
              <img
                src="/assets/projects/stuff-ive-built.png"
                alt="stuff i've built ⤹"
                className="h-9 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Projects
            </h2>
          </div>

          <div className="text-xs sm:text-sm font-mono tracking-widest text-neutral-400 font-semibold uppercase">
            {projects.length} ITEMS
          </div>
        </div>

        {/* 2-Column Grid (Matching Reference Image 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 bg-[#0B0C14]/90 backdrop-blur-xl border border-white/10 hover:border-amber-400/60 shadow-lg hover:shadow-[0_0_35px_rgba(245,158,11,0.22)] transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Image Viewport */}
              <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-4 relative">
                <img
                  src={project.thumbnail}
                  alt={project.cardTitle}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Title & Date */}
              <div className="px-1 flex flex-col justify-between flex-1">
                <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-amber-400 transition-colors leading-snug">
                  {project.cardTitle}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-1.5">
                  {project.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button (Matching Reference Image 1) */}
        <div className="mt-12 text-center">
          <a
            href={portfolioData.socialLinks.github.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#121422] hover:bg-[#1A1D30] border border-white/15 hover:border-amber-400/60 text-xs font-semibold text-neutral-200 hover:text-white transition-all shadow-md group cursor-pointer"
          >
            <span>All projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </div>

      {/* Interactive Project Detail View / Page Modal (Matching Reference Image 2) */}
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
