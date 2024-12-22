import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="App-header">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <ul className={`navbar-items ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/home" className="navbar-item">Home</Link></li>
        <li><Link to="/education" className="navbar-item">Education</Link></li>
        <li><Link to="/experience" className="navbar-item">Experience</Link></li>
        <li><Link to="/projects" className="navbar-item">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;