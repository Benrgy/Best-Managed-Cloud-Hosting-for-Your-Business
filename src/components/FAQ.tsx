
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is the best managed cloud hosting for business in 2025?",
      answer: "Cloudways is widely recognized as the best managed cloud hosting for businesses, offering enterprise-level performance, 24/7 expert support, and flexible pricing starting at just $11/month. With over 250,000 websites hosted and a 97% customer retention rate, Cloudways provides the perfect balance of performance, reliability, and affordability for growing businesses."
    },
    {
      question: "How much does managed cloud hosting cost for small to medium businesses?",
      answer: "Cloudways managed cloud hosting starts at $11/month for a 1GB DigitalOcean server, making it one of the most affordable enterprise-grade solutions available. Plans scale up based on your needs with pay-as-you-go billing, so you only pay for what you use. There are no setup fees or hidden costs, and you get free SSL certificates and website migration included."
    },
    {
      question: "What cloud providers does Cloudways support for managed hosting?",
      answer: "Cloudways offers managed hosting across 6 top cloud providers: DigitalOcean, Amazon AWS, Google Cloud Platform, Linode, Vultr, and KYUP. You can choose from 65+ server locations worldwide to ensure optimal performance for your target audience. Each provider offers different pricing and performance characteristics to match your specific business needs."
    },
    {
      question: "Does Cloudways provide free website migration services?",
      answer: "Yes, Cloudways includes one free professional website migration handled by their expert engineers. The migration team ensures zero downtime and handles all technical aspects including DNS updates, database transfers, and SSL certificate setup. Additional migrations are available for a small fee if you need to move multiple websites."
    },
    {
      question: "What makes Cloudways different from traditional shared hosting providers?",
      answer: "Unlike traditional shared hosting, Cloudways provides dedicated cloud resources with guaranteed performance. You get access to enterprise-level features like ThunderStack optimization, advanced caching, staging environments, and vertical scaling. Traditional hosting often suffers from resource limitations and poor performance during traffic spikes, while Cloudways maintains consistent speed and reliability."
    },
    {
      question: "How does Cloudways ensure website security and data protection?",
      answer: "Cloudways implements enterprise-grade security including two-factor authentication, advanced firewalls, regular automated backups, free SSL certificates, IP whitelisting, and dedicated server environments. Unlike shared hosting where security breaches can affect multiple sites, each Cloudways server is isolated and protected with multiple security layers."
    },
    {
      question: "Can I scale my hosting resources as my business grows?",
      answer: "Absolutely! Cloudways offers instant vertical scaling, allowing you to increase CPU, RAM, and storage without any downtime. This is perfect for handling traffic spikes, seasonal demands, or business growth. You can scale up during busy periods and scale down to save costs during slower times, making it ideal for businesses with varying traffic patterns."
    },
    {
      question: "What level of technical support does Cloudways provide?",
      answer: "Cloudways offers 24/7 expert support via live chat, phone, and ticket system. Their support team consists of server administrators and hosting experts who can help with technical issues, optimization, and guidance. Additionally, the Cloudways Bot provides proactive monitoring and alerts you about any potential issues before they affect your website."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About Managed Cloud Hosting
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about choosing the best managed cloud hosting 
            for your business needs. Learn why thousands of businesses trust Cloudways for their hosting solutions.
          </p>
        </header>

        <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow" itemScope itemType="https://schema.org/Question">
              <CardHeader>
                <CardTitle className="text-lg text-left" itemProp="name">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-700 leading-relaxed" itemProp="text">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-4">
              Our hosting experts are ready to help you choose the perfect managed cloud hosting solution for your business.
            </p>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
              onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
            >
              Start Free Trial - Get Expert Guidance
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
