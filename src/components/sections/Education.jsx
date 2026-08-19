import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward, FiCheckCircle } from 'react-icons/fi';
import { SectionHeader } from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="// 06. ACADEMIC JOURNEY"
          title="Education & Qualifications"
          subtitle="Formal academic trajectory, foundational sciences, and core computer science curricula."
        />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 dark:border-cyan-500/30 ml-4 md:ml-32 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#08090e] border-2 border-cyan-400 shadow-[0_0_10px_#00f2fe] group-hover:scale-125 transition-transform" />

              {/* Education Card */}
              <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800 dark:border-white/10 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300">
                
                {/* Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <FiCalendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>

                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {edu.grade}
                  </span>
                </div>

                {/* Institution Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans group-hover:text-cyan-300 transition-colors">
                  {edu.institution}
                </h3>

                {/* Degree & Location */}
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-purple-300 font-medium">
                  <span className="flex items-center gap-1.5">
                    <FiBookOpen className="w-4 h-4 text-purple-400" />
                    {edu.degree}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <FiMapPin className="w-3.5 h-3.5 text-slate-500" />
                    {edu.location}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {edu.description}
                </p>

                {/* Coursework Tags */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="text-xs font-mono text-slate-400 mb-2.5 flex items-center gap-1.5 font-semibold">
                      <FiAward className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Relevant Coursework:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-white/5"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
