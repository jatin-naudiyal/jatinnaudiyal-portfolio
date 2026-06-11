import React, { useEffect, useRef, useState } from 'react';

const terminalLines = [
  { text: "whoami", isCommand: true },
  { text: "Jatin Naudiyal - Senior Cloud & DevOps Engineer", isCommand: false },
  { text: "cat skills.txt", isCommand: true },
  { text: "['GCP', 'Azure', 'Kubernetes', 'Agentic AI', 'Terraform', 'CI/CD']", isCommand: false },
  { text: "./deploy_infrastructure.sh --env=production", isCommand: true },
  { text: "[*] Initializing Terraform state...", isCommand: false },
  { text: "[*] Provisioning GKE clusters in us-central1 and europe-west1...", isCommand: false },
  { text: "[*] Configuring Anthos Service Mesh...", isCommand: false },
  { text: "[+] Infrastructure deployed successfully in 4.2s.", isCommand: false, isSuccess: true }
];

const Hero: React.FC = () => {
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const [typedLines, setTypedLines] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let isTyping = false;
    let currentLines: JSX.Element[] = [];

    let timerId: NodeJS.Timeout;

    const typeTerminal = () => {
      if (lineIndex < terminalLines.length) {
        const currentLine = terminalLines[lineIndex];

        if (!isTyping) {
          if (currentLine.isCommand) {
            currentLines.push(
              <div key={lineIndex} className="typer-line">
                <span className="path">jatin@devops-macbook:~</span><span className="prompt">$</span>
                <span className={`text text-${lineIndex}`}></span>
              </div>
            );
          } else {
            currentLines.push(
              <div key={lineIndex} className="typer-line" style={currentLine.isSuccess ? { color: '#27C93F' } : {}}>
                <span className={`text text-${lineIndex}`}></span>
              </div>
            );
          }
          setTypedLines([...currentLines]);
          isTyping = true;
        }

        setTimeout(() => {
          if (!terminalBodyRef.current) return;
          const textElement = terminalBodyRef.current.querySelector(`.text-${lineIndex}`);
          if (!textElement) return;

          if (currentLine.isCommand) {
            if (charIndex < currentLine.text.length) {
              textElement.innerHTML += currentLine.text.charAt(charIndex);
              charIndex++;
              timerId = setTimeout(typeTerminal, 50 + Math.random() * 50);
            } else {
              isTyping = false;
              charIndex = 0;
              lineIndex++;
              timerId = setTimeout(typeTerminal, 500);
            }
          } else {
            textElement.innerHTML = currentLine.text;
            isTyping = false;
            lineIndex++;
            timerId = setTimeout(typeTerminal, 300);
          }
        }, 0);
      }
    };

    timerId = setTimeout(typeTerminal, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content reveal">
        <span className="greeting">sysadmin@cloudsufi:~$ ./greet.sh</span>
        <h1>Jatin Naudiyal.</h1>
        <h2>I automate cloud infrastructure.</h2>
        <p className="hero-desc">
          I'm a Senior Cloud & DevOps Engineer with 5+ years of experience architecting and managing production-grade infrastructure on GCP and Azure. I specialize in Agentic AI-powered DevOps, Kubernetes orchestration, and enterprise CI/CD.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn primary">Hire Me</a>
        </div>
      </div>
      
      <div className="terminal-container reveal">
        <div className="terminal-header">
          <div className="terminal-dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="terminal-title">bash - jatin@devops-macbook:~</div>
        </div>
        <div className="terminal-body" ref={terminalBodyRef}>
          {typedLines}
          <span className="cursor"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
