import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar, FiCheckSquare, FiShield } from 'react-icons/fi';
import { SectionHeader } from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';
import { playHoverSound, playClickSound } from '../../utils/soundEffects';

export const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="// 05. CREDENTIALS & LICENSES"
          title="Certifications & Specializations"
          subtitle="Official verified industry credentials and skill assessments."
        />

        {/* Centered 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              onMouseEnter={playHoverSound}
              className="group rounded-3xl p-7 sm:p-8 bg-slate-900/70 dark:bg-slate-900/80 border border-slate-800 dark:border-white/10 backdrop-blur-xl hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Date */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:scale-105 transition-transform">
                    {cert.icon === 'brain' ? (
                      <FiShield className="w-6 h-6 text-purple-400" />
                    ) : (
                      <FiAward className="w-6 h-6 text-cyan-400" />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-sans group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuing Platform */}
                <p className="text-xs font-mono text-cyan-400 mt-1 font-semibold">
                  Issued by: {cert.issuer}
                </p>

                {/* Covered Skills */}
                <div className="mt-5 space-y-2">
                  {cert.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <FiCheckSquare className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action link */}
              <div className="mt-8 pt-5 border-t border-white/10">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  <span>View Official Verification</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Banner Note */}
        <div className="mt-10 text-center">
          <p className="text-xs font-mono text-slate-400">
            🛡️ <span className="text-cyan-400 font-semibold">Official Verification:</span> Both credentials above link directly to the live verified certificates on HackerRank and Oracle University.
          </p>
        </div>

      </div>
    </section>
  );
};
