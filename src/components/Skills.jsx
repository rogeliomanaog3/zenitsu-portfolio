import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, FigmaIcon } from './Icons';
import {
  Server,
  Database,
  Terminal,
  Cpu,
  Boxes,
  Flame,
  GitBranch,
  Laptop,
  Palette,
  FileCode2,
  Sparkles,
  Layers,
  Wrench,
  Gauge,
  Activity,
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

// Hot Wheels Subsystem Titles mapping
const categorySubsystemMap = {
  Frontend: {
    systemCode: "SYS-01 // COCKPIT & UI",
    label: "FRONTEND SPECIFICATIONS",
    icon: Layers,
    accent: "#E10600",
  },
  Backend: {
    systemCode: "SYS-02 // ENGINE & POWERTRAIN",
    label: "BACKEND SPECIFICATIONS",
    icon: Cpu,
    accent: "#FF1A00",
  },
  Database: {
    systemCode: "SYS-03 // FUEL CELL & STORAGE",
    label: "DATABASE SPECIFICATIONS",
    icon: Database,
    accent: "#FF6A00",
  },
  Tools: {
    systemCode: "SYS-04 // DIAGNOSTICS & PIT CREW",
    label: "TOOLS & TELEMETRY",
    icon: Wrench,
    accent: "#FFD400",
  },
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Background Volumetric Heat Glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E10600]/15 border border-[#E10600]/40 text-[#FF6A00] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_12px_rgba(225,6,0,0.3)]">
            <Gauge className="w-3.5 h-3.5 text-[#E10600]" />
            <span>SECTION 02 // TECHNICAL MACHINE SPECS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase flex items-center justify-center sm:justify-start gap-3">
            <span>CAR SPECIFICATIONS</span>
            <span className="text-[#FF6A00] font-mono text-2xl sm:text-3xl">TUNED</span>
          </h2>

          <p className="text-neutral-400 mt-2 text-sm sm:text-base max-w-xl font-mono">
            High-performance full-stack specifications calibrated for speed, architectural stability, and responsiveness.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E10600] via-[#FF6A00] to-[#FFD400] rounded-full mt-4 sm:mx-0 mx-auto shadow-[0_0_8px_#FF6A00]" />
        </div>

        {/* 4 Machine Specification Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {skills.map((group, index) => {
            const meta = categorySubsystemMap[group.category] || {
              systemCode: `SYS-0${index + 1}`,
              label: group.category.toUpperCase(),
              icon: Activity,
              accent: "#E10600",
            };
            const HeaderIcon = meta.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl carbon-panel border border-[#E10600]/30 hover:border-[#FF6A00]/60 p-6 sm:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.7)] flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
              >
                {/* Top Telemetry Header */}
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#E10600]/15 flex items-center justify-center text-[#FF1A00] border border-[#E10600]/30">
                        <HeaderIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                          {meta.systemCode}
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight">
                          {meta.label}
                        </h3>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-[#FFD400] font-bold">
                      ACTIVE
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 mb-6 font-mono">
                    {group.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {group.items.map((skill) => {
                      const IconComponent = iconMap[skill.icon] || FileCode2;
                      const isAdvanced = skill.level === 'Advanced';

                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-3 rounded-2xl bg-black/60 border border-white/5 hover:border-[#FF6A00]/50 transition-all duration-200 group/skill"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-neutral-300 group-hover/skill:text-[#FFD400] group-hover/skill:bg-[#FF6A00]/15 transition-all">
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover/skill:text-[#FF6A00] transition-colors">
                                {skill.name}
                              </div>
                              <div className="text-[9px] font-mono text-neutral-400 uppercase">
                                {skill.level}
                              </div>
                            </div>
                          </div>

                          {/* Digital LED Stage Meter */}
                          <div className="flex items-center gap-1" title={`${skill.name}: ${skill.level}`}>
                            <span className="w-1.5 h-3 rounded-xs bg-[#E10600]" />
                            <span className="w-1.5 h-3 rounded-xs bg-[#FF1A00]" />
                            <span className="w-1.5 h-3 rounded-xs bg-[#FF6A00]" />
                            <span className={`w-1.5 h-3 rounded-xs ${isAdvanced ? 'bg-[#FFD400]' : 'bg-neutral-800'}`} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Subsystem Telemetry Status Bar */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>DIAGNOSTIC STATUS</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    CALIBRATED & VERIFIED
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
