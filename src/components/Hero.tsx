
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-xl"></div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="secondary" className="px-4 py-2 bg-white/80 text-gray-700">
            <Star className="h-4 w-4 mr-2 text-yellow-500" />
            4.8/5 Rating
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 bg-white/80 text-gray-700">
            <Users className="h-4 w-4 mr-2 text-blue-500" />
            250,000+ Websites
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 bg-white/80 text-gray-700">
            <Shield className="h-4 w-4 mr-2 text-green-500" />
            Enterprise Security
          </Badge>
        </div>

        <header>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Best <span className="text-blue-600 relative">
              Managed Cloud Hosting
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200 rounded"></div>
            </span><br />
            for Your Business in 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get <strong>enterprise-level performance</strong> with Cloudways managed cloud hosting. 
            Starting at <strong className="text-blue-600">$11/month</strong> with 24/7 expert support, 
            free migration, and <strong>99.99% uptime guarantee</strong>.
          </p>
        </header>

        {/* Urgency banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Limited Time: 20% OFF first 3 months with code "G2Saveme20"</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
            aria-label="Start Cloudways free trial"
          >
            🚀 Start FREE 3-Day Trial
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-md hover:shadow-lg transition-all"
            onClick={() => document.getElementById('product-showcase')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="View hosting plans and pricing"
          >
            View Plans & Pricing
          </Button>
        </div>

        {/* Value props */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-center">
            <span className="text-green-500 mr-2 font-bold">✓</span>
            <span>Free SSL Certificate</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-green-500 mr-2 font-bold">✓</span>
            <span>Free Website Migration</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-green-500 mr-2 font-bold">✓</span>
            <span>24/7 Expert Support</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-green-500 mr-2 font-bold">✓</span>
            <span>No Setup Fees</span>
          </div>
        </div>

        {/* Social proof */}
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-3">
            <div className="flex text-yellow-400 mr-3">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="font-semibold text-gray-900">Trusted by Industry Leaders</span>
          </div>
          <p className="text-gray-700 italic mb-2">
            "Switched to Cloudways and our site speed improved by 3x. The migration was seamless and support is outstanding!"
          </p>
          <p className="text-gray-600 text-sm">- Michael Chen, Tech Startup Founder</p>
        </div>
      </div>
    </section>
  );
};
