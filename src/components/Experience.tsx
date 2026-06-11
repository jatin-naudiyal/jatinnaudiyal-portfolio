import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h2 className="section-title reveal">Career Log</h2>
      <div className="timeline">
        
        <div className="timeline-item reveal">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <div className="timeline-title">
                <h3>Software Engineer III - Cloud & DevOps</h3>
                <h4>Cloudsufi</h4>
              </div>
              <span className="timeline-date">Mar 2021 – Present</span>
            </div>
            <div className="timeline-body">
              <ul>
                <li>Architecting and managing enterprise cloud infrastructure on GCP and Azure.</li>
                <li>Implementing Agentic AI-powered self-healing infrastructure using LangGraph & Gemini.</li>
                <li>Designing Medallion data architectures processing 10TB+ daily with sub-second latency via BigQuery and Dataflow.</li>
                <li>Managing multi-region GKE fleets with Anthos Service Mesh.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="timeline-item reveal">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <div className="timeline-title">
                <h3>Master of Computer Applications (MCA)</h3>
                <h4>GGSIPU, Delhi</h4>
              </div>
              <span className="timeline-date">Aug 2017 – Jul 2020</span>
            </div>
          </div>
        </div>

        <div className="timeline-item reveal">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <div className="timeline-title">
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <h4>GGSIPU, Delhi</h4>
              </div>
              <span className="timeline-date">Aug 2014 – Jul 2017</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
