import { motion } from 'framer-motion'

const contactLinks = [
  { icon: '✉', label: 'Email', value: 'iamjatinnaudiyal@gmail.com', href: 'mailto:iamjatinnaudiyal@gmail.com', color: 'var(--cyan)' },
  { icon: 'in', label: 'LinkedIn', value: 'jatinnaudiyal', href: 'https://linkedin.com/in/jatinnaudiyal', color: 'var(--sky)' },
  { icon: '📞', label: 'Phone', value: '+91 9205041303', href: 'tel:+919205041303', color: 'var(--emerald)' },
  { icon: '📍', label: 'Location', value: 'Delhi, India', href: '#', color: 'var(--coral)' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        {/* Background accent */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '60vw', height: '60vh',
          background: 'radial-gradient(ellipse, rgba(0,229,255,0.04) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="eyebrow-line" />06 — Contact</div>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 700, lineHeight: 1.0, color: 'var(--text)', textAlign: 'center', marginBottom: 16 }}>
            Let's build<br /><span style={{ color: 'var(--cyan)' }}>something remarkable.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.25 }} viewport={{ once: true }}
            style={{ fontSize: '0.95rem', color: 'var(--muted)', textAlign: 'center', marginBottom: 40, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.75 }}>
            Available for senior cloud architecture roles, DevOps consulting, and enterprise AI + infrastructure engagements.
          </motion.p>

          {/* Contact cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, maxWidth: 820, margin: '0 auto 36px' }}>
            {contactLinks.map((c, i) => (
              <motion.a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, borderColor: c.color + '44' }}
                transition={{ delay: 0.35 + i * 0.07 }} viewport={{ once: true }}
                style={{ display: 'flex', flexDirection: 'column', padding: '18px 16px', background: 'var(--surf)', border: '1px solid var(--border)', borderRadius: 6, textDecoration: 'none', color: 'var(--text)', cursor: 'none' }}>
                <div style={{ fontSize: c.icon === 'in' ? '1rem' : '1.3rem', fontFamily: c.icon === 'in' ? 'var(--sans)' : undefined, fontWeight: c.icon === 'in' ? 700 : undefined, color: c.color, marginBottom: 10 }}>{c.icon}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--dim)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5 }}>{c.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text)', flex: 1, wordBreak: 'break-all' }}>{c.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--dim)', marginTop: 10, alignSelf: 'flex-end' }}>→</div>
              </motion.a>
            ))}
          </motion.div>

          {/* Big CTA */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <a href="mailto:iamjatinnaudiyal@gmail.com" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
              Send a Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </motion.div>

          {/* Footer */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--border)', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.88rem', color: 'var(--cyan)', fontWeight: 600 }}>
              <span style={{ color: 'var(--cyan)' }}>&lt;</span>jn<span style={{ color: 'var(--cyan)' }}>/&gt;</span>
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--dim)' }}>© 2025 Jatin Naudiyal · Senior Cloud & DevOps Engineer · Cloudsufi</span>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="https://linkedin.com/in/jatinnaudiyal" target="_blank" rel="noopener" style={{ fontSize: '0.72rem', color: 'var(--muted)', textDecoration: 'none', cursor: 'none' }}>LinkedIn</a>
              <a href="mailto:iamjatinnaudiyal@gmail.com" style={{ fontSize: '0.72rem', color: 'var(--muted)', textDecoration: 'none', cursor: 'none' }}>Email</a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact [style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          #contact [style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
