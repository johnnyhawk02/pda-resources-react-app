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

  const location = useLocation(); // Get current location

  // Function to close navbar on mobile after click
  const handleNavClick = () => {
    // Check if the navbar collapse element exists and is currently shown (visible)
    if (collapseNavbarRef.current && collapseNavbarRef.current.classList.contains('show')) {
      // Trigger a click on the toggler button to close the collapse menu
      navTogglerRef.current.click();
    }
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

  const categories = Object.keys(resources || {});

  // Determine if a Key Support sub-page is active
  const isKeySupportActive = [
    '/ehcp',
    '/dla',
    '/blue-badge'
  ].some(path => location.pathname.startsWith(path));

  return (
    <>
      <ScrollToTop />
      {/* Navigation Bar */}
      <nav className="navbar navbar-custom navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          {/* Revert to text brand */}
          <Link className="navbar-brand" to="/" onClick={handleNavClick}>
            PDA Resources
          </Link>
          <button 
            ref={navTogglerRef}
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div 
            ref={collapseNavbarRef}
            className="collapse navbar-collapse" 
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* Use NavLink for active styling */}
                <NavLink className="nav-link" to="/" end onClick={handleNavClick}>Home</NavLink>
              </li>
              {/* Add What is PDA? Link */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/pda" onClick={handleNavClick}>What is PDA?</NavLink>
              </li>
              {/* Resources Dropdown */}
              <li className="nav-item dropdown">
                <NavLink 
                  className="nav-link dropdown-toggle" 
                  to="/resources" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Resources
                </NavLink>
                <ul className="dropdown-menu">
                  {loading ? (
                    <li><span className="dropdown-item">Loading...</span></li>
                  ) : error ? (
                    <li><span className="dropdown-item text-danger">Error</span></li>
                  ) : (
                    categories.map(category => (
                      <li key={generateId(category)}>
                        {/* Link to resource page with hash */}
                        <Link 
                          className="dropdown-item" 
                          to={`/resources#${generateId(category)}`}
                          onClick={handleNavClick}
                        >
                          {category}
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </li>
              {/* Add Articles Link */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/articles" onClick={handleNavClick}>Articles</NavLink>
              </li>
              {/* Tips & Strategies Link */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/tips" onClick={handleNavClick}>Tips & Strategies</NavLink>
              </li>
              {/* Key Support Dropdown */}
              <li className={`nav-item dropdown ${isKeySupportActive ? 'active-dropdown-parent' : ''}`}>
                <a 
                  className={`nav-link dropdown-toggle ${isKeySupportActive ? 'active' : ''}`} 
                  href="#"
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Key Support
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/ehcp" onClick={handleNavClick}>EHCP</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/dla" onClick={handleNavClick}>DLA</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/blue-badge" onClick={handleNavClick}>Blue Badge</NavLink></li>
                </ul>
              </li>
              {/* Removed individual links for EHCP, DLA, Blue Badge */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={handleNavClick}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Area - Routes define what component renders */}
      <div className="container app-container">
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
          {/* Add routes for the new pages */}
          <Route path="/ehcp" element={<Ehcp />} />
          <Route path="/dla" element={<Dla />} />
          <Route path="/blue-badge" element={<BlueBadge />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/tips" element={<TipsAndTricks />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add a fallback route maybe? */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>

      {/* Footer */}
      <footer className="text-center mt-auto py-3">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} PDA Resources. Content gathered from various sources.</p>
          <p className="small mb-0">This site provides informational links and is not a substitute for professional advice.</p>
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
