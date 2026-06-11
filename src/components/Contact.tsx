import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section reveal">
      <h2 className="section-title" style={{ justifyContent: 'center' }}>Initiate Connection</h2>
      <p className="contact-desc">
        Whether you have a question, a freelance inquiry, or want to discuss enterprise cloud architectures and Agentic AI DevOps, my inbox is always open.
      </p>
      <a href="mailto:iamjatinnaudiyal@gmail.com" className="btn primary" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>Say Hello -&gt;</a>
    </section>
  );
};

export default Contact;
