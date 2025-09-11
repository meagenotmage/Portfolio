import React, { useState } from 'react';
import { 
  FaCode, FaDatabase, FaPalette, FaTools, FaStar, FaRocket,
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython,
  FaGitAlt, FaFigma, FaCamera, FaVideo
} from 'react-icons/fa';
import { SiMysql, SiMongodb, SiCplusplus, SiVscodium, SiAdobecreativecloud } from 'react-icons/si';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
  const [categoriesRef, categoriesVisible] = useScrollAnimation({ threshold: 0.2, delay: 200, triggerOnce: false });
  const [skillsRef, skillsVisible] = useScrollAnimation({ threshold: 0.1, delay: 400, triggerOnce: false });
  const [softSkillsRef, softSkillsVisible] = useScrollAnimation({ threshold: 0.1, delay: 600, triggerOnce: false });

  const skillCategories = {
    programming: {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: [
        { name: 'HTML', level: 90, icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS', level: 85, icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', level: 80, icon: <FaJs />, color: '#F7DF1E' },
        { name: 'React', level: 75, icon: <FaReact />, color: '#61DAFB' },
        { name: 'Java', level: 70, icon: <FaJava />, color: '#ED8B00' },
        { name: 'Python', level: 75, icon: <FaPython />, color: '#3776AB' },
        { name: 'C++', level: 65, icon: <SiCplusplus />, color: '#00599C' }
      ]
    },
    database: {
      title: 'Database Technologies',
      icon: <FaDatabase />,
      skills: [
        { name: 'MySQL', level: 75, icon: <SiMysql />, color: '#4479A1' },
        { name: 'MongoDB', level: 70, icon: <SiMongodb />, color: '#47A248' }
      ]
    },
    creative: {
      title: 'Creative Skills',
      icon: <FaPalette />,
      skills: [
        { name: 'Photography', level: 85, icon: <FaCamera />, color: '#FF6B6B' },
        { name: 'Video Editing', level: 80, icon: <FaVideo />, color: '#4ECDC4' },
        { name: 'UI/UX Design', level: 70, icon: <FaPalette />, color: '#45B7D1' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: <FaTools />,
      skills: [
        { name: 'Git', level: 75, icon: <FaGitAlt />, color: '#F05032' },
        { name: 'VS Code', level: 90, icon: <SiVscodium />, color: '#007ACC' },
        { name: 'Adobe Creative Suite', level: 75, icon: <SiAdobecreativecloud />, color: '#FF0000' },
        { name: 'Figma', level: 70, icon: <FaFigma />, color: '#F24E1E' }
      ]
    }
  };

  const softSkills = [
    { skill: 'Problem Solving', description: 'Love tackling complex challenges with creative solutions' },
    { skill: 'Team Collaboration', description: 'Work well with others and contribute to team success' },
    { skill: 'Time Management', description: 'Organized approach to balancing studies, projects, and hobbies' },
    { skill: 'Adaptability', description: 'Go-with-the-flow attitude helps me adjust to new situations' },
    { skill: 'Communication', description: 'Clear communication in both technical and non-technical contexts' },
    { skill: 'Continuous Learning', description: 'Always eager to learn new technologies and improve skills' }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div ref={titleRef} className={`slide-up ${titleVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A showcase of my technical abilities, creative talents, and the tools I use to bring ideas to life
          </p>
        </div>

        {/* Technical Skills */}
        <div className="technical-skills">
          <div ref={categoriesRef} className={`skills-navigation slide-up ${categoriesVisible ? 'visible' : ''}`}>
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`nav-btn ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                <span className="nav-icon">{category.icon}</span>
                <span className="nav-text">{category.title}</span>
              </button>
            ))}
          </div>

          <div ref={skillsRef} className={`skills-content slide-up ${skillsVisible ? 'visible' : ''}`}>
            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className={`skill-card slide-up stagger-animation ${skillsVisible ? 'visible' : ''}`}
                  style={{'--animation-delay': `${index * 0.1}s`, '--color': skill.color}}
                >
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                  
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{'--progress': `${skill.level}%`}}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div ref={softSkillsRef} className={`soft-skills slide-up ${softSkillsVisible ? 'visible' : ''}`}>
          <h3 className="soft-skills-title">
            <FaStar className="title-icon" />
            Soft Skills & Personal Qualities
          </h3>
          
          <div className="soft-skills-grid">
            {softSkills.map((item, index) => (
              <div 
                key={item.skill} 
                className={`soft-skill-card slide-up stagger-animation ${softSkillsVisible ? 'visible' : ''}`}
                style={{'--animation-delay': `${index * 0.1}s`}}
              >
                <h4>{item.skill}</h4>
                <p>{item.description}</p>
                <div className="skill-indicator">
                  <div className="indicator-dots">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="dot active"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="learning-journey">
          <h3 className="journey-title">
            <FaRocket className="title-icon" />
            My Learning Journey
          </h3>
          
          <div className="journey-content">
            <div className="journey-text">
              <p>
                As a passionate BSCS student, I'm constantly expanding my skill set and embracing new challenges. 
                My journey combines technical expertise with creative flair - from writing clean code to capturing 
                beautiful moments through photography.
              </p>
              <p>
                What sets me apart is my organized yet flexible approach to learning. I plan my goals systematically 
                but remain open to exploring new technologies and opportunities that come my way.
              </p>
            </div>
            
            <div className="journey-stats">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">Technologies Learned</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Years of Study</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Passion for Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
