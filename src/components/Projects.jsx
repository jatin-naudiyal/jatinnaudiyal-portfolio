import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    id: 1, num: '01',
    title: 'Autonomous Infrastructure Remediation Agent',
    subtitle: 'Agentic AI · LangGraph · Gemini · Kubernetes',
    desc: 'Self-healing infrastructure platform using LangGraph multi-agent orchestration and Gemini to autonomously detect, diagnose, and remediate production incidents. Integrates with Prometheus alerts and Terraform to apply fixes — achieving 45% MTTR reduction without human intervention.',
    tech: ['LangGraph', 'Gemini', 'Python', 'Kubernetes', 'Terraform', 'Prometheus'],
    metrics: [
      { v: '45%', l: 'MTTR↓' },
      { v: '0',   l: 'Human Ops' },
      { v: '24/7', l: 'Autonomous' },
    ],
    github: 'https://github.com/jatinnaudiyal',
    tag: 'Featured',
    accent: 'var(--cyan)',
    icon: '🤖',
  },
  {
    id: 2, num: '02',
    title: 'LLM-Driven CI/CD Pipeline Optimizer',
    subtitle: 'AI Pipelines · GitHub Actions · ArgoCD · Vertex AI',
    desc: 'AI-powered pipeline intelligence layer using LangChain and Vertex AI that analyzes build patterns, predicts failures, and auto-optimizes CI/CD workflows across 30+ microservice fleets — delivering 40% deployment velocity gain via GitOps automation.',
    tech: ['GitHub Actions', 'LangChain', 'Vertex AI', 'ArgoCD', 'SonarQube'],
    metrics: [
      { v: '40%', l: 'Velocity↑' },
      { v: '30+', l: 'Services'  },
      { v: '0',   l: 'Drift'     },
    ],
    github: 'https://github.com/jatinnaudiyal',
    tag: 'Agentic AI',
    accent: 'var(--violet)',
    icon: '⚙️',
  },
  {
    id: 3, num: '03',
    title: 'Multi-Region GKE Fleet & Anthos Service Mesh',
    subtitle: 'GCP · GKE · Anthos · Istio · Terragrunt',
    desc: 'Enterprise-grade multi-region Kubernetes platform with Anthos Service Mesh, automated mTLS encryption, traffic management, and zero-downtime blue-green deployments — delivering 100% uptime via active-active failover across regions.',
    tech: ['GKE', 'Anthos', 'Istio', 'Terragrunt', 'Cloud Armor', 'Cloud Build'],
    metrics: [
      { v: '0',    l: 'Downtime' },
      { v: 'mTLS', l: 'Encrypted' },
      { v: '99.9%', l: 'SLA'     },
    ],
    github: 'https://github.com/jatinnaudiyal',
    tag: 'Featured',
    accent: 'var(--sky)',
    icon: '☸️',
  },
  {
    id: 4, num: '04',
    title: 'Enterprise Data Platform Orchestration',
    subtitle: 'BigQuery · Dataflow · Cloud Composer · Pub/Sub',
    desc: 'Scalable Medallion architecture on GCP orchestrating real-time streaming and batch data pipelines with automated quality gates and lineage tracking — processing 10TB+ daily with sub-second latency.',
    tech: ['BigQuery', 'Dataflow', 'Cloud Composer', 'Pub/Sub', 'Kubernetes'],
    metrics: [
      { v: '10TB+', l: 'Daily'   },
      { v: '<1s',   l: 'Latency' },
      { v: '100%',  l: 'Quality' },
    ],
    github: 'https://github.com/jatinnaudiyal',
    tag: 'GCP',
    accent: 'var(--coral)',
    icon: '📊',
  },
  {
    id: 5, num: '05',
    title: 'Azure Enterprise-Scale Landing Zone & AKS Migration',
    subtitle: 'Azure · AKS · Bicep · Azure DevOps · FinOps',
    desc: 'Full Azure enterprise Landing Zone with hub-spoke topology, containerized 25+ legacy apps to AKS microservices, WAF secured via Azure Front Door and Key Vault, with FinOps governance delivering 15% cost reduction.',
    tech: ['AKS', 'Azure DevOps', 'Bicep', 'Azure Front Door', 'Key Vault'],
    metrics: [
      { v: '15%', l: 'Cost↓'    },
      { v: '25+', l: 'Apps'     },
      { v: '0',   l: 'Unauth'   },
    ],
    github: 'https://github.com/jatinnaudiyal',
    tag: 'Azure',
    accent: 'var(--violet)',
    icon: '🏗️',
  },
  {
    id: 6, num: '06',
    title: 'Serverless Event-Driven Architecture on AWS',
    subtitle: 'AWS Lambda · ECS Fargate · EventBridge · DynamoDB',
    desc: 'Fully serverless event-driven platform on AWS with auto-scaling ECS Fargate workloads, DynamoDB streams, EventBridge orchestration, and zero manual provisioning — 100% IaC automated with CloudWatch auto-scaling on queue depth.',
    tech: ['Lambda', 'ECS Fargate', 'EventBridge', 'DynamoDB', 'API Gateway'],
    metrics: [
      { v: '100%', l: 'IaC'     },
      { v: '0',    l: 'Manual'  },
      { v: '∞',    l: 'Scales'  },
    ],
    github: 'https://github.com/jatinnaudiyal',
    tag: 'AWS',
    accent: 'var(--coral)',
    icon: '⚡',
  },
]

