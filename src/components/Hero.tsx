
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🏆 #1 Choice for Business Hosting
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Best <span className="text-blue-600">Managed Cloud Hosting</span> for Your Business
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Discover why <strong>Cloudways is the #1 choice</strong> for managed cloud hosting. Get enterprise-level performance, 
          24/7 expert support, and flexible pricing starting at just <strong>$11/month</strong>. 
          Join 250,000+ successful websites with <strong>free migration included</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
          >
            Start 3-Day Free Trial
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold"
            onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
          >
            View Plans & Pricing
          </Button>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">99.99%</div>
            <div className="text-sm text-gray-600">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">250K+</div>
            <div className="text-sm text-gray-600">Websites Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">65+</div>
            <div className="text-sm text-gray-600">Data Centers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Expert Support</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>Free SSL Certificate</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>Free Website Migration</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>No Setup Fees</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>Advanced Security</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span>ThunderStack Technology</span>
          </div>
        </div>

        <p className="text-sm text-blue-600 mt-4 font-medium">
          <strong>Limited Time:</strong> Use code "G2Saveme20" for 20% off your first 3 months
        </p>
      </div>
    </section>
  );
};
