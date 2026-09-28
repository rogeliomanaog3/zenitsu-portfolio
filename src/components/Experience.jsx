import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, Zap } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl w-full mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <Zap className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>MY JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mt-3 sm:mx-0 mx-auto" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-amber-400/30 space-y-12">
          
          {/* Subtle Continuous Lightning Track Glow along the line */}
          <div className="absolute -left-[3px] top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-500 opacity-70 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.6)]" />

          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Interactive Lightning Node / Scrubber Bead on Central Axis */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#0D0F17] border-2 border-amber-400 flex items-center justify-center shadow-md group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.9)] transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:bg-amber-300" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#111320]/85 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-amber-500/15 hover:border-amber-400/50 transition-all duration-300">
                
                {/* Date Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>{item.date}</span>
                </div>

                {/* Role Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {item.role}
                </h3>

                {/* Company / Organization Subtitle */}
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-400 uppercase mb-4">
                  <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.company}</span>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#161828] text-neutral-300 border border-white/10 group-hover:border-amber-400/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
