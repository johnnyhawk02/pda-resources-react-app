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
        return <p className="text-center">Loading resources...</p>;
    }

    if (error) {
        return <div className="alert alert-danger" role="alert">{error}</div>;
    }

    const categories = Object.keys(resources);

    return (
        <div id="resource-sections">
            {categories.map(category => {
                const categoryId = generateId(category);
                const links = resources[category] || []; // Ensure links is always an array

                // Don't render empty categories
                if (links.length === 0) {
                    return null;
                }
                
                return (
                    <section key={categoryId} id={categoryId} className="resource-section">
                        <h2 className="mb-3">{category}</h2>
                        <div className="list-group shadow-sm">
                            {links.map((link, index) => (
                                <a 
                                    key={`${categoryId}-${index}`} 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="list-group-item list-group-item-action"
                                >
                                    <h5 className="mb-1">{link.title}</h5>
                                    {/* Conditionally render description if it exists */}
                                    {link.description && <p className="mb-1">{link.description}</p>}
                                    {/* Conditionally render postcode if it exists and is not empty */}
                                    {link.postcode && <p className="mb-0 text-muted small">Postcode: {link.postcode}</p>}
                                </a>
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

export default Resources; 