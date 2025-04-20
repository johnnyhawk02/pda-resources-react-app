import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import linksData from './links.json'
import FontSwitcher from './components/FontSwitcher'
import Resources from './components/Resources'
import Home from './components/Home'
import Contact from './components/Contact'
import Ehcp from './components/Ehcp'
import Dla from './components/Dla'
import BlueBadge from './components/BlueBadge'
import Articles from './components/Articles'
import PDA from './components/PDA'
import TipsAndTricks from './components/TipsAndTricks'
import ScrollToTop from './components/ScrollToTop'
import logoSvg from './assets/images/brainstorming-svgrepo-com.svg'
import './App.css'

// Define default fonts
const defaultHeadlineFont = '"Merriweather", serif'; // Update default headline
const defaultBodyFont = '"Open Sans", sans-serif'; // Default body is already Open Sans, ensure quotes

function App() {
  const [resources, setResources] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Add state for selected fonts
  const [currentHeadlineFont, setCurrentHeadlineFont] = useState(defaultHeadlineFont);
  const [currentBodyFont, setCurrentBodyFont] = useState(defaultBodyFont);

  // Refs for navbar collapse
  const navTogglerRef = useRef(null);
  const collapseNavbarRef = useRef(null);
  
  // State to control mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation(); // Get current location

  // Function to close navbar on mobile after click
  const handleNavClick = () => {
    // Close the mobile menu when a link is clicked
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  
  // Toggle mobile menu function
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    try {
      setResources(linksData.resources);
      setLoading(false);
    } catch (err) {
      console.error("Error loading resources:", err);
      setError('Failed to load resources. Please check the console.');
      setLoading(false);
    }
  }, []);

  // Effect to update the HEADLINE font CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty('--app-headline-font-family', currentHeadlineFont);
  }, [currentHeadlineFont]);

  // Effect to update the BODY font CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty('--app-body-font-family', currentBodyFont);
  }, [currentBodyFont]);

  const generateId = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <>
      <ScrollToTop />
      {/* Navigation Bar */}
      <nav className="main-nav">
        <div className="nav-container">
          {/* Brand/logo */}
          <Link className="nav-brand" to="/" onClick={handleNavClick}>
            <img src={logoSvg} alt="PDA Resources Logo" className="nav-logo" />
            <span className="brand-text">PDA Resources</span>
          </Link>
          
          {/* Mobile menu toggle button */}
          <button 
            className="nav-toggler" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className="nav-toggler-icon"></span>
          </button>
          
          {/* Navigation menu */}
          <div className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end onClick={handleNavClick}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pda" onClick={handleNavClick}>What is PDA?</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/resources" onClick={handleNavClick}>Resources</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/articles" onClick={handleNavClick}>Articles</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tips" onClick={handleNavClick}>Tips & Strategies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ehcp" onClick={handleNavClick}>EHCP</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dla" onClick={handleNavClick}>DLA</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blue-badge" onClick={handleNavClick}>Blue Badge</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={handleNavClick}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pda" element={<PDA />} />
          <Route 
            path="/resources" 
            element={(
              <Resources 
                resources={resources}
                loading={loading}
                error={error}
                generateId={generateId}
              />
            )} 
          />
          <Route path="/ehcp" element={<Ehcp />} />
          <Route path="/dla" element={<Dla />} />
          <Route path="/blue-badge" element={<BlueBadge />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/tips" element={<TipsAndTricks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} PDA Resources. Content gathered from various sources.</p>
          <p className="disclaimer">This site provides informational links and is not a substitute for professional advice.</p>
        </div>
      </footer>

      {/* Font Switcher */}
      <FontSwitcher 
        selectedHeadlineFont={currentHeadlineFont}
        selectedBodyFont={currentBodyFont}
        onHeadlineFontChange={setCurrentHeadlineFont} 
        onBodyFontChange={setCurrentBodyFont}
      />
    </>
  );
}

export default App;
