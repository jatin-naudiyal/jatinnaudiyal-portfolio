import React from 'react'
import ParticleCanvas from './components/ParticleCanvas'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import { useScrollReveal } from './hooks/useScrollReveal'
import './index.css'

function App() {
  useScrollReveal();

  return (
    <>
      <ParticleCanvas />
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <footer>
        <p>Designed & Engineered by Jatin Naudiyal | 2026</p>
      </footer>
    </>
  )
}

export default App
