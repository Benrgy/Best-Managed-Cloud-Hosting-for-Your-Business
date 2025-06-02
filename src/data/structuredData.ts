
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cloudways Hosting Reviews Nederland",
  "description": "Expert reviews en vergelijkingen van Cloudways beheerde cloud hosting diensten voor Nederlandse bedrijven",
  "url": "https://cloudways-review.nl",
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
    "availableLanguage": ["Dutch", "English"]
  },
  "areaServed": "Netherlands",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NL"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Beste Beheerde Cloud Hosting Reviews Nederland",
  "url": "https://cloudways-review.nl",
  "description": "Expert reviews en vergelijkingen van beheerde cloud hosting diensten in Nederland",
  "inLanguage": "nl",
  "publisher": {
    "@type": "Organization",
    "name": "Cloudways Hosting Reviews Nederland"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://cloudways-review.nl/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Cloudways Beheerde Cloud Hosting",
  "description": "Premium beheerde cloud hosting platform met ThunderStack optimalisatie, 24/7 ondersteuning en enterprise-niveau prestaties voor Nederlandse bedrijven",
  "brand": {
    "@type": "Brand",
    "name": "Cloudways"
  },
  "category": "Web Hosting Diensten",
  "offers": {
    "@type": "Offer",
    "price": "10.00",
    "priceCurrency": "EUR",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Cloudways"
    },
    "url": "https://www.cloudways.com/en/?id=1384181",
    "areaServed": "Netherlands"
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
        "name": "Sarah van der Berg"
      },
      "reviewBody": "Cloudways heeft de prestaties van onze online winkel getransformeerd. De beheerde hosting zorgt voor alle technische aspecten terwijl wij ons kunnen richten op het laten groeien van ons bedrijf."
    }
  ]
};

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "Cloudways Beheerde Cloud Hosting",
    "description": "Beheerde cloud hosting platform met enterprise-niveau prestaties voor Nederlandse bedrijven",
    "brand": {
      "@type": "Brand",
      "name": "Cloudways"
    },
    "offers": {
      "@type": "Offer",
      "price": "10.00",
      "priceCurrency": "EUR"
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
    "name": "Cloudways Hosting Reviews Nederland"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Cloudways Hosting Reviews Nederland"
  },
  "datePublished": "2025-01-01",
  "reviewBody": "Cloudways biedt uitzonderlijke beheerde cloud hosting met ThunderStack optimalisatie, 24/7 ondersteuning en flexibele prijzen. Perfect voor Nederlandse bedrijven die enterprise-niveau prestaties zoeken zonder complexiteit.",
  "inLanguage": "nl"
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cloudways-review.nl"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Beste Beheerde Cloud Hosting Nederland",
      "item": "https://cloudways-review.nl/#features"
    }
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is de beste beheerde cloud hosting voor bedrijven in Nederland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cloudways wordt algemeen beschouwd als de beste beheerde cloud hosting voor Nederlandse bedrijven, met enterprise-niveau prestaties, 24/7 ondersteuning en flexibele prijzen vanaf €10/maand. Het combineert de kracht van top cloud providers zoals AWS, Google Cloud en DigitalOcean met beheerde diensten."
      }
    },
    {
      "@type": "Question",
      "name": "Hoeveel kost Cloudways beheerde hosting in Nederland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cloudways prijzen beginnen bij €10/maand voor een 1GB DigitalOcean server met 25GB SSD opslag. Plannen schalen op naar enterprise niveaus met pay-as-you-go facturering, geen setup kosten en inclusief gratis SSL, migratie en 24/7 ondersteuning."
      }
    },
    {
      "@type": "Question",
      "name": "Biedt Cloudways gratis migratie voor Nederlandse klanten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Cloudways biedt één gratis website migratie uitgevoerd door hun expert engineers. Het migratie team zorgt voor zero downtime en handelt alle technische aspecten af van het verhuizen van uw website van uw huidige host."
      }
    },
    {
      "@type": "Question",
      "name": "Is Cloudways GDPR-compliant voor Nederlandse bedrijven?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Cloudways is volledig GDPR-compliant en biedt datacenter locaties binnen de EU voor Nederlandse bedrijven die data sovereignty vereisen. Alle persoonlijke gegevens worden veilig verwerkt volgens Nederlandse en EU wetgeving."
      }
    }
  ]
};

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Hoe de Beste Beheerde Cloud Hosting Kiezen in Nederland",
  "description": "Stap-voor-stap gids voor het selecteren van de juiste beheerde cloud hosting provider voor uw Nederlandse bedrijf",
  "totalTime": "PT10M",
  "inLanguage": "nl",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Beoordeel Uw Vereisten",
      "text": "Bepaal het verkeer van uw website, opslag behoeften en prestatie vereisten voor de Nederlandse markt"
    },
    {
      "@type": "HowToStep", 
      "name": "Vergelijk Cloud Providers",
      "text": "Evalueer verschillende cloud infrastructuur providers zoals AWS, Google Cloud en DigitalOcean voor Nederlandse datacenters"
    },
    {
      "@type": "HowToStep",
      "name": "Controleer Ondersteuning Kwaliteit",
      "text": "Zorg ervoor dat 24/7 expert ondersteuning beschikbaar is via live chat, telefoon en email in uw tijdzone"
    },
    {
      "@type": "HowToStep",
      "name": "Bekijk Beveiligingsfeatures",
      "text": "Zoek naar SSL certificaten, firewalls, regelmatige backups, malware scanning en GDPR compliance voor Nederlandse wet"
    }
  ]
};
