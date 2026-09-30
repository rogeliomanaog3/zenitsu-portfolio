import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function GarageBanner() {
  return (
    <section className="relative h-full flex flex-col justify-stretch">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full h-full rounded-2xl sm:rounded-3xl border border-[#0088FF]/30 shadow-[0_15px_45px_rgba(0,0,0,0.85)] relative overflow-hidden bg-[#070B18] min-h-[260px] sm:min-h-[290px] flex flex-col justify-between p-6 sm:p-7"
      >
        {/* Full Bleed Track Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hotwheels/garage_banner.jpg"
            alt="Garage Track Banner"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-[#040711]/60 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-sm">
          <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tight text-white leading-tight speed-font mb-2">
            MORE PROJECTS<br />
            <span className="text-[#FF5500]">IN MY GARAGE</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-sans font-medium uppercase tracking-wide">
            EXPLORE ALL OF MY WORKS AND SEE WHAT I'VE BUILT SO FAR.
          </p>
        </div>

        {/* Button at bottom */}
        <div className="relative z-10 pt-4">
          <a
            href={portfolioData.socialLinks.github.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/60 hover:bg-[#0088FF]/20 border border-[#00D2FF]/60 hover:border-[#00D2FF] text-xs font-mono font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(0,210,255,0.25)] transition-all cursor-pointer"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
