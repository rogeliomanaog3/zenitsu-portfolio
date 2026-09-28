import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function LightningCanvas() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle golden ember spark particles
    const particleCount = window.innerWidth < 768 ? 16 : 28;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.5 - 0.2, // Drifting softly upward
        opacity: Math.random() * 0.4 + 0.1,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        color: Math.random() > 0.3 ? '#F59E0B' : '#FBBF24',
      });
    }

    // Optional subtle spark on mouse move
    const handleMouseMove = (e) => {
      if (Math.random() > 0.85 && particles.length < 50) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          radius: Math.random() * 1.8 + 0.6,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          opacity: 0.7,
          fadeSpeed: 0.02,
          color: '#F59E0B',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= p.fadeSpeed;

        if (p.opacity <= 0 || p.y < 0 || p.x < 0 || p.x > width) {
          p.x = Math.random() * width;
          p.y = height + 10;
          p.opacity = Math.random() * 0.35 + 0.1;
          p.speedY = -Math.random() * 0.5 - 0.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * (theme === 'dark' ? 0.6 : 0.45);
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#F59E0B';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
