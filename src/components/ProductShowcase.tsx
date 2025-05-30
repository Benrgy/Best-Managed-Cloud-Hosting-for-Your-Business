
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ProductShowcase = () => {
  const hostingPlans = [
    {
      id: 1,
      name: "DigitalOcean - 1GB",
      rating: 4.9,
      reviews: 2500,
      price: "$11/month",
      originalPrice: "$14/month",
      badge: "Most Popular",
      provider: "DigitalOcean",
      features: ["1GB RAM", "25GB Storage", "1TB Bandwidth", "Free SSL", "24/7 Support"]
    },
    {
      id: 2,
      name: "DigitalOcean - 2GB", 
      rating: 4.8,
      reviews: 1890,
      price: "$24/month",
      originalPrice: "$30/month",
      badge: "Best Performance",
      provider: "DigitalOcean",
      features: ["2GB RAM", "50GB Storage", "2TB Bandwidth", "Free SSL", "Advanced Caching"]
    },
    {
      id: 3,
      name: "AWS - 1GB",
      rating: 4.7,
      reviews: 1250,
      price: "$36/month",
      originalPrice: "$45/month",
      badge: "Enterprise Ready",
      provider: "Amazon AWS",
      features: ["1GB RAM", "25GB Storage", "1TB Bandwidth", "AWS Infrastructure", "Premium Support"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white" id="hosting-plans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cloudways Managed Cloud Hosting Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from 6 top cloud providers including DigitalOcean, AWS, Google Cloud, and more. 
            All plans include ThunderStack optimization and free migration.
          </p>
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg inline-block">
            <strong>Limited Time:</strong> Save 20% for 3 months with code "G2Saveme20"
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hostingPlans.map((plan) => (
            <Card key={plan.id} className="relative hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {plan.badge}
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{plan.provider}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {plan.name}
                </h3>
                
                <div className="flex items-center justify-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(plan.rating) ? "★" : "☆"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {plan.rating} ({plan.reviews} reviews)
                  </span>
                </div>

                <div className="mb-4 text-center">
                  <span className="text-2xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-lg text-gray-400 line-through ml-2">{plan.originalPrice}</span>
                  <div className="text-sm text-gray-500">Pay-as-you-go billing</div>
                </div>

                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
                >
                  Start 3-Day Free Trial
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">No credit card required</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
