
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Find the <span className="text-blue-600">Best Products</span> for Your Needs
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Expert reviews, detailed comparisons, and honest recommendations to help you make the right choice. 
          We've tested dozens of products so you don't have to.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            View Top Recommendations
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
          >
            Read Our Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};
