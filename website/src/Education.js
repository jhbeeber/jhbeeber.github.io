import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tamu from './tamu.png';

const Education = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

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
    <div>
      <nav className="App-header">
        <ul className="navbar-items">
          <li><Link to="/home" className="navbar-item">Home</Link></li>
          <li><Link to="/education" className="navbar-item">Education</Link></li>
          <li><Link to="/experience" className="navbar-item">Experience</Link></li>
          <li><Link to="/projects" className="navbar-item">Projects</Link></li>
        </ul>
      </nav>
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
        <p>©2024 James Beeber</p>
      </footer>
    </div>
  );
};

export default Education;