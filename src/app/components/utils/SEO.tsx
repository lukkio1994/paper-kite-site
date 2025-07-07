import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  additionalMetaTags?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterSite,
  twitterCreator,
  canonical,
  noIndex = false,
  noFollow = false,
  additionalMetaTags = [],
  structuredData,
}) => {
  const robots = [];
  if (noIndex) robots.push('noindex');
  if (noFollow) robots.push('nofollow');

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      {robots.length > 0 && <meta name="robots" content={robots.join(', ')} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      {(ogTitle || title) && <meta name="twitter:title" content={ogTitle || title} />}
      {(ogDescription || description) && (
        <meta name="twitter:description" content={ogDescription || description} />
      )}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Additional meta tags */}
      {additionalMetaTags.map((tag, index) => (
        <meta
          key={index}
          {...(tag.name ? { name: tag.name } : { property: tag.property })}
          content={tag.content}
        />
      ))}
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default SEO;
export type { SEOProps };
