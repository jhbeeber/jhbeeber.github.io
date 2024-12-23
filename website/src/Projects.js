import React, { useEffect } from 'react';
import loadbalancer from './loadbalancer.png';
import maes from './maes.png';
import cava from './cava.png';
import myhealtharc from './myhealtharc.png';
import starspace from './starspace.png';
import Navigation from './Navigation';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "myHealthArc",
      date: "Aug. 2024 - Dec. 2024",
      image: myhealtharc,
      description: "Swift-based iOS application that consolidates multiple health tracking functionalities all into one accessible app. Provides meal management, macro and caloric tracking, recipe generation, metrics from Apple HealthKit, and goals and streaks to encourage healthy practices. Utilizes a Vapor and MongoDB backend with local caching using AppStorage and Swift Keychain. Encrypts and hashes personal information using Bcrypt and SHA256. Validates nutrition information from public databases and excludes outlier macro values using Inter-Quartile Ranges.",
      techStack: ["Swift", "Vapor", "MongoDB", "Xcode", "VMWare", "NoSQL"]
    },
    {
      title: "Load Balancer",
      date: "June 2024",
      image: loadbalancer,
      description: "Generates random IP addresses at random clock cycles and distributes network traffic across a user-inputted number of web servers using threads and locks. This program is interactive within the terminal/console.",
      techStack: ["C++", "Multithreading", "Locks"]
    },
    {
      title: "Maes Web App",
      date: "Feb. 2024 - May 2024",
      image: maes,
      description: "Responsive merchandise website for the MAES student organization that can be used on mobile devices through the web browser or by downloading it as a web app. Allows members to track their points, purchase merchandise, and view upcoming events.",
      techStack: ["Ruby on Rails", "Heroku", "CI/CD", "Brakeman", "Google OAuth", "RSpec", "MySQL"]
    },
    {
      title: "Cava Website",
      date: "Oct. 2023 - Dec. 2023",
      image: cava,
      description: "Engineering a fully responsive website with a small team for the local Cava franchise using Bootstrap. This website can be utilized by customers to order from the dynamic menu or used by employees and managers as a Point of Sales system.",
      techStack: ["Bootstrap", "HTML/CSS", "JavaScript", "PostgreSQL"]
    },
    {
      title: "StarSpace",
      date: "Jan. 2022",
      image: starspace,
      description: "Galaxy simulator that was a group project for the Spring 2022 TAMUHack. This simulator utilized Unity, C# scripts, and nodes in order to distribute 1000+ stars around a black hole.",
      techStack: ["Unity", "C#"]
    }
  ];

  return (
    <div>
      <Navigation />
      <main>
        <section id="projects">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div className="project-container" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-description">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-date">{project.date}</p>
                <p className="project-details">{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer />
    </div>
  );
};

export default Projects;