import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css'; // Add CSS for potential specific styling
// import heroImage from '../assets/images/sunny.jpg'; // No longer needed

function Home() {
  return (
    <div className="home-page container"> {/* Added container class for padding */}
      {/* Hero Section Removed */}

      {/* Introductory Text */}
      {/* Consider making this the primary entry point now */}
      <section className="intro-text mb-5 px-md-5 text-center">
        <h1 className="mb-4">Welcome to PDA Resources</h1> {/* Elevate a title here */}
         <p>
           Pathological Demand Avoidance (PDA) is a complex profile often linked to autism, characterized by anxiety-driven avoidance of demands. Effective support requires understanding, flexibility, and tailored strategies.
         </p>
         <p>
           This site offers information not just on PDA, but also on navigating related support systems like EHCPs, DLA, and the Blue Badge scheme within the UK.
         </p>
      </section>

      {/* Key Areas Section */}
      <section className="key-areas mb-5">
        <h2 className="text-center mb-4">Explore Key Areas</h2>
        <div className="row justify-content-center"> {/* Use Bootstrap grid for layout */}

          {/* Card 1: Understanding PDA */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm home-card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Understanding PDA</h5>
                <p className="card-text flex-grow-1">Learn about the characteristics, challenges, and nuances of the Pathological Demand Avoidance profile.</p>
                <Link to="/pda" className="btn btn-outline-primary mt-auto">Learn More</Link>
              </div>
            </div>
          </div>

          {/* Card 2: Tips & Strategies */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm home-card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Practical Strategies</h5>
                <p className="card-text flex-grow-1">Discover effective approaches and techniques for supporting children and individuals with PDA.</p>
                <Link to="/tips-and-tricks" className="btn btn-outline-primary mt-auto">Get Tips</Link>
              </div>
            </div>
          </div>

          {/* Card 3: Benefits & Support */}
           <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm home-card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Benefits & Support Systems</h5>
                <p className="card-text flex-grow-1">Navigate EHCPs, DLA, and the Blue Badge scheme with our helpful guides and resources.</p>
                {/* Link to a general resources page or specific benefit pages */}
                <Link to="/ehcp" className="btn btn-sm btn-outline-secondary mb-2 d-block">EHCP Guide</Link>
                <Link to="/dla" className="btn btn-sm btn-outline-secondary mb-2 d-block">DLA Guide</Link>
                <Link to="/blue-badge" className="btn btn-sm btn-outline-secondary d-block">Blue Badge Guide</Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home; 