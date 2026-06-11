/**
 * Jatin Naudiyal - Portfolio Interactions
 */

// --- Intersection Observer for Scroll Reveals ---
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

revealElements.forEach(el => {
  revealOnScroll.observe(el);
});


// --- Terminal Typewriter Effect ---
const terminalBody = document.getElementById('terminal-body');

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

let lineIndex = 0;
let charIndex = 0;
let isTyping = false;

function typeTerminal() {
  if (lineIndex < terminalLines.length) {
    const currentLine = terminalLines[lineIndex];
    
    if (!isTyping) {
      // Create new line element
      const lineDiv = document.createElement('div');
      lineDiv.className = 'typer-line';
      
      if (currentLine.isCommand) {
        lineDiv.innerHTML = '<span class="path">jatin@devops-macbook:~</span><span class="prompt">$</span><span class="text"></span>';
      } else {
        if (currentLine.isSuccess) {
          lineDiv.style.color = '#27C93F';
        }
        lineDiv.innerHTML = '<span class="text"></span>';
      }
      
      // Insert before cursor
      terminalBody.insertBefore(lineDiv, terminalBody.lastElementChild);
      isTyping = true;
    }
    
    const textElements = terminalBody.querySelectorAll('.text');
    const activeTextElement = textElements[textElements.length - 1];

    if (currentLine.isCommand) {
      // Type character by character for commands
      if (charIndex < currentLine.text.length) {
        activeTextElement.innerHTML += currentLine.text.charAt(charIndex);
        charIndex++;
        setTimeout(typeTerminal, 50 + Math.random() * 50); // random typing speed
      } else {
        isTyping = false;
        charIndex = 0;
        lineIndex++;
        setTimeout(typeTerminal, 500); // pause before result
      }
    } else {
      // Print full line immediately for outputs
      activeTextElement.innerHTML = currentLine.text;
      isTyping = false;
      lineIndex++;
      setTimeout(typeTerminal, 300); // pause before next command
    }
  }
}

// Start terminal typing after a short delay
setTimeout(typeTerminal, 1000);


// --- Interactive Network Canvas Background ---
const canvas = document.getElementById('network-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const particleCount = 70; // Adjust for density
const connectionDistance = 150;
const mouse = { x: null, y: null, radius: 150 };

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('mouseout', () => {
  mouse.x = null;
  mouse.y = null;
});

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 1;
    this.vy = (Math.random() - 0.5) * 1;
    this.baseRadius = Math.random() * 2 + 1;
    this.radius = this.baseRadius;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 240, 255, 0.5)'; // Electric Cyan
    ctx.fill();
  }

  update() {
    // Movement
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > width) this.vx = -this.vx;
    if (this.y < 0 || this.y > height) this.vy = -this.vy;

    // Mouse interaction - repel slightly and glow
    if (mouse.x && mouse.y) {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouse.radius) {
        this.radius = this.baseRadius + 2;
        // slight repel
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;
        this.x -= forceDirectionX * force * 2;
        this.y -= forceDirectionY * force * 2;
      } else {
        this.radius = this.baseRadius;
      }
    } else {
      this.radius = this.baseRadius;
    }

    this.draw();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function connectParticles() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      let dx = particles[a].x - particles[b].x;
      let dy = particles[a].y - particles[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < connectionDistance) {
        let opacity = 1 - (distance / connectionDistance);
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.2})`;
        ctx.lineWidth = 1;
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
  }
  connectParticles();
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();


// --- Project Card Tilt Effect ---
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
});
