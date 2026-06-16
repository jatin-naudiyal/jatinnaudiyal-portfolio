import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { personal } from '../../data/portfolio';

const navLinks = [
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'Credentials', target: 'credentials' },
  { label: 'Contact', target: 'contact' },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'credentials', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 group"
          aria-label="Go to top"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Terminal size={14} className="text-bg-deep" />
          </div>
          <span className="font-mono text-sm font-600 text-text-base tracking-wider group-hover:text-primary transition-colors">
            JN
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.target}>
              <button
                onClick={() => scrollTo(link.target)}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md ${
                  active === link.target
                    ? 'text-primary'
                    : 'text-text-muted hover:text-text-base'
                }`}
                id={`nl-${link.target}`}
              >
                {active === link.target && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-primary/10 rounded-md border border-primary/20"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="btn-primary text-xs px-4 py-2"
            id="nav-cta"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-base transition-colors"
          id="ham"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="nav-links"
            className="md:hidden nav-glass border-t border-surface-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.target}
                  onClick={() => { scrollTo(link.target); setMenuOpen(false); }}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active === link.target
                      ? 'text-primary bg-primary/10'
                      : 'text-text-muted hover:text-text-base hover:bg-surface'
                  }`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={`mailto:${personal.email}`}
                className="mt-3 btn-primary text-center text-sm"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
