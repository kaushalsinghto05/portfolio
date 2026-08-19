import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import confetti from 'canvas-confetti';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiCheck, FiCopy, FiZap } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../../data/portfolioData';
import { Hero3DScene } from '../3d/Hero3DScene';

export const Hero = ({ onNotify }) => {
  const { personal, stats } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    if (onNotify) onNotify({ message: 'Email copied to clipboard!', type: 'success' });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCastMagic = () => {
    // Magician Celebration Confetti Explosion
    const end = Date.now() + 1.2 * 1000;
    const colors = ['#00f2fe', '#9d4edd', '#f72585', '#ffd166', '#4cc9f0'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    if (onNotify) {
      onNotify({
        message: '✨ Magic Spell Activated! Welcome to my creative universe.',
        type: 'success',
      });
    }
  };

  const typingSequence = personal.typewriterWords.flatMap((word) => [word, 2000]);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Magical Gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Human Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Status & Magic Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for Tech Roles & AI Projects</span>
              </div>

              <button
                onClick={handleCastMagic}
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 hover:bg-purple-500/25 border border-purple-500/30 text-xs font-mono text-purple-300 hover:text-purple-200 transition-all duration-300 shadow-[0_0_15px_rgba(157,78,221,0.2)] hover:scale-105"
                title="Click for a magical animation"
              >
                <FiZap className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>✨ Magic Touch</span>
              </button>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                {personal.name}
              </span>
            </motion.h1>

            {/* Dynamic Typewriter Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-14 sm:h-12 mt-3 flex items-center justify-center lg:justify-start"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-semibold font-mono text-cyan-400">
                &gt;{' '}
              </span>
              <TypeAnimation
                sequence={typingSequence}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="text-lg sm:text-xl md:text-2xl font-semibold font-mono text-slate-800 dark:text-slate-200 ml-2"
              />
            </motion.div>

            {/* Human-Friendly Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              {personal.shortBio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-[length:200%_auto] hover:bg-[position:right_center] shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all duration-300 active:scale-95"
              >
                <span>Explore My Projects</span>
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-slate-800 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-white/15 hover:border-cyan-400/50 hover:bg-slate-300/60 dark:hover:bg-slate-800/80 transition-all duration-300 active:scale-95 shadow-sm"
              >
                <FiDownload className="w-4 h-4 text-cyan-400" />
                <span>Get Resume</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="p-3.5 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-white/15 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 active:scale-95"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copied ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                Find Me:
              </span>

              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <FiGithub className="w-5 h-5" />
              </a>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>

              <a
                href={personal.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile (kaushasingh)"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-amber-400 hover:border-amber-400/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <SiLeetcode className="w-5 h-5" />
              </a>

              <a
                href={personal.socials.email}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-rose-400 hover:border-rose-400/40 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 backdrop-blur-md text-center hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="text-xl md:text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-sans">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-tight mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: 3D Celestial Core & Floating Identity Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* 3D Scene */}
            <div className="w-full relative">
              <Hero3DScene />
            </div>

            {/* Profile Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full max-w-sm -mt-6 p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.7)] relative z-20 hover:border-cyan-400 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 flex-shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] overflow-hidden flex items-center justify-center">
                    {!imgError ? (
                      <img
                        src={personal.profileImage}
                        alt={personal.name}
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 text-cyan-400 font-bold text-xl">
                        KS
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white truncate font-sans">
                      {personal.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      B.Tech CSE
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {personal.college}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-emerald-300">
                      CGPA: 7.00 • Prayagraj
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
