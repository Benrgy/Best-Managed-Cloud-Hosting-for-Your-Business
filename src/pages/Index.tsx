import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Comparison } from "@/components/Comparison";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { ConversionOptimized } from "@/components/ConversionOptimized";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { SemanticLayout } from "@/components/SemanticLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SitemapGenerator } from "@/components/SitemapGenerator";
import { Analytics } from "@/components/Analytics";
import { AccessibilityEnhancer } from "@/components/AccessibilityEnhancer";
import { 
  organizationSchema, 
  websiteSchema, 
  productSchema, 
  reviewSchema, 
  breadcrumbSchema, 
  faqSchema, 
  howToSchema 
} from "@/data/structuredData";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema, 
      websiteSchema,
      productSchema,
      reviewSchema, 
      breadcrumbSchema,
      faqSchema,
      howToSchema
    ]
  };

  return (
    <>
      <SEO 
        title="Best Managed Cloud Hosting for Your Business in 2025 | Cloudways Review & Complete Guide"
        description="Discover why Cloudways is the #1 choice for managed cloud hosting. Get enterprise-level performance, ThunderStack optimization, 24/7 expert support, and flexible pricing starting at $11/month. Free migration, SSL, and 99.99% uptime guarantee included."
        keywords="best managed cloud hosting, cloudways hosting, business cloud hosting, managed hosting services, cloud hosting providers, wordpress hosting, e-commerce hosting, enterprise hosting, web hosting comparison, managed hosting reviews, thunderstack technology, aws hosting, google cloud hosting"
        canonicalUrl="https://yoursite.lovable.app"
        structuredData={structuredData}
      />
      <Analytics />
      <AccessibilityEnhancer />
      <SemanticLayout>
        <Breadcrumbs />
        <Hero />
        <ProductShowcase />
        <Features />
        <About />
        <Comparison />
        <Reviews />
        <FAQ />
        <ConversionOptimized />
        <CallToAction />
        <Footer />
        <SitemapGenerator />
      </SemanticLayout>
    </>
  );
};

export default Index;
