import { motion } from 'framer-motion';

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid overlay */}
      <div className="grid-overlay" />
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Primary glow orb — top left */}
      <motion.div
        className="glow-orb"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
          top: '-200px',
          left: '-150px',
        }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary glow orb — bottom right */}
      <motion.div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          bottom: '-150px',
          right: '-100px',
        }}
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Accent glow orb — center right */}
      <motion.div
        className="glow-orb"
        style={{
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
          top: '40%',
          right: '10%',
        }}
        animate={{ x: [0, 20, 0], y: [0, -25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />
    </div>
  );
}
