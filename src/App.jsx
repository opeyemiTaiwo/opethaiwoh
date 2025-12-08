import { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">MyPortfolio</h1>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Menu */}
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li 
              onClick={() => handleNavClick('home')} 
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </li>
            <li 
              onClick={() => handleNavClick('about')} 
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </li>
            <li 
              onClick={() => handleNavClick('projects')} 
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </li>
            <li 
              onClick={() => handleNavClick('contact')} 
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      {/* Main Content */}
      <main className="main-content">
        {activeSection === 'home' && <HomePage />}
        {activeSection === 'about' && <AboutPage />}
        {activeSection === 'projects' && <ProjectsPage />}
        {activeSection === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 MyPortfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

// Home Page Component
function HomePage() {
  return (
    <div className="page home-page">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Full Stack Developer | AI Researcher | Tech Enthusiast</p>
        <button className="cta-button">View My Work</button>
      </div>
    </div>
  );
}

// About Page Component
function AboutPage() {
  return (
    <div className="page about-page">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate developer with expertise in building modern web applications.
            I love creating innovative solutions and working with cutting-edge technologies.
          </p>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">AI/ML</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Projects Page Component
function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'AI Research Platform',
      description: 'A modern platform for AI research and medical imaging analysis using deep learning models',
      tech: ['React', 'Python', 'TensorFlow']
    },
    {
      id: 2,
      title: 'Blockchain Security Tool',
      description: 'Smart contract vulnerability detection system using machine learning',
      tech: ['Python', 'Blockchain', 'ML']
    },
    {
      id: 3,
      title: 'Education Platform',
      description: 'Online learning platform with AI-powered personalized learning paths',
      tech: ['React', 'Firebase', 'Node.js']
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive visualizations',
      tech: ['React', 'D3.js', 'MongoDB']
    },
    {
      id: 5,
      title: 'Mobile Health App',
      description: 'Health tracking application with AI-powered recommendations',
      tech: ['React Native', 'Firebase', 'ML']
    },
    {
      id: 6,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: ['React', 'Node.js', 'Stripe']
    }
  ];

  return (
    <div className="page projects-page">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <button className="view-button">View Project</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page contact-page">
      <h2>Get In Touch</h2>
      <p className="contact-intro">Have a question or want to work together? Feel free to reach out!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default App;