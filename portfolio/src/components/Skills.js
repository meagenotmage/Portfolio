import React, { useState, useEffect } from 'react';
import { 
  FaCode, FaDatabase, FaPalette, FaTools, FaStar, FaRocket,
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython,
  FaGitAlt, FaFigma, FaCamera, FaVideo, FaGraduationCap,
  FaLightbulb, FaCogs, FaChartLine, FaTrophy
} from 'react-icons/fa';
import { SiMysql, SiMongodb, SiCplusplus, SiVscodium, SiAdobecreativecloud, SiAdobephotoshop } from 'react-icons/si';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [visibleMilestones, setVisibleMilestones] = useState([]);
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
  const [categoriesRef, categoriesVisible] = useScrollAnimation({ threshold: 0.2, delay: 200, triggerOnce: false });
  const [skillsRef, skillsVisible] = useScrollAnimation({ threshold: 0.1, delay: 400, triggerOnce: false });
  const [softSkillsRef, softSkillsVisible] = useScrollAnimation({ threshold: 0.1, delay: 600, triggerOnce: false });

  // Simplified scroll-based roadmap animation
  useEffect(() => {
    const handleScroll = () => {
      const milestoneElements = document.querySelectorAll('.milestone');
      
      milestoneElements.forEach((milestone, index) => {
        const rect = milestone.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Trigger animation when element is 70% visible in viewport
        const isVisible = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3;
        
        if (isVisible) {
          setVisibleMilestones(prev => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = {
    programming: {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: [
        { name: 'HTML', level: 90, icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS', level: 75, icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', level: 85, icon: <FaJs />, color: '#F7DF1E' },
        { name: 'React', level: 75, icon: <FaReact />, color: '#61DAFB' },
        { name: 'Java', level: 70, icon: <FaJava />, color: '#ED8B00' },
        { name: 'Python', level: 75, icon: <FaPython />, color: '#3776AB' },
        { name: 'C++', level: 70, icon: <SiCplusplus />, color: '#00599C' }
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
        { name: 'Videography', level: 65, icon: <FaPalette />, color: '#45B7D1' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: <FaTools />,
      skills: [
        { name: 'Git', level: 80, icon: <FaGitAlt />, color: '#F05032' },
        { name: 'VS Code', level: 90, icon: <SiVscodium />, color: '#007ACC' },
        { name: 'Photoshop', level: 75, icon: <SiAdobephotoshop />, color: '#FF0000' },
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

        {/* Learning Journey Roadmap */}
        <div className="learning-journey">
          <h3 className="journey-title">
            <FaRocket className="title-icon" />
            My Learning Roadmap
          </h3>
          
          <div className="roadmap-container">
            <div className="roadmap-path">
              {roadmapMilestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`milestone ${milestone.status} ${
                    visibleMilestones.includes(index) ? 'visible' : ''
                  }`}
                >
                  <div className="milestone-marker">
                    {milestone.icon}
                  </div>
                  <div className="milestone-content">
                    <h4>{milestone.title}</h4>
                    <p>{milestone.description}</p>
                    <div className="milestone-tech">
                      {milestone.technologies.map((tech, techIndex) => (
                        <span key={techIndex}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Journey Stats */}
            <div className="journey-stats">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">Technologies Mastered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Years of Learning</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Major Milestones</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Passion & Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Define roadmap milestones data
const roadmapMilestones = [
  {
    title: "Foundation Building",
    description: "Started with web development basics, learning HTML, CSS, and JavaScript fundamentals.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Git"],
    status: "completed",
    icon: <FaGraduationCap />
  },
  {
    title: "Framework Mastery",
    description: "Diving deep into modern frameworks and libraries to build dynamic web applications.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "completed",
    icon: <FaReact />
  },
  {
    title: "Full-Stack Development",
    description: "Currently expanding skills across the entire web development stack.",
    technologies: ["Java", "Python", "MySQL", "API Design"],
    status: "current",
    icon: <FaCogs />
  },
  {
    title: "Advanced Concepts",
    description: "Planning to explore advanced topics in software architecture and system design.",
    technologies: ["Microservices", "Cloud Computing", "DevOps", "Testing"],
    status: "future",
    icon: <FaChartLine />
  },
  {
    title: "Specialization",
    description: "Aiming to specialize in a specific domain while maintaining broad technical knowledge.",
    technologies: ["AI/ML", "Mobile Dev", "Data Science", "Leadership"],
    status: "future",
    icon: <FaTrophy />
  }
];

export default Skills;
