// A simple audio utility to play sound effects using the Web Audio API.
let audioCtx: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
  if (typeof window !== 'undefined' && (!audioCtx || audioCtx.state === 'closed')) {
    try {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.error("Web Audio API is not supported in this browser.", e);
      return null;
    }
  }
  // If the context is suspended, resume it on a user gesture.
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const playSound = (type: 'correct' | 'incorrect') => {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Ensure context is running, especially on first user interaction
  if (ctx.state === 'suspended') {
    ctx.resume();
  }

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  gainNode.gain.setValueAtTime(0.1, ctx.currentTime);

  if (type === 'correct') {
    // A simple two-tone "success" chime
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    oscillator.frequency.linearRampToValueAtTime(698.46, ctx.currentTime + 0.1); // F5
    gainNode.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.3);
  } else { // incorrect
    // A short "buzz" sound
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(164.81, ctx.currentTime); // E3
    oscillator.frequency.linearRampToValueAtTime(123.47, ctx.currentTime + 0.2); // B2
    gainNode.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.4);
  }

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.4);
};
