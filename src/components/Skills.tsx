import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2 className="section-title reveal">Expertise</h2>
      <div className="skills-container">
        
        <div className="skill-category reveal">
          <div className="skill-header">
            <span className="skill-icon">☁️</span>
            <h3 className="skill-title">Cloud Platforms</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">GCP (Architect)</span>
            <span className="skill-tag">Azure</span>
            <span className="skill-tag">AWS</span>
          </div>
        </div>

        <div className="skill-category reveal">
          <div className="skill-header">
            <span className="skill-icon">☸️</span>
            <h3 className="skill-title">Containers & Orchestration</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Kubernetes</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">GKE</span>
            <span className="skill-tag">AKS</span>
            <span className="skill-tag">Helm</span>
          </div>
        </div>

        <div className="skill-category reveal">
          <div className="skill-header">
            <span className="skill-icon">🤖</span>
            <h3 className="skill-title">Agentic AI & GenAI</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">LangGraph</span>
            <span className="skill-tag">Vertex AI</span>
            <span className="skill-tag">Gemini</span>
            <span className="skill-tag">OpenAI APIs</span>
          </div>
        </div>

        <div className="skill-category reveal">
          <div className="skill-header">
            <span className="skill-icon">🏗️</span>
            <h3 className="skill-title">Infrastructure as Code</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Terraform</span>
            <span className="skill-tag">Terragrunt</span>
            <span className="skill-tag">Pulumi</span>
            <span className="skill-tag">Ansible</span>
          </div>
        </div>

        <div className="skill-category reveal">
          <div className="skill-header">
            <span className="skill-icon">⚙️</span>
            <h3 className="skill-title">CI/CD & GitOps</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">GitHub Actions</span>
            <span className="skill-tag">GitLab CI</span>
            <span className="skill-tag">ArgoCD</span>
            <span className="skill-tag">Jenkins</span>
          </div>
        </div>

        <div className="skill-category reveal">
          <div className="skill-header">
            <span className="skill-icon">🔒</span>
            <h3 className="skill-title">DevSecOps & Network</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Cloud Armor</span>
            <span className="skill-tag">Workload Identity</span>
            <span className="skill-tag">Istio</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
