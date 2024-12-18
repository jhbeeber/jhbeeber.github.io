import React, { useState, useEffect } from 'react';
import tamu from './tamu.png';
import Navigation from './Navigation';

const Education = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const courses = [
    { name: 'CSCE 121', description: 'Program Design and Concepts' },
    { name: 'CSCE 221', description: 'Data Structures and Algorithms' },
    { name: 'CSCE 222', description: 'Discrete Structures for Computing' },
    { name: 'CSCE 310', description: 'Database Systems' },
    { name: 'CSCE 312', description: 'Computer Organization' },
    { name: 'CSCE 402', description: 'Law and Policy in Cybersecurity' },
    { name: 'CSCE 410', description: 'Operating Systems' },
    { name: 'CSCE 411', description: 'Design and Analysis of Algorithms' },
    { name: 'CSCE 412', description: 'Cloud Computing' },
    { name: 'CSCE 420', description: 'Artificial Intelligence' },
    { name: 'CSCE 431', description: 'Software Engineering' },
    { name: 'CSCE 482', description: 'Senior Capstone Design' },
    { name: 'ENGL 210', description: 'Technical and Business Writing' },
  ];

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <Navigation />
      <main>
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
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default Education;