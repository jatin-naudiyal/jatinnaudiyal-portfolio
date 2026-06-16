import { motion } from 'framer-motion'

const certs = [
  { logo: 'GCP', bg: 'rgba(0,229,255,0.08)', fg: 'var(--cyan)',    border: 'rgba(0,229,255,0.2)',
    name: 'Generative AI Leader', issuer: 'Google Cloud · May 2026', status: 'Certified', ok: true },
  { logo: 'GCP', bg: 'rgba(0,229,255,0.08)', fg: 'var(--cyan)',    border: 'rgba(0,229,255,0.2)',
    name: 'Professional DevOps Engineer', issuer: 'Google Cloud · April 2025', status: 'Certified', ok: true },
  { logo: 'HCP', bg: 'rgba(167,139,250,0.08)', fg: 'var(--violet)',border: 'rgba(167,139,250,0.2)',
    name: 'Terraform Associate', issuer: 'HashiCorp · October 2023', status: 'Certified', ok: true },
  { logo: 'GCP', bg: 'rgba(0,229,255,0.08)', fg: 'var(--cyan)',    border: 'rgba(0,229,255,0.2)',
    name: 'Professional Cloud Architect', issuer: 'Google Cloud · October 2022', status: 'Certified', ok: true },
  { logo: 'AZ',  bg: 'rgba(56,189,248,0.08)', fg: 'var(--sky)',    border: 'rgba(56,189,248,0.2)',
    name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft · June 2021', status: 'Certified', ok: true },
]

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'University School of Information, Communication & Technology, GGSIPU',
    period: '2017 – 2020 · Delhi, India',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Maharaja Surajmal Institute of Technology, GGSIPU',
    period: '2014 – 2017 · Delhi, India',
  },
]

export default function Credentials() {
  return (
    <section id="credentials" className="section-alt">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 72, alignItems: 'start' }}>
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <div className="eyebrow"><span className="eyebrow-line" />05 — Credentials</div>
            <h2 className="section-title">Certified at the<br /><span className="accent">highest level.</span></h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: 28 }}>
              Five cloud certifications spanning GCP, HashiCorp, and Azure — each backed by real production deployments across enterprise-scale infrastructure.
            </p>

            {/* Education cards */}
            {education.map((edu, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12 }} viewport={{ once: true }}
                style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '18px 18px', background: 'var(--surf)', border: '1px solid var(--border)', borderLeft: '3px solid var(--cyan)', borderRadius: 6, marginBottom: 10 }}>
                <span style={{ fontSize: '1.5rem' }}>🎓</span>
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>
                    {edu.degree}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: 4, lineHeight: 1.5 }}>
                    {edu.school}
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--cyan)' }}>
                    {edu.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: cert cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {certs.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 24, y: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.6, delay: i * 0.09 }}
                viewport={{ once: true }}
                style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: 'var(--surf)', border: `1px solid ${c.border}`, borderRadius: 6, cursor: 'default' }}
              >
                <div style={{ width: 46, height: 46, borderRadius: 8, background: c.bg, border: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '0.68rem', fontWeight: 700, color: c.fg, flexShrink: 0 }}>
                  {c.logo}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)' }}>{c.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: 2 }}>{c.issuer}</div>
                </div>
                <span style={{
                  fontSize: '0.66rem', fontWeight: 600, padding: '3px 10px', borderRadius: 3, flexShrink: 0,
                  background: 'rgba(16,185,129,0.1)',
                  color: 'var(--emerald)',
                  border: '1px solid rgba(16,185,129,0.25)',
                }}>
                  ✓ Certified
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #credentials .container > div { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
