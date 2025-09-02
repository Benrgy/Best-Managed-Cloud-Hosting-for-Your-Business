export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'Best Managed Cloud Hosting 2025 | Cloudways',
    description: 'Cloudways is the #1 managed cloud hosting choice. Enterprise performance, 24/7 support, flexible pricing from $11/month. Free migration.',
    keywords: 'best managed cloud hosting, cloudways hosting, business cloud hosting, managed hosting services, cloud hosting providers, wordpress hosting, ecommerce hosting, enterprise hosting, web hosting comparison, managed hosting reviews, thunderstack technology, aws hosting, google cloud hosting',
    ogTitle: 'Best Managed Cloud Hosting 2025 | Cloudways',
    ogDescription: 'Cloudways is the #1 managed cloud hosting choice. Enterprise performance, 24/7 support, flexible pricing from $11/month. Free migration.',
    twitterTitle: 'Best Managed Cloud Hosting 2025 | Cloudways',
    twitterDescription: 'Cloudways is the #1 managed cloud hosting choice. Enterprise performance, 24/7 support, flexible pricing from $11/month. Free migration.'
  },
  '/blog': {
    title: 'Cloud Hosting Blog & Guides | Cloudways Insights',
    description: 'Expert cloud hosting tips, tutorials, and industry insights. Learn about managed hosting, performance optimization, and best practices.',
    keywords: 'cloud hosting blog, managed hosting guides, cloudways tutorials, web hosting tips, cloud infrastructure, hosting performance',
    ogTitle: 'Cloud Hosting Blog & Guides | Cloudways Insights',
    ogDescription: 'Expert cloud hosting tips, tutorials, and industry insights. Learn about managed hosting, performance optimization, and best practices.',
    twitterTitle: 'Cloud Hosting Blog & Guides | Cloudways Insights',
    twitterDescription: 'Expert cloud hosting tips, tutorials, and industry insights. Learn about managed hosting, performance optimization, and best practices.'
  },
  '/admin/blog': {
    title: 'Blog Administration | Cloudways Admin',
    description: 'Blog administration panel for managing cloud hosting content and articles.',
    keywords: 'blog admin, content management, cloudways admin',
    ogTitle: 'Blog Administration | Cloudways Admin',
    ogDescription: 'Blog administration panel for managing cloud hosting content and articles.',
    twitterTitle: 'Blog Administration | Cloudways Admin',
    twitterDescription: 'Blog administration panel for managing cloud hosting content and articles.'
  }
};

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];

export const getBlogPostSEO = (title: string, excerpt: string, tags: string[]): SEOConfig => ({
  title: `${title} | Cloudways Blog`,
  description: excerpt.substring(0, 160),
  keywords: tags.join(', '),
  ogTitle: `${title} | Cloudways Blog`,
  ogDescription: excerpt.substring(0, 160),
  twitterTitle: `${title} | Cloudways Blog`,
  twitterDescription: excerpt.substring(0, 160)
});