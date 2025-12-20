import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavClick = () => setMenuOpen(false);
  const handleChange = (e) => setFormData({ email: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      mode: 'no-cors'
    }).then(() => {
      setShowSuccess(true);
      setFormData({ email: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/images/Opeyemi_1C.PNG" alt="Opeyemi Adeniran" className="logo-icon" />
            <a href="#home">Opeyemi Adeniran</a>
          </div>
          
          <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#speaking" onClick={handleNavClick}>Speaking</a></li>
            <li><a href="#publications" onClick={handleNavClick}>Publications</a></li>
            <li><a href="#books" onClick={handleNavClick}>Books</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <img src="/images/Opeyemi_1C.PNG" alt="Opeyemi Taiwo Adeniran" className="hero-image" />
            <h1 className="hero-title">AI Research Engineer & Author</h1>
            <p className="hero-subtitle">
              Opeyemi Taiwo Adeniran is an AI researcher, author, and technology entrepreneur passionate about guiding people into successful careers in tech. 
              Her work focuses on Explainable Multimodal AI, where she builds intelligent systems that are explainable and interpretable, combining text, images, and video to solve real-world problems.
              Through her writing and teaching, she is committed to making technology accessible, practical, and impactful.
            </p>
            <a href="#books" className="cta-button">Explore My Books & Resources</a>
          </div>
        </section>

        {/* Research Excellence */}
        <section className="featured-section" id="featured">
          <h2 className="section-title">Research Excellence</h2>
          <p className="section-subtitle">
            Leading innovation in AI research with published work spanning medical diagnostics, blockchain security, and machine learning applications.
          </p>
          <div className="featured-grid">
            <div className="featured-card">
              <h3>AI Research & Development</h3>
              <p>Leading innovative research in machine learning applications across healthcare, blockchain security, and emerging technologies with published work in peer-reviewed journals.</p>
            </div>
            <div className="featured-card">
              <h3>Medical AI & Explainability</h3>
              <p>Published research in medical image segmentation and Alzheimer's disease detection using explainable ensemble learning architectures for enhanced diagnostic accuracy.</p>
            </div>
            <div className="featured-card">
              <h3>Tech Career Strategy & Education</h3>
              <p>Author of "Career Path in Tech" and advocate empowering professionals through strategic career guidance, accessible education, and frameworks for building thriving careers in technology.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          {/* Organizations */}
          <div className="organizations">
            <h2 className="section-title">Founded Organizations</h2>
            <div className="org-container">
              <div className="org-item">
                <h3>Morgan TechFest</h3>
                <p>Morgan TechFest is an in-person tech conference that helps students explore tech careers and network with industry experts</p>
                <div className="org-links">
                  <a href="https://www.morgantechfest.com/" target="_blank" rel="noopener noreferrer" className="org-link">
                    🌐 Website
                  </a>
                  <a href="https://www.instagram.com/morgantechfest/" target="_blank" rel="noopener noreferrer" className="org-link">
                    📷 Instagram
                  </a>
                  <a href="https://medium.com/@morgantechfest" target="_blank" rel="noopener noreferrer" className="org-link">
                    📝 Medium
                  </a>
                </div>
              </div>
              <div className="org-item">
                <h3>Favored Online</h3>
                <p>Turn learning into real-world tech success with hands-on projects and AI-powered career recommendations</p>
                <div className="org-links">
                  <a href="https://favoredonline.com/" target="_blank" rel="noopener noreferrer" className="org-link">
                    🌐 Website
                  </a>
                  <a href="https://www.instagram.com/favoredonline/" target="_blank" rel="noopener noreferrer" className="org-link">
                    📷 Instagram
                  </a>
                  <a href="https://medium.com/@opefavored" target="_blank" rel="noopener noreferrer" className="org-link">
                    📝 Medium
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Positions */}
          <div className="leadership-positions">
            <h3>Past Leadership & Non-profit Positions</h3>
            <p>
              Throughout my journey in technology and community building, I have held various leadership positions that have 
              contributed to my growth and the global tech community:
            </p>
            <div className="position-list">
              <div className="position-item">
                <span className="position-title">Google Women Tech Makers Ambassador</span>
                <span className="position-year">2022</span>
              </div>
              <div className="position-item">
                <span className="position-title">Global AI Hub Community Lead</span>
                <span className="position-year">2021-2023</span>
              </div>
              <div className="position-item">
                <span className="position-title">Omdena Lagos Nigeria, Chapter Lead</span>
                <span className="position-year">2021-2023</span>
              </div>
            </div>
            <p className="leadership-note">
              These leadership roles have helped shape my experience in community building, empowering women in technology, 
              and connecting global tech talents.
            </p>
          </div>
        </section>

        {/* Speaking */}
        <section id="speaking" className="speaking-section">
          <h2 className="section-title">Speaking Engagements</h2>
          <p className="section-subtitle">Sharing insights on AI, technology, and innovation at conferences and events worldwide, 
            pioneering cutting-edge research in artificial intelligence, empowering professionals to harness AI technologies, 
            and guiding aspiring tech professionals to build thriving careers in the rapidly evolving technology landscape.</p>
          <a href="https://drive.google.com/drive/folders/1HKJXbyr7cbsnTj4c12i8Qb0GJVWym31f?usp=sharing" target="_blank" rel="noopener noreferrer" className="speaking-link-button">
            View Past Speaking Engagements
          </a>
           {/* Bio Links */}
          <div className="link-cards-container bio-links">
            <div className="link-card">
              <p>Long Bio</p>
              <a href="https://docs.google.com/document/d/1fwHGUdVhgyZ8MSyUjcHT28i4tYdfvFBFHyClC0E68Gc/edit" target="_blank" rel="noopener noreferrer">
                Download Long Bio
              </a>
            </div>
            <div className="link-card">
              <p>Headshot</p>
              <a href="https://drive.google.com/drive/folders/1Ajy_vh_t_8VmQUljrs_lzGMeUv8GkJLC?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="publications-section">
          <h2 className="section-title">Recent Publications</h2>
          <p className="section-subtitle">
            Peer-reviewed research spanning medical AI, blockchain security, and machine learning applications
          </p>
          <div className="publications-container">
            <div className="publication-card">
              <h3>Early Detection of Alzheimer's Disease Using an Ensemble of Diverse Convolutional Neural Networks and Vision Transformer</h3>
              <p>
                Pioneering research that combines cutting-edge AI techniques to detect Alzheimer's disease in its earliest stages, 
                potentially enabling earlier intervention and treatment.
              </p>
            </div>
            <div className="publication-card">
              <h3>Explainable MRI-Based Ensemble Learnable Architecture for Alzheimer's Disease Detection</h3>
              <p>Novel ensemble learning approach for early Alzheimer's detection with interpretable AI mechanisms.</p>
            </div>
            <div className="publication-card">
              <h3>SmartPattern: A Machine Learning Framework for Detecting Reentrancy Vulnerabilities in Blockchain Smart Contracts</h3>
              <p>Advanced ML framework for automated detection of security vulnerabilities in blockchain smart contracts.</p>
            </div>
          </div>
          <div className="publications-cta">
            <a href="https://scholar.google.com/citations?user=Krnac-4AAAAJ&hl" target="_blank" rel="noopener noreferrer" className="cta-button">
              View All Publications
            </a>
          </div>
        </section>
        
        {/* Books Section */}
        <section id="books" className="books-section">
          <h2 className="section-title">From Prompt to Website</h2>
          <h3 className="section-subtitle">Build a One-Page React App with Vite</h3>
          <p className="section-description">
            A beginner's guide to building modern websites with AI prompts. Learn how to leverage AI tools to create, 
            deploy, and maintain professional web applications—even if you're just starting your coding journey.
          </p>

          {/* Book Card - Single Image Display */}
          <div className="book-card">
            <div className="book-image">
              <img src="/images/bk-pr.png" alt="From Prompt to Website - Build a One-Page React App with Vite" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
            <div className="book-content">
              <h3 className="book-title">From Prompt to Website: Build a One-Page React App with Vite</h3>
              <p className="book-description">
                A beginner's guide to building modern websites with AI prompts. Master the complete workflow from 
                using AI to generate code, to hosting your website live on GitHub, troubleshooting issues, and 
                deploying to production—all explained in clear, accessible steps.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdZPxDlum2WU3KiSf7cNeKDlqrfToB7uMwGHqCpfq1x790hcw/viewform?usp=sharing&ouid=115645393602240685899" 
                target="_blank"
                rel="noopener noreferrer"
                className="book-status-link"
              >
                <span className="book-status">Get the Book Now</span>
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="features-section-wrapper">
            <h2 className="section-title">What You'll Learn</h2>
            <p className="section-subtitle">
              Everything you need to build and deploy modern web applications using AI-assisted development.
            </p>
            <div className="features-container">
              <div className="feature-card">
                <h3>How to Host a Website on GitHub</h3>
                <p>Learn the fundamentals of version control and how to host your website for free using GitHub Pages.</p>
              </div>
              <div className="feature-card">
                <h3>Building Your Web Application Using React and Vite</h3>
                <p>Master modern web development with React and Vite to create fast, responsive single-page applications.</p>
              </div>
              <div className="feature-card">
                <h3>Using AI Prompts to Create a Stunning, Responsive Website</h3>
                <p>Harness the power of AI tools to generate clean, professional code and accelerate your development process.</p>
              </div>
              <div className="feature-card">
                <h3>Troubleshooting Your Website with AI Prompts</h3>
                <p>Learn effective debugging strategies and how to use AI assistants to identify and fix common issues quickly.</p>
              </div>
              <div className="feature-card">
                <h3>Connecting Your Website to a Live Server</h3>
                <p>Understand deployment workflows and connect your local development environment to production servers.</p>
              </div>
              <div className="feature-card">
                <h3>Deploy Your Application from Development to Production</h3>
                <p>Complete the full development lifecycle by deploying your application and making it accessible to users worldwide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-section">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Connect with me for inquiries, speaking engagements, and collaborations.</p>
          <div className="link-cards-container">
            <div className="link-card">
              <p>Email</p>
              <a href="mailto:opeyemitaiwo81@gmail.com">opeyemitaiwo81@gmail.com</a>
            </div>
            <div className="link-card">
              <p>Resume</p>
              <a href="https://opethaiwoh.github.io/opeyemi.github.io/" target="_blank" rel="noopener noreferrer">View Resume</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a href="https://x.com/opethaiwoh" target="_blank" rel="noopener noreferrer">𝕏</a>
          <a href="https://instagram.com/stories/opethaiwoh/" target="_blank" rel="noopener noreferrer">📷</a>
          <a href="https://linkedin.com/in/opeyemi-adeniran/" target="_blank" rel="noopener noreferrer">💼</a>
        </div>
        <p>© 2025 Opeyemi Taiwo Adeniran. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
