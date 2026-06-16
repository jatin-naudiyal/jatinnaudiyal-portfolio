import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, TrendingUp } from 'lucide-react';
import { projects } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const tagColors = {
  primary: 'bg-primary/10 border-primary/20 text-primary',
  secondary: 'bg-secondary/10 border-secondary/20 text-secondary',
  accent: 'bg-accent/10 border-accent/20 text-accent',
};

const metricGradients = {
  primary: 'from-primary to-accent',
  secondary: 'from-secondary to-primary',
  accent: 'from-accent to-primary',
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-6deg', '6deg']);

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const tc = tagColors[project.tagColor] || tagColors.primary;
  const mg = metricGradients[project.tagColor] || metricGradients.primary;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      id={project.id}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="glass-card border border-surface-border h-full flex flex-col p-6 gap-5 relative overflow-hidden"
        style={{ rotateX, rotateY }}
        whileHover={{
          borderColor: 'rgba(56,189,248,0.2)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(56,189,248,0.06)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Background gradient accent */}
        <div
          className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full blur-2xl pointer-events-none"
          style={{
            background: project.tagColor === 'secondary' ? '#8B5CF6' :
                        project.tagColor === 'accent' ? '#22C55E' : '#38BDF8',
            transform: 'translate(30%, -30%)',
          }}
        />

        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          <span
            className="font-mono text-xs font-600 text-text-dim"
          >
            {project.num}
          </span>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tc}`}
          >
            {project.tag}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-base font-bold text-text-base leading-tight group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs text-text-dim mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t, i) => (
            <TechBadge key={i} variant={project.tagColor}>
              {t}
            </TechBadge>
          ))}
        </div>

        {/* Metric */}
        <div
          className="mt-auto pt-4 border-t border-surface-border flex items-center gap-3"
        >
          <TrendingUp size={14} className="text-accent flex-shrink-0" />
          <div className="min-w-0">
            <span className={`font-mono text-xl font-bold bg-gradient-to-r ${mg} bg-clip-text text-transparent`}>
              {project.metric}
            </span>
            <p className="text-xs text-text-dim mt-0.5 leading-tight">
              {project.metricLabel}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1.5 text-xs text-text-dim hover:text-primary transition-colors px-3 py-1.5 rounded-lg border border-surface-border hover:border-primary/30 hover:bg-primary/5"
            aria-label="View on GitHub"
          >
            <Github size={12} />
            GitHub
          </button>
          <button
            className="flex items-center gap-1.5 text-xs text-text-dim hover:text-accent transition-colors px-3 py-1.5 rounded-lg border border-surface-border hover:border-accent/30 hover:bg-accent/5"
            aria-label="Live demo"
          >
            <ExternalLink size={12} />
            Demo
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-container relative"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #0F172A 100%)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <SectionHeader
              eyebrow="03 — Key Projects"
              title='What I&apos;ve <em>engineered.</em>'
            />
            <div className="flex items-center gap-2 text-text-dim text-xs font-mono hidden sm:flex">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              6 production systems
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
