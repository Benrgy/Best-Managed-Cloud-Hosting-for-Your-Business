
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Features } from "@/components/Features";
import { Comparison } from "@/components/Comparison";
import { Reviews } from "@/components/Reviews";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { SemanticLayout } from "@/components/SemanticLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SitemapGenerator } from "@/components/SitemapGenerator";
import { organizationSchema, reviewSchema, faqSchema } from "@/data/structuredData";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, reviewSchema, faqSchema]
  };

  return (
    <>
      <SEO 
        title="Best Managed Cloud Hosting for Your Business in 2025 | Cloudways Review"
        description="Discover why Cloudways is the #1 choice for managed cloud hosting. Get enterprise-level performance, 24/7 support, and flexible pricing starting at $11/month. Free migration included."
        keywords="best managed cloud hosting, cloudways hosting, business cloud hosting, managed hosting services, cloud hosting providers, wordpress hosting, e-commerce hosting"
        canonicalUrl="https://yoursite.lovable.app"
        structuredData={structuredData}
      />
      <SemanticLayout>
        <Breadcrumbs />
        <Hero />
        <ProductShowcase />
        <Features />
        <Comparison />
        <Reviews />
        <CallToAction />
        <Footer />
        <SitemapGenerator />
      </SemanticLayout>
    </>
  );
};

export default Index;
