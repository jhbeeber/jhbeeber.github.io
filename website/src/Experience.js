import React, { useEffect, useRef } from 'react';
import telus from './telus.png';
import teamup from './teamup.png';
import chuys from './chuys.png';
import Navigation from './Navigation';
import './Experience.css';

const Experience = () => {
  const experienceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('emphasized');
          } else {
            entry.target.classList.remove('emphasized');
          }
        });
      },
      { threshold: 0.5 }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <main>
        <section id="experience">
          <h2>Experience</h2>
          <div className="timeline">
            <div 
              className="timeline-item" 
              ref={(el) => (experienceRefs.current[0] = el)}
              data-date="June 2023 - Present"
            >
              <div className="timeline-content" data-date="June 2023 - Present">
                <h3>TELUS Digital</h3>
                <div className="job-title">Rater (Data Analyst)</div>
                <p>Utilize Google's Rating Guidelines to improve AI model performance and accuracy by analyzing 300+ user queries and responses. Work in a team to assess SCRBs and Data Parsing.</p>
                <img src={telus} alt="Telus" className="experience-image telus" />
              </div>
            </div>
            <div 
              className="timeline-item" 
              ref={(el) => (experienceRefs.current[1] = el)}
              data-date="May 2024 - Aug. 2024"
            >
              <div className="timeline-content" data-date="May 2024 - Aug. 2024">
                <h3>Teamup</h3>
                <div className="job-title">Software Engineering Intern</div>
                <p>Contributed to the development of the ReadWell application by configuring and maintaining MongoDB, developing dynamic user interfaces with NodeJS and React, and integrating AI-driven content generation using Google Gemini API. Improved workflow efficiency and user experience by optimizing role management and simplifying authentication methods. Collaborated with a team to provide high-quality solutions.</p>
                <img src={teamup} alt="TeamUp" className="experience-image teamup" />
              </div>
            </div>
            <div 
              className="timeline-item" 
              ref={(el) => (experienceRefs.current[2] = el)}
              data-date="June 2022 - Aug. 2022"
            >
              <div className="timeline-content" data-date="June 2022 - Aug. 2022">
                <h3>Chuy's</h3>
                <div className="job-title">Host</div>
                <p>Seated over 400 guests everyday into 10 different organized sections. Managed and oversaw waitlist for large parties consisting of 10 or more people. Maintained and counted inventory during closing.</p>
                <img src={chuys} alt="Chuy's" className="experience-image chuys" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default Experience;