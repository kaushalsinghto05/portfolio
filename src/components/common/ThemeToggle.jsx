import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`relative p-2.5 rounded-xl border border-slate-700/50 dark:border-white/15 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-700 dark:text-cyan-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] group ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={false}
          animate={{
            y: isDark ? 0 : -30,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <FiMoon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            y: !isDark ? 0 : 30,
            opacity: !isDark ? 1 : 0,
            rotate: !isDark ? 0 : -90,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <FiSun className="w-5 h-5 text-amber-500 group-hover:text-amber-400" />
        </motion.div>
      </div>
    </button>
  );
};
