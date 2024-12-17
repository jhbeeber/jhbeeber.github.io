import React from 'react';
import loadbalancer from './loadbalancer.png';
import maes from './maes.png';
import cava from './cava.png';
import myhealtharc from './myhealtharc.png';
import starspace from './starspace.png';
import Navigation from './Navigation';

const Projects = () => {
  return (
    <div>
      <Navigation />
      <main>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project-container">
            <img src={myhealtharc} alt="myHealthArc" className="project-image myhealtharc" />
            <div className="project-description">
              <p>myHealthArc</p>
              <p>Aug. 2024 - Dec. 2024</p>
              <p className="experience-details">Swift-based iOS application that consolidates multiple health tracking functionalities all into one accessible app. Provides meal management, macro and caloric tracking, recipe generation, metrics from Apple HealthKit, and goals and streaks to encourage healthy practices. Utilizes a Vapor and MongoDB backend with local caching using AppStorage and Swift Keychain. Encrypts and hashes personal information using Bcrypt and SHA256. Validates nutrition information from public databases and excludes outlier macro values using Inter-Quartile Ranges.</p>
            </div>
          </div>
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
      </footer>
    </div>
  );
};

export default Projects;