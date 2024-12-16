import React from 'react';
import memoji from './memoji.png';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav className="App-header">
        <ul className="navbar-items">
          <li><Link to="/home" className="navbar-item">Home</Link></li>
          <li><Link to="/education" className="navbar-item">Education</Link></li>
          <li><Link to="/experience" className="navbar-item">Experience</Link></li>
          <li><Link to="/projects" className="navbar-item">Projects</Link></li>
        </ul>
      </nav>
      <main>
        <section id="home" className="home-section">
          <div className="typing-animation">
            <span>James Beeber's Portfolio</span>
          </div>
          <div className="memoji-container">
            <img src={memoji} alt="Memoji" className="memoji" />
          </div>
          <div className="intro-container">
            <div className="intro-text">
              <p>
                I am an enthusiastic and recent Computer Science graduate at Texas A&M University. My ability to express myself and my technical skills have driven my passion for creating web applications and configuring databases for backend development. I am always excited to learn and build on my skills in new environments and with new people.
              </p>
            </div>
            <div className="social-buttons">
              <a href="https://www.linkedin.com/in/james-beeber" target="_blank" rel="noopener noreferrer" className="social-button">
                <FaLinkedin />
              </a>
              <a href="https://github.com/jhbeeber" target="_blank" rel="noopener noreferrer" className="social-button">
                <FaGithub />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>©2024 James Beeber</p>
      </footer>
    </div>
  );
};

export default Home;