import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiGlobe,
  FiCpu,
  FiEye,
  FiDatabase,
  FiLayers,
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import { SectionHeader } from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

const categoryIcons = {
  code: <FiCode className="w-5 h-5" />,
  globe: <FiGlobe className="w-5 h-5" />,
  brain: <FiCpu className="w-5 h-5" />,
  eye: <FiEye className="w-5 h-5" />,
  sparkles: <HiSparkles className="w-5 h-5" />,
  database: <FiDatabase className="w-5 h-5" />,
};

export const Skills = () => {
  const { categories } = portfolioData.skills;
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? categories
      : categories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="// 02. TECHNICAL ARSENAL"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit across full-stack engineering, machine learning pipelines, and artificial intelligence."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            All Categories ({categories.length})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="group rounded-3xl p-6 bg-slate-900/70 dark:bg-slate-900/80 border border-slate-800 dark:border-white/10 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color} text-slate-950 font-bold shadow-md`}>
                      {categoryIcons[category.icon] || <FiLayers className="w-5 h-5" />}
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-sans group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                    {category.items.length} skills
                  </span>
                </div>

                {/* Skill Items & Progress */}
                <div className="space-y-3.5">
                  {category.items.map((skill, sIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sIndex * 0.05, duration: 0.3 }}
                      className="group/item"
                    >
                      <div className="flex justify-between items-center text-xs mb-1.5">
                        <span className="font-medium text-slate-300 group-hover/item:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[11px] text-slate-400 group-hover/item:text-slate-200">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/5">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut', delay: sIndex * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tag Cloud at Bottom */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {category.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-white/5 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-200"
                  >
                    #{skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
