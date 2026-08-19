import React from 'react';
import { motion } from 'framer-motion';

const runes = [
  { symbol: '✦', x: '10%', y: '15%', size: 'text-2xl', color: 'text-cyan-400', duration: 7, delay: 0 },
  { symbol: '{ }', x: '88%', y: '22%', size: 'text-xl', color: 'text-purple-400', duration: 9, delay: 1 },
  { symbol: 'λ', x: '8%', y: '65%', size: 'text-3xl', color: 'text-pink-400', duration: 8, delay: 2 },
  { symbol: '⚡', x: '92%', y: '75%', size: 'text-2xl', color: 'text-amber-400', duration: 6, delay: 0.5 },
  { symbol: '</>', x: '15%', y: '85%', size: 'text-lg', color: 'text-emerald-400', duration: 10, delay: 1.5 },
  { symbol: '◈', x: '82%', y: '45%', size: 'text-2xl', color: 'text-indigo-400', duration: 8.5, delay: 3 },
  { symbol: '✧', x: '50%', y: '8%', size: 'text-xl', color: 'text-teal-300', duration: 7.5, delay: 2 },
  { symbol: '∞', x: '75%', y: '90%', size: 'text-2xl', color: 'text-rose-400', duration: 9.5, delay: 0.8 },
  { symbol: 'π', x: '25%', y: '40%', size: 'text-2xl', color: 'text-cyan-300', duration: 8, delay: 2.5 },
  { symbol: '✨', x: '68%', y: '12%', size: 'text-xl', color: 'text-amber-300', duration: 6.5, delay: 1.2 },
];

export const MagicFloatingRunes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {runes.map((rune, idx) => (
        <motion.div
          key={idx}
          className={`absolute font-mono font-bold ${rune.size} ${rune.color} opacity-20 dark:opacity-30 drop-shadow-[0_0_12px_currentColor]`}
          style={{ left: rune.x, top: rune.y }}
          animate={{
            y: ['-15px', '15px', '-15px'],
            rotate: [-12, 12, -12],
            scale: [0.9, 1.1, 0.9],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: rune.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: rune.delay,
          }}
        >
          {rune.symbol}
        </motion.div>
      ))}
    </div>
  );
};
