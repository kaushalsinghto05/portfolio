import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/common/CustomCursor';
import { MagicCursorTrail } from './components/common/MagicCursorTrail';
import { MagicFloatingRunes } from './components/common/MagicFloatingRunes';
import { ParticleBackground } from './components/common/ParticleBackground';
import { Preloader } from './components/common/Preloader';
import { Toast } from './components/common/Toast';

import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Certifications } from './components/sections/Certifications';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

export function App() {
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  // Initialize Lenis Smooth Inertia Scrolling
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNotify = (toastData) => {
    setToast(toastData);
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  return (
    <div className="relative min-h-screen bg-[#07080e] text-slate-100 dark:bg-[#07080e] dark:text-slate-100 selection:bg-cyan-400 selection:text-black">
      {/* Initial Animated Preloader */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* Interactive Glowing Gen-Z Cursor */}
      <CustomCursor />

      {/* Magical Star Sparkle Particle Trail */}
      <MagicCursorTrail />

      {/* Floating Arcane & Cyber Runes in Background */}
      <MagicFloatingRunes />

      {/* Canvas Particle Starfield Background */}
      <ParticleBackground />

      {/* Toast Notification Banner */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero onNotify={handleNotify} />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <Contact onNotify={handleNotify} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
