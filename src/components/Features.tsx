
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Bot, TrendingUp, Globe, GitBranch, Clock, Users, Award, HeadphonesIcon } from "lucide-react";

export const Features = () => {
  const mainFeatures = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "ThunderStack Performance Technology",
      description: "Proprietary caching technology combining Apache, NGINX, Varnish, Redis, and Memcached for blazing-fast speeds that outperform traditional hosting.",
      details: ["3x faster page loads", "Advanced caching layers", "SSD storage included", "CDN integration"],
      badge: "Performance"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Enterprise-Grade Security", 
      description: "2FA, advanced firewalls, automatic backups, free SSL certificates, and IP whitelisting for complete protection of your business data.",
      details: ["Free SSL certificates", "Regular malware scanning", "DDoS protection", "Automated backups"],
      badge: "Security"
    },
    {
      icon: <Bot className="h-8 w-8 text-purple-600" />,
      title: "Cloudways Bot Smart Assistant",
      description: "World's first AI-powered hosting assistant that monitors your site health 24/7 via email, Slack, or API notifications.",
      details: ["24/7 monitoring", "Instant alerts", "Performance insights", "Automated recommendations"],
      badge: "AI-Powered"
    }
  ];

  const additionalFeatures = [
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
      title: "Instant Vertical Scaling",
      description: "Scale server resources up or down instantly without downtime. Perfect for handling traffic spikes and business growth."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Global Data Center Network",
      description: "Choose from 65+ server locations across DigitalOcean, AWS, Google Cloud, Linode, Vultr, and KYUP for optimal performance."
    },
    {
      icon: <GitBranch className="h-6 w-6 text-indigo-600" />,
      title: "One-Click Staging Environments",
      description: "Test changes safely with instant staging environments and cloning capabilities. Deploy with confidence."
    },
    {
      icon: <Clock className="h-6 w-6 text-red-600" />,
      title: "99.99% Uptime SLA",
      description: "Guaranteed reliability with automatic failover protection and real-time monitoring."
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Team Collaboration Tools",
      description: "Invite team members, set permissions, and collaborate seamlessly on your hosting projects."
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6 text-purple-600" />,
      title: "24/7 Expert Support",
      description: "Live chat and phone support from certified hosting professionals with average 30-second response time."
    }
  ];

  const trustIndicators = [
    { label: "99.99% Uptime", value: "Guaranteed SLA" },
    { label: "250,000+", value: "Websites Hosted" },
    { label: "4.8/5", value: "Customer Rating" },
    { label: "30 Seconds", value: "Avg Support Response" }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Cloudways is the Best Managed Cloud Hosting for Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Trusted by 250,000+ websites worldwide with only 3% customer churn rate. 
            Experience the perfect balance of performance, simplicity, and reliability for your business.
          </p>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-blue-600">{indicator.label}</div>
                <div className="text-sm text-gray-600">{indicator.value}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <Badge variant="secondary" className="mb-3 bg-blue-100 text-blue-700">
                  {feature.badge}
                </Badge>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-gray-50 rounded-lg mr-4 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-yellow-500 mr-3" />
            <span className="text-2xl font-bold text-gray-900">G2 Leader in Cloud Infrastructure</span>
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Recognized as a leader in cloud infrastructure and platform services. 
            Join thousands of satisfied customers who've made the switch to better hosting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
            >
              Start Free 3-Day Trial
            </button>
            <button 
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => document.getElementById('product-showcase')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
