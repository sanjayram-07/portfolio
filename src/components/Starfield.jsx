import { useEffect, useRef } from 'react';

// A lightweight canvas starfield modeled on aakarsh-devhq's Three.js particle
// background: scattered white points that twinkle gently and drift with the
// cursor, sitting behind a couple of soft purple glow blobs (handled by the
// .aurora layer in CSS). Plain 2D canvas — no WebGL dependency needed for
// a decorative background.
export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars = [];
    let mouseX = 0;
    let mouseY = 0;
    let rafId = null;

    function buildStars() {
      const area = width * height;
      const count = Math.min(260, Math.max(90, Math.round(area / 9000)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.3 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.35,
        twinkleSpeed: Math.random() * 0.015 + 0.004,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height);
      const driftX = (mouseX - width / 2) * 0.012;
      const driftY = (mouseY - height / 2) * 0.012;

      for (const s of stars) {
        const twinkle = reduced ? 0 : Math.sin(time * s.twinkleSpeed + s.phase) * 0.35;
        const alpha = Math.max(0.08, Math.min(1, s.baseAlpha + twinkle));
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.arc(s.x + driftX, s.y + driftY, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) {
        rafId = requestAnimationFrame(draw);
      }
    }

    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    resize();
    window.addEventListener('resize', resize);
    if (!reduced) {
      window.addEventListener('mousemove', onMouseMove);
      rafId = requestAnimationFrame(draw);
    } else {
      // Static single frame for reduced-motion users — stars still show, nothing moves.
      draw(0);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas className="starfield" ref={canvasRef} aria-hidden="true" />;
}
