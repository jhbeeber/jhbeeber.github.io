import React, { useState } from 'react';
import './App.css';
import memoji from './memoji.png';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleExploreClick = () => {
    setShowContent(true);
  };

  return (
    <div className="App">
      {!showContent ? (
        <section className="intro-section">
          <div className="intro-content">
            <div className="typing-animation">
              <span>Hello, I'm James Beeber!</span>
            </div>
            <div className="memoji-container">
              <img src={memoji} alt="Memoji" className="memoji" />
            </div>
          </div>
          <button className="explore-button" onClick={handleExploreClick}>
            Explore my profile
          </button>
        </section>
      ) : (
        <div className="fade-in">
          <nav className="App-header">
            <ul className="navbar-items">
              <li><a href="#home" className="navbar-item">Home</a></li>
              <li><a href="#education" className="navbar-item">Education</a></li>
              <li><a href="#skills" className="navbar-item">Skills</a></li>
              <li><a href="#experience" className="navbar-item">Experience</a></li>
              <li><a href="#projects" className="navbar-item">Projects</a></li>
            </ul>
          </nav>
          <main>
            <section id="home" className="home-section">
              <div className="typing-animation">
                <span>Hello, I'm James Beeber!</span>
              </div>
              <div className="memoji-container">
                <img src={memoji} alt="Memoji" className="memoji" />
              </div>
              <div className="intro-container">
                <div className="intro-text">
                  <p>
                    I am an enthusiastic Computer Science major at Texas A&M University. My ability to express myself and my technical skills have driven my passion for creating web applications and configuring databases for backend development. I am always excited to learn and build on my skills in new environments and with new people.
                  </p>
                </div>
                <div className="social-buttons">
                    <a href="https://www.instagram.com/james_beeber/" target="_blank" rel="noopener noreferrer" className="social-button">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/james-beeber" target="_blank" rel="noopener noreferrer" className="social-button">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/jhbeeber" target="_blank" rel="noopener noreferrer" className="social-button">
                      <FaGithub />
                    </a>
                  </div>
                </div>
            </section>
            <section id="education">
              <h2>Education</h2>
              <p>Education Stuff</p>
            </section>
            <section id="skills">
              <h2>Skills</h2>
              <p>Skill Stuff</p>
            </section>
            <section id="experience">
              <h2>Experience</h2>
              <p>Work Stuff</p>
            </section>
            <section id="projects">
              <h2>Projects</h2>
              <p>Project Stuff</p>
            </section>
          </main>
          <footer>
            <p>©2024 James Beeber</p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;