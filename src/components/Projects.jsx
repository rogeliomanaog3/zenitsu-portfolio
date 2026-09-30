import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, ArrowRight, ExternalLink, Gauge, Zap } from 'lucide-react';
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
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Background Volumetric Heat Glow */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#E10600]/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header: Hot Wheels Project Garage */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-5 border-b border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E10600]/15 border border-[#E10600]/40 text-[#FF6A00] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_12px_rgba(225,6,0,0.3)]">
              <Flame className="w-3.5 h-3.5 fill-[#E10600] text-[#E10600]" />
              <span>SECTION 03 // VEHICLE SHOWCASE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase flex items-center gap-3">
              <span>PROJECT GARAGE</span>
              <span className="text-[#E10600] font-mono text-2xl sm:text-3xl">🏎️</span>
            </h2>

            <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-xl font-mono">
              Featured custom web platforms engineered for maximum velocity, responsive handling, and high-load performance.
            </p>
          </div>

          {/* Garage Inventory Ticker */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 border border-[#E10600]/40 text-xs font-mono font-bold text-[#FFD400] self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
            <span>{projects.length} VEHICLES READY FOR TRACK</span>
          </div>
        </div>

        {/* Garage Car Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => {
            const vehicleNum = `CAR #0${index + 1}`;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-3xl carbon-panel border border-white/10 hover:border-[#E10600] p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_45px_rgba(225,6,0,0.35)] transition-all duration-300 flex flex-col justify-between speed-sweep relative overflow-hidden transform hover:-translate-y-2"
              >
                <div>
                  {/* Top Vehicle Decal Strip */}
                  <div className="flex items-center justify-between pb-3 px-1 mb-3 border-b border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-[#FF1A00] tracking-wider">
                        {vehicleNum}
                      </span>
                      <span className="text-neutral-500">•</span>
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] text-[#FFD400] font-bold">
                      {project.status}
                    </span>
                  </div>

                  {/* Thumbnail Image Viewport with Red-Orange Trim */}
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/80 border border-white/10 group-hover:border-[#FF6A00]/70 mb-4 relative shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
                    <img
                      src={project.thumbnail}
                      alt={project.cardTitle}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Ambient Speed Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

                    {/* Acceleration Badge Overlay */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-[#E10600]/60 text-[10px] font-mono font-bold text-white opacity-90 group-hover:opacity-100 transition-opacity">
                      <Zap className="w-3 h-3 fill-[#FF1A00] text-[#FF1A00]" />
                      <span>INSPECT TELEMETRY</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="px-1 mb-4">
                    <h3 className="font-black text-white text-lg sm:text-xl group-hover:text-[#FF6A00] transition-colors leading-tight mb-2">
                      {project.cardTitle}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-2">
                      {project.lead}
                    </p>
                  </div>
                </div>

                {/* Bottom Spec Tags & Launch Button */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 px-1">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono text-neutral-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Interactive Button */}
                  <div className="inline-flex items-center gap-1 text-xs font-mono font-black text-[#FF6A00] group-hover:text-white group-hover:translate-x-1 transition-all">
                    <span>LAUNCH VIEW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Garage Banner with GitHub Link */}
        <div className="mt-14 p-6 rounded-3xl carbon-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-[#E10600]/15 border border-[#E10600]/30 flex items-center justify-center text-[#FF1A00]">
              <Gauge className="w-5 h-5" />
            </span>
            <div>
              <div className="text-sm font-black text-white uppercase tracking-tight">
                LOOKING FOR MORE REPOSITORIES & SOURCE CODE?
              </div>
              <div className="text-xs text-neutral-400 font-mono">
                Explore active commits and architecture blueprints on GitHub.
              </div>
            </div>
          </div>

          <a
            href={portfolioData.socialLinks.github.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E10600] to-[#FF6A00] hover:from-[#FF1A00] hover:to-[#FFD400] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(225,6,0,0.4)] transition-all cursor-pointer speed-sweep shrink-0"
          >
            <span>GITHUB GARAGE ARCHIVE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

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
