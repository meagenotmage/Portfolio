import React, { useEffect, useState } from 'react';
import { FaHandPaper, FaCode, FaCamera, FaGamepad, FaBicycle, FaPlane, FaRocket, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'BSCS Student',
    'Web Developer',
    'Photographer',
    'Video Editor',
    'Future Software Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">
              <FaHandPaper className="wave-icon" />
              <span>Hey there! I'm</span>
            </div>
            
            <h1 className="hero-name">
              Meage Sionosa
            </h1>
            
            <div className="hero-role">
              <span>I'm a </span>
              <span className="role-text">{roles[currentRole]}</span>
            </div>
            
            <p className="hero-description">
              A passionate and organized BSCS 3A student at West Visayas State University 
              with a carefree spirit and go-with-the-flow attitude. I love creating digital 
              experiences, capturing moments through photography, and always planning my next adventure!
            </p>
            
            <div className="hero-buttons">
              <button onClick={scrollToProjects} className="btn btn-primary">
                <FaRocket className="btn-icon" />
                View My Work
              </button>
              <button onClick={scrollToContact} className="btn btn-outline">
                <FaEnvelope className="btn-icon" />
                Get In Touch
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">3rd</span>
                <span className="stat-label">Year BSCS</span>
              </div>
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Passion</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <div className="profile-image-wrapper">
                <img 
                  src={`${process.env.PUBLIC_URL}/logo.png`} 
                  alt="Meage Sionosa - Portfolio Profile"
                  className="profile-image"
                  onLoad={(e) => {
                    console.log('Image loaded successfully:', e.target.src);
                  }}
                  onError={(e) => {
                    console.log('Image failed to load:', e.target.src);
                    console.error('Image error details:', e);
                    // Try fallback with different path
                    if (e.target.src !== '/logo.png') {
                      e.target.src = '/logo.png';
                      return;
                    }
                    // Fallback to icon if image fails to load
                    e.target.style.display = 'none';
                    const fallback = e.target.nextSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="profile-circle fallback-icon" style={{display: 'none'}}>
                  <div className="inner-circle">
                    <FaCode className="profile-icon-fallback" />
                  </div>
                </div>
              </div>
              <div className="floating-icons">
                <div className="icon-item" style={{'--delay': '0s'}}><FaCode /></div>
                <div className="icon-item" style={{'--delay': '0.5s'}}><FaCamera /></div>
                <div className="icon-item" style={{'--delay': '1s'}}><FaGamepad /></div>
                <div className="icon-item" style={{'--delay': '1.5s'}}><FaBicycle /></div>
                <div className="icon-item" style={{'--delay': '2s'}}><FaPlane /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
