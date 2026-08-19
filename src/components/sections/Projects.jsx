import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import confetti from 'canvas-confetti';
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiCheckCircle,
  FiLayers,
  FiMaximize2,
  FiX,
  FiCpu,
  FiShield,
  FiGlobe
} from 'react-icons/fi';
import { SectionHeader } from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { label: 'All', count: projects.length },
    { label: 'Web Dev', count: projects.filter(p => p.category === 'Web Dev' || p.categorySecondary === 'Web Dev').length },
    { label: 'AI-ML', count: projects.filter(p => p.category === 'AI-ML').length },
    { label: 'Cybersecurity', count: projects.filter(p => p.category === 'Cybersecurity').length },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Web Dev') return project.category === 'Web Dev' || project.categorySecondary === 'Web Dev';
    if (filter === 'AI-ML') return project.category === 'AI-ML';
    if (filter === 'Cybersecurity') return project.category === 'Cybersecurity';
    return true;
  });

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f2fe', '#9d4edd', '#f72585']
    });
  };

  const getCategoryIcon = (category) => {
    if (category === 'Cybersecurity') return <FiShield className="w-3.5 h-3.5" />;
    if (category === 'AI-ML') return <FiCpu className="w-3.5 h-3.5" />;
    return <FiGlobe className="w-3.5 h-3.5" />;
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="// 03. FEATURED WORK"
          title="Engineered Projects & Systems"
          subtitle="Explore production-style software platforms, machine learning architectures, and cybersecurity frameworks."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setFilter(tab.label)}
              className={`relative px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === tab.label
                  ? 'text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800/80'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`ml-2 text-[10px] px-2 py-0.5 rounded-full ${
                filter === tab.label ? 'bg-slate-950/20 text-slate-950' : 'bg-white/10 text-slate-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid with Tilt */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={800}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="#00f2fe"
                  glarePosition="all"
                  className="h-full rounded-3xl"
                >
                  <div className="group h-full rounded-3xl bg-slate-900/70 dark:bg-slate-900/80 border border-slate-800 dark:border-white/10 backdrop-blur-xl hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
                    
                    {/* Top Decorative Gradient Accent */}
                    <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Status & Category Bar */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-cyan-400 text-xs font-mono">
                            {getCategoryIcon(project.category)}
                            <span>{project.categoryLabel}</span>
                          </div>

                          <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                            project.status === 'In Progress'
                              ? 'bg-amber-500/10 text-amber-300 border-amber-500/30 animate-pulse'
                              : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          }`}>
                            {project.status}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-100 font-sans group-hover:text-cyan-300 transition-colors line-clamp-2">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Key Highlights Mini-list */}
                        <div className="mt-4 space-y-1.5">
                          {project.highlights.slice(0, 2).map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                              <span className="text-cyan-400 mt-0.5">›</span>
                              <span className="line-clamp-1">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 text-cyan-200 border border-cyan-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-4 border-t border-slate-800/80 dark:border-white/10 flex items-center justify-between gap-3">
                          <button
                            onClick={() => handleOpenModal(project)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <FiMaximize2 className="w-3.5 h-3.5" />
                            <span>Quick View</span>
                          </button>

                          <div className="flex items-center gap-2">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub Repository"
                              className="p-2 rounded-xl bg-slate-800/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200"
                              title="View Code on GitHub"
                            >
                              <FiGithub className="w-4 h-4" />
                            </a>

                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Project Details"
                              className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-200"
                              title="Live / Profile Link"
                            >
                              <FiExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Modal Top Accent */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${selectedProject.gradient}`} />

                <div className="flex items-start justify-between gap-4 mt-2">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      {selectedProject.categoryLabel} • {selectedProject.status}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-sans mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 font-semibold">
                    Key Architecture & Highlights
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <FiCheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 font-semibold">
                    Technologies Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-end gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-md hover:shadow-cyan-500/50 transition-all"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Open GitHub Profile</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
