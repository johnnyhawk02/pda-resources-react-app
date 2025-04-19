import React from 'react';
import articleData from '../articles.json'; // Import the JSON data
import './Articles.css';

function Articles() {
    const articles = articleData.articles || [];

    return (
        <div className="container mt-5 articles-page">
            <h2>Helpful Articles on PDA</h2>
            <p className="lead mb-4">A collection of articles from various sources offering insights into Pathological Demand Avoidance.</p>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {articles.map((article, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100 shadow-sm article-card">
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text article-synopsis">{article.synopsis}</p>
                            </div>
                            <div className="card-footer bg-transparent border-top-0">
                                <a 
                                    href={article.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-primary btn-sm article-link-btn"
                                >
                                    Read Article
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {articles.length === 0 && <p>No articles found.</p>}
        </div>
    );
}

export default Articles; 