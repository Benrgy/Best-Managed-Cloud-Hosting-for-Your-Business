
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
        title="Beste Beheerde Cloud Hosting Nederland 2025 | Cloudways Review"
        description="Cloudways is de #1 beheerde cloud hosting keuze in Nederland. Enterprise prestaties, 24/7 support, flexibele prijzen vanaf €10/maand. Gratis migratie inbegrepen."
        keywords="beste beheerde cloud hosting nederland, cloudways hosting, zakelijke cloud hosting, managed hosting diensten, cloud hosting providers nederland, wordpress hosting, e-commerce hosting, enterprise hosting, web hosting vergelijking, beheerde hosting reviews, thunderstack technologie, aws hosting nederland, google cloud hosting"
        canonicalUrl="https://cloudways-review.nl"
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
