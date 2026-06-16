import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const infoCards = [
  { icon: '🏢', label: 'Company',   value: 'Cloudsufi, Noida · Aug 2020 – Present' },
  { icon: '📍', label: 'Location',  value: 'Delhi, India' },
  { icon: '🎓', label: 'Education', value: 'MCA · USICT, GGSIPU · Delhi' },
  { icon: '📱', label: 'Phone',     value: '+91 9205041303' },
  { icon: '✉',  label: 'Email',     value: 'iamjatinnaudiyal@gmail.com' },
]

const highlights = [
  { emoji: '🤖', text: 'Agentic AI-powered self-healing infrastructure with LangGraph & Gemini — autonomous incident remediation' },
  { emoji: '☸️', text: 'Multi-region GKE fleet with Anthos Service Mesh & zero-downtime active-active failover' },
  { emoji: '⚙️', text: 'LLM-driven CI/CD optimizer — 40% deployment velocity gain across 30+ microservices' },
  { emoji: '🏗️', text: 'Enterprise Azure Landing Zone migration for 25+ legacy monolithic applications' },
  { emoji: '📊', text: 'Medallion data architecture processing 10TB+ daily with sub-second latency on GCP' },
]

export default function About() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 64, alignItems: 'start' }} ref={ref}>
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="eyebrow"><span className="eyebrow-line" />01 — About Me</div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Architecting intelligent,<br /><span className="accent">cloud systems at scale.</span>
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.88, marginBottom: 14 }}>
              Results-driven Senior Cloud &amp; DevOps Engineer with <strong style={{ color: 'var(--text)' }}>6+ years</strong> of hands-on experience architecting, automating, and managing production-grade cloud infrastructure on <strong style={{ color: 'var(--text)' }}>GCP and Azure</strong>. Deep expertise in <strong style={{ color: 'var(--text)' }}>Agentic AI-powered DevOps automation</strong>, building intelligent LLM-driven workflows for infrastructure provisioning, incident response, and self-healing systems.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.88, marginBottom: 24 }}>
              Proven track record in <strong style={{ color: 'var(--text)' }}>Infrastructure as Code</strong> (Terraform/Terragrunt), Kubernetes orchestration (GKE/EKS), GitOps-based CI/CD pipeline design, and DevSecOps implementation. Skilled at integrating <strong style={{ color: 'var(--text)' }}>Generative AI and ML capabilities</strong> into cloud-native platforms to drive operational excellence at scale.
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {highlights.map((h, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.55 }}
                  style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 14px', background: 'var(--surf)', border: '1px solid var(--border)', borderRadius: 5, fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}
                >
                  <span style={{ fontSize: '1rem', flexShrink: 0 }}>{h.emoji}</span>
                  <span>{h.text}</span>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work →
              </button>
              <a href="https://linkedin.com/in/jatinnaudiyal" target="_blank" rel="noopener" className="btn-outline">LinkedIn ↗</a>
            </div>
          </motion.div>

          {/* Right: info cards */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'sticky', top: 88 }}>
            {infoCards.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.07 }}
                whileHover={{ x: 6, borderColor: 'rgba(0,229,255,0.2)' }}
                style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px 16px', background: 'var(--surf)', border: '1px solid var(--border)', borderRadius: 6, borderLeft: i === 0 ? '3px solid var(--cyan)' : '1px solid var(--border)', cursor: 'default' }}
              >
                <span style={{ fontSize: '1.2rem' }}>{c.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{c.label}</div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 500, color: 'var(--text)', marginTop: 2 }}>{c.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Tag cloud */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
              {['Agentic AI / LLMOps', 'Cloud Architecture', 'GitOps', 'DevSecOps', 'FinOps', 'Chaos Engineering'].map(t => (
                <span key={t} className="pill pill-cyan">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
