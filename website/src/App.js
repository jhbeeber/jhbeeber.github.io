import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Intro from './Intro';
import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';

function App() {
  const [showContent, setShowContent] = useState(true);
  const location = useLocation();
  const comingFromIntro = useRef(false);

  useEffect(() => {
    if (location.pathname === '/home' && comingFromIntro.current) {
      setShowContent(true);

      setTimeout(() => {
        comingFromIntro.current = false;
      }, 1000);
    }
  }, [location]);

  const handleIntroTransition = () => {
    comingFromIntro.current = true;
    setShowContent(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro onNavigate={handleIntroTransition} />} />
        {showContent && (
          <>
            <Route path="/home" element={
              <div className={comingFromIntro.current ? "fade-in" : ""}>
                <Home />
              </div>
            } />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </>
        )}
      </Routes>
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