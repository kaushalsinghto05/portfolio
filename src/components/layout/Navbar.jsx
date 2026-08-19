import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload, FiExternalLink } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';
import { ThemeToggle } from '../common/ThemeToggle';
import { useActiveSection } from '../../hooks/useActiveSection';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = portfolioData.navLinks.map((link) => link.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-slate-950/80 dark:bg-[#090a10]/85 backdrop-blur-xl border-b border-slate-800/80 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl p-0.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0a0b12] rounded-[10px] flex items-center justify-center">
              <span className="text-base font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                KS
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-100 font-sans group-hover:text-cyan-400 transition-colors">
              Kaushal<span className="text-cyan-400">.</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
              Full-Stack & AI
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800 dark:border-white/10 backdrop-blur-md shadow-inner">
          {portfolioData.navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 via-purple-600/80 to-pink-500/80 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.5)] -z-10"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 bg-[length:200%_auto] hover:bg-[position:right_center] shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-all duration-300 active:scale-95"
          >
            <FiDownload className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-200 hover:text-cyan-400"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-b border-white/10 bg-[#090a12]/95 backdrop-blur-2xl px-6 py-5 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {portfolioData.navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <FiDownload className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
