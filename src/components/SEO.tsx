
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

export const SEO = ({
  title = "Best Managed Cloud Hosting 2025 | Cloudways Review & Comparison",
  description = "Cloudways is the #1 managed cloud hosting choice for businesses. Enterprise performance, 24/7 support, flexible pricing from $11/month. Free migration included.",
  keywords = "best managed cloud hosting, cloudways hosting, business cloud hosting, managed hosting services, cloud hosting providers, wordpress hosting, ecommerce hosting, enterprise hosting, web hosting comparison, managed hosting reviews, thunderstack technology, aws hosting, google cloud hosting",
  canonicalUrl = "https://yoursite.lovable.app",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  structuredData
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="en" />
      <meta name="author" content="Cloudways Hosting Reviews" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Enhanced meta tags for better SEO */}
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* hreflang for multilingual SEO */}
      <link rel="alternate" href="https://yoursite.lovable.app" hrefLang="en" />
      <link rel="alternate" href="https://yoursite.lovable.app" hrefLang="x-default" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Cloudways Hosting Reviews" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:author" content="Cloudways Hosting Reviews" />
      <meta property="article:publisher" content="https://yoursite.lovable.app" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@cloudways" />
      <meta name="twitter:site" content="@cloudways" />
      <meta name="twitter:domain" content="yoursite.lovable.app" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="msapplication-navbutton-color" content="#2563eb" />
      <meta name="apple-mobile-web-app-title" content="Cloudways Hosting Reviews" />
      
      {/* Critical resource preloading for better LCP */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
      <link rel="preload" as="image" href="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" />
      
      {/* Performance and Core Web Vitals hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://cloudways.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Defer non-critical third-party scripts */}
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "${canonicalUrl}",
          "name": "Cloudways Hosting Reviews",
          "description": "${description}",
          "inLanguage": "en"
        }`}
      </script>
      
      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
