import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const exp = {
  badge: 'CSF',
  role: 'Software Engineer III – Cloud & DevOps',
  company: 'Cloudsufi',
  location: 'Noida, India',
  period: 'Aug 2020 – Present',
  tech: ['GCP', 'Azure', 'Kubernetes', 'Terraform', 'LangGraph', 'Gemini', 'ArgoCD', 'GitLab CI/CD', 'Cloud Armor', 'Anthos'],
  achievements: [
    {
      metric: '45%',
      label: 'MTTR Reduction',
      detail: 'Autonomous AI-driven infrastructure remediation using LangGraph multi-agent orchestration and Gemini — no human intervention required.',
    },
    {
      metric: '40%',
      label: 'Deploy Velocity',
      detail: 'LLM-driven CI/CD optimizer across 30+ microservices via GitOps automation with ArgoCD and GitHub Actions.',
    },
  ],
  points: [
    'Built Agentic AI-powered self-healing infrastructure with LangGraph & Gemini for autonomous incident response',
    'Designed multi-region GKE fleet with Anthos Service Mesh and zero-downtime active-active failover',
    'Architected enterprise Azure Landing Zone migration for 25+ legacy monolithic applications to AKS microservices',
    'Implemented Medallion data architecture on GCP processing 10TB+ daily with sub-second latency',
    'Delivered FinOps dashboard achieving 15% cost reduction across Azure infrastructure fleet',
  ],
}

export default function Experience() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-alt">
      <div className="container">
        <div className="eyebrow"><span className="eyebrow-line" />03 — Experience</div>
        <h2 className="section-title">Five years, one mission —<br /><span className="accent">cloud excellence.</span></h2>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '0.55fr 1.45fr', gap: 56, alignItems: 'start' }}>
          {/* Left: intro */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: 24 }}>
              Joined Cloudsufi as a Trainee in 2020 and rapidly progressed to Software Engineer III, delivering enterprise-scale infrastructure across GCP, Azure, and AWS.
            </p>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--cyan)', padding: '12px 16px', background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.15)', borderRadius: 4 }}>
              <div style={{ marginBottom: 4, color: 'var(--muted)' }}>// status</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--emerald)', boxShadow: '0 0 8px var(--emerald)', animation: 'pulse 2s ease-in-out infinite' }} />
                <span style={{ color: 'var(--emerald)' }}>open-to-opportunities</span>
              </div>
              <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
            </div>
          </motion.div>

          {/* Right: experience card */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
            <div style={{ background: 'var(--surf)', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
              {/* Top accent bar */}
              <div style={{ height: 2, background: 'linear-gradient(90deg, var(--cyan), var(--indigo))' }} />

              <div style={{ padding: '24px 28px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 44, height: 44, background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.25)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--cyan)', flexShrink: 0 }}>
                      {exp.badge}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>{exp.role}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--cyan)', marginTop: 3 }}>{exp.company} · {exp.location}</div>
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--muted)', padding: '4px 12px', background: 'var(--surf2)', border: '1px solid var(--border)', borderRadius: 3 }}>
                    {exp.period}
                  </div>
                </div>

                {/* Tech pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {exp.tech.map(t => <span key={t} className="pill pill-cyan">{t}</span>)}
                </div>

                {/* Achievement metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                  {exp.achievements.map((a, i) => (
                    <div key={i} style={{ background: 'var(--surf2)', border: '1px solid var(--border)', borderRadius: 6, padding: '14px 16px' }}>
                      <div style={{ fontFamily: 'var(--sans)', fontSize: '2rem', fontWeight: 700, color: 'var(--cyan)', lineHeight: 1 }}>{a.metric}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '3px 0 8px' }}>{a.label}</div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--muted)', lineHeight: 1.65 }}>{a.detail}</div>
                    </div>
                  ))}
                </div>

                {/* Bullet points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {exp.points.map((p, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65 }}
                    >
                      <span style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: 2 }}>✦</span>
                      {p}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .container > div { grid-template-columns: 1fr !important; gap: 24px !important; }
          #experience [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
