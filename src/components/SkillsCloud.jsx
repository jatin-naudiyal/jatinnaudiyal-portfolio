import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Float } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'

// All of Jatin's skills distributed on the 3D sphere
const skillData = [
  // Cloud
  { name: 'GCP',            color: '#00E5FF', cat: 'cloud',     size: 1.4 },
  { name: 'Azure',          color: '#7C3AED', cat: 'cloud',     size: 1.2 },
  { name: 'AWS',            color: '#F97316', cat: 'cloud',     size: 1.0 },
  // Containers
  { name: 'Kubernetes',     color: '#00E5FF', cat: 'container', size: 1.3 },
  { name: 'Docker',         color: '#38BDF8', cat: 'container', size: 1.2 },
  { name: 'GKE',            color: '#00E5FF', cat: 'container', size: 1.1 },
  { name: 'Anthos',         color: '#A78BFA', cat: 'container', size: 1.0 },
  { name: 'Helm',           color: '#A78BFA', cat: 'container', size: 0.95 },
  // IaC
  { name: 'Terraform',      color: '#A78BFA', cat: 'iac',       size: 1.3 },
  { name: 'Terragrunt',     color: '#7C3AED', cat: 'iac',       size: 1.0 },
  { name: 'Pulumi',         color: '#F97316', cat: 'iac',       size: 0.9 },
  { name: 'Ansible',        color: '#F97316', cat: 'iac',       size: 0.9 },
  // CI/CD
  { name: 'GitHub Actions', color: '#38BDF8', cat: 'cicd',      size: 1.1 },
  { name: 'ArgoCD',         color: '#F97316', cat: 'cicd',      size: 1.0 },
  { name: 'GitLab CI',      color: '#F97316', cat: 'cicd',      size: 0.95 },
  { name: 'Jenkins',        color: '#F97316', cat: 'cicd',      size: 0.9 },
  // Monitoring
  { name: 'Prometheus',     color: '#F97316', cat: 'monitor',   size: 1.1 },
  { name: 'Grafana',        color: '#F97316', cat: 'monitor',   size: 1.0 },
  { name: 'Datadog',        color: '#A78BFA', cat: 'monitor',   size: 0.95 },
  { name: 'ELK Stack',      color: '#38BDF8', cat: 'monitor',   size: 0.9 },
  // AI
  { name: 'LangGraph',      color: '#00E5FF', cat: 'ai',        size: 1.2 },
  { name: 'Vertex AI',      color: '#00E5FF', cat: 'ai',        size: 1.1 },
  { name: 'Gemini',         color: '#10B981', cat: 'ai',        size: 1.0 },
  // Languages
  { name: 'Python',         color: '#00E5FF', cat: 'lang',      size: 1.1 },
  { name: 'Go',             color: '#10B981', cat: 'lang',      size: 0.9 },
  { name: 'Bash',           color: '#10B981', cat: 'lang',      size: 1.0 },
]

function spherePoint(i, total, radius) {
  const phi   = Math.acos(1 - (2 * (i + 0.5)) / total)
  const theta = Math.PI * (1 + Math.sqrt(5)) * i
  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi),
  ]
}

function SkillTag({ position, skill, floatSpeed }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Float speed={floatSpeed} rotationIntensity={0.3} floatIntensity={0.4}>
      <Html position={position} center transform occlude={false}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            padding: hovered ? '5px 14px' : '3px 10px',
            fontSize: `${skill.size * 11}px`,
            fontFamily: 'var(--mono)',
            fontWeight: hovered ? 600 : 400,
            color: hovered ? '#000' : skill.color,
            background: hovered ? skill.color : `${skill.color}18`,
            border: `1px solid ${skill.color}55`,
            borderRadius: 4,
            whiteSpace: 'nowrap',
            cursor: 'default',
            transition: 'all 0.2s ease',
            userSelect: 'none',
            transform: hovered ? 'scale(1.15)' : 'scale(1)',
            boxShadow: hovered ? `0 0 20px ${skill.color}66` : 'none',
            backdropFilter: 'blur(6px)',
          }}
        >
          {skill.name}
        </div>
      </Html>
    </Float>
  )
}

function Sphere3D() {
  const ref = useRef()
  useFrame(s => { if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.04 })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[4.2, 18, 18]} />
      <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.03} />
    </mesh>
  )
}

export default function SkillsCloud() {
  const positions = skillData.map((_, i) => spherePoint(i, skillData.length, 3.8))
  return (
    <div style={{ width: '100%', height: 440, borderRadius: 8, overflow: 'hidden', position: 'relative', background: 'rgba(0,229,255,0.02)', border: '1px solid rgba(0,229,255,0.06)' }}>
      <Canvas camera={{ position: [0, 0, 9], fov: 52 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>
          <Sphere3D />
          {skillData.map((skill, i) => (
            <SkillTag key={skill.name} position={positions[i]} skill={skill} floatSpeed={1 + i * 0.04} />
          ))}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} enablePan={false} />
        </Suspense>
      </Canvas>
      <div style={{ position: 'absolute', bottom: 12, right: 16, fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'rgba(0,229,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', pointerEvents: 'none' }}>
        drag to explore ↻
      </div>
    </div>
  )
}
