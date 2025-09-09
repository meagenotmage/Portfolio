import React from 'react';
import { FaGraduationCap, FaUser, FaHeart, FaGamepad, FaPlane, FaBicycle, FaCamera, FaFilm, FaPuzzlePiece, FaStar } from 'react-icons/fa';
import './About.css';

const About = () => {
  const personalityTraits = [
    { icon: <FaUser />, trait: 'Carefree', description: 'I approach life with a relaxed attitude' },
    { icon: <FaHeart />, trait: 'Happy Go Lucky', description: 'Always looking on the bright side' },
    { icon: <FaStar />, trait: 'Go with the Flow', description: 'Adaptable to any situation' },
    { icon: <FaPuzzlePiece />, trait: 'Planner', description: 'I love organizing and structuring things' },
    { icon: <FaHeart />, trait: 'Smiley', description: 'Spreading positivity wherever I go' },
    { icon: <FaStar />, trait: 'Organized & Clean', description: 'Everything has its place' }
  ];

  const hobbies = [
    { icon: <FaGamepad />, hobby: 'Gaming', description: 'Exploring virtual worlds and strategic challenges' },
    { icon: <FaPlane />, hobby: 'Travelling', description: 'Discovering new places and cultures' },
    { icon: <FaBicycle />, hobby: 'Cycling', description: 'Adventures on two wheels' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know the person behind the code - my journey, personality, and what drives me
        </p>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3><FaUser className="section-icon" /> Hello! I'm a passionate BSCS student</h3>
              <p>
                Currently in my 3rd year at <strong>West Visayas State University</strong>, 
                pursuing a Bachelor of Science in Computer Science. I'm someone who believes 
                in balancing hard work with a carefree spirit - planning my goals while staying 
                flexible enough to embrace new opportunities that come my way.
              </p>
              <p>
                My journey in tech started with curiosity and has grown into a genuine passion 
                for creating digital solutions. Whether I'm coding a new project, capturing 
                moments through my camera lens, or editing videos, I bring the same organized 
                yet creative approach to everything I do.
              </p>
            </div>

            <div className="education-info">
              <h4><FaGraduationCap className="section-icon" /> Education</h4>
              <div className="education-card">
                <div className="education-content">
                  <h5>Bachelor of Science in Computer Science</h5>
                  <p className="university">West Visayas State University</p>
                  <p className="year">3rd Year Student (2022-2026)</p>
                  <p className="section">Section: 3A</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="personality-grid">
              <h4><FaStar className="section-icon" /> My Personality</h4>
              <div className="traits-container">
                {personalityTraits.map((trait, index) => (
                  <div key={index} className="trait-card" style={{'--delay': `${index * 0.1}s`}}>
                    <div className="trait-icon">{trait.icon}</div>
                    <h5>{trait.trait}</h5>
                    <p>{trait.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hobbies-section">
          <h4><FaHeart className="section-icon" /> When I'm Not Coding</h4>
          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby-card" style={{'--delay': `${index * 0.2}s`}}>
                <div className="hobby-icon">{hobby.icon}</div>
                <h5>{hobby.hobby}</h5>
                <p>{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fun-facts">
          <h4><FaStar className="section-icon" /> Fun Facts About Me</h4>
          <div className="facts-grid">
            <div className="fact-item">
              <FaCamera className="fact-icon" />
              <p>I capture life through photography and bring stories to life through video editing</p>
            </div>
            <div className="fact-item">
              <FaPuzzlePiece className="fact-icon" />
              <p>I love solving problems - whether it's debugging code or planning my next adventure</p>
            </div>
            <div className="fact-item">
              <FaStar className="fact-icon" />
              <p>My motto: Stay organized, keep smiling, and always be ready for the next opportunity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
