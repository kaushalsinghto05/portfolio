import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({ badge, title, subtitle, centered = true }) => {
  return (
    <motion.div
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3.5 shadow-[0_0_15px_rgba(6,182,212,0.15)]`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
        <span className="bg-gradient-to-r from-slate-900 via-cyan-600 to-purple-600 dark:from-white dark:via-cyan-300 dark:to-purple-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
