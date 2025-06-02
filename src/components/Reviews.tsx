
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Director",
      company: "TechStore Inc.",
      rating: 5,
      review: "Cloudways has transformed our online store's performance. The managed hosting takes care of all the technical aspects while we focus on growing our business. Page load times improved by 60%!",
      verified: true
    },
    {
      name: "Michael Chen", 
      role: "Startup Founder",
      company: "InnovateLab",
      rating: 5,
      review: "As a startup, we needed hosting that could scale with us. Cloudways made it incredibly easy to upgrade our resources as our traffic grew. The support team is also exceptional.",
      verified: true
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketing Manager", 
      company: "GrowthCorp",
      rating: 5,
      review: "The performance optimization features are outstanding. Our WordPress sites load lightning fast, and the built-in CDN has improved our global reach significantly.",
      verified: true
    },
    {
      name: "David Park",
      role: "Web Developer",
      company: "Creative Solutions",
      rating: 5, 
      review: "Finally, hosting that doesn't require constant maintenance. The managed services handle everything from security updates to performance optimization. It's a game-changer for developers.",
      verified: true
    },
    {
      name: "Lisa Thompson",
      role: "Online Business Owner",
      company: "FashionForward",
      rating: 5,
      review: "Migration was seamless and the performance improvement was immediate. Customer support helped us every step of the way. Highly recommend for any serious online business.",
      verified: true
    },
    {
      name: "James Wilson",
      role: "IT Manager", 
      company: "Corporate Solutions Ltd",
      rating: 5,
      review: "Enterprise-level reliability at a fraction of the cost of traditional hosting. The scalability and security features give us peace of mind for our mission-critical applications.",
      verified: true
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Expert Support" },
    { number: "4.8/5", label: "Customer Rating" }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Businesses Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our customers have to say about their 
            experience with Cloudways managed cloud hosting.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Customer Reviews */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  {review.verified && (
                    <Badge variant="outline" className="ml-2 text-xs">
                      Verified Customer
                    </Badge>
                  )}
                </div>
                
                <div className="mb-4">
                  <Quote className="h-6 w-6 text-gray-400 mb-2" />
                  <p className="text-gray-700 leading-relaxed">
                    {review.review}
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {review.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {review.role}
                  </div>
                  <div className="text-sm text-blue-600">
                    {review.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Thousands of Satisfied Customers
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the difference that managed cloud hosting can make for your business. 
            Start your free trial today and see why customers choose Cloudways.
          </p>
          <button 
            onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Free Trial Today
          </button>
        </div>
      </div>
    </section>
  );
};
