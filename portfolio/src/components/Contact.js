import React, { useState } from 'react';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, 
  FaInstagram, FaFacebook, FaRocket, FaPaperPlane, FaHeart,
  FaGlobe, FaSpinner, FaCheckCircle, FaHandPeace, FaStar
} from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
  const [contactInfoRef, contactInfoVisible] = useScrollAnimation({ threshold: 0.2, delay: 200, triggerOnce: false });
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.2, delay: 400, triggerOnce: false });
  const [socialRef, socialVisible] = useScrollAnimation({ threshold: 0.2, delay: 600, triggerOnce: false });

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
      content: 'meagelleinerosesionosa@gmail.com',
      link: 'mailto:meagelleinerosesionosa@gmail.com',
      description: 'Drop me a line anytime!'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+63 0202406773',
      link: 'tel:+630202406773',
      description: 'Let\'s have a chat'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Iloilo City, Philippines',
      link: '#',
      description: 'Western Visayas, Philippines'
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
    { platform: '', icon: <FaGithub />, url: 'https://github.com/meagenotmage', color: '#333' },
    { platform: '', icon: <FaLinkedin />, url: 'https://linkedin.com/in/meagesionosa', color: '#0077B5' },
    { platform: '', icon: <FaInstagram />, url: 'https://www.instagram.com/meagenotmage/', color: '#E4405F' },
    { platform: '', icon: <FaFacebook />, url: 'https://www.facebook.com/meage.sionosa', color: '#1877F2' }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div ref={titleRef} className={`slide-up ${titleVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Let's Connect & Create Together</h2>
          <p className="section-subtitle">
            Ready to turn ideas into reality? I'm passionate about collaborating on meaningful projects, 
            contributing to innovative teams, and building solutions that make a difference. Let's start the conversation!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div ref={contactInfoRef} className={`contact-info slide-up ${contactInfoVisible ? 'visible' : ''}`}>
            <div className="contact-intro">
              <h3><FaRocket className="section-icon" /> Ready for the Next Adventure?</h3>
              <p>
                As an enthusiastic Computer Science student with a perfect blend of technical skills and creative thinking, 
                I'm actively seeking internship opportunities and exciting collaborations. I bring fresh perspectives, 
                reliable problem-solving skills, and an organized yet adaptable approach to every project. 
                Let's build something amazing together!
              </p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title} 
                  className={`contact-card scale-in stagger-animation ${contactInfoVisible ? 'visible' : ''}`} 
                  style={{'--animation-delay': `${index * 0.1}s`}}
                >
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
                <div className="status-dot">
                  <img 
                    src="./public/logo.png" 
                    alt="Profile" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = '#00ff88';
                    }}
                  />
                </div>
                <span>Available for Internship & Project Opportunities</span>
              </div>
              <p>Actively seeking summer 2024 internships and exciting project collaborations</p>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className={`contact-form-container slide-up ${formVisible ? 'visible' : ''}`}>
            <div className="form-header">
              <h3><FaEnvelope className="section-icon" /> Drop Me a Message</h3>
              <p>I respond to all messages within 24 hours. Let's discuss your project or opportunity!</p>
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
                    placeholder="name"
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
                    placeholder="email@example.com"
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
        <div ref={socialRef} className={`social-section slide-up ${socialVisible ? 'visible' : ''}`}>
          <h3><FaGlobe className="section-icon" /> Let's Connect Across Platforms</h3>
          <p>Follow my coding journey, creative projects, and professional updates across social media</p>
          
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
            <h3><span className="section-icon" /> Ready to Make an Impact Together?</h3>
            <p>
              The best innovations happen when passionate minds collaborate. Whether you're a fellow developer, 
              a potential mentor, or a company looking for fresh talent - I'm excited to contribute my skills, 
              creativity, and positive energy to meaningful projects that make a difference!
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
