import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SchemaMarkup() {
  const location = useLocation();
  const path = location.pathname;
  
  useEffect(() => {
    // Remove any existing schema script
    const existingScript = document.getElementById('schema-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create structured data based on current path
    let schemaData;
    
    // Default website schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://pdaresources.org/#website',
      'url': 'https://pdaresources.org/',
      'name': 'PDA Resources',
      'description': 'Comprehensive resources for Pathological Demand Avoidance (PDA)',
      'publisher': {
        '@type': 'Organization',
        'name': 'PDA Resources',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://pdaresources.org/logo.png'
        }
      }
    };
    
    // Path-specific schema
    switch (path) {
      case '/':
        schemaData = {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': 'https://pdaresources.org/#webpage',
          'url': 'https://pdaresources.org/',
          'name': 'PDA Resources - Support for Pathological Demand Avoidance',
          'description': 'Comprehensive resources for Pathological Demand Avoidance (PDA) including strategies, EHCP guidance, DLA information, and support materials.',
          'isPartOf': { '@id': 'https://pdaresources.org/#website' }
        };
        break;
        
      case '/pda':
        schemaData = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What is Pathological Demand Avoidance (PDA)?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Pathological Demand Avoidance (PDA) is a profile that describes those whose main characteristic is to avoid everyday demands and expectations to an extreme extent.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Is PDA a form of autism?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'PDA is considered by many to be a profile on the autism spectrum, although there is ongoing research about its specific classification.'
              }
            }
          ]
        };
        break;
        
      case '/resources':
        schemaData = {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': 'https://pdaresources.org/resources/#webpage',
          'url': 'https://pdaresources.org/resources/',
          'name': 'PDA Resources and Support Materials',
          'description': 'Find helpful resources, books, websites, and support materials for understanding and managing Pathological Demand Avoidance (PDA).',
          'isPartOf': { '@id': 'https://pdaresources.org/#website' }
        };
        break;
        
      default:
        // For all other pages use a basic WebPage schema
        schemaData = {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `https://pdaresources.org${path}/#webpage`,
          'url': `https://pdaresources.org${path}/`,
          'isPartOf': { '@id': 'https://pdaresources.org/#website' }
        };
    }
    
    // Create script element with schema data
    const script = document.createElement('script');
    script.id = 'schema-script';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify([websiteSchema, schemaData]);
    
    // Add to document head
    document.head.appendChild(script);
    
    return () => {
      // Clean up on unmount
      if (script) {
        script.remove();
      }
    };
  }, [path]);
  
  // This component doesn't render anything
  return null;
}

export default SchemaMarkup; 