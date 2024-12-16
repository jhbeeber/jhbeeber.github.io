import React from 'react';
import memoji from './memoji.png';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Navigation from './Navigation';

const Home = () => {
  return (
    <div>
      <Navigation />
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
      </footer>
    </div>
  );
};

export default Home;