import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', href: portfolioData.personal.socials.github, icon: <FiGithub className="w-5 h-5" /> },
    { name: 'LinkedIn', href: portfolioData.personal.socials.linkedin, icon: <FiLinkedin className="w-5 h-5" /> },
    { name: 'LeetCode', href: portfolioData.personal.socials.leetcode, icon: <SiLeetcode className="w-5 h-5" /> },
    { name: 'Email', href: portfolioData.personal.socials.email, icon: <FiMail className="w-5 h-5" /> },
  ];

  return (
    <footer className="relative border-t border-slate-800/80 dark:border-white/10 bg-[#07080e] text-slate-400 overflow-hidden">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl p-0.5 bg-gradient-to-tr from-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <div className="w-full h-full bg-[#0a0b12] rounded-[10px] flex items-center justify-center">
                  <span className="text-sm font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    KS
                  </span>
                </div>
              </div>
              <span className="text-lg font-bold text-white font-sans tracking-tight">
                Kaushal Singh
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Software Engineering student building AI/ML applications, computer vision systems, and modern full-stack web platforms with passion and precision.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {portfolioData.navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-cyan-500 text-xs">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Part 2 & Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold mb-4">
              Direct Reach
            </h4>
            <div className="space-y-2.5 text-sm">
              <p className="text-xs font-mono text-cyan-400">
                {portfolioData.personal.email}
              </p>
              <p className="text-xs text-slate-400">
                {portfolioData.personal.phone}
              </p>
              <p className="text-xs text-slate-500">
                {portfolioData.personal.college}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 flex items-center gap-1">
            <span>© {new Date().getFullYear()} Kaushal Singh. Designed & Built with</span>
            <FiHeart className="w-3.5 h-3.5 text-rose-500 inline animate-pulse" />
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all group"
          >
            <span>Back to top</span>
            <FiArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};
