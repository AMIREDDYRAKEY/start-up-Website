import React, { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/gsap";

/* Portal-wide ambient particle theme:
   Floating stardust motes and soft glowing particles drifting gently across the entire website.
   Runs on a lightweight canvas at fixed inset-0 z-30 with pointer-events-none,
   so it is visible across all pages and sections without blocking clicks or selections. */

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize, { passive: true });

    // Track mouse for subtle interactive waft
    const mouse = { x: -999, y: -999, active: false };
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onMouseLeave = () => {
      mouse.active = false;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    // Particle palette: warm paper white, warm gold, cobalt blue
    const colors = [
      { r: 239, g: 235, b: 228 }, // paper white (primary)
      { r: 212, g: 175, b: 55 },  // gold accent
      { r: 128, g: 145, b: 255 }, // cobalt blue
      { r: 79, g: 209, b: 165 },  // emerald
    ];

    const count = Math.min(Math.floor((width * height) / 13000), 120);
    const particles = [];

    for (let i = 0; i < count; i++) {
      const colorPick = Math.random();
      let color = colors[0];
      if (colorPick > 0.82) color = colors[1]; // gold
      else if (colorPick > 0.68) color = colors[2]; // cobalt
      else if (colorPick > 0.58) color = colors[3]; // emerald

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.9 + Math.random() * 1.7,
        baseAlpha: 0.2 + Math.random() * 0.5,
        alpha: 0.25,
        color,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -(0.18 + Math.random() * 0.38), // upward drift
        seed: Math.random() * 100,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    let isVisible = true;
    const onVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    let time = 0;
    const render = () => {
      animId = requestAnimationFrame(render);
      if (!isVisible) return;

      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < count; i++) {
        const p = particles[i];

        // Natural sine-wave waft
        p.x += p.vx + Math.sin(time + p.seed) * 0.2;
        p.y += p.vy;

        // Subtle mouse repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const force = (130 - dist) / 130;
            p.x += (dx / (dist || 1)) * force * 1.6;
            p.y += (dy / (dist || 1)) * force * 1.6;
          }
        }

        // Screen wrap
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        } else if (p.y > height + 10) {
          p.y = -10;
        }
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;

        // Soft twinkle
        p.alpha = p.baseAlpha * (0.65 + 0.35 * Math.sin(time * 2.2 + p.seed * 5));

        // Draw soft glowing particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.8})`;
        ctx.fill();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default BackgroundCanvas;
