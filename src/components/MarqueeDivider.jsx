import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function MarqueeDivider() {
  const { personal } = portfolioData;

  const tickerItems = [
    personal.name,
    "雷の呼吸 • 壱ノ型 霹靂一閃",
    "FULL-STACK DEVELOPER",
    "CLEAN ARCHITECTURE",
    "LIGHTNING-FAST UX",
    "OPEN FOR COLLABORATION",
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-white/10 bg-[#0B0D16]/50 backdrop-blur-md select-none z-10">
      <div className="flex w-max animate-marquee">
        {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-neutral-400 uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="text-amber-400 text-xs">⚡</span>
          </div>
        ))}
      </div>
    </div>
  );
}
