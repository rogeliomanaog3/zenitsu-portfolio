import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Server,
  Database,
  Wrench,
} from 'lucide-react';

const specPods = [
  {
    title: 'FRONTEND',
    icon: Layers,
    color: '#00D2FF',
    borderColor: 'border-[#0088FF]/50 hover:border-[#00D2FF]',
    glowColor: 'shadow-[0_0_20px_rgba(0,136,255,0.25)]',
    badgeBg: 'bg-[#0088FF]/20 text-[#00D2FF] border-[#00D2FF]/40',
    slashColor: 'bg-[#00D2FF]',
    items: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'BACKEND',
    icon: Server,
    color: '#FF6A00',
    borderColor: 'border-[#FF6A00]/50 hover:border-[#FF6A00]',
    glowColor: 'shadow-[0_0_20px_rgba(255,106,0,0.25)]',
    badgeBg: 'bg-[#FF6A00]/20 text-[#FF6A00] border-[#FF6A00]/40',
    slashColor: 'bg-[#FF6A00]',
    items: ['Node.js', 'Express.js', 'PHP', 'Python', 'Java'],
  },
  {
    title: 'DATABASE',
    icon: Database,
    color: '#FFD400',
    borderColor: 'border-[#FFD400]/50 hover:border-[#FFD400]',
    glowColor: 'shadow-[0_0_20px_rgba(255,212,0,0.25)]',
    badgeBg: 'bg-[#FFD400]/20 text-[#FFD400] border-[#FFD400]/40',
    slashColor: 'bg-[#FFD400]',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'TOOLS',
    icon: Wrench,
    color: '#A855F7',
    borderColor: 'border-[#A855F7]/50 hover:border-[#C084FC]',
    glowColor: 'shadow-[0_0_20px_rgba(168,85,247,0.25)]',
    badgeBg: 'bg-[#A855F7]/20 text-[#C084FC] border-[#A855F7]/40',
    slashColor: 'bg-[#C084FC]',
    items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Figma'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative h-full flex flex-col justify-stretch">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full h-full rounded-2xl sm:rounded-3xl border border-[#0088FF]/30 shadow-[0_15px_45px_rgba(0,0,0,0.85)] bg-[#070B18]/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase mb-1">
              <span className="text-sm">🏁</span>
              <span>MY SKILLS</span>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black italic uppercase tracking-tight text-white speed-font">
                TECHNICAL <span className="text-[#00D2FF] drop-shadow-[0_0_12px_rgba(0,210,255,0.6)]">SPECIFICATIONS</span>
              </h2>

              {/* Skewed Checkered Flag Accent */}
              <div className="hidden sm:flex items-center -skew-x-12 opacity-85">
                <div className="grid grid-cols-4 grid-rows-2 gap-[2px] w-6 h-3">
                  <div className="bg-[#00D2FF]" />
                  <div className="bg-transparent border border-[#00D2FF]/40" />
                  <div className="bg-white" />
                  <div className="bg-transparent border border-white/40" />
                  <div className="bg-transparent border border-[#00D2FF]/40" />
                  <div className="bg-[#00D2FF]" />
                  <div className="bg-transparent border border-white/40" />
                  <div className="bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cyber Angled Specification Pods Grid (2x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 flex-1">
          {specPods.map((pod) => {
            const Icon = pod.icon;

            return (
              <div
                key={pod.title}
                className={`p-4 sm:p-5 rounded-2xl bg-[#040711]/90 border ${pod.borderColor} ${pod.glowColor} transition-all duration-300 flex flex-col justify-between relative cyber-chamfer group hover:-translate-y-1`}
              >
                <div>
                  {/* Pod Header */}
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/5">
                    <div className={`w-8 h-8 rounded-lg ${pod.badgeBg} border flex items-center justify-center`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm font-black tracking-wider uppercase text-white">
                      {pod.title}
                    </div>
                  </div>

                  {/* Skills List with Cyber Diamond Bullets */}
                  <ul className="space-y-2 text-xs font-mono">
                    {pod.items.map((tech) => (
                      <li key={tech} className="flex items-center gap-2 text-neutral-300 group-hover:text-white transition-colors">
                        <span style={{ color: pod.color }} className="text-[10px]">
                          ◆
                        </span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diagonal Accent Slashes on Bottom-Right */}
                <div className="mt-4 pt-3 flex justify-end gap-1 opacity-70">
                  <span className={`w-1 h-3 rounded-xs ${pod.slashColor} transform -skew-x-12`} />
                  <span className={`w-1 h-3 rounded-xs ${pod.slashColor} transform -skew-x-12`} />
                  <span className={`w-1 h-3 rounded-xs ${pod.slashColor} transform -skew-x-12`} />
                  <span className={`w-1 h-3 rounded-xs ${pod.slashColor} transform -skew-x-12`} />
                </div>
              </div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
