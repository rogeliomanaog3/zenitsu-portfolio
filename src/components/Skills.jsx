import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, FigmaIcon } from './Icons';
import {
  Code,
  Server,
  Database,
  Zap,
  Sparkles,
  Layers,
  Terminal,
  Cpu,
  Boxes,
  Flame,
  GitBranch,
  Laptop,
  Palette,
  FileCode2,
} from 'lucide-react';

const iconMap = {
  FileCode2: FileCode2,
  Palette: Palette,
  Sparkles: Sparkles,
  Layers: Layers,
  Server: Server,
  Cpu: Cpu,
  Terminal: Terminal,
  Boxes: Boxes,
  Database: Database,
  Flame: Flame,
  GitBranch: GitBranch,
  Github: GithubIcon,
  Laptop: Laptop,
  Figma: FigmaIcon,
};

export default function Skills() {
  const { skills } = portfolioData;
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Background Accent */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3">
            <Zap className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>WHAT I USE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-xl">
            My core technical arsenal honed for reliability, speed, and clean code craftsmanship.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mt-4 sm:mx-0 mx-auto" />
        </div>

        {/* Categorized Rows (Reference Video Layout Inspiration) */}
        <div className="space-y-10">
          {skills.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8 rounded-3xl bg-[#111320]/80 backdrop-blur-xl border border-white/10 shadow-lg hover:border-amber-400/40 transition-all duration-300"
            >
              {/* Category Info (4 cols) */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.9)]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {group.category}
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skill Cards Grid (8 cols) */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {group.items.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code;

                  return (
                    <motion.div
                      key={skill.name}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="p-4 sm:p-5 rounded-2xl bg-[#0B0D16] border border-white/10 flex flex-col items-center justify-center text-center relative group overflow-hidden cursor-default shadow-xs hover:shadow-xl hover:shadow-amber-500/20 hover:border-amber-400/80 transition-all duration-300"
                    >
                      {/* Katana subtle sheen on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-amber-400/20 via-transparent to-transparent transition-opacity duration-300 pointer-events-none" />

                      {/* Icon */}
                      <div className="w-11 h-11 rounded-xl bg-[#161826] group-hover:bg-amber-400/20 flex items-center justify-center text-neutral-300 group-hover:text-amber-400 transition-colors mb-3">
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </div>

                      {/* Skill Name */}
                      <span className="text-sm font-bold text-white">
                        {skill.name}
                      </span>

                      {/* Level Indicator Pill */}
                      <span className="text-[10px] uppercase font-mono font-medium text-neutral-500 group-hover:text-amber-400 mt-1">
                        {skill.level}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
