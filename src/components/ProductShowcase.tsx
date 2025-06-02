
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Zap, Shield, Clock, Award, CheckCircle } from "lucide-react";

export const ProductShowcase = () => {
  const plans = [
    {
      name: "DigitalOcean Starter",
      originalPrice: "$15",
      price: "$11",
      period: "/month",
      description: "Perfect for small websites and blogs",
      features: [
        "1 GB RAM",
        "1 Core Processor", 
        "25 GB SSD Storage",
        "1 TB Bandwidth",
        "1 Website",
        "Free SSL Certificate",
        "Free Migration",
        "24/7 Support"
      ],
      popular: false,
      provider: "DigitalOcean",
      savings: "27% OFF"
    },
    {
      name: "Linode Business",
      originalPrice: "$30",
      price: "$22",
      period: "/month", 
      description: "Ideal for growing businesses",
      features: [
        "2 GB RAM",
        "1 Core Processor",
        "50 GB SSD Storage", 
        "2 TB Bandwidth",
        "5 Websites",
        "Free SSL Certificate",
        "Free Migration",
        "Free Automated Backups",
        "Staging Environment",
        "24/7 Priority Support"
      ],
      popular: true,
      provider: "Linode",
      savings: "27% OFF"
    },
    {
      name: "AWS Professional",
      originalPrice: "$56",
      price: "$42",
      period: "/month",
      description: "For high-traffic websites", 
      features: [
        "4 GB RAM",
        "2 Core Processors",
        "80 GB SSD Storage",
        "4 TB Bandwidth", 
        "10 Websites",
        "Free SSL Certificate",
        "Free Migration",
        "Free Automated Backups",
        "Staging Environment",
        "Advanced Monitoring",
        "Dedicated Support Manager"
      ],
      popular: false,
      provider: "AWS",
      savings: "25% OFF"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "ThunderStack Performance",
      description: "Advanced caching with SSD storage delivers 3x faster loading speeds"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Enterprise Security", 
      description: "Military-grade firewalls, malware scanning, and free SSL certificates"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "24/7 Expert Support",
      description: "Live chat and phone support from certified hosting professionals"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "99.99% Uptime SLA",
      description: "Guaranteed reliability with automatic failover protection"
    },
    {
      icon: <Award className="h-6 w-6 text-red-600" />,
      title: "Award-Winning Platform", 
      description: "G2 Leader in Cloud Infrastructure & Platform Services"
    }
  ];

  return (
    <section id="product-showcase" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Hosting Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Scalable cloud hosting solutions powered by top-tier infrastructure providers. 
            Start with what you need and scale as you grow.
          </p>
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
            <Clock className="h-4 w-4 mr-2" />
            Limited Time: Save up to 27% with code "G2Saveme20"
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 border-2 shadow-xl scale-105' : 'shadow-lg'} hover:shadow-xl transition-all`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              {plan.savings && (
                <Badge className="absolute -top-3 right-4 bg-orange-500 text-white px-3 py-1">
                  {plan.savings}
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">{plan.description}</CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <Badge variant="outline" className="mt-2">{plan.provider}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''} font-semibold py-3`}
                  onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
                >
                  Start FREE 3-Day Trial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-6">Trusted by 250,000+ websites worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-gray-400 font-semibold">WordPress</span>
            <span className="text-gray-400 font-semibold">Shopify Plus</span>
            <span className="text-gray-400 font-semibold">WooCommerce</span>
            <span className="text-gray-400 font-semibold">Magento</span>
            <span className="text-gray-400 font-semibold">Drupal</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
