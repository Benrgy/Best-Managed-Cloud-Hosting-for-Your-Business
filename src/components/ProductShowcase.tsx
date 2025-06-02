
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Zap, Shield, Clock, Award } from "lucide-react";

export const ProductShowcase = () => {
  const plans = [
    {
      name: "DigitalOcean Basic",
      price: "$11",
      period: "/month",
      description: "Perfect for small websites and blogs",
      features: [
        "1 GB RAM",
        "1 Core Processor", 
        "25 GB Storage",
        "1 TB Bandwidth",
        "1 Website",
        "Free SSL Certificate"
      ],
      popular: false,
      provider: "DigitalOcean"
    },
    {
      name: "Linode Standard",
      price: "$22",
      period: "/month", 
      description: "Ideal for growing businesses",
      features: [
        "2 GB RAM",
        "1 Core Processor",
        "50 GB Storage", 
        "2 TB Bandwidth",
        "5 Websites",
        "Free SSL Certificate",
        "Free Backups"
      ],
      popular: true,
      provider: "Linode"
    },
    {
      name: "AWS Advanced",
      price: "$42",
      period: "/month",
      description: "For high-traffic websites", 
      features: [
        "4 GB RAM",
        "2 Core Processors",
        "80 GB Storage",
        "4 TB Bandwidth", 
        "10 Websites",
        "Free SSL Certificate",
        "Free Backups",
        "Staging Environment"
      ],
      popular: false,
      provider: "AWS"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Lightning Fast Performance",
      description: "Optimized servers with SSD storage and advanced caching"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Enterprise Security", 
      description: "Advanced firewalls, malware scanning, and SSL certificates"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "24/7 Expert Support",
      description: "Round-the-clock assistance from certified hosting experts"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "99.9% Uptime SLA",
      description: "Guaranteed reliability with industry-leading uptime"
    },
    {
      icon: <Award className="h-6 w-6 text-red-600" />,
      title: "Award-Winning Platform", 
      description: "Recognized as the best managed cloud hosting solution"
    }
  ];

  return (
    <section id="product-showcase" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Hosting Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scalable cloud hosting solutions powered by top-tier infrastructure providers. 
            Start with what you need and scale as you grow.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 border-2 shadow-lg' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <Badge variant="outline" className="mt-2">{plan.provider}</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Star className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
                >
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
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
