
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cloudways Hosting Reviews",
  "description": "Expert reviews and comparisons of Cloudways managed cloud hosting services",
  "url": "https://yoursite.lovable.app",
  "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
  "sameAs": [
    "https://www.cloudways.com"
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
  "reviewBody": "Cloudways provides exceptional managed cloud hosting with ThunderStack optimization, 24/7 support, and flexible pricing. Perfect for businesses seeking enterprise-level performance without complexity."
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
        "text": "Cloudways is widely considered the best managed cloud hosting for businesses, offering enterprise-level performance, 24/7 support, and flexible pricing starting at $11/month."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Cloudways managed hosting cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cloudways pricing starts at $11/month for a 1GB DigitalOcean server. Plans scale up to enterprise levels with pay-as-you-go billing and no setup fees."
      }
    },
    {
      "@type": "Question",
      "name": "Does Cloudways offer free migration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Cloudways provides one free website migration handled by their expert engineers. Additional migrations are available for a fee."
      }
    }
  ]
};
