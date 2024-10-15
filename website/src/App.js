import React, { useState } from 'react';
import './App.css';
import memoji from './memoji.png';
import tamu from './tamu.png'; // Import the image
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [welcomeText, setWelcomeText] = useState("Hello, I'm James Beeber!");

  const handleExploreClick = () => {
    setShowContent(true);
    setWelcomeText("James Beeber's Portfolio");
  };

  const courses = [
    { name: 'CSCE 121', description: 'Program Design and Concepts' },
    { name: 'CSCE 222', description: 'Discrete Structures for Computing' },
    { name: 'CSCE 221', description: 'Data Structures and Algorithms' },
    { name: 'CSCE 310', description: 'Database Systems' },
    { name: 'CSCE 312', description: 'Computer Organization' },
    { name: 'CSCE 411', description: 'Design and Analysis of Algorithms' },
    { name: 'CSCE 410', description: 'Operating Systems' },
    { name: 'CSCE 412', description: 'Cloud Computing' },
    { name: 'CSCE 420', description: 'Artificial Intelligence' },
    { name: 'CSCE 431', description: 'Software Engineering' },
  ];

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
              <li><a href="#experience" className="navbar-item">Experience</a></li>
              <li><a href="#projects" className="navbar-item">Projects</a></li>
            </ul>
          </nav>
          <main>
            <section id="home" className="home-section">
              <div className="typing-animation">
                <span>{welcomeText}</span>
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
              <div className="education-container">
                <img src={tamu} alt="Texas A&M University" className="education-image" />
                <div className="education-description">
                  <p>Texas A&M University (Aug. 2021 - Dec. 2024)</p>
                  <p>BS in Computer Science and Minor in Business</p>
                  <p className="education-details">Here at Texas A&M University, I focused on computer science courses related to operating systems, virtualization, and software/backend engineering. I also served as the Scrum Leader or Project Manager in project-based courses. I have taken a variety of business courses, such as business management and principles of marketing.</p>
                </div>
              </div>
              <div className="courses-dropdown">
                <select onChange={(e) => setHoveredCourse(e.target.value)}>
                  <option value="">Relevant Courses</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course.name}>{course.name}</option>
                  ))}
                </select>
                {hoveredCourse && (
                  <div className="course-description">
                    {courses.find(course => course.name === hoveredCourse)?.description}
                  </div>
                )}
              </div>
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