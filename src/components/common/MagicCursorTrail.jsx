import React, { useEffect, useRef } from 'react';

export const MagicCursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const sparkles = [];
    const colors = ['#00f2fe', '#9d4edd', '#f72585', '#ffd166', '#4cc9f0', '#06d6a0'];

    class MagicSparkle {
      constructor(x, y, isBurst = false) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = isBurst ? Math.random() * 4 + 2 : Math.random() * 1.5 + 0.5;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.size = isBurst ? Math.random() * 3.5 + 1.5 : Math.random() * 2.5 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = 1;
        this.decay = isBurst ? Math.random() * 0.02 + 0.015 : Math.random() * 0.03 + 0.02;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.03; // Subtle gravity
        this.alpha -= this.decay;
        this.rotation += this.rotationSpeed;
      }

      draw() {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = Math.max(this.alpha, 0);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;

        // Draw 4-point magic star sparkle
        ctx.beginPath();
        const r = this.size;
        for (let i = 0; i < 4; i++) {
          ctx.lineTo(Math.cos((i * Math.PI) / 2) * r * 2, Math.sin((i * Math.PI) / 2) * r * 2);
          ctx.lineTo(
            Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.5),
            Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.5)
          );
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e) => {
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (dist > 6) {
        lastX = e.clientX;
        lastY = e.clientY;
        sparkles.push(new MagicSparkle(e.clientX, e.clientY, false));
        if (Math.random() > 0.4) {
          sparkles.push(new MagicSparkle(e.clientX + (Math.random() - 0.5) * 10, e.clientY + (Math.random() - 0.5) * 10, false));
        }
      }
    };

    const handleClick = (e) => {
      for (let i = 0; i < 18; i++) {
        sparkles.push(new MagicSparkle(e.clientX, e.clientY, true));
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.update();
        s.draw();
        if (s.alpha <= 0) {
          sparkles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    />
  );
};
