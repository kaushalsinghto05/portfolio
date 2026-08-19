import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { FiAward, FiCode, FiCheck, FiExternalLink, FiTrendingUp, FiZap, FiLayers } from 'react-icons/fi';
import { SectionHeader } from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export const Achievements = () => {
  const { achievements, leetcodeWidget } = portfolioData;

  const achievementIcons = {
    code: <FiCode className="w-5 h-5 text-cyan-400" />,
    academic: <FiAward className="w-5 h-5 text-purple-400" />,
    rocket: <FiZap className="w-5 h-5 text-pink-400" />,
    trophy: <FiTrendingUp className="w-5 h-5 text-amber-400" />
  };

  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="// 04. MILESTONES & RECOGNITION"
          title="Achievements & Metrics"
          subtitle="Quantifiable milestones in algorithmic problem solving, academic performance, and technical competitions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Grid: Achievement Milestone Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group rounded-3xl p-6 bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800 dark:border-white/10 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-white/10 group-hover:scale-105 transition-transform">
                      {achievementIcons[item.icon] || <FiAward className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 font-sans group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.link && (
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <SiLeetcode className="w-3.5 h-3.5" />
                      <span>View LeetCode Profile</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column: Custom Interactive LeetCode Stats Widget (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-[#0d111e] to-slate-950 border border-amber-500/30 backdrop-blur-2xl shadow-[0_0_35px_rgba(245,158,11,0.15)] flex flex-col justify-between"
          >
            <div>
              {/* LeetCode Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    <SiLeetcode className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">
                      LeetCode Performance
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      Algorithms & Data Structures
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Active Coder
                </span>
              </div>

              {/* Central Count Circle / Overview */}
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/5 mb-6 text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent font-sans">
                  {leetcodeWidget.totalSolved}+
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  Problems Successfully Solved
                </div>
              </div>

              {/* Difficulty Breakdown Bars */}
              <div className="space-y-3 mb-6">
                {/* Easy */}
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-teal-400">Easy</span>
                    <span className="text-slate-300 font-mono">{leetcodeWidget.easy} Solved</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-400 rounded-full w-[65%]" />
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-amber-400">Medium</span>
                    <span className="text-slate-300 font-mono">{leetcodeWidget.medium} Solved</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full w-[45%]" />
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-rose-400">Hard</span>
                    <span className="text-slate-300 font-mono">{leetcodeWidget.hard} Solved</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-400 rounded-full w-[20%]" />
                  </div>
                </div>
              </div>

              {/* Extra Stats */}
              <div className="grid grid-cols-2 gap-3 text-center mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs text-slate-400 font-mono">Acceptance Rate</div>
                  <div className="text-sm font-bold text-white mt-0.5">{leetcodeWidget.acceptanceRate}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs text-slate-400 font-mono">Primary Language</div>
                  <div className="text-sm font-bold text-cyan-300 mt-0.5">C++ / Python</div>
                </div>
              </div>
            </div>

            {/* Profile CTA Button */}
            <a
              href={leetcodeWidget.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all"
            >
              <span>Visit LeetCode Profile</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
