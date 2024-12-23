import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const handleExploreClick = () => {
    navigate('/home');
  };

  useEffect(() => {
    const section = sectionRef.current;
    const mouseStars = [];
    const numMouseStars = 5;
    
    const createBackgroundStars = () => {
      const numStars = 100;
      
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        section.appendChild(star);
      }
    };

    const createMouseStars = () => {
      for (let i = 0; i < numMouseStars; i++) {
        const star = document.createElement('div');
        star.className = 'mouse-star';
        mouseStars.push(star);
        section.appendChild(star);
      }
    };

    const updateMouseStars = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      mouseStars.forEach((star, index) => {
        const delay = index * 0.05;
        setTimeout(() => {
          star.style.left = `${mouseX}px`;
          star.style.top = `${mouseY}px`;
        }, delay * 1000);
      });
    };

    createBackgroundStars();
    createMouseStars();
    window.addEventListener('mousemove', updateMouseStars);

    return () => {
      window.removeEventListener('mousemove', updateMouseStars);
    };
  }, []);

  return (
    <section className="intro-section" ref={sectionRef}>
      <div className="intro-content">
        <button className="explore-button" onClick={handleExploreClick}>
          Explore my profile
        </button>
      </div>
    </section>
  );
};

export default Intro;