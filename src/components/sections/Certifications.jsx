import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar, FiCheckSquare } from 'react-icons/fi';
import { SectionHeader } from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="// 05. CREDENTIALS & LICENSES"
          title="Certifications & Specializations"
          subtitle="Verified learning paths, specializations, and professional technical certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl p-6 sm:p-7 bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800 dark:border-white/10 backdrop-blur-xl hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(157,78,221,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Date */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400">
                    <FiAward className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    <FiCalendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-100 font-sans group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuing Platform */}
                <p className="text-xs font-mono text-cyan-400 mt-1 font-semibold">
                  Issued by: {cert.issuer}
                </p>

                {/* Covered Skills */}
                <div className="mt-4 space-y-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <FiCheckSquare className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action link */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-purple-600 hover:text-white border border-white/10 hover:border-purple-400 transition-all duration-300"
                >
                  <span>View Certificate</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative Note for User */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-slate-500">
            🛡️ <span className="text-cyan-400 font-semibold">Verified Credentials:</span> Click any card above to view the official badge verification from Oracle University & HackerRank.
          </p>
        </div>

      </div>
    </section>
  );
};
