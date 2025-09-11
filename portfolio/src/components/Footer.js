import React from 'react';
import { 
  FaGraduationCap, FaMapMarkerAlt, FaHeart, FaGithub, FaLinkedin,
  FaInstagram, FaFacebook, FaCamera, FaVideo, FaPalette, FaArrowUp,
  FaEnvelope, FaHandPeace, FaCoffee
} from 'react-icons/fa';
import './Footer.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation refs
  const [footerContentRef, footerContentVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
  const [linksRef, linksVisible] = useScrollAnimation({ threshold: 0.2, delay: 200, triggerOnce: false });
  const [socialRef, socialVisible] = useScrollAnimation({ threshold: 0.2, delay: 400, triggerOnce: false });
  const [copyrightRef, copyrightVisible] = useScrollAnimation({ threshold: 0.2, delay: 600, triggerOnce: false });

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/yourusername' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z"
            fill="var(--primary-green)"
          />
        </svg>
      </div>

      <div className="container">
        <div className="footer-content">
          {/* Footer Brand */}
          <div ref={footerContentRef} className={`footer-brand slide-up ${footerContentVisible ? 'visible' : ''}`}>
            <div className="footer-logo" onClick={scrollToTop}>
              <span className="logo-text">Meage</span>
              <span className="logo-dot">.</span>
            </div>
            <p className="footer-description">
              A passionate BSCS student at West Visayas State University, 
              ready to make a mark in the tech industry with creativity, 
              organization, and a go-with-the-flow attitude.
            </p>
            <div className="footer-stats">
              <div className="stat">
                <FaGraduationCap className="stat-icon" />
                <span>BSCS 3A Student</span>
              </div>
              <div className="stat">
                <FaMapMarkerAlt className="stat-icon" />
                <span>Iloilo City, Philippines</span>
              </div>
              <div className="stat">
                <FaHeart className="stat-icon" />
                <span>Available for Internships</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div ref={linksRef} className={`footer-section slide-up ${linksVisible ? 'visible' : ''}`}>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Summary */}
          <div ref={socialRef} className={`footer-section slide-up ${socialVisible ? 'visible' : ''}`}>
            <h3 className="footer-title">Tech Stack</h3>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">MongoDB</span>
            </div>
            <div className="creative-skills">
              <h4>Creative Skills</h4>
              <div className="creative-list">
                <span><FaCamera /> Photography</span>
                <span><FaVideo /> Video Editing</span>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="footer-section">
            <h3 className="footer-title">Let's Connect</h3>
            <p className="connect-description">
              Always open to new opportunities, collaborations, and making new connections!
            </p>
            <div className="social-links">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
            <a 
              href="mailto:your.email@example.com" 
              className="footer-cta-btn"
            >
              <span>Say Hello</span>
              <FaHandPeace />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div ref={copyrightRef} className={`footer-bottom slide-up ${copyrightVisible ? 'visible' : ''}`}>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Meage. Made with <FaHeart className="heart" /> and lots of coffee <FaCoffee />
            </p>
            <div className="footer-info">
              <span>Built with Love.</span>
              <span className="separator">•</span>
              <span>Designed with <FaHeart className="heart" /></span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button className="back-to-top" onClick={scrollToTop} title="Back to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
