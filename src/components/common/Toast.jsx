import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from 'react-icons/fi';

export const Toast = ({ toast, onClose }) => {
  if (!toast) return null;

  const icons = {
    success: <FiCheckCircle className="w-5 h-5 text-emerald-400" />,
    error: <FiAlertCircle className="w-5 h-5 text-rose-400" />,
    info: <FiInfo className="w-5 h-5 text-cyan-400" />
  };

  return (
    <AnimatePresence>
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/95 border border-cyan-500/30 backdrop-blur-lg text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="flex-shrink-0">
              {icons[toast.type || 'info']}
            </div>
            <div className="flex-1 text-sm font-medium text-slate-200">
              {toast.message}
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <FiX className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
