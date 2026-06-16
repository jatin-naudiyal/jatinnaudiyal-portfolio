import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap } from 'lucide-react';
import { certifications, education } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="section-container relative"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #0F172A 100%)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-14">
        <SectionHeader
          eyebrow="05 — Credentials"
          title='Certified at the <em>highest level.</em>'
        />

        {/* Certifications */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-primary" />
            <span className="text-xs font-mono text-text-dim uppercase tracking-wider">Professional Certifications</span>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                id={cert.id}
                variants={cardVariants}
                className="glass-card border border-surface-border p-5 flex items-center gap-4 group"
                whileHover={{
                  y: -3,
                  borderColor: 'rgba(56,189,248,0.25)',
                  boxShadow: '0 12px 40px rgba(56,189,248,0.08), 0 4px 16px rgba(0,0,0,0.3)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Provider logo */}
                <div
                  className={`w-12 h-12 rounded-xl ${cert.logoClass} flex items-center justify-center text-white text-xs font-bold font-mono flex-shrink-0 shadow-lg`}
                >
                  {cert.provider}
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-text-base leading-tight group-hover:text-primary transition-colors">
                    {cert.name}
                  </div>
                  <div className="text-xs text-text-dim mt-1 font-mono">
                    {cert.issuer} · {cert.date}
                  </div>
                </div>

                {/* Verified badge */}
                <div
                  className="w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0"
                  title="Verified"
                >
                  <span className="text-accent text-xs font-bold">✓</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <GraduationCap size={14} className="text-secondary" />
            <span className="text-xs font-mono text-text-dim uppercase tracking-wider">Education</span>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                id={edu.id}
                variants={cardVariants}
                className="glass-card border border-surface-border p-6 flex items-start gap-4 group"
                whileHover={{
                  y: -3,
                  borderColor: 'rgba(139,92,246,0.25)',
                  boxShadow: '0 12px 40px rgba(139,92,246,0.08)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={16} className="text-secondary" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-text-base group-hover:text-secondary transition-colors">
                    {edu.degree}
                  </div>
                  <div className="text-xs text-text-muted mt-1 leading-relaxed">{edu.school}</div>
                  <div className="text-xs text-text-dim mt-2 font-mono">
                    {edu.period} · {edu.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
