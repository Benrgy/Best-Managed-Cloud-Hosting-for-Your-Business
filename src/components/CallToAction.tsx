
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Find Your Perfect Product?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of satisfied customers who found exactly what they needed with our expert recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
          >
            Shop Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
          >
            Get Free Guide
          </Button>
        </div>
      </div>
    </section>
  );
};
