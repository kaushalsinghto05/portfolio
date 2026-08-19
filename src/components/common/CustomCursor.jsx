import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable completely on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId;

    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instantly position the center dot with zero latency (0ms delay)
      if (dot) {
        dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // High-performance 60-120fps ring lerp loop
    const renderLoop = () => {
      // Snappy lerp coefficient (0.35 gives tight, instantaneous follow without lagging behind)
      ringX += (mouseX - ringX) * 0.35;
      ringY += (mouseY - ringY) * 0.35;

      if (ring) {
        ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    const handleHoverElements = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .interactive-element'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    handleHoverElements();

    const observer = new MutationObserver(handleHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Snappy Glowing Ring (Hardware Accelerated via translate3d) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none transition-all duration-150 ease-out will-change-transform ${
          isHovered
            ? 'w-12 h-12 -ml-3 -mt-3 border-pink-400 bg-pink-500/10 shadow-[0_0_20px_rgba(247,37,133,0.5)]'
            : isClicked
            ? 'w-8 h-8 -ml-1 -mt-1 border-cyan-300 bg-cyan-400/20 shadow-[0_0_15px_rgba(6,182,212,0.6)]'
            : 'w-9 h-9 border-cyan-400/70 bg-cyan-400/5 shadow-[0_0_12px_rgba(6,182,212,0.35)]'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />

      {/* Inner Glowing Center Dot (0ms Zero-Latency Instant Pin) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none will-change-transform transition-[width,height,background-color] duration-100 ${
          isHovered
            ? 'w-3 h-3 -ml-0.5 -mt-0.5 bg-pink-400 shadow-[0_0_10px_#f72585]'
            : isClicked
            ? 'w-4 h-4 -ml-1 -mt-1 bg-cyan-300 shadow-[0_0_12px_#00f2fe]'
            : 'w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#00f2fe]'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />
    </div>
  );
};
