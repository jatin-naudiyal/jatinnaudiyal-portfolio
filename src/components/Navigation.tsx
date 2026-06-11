import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav>
      <a href="#" className="logo"><span>&gt;</span> Jatin Naudiyal</a>
      <ul className="nav-links">
        <li><a href="#about">01. About</a></li>
        <li><a href="#skills">02. Skills</a></li>
        <li><a href="#projects">03. Projects</a></li>
        <li><a href="#experience">04. Experience</a></li>
        <li><a href="#contact">05. Contact</a></li>
      </ul>
      <a href="mailto:iamjatinnaudiyal@gmail.com" className="btn primary">Connect</a>
    </nav>
  );
};

export default Navigation;
