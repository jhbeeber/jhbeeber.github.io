import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/home');
  };

  return (
    <section className="intro-section">
      <div className="intro-content">
        <div className="typing-animation">
          <span>Hello, I'm James Beeber!</span>
        </div>
      </div>
      <button className="explore-button" onClick={handleExploreClick}>
        Explore my profile
      </button>
    </section>
  );
};

export default Intro;