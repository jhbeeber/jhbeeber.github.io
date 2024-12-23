import React, { useEffect } from 'react';
import tamu from './tamu.png';
import Navigation from './Navigation';
import './Education.css';

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    { code: 'CSCE 121', name: 'Program Design and Concepts' },
    { code: 'CSCE 221', name: 'Data Structures and Algorithms' },
    { code: 'CSCE 222', name: 'Discrete Structures for Computing' },
    { code: 'CSCE 310', name: 'Database Systems' },
    { code: 'CSCE 312', name: 'Computer Organization' },
    { code: 'CSCE 402', name: 'Law and Policy in Cybersecurity' },
    { code: 'CSCE 410', name: 'Operating Systems' },
    { code: 'CSCE 411', name: 'Design and Analysis of Algorithms' },
    { code: 'CSCE 412', name: 'Cloud Computing' },
    { code: 'CSCE 420', name: 'Artificial Intelligence' },
    { code: 'CSCE 431', name: 'Software Engineering' },
    { code: 'CSCE 482', name: 'Senior Capstone Design' },
  ];

  return (
    <div>
      <Navigation />
      <main className="education-section">
        <h2>Education</h2>
        <div className="education-container">
          <img src={tamu} alt="Texas A&M University" className="education-image" />
          <div className="education-description">
            <h3>Texas A&M University</h3>
            <p className="degree">B.S. in Computer Science</p>
            <p className="degree">Minor in Business</p>
            <p className="education-details">
              August 2021 - December 2024<br /><br />
              Focused on computer science courses related to operating systems, 
              virtualization, and software/backend engineering. Served as Scrum Leader 
              and Project Manager in project-based courses while maintaining a strong 
              academic performance. Supplemented technical education with business 
              courses in management and marketing principles.
            </p>
          </div>
        </div>

        <div className="courses-section">
          <h3>Relevant Coursework</h3>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="course-card"
                style={{ animationDelay: `${1.5 + (index * 0.1)}s` }}
              >
                <div className="course-code">{course.code}</div>
                <div className="course-description">{course.name}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer />
    </div>
  );
};

export default Education;