import React, { useEffect, useRef } from 'react';

export default function HotWheelsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Speed particles & sparks
    const particleCount = 35;
    const particles = [];
    const colors = ['#E10600', '#FF1A00', '#FF6A00', '#FFD400', '#FFFFFF'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 40 + 20,
        speed: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.1,
        width: Math.random() * 1.5 + 0.5,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle speed streaks
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.length);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.7, p.color);
        grad.addColorStop(1, p.color);
        
        ctx.strokeStyle = grad;
        ctx.globalAlpha = p.opacity;
        ctx.lineWidth = p.width;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + p.length);
        ctx.stroke();

        // Move downward for forward speed feeling
        p.y += p.speed;
        if (p.y > height) {
          p.y = -p.length;
          p.x = Math.random() * width;
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#050505]">
      {/* Volumetric Hot Wheels Track Glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#E10600]/14 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-[#FF6A00]/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[700px] h-[500px] bg-[#E10600]/10 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/3 w-[500px] h-[500px] bg-[#FFD400]/06 rounded-full blur-[160px] pointer-events-none" />

      {/* Perspective Racing Track Lines Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="track-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(255, 106, 0, 0.12)"
              strokeWidth="0.8"
            />
          </pattern>
          <linearGradient id="track-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#050505" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#050505" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#track-grid)" />
        <rect width="100%" height="100%" fill="url(#track-fade)" />
      </svg>

      {/* Stylized Tire Skid Marks Silhouette Watermark */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Ambient Speed Streaks Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