// Map accent CSS var to a RGBA for backgrounds
function accentToRgba(accent, alpha) {
  if (accent === 'var(--cyan)')   return `rgba(0,229,255,${alpha})`
  if (accent === 'var(--violet)') return `rgba(124,58,237,${alpha})`
  if (accent === 'var(--sky)')    return `rgba(56,189,248,${alpha})`
  if (accent === 'var(--coral)')  return `rgba(249,115,22,${alpha})`
  return `rgba(0,229,255,${alpha})`
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const cardRef = useRef()

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    setRotate({ x: y * -10, y: x * 10 })
  }
  const handleMouseLeave = () => { setHovered(false); setRotate({ x: 0, y: 0 }) }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'var(--surf)',
        border: `1px solid ${hovered ? accentToRgba(project.accent, 0.3) : 'var(--border)'}`,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
        transform: `perspective(900px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(${hovered ? 8 : 0}px)`,
        transition: 'transform 0.12s ease, border-color 0.3s, box-shadow 0.3s',
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${accentToRgba(project.accent, 0.12)}` : '0 4px 24px rgba(0,0,0,0.3)',
        cursor: 'default',
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: 2, background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

      {/* Glow effect on hover */}
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: `radial-gradient(circle at 50% 0%, ${accentToRgba(project.accent, 0.06)}, transparent 60%)`,
          pointerEvents: 'none',
        }} />
      )}

      <div style={{ padding: '22px 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--dim)', marginBottom: 6, letterSpacing: '0.1em' }}>{project.num}</div>
            <span style={{ fontSize: '1.6rem' }}>{project.icon}</span>
          </div>
          <div style={{ display: 'flex', gap: 6, flexDirection: 'column', alignItems: 'flex-end' }}>
            {project.tag && (
              <span style={{ fontSize: '0.6rem', padding: '3px 8px', background: accentToRgba(project.accent, 0.1), border: `1px solid ${accentToRgba(project.accent, 0.3)}`, borderRadius: 3, color: project.accent, fontFamily: 'var(--mono)' }}>
                {project.tag}
              </span>
            )}
          </div>
        </div>

        <h3 style={{ fontFamily: 'var(--sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4, lineHeight: 1.25 }}>{project.title}</h3>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', color: 'var(--muted)', marginBottom: 14 }}>{project.subtitle}</div>

        {/* Metrics */}
        <div style={{ display: 'flex', border: '1px solid var(--border)', borderRadius: 4, overflow: 'hidden', marginBottom: 14 }}>
          {project.metrics.map((m, i) => (
            <div key={i} style={{ flex: 1, padding: '8px 4px', textAlign: 'center', borderRight: i < project.metrics.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '1.1rem', fontWeight: 700, color: project.accent, lineHeight: 1 }}>{m.v}</div>
              <div style={{ fontSize: '0.56rem', color: 'var(--muted)', marginTop: 3, fontFamily: 'var(--mono)' }}>{m.l}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: 14 }}>{project.desc}</p>

        {/* Tech pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
          {project.tech.map(t => <span key={t} className="pill">{t}</span>)}
        </div>

        {/* GitHub link */}
        <a href={project.github} target="_blank" rel="noopener"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', fontFamily: 'var(--mono)', color: 'var(--muted)', textDecoration: 'none', padding: '6px 12px', background: 'var(--surf2)', border: '1px solid var(--border)', borderRadius: 3, cursor: 'none', transition: 'color 0.2s, border-color 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'rgba(0,229,255,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
          View on GitHub ↗
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="grid-bg">
      <div className="container">
        <div className="eyebrow"><span className="eyebrow-line" />04 — Projects</div>
        <h2 className="section-title">What I've <span className="accent">engineered.</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ marginTop: 32, textAlign: 'center' }}>
          <a href="https://github.com/jatinnaudiyal" target="_blank" rel="noopener" className="btn-outline">
            More on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
