import { useState, useEffect } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import linksData from './links.json'
import FontSwitcher from './components/FontSwitcher'
import Resources from './components/Resources'
import Home from './components/Home'
import Contact from './components/Contact'
import Ehcp from './components/Ehcp'
import Dla from './components/Dla'
import BlueBadge from './components/BlueBadge'
import './App.css'

// Define default fonts
const defaultHeadlineFont = '"Quicksand", sans-serif'; // Set default headline to Quicksand
const defaultBodyFont = '"Open Sans", sans-serif'; // Set default body to Open Sans

function App() {
  const [resources, setResources] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Add state for selected fonts
  const [currentHeadlineFont, setCurrentHeadlineFont] = useState(defaultHeadlineFont);
  const [currentBodyFont, setCurrentBodyFont] = useState(defaultBodyFont);

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

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          {/* Use Link for SPA navigation */}
          <Link className="navbar-brand" to="/">PDA Resources</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* Use NavLink for active styling */}
                <NavLink className="nav-link" to="/" end>Home</NavLink>
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
                        >
                          {category}
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </li>
              {/* Add new top-level links */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/ehcp">EHCP</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dla">DLA</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blue-badge">Blue Badge</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Area - Routes define what component renders */}
      <div className="container app-container">
        <Routes>
          <Route path="/" element={<Home />} />
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
