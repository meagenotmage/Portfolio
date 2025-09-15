import React, { useState } from 'react';
import { 
  FaGlobe, FaCode, FaCamera, FaDesktop, FaPalette, FaBullseye,
  FaCheckCircle, FaTasks, FaBicycle, FaVideo, FaExternalLinkAlt,
  FaGithub, FaRocket, FaEnvelope
} from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
  const [filtersRef, filtersVisible] = useScrollAnimation({ threshold: 0.2, delay: 100, triggerOnce: false });
  const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.1, delay: 200, triggerOnce: false });
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.2, delay: 300, triggerOnce: false });

  const projects = [
    {
      id: 1,
      title: 'Haribon: Harmful Algal Bloom Detection',
      description: 'An early detection system for harmful algal bloom around the coastal areas of Western Visayas using AI forecasting technology.',
      image: '/images/Dashboard.png',
      technologies: ['React + Vite', 'CSS', 'Python'],
      category: 'web',
      status: 'completed',
      features: ['Responsive Design', 'Smooth Animations', 'AI Forecasting', 'Modern UI/UX'],
      github: 'https://github.com/athenavillarin/AIHackathon2025_BadmintonGirls_HARIBON'
    },
    {
      id: 2,
      title: 'LINK.exe - IGP Merch',
      description: 'E-commerce platform for organization merchandise featuring responsive design, product catalog, and secure checkout system.',
      image: '/images/igp.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      status: 'completed',
      features: ['Responsive Design', 'Different Merch', 'Deals and Offers', 'Organization Products'],
      liveDemo: 'https://sionosa-final-website.netlify.app/',
      github: 'https://github.com/meagenotmage/website_IGP-LINK.exe'
    },
    {
      id: 3,
      title: 'College of Communication Website',
      description: 'Modern college website featuring image gallery, responsive grid layout, and optimized loading for better user experience.',
      image: '/images/coc.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      status: 'in progress',
      features: ['Image Gallery', 'Lightbox Effect', 'Responsive Grid', 'Optimized Loading'],
      liveDemo: null,
      github: 'https://github.com/meagenotmage/cocwebsite/tree/main'
    },
    {
      id: 4,
      title: 'Reality 13: Metropolis Website',
      description: 'Interactive website for Reality 13 featuring modern design, smooth animations, and engaging user interface.',
      image: '/images/reality.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      status: 'completed',
      features: ['Drag & Drop', 'Progress Tracking', 'User Dashboard', 'Real-time Updates'],
      liveDemo: 'https://metropolis-nine.vercel.app/',
      github: 'https://github.com/meagenotmage/reality13'
    },
    {
      id: 5,
      title: 'Pathfinding using A* Algorithm at WVSU',
      description: 'Smart pathfinding system for WVSU campus using A* algorithm with GPS integration and real-time navigation.',
      image: '/images/dsa.jpg',
      technologies: ['Python', 'GPS API', 'Charts.js'],
      category: 'web',
      status: 'completed',
      features: ['GPS Integration', 'Route Mapping', 'Performance Analytics', 'Social Sharing'],
      liveDemo: null,
      github: 'https://github.com/meagenotmage/DSA-A-Final-Project'
    },
    {
      id: 6,
      title: 'Video Editing Showcase',
      description: 'Professional video editing portfolio featuring travel vlogs, promotional videos, and creative short films with high-quality production.',
      image: '/images/projects/placeholder.svg',
      technologies: ['Adobe Premiere', 'After Effects', 'DaVinci Resolve', 'Capcut'],
      category: 'creative',
      status: 'planning',
      features: ['Color Grading', 'Motion Graphics', 'Audio Mixing', 'Creative Storytelling'],
      github: null
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: <FaBullseye /> },
    { key: 'web', label: 'Web Development', icon: <FaGlobe /> },
    { key: 'desktop', label: 'Desktop Apps', icon: <FaDesktop /> },
    { key: 'creative', label: 'Creative Projects', icon: <FaPalette /> }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { label: 'Completed', color: 'var(--primary-green)' },
      'in-progress': { label: 'In Progress', color: '#FF9800' },
      'in progress': { label: 'In Progress', color: '#FF9800' },
      planning: { label: 'Planning', color: '#2196F3' }
    };

    const config = statusConfig[status] || { label: 'Unknown', color: '#757575' };
    return (
      <span 
        className="status-badge" 
        style={{ backgroundColor: config.color }}
      >
        {config.label}
      </span>
    );
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div ref={titleRef} className={`slide-up ${titleVisible ? 'visible' : ''}`}>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A collection of my work showcasing my technical skills, creativity, and passion for development
          </p>
        </div>

        {/* Project Filters */}
        <div ref={filtersRef} className={`project-filters slide-up ${filtersVisible ? 'visible' : ''}`}>
          {filters.map(filterItem => (
            <button
              key={filterItem.key}
              className={`filter-btn ${filter === filterItem.key ? 'active' : ''}`}
              onClick={() => setFilter(filterItem.key)}
            >
              <span className="filter-icon">{filterItem.icon}</span>
              <span className="filter-label">{filterItem.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className={`projects-grid slide-up ${projectsVisible ? 'visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card slide-up stagger-animation ${projectsVisible ? 'visible' : ''}`}
              style={{'--animation-delay': `${index * 0.05}s`}}
            >
              <div className="project-header">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                    onError={(e) => {
                      // Fallback to a default placeholder if image fails to load
                      e.target.src = '/images/projects/placeholder.svg';
                    }}
                  />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="overlay-text">View Details</span>
                    </div>
                  </div>
                </div>
                {getStatusBadge(project.status)}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-actions">
                  {project.liveDemo ? (
                    <a 
                      href={project.liveDemo} 
                      className="btn btn-primary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="btn-icon" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button className="btn btn-primary" disabled>
                      <FaRocket className="btn-icon" />
                      <span>Coming Soon</span>
                    </button>
                  )}
                  
                  {project.github ? (
                    <a 
                      href={project.github} 
                      className="btn btn-outline" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="btn-icon" />
                      <span>View Code</span>
                    </a>
                  ) : (
                    <button className="btn btn-outline" disabled>
                      <FaCode className="btn-icon" />
                      <span>Private</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className={`projects-cta slide-up ${ctaVisible ? 'visible' : ''}`}>
          <div className="cta-content">
            <h3>Interested in My Work?</h3>
            <p>
              I'm always excited to discuss my projects and explore new opportunities. 
              Let's connect and see how we can work together!
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FaEnvelope className="btn-icon" />
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
