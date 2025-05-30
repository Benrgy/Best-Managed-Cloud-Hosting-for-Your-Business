
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Features } from "@/components/Features";
import { Comparison } from "@/components/Comparison";
import { Reviews } from "@/components/Reviews";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductShowcase />
      <Features />
      <Comparison />
      <Reviews />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
