import React, { useEffect, useRef } from 'react';

const Projects: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.project-card');
    if (!cards) return;

    cards.forEach((card) => {
      const htmlCard = card as HTMLElement;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = htmlCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        
        htmlCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      };

      const handleMouseLeave = () => {
        htmlCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      };

      htmlCard.addEventListener('mousemove', handleMouseMove);
      htmlCard.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        htmlCard.removeEventListener('mousemove', handleMouseMove);
        htmlCard.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <section id="projects">
      <h2 className="section-title reveal">Key Deployments</h2>
      <div className="projects-grid" ref={cardsRef}>
        
        <div className="project-card reveal">
          <div className="project-header">
            <span className="project-icon">🧠</span>
            <div className="project-links">
              <a href="#">↗</a>
            </div>
          </div>
          <h3 className="project-title">Autonomous Infra Remediation Agent</h3>
          <p className="project-desc">Built an autonomous AI-driven remediation agent that resolves infrastructure incidents without human intervention, achieving a 45% MTTR reduction.</p>
          <div className="project-tech">
            <span>LangGraph</span><span>Gemini</span><span>Kubernetes</span><span>Terraform</span>
          </div>
        </div>

        <div className="project-card reveal">
          <div className="project-header">
            <span className="project-icon">🌐</span>
            <div className="project-links">
              <a href="#">↗</a>
            </div>
          </div>
          <h3 className="project-title">Multi-Region GKE Fleet</h3>
          <p className="project-desc">Architected an active-active multi-region failover Kubernetes fleet using GKE, Anthos Service Mesh, and Istio for zero-downtime microservices.</p>
          <div className="project-tech">
            <span>GKE</span><span>Anthos</span><span>Istio</span><span>Cloud Armor</span>
          </div>
        </div>

        <div className="project-card reveal">
          <div className="project-header">
            <span className="project-icon">⚡</span>
            <div className="project-links">
              <a href="#">↗</a>
            </div>
          </div>
          <h3 className="project-title">LLM-Driven CI/CD Optimizer</h3>
          <p className="project-desc">Engineered an LLM-assisted GitOps pipeline that optimizes deployment steps across 30+ microservices, resulting in a 40% deployment velocity gain.</p>
          <div className="project-tech">
            <span>GitHub Actions</span><span>LangChain</span><span>Vertex AI</span><span>ArgoCD</span>
          </div>
        </div>

        <div className="project-card reveal">
          <div className="project-header">
            <span className="project-icon">🏗️</span>
            <div className="project-links">
              <a href="#">↗</a>
            </div>
          </div>
          <h3 className="project-title">Azure Enterprise Landing Zone</h3>
          <p className="project-desc">Led the migration of 25+ legacy monolithic applications to Azure Kubernetes Service (AKS), implementing Bicep IaC and FinOps dashboards.</p>
          <div className="project-tech">
            <span>AKS</span><span>Azure DevOps</span><span>Bicep</span><span>Key Vault</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
