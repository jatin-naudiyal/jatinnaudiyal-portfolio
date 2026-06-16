import { motion } from 'framer-motion';
import { aboutBio, aboutTags, aboutInfo, personal } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

const tagColors = [
  'bg-primary/10 border-primary/20 text-primary',
  'bg-secondary/10 border-secondary/20 text-secondary',
  'bg-accent/10 border-accent/20 text-accent',
  'bg-primary/10 border-primary/20 text-primary',
  'bg-secondary/10 border-secondary/20 text-secondary',
  'bg-accent/10 border-accent/20 text-accent',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section
      id="about"
      className="section-container relative"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #0F172A 100%)' }}
    >
      {/* subtle horizontal separator glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="01 — Profile"
              title='Architecting intelligent<br/><em>cloud systems at scale.</em>'
            />

            <motion.div
              className="flex flex-col gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aboutBio.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-text-muted text-base leading-relaxed"
                  variants={itemVariants}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aboutTags.map((tag, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 hover:scale-105 ${tagColors[i % tagColors.length]}`}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Info Card */}
          <motion.div
            className="gradient-border p-px rounded-2xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div
              className="rounded-2xl p-6 flex flex-col gap-0"
              style={{ background: 'rgba(13,24,41,0.9)' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 pb-5 mb-5 border-b border-surface-border">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-bg-deep font-mono">
                  JN
                </div>
                <div>
                  <div className="text-text-base font-semibold text-sm">{personal.name}</div>
                  <div className="text-text-dim text-xs font-mono">{personal.role}</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs text-accent font-mono">Active</span>
                </div>
              </div>

              {/* Info rows */}
              {aboutInfo.map((item, i) => (
                <div key={i}>
                  <div
                    className={`flex items-center gap-4 py-3.5 ${
                      item.highlight ? 'rounded-lg px-3 bg-primary/5 border border-primary/10' : ''
                    }`}
                  >
                    <span className="text-lg w-6 text-center flex-shrink-0">{item.icon}</span>
                    <div className="min-w-0">
                      <div className="text-xs text-text-dim font-mono uppercase tracking-wider">{item.key}</div>
                      <div className={`text-sm mt-0.5 font-medium ${item.highlight ? 'text-primary' : 'text-text-base'}`}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                  {i < aboutInfo.length - 1 && !item.highlight && (
                    <div className="h-px bg-surface-border mx-2" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
