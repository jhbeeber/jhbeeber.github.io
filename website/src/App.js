import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import memoji from './memoji.png';
import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [welcomeText, setWelcomeText] = useState("Hello, I'm James Beeber!");
  const navigate = useNavigate();

  const handleExploreClick = () => {
    setShowContent(true);
    setWelcomeText("James Beeber's Portfolio");
    navigate('/home');
  };

  return (
    <div className="App">
      {!showContent ? (
        <section className="intro-section">
          <div className="intro-content">
            <div className="typing-animation">
              <span>{welcomeText}</span>
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
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  );
}