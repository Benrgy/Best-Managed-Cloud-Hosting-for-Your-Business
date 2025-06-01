
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ConversionOptimized = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Join 250,000+ Successful Businesses Using Cloudways
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Don't let poor hosting hold back your business growth. Get enterprise-level performance, 
            24/7 expert support, and worry-free management starting at just $11/month.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-blue-100">
              <span className="text-green-400 mr-2">✓</span>
              <span>3-Day Free Trial</span>
            </div>
            <div className="flex items-center text-blue-100">
              <span className="text-green-400 mr-2">✓</span>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center text-blue-100">
              <span className="text-green-400 mr-2">✓</span>
              <span>Free Migration Included</span>
            </div>
            <div className="flex items-center text-blue-100">
              <span className="text-green-400 mr-2">✓</span>
              <span>24/7 Expert Support</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">$11</div>
              <div className="text-sm text-gray-600 mb-4">Starting Price/Month</div>
              <p className="text-sm text-gray-700">
                Get enterprise-level hosting for less than the cost of a few coffees per month
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">65+</div>
              <div className="text-sm text-gray-600 mb-4">Global Data Centers</div>
              <p className="text-sm text-gray-700">
                Deploy your website closer to your customers for lightning-fast performance
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
              <div className="text-sm text-gray-600 mb-4">Uptime Guarantee</div>
              <p className="text-sm text-gray-700">
                Your website stays online with industry-leading reliability and redundancy
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400 mr-3">
                ★★★★★
              </div>
              <span className="text-white font-semibold">4.8/5 Average Rating</span>
            </div>
            <p className="text-blue-100 italic mb-4">
              "Migrated from shared hosting to Cloudways and my site is 3x faster! 
              The support team handled everything perfectly."
            </p>
            <p className="text-blue-200 text-sm">- Sarah M., E-commerce Store Owner</p>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold"
              onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
            >
              Start Your Free Trial Now
            </Button>
            
            <div className="text-center">
              <p className="text-blue-100 text-sm mb-2">
                <strong>Limited Time Offer:</strong> Use code "G2Saveme20" for 20% off your first 3 months
              </p>
              <p className="text-blue-200 text-xs">
                Risk-free trial • Cancel anytime • No long-term contracts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
