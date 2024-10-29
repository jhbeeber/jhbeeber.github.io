import React, { useState } from 'react';
import './App.css';
import memoji from './memoji.png';
import tamu from './tamu.png';
import telus from './telus.png';
import teamup from './teamup.png';
import chuys from './chuys.png';
import loadbalancer from './loadbalancer.png';
import maes from './maes.png';
import cava from './cava.png';
import starspace from './starspace.png';
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
                  <p>B.S. in Computer Science and Minor in Business</p>
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
              <div className="experience-container">
                <div className="experience-description">
                  <p>Telus Digital (June 2023 - Present)</p>
                  <p>US Rater</p>
                  <p className="experience-details">Utilize Google's Rating Guidelines to improve AI model performance and accuracy by analyzing 300+ user queries and responses. Work in a team to assess SCRBs and Data Parsing.</p>
                </div>
                <img src={telus} alt="Telus" className="experience-image telus" />
              </div>
              <div className="experience-container">
                <div className="experience-description">
                  <p>Teamup (May 2024 - Aug. 2024)</p>
                  <p>Software Engineering Intern</p>
                  <p className="experience-details">Contributed to the development of the ReadWell application by configuring and maintaining MongoDB, developing dynamic user interfaces with NodeJS and React, and integrating AI-driven content generation using Google Gemini API. Improved workflow efficiency and user experience by optimizing role management and simplifying authentication methods. Collaborated with a team to provide high-quality solutions.</p>
                </div>
                <img src={teamup} alt="TeamUp" className="experience-image teamup" />
              </div>
              <div className="experience-container">
                <div className="experience-description">
                  <p>Chuy's (June 2022 - Aug. 2022)</p>
                  <p>Host</p>
                  <p className="experience-details">Seated over 400 guests everyday into 10 different organized sections. Managed and oversaw waitlist for large parties consisting of 10 or more people. Maintained and counted inventory during closing.</p>
                </div>
                <img src={chuys} alt="Chuy's" className="experience-image chuys" />
              </div>
            </section>
            <section id="projects">
              <h2>Projects</h2>
              <div className="project-container">
                <img src={loadbalancer} alt="Load Balancer" className="project-image loadbalancer" />
                <div className="project-description">
                  <p>Load Balancer</p>
                  <p>June 2024</p>
                  <p className="experience-details">Generates random IP addresses at random clock cycles and distributes network traffic across a user-inputted number of web servers using threads and locks. It notifies the user when a web request is added to the queue, when a server begins processing the request, and when the server has finished processing the request. Completed using C++ and is interactive within the terminal.</p>
                </div>
              </div>
              <div className="project-container">
                <img src={maes} alt="MAES" className="project-image maes" />
                <div className="project-description">
                  <p>Maes Web App</p>
                  <p>Feb. 2024 - May 2024</p>
                  <p className="experience-details">Responsive merchandise website for the MAES student organization that can be used on mobile devices through the web browser or by downloading it as a web app. It uses Ruby on Rails and is hosted on Heroku through CI/CD. It is also secured using Brakeman, Google OAuth, and RSpec. Was developed in a team that used Agile Methodologies and Jira to plan.</p>
                </div>
              </div>
              <div className="project-container">
                <img src={cava} alt="CAVA" className="project-image cava" />
                <div className="project-description">
                  <p>Cava Website</p>
                  <p>Oct. 2023 - Dec. 2023</p>
                  <p className="experience-details">Engineering a fully responsive website with a small team for the local Cava franchise using Bootstrap. This website can be utilized by customers to order from the dynamic menu or used by employees and managers as a Point of Sales system. The website is fully accessible, has screen reading compatibility, and has built-in Google Translate.</p>
                </div>
              </div>
              <div className="project-container">
                <img src={starspace} alt="Star Space" className="project-image starspace" />
                <div className="project-description">
                  <p>StarSpace</p>
                  <p>Jan. 2022</p>
                  <p className="experience-details">Galaxy simulator that was a group project for the Spring 2022 TAMUHack. This simulator utilized Unity, C# scripts, and nodes in order to distribute 1000+ stars around a black hole. Through the two days, the group collaborated and submitted a product that was playable and allowed for an interactive experience for the user.</p>
                </div>
              </div>
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