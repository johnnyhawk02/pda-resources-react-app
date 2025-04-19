import { useState, useEffect } from 'react'
import linksData from './links.json'
import FontSwitcher from './components/FontSwitcher'
import './App.css'

// Define default fonts
const defaultHeadlineFont = '"Poppins", sans-serif'; // Example default headline
const defaultBodyFont = '"Roboto", sans-serif';     // Example default body

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

  const categories = Object.keys(resources);

  const generateId = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <>
      {/* ... Navbar ... */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">PDA Resources</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {loading ? (
                <li className="nav-item"><span className="nav-link">Loading...</span></li>
              ) : error ? (
                 <li className="nav-item"><span className="nav-link text-danger">Error</span></li>
              ) : (
                categories.map(category => (
                  <li className="nav-item" key={generateId(category)}>
                    <a className="nav-link" href={`#${generateId(category)}`}>{category}</a>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* ... Main Content ... */}
      <div className="container app-container">
        <header className="text-center mb-5">
          <h1 className="display-4">Pathological Demand Avoidance (PDA) & SEND Resources</h1>
          <p className="lead">A curated list of helpful links for families and individuals in Merseyside and across the UK.</p>
        </header>

        <div id="resource-sections">
          {loading && <p className="text-center">Loading resources...</p>}
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          {!loading && !error && categories.map(category => {
            const categoryId = generateId(category);
            return (
              <section key={categoryId} id={categoryId} className="resource-section">
                <h2 className="mb-3">{category}</h2>
                <div className="list-group shadow-sm">
                  {resources[category].map((link, index) => (
                    <a 
                      key={`${categoryId}-${index}`} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="list-group-item list-group-item-action"
                    >
                      <h5 className="mb-1">{link.title}</h5>
                      <p className="mb-1">{link.description}</p>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* ... Footer ... */}
      <footer className="text-center mt-auto py-3">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} PDA Resources. Content gathered from various sources.</p>
          <p className="small mb-0">This site provides informational links and is not a substitute for professional advice.</p>
        </div>
      </footer>

      {/* Font Switcher (only renders in development) */}
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
