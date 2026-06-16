import { motion, useInView } from 'framer-motion'
import { useRef, Suspense } from 'react'
import SkillsCloud from './SkillsCloud'

const categories = [
  { label: '☁️ Cloud Platforms',        items: ['GCP', 'Azure', 'AWS (Fundamentals)'],                        color: 'var(--cyan)' },
  { label: '🤖 Agentic AI & GenAI',     items: ['LangGraph', 'LangChain', 'Vertex AI', 'Gemini', 'OpenAI APIs'],color: 'var(--violet)' },
  { label: '☸️ Containers & Orch.',     items: ['Docker', 'Kubernetes', 'GKE', 'AKS', 'EKS', 'Helm'],        color: 'var(--sky)' },
  { label: '🏗️ Infrastructure as Code', items: ['Terraform', 'Terragrunt', 'OpenTofu', 'Pulumi', 'Ansible'],  color: 'var(--violet)' },
  { label: '⚙️ CI/CD & GitOps',         items: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'ArgoCD', 'FluxCD'],color: 'var(--sky)' },
  { label: '📊 Monitoring & Obs.',      items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'PagerDuty'],color: 'var(--coral)' },
  { label: '🔒 Networking & Security',  items: ['VPC · Firewall', 'Cloud IAP · IAM', 'Cloud Armor', 'WIF', 'Secret Manager'], color: 'var(--emerald)' },
  { label: '⚡ Serverless & Data',       items: ['Cloud Run', 'Cloud Functions', 'BigQuery', 'Pub/Sub · Kafka', 'Dataflow'], color: 'var(--coral)' },
  { label: '📦 Artifact & SCM',         items: ['GAR · GCR', 'JFrog', 'ECR · ACR', 'GitHub · GitLab'],       color: 'var(--cyan)' },
  { label: '💻 Languages',              items: ['Python', 'Bash', 'PowerShell', 'Go', 'YAML · JSON'],         color: 'var(--cyan)' },
  { label: '🖥️ Cloud Services',         items: ['Compute Engine', 'App Engine', 'Cloud Build', 'Cloud Composer', 'Anthos · Istio'], color: 'var(--sky)' },
  { label: '🖥️ Operating Systems',      items: ['Ubuntu · CentOS · Debian', 'Alpine Linux', 'Windows Server', 'macOS'], color: 'var(--emerald)' },
]

const pillColorMap = {
  'var(--cyan)':   'pill-cyan',
  'var(--violet)': 'pill-i',
  'var(--sky)':    'pill-s',
  'var(--coral)':  'pill-o',
  'var(--emerald)':'pill-e',
}

export default function Skills() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-alt grid-bg">
      <div className="container">
        <div className="eyebrow"><span className="eyebrow-line" />02 — Tech Stack</div>
        <h2 className="section-title">Skills I build <span className="accent">with.</span></h2>

        {/* 3D Interactive Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}
          style={{ marginBottom: 48 }}
        >
          <Suspense fallback={<div style={{ height: 440, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontFamily: 'var(--mono)', fontSize: '0.8rem', border: '1px solid var(--border)', borderRadius: 8 }}>Loading 3D cloud...</div>}>
            <SkillsCloud />
          </Suspense>
        </motion.div>

        {/* Skill category grid */}
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 10 }}>
          {categories.map((cat, ci) => (
            <motion.div key={ci}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.07, duration: 0.6 }}
              style={{ background: 'var(--surf)', border: '1px solid var(--border)', borderRadius: 6, padding: '14px 16px' }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text)', marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid var(--border)' }}>{cat.label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {cat.items.map(item => (
                  <span key={item} className={`pill ${pillColorMap[cat.color] || ''}`}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
