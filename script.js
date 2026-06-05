/* ════════════════════════════════════════════════════════
   JATIN NAUDIYAL — script.js
   Snap scroll engine + stagger animations
   ════════════════════════════════════════════════════════ */

// ─── SNAP SCROLL ENGINE ──────────────────────────────────
const snapRoot    = document.getElementById('snap-root');
const panels      = Array.from(document.querySelectorAll('.panel'));
const dotItems    = Array.from(document.querySelectorAll('.dot-item'));
const navBtns     = Array.from(document.querySelectorAll('.nl'));
const cntCur      = document.getElementById('cnt-cur');
const scrollHint  = document.getElementById('scroll-hint');

const TOTAL = panels.length;
let current = -1;

/**
 * Activate panel by index — stagger .fe elements, update nav
 */
function activatePanel(idx) {
  if (idx === current) return;

  // Deactivate old
  if (current >= 0) {
    panels[current].classList.remove('active');
    panels[current].querySelectorAll('.fe').forEach(el => {
      el.style.transitionDelay = '0s';
    });
  }

  current = idx;
  const panel = panels[idx];

  // Stagger entrance
  panel.querySelectorAll('.fe').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.07}s`;
  });
  panel.classList.add('active');

  // Dot nav
  dotItems.forEach((d, i) => d.classList.toggle('active', i === idx));

  // Top nav links
  navBtns.forEach(b => {
    b.classList.toggle('active', b.dataset.target === panel.id);
  });

  // Counter
  if (cntCur) cntCur.textContent = String(idx + 1).padStart(2, '0');

  // Scroll hint
  if (scrollHint) scrollHint.classList.toggle('gone', idx > 0);
}

// IntersectionObserver to detect which panel is in view
const io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        const idx = panels.indexOf(entry.target);
        if (idx !== -1) activatePanel(idx);
      }
    });
  },
  { root: snapRoot, threshold: 0.5 }
);
panels.forEach(p => io.observe(p));

// ─── DOT NAV CLICKS ─────────────────────────────────────
dotItems.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    panels[i].scrollIntoView({ behavior: 'smooth' });
  });
});

// ─── TOP NAV BUTTON CLICKS ──────────────────────────────
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu
    document.getElementById('nav-links')?.classList.remove('open');
    resetHam();
  });
});

// ─── HERO CTA BUTTONS ───────────────────────────────────
document.getElementById('h-proj-btn')?.addEventListener('click', () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('h-con-btn')?.addEventListener('click', () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
});

// ─── HAMBURGER ──────────────────────────────────────────
function resetHam() {
  const spans = document.querySelectorAll('.ham span');
  spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}

(function initHam() {
  const btn  = document.getElementById('ham');
  const menu = document.getElementById('nav-links');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    const spans = btn.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
})();

// ─── KEYBOARD NAVIGATION ─────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown') {
    e.preventDefault();
    panels[Math.min(current + 1, TOTAL - 1)]?.scrollIntoView({ behavior: 'smooth' });
  }
  if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    panels[Math.max(current - 1, 0)]?.scrollIntoView({ behavior: 'smooth' });
  }
});

// ─── PROJECT CARD SUBTLE TILT ────────────────────────────
document.querySelectorAll('.pc').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-3px)`;
    card.style.borderColor = 'rgba(200,162,86,0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.borderColor = '';
    card.style.transition = 'transform 0.5s ease, border-color 0.3s';
    setTimeout(() => card.style.transition = '', 500);
  });
});

// ─── HERO BADGE FLOAT ANIMATION ──────────────────────────
(function initFloat() {
  const cards = document.querySelectorAll('.hbs-card');
  cards.forEach((c, i) => {
    c.style.animation = `float-badge 5s ease-in-out ${i * 1.2}s infinite`;
  });
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float-badge {
      0%,100% { transform: translateY(0); }
      50%      { transform: translateY(-6px); }
    }
  `;
  document.head.appendChild(style);
})();

// ─── INITIAL ACTIVATION ──────────────────────────────────
setTimeout(() => activatePanel(0), 100);
