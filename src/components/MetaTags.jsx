import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Page metadata configuration
const META_DATA = {
  '/': {
    title: 'PDA Resources - Support for Pathological Demand Avoidance',
    description: 'Comprehensive resources for Pathological Demand Avoidance (PDA) including strategies, EHCP guidance, DLA information, and support materials for families and educators.',
    keywords: 'PDA, Pathological Demand Avoidance, autism, SEND, special needs, neurodiversity',
  },
  '/pda': {
    title: 'What is PDA? | PDA Resources',
    description: 'Learn about Pathological Demand Avoidance (PDA), its characteristics, and how it differs from other autism spectrum conditions.',
    keywords: 'what is PDA, pathological demand avoidance characteristics, PDA profile, autism, neurodevelopmental condition',
  },
  '/resources': {
    title: 'PDA Resources and Support Materials | PDA Resources',
    description: 'Find helpful resources, books, websites, and support materials for understanding and managing Pathological Demand Avoidance (PDA).',
    keywords: 'PDA resources, pathological demand avoidance support, PDA books, PDA websites',
  },
  '/articles': {
    title: 'PDA Articles and Research | PDA Resources',
    description: 'Latest articles, research papers, and studies about Pathological Demand Avoidance (PDA) for parents, educators, and professionals.',
    keywords: 'PDA articles, pathological demand avoidance research, PDA studies, PDA papers',
  },
  '/tips': {
    title: 'PDA Strategies and Tips | PDA Resources',
    description: 'Practical strategies, tips, and techniques for supporting individuals with Pathological Demand Avoidance (PDA) at home and school.',
    keywords: 'PDA strategies, pathological demand avoidance tips, managing PDA, PDA techniques',
  },
  '/ehcp': {
    title: 'EHCP Guidance for PDA | PDA Resources',
    description: 'Information and guidance about Education, Health and Care Plans (EHCP) for children with Pathological Demand Avoidance (PDA).',
    keywords: 'PDA EHCP, education health care plan, special educational needs, SEND support',
  },
  '/dla': {
    title: 'DLA Information for PDA | PDA Resources',
    description: 'Guidance on applying for Disability Living Allowance (DLA) for children with Pathological Demand Avoidance (PDA).',
    keywords: 'PDA disability living allowance, DLA application PDA, PDA benefits, financial support',
  },
  '/blue-badge': {
    title: 'Blue Badge Information for PDA | PDA Resources',
    description: 'Information about Blue Badge eligibility and application for families of children with Pathological Demand Avoidance (PDA).',
    keywords: 'PDA blue badge, disabled parking permit, blue badge application, PDA parking',
  },
  '/contact': {
    title: 'Contact Us | PDA Resources',
    description: 'Get in touch with PDA Resources for questions, feedback, or support regarding Pathological Demand Avoidance (PDA).',
    keywords: 'contact PDA resources, PDA help, PDA support, PDA questions',
  },
};

// Default metadata
const DEFAULT_META = {
  title: 'PDA Resources - Support for Pathological Demand Avoidance',
  description: 'Comprehensive resources for Pathological Demand Avoidance (PDA) including strategies, EHCP guidance, DLA information, and support materials.',
  keywords: 'PDA, Pathological Demand Avoidance, autism, SEND, special needs, neurodiversity',
};

function MetaTags() {
  const location = useLocation();
  const path = location.pathname;
  
  useEffect(() => {
    // Get metadata for current path or use default
    const metadata = META_DATA[path] || DEFAULT_META;
    
    // Update document title
    document.title = metadata.title;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', metadata.keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', metadata.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', metadata.description);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://pdaresources.org${path}`);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', metadata.title);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', metadata.description);
    }
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', `https://pdaresources.org${path}`);
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `https://pdaresources.org${path}`);
    }
  }, [path]);
  
  // This component doesn't render anything
  return null;
}

export default MetaTags; 