import React from 'react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications">
      <h2 className="section-title reveal">Credentials</h2>
      <div className="skills-container">
        
        <div className="skill-category reveal">
          <div className="skill-header">
            <span className="skill-icon">🏆</span>
            <h3 className="skill-title">Google Cloud</h3>
          </div>
          <div className="timeline-body" style={{ paddingTop: 0 }}>
            <ul>
              <li>Generative AI Leader (May 2026)</li>
              <li>Certified DevOps Engineer (Apr 2025)</li>
              <li>Professional Cloud Architect (Oct 2022)</li>
            </ul>
          </div>
        </div>

        <div className="skill-category reveal">
          <div className="skill-header">
            <span className="skill-icon">🏆</span>
            <h3 className="skill-title">HashiCorp & Microsoft</h3>
          </div>
          <div className="timeline-body" style={{ paddingTop: 0 }}>
            <ul>
              <li>Terraform Associate (Oct 2023)</li>
              <li>Azure Fundamentals AZ-900 (Jun 2021)</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
