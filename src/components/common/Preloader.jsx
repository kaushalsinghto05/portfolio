import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onFinish, 600);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080d] text-white select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          {/* Logo Brand */}
          <motion.div
            className="relative mb-8 flex items-center justify-center"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="relative w-24 h-24 rounded-2xl p-0.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_40px_rgba(76,201,240,0.5)]">
              <div className="w-full h-full bg-[#0a0b12] rounded-2xl flex items-center justify-center">
                <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  KS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Name & Subtitle */}
          <motion.div
            className="text-center mb-8"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h2 className="text-xl font-bold tracking-wider text-slate-100 font-sans">
              KAUSHAL SINGH
            </h2>
            <p className="text-xs text-cyan-400/80 font-mono mt-1 tracking-widest uppercase">
              Full-Stack & AI/ML Developer
            </p>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-64 max-w-[80vw]">
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
              <span className="text-cyan-400">LOADING_ASSETS</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
