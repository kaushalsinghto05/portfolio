import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiAlertCircle,
  FiMessageSquare
} from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { SectionHeader } from '../common/SectionHeader';
import { portfolioData } from '../../data/portfolioData';

export const Contact = ({ onNotify }) => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onNotify) {
      onNotify({
        message: `${fieldName} copied to clipboard!`,
        type: 'success'
      });
    }
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // Configuration Placeholder:
    // If you use Formspree, replace YOUR_FORMSPREE_ID below with your actual form ID (e.g. 'mqkvzopq')
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID';

    try {
      if (FORMSPREE_ENDPOINT.includes('YOUR_FORMSPREE_ID')) {
        // Fallback simulation & mailto trigger when user hasn't set up their Formspree key yet
        await new Promise((resolve) => setTimeout(resolve, 800));
        setStatus({ submitting: false, submitted: true, error: null });
        if (onNotify) {
          onNotify({
            message: 'Message captured! Opening default mail client as backup...',
            type: 'info'
          });
        }
        window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry from ' + formData.name
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
      } else {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          setStatus({ submitting: false, submitted: true, error: null });
          setFormData({ name: '', email: '', subject: '', message: '' });
          if (onNotify) {
            onNotify({
              message: 'Your message was sent successfully!',
              type: 'success'
            });
          }
        } else {
          throw new Error('Failed to send message');
        }
      }
    } catch {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Unable to send via API. Please use direct email link.'
      });
      if (onNotify) {
        onNotify({
          message: 'Error sending message. Falling back to email.',
          type: 'error'
        });
      }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background Ambient Lights */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="// 07. GET IN TOUCH"
          title="Let's Build Something Impactful"
          subtitle="Whether you have an opportunity, a project to collaborate on, or just want to discuss AI/ML, feel free to reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards */}
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800 dark:border-white/10 backdrop-blur-xl space-y-6">
              
              <h3 className="text-xl font-bold text-slate-100 font-sans flex items-center gap-2.5">
                <FiMessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Contact Channels</span>
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-white/5 flex items-center justify-between gap-3 group hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex-shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personal.email, 'Email')}
                  className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors flex-shrink-0"
                  title="Copy email"
                >
                  {copiedField === 'Email' ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-white/5 flex items-center justify-between gap-3 group hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex-shrink-0">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                    <a
                      href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-sm font-semibold text-slate-200 hover:text-purple-300 transition-colors truncate block"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personal.phone, 'Phone number')}
                  className="p-2 rounded-xl text-slate-400 hover:text-purple-400 hover:bg-white/5 transition-colors flex-shrink-0"
                  title="Copy phone"
                >
                  {copiedField === 'Phone number' ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-white/5 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 flex-shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {personal.location}
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Find me online:
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  >
                    <FiLinkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personal.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-xs font-semibold text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                  >
                    <SiLeetcode className="w-4 h-4" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-6 sm:p-8 bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800 dark:border-white/10 backdrop-blur-xl shadow-glass"
            >
              <h3 className="text-xl font-bold text-slate-100 font-sans mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the form below and I'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 text-sm placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 text-sm placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 text-sm placeholder-slate-500 outline-none transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or idea..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 text-sm placeholder-slate-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {status.error && (
                  <div className="flex items-center gap-2 text-xs text-rose-400 bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">
                    <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{status.error}</span>
                  </div>
                )}

                {status.submitted && (
                  <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                    <FiCheck className="w-4 h-4 flex-shrink-0" />
                    <span>Message received! Thank you for reaching out.</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.65)] hover:scale-[1.01] active:scale-95 transition-all duration-300 disabled:opacity-50"
                >
                  {status.submitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Developer note */}
              <div className="mt-4 text-center">
                <p className="text-[11px] font-mono text-slate-500">
                  ⚡ Form is ready for Formspree / EmailJS. Replace endpoint in <code className="text-cyan-400">src/components/sections/Contact.jsx</code>.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
