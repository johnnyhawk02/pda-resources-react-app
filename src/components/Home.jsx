import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css'; // Add CSS for potential specific styling
// import heroImage from '../assets/images/sunny.jpg'; // No longer needed

function Home() {
  return (
    <div className="home-page">
      <header>
        <h1>Pathological Demand Avoidance Resources</h1>
        <p className="subtitle">A collection of information and resources for those living with or supporting individuals with PDA.</p>
      </header>

      <section className="intro-section">
        <p>
          Welcome to PDA Resources, a dedicated platform offering comprehensive information about Pathological Demand Avoidance (PDA), 
          a profile within the autism spectrum. Our goal is to provide valuable resources, strategies, and support information 
          for families, educators, and professionals working with individuals who have PDA.
        </p>
        <p>
          This site offers information not just on PDA, but also on navigating related support systems like EHCPs, DLA, and the Blue Badge scheme within the UK.
        </p>
      </section>

      <section className="feature-cards">
        <h2>Explore Our Resources</h2>
        
        <div className="grid">
          <div className="grid-col-12 grid-col-md-6 grid-col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3>What is PDA?</h3>
                <p className="card-text">Learn about the characteristics, challenges, and nuances of the Pathological Demand Avoidance profile.</p>
                <Link to="/pda" className="button primary">Learn More</Link>
              </div>
            </div>
          </div>
          
          <div className="grid-col-12 grid-col-md-6 grid-col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3>Tips & Strategies</h3>
                <p className="card-text">Discover effective approaches and techniques for supporting children and individuals with PDA.</p>
                <Link to="/tips" className="button primary">Get Tips</Link>
              </div>
            </div>
          </div>
          
          <div className="grid-col-12 grid-col-md-6 grid-col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3>Key Support</h3>
                <p className="card-text">Navigate EHCPs, DLA, and the Blue Badge scheme with our helpful guides and resources.</p>
                <div className="button-group">
                  <Link to="/ehcp" className="button secondary">EHCP Guide</Link>
                  <Link to="/dla" className="button secondary">DLA Guide</Link>
                  <Link to="/blue-badge" className="button secondary">Blue Badge Guide</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 