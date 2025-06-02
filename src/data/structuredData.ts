
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cloudways Hosting Reviews",
  "description": "Expert reviews and comparisons of Cloudways managed cloud hosting services for businesses",
  "url": "https://yoursite.lovable.app",
  "logo": {
    "@type": "ImageObject",
    "url": "https://lovable.dev/opengraph-image-p98pqg.png",
    "width": 1200,
    "height": 630
  },
  "sameAs": [
    "https://www.cloudways.com",
    "https://www.facebook.com/cloudways",
    "https://twitter.com/cloudways"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Best Managed Cloud Hosting Reviews",
  "url": "https://yoursite.lovable.app",
  "description": "Expert reviews and comparisons of managed cloud hosting services",
  "publisher": {
    "@type": "Organization",
    "name": "Cloudways Hosting Reviews"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://yoursite.lovable.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Cloudways Managed Cloud Hosting",
  "description": "Premium managed cloud hosting platform with ThunderStack optimization, 24/7 support, and enterprise-level performance",
  "brand": {
    "@type": "Brand",
    "name": "Cloudways"
  },
  "category": "Web Hosting Services",
  "offers": {
    "@type": "Offer",
    "price": "11.00",
    "priceCurrency": "USD",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Cloudways"
    },
    "url": "https://www.cloudways.com/en/?id=1384181"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "15000",
    "reviewCount": "8500"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "reviewBody": "Cloudways has transformed our online store's performance. The managed hosting takes care of all the technical aspects while we focus on growing our business."
    }
  ]
};

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "Cloudways Managed Cloud Hosting",
    "description": "Managed cloud hosting platform with enterprise-level performance",
    "brand": {
      "@type": "Brand",
      "name": "Cloudways"
    },
    "offers": {
      "@type": "Offer",
      "price": "11.00",
      "priceCurrency": "USD"
    }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Organization",
    "name": "Cloudways Hosting Reviews"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Cloudways Hosting Reviews"
  },
  "datePublished": "2025-01-01",
  "reviewBody": "Cloudways provides exceptional managed cloud hosting with ThunderStack optimization, 24/7 support, and flexible pricing. Perfect for businesses seeking enterprise-level performance without complexity."
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://yoursite.lovable.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Best Managed Cloud Hosting",
      "item": "https://yoursite.lovable.app/#features"
    }
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best managed cloud hosting for business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cloudways is widely considered the best managed cloud hosting for businesses, offering enterprise-level performance, 24/7 support, and flexible pricing starting at $11/month. It combines the power of top cloud providers like AWS, Google Cloud, and DigitalOcean with managed services."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Cloudways managed hosting cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cloudways pricing starts at $11/month for a 1GB DigitalOcean server with 25GB SSD storage. Plans scale up to enterprise levels with pay-as-you-go billing, no setup fees, and includes free SSL, migration, and 24/7 support."
      }
    },
    {
      "@type": "Question",
      "name": "Does Cloudways offer free migration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Cloudways provides one free website migration handled by their expert engineers. The migration team ensures zero downtime and handles all technical aspects of moving your website from your current host."
      }
    },
    {
      "@type": "Question",
      "name": "What cloud providers does Cloudways support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cloudways supports 6 major cloud providers: DigitalOcean, AWS (Amazon Web Services), Google Cloud Platform, Linode, Vultr, and KYUP. You can choose the provider that best fits your needs and budget."
      }
    },
    {
      "@type": "Question",
      "name": "What is ThunderStack technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ThunderStack is Cloudways' proprietary performance optimization technology that combines Apache, NGINX, Varnish, Redis, and Memcached for superior caching and speed. It delivers up to 3x faster page loads compared to traditional hosting."
      }
    }
  ]
};

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Choose the Best Managed Cloud Hosting",
  "description": "Step-by-step guide to selecting the right managed cloud hosting provider for your business",
  "totalTime": "PT10M",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Assess Your Requirements",
      "text": "Determine your website's traffic, storage needs, and performance requirements"
    },
    {
      "@type": "HowToStep", 
      "name": "Compare Cloud Providers",
      "text": "Evaluate different cloud infrastructure providers like AWS, Google Cloud, and DigitalOcean"
    },
    {
      "@type": "HowToStep",
      "name": "Check Support Quality",
      "text": "Ensure 24/7 expert support is available via live chat, phone, and email"
    },
    {
      "@type": "HowToStep",
      "name": "Review Security Features",
      "text": "Look for SSL certificates, firewalls, regular backups, and malware scanning"
    }
  ]
};
