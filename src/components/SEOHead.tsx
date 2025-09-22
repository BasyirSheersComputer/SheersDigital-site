import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Servora - Transform Your F&B Empire | Reclaim RM 20,000+ Monthly",
  description = "Premium Malaysian F&B chains: Stop losing RM 20,000+ monthly to operational chaos. Get enterprise solutions with 5-day results guarantee. 250+ chains optimized. Free consultation available.",
  keywords = "F&B software Malaysia, restaurant management system, inventory management, food waste reduction, Malaysian restaurant technology, F&B automation, restaurant POS integration, supply chain optimization",
  canonicalUrl = "https://sheerssoft.com",
  ogImage = "https://sheerssoft.com/og-image.jpg",
  ogType = "website",
  structuredData,
  noIndex = false
}) => {
  const fullTitle = title.includes('Servora') ? title : `${title} | Servora`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Servora" />
      <meta property="og:locale" content="en_MY" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
