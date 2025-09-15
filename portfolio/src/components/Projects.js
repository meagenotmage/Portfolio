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
  const [filtersRef, filtersVisible] = useScrollAnimation({ threshold: 0.2, delay: 200, triggerOnce: false });
  const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.1, delay: 400, triggerOnce: false });
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.2, delay: 600, triggerOnce: false });

  const projects = [
    {
      id: 1,
      title: 'Haribon: Harmful Algal Bloom Detection',
      description: 'A early detection for harmful algal bloom around the coastal areas of Western Visayas',
      image: <FaGlobe />,
      technologies: ['React + Vite', 'CSS', 'Python'],
      category: 'web',
      status: 'completed',
      features: ['Responsive Design', 'Smooth Animations', 'AI Forecasting', 'Modern UI/UX'],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'LINK.exe - IGP Merch',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.',
      image: <FaDesktop />,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      status: 'completed',
      features: ['Responsive Design', 'Different Merch', 'Deals and Offers', 'Organization Products'],
      github: '#'
    },
    {
      id: 3,
      title: 'Photo Gallery',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      image: <FaCamera />,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'creative',
      status: 'completed',
      features: ['Image Gallery', 'Lightbox Effect', 'Responsive Grid', 'Optimized Loading'],
      liveDemo: '#'
    },
    {
      id: 4,
      title: 'Reality 13: Metropolis Website',
      description: 'A productivity web application for managing daily tasks and projects. Features drag-and-drop functionality and progress tracking.',
      image: <FaTasks />,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      status: 'in-progress',
      features: ['Drag & Drop', 'Progress Tracking', 'User Dashboard', 'Real-time Updates'],
      github: '#'
    },
    {
      id: 5,
      title: 'Pathfinding using A* Algorithm at WVSU',
      description: 'A mobile-friendly web app for tracking cycling routes and performance. Integrates with GPS for real-time location tracking.',
      image: <FaBicycle />,
      technologies: ['Python', 'GPS API', 'Charts.js'],
      category: 'web',
      status: 'planning',
      features: ['GPS Integration', 'Route Mapping', 'Performance Analytics', 'Social Sharing'],
      github: '#'
    },
    {
      id: 6,
      title: 'Video Editing',
      description: 'A collection of my video editing projects including travel vlogs, promotional videos, and creative short films.',
      image: <FaVideo />,
      technologies: ['Adobe Premiere', 'After Effects', 'DaVinci Resolve', 'Capcut'],
      category: 'creative',
      status: 'completed',
      features: ['Color Grading', 'Motion Graphics', 'Audio Mixing', 'Creative Storytelling'],
      liveDemo: '#'
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
      planning: { label: 'Planning', color: '#2196F3' }
    };

    const config = statusConfig[status];
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
              style={{'--animation-delay': `${index * 0.1}s`}}
            >
              <div className="project-header">
                <div className="project-image">
                  <span className="project-icon">{project.image}</span>
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
                  {project.liveDemo && (
                    <a href={project.liveDemo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt className="btn-icon" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="btn-icon" />
                      <span>View Code</span>
                    </a>
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
