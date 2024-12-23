import React, { useEffect } from 'react';
import memoji from './memoji.png';
import { FaInstagram, FaLinkedin, FaGithub, FaCode, FaDatabase, FaServer, FaCamera } from 'react-icons/fa';
import Navigation from './Navigation';
import './Home.css';
import austinCoffee from './austincoffee.jpeg';
import austinWater from './austinwater.jpeg';
import boerne from './boerne.jpeg';
import michiganPath from './michiganpath.jpg';
import colorado from './colorado.jpeg';
import forest from './forest.JPG';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { name: 'Frontend Development', icon: <FaCode />, details: 'React, JavaScript, HTML, CSS' },
    { name: 'Backend Development', icon: <FaServer />, details: 'Node.js, Express, Ruby on Rails, Vapor' },
    { name: 'Database Management', icon: <FaDatabase />, details: 'MongoDB, MySQL, PostgreSQL' }
  ];

  const photos = [
    { url: austinCoffee, title: 'Coffee Shop in Downtown Austin' },
    { url: austinWater, title: 'Colorado River in Austin' },
    { url: boerne, title: 'Dickens on Main in Boerne' },
    { url: michiganPath, title: 'Lighthouse in Michigan' },
    { url: colorado, title: 'Colorado Springs' },
    { url: forest, title: 'Texas Hill Country' }
  ];

  return (
    <div>
      <Navigation />
      <main>
      <section className="hero-section">
        <div className="hero-content">
          <div className="typing-animation">
            <span>James Beeber's Portfolio</span>
          </div>
          <div className="memoji-container">
            <img src={memoji} alt="Memoji" className="memoji" />
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </section>

        <section className="about-section">
          <h2 className="section-title">About Me</h2>
          <div className="intro-container">
            <div className="intro-text">
              <p className="animated-text">
                I am an enthusiastic and recent Computer Science graduate at Texas A&M University. 
                My ability to express myself and my technical skills have driven my passion for 
                creating web applications and configuring databases for backend development. 
                I am always excited to learn and build on my skills in new environments and with new people.
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

        <section className="skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <p>{skill.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="photography-section">
          <h2 className="section-title">
            <FaCamera className="camera-icon" />
            Photography
          </h2>
          <div className="photo-grid">
            {photos.map((photo, index) => (
              <div key={index} className="photo-card">
                <img src={photo.url} alt={photo.title} />
                <div className="photo-overlay">
                  <h3>{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer />
    </div>
  );
};

export default Home;