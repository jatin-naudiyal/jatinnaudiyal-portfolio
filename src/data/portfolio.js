// ════════════════════════════════════════════════════
// JATIN NAUDIYAL — Portfolio Data (Single Source of Truth)
// All content preserved exactly from original codebase
// ════════════════════════════════════════════════════

export const personal = {
  name: 'Jatin Naudiyal',
  firstName: 'Jatin',
  lastName: 'Naudiyal',
  title: 'Senior Cloud & DevOps Engineer',
  company: 'Cloudsufi',
  role: 'Software Engineer III – Cloud & DevOps',
  location: 'Delhi, India',
  phone: '+91 9205041303',
  email: 'iamjatinnaudiyal@gmail.com',
  linkedin: 'https://linkedin.com/in/jatinnaudiyal',
  linkedinHandle: 'linkedin.com/in/jatinnaudiyal',
  availability: 'Available for senior cloud architecture roles, DevOps consulting, and enterprise AI + infrastructure engagements.',
};

export const stats = [
  { value: 6, suffix: '+', label: 'Years' },
  { value: 5, suffix: '', label: 'Certifications' },
  { value: 6, suffix: '', label: 'Key Projects' },
  { value: 30, suffix: '+', label: 'Technologies' },
];

export const heroBadges = [
  { icon: '🤖', label: 'Agentic AI DevOps', sub: 'LangGraph · Gemini · Vertex AI' },
  { icon: '☸️', label: 'Kubernetes Expert', sub: 'GKE · AKS · Anthos · EKS' },
  { icon: '🏗️', label: 'Infrastructure as Code', sub: 'Terraform · Terragrunt · Pulumi' },
  { icon: '🔒', label: 'DevSecOps', sub: 'Workload Identity · Cloud Armor · IAP' },
];

export const aboutBio = [
  `Results-driven Senior Cloud & DevOps Engineer with <strong>6+ years</strong> of hands-on experience architecting, automating, and managing production-grade cloud infrastructure on <strong>GCP and Azure</strong>. Deep expertise in <strong>Agentic AI-powered DevOps automation</strong>, building intelligent LLM-driven workflows for infrastructure provisioning, incident response, and self-healing systems.`,
  `Proven track record in <strong>Infrastructure as Code</strong> (Terraform/Terragrunt), Kubernetes orchestration (GKE/EKS), GitOps-based CI/CD pipeline design, and DevSecOps implementation. Skilled at integrating <strong>Generative AI and ML capabilities</strong> into cloud-native platforms to drive operational excellence and deliver high-availability production systems at scale.`,
];

export const aboutTags = [
  'Agentic AI / LLMOps',
  'Cloud Architecture',
  'GitOps',
  'DevSecOps',
  'FinOps',
  'Chaos Engineering',
];

export const aboutInfo = [
  { icon: '🏢', key: 'Company', value: 'Cloudsufi, Noida · Aug 2020 – Present' },
  { icon: '📍', key: 'Location', value: 'Delhi, India' },
  { icon: '🎓', key: 'Education', value: 'MCA · USICT, GGSIPU · Delhi' },
  { icon: '📱', key: 'Phone', value: '+91 9205041303' },
  { icon: '✦', key: 'Current Role', value: 'Software Engineer III – Cloud & DevOps', highlight: true },
];

export const skills = [
  {
    id: 'cloud',
    icon: '☁️',
    category: 'Cloud Platforms',
    color: 'primary',
    items: ['GCP', 'Azure', 'AWS (Fundamentals)'],
  },
  {
    id: 'ai',
    icon: '🤖',
    category: 'Agentic AI & GenAI',
    color: 'secondary',
    items: ['LangGraph', 'LangChain', 'Vertex AI', 'Gemini', 'OpenAI APIs', 'RAG · Prompt Engineering'],
  },
  {
    id: 'containers',
    icon: '☸️',
    category: 'Containers & Orchestration',
    color: 'primary',
    items: ['Docker', 'Kubernetes', 'GKE', 'AKS', 'EKS', 'Helm · Kustomize'],
  },
  {
    id: 'iac',
    icon: '🏗️',
    category: 'Infrastructure as Code',
    color: 'accent',
    items: ['Terraform', 'Terragrunt', 'OpenTofu', 'Pulumi', 'Ansible'],
  },
  {
    id: 'cicd',
    icon: '⚙️',
    category: 'CI/CD & GitOps',
    color: 'primary',
    items: ['GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'ArgoCD', 'FluxCD', 'Spinnaker'],
  },
  {
    id: 'monitoring',
    icon: '📊',
    category: 'Monitoring & Observability',
    color: 'secondary',
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'PagerDuty'],
  },
  {
    id: 'security',
    icon: '🔒',
    category: 'Networking & Security',
    color: 'accent',
    items: ['VPC · Firewall Rules', 'Cloud IAP · IAM', 'Cloud Armor', 'Workload Identity', 'Secret Manager'],
  },
  {
    id: 'artifacts',
    icon: '📦',
    category: 'Artifact & SCM',
    color: 'primary',
    items: ['GAR · GCR', 'JFrog', 'ECR · ACR', 'Nexus', 'GitHub · GitLab · Bitbucket'],
  },
  {
    id: 'serverless',
    icon: '⚡',
    category: 'Serverless & Data',
    color: 'secondary',
    items: ['Cloud Run', 'Cloud Functions', 'BigQuery', 'Pub/Sub · Kafka', 'Dataflow'],
  },
  {
    id: 'languages',
    icon: '💻',
    category: 'Languages',
    color: 'accent',
    items: ['Python', 'Bash', 'PowerShell', 'Go', 'YAML · JSON'],
  },
  {
    id: 'os',
    icon: '🖥️',
    category: 'Operating Systems',
    color: 'primary',
    items: ['Ubuntu · CentOS · Debian', 'Alpine Linux', 'Windows Server', 'macOS'],
  },
  {
    id: 'cloudsvcs',
    icon: '📡',
    category: 'Cloud Services',
    color: 'secondary',
    items: ['Compute Engine', 'App Engine', 'Cloud Build', 'Cloud Composer', 'Anthos · Istio'],
  },
];

export const projects = [
  {
    id: 'pc-1',
    num: '01',
    title: 'Autonomous Infrastructure Remediation Agent',
    tag: 'Agentic AI & DevOps',
    tagColor: 'secondary',
    tech: ['LangGraph', 'Gemini', 'Python', 'Kubernetes', 'Terraform', 'Prometheus'],
    metric: '45%',
    metricLabel: 'MTTR Reduction — autonomous AI-driven remediation without human intervention',
    description: 'Self-healing infrastructure platform using LangGraph multi-agent orchestration and Gemini to autonomously detect, diagnose, and remediate production incidents.',
  },
  {
    id: 'pc-2',
    num: '02',
    title: 'LLM-Driven CI/CD Pipeline Optimizer',
    tag: 'Agentic AI & DevOps',
    tagColor: 'secondary',
    tech: ['GitHub Actions', 'LangChain', 'Vertex AI', 'ArgoCD', 'SonarQube'],
    metric: '40%',
    metricLabel: 'Deployment Velocity — across 30+ microservices via GitOps automation',
    description: 'AI-powered pipeline intelligence layer that analyzes build patterns, predicts failures, and auto-optimizes CI/CD workflows across microservice fleets.',
  },
  {
    id: 'pc-3',
    num: '03',
    title: 'Multi-Region GKE Fleet & Anthos Service Mesh',
    tag: 'GCP & Kubernetes',
    tagColor: 'primary',
    tech: ['GKE', 'Anthos', 'Istio', 'Terragrunt', 'Cloud Armor', 'Cloud Build'],
    metric: '0',
    metricLabel: 'Downtime — active-active multi-region failover with mTLS encryption',
    description: 'Enterprise-grade multi-region Kubernetes platform with Anthos Service Mesh, automated traffic management, and zero-downtime blue-green deployments.',
  },
  {
    id: 'pc-4',
    num: '04',
    title: 'Enterprise Data Platform Orchestration',
    tag: 'GCP & Kubernetes',
    tagColor: 'primary',
    tech: ['BigQuery', 'Dataflow', 'Cloud Composer', 'Pub/Sub', 'Kubernetes'],
    metric: '10TB+',
    metricLabel: 'Daily ingestion — sub-second latency Medallion data architecture',
    description: 'Scalable Medallion architecture on GCP orchestrating real-time streaming and batch data pipelines with automated quality gates and lineage tracking.',
  },
  {
    id: 'pc-5',
    num: '05',
    title: 'Azure Enterprise-Scale Landing Zone & AKS Migration',
    tag: 'Azure',
    tagColor: 'accent',
    tech: ['AKS', 'Azure DevOps', 'Bicep', 'Azure Front Door', 'Key Vault'],
    metric: '15%',
    metricLabel: 'Cost Reduction — 25+ legacy apps migrated, FinOps dashboard, WAF secured',
    description: 'Full enterprise Azure Landing Zone with hub-spoke topology, containerized 25+ legacy monolithic apps to AKS microservices with FinOps governance.',
  },
  {
    id: 'pc-6',
    num: '06',
    title: 'Serverless Event-Driven Architecture',
    tag: 'AWS',
    tagColor: 'accent',
    tech: ['Lambda', 'ECS Fargate', 'EventBridge', 'DynamoDB', 'API Gateway'],
    metric: '100%',
    metricLabel: 'IaC automated — CloudWatch auto-scaling on queue depth',
    description: 'Fully serverless event-driven platform on AWS with auto-scaling ECS Fargate workloads, DynamoDB streams, and comprehensive IaC with zero manual provisioning.',
  },
];

