import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import {
  ExternalLink,
  Code2,
  Zap,
  ArrowUpRight,
  FolderGit2,
} from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Background Accent */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">
              <Zap className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              My Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mt-3 sm:mx-0 mx-auto" />
          </div>

          <p className="text-sm text-neutral-400 max-w-md">
            A curated selection of applications built with clean modular architecture, responsive designs, and robust performance.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isHovered = hoveredCard === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onHoverStart={() => setHoveredCard(project.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative rounded-3xl bg-[#10121D]/85 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-[0_0_35px_rgba(245,158,11,0.25)] hover:border-amber-400/80 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image / Viewport Preview Container */}
                <div className="relative aspect-[16/10] w-full bg-black overflow-hidden border-b border-white/10">
                  {/* Subtle Urokomon / Tech Pattern Watermark */}
                  <div className="absolute inset-0 bg-radial from-amber-500/20 via-[#0B0D16] to-black opacity-90" />

                  {/* Browser Mockup Pill Header */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-amber-400 tracking-wider">
                      {project.number}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                      <span className="w-2 h-2 rounded-full bg-neutral-600" />
                    </div>
                  </div>

                  {/* Image Placeholder Visual */}
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center group-hover:scale-105 transition-transform duration-500">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 mb-2 shadow-[0_0_20px_rgba(245,158,11,0.35)] group-hover:rotate-6 transition-transform">
                      <Zap className="w-6 h-6 fill-amber-400" />
                    </div>
                    <div className="text-xs font-bold text-white tracking-wide">
                      {project.image}
                    </div>
                    <div className="text-[10px] text-neutral-400 mt-1">
                      Interactive UI Preview
                    </div>
                  </div>

                  {/* Katana diagonal lightning slash on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-tr from-amber-500/20 via-transparent to-amber-400/20" />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Project Name */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {project.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#161828] text-neutral-300 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons (View Project & View Code) */}
                    <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/10">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-neutral-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-950" />
                      </a>

                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-[#161828] hover:bg-[#1E2135] text-neutral-200 text-xs font-semibold transition-colors border border-white/10"
                      >
                        <Code2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* View More Projects External Button */}
        <div className="mt-14 text-center">
          <a
            href={portfolioData.socialLinks.github.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#10121D]/90 backdrop-blur-md border border-white/10 hover:border-amber-400 text-white font-semibold text-xs tracking-wider uppercase shadow-md hover:shadow-lg hover:shadow-amber-500/20 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <FolderGit2 className="w-4 h-4 text-amber-400" />
            <span>View More Projects on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
