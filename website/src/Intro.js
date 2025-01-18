import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = (props) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleExploreClick = () => {
    const section = sectionRef.current;
    section.classList.add('fade-out');
    
    props.onNavigate();
    setTimeout(() => {
      navigate('/home');
    }, 500);
  };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dots = [];
    const numDots = window.innerWidth > 768 ? 90 : 50;
    const connectDistance = 150;
    const mouseRadius = 200;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mousePosition.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      };
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

    class Dot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = Math.random() * 3 + 1;
        const orangeIntensity = Math.floor(Math.random() * 55) + 200;
        this.color = `rgba(255, ${orangeIntensity/2}, 0, ${Math.random() * 0.5 + 0.5})`;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.vx = -this.vx;
        if (this.y > canvas.height || this.y < 0) this.vy = -this.vy;
        
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    for (let i = 0; i < numDots; i++) {
      dots.push(new Dot());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        dot.update();
        dot.draw();
      });

      dots.forEach((dot1, i) => {
        dots.slice(i + 1).forEach(dot2 => {
          const dx = dot1.x - dot2.x;
          const dy = dot1.y - dot2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
      
          if (distance < connectDistance) {
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            const opacity = 1 - distance/connectDistance;
            ctx.strokeStyle = `rgba(255, 165, 0, ${opacity * 0.5})`;
            ctx.stroke();
          }
        });
      
        const dxMouse = mousePosition.current.x - dot1.x;
        const dyMouse = mousePosition.current.y - dot1.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      
        if (distanceMouse < mouseRadius) {
          ctx.beginPath();
          ctx.moveTo(dot1.x, dot1.y);
          ctx.lineTo(mousePosition.current.x, mousePosition.current.y);
          const opacity = 1 - distanceMouse/mouseRadius;
          ctx.strokeStyle = `rgba(255, 165, 0, ${opacity * 0.8})`;
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section className="intro-section" ref={sectionRef}>
      <canvas ref={canvasRef} className="intro-canvas"></canvas>
      <div className="intro-content">
        <button className="explore-button" onClick={handleExploreClick}>
          Explore my profile
        </button>
      </div>
    </section>
  );
};

export default Intro;