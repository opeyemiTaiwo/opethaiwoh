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
            <li><a href="#books" onClick={handleNavClick}>Books</a></li>
            <li><a href="#publications" onClick={handleNavClick}>Publications</a></li>
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
              Opeyemi Taiwo Adeniran is an AI researcher, author, and technology entrepreneur passionate about guiding people into successful careers in Tech. 
            </p>
            <a href="https://docs.google.com/document/d/1fwHGUdVhgyZ8MSyUjcHT28i4tYdfvFBFHyClC0E68Gc/edit" target="_blank" rel="noopener noreferrer" className="cta-button">
              Learn more about me
            </a>
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
                <p>Morgan TechFest empowers students through collaborative projects and an annual tech conference that connects innovation with career opportunities.</p>
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
                <h3>Favored Online Inc.</h3>
                <p>Favored Online is a digital innovation company that builds AI-powered, custom web and technology solutions to help businesses transform, grow, and thrive online.</p>
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
          
           {/* Bio Links */}
          <div className="link-cards-container bio-links">
            <div className="link-card">
             <a href="https://drive.google.com/drive/folders/1HKJXbyr7cbsnTj4c12i8Qb0GJVWym31f?usp=sharing" target="_blank" rel="noopener noreferrer">
              View Past Speaking Engagements
              </a>
            </div>
            <div className="link-card">
              <a href="https://drive.google.com/drive/folders/1Ajy_vh_t_8VmQUljrs_lzGMeUv8GkJLC?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Headshot
              </a>
            </div>
          </div>
        </section>

        {/* Books Section */}
<section id="books" className="books-section">
  <h2 className="section-title">AI Business Growth Toolkit</h2>
  <h3 className="section-subtitle">Strategic Prompts for Business Owners</h3>
 
  {/* Book Card - Single Image Display */}
  <div className="book-card">
    <div className="book-image">
      <img 
        src="/images/bk-cv.png" 
        alt="AI Business Growth Toolkit" 
        style={{ 
          objectFit: 'contain', 
          width: '100%', 
          height: '100%' 
        }} 
      />
    </div>
    <div className="book-content">
      <h3 className="book-title">Now Available: AI Business Growth Toolkit</h3>
      <p className="book-description">
        AI Business Growth Toolkit distills proven strategies from successful entrepreneurs and business experts into ready-to-use prompts that drive real results. 
        Whether you're launching your first business, struggling to increase sales, or looking to scale your existing venture, this toolkit provides the exact questions you need to unlock growth with confidence.
      </p>
      <a 
        href="https://selar.com/q3tk00n000" 
        target="_blank"
        rel="noopener noreferrer"
        className="book-status-link"
      >
        <span className="book-status">Get the Book Now</span>
      </a>
    </div>
  </div>
</section>

        {/* Publications */}
        <section id="publications" className="publications-section">
          <h2 className="section-title">Recent Publications</h2>
          <p className="section-subtitle">
     Check out my peer-reviewed research on multimodal AI applications in security, forensic analytics, and medical imaging, focused on explainable and interpretable solutions.
          </p>
          <div className="publications-container">
            <div className="publication-card">
              <h3>Comparative Evaluation of Prompting Techniques for Forensic Video Analysis Using GPT-4o</h3>
              <p>
          This research evaluates how different prompting techniques affect LLM performance in forensic analysis.
              </p>
            </div>
            <div className="publication-card">
              <h3>Explainable MRI-Based Ensemble Learnable Architecture for Alzheimer's Disease Detection</h3>
              <p> Pioneering research that combines cutting-edge AI techniques to detect Alzheimer's disease in its earliest stages, 
                potentially enabling earlier intervention and treatment.</p>
            </div>
            <div className="publication-card">
              <h3>Evaluating Prompting Strategies in Multimodal Large Language Models for Human-Aligned Forensic Video Analysis</h3>
              <p>This study evaluates eight prompting techniques to optimize human-aligned responses in multimodal large language models (MLLMs) for forensic applications.</p>
            </div>
          </div>
          <div className="publications-cta">
            <a href="https://scholar.google.com/citations?user=Krnac-4AAAAJ&hl" target="_blank" rel="noopener noreferrer" className="cta-button">
              View All Publications
            </a>
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
