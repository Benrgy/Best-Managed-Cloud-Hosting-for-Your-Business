
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Best <span className="text-blue-600">Managed Cloud Hosting</span> for Your Business
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover why Cloudways is the #1 choice for managed cloud hosting. Simplified cloud hosting with enterprise-level performance, 
          24/7 support, and flexible pricing starting at just $11/month.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
          >
            Start Free Trial - 3 Days Free
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
          >
            Learn More
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          ✓ Free SSL ✓ Free Migration ✓ 24/7 Support ✓ No Setup Fees
        </p>
      </div>
    </section>
  );
};
