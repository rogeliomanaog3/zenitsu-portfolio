import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ZenitsuBackground() {
  const { isLiveBgActive } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 
        Direct Animated GIF Element
        Using an <img> tag guarantees that the GIF continuously moves and loops in every browser
        without any video autoplay blocks, poster freezing, or codec restrictions.
      */}
      <div
        className={`w-full h-full transition-opacity duration-700 ${
          isLiveBgActive ? 'opacity-85' : 'opacity-25'
        }`}
      >
        <img
          src="/assets/zenitsu_drive_bg.gif"
          alt="Zenitsu Thunder Breathing Animated Background"
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.15] saturate-[1.25]"
        />
      </div>

      {/* 
        Balanced Dark Atmospheric Shield ("Bagay sa Text"):
        Ensures optimal contrast and effortless readability for all foreground text and cards
      */}
      <div className="absolute inset-0 bg-[#08090D]/45 pointer-events-none" />

      {/* Directional gradient directly behind the hero text */}
      <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 bg-gradient-to-r from-[#08090D]/85 via-[#08090D]/45 to-transparent pointer-events-none" />

      {/* Top subtle vignette for navbar contrast */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#08090D]/90 via-[#08090D]/40 to-transparent pointer-events-none" />

      {/* Smooth bottom fade transitioning into subsequent sections */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#08090D] via-[#08090D]/85 to-transparent pointer-events-none" />

      {/* Ambient Electric Golden Lighting Auras */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-[450px] h-[450px] bg-yellow-500/10 rounded-full blur-[130px] pointer-events-none" />
    </div>
  );
}
