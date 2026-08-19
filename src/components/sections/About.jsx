import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCode, FiCpu, FiActivity, FiMusic, FiCheckCircle } from 'react-icons/fi';
import { MdSportsCricket, MdSportsVolleyball } from 'react-icons/md';
import { GiShuttlecock } from 'react-icons/gi';
import { SectionHeader } from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export const About = () => {
  const { about, personal } = portfolioData;

  const interestIcons = {
    Cricket: <MdSportsCricket className="w-5 h-5 text-amber-400" />,
    Volleyball: <MdSportsVolleyball className="w-5 h-5 text-cyan-400" />,
    Badminton: <GiShuttlecock className="w-5 h-5 text-emerald-400" />,
    Music: <FiMusic className="w-5 h-5 text-pink-400" />,
    'Exploring New Tech': <FiCpu className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="// 01. WHO I AM"
          title="Behind the Code & Screen"
          subtitle="A peek into my technical journey, core building mindset, and what keeps me curious every day."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story & Principles (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800 dark:border-white/10 backdrop-blur-xl shadow-glass flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <FiCode className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">
                    Software Engineering Student & Builder
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    B.Tech CSE (2023 – 2027) • CGPA 7.00
                  </p>
                </div>
              </div>

              {/* Story Narrative */}
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                {about.story}
              </p>

              {/* How I Build Software */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                  How I Approach Software:
                </h4>
                {about.principles.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="p-3.5 rounded-2xl bg-slate-800/40 border border-white/5 hover:border-cyan-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      <FiCheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 pl-6 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Education Badge Pill */}
            <div className="mt-8 pt-6 border-t border-slate-800/60 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <FiBookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">INSTITUTION</div>
                  <div className="text-sm font-semibold text-slate-200">{personal.college}</div>
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                ⚡ Batch of 2023 – 2027
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Focus + Hobbies & Activities (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Real World Competencies Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-6 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 dark:border-white/10 backdrop-blur-xl shadow-glass"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-cyan-400 font-mono mb-4 flex items-center gap-2">
                <FiCpu className="w-4 h-4" /> Core Technical Craft
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-colors">
                  <div className="font-semibold text-slate-200">Full-Stack Systems</div>
                  <div className="text-slate-400 mt-1">React, Node, Express, MongoDB</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-400/30 transition-colors">
                  <div className="font-semibold text-slate-200">Computer Vision</div>
                  <div className="text-slate-400 mt-1">YOLO, OpenCV, TensorFlow</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-pink-400/30 transition-colors">
                  <div className="font-semibold text-slate-200">AI / LLM Pipelines</div>
                  <div className="text-slate-400 mt-1">OpenAI API, Prompt Tuning</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-colors">
                  <div className="font-semibold text-slate-200">Algorithms & DSA</div>
                  <div className="text-slate-400 mt-1">60+ Solved on LeetCode</div>
                </div>
              </div>
            </motion.div>

            {/* Interests & Hobbies Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-3xl p-6 bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800 dark:border-white/10 backdrop-blur-xl shadow-glass flex-1 flex flex-col justify-center"
            >
              <h4 className="text-sm font-bold uppercase tracking-widest text-purple-400 font-mono mb-4 flex items-center gap-2">
                <FiActivity className="w-4 h-4" /> Outside the Terminal
              </h4>

              <p className="text-xs text-slate-400 mb-4">
                When I step away from the keyboard, here is how I recharge and keep my reflexes sharp:
              </p>

              <div className="space-y-2.5">
                {about.interests.map((interest) => (
                  <div
                    key={interest.name}
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/60 border border-white/5 hover:border-cyan-400/30 hover:bg-slate-800 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      {interestIcons[interest.name] || <FiActivity className="w-4 h-4 text-cyan-400" />}
                      <span className="text-xs font-semibold text-slate-200">{interest.name}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">{interest.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
