import React from 'react';
import { FaGraduationCap, FaUser, FaHeart, FaGamepad, FaPlane, FaBicycle, FaCamera, FaPuzzlePiece, FaStar } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
  const [introRef, introVisible] = useScrollAnimation({ threshold: 0.2, delay: 200, triggerOnce: false });
  const [educationRef, educationVisible] = useScrollAnimation({ threshold: 0.2, delay: 400, triggerOnce: false });
  const [personalityRef, personalityVisible] = useScrollAnimation({ threshold: 0.1, delay: 600, triggerOnce: false });
  const [hobbiesRef, hobbiesVisible] = useScrollAnimation({ threshold: 0.3, delay: 800, triggerOnce: false });
  const [uniqueRef, uniqueVisible] = useScrollAnimation({ threshold: 0.1, delay: 1000, triggerOnce: false });

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
        <div ref={titleRef} className={`slide-up ${titleVisible ? 'visible' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Discover my journey, personality, and passion for technology
          </p>
        </div>

        <div className="about-content">
          <div ref={introRef} className={`about-text slide-up ${introVisible ? 'visible' : ''}`}>
            <div className="about-intro">
              <h3><FaUser className="section-icon" /> Who I Am</h3>
              <p className="intro-highlight">
                A passionate Computer Science student with a perfect blend of technical skills and creative vision.
              </p>
              <p>
                Currently in my 3rd year at <strong>West Visayas State University</strong>, 
                I'm pursuing my Bachelor's degree in Computer Science with enthusiasm and dedication. 
                What sets me apart is my unique approach to life - I believe in maintaining an organized, 
                goal-oriented mindset while staying flexible and open to new opportunities.
              </p>
              <p>
                My journey in technology began with curiosity and has evolved into a genuine passion 
                for creating meaningful digital solutions. Whether I'm developing applications, 
                capturing moments through photography, or editing compelling videos, I approach 
                every project with the same level of creativity and attention to detail.
              </p>
            </div>
          </div>

          <div className="about-visual">
            <div ref={personalityRef} className={`personality-grid slide-up ${personalityVisible ? 'visible' : ''}`}>
              <h4><FaStar className="section-icon" /> Personal Qualities</h4>
              <p className="personality-intro">
                The unique traits that define who I am and how I approach challenges
              </p>
              <div className="traits-container">
                {personalityTraits.map((trait, index) => (
                  <div 
                    key={index} 
                    className={`trait-card slide-up stagger-animation ${personalityVisible ? 'visible' : ''}`}
                    style={{'--animation-delay': `${index * 0.1}s`}}
                  >
                    <div className="trait-icon">{trait.icon}</div>
                    <h5>{trait.trait}</h5>
                    <p>{trait.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section - Full Width */}
        <div ref={educationRef} className={`education-section slide-up ${educationVisible ? 'visible' : ''}`}>
          <h3><FaGraduationCap className="section-icon" /> Academic Background</h3>
          <div className="education-card">
            <div className="education-header">
              <div className="degree-icon">
                <FaGraduationCap />
              </div>
              <div className="education-details">
                <h5>Bachelor of Science in Computer Science</h5>
                <p className="university">West Visayas State University</p>
              </div>
            </div>
            <div className="education-meta">
              <div className="meta-item">
                <span className="meta-label">Current Level</span>
                <span className="meta-value">3rd Year</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Section</span>
                <span className="meta-value">3A</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Academic Period</span>
                <span className="meta-value">2022 - 2026</span>
              </div>
            </div>
            <div className="education-progress">
              <div className="progress-label">Academic Journey Progress</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{'--progress': '75%'}}></div>
              </div>
              <span className="progress-text">75% Complete</span>
            </div>
          </div>
        </div>

        <div ref={hobbiesRef} className={`hobbies-section slide-up ${hobbiesVisible ? 'visible' : ''}`}>
          <h3><span className="section-icon" /> Beyond the Code</h3>
          <p className="hobbies-intro">
            When I'm not immersed in programming, these activities fuel my creativity and keep me balanced
          </p>
          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => (
              <div 
                key={index} 
                className={`hobby-card slide-up stagger-animation ${hobbiesVisible ? 'visible' : ''}`}
                style={{'--animation-delay': `${index * 0.2}s`}}
              >
                <div className="hobby-icon">{hobby.icon}</div>
                <h5>{hobby.hobby}</h5>
                <p>{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={uniqueRef} className={`fun-facts slide-up ${uniqueVisible ? 'visible' : ''}`} style={{'--animation-delay': '0.2s'}}>
          <h3><FaStar className="section-icon" /> What Makes Me Unique</h3>
          <p className="facts-intro">
            A few interesting things that showcase my diverse interests and approach to life
          </p>
          <div className="facts-grid">
            <div className="fact-item">
              <FaCamera className="fact-icon" />
              <div className="fact-content">
                <h6>  Visual Storyteller</h6>
                <p>I capture life through photography and bring narratives to life through video editing</p>
              </div>
            </div>
            <div className="fact-item">
              <FaPuzzlePiece className="fact-icon" />
              <div className="fact-content">
                <h6>  Problem Solver</h6>
                <p>Whether debugging complex code or planning adventures, I love tackling challenges systematically</p>
              </div>
            </div>
            <div className="fact-item">
              <FaStar className="fact-icon" />
              <div className="fact-content">
                <h6>  Life Philosophy</h6>
                <p>Stay organized, maintain positivity, and always be ready to embrace new opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
