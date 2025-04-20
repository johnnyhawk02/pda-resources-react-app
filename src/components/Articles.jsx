import React from 'react';
import articleData from '../articles.json'; // Import the JSON data
import './Articles.css';

function Articles() {
    const articles = articleData.articles || [];

    return (
        <div className="articles-container">
            <header className="articles-header">
                <h1>Helpful Articles on PDA</h1>
                <p className="subtitle">A collection of articles from various sources offering insights into Pathological Demand Avoidance.</p>
            </header>

            <div className="articles-grid">
                {articles.map((article, index) => (
                    <article className="article-card" key={index}>
                        <h3 className="article-title">{article.title}</h3>
                        <p className="article-synopsis">{article.synopsis}</p>
                        <div className="article-footer">
                            <a 
                                href={article.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="button primary"
                            >
                                Read Article
                            </a>
                        </div>
                    </article>
                ))}
            </div>
            
            {articles.length === 0 && <p className="no-articles">No articles found.</p>}
        </div>
    );
}

export default Articles; 