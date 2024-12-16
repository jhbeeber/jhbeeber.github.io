import React from 'react';
import telus from './telus.png';
import teamup from './teamup.png';
import chuys from './chuys.png';
import Navigation from './Navigation';

const Experience = () => {
  return (
    <div>
      <Navigation />
      <main>
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
      </main>
      <footer>
        <p>©2024 James Beeber</p>
      </footer>
    </div>
  );
};

export default Experience;