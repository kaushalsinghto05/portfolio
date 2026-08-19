// Synthesized Web Audio API sound effects (Zero external audio files, 100% lightweight)
let audioCtx = null;
let isMuted = false;

const getAudioContext = () => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const toggleAudioMute = () => {
  isMuted = !isMuted;
  return isMuted;
};

export const getAudioMuteState = () => isMuted;

// Subtle Sci-Fi hover blip
export const playHoverSound = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.02, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  } catch {}
};

// Magical Crystal chime on click
export const playClickSound = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 chord
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.03);

      gain.gain.setValueAtTime(0.03, ctx.currentTime + i * 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.03 + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.03);
      osc.stop(ctx.currentTime + i * 0.03 + 0.2);
    });
  } catch {}
};

// Magical Spell Cast Blast
export const playSpellSound = () => {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const arpeggio = [440, 554.37, 659.25, 830.61, 880, 1108.73, 1318.51];
    arpeggio.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.04);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + idx * 0.04 + 0.25);

      gain.gain.setValueAtTime(0.04, ctx.currentTime + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.04 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.04);
      osc.stop(ctx.currentTime + idx * 0.04 + 0.35);
    });
  } catch {}
};
