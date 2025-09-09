import React, { useState } from 'react';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, 
  FaInstagram, FaFacebook, FaRocket, FaPaperPlane, FaHeart,
  FaGlobe, FaSpinner, FaCheckCircle, FaHandPeace, FaStar
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
      description: 'Drop me a line anytime!'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+63 XXX XXX XXXX',
      link: 'tel:+63XXXXXXXXX',
      description: 'Let\'s have a chat'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Iloilo City, Philippines',
      link: '#',
      description: 'Based in beautiful Iloilo'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      content: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile',
      description: 'Let\'s connect professionally'
    }
  ];

  const socialLinks = [
    { platform: 'GitHub', icon: <FaGithub />, url: 'https://github.com/yourusername', color: '#333' },
    { platform: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile', color: '#0077B5' },
    { platform: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/yourusername', color: '#E4405F' },
    { platform: 'Facebook', icon: <FaFacebook />, url: 'https://facebook.com/yourprofile', color: '#1877F2' }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Let's Get In Touch</h2>
        <p className="section-subtitle">
          I'm always excited to connect with fellow developers, potential employers, or anyone who shares my passion for technology and creativity. Let's start a conversation!
        </p>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-intro">
              <h3><FaRocket className="section-icon" /> Ready to Work Together?</h3>
              <p>
                As a passionate BSCS student with a carefree yet organized approach, I'm always open to new opportunities, 
                collaborations, and exciting projects. Whether you're looking for an intern, have a project in mind, 
                or just want to say hello - I'd love to hear from you!
              </p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="contact-card" style={{'--delay': `${index * 0.1}s`}}>
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <a href={info.link} className="contact-link" target="_blank" rel="noopener noreferrer">
                      {info.content}
                    </a>
                    <p className="contact-description">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-status">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for Internship Opportunities</span>
              </div>
              <p>Currently looking for summer 2026 internship positions</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h3><FaEnvelope className="section-icon" /> Send Me a Message</h3>
              <p>I typically respond within 24 hours</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="internship">Internship Opportunity</option>
                  <option value="collaboration">Project Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="loading-spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-success">
                  <FaCheckCircle className="success-icon" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <h3><FaGlobe className="section-icon" /> Connect With Me Online</h3>
          <p>Follow my journey and stay updated with my latest projects</p>
          
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={social.platform}
                href={social.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{'--delay': `${index * 0.1}s`, '--color': social.color}}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.platform}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Fun Call to Action */}
        <div className="fun-cta">
          <div className="cta-content">
            <h3><FaHeart className="section-icon" /> Let's Create Something Amazing Together!</h3>
            <p>
              I believe the best projects come from passionate collaborations. Whether you're a fellow student, 
              a potential employer, or someone with a crazy idea - I'm all ears and ready to dive in!
            </p>
            <div className="cta-icons">
              <FaRocket />
              <FaHeart />
              <FaStar />
              <FaHandPeace />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
