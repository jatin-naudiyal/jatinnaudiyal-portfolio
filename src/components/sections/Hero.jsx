import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Linkedin } from 'lucide-react';
import { personal, stats, heroBadges } from '../../data/portfolio';
import AnimatedCounter from '../ui/AnimatedCounter';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const badgeColors = ['primary', 'secondary', 'accent', 'primary'];
const badgeBorderColors = [
  'border-primary/20 bg-primary/5',
  'border-secondary/20 bg-secondary/5',
  'border-accent/20 bg-accent/5',
  'border-primary/20 bg-primary/5',
];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const fullText = `${personal.firstName} ${personal.lastName}`;

  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        if (i <= fullText.length) {
          setTyped(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 70);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(delay);
  }, []);

  return (
    <section
      id="hero"
      className="section-container min-h-screen flex flex-col justify-center relative"
      style={{ paddingTop: '7rem', paddingBottom: '3rem' }}
    >
      {/* Decorative glow specific to hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(56,189,248,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* LEFT — Text Content */}
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="eyebrow-line" />
            {personal.title} · {personal.company}
          </motion.div>

          {/* Terminal-style name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="font-mono text-sm text-text-dim mb-2 flex items-center gap-2">
              <span className="text-accent">$</span>
              <span>whoami</span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
              style={{ letterSpacing: '-0.03em' }}
            >
              <span className="text-text-base">{typed}</span>
              {typed.length < fullText.length && (
                <span className="terminal-cursor" />
              )}
            </h1>
          </motion.div>

          {/* Sub */}
          <motion.p
            className="text-text-muted text-base lg:text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            6+ years architecting production-grade cloud infrastructure on GCP & Azure —
            specializing in{' '}
            <span className="text-secondary font-medium">Agentic AI-powered DevOps</span>,
            Kubernetes orchestration, and enterprise-scale CI/CD automation.
          </motion.p>

          {/* Contact links */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a
              href={`tel:${personal.phone}`}
              id="hc-phone"
              className="flex items-center gap-2 text-xs text-text-dim hover:text-primary transition-colors font-mono"
            >
              <Phone size={12} /> {personal.phone}
            </a>
            <span className="text-text-dim text-xs">·</span>
            <a
              href={`mailto:${personal.email}`}
              id="hc-email"
              className="flex items-center gap-2 text-xs text-text-dim hover:text-primary transition-colors font-mono"
            >
              <Mail size={12} /> {personal.email}
            </a>
            <span className="text-text-dim text-xs">·</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hc-li"
              className="flex items-center gap-2 text-xs text-text-dim hover:text-primary transition-colors font-mono"
            >
              <Linkedin size={12} /> LinkedIn
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-6 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-bold font-mono text-text-base">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-text-dim mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <button
              className="btn-primary"
              onClick={() => scrollTo('projects')}
              id="h-proj-btn"
            >
              View Projects
              <ArrowRight size={14} />
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollTo('contact')}
              id="h-con-btn"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* RIGHT — Badge Stack */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          {heroBadges.map((badge, i) => (
            <motion.div
              key={i}
              className={`glass-card p-5 border ${badgeBorderColors[i]} flex flex-col gap-3`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
              style={{
                animation: `float ${5 + i * 0.8}s ease-in-out ${i * 1.2}s infinite`,
              }}
            >
              <div className="text-2xl">{badge.icon}</div>
              <div>
                <div className="text-sm font-semibold text-text-base leading-tight">{badge.label}</div>
                <div className="text-xs text-text-dim mt-1 font-mono">{badge.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div
          className="w-5 h-8 rounded-full border border-text-dim/30 flex items-start justify-center pt-1.5"
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span className="text-xs font-mono">Scroll</span>
      </motion.div>
    </section>
  );
}