export const experience = {
  company: 'CLOUDSUFI',
  role: 'Software Engineer III – Cloud & DevOps',
  location: 'Noida, India',
  startDate: 'Aug 2020',
  endDate: 'Present',
  tags: ['GCP Architect', 'Agentic AI', 'Kubernetes', 'Terraform', 'DevSecOps', 'Multi-Cloud'],
  highlights: [
    'Agentic AI-powered self-healing infrastructure with LangGraph & Gemini',
    'Multi-region GKE fleet with Anthos Service Mesh & zero-downtime failover',
    'LLM-driven CI/CD optimizer — 40% velocity gain across 30+ microservices',
    'Enterprise Azure Landing Zone migration for 25+ legacy monolithic apps',
    'Medallion data architecture processing 10TB+ daily with sub-second latency',
  ],
  tenureStats: [
    { value: 5, suffix: '+', label: 'Years at Cloudsufi' },
    { value: 6, suffix: '', label: 'Major Projects' },
    { value: 3, suffix: '', label: 'Cloud Platforms' },
  ],
  summary: 'Joined Cloudsufi as a Trainee in 2020 and rapidly progressed to Software Engineer III – Cloud & DevOps, delivering enterprise infrastructure at scale across GCP, Azure, and AWS.',
};

export const certifications = [
  {
    id: 'cc-1',
    provider: 'GCP',
    logoClass: 'cert-logo-gcp',
    name: 'Generative AI Leader',
    issuer: 'Google Cloud',
    date: 'May 2026',
  },
  {
    id: 'cc-2',
    provider: 'GCP',
    logoClass: 'cert-logo-gcp',
    name: 'Certified DevOps Engineer',
    issuer: 'Google Cloud',
    date: 'April 2025',
  },
  {
    id: 'cc-3',
    provider: 'HCP',
    logoClass: 'cert-logo-tf',
    name: 'Terraform Associate',
    issuer: 'HashiCorp',
    date: 'October 2023',
  },
  {
    id: 'cc-4',
    provider: 'GCP',
    logoClass: 'cert-logo-gcp',
    name: 'Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: 'October 2022',
  },
  {
    id: 'cc-5',
    provider: 'AZ',
    logoClass: 'cert-logo-az',
    name: 'Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: 'June 2021',
  },
];

export const education = [
  {
    id: 'edu-1',
    degree: 'Master of Computer Applications (MCA)',
    school: 'University School of Information, Communication & Technology, GGSIPU',
    period: 'Aug 2017 – July 2020',
    location: 'Delhi, India',
  },
  {
    id: 'edu-2',
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Maharaja Surajmal Institute of Technology, GGSIPU',
    period: 'Aug 2014 – July 2017',
    location: 'Delhi, India',
  },
];
