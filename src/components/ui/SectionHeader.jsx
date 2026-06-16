import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, className = '' }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <motion.div
        className="eyebrow"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow-line" />
        {eyebrow}
      </motion.div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
}
