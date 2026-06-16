import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, ArrowRight, Terminal } from 'lucide-react';
import { personal } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

const contactCards = [
  {
    id: 'co-email',
    icon: Mail,
    label: 'Email',
    value: 'iamjatinnaudiyal@gmail.com',
    href: `mailto:iamjatinnaudiyal@gmail.com`,
    color: 'primary',
  },
  {
    id: 'co-li',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jatinnaudiyal',
    href: 'https://linkedin.com/in/jatinnaudiyal',
    target: '_blank',
    color: 'primary',
  },
  {
    id: 'co-ph',
    icon: Phone,
    label: 'Phone',
    value: '+91 9205041303',
    href: 'tel:+919205041303',
    color: 'accent',
  },
  {
    id: 'co-loc',
    icon: MapPin,
    label: 'Location',
    value: 'Delhi, India',
    href: 'https://linkedin.com/in/jatinnaudiyal',
    target: '_blank',
    color: 'secondary',
  },
];

const colorMap = {
  primary: {
    icon: 'text-primary',
    iconBg: 'bg-primary/10 border-primary/20',
    hover: 'hover:border-primary/30 hover:shadow-glow-primary',
    arrow: 'group-hover:text-primary',
  },
  secondary: {
    icon: 'text-secondary',
    iconBg: 'bg-secondary/10 border-secondary/20',
    hover: 'hover:border-secondary/30',
    arrow: 'group-hover:text-secondary',
  },
  accent: {
    icon: 'text-accent',
    iconBg: 'bg-accent/10 border-accent/20',
    hover: 'hover:border-accent/30',
    arrow: 'group-hover:text-accent',
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-container relative flex flex-col justify-center"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #030712 100%)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Large decorative glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col gap-14">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4">
          <motion.div
            className="eyebrow justify-center"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow-line" />
            06 — Contact
            <span className="eyebrow-line" style={{ background: 'linear-gradient(270deg, #38BDF8, transparent)' }} />
          </motion.div>
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&apos;s build something<br /><em>remarkable.</em>
          </motion.h2>
          <motion.p
            className="text-text-muted text-base max-w-lg text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personal.availability}
          </motion.p>
        </div>

        {/* Contact grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactCards.map((card) => {
            const Icon = card.icon;
            const c = colorMap[card.color];
            return (
              <motion.a
                key={card.id}
                id={card.id}
                href={card.href}
                target={card.target}
                rel={card.target ? 'noopener noreferrer' : undefined}
                variants={cardVariants}
                className={`glass-card border border-surface-border p-5 flex items-center gap-4 group transition-all ${c.hover}`}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${c.iconBg}`}
                >
                  <Icon size={18} className={c.icon} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-text-dim font-mono uppercase tracking-wider">{card.label}</div>
                  <div className="text-sm text-text-base font-medium mt-0.5 truncate">{card.value}</div>
                </div>
                <ArrowRight
                  size={16}
                  className={`text-text-dim transition-all group-hover:translate-x-1 ${c.arrow}`}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Big CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={`mailto:${personal.email}`}
            id="big-cta-btn"
            className="btn-primary text-base px-8 py-4 rounded-xl shadow-glow-primary"
          >
            Send a Message
            <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="flex items-center justify-center gap-3 pt-4 border-t border-surface-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Terminal size={10} className="text-bg-deep" />
            </div>
            <span className="font-mono text-xs font-semibold text-text-base">JN</span>
          </div>
          <span className="text-text-dim text-xs">
            © 2025 Jatin Naudiyal · Senior Cloud & DevOps Engineer · Cloudsufi
          </span>
        </motion.div>
      </div>
    </section>
  );
}
