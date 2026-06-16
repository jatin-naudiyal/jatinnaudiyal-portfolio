import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';
import { experience } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import AnimatedCounter from '../ui/AnimatedCounter';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-container relative"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #030712 100%)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="04 — Experience"
              title='Five years, one mission —<br/><em>cloud excellence.</em>'
            />

            <motion.p
              className="text-text-muted text-base leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {experience.summary}
            </motion.p>

            {/* Tenure stats */}
            <motion.div
              className="flex gap-6 pt-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {experience.tenureStats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-bold font-mono text-text-base">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs text-text-dim mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Timeline decoration */}
            <motion.div
              className="relative pl-6 border-l-2 border-primary/20 flex flex-col gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute -left-[5px] top-0 timeline-dot" />
              <div className="text-xs font-mono text-text-dim">Aug 2020 — Joined as Trainee</div>
              <div className="h-8 border-l border-dashed border-primary/10 ml-0 -mt-2" />
              <div className="absolute -left-[5px] bottom-0 w-3 h-3 rounded-full border-2 border-primary bg-bg-deep" />
              <div className="text-xs font-mono text-primary">Present — Software Engineer III</div>
            </motion.div>
          </div>

          {/* RIGHT — Experience Card */}
          <motion.div
            className="gradient-border p-px rounded-2xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(13,24,41,0.9)' }}
            >
              {/* Card header */}
              <div
                className="p-6 border-b border-surface-border"
                style={{
                  background: 'linear-gradient(135deg, rgba(56,189,248,0.05) 0%, rgba(139,92,246,0.05) 100%)',
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono font-bold text-primary tracking-[0.2em] mb-1">
                      {experience.company}
                    </div>
                    <h3 className="text-lg font-bold text-text-base leading-tight" id="exp-main">
                      {experience.role}
                    </h3>
                    <div className="text-sm text-text-dim mt-1">{experience.location}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className="text-xs font-mono text-text-dim">{experience.startDate}</span>
                    <div className="w-px h-4 bg-text-dim/30" />
                    <span className="text-xs font-mono text-primary font-semibold">{experience.endDate}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <motion.div
                className="p-6 flex flex-col gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={12} className="text-accent" />
                  <span className="text-xs text-text-dim font-mono uppercase tracking-wider">Key Achievements</span>
                </div>
                {experience.highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-text-muted leading-relaxed group-hover:text-text-base transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
