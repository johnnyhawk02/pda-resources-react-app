import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css'; // Add CSS for potential specific styling
// import heroImage from '../assets/images/sunny.jpg'; // No longer needed

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Support for Pathological Demand Avoidance</h1>
          <p className="hero-subtitle">
            Resources, strategies and information for families, educators and professionals
          </p>
          <div className="hero-cta">
            <Link to="/pda" className="btn btn-primary">Learn About PDA</Link>
            <Link to="/resources" className="btn btn-secondary">Explore Resources</Link>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image"></div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>What is PDA?</h3>
              <p>Learn about Pathological Demand Avoidance, a profile within the autism spectrum with specific characteristics.</p>
              <Link to="/pda" className="info-link">Discover More</Link>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4M12 16h.01"></path>
                </svg>
              </div>
              <h3>Support Strategies</h3>
              <p>Practical approaches and techniques for supporting individuals with PDA at home and in educational settings.</p>
              <Link to="/tips" className="info-link">View Strategies</Link>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3>Resources</h3>
              <p>Curated collection of books, websites, articles, and research about PDA for families and professionals.</p>
              <Link to="/resources" className="info-link">Browse Resources</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Key Support Information</h2>
          <p className="section-subtitle">Essential guides and information for navigating support systems</p>
          
          <div className="featured-grid">
            <div className="featured-card">
              <div className="featured-content">
                <h3>EHCP Guide</h3>
                <p>Information about Education, Health and Care Plans for children with PDA, including application tips and rights.</p>
                <Link to="/ehcp" className="btn btn-outline">Read Guide</Link>
              </div>
              <div className="featured-image ehcp-image"></div>
            </div>
            
            <div className="featured-card">
              <div className="featured-content">
                <h3>DLA Information</h3>
                <p>Guidance on applying for Disability Living Allowance, with specific considerations for PDA profiles.</p>
                <Link to="/dla" className="btn btn-outline">Read Guide</Link>
              </div>
              <div className="featured-image dla-image"></div>
            </div>
            
            <div className="featured-card">
              <div className="featured-content">
                <h3>Blue Badge</h3>
                <p>Information about eligibility and application process for the Blue Badge scheme for individuals with PDA.</p>
                <Link to="/blue-badge" className="btn btn-outline">Read Guide</Link>
              </div>
              <div className="featured-image blue-badge-image"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Community Voices</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Understanding PDA has transformed our approach to supporting our child. The strategies on this site have been invaluable."</p>
                <div className="testimonial-author">Parent of child with PDA</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"As an educator, the resources here have helped me create a more supportive classroom environment for students with PDA profiles."</p>
                <div className="testimonial-author">Primary School Teacher</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The practical guidance about navigating support systems has been extremely helpful for the families I work with."</p>
                <div className="testimonial-author">SEND Support Worker</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Specific Resources?</h2>
            <p>Contact us with your questions or suggestions. We're here to help you find the information you need.</p>
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 