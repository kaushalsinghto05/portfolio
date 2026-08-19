import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiCornerDownLeft, FiZap, FiCopy, FiCheck } from 'react-icons/fi';
import confetti from 'canvas-confetti';
import { portfolioData } from '../../data/portfolioData';
import { playClickSound, playHoverSound, playSpellSound } from '../../utils/soundEffects';

const INITIAL_LOGS = [
  { type: 'system', text: '⚡ Initializing KS-OS v2.4 Holographic Developer Terminal...' },
  { type: 'system', text: '✨ Connected to Kaushal Singh\'s Neural Workspace.' },
  { type: 'info', text: 'Type "help" or click quick chips below to explore commands.' },
];

export const InteractiveTerminal3D = () => {
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef(null);

  const quickCommands = ['help', 'projects', 'skills', 'leetcode', 'magic', 'clear'];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const executeCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    playClickSound();

    const newLogs = [...logs, { type: 'user', text: `kaushal@universe:~$ ${cmdStr}` }];

    if (cmd === 'clear') {
      setLogs([]);
      setInput('');
      return;
    }

    if (cmd === 'help') {
      newLogs.push({
        type: 'output',
        text: 'Available Commands:\n  • projects   - List shipped & in-progress engineering projects\n  • skills     - View core full-stack, AI, & tool proficiencies\n  • leetcode   - View LeetCode DSA milestone and profile link\n  • about      - Display bio & academic journey at UIT Prayagraj\n  • contact    - Get email, phone, and direct socials\n  • magic      - Cast interactive cyber magic spell\n  • clear      - Clear terminal screen',
      });
    } else if (cmd === 'projects') {
      const pList = portfolioData.projects
        .map((p, i) => `  [${i + 1}] ${p.title} (${p.categoryLabel})\n      Tech: ${p.techStack.join(', ')}`)
        .join('\n\n');
      newLogs.push({ type: 'output', text: `Featured Projects:\n${pList}` });
    } else if (cmd === 'skills') {
      const sList = portfolioData.skills.categories
        .map((c) => `  ✦ ${c.title}: ${c.items.map((s) => s.name).join(', ')}`)
        .join('\n');
      newLogs.push({ type: 'output', text: `Skill Arsenal:\n${sList}` });
    } else if (cmd === 'leetcode') {
      newLogs.push({
        type: 'output',
        text: `LeetCode Performance:\n  • Profile: https://leetcode.com/u/kaushasingh/\n  • Problems Solved: 60+ (Easy: 35 | Med: 22 | Hard: 3)\n  • Acceptance Rate: 68.4%\n  • Primary Language: C++ / Python`,
      });
    } else if (cmd === 'about') {
      newLogs.push({
        type: 'output',
        text: `About Kaushal Singh:\n  • B.Tech CSE (2023–2027) at United Institute of Technology, Prayagraj\n  • CGPA: 7.00\n  • Focus: Full-Stack Web, AI/ML Pipelines, Computer Vision, & Problem Solving`,
      });
    } else if (cmd === 'contact') {
      newLogs.push({
        type: 'output',
        text: `Contact Info:\n  • Email: ${portfolioData.personal.email}\n  • Phone: ${portfolioData.personal.phone}\n  • GitHub: https://github.com/kaushalsinghto05\n  • LinkedIn: https://linkedin.com/in/kaushal-singh-og`,
      });
    } else if (cmd === 'magic') {
      playSpellSound();
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#9d4edd', '#f72585', '#ffd166'],
      });
      newLogs.push({
        type: 'output',
        text: '✨ *MAGIC SPELL CAST* ✨\nHolographic matrices aligned! Coding superpower boosted +100 XP.',
      });
    } else {
      newLogs.push({
        type: 'error',
        text: `Command not recognized: "${cmd}". Type "help" to view all available commands.`,
      });
    }

    setLogs(newLogs);
    setHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(history[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(nextIdx);
          setInput(history[nextIdx] || '');
        }
      }
    }
  };

  return (
    <div className="w-full rounded-3xl bg-[#090b14]/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.8)] overflow-hidden font-mono text-xs">
      {/* Terminal Top Bar */}
      <div className="px-4 py-3 bg-slate-950/90 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-[11px] text-slate-400 font-bold ml-2 flex items-center gap-1.5">
            <FiTerminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>kaushal@interactive-console:~</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            ONLINE
          </span>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-5 max-h-72 overflow-y-auto space-y-2.5 text-slate-200">
        {logs.map((log, i) => (
          <div key={i} className="leading-relaxed">
            {log.type === 'system' && (
              <span className="text-cyan-400 font-semibold">{log.text}</span>
            )}
            {log.type === 'info' && (
              <span className="text-purple-300">{log.text}</span>
            )}
            {log.type === 'user' && (
              <span className="text-amber-300 font-bold">{log.text}</span>
            )}
            {log.type === 'output' && (
              <pre className="text-slate-300 font-mono whitespace-pre-wrap pl-2 border-l-2 border-cyan-500/40 my-1 py-0.5">
                {log.text}
              </pre>
            )}
            {log.type === 'error' && (
              <span className="text-rose-400 font-semibold">{log.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Command Chips */}
      <div className="px-4 py-2 bg-slate-950/60 border-t border-white/5 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] uppercase tracking-wider text-slate-500 mr-1">Quick Run:</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            onMouseEnter={playHoverSound}
            className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all text-[11px]"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Input Line */}
      <div className="p-3 bg-slate-950/80 border-t border-white/10 flex items-center gap-2">
        <span className="text-cyan-400 font-bold">kaushal@terminal:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command (e.g. projects, skills, magic)..."
          className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 outline-none text-xs"
        />
        <button
          onClick={() => executeCommand(input)}
          className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/25 transition-colors"
          title="Run command"
        >
          <FiCornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
