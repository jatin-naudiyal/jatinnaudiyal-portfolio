import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import TechBadge from '../ui/TechBadge';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const colorMap = {
  primary: {
    iconBg: 'bg-primary/10 border-primary/20',
    iconText: 'text-primary',
    hoverBorder: 'hover:border-primary/30',
    hoverGlow: 'rgba(56,189,248,0.06)',
  },
  secondary: {
    iconBg: 'bg-secondary/10 border-secondary/20',
    iconText: 'text-secondary',
    hoverBorder: 'hover:border-secondary/30',
    hoverGlow: 'rgba(139,92,246,0.06)',
  },
  accent: {
    iconBg: 'bg-accent/10 border-accent/20',
    iconText: 'text-accent',
    hoverBorder: 'hover:border-accent/30',
    hoverGlow: 'rgba(34,197,94,0.06)',
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-container relative"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #030712 100%)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <SectionHeader
              eyebrow="02 — Expertise"
              title='The tech <em>ecosystem.</em>'
            />
            <p className="text-text-dim text-sm max-w-xs text-right hidden sm:block font-mono">
              {skills.length} categories · 50+ tools
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {skills.map((skill) => {
              const c = colorMap[skill.color] || colorMap.primary;
              return (
                <motion.div
                  key={skill.id}
                  id={`skill-${skill.id}`}
                  variants={cardVariants}
                  className={`glass-card p-5 flex flex-col gap-4 border border-surface-border ${c.hoverBorder} group cursor-default`}
                  whileHover={{
                    y: -4,
                    boxShadow: `0 8px 40px ${c.hoverGlow}, 0 4px 20px rgba(0,0,0,0.3)`,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg border flex items-center justify-center text-base ${c.iconBg}`}
                    >
                      {skill.icon}
                    </div>
                    <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider leading-tight">
                      {skill.category}
                    </h3>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item, idx) => (
                      <TechBadge key={idx} variant={skill.color}>
                        {item}
                      </TechBadge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
