import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Code2 } from 'lucide-react';
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
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1E2536]/60">
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase mb-2">
              03 / Selected Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Academic capstones and web applications built with focus on database structure, user workflow, and performance.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400">
            {projects.length} PROJECTS DISPLAYED
          </div>
        </div>

        {/* 3-Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-xl bg-[#111622] border border-[#1E2536] hover:border-[#2D374D] transition-all flex flex-col justify-between overflow-hidden group shadow-sm"
            >
              <div>
                {/* Project Image Viewport */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="w-full aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-[#1E2536] cursor-pointer relative"
                >
                  <img
                    src={project.heroImage || project.thumbnail}
                    alt={project.cardTitle}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                    <span className="text-amber-400 font-semibold">#{String(index + 1).padStart(2, '0')}</span>
                    <span>{project.category}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-base font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer leading-snug mb-2"
                  >
                    {project.cardTitle}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                    {project.lead || project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#0B0E14] border border-[#1E2536] text-[11px] font-mono text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-[#161C2A] hover:bg-[#1E2536] border border-[#1E2536] hover:border-[#2D374D] text-xs font-semibold text-neutral-200 hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Details & Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrlFull || (project.liveUrl.startsWith('http') ? project.liveUrl : `https://${project.liveUrl}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-[#161C2A] hover:bg-[#1E2536] hover:text-amber-400 border border-[#1E2536] hover:border-[#2D374D] text-neutral-300 transition-colors"
                    title="Open live website"
                    aria-label={`Open live website for ${project.title}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom GitHub Link */}
        <div className="mt-12 text-center">
          <a
            href={portfolioData.socialLinks.github.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111622] hover:bg-[#161C2A] border border-[#1E2536] hover:border-[#2D374D] text-xs font-medium text-neutral-300 hover:text-white transition-colors"
          >
            <Code2 className="w-4 h-4 text-amber-400" />
            <span>View repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-neutral-400" />
          </a>
        </div>

      </div>

      {/* Interactive Modal */}
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
