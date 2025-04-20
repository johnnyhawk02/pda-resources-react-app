import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Resources.css'; // We'll create this for specific styles

function Resources({ resources, loading, error, generateId }) {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location.hash]);

    if (loading) {
        return <div className="resources-loading">Loading resources...</div>;
    }

    if (error) {
        return <div className="resources-error">{error}</div>;
    }

    const categories = Object.keys(resources);

    return (
        <div className="resources-container">
            <header className="resources-header">
                <h1>Resources</h1>
                <p className="subtitle">Helpful links and information organized by category</p>
            </header>
            
            <nav className="category-navigation">
                <h3>Categories</h3>
                <ul className="category-list">
                    {categories.map(category => {
                        const categoryId = generateId(category);
                        const links = resources[category] || [];
                        if (links.length === 0) return null;
                        
                        return (
                            <li key={`nav-${categoryId}`}>
                                <a href={`#${categoryId}`}>{category}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="resource-sections">
                {categories.map(category => {
                    const categoryId = generateId(category);
                    const links = resources[category] || [];

                    // Don't render empty categories
                    if (links.length === 0) {
                        return null;
                    }
                    
                    return (
                        <section key={categoryId} id={categoryId} className="resource-section">
                            <h2 className="category-title">{category}</h2>
                            <div className="resource-list">
                                {links.map((link, index) => (
                                    <a 
                                        key={`${categoryId}-${index}`} 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="resource-card"
                                    >
                                        <h3 className="resource-title">{link.title}</h3>
                                        {link.description && 
                                            <p className="resource-description">{link.description}</p>
                                        }
                                        {link.postcode && 
                                            <p className="resource-postcode">Postcode: {link.postcode}</p>
                                        }
                                    </a>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

export default Resources; 