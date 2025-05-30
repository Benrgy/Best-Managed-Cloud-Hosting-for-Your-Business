
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Experience the Best Managed Cloud Hosting?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join 250,000+ websites on Cloudways. Start your 3-day free trial today - no credit card required. 
          Get free migration, 24/7 support, and enterprise-level performance at affordable prices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
            onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
          >
            Start 3-Day Free Trial
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
            onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
          >
            View All Plans & Pricing
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-blue-100">
          <div className="flex items-center justify-center">
            <span className="mr-2">✓</span>
            Free SSL Certificate
          </div>
          <div className="flex items-center justify-center">
            <span className="mr-2">✓</span>
            Free Website Migration
          </div>
          <div className="flex items-center justify-center">
            <span className="mr-2">✓</span>
            24/7 Expert Support
          </div>
          <div className="flex items-center justify-center">
            <span className="mr-2">✓</span>
            No Setup Fees
          </div>
        </div>
        <p className="text-sm text-blue-200 mt-4">
          <strong>Limited Time:</strong> Use code "G2Saveme20" for 20% off your first 3 months
        </p>
      </div>
    </section>
  );
};
