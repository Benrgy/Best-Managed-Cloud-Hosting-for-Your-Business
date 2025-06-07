
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
        title="Best Managed Cloud Hosting 2025 | CloudHost Pro"
        description="Cloudways is the #1 managed cloud hosting choice. Enterprise performance, 24/7 support, flexible pricing from $11/month. Free migration."
        keywords="best managed cloud hosting, cloudways hosting, business cloud hosting, managed hosting services, cloud hosting providers, wordpress hosting, ecommerce hosting, enterprise hosting, web hosting comparison, managed hosting reviews, thunderstack technology, aws hosting, google cloud hosting"
        canonicalUrl="https://best-managed-cloud-hosting-for-business.lovable.app"
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
