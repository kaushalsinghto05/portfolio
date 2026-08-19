import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 768
    ) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverElements = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .interactive-element'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    handleHoverElements();

    const observer = new MutationObserver(handleHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className="fixed rounded-full border border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.4)] pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 18),
          y: mousePosition.y - (isHovered ? 28 : 18),
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          borderColor: isHovered ? '#f72585' : '#00f2fe',
          scale: isClicked ? 0.85 : 1,
          backgroundColor: isHovered ? 'rgba(247, 37, 133, 0.12)' : 'rgba(0, 242, 254, 0.05)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 280,
          mass: 0.5,
        }}
      />

      {/* Inner Glowing Center Dot */}
      <motion.div
        className="fixed rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_#00f2fe] pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 4 : 3),
          y: mousePosition.y - (isHovered ? 4 : 3),
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
          scale: isClicked ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.1,
        }}
      />
    </div>
  );
};
