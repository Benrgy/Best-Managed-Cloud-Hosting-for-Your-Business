
export const About = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Cloudways is the Ultimate Managed Cloud Hosting Solution for Modern Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Cloudways revolutionizes business hosting with enterprise-grade infrastructure, 
            simplified management, and unmatched performance optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <article>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Enterprise Performance Without Enterprise Complexity
            </h3>
            <p className="text-gray-700 mb-4">
              Traditional enterprise hosting solutions often come with overwhelming complexity and sky-high costs. 
              Cloudways bridges this gap by providing enterprise-level performance and features through an intuitive, 
              user-friendly platform that requires no technical expertise.
            </p>
            <p className="text-gray-700 mb-4">
              With ThunderStack optimization technology, your website loads up to 3x faster than traditional hosting. 
              This proprietary stack combines Apache, NGINX, Varnish, Redis, and Memcached to deliver exceptional 
              speed that directly impacts your search engine rankings and user experience.
            </p>
            <p className="text-gray-700">
              The platform's one-click staging environments allow you to test changes safely before going live, 
              while automated backups ensure your data is always protected. These enterprise features, typically 
              reserved for large corporations, are now accessible to businesses of all sizes.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Flexible Cloud Infrastructure for Growing Businesses
            </h3>
            <p className="text-gray-700 mb-4">
              Unlike traditional hosting providers that lock you into rigid plans, Cloudways offers true flexibility 
              with pay-as-you-scale pricing across multiple cloud providers. Choose from DigitalOcean for 
              cost-effectiveness, AWS for enterprise reliability, or Google Cloud for cutting-edge technology.
            </p>
            <p className="text-gray-700 mb-4">
              The instant vertical scaling feature means you can handle unexpected traffic spikes without downtime. 
              Whether you're launching a marketing campaign or experiencing viral growth, your hosting scales 
              seamlessly with your success.
            </p>
            <p className="text-gray-700">
              With 65+ server locations worldwide, you can position your website closer to your audience for 
              optimal performance. This global infrastructure ensures fast loading times regardless of where 
              your customers are located.
            </p>
          </article>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Proven Results: Why 250,000+ Websites Choose Cloudways
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
              <div className="text-sm text-gray-600">Uptime Guarantee</div>
              <p className="text-sm text-gray-500 mt-2">
                Industry-leading reliability with redundant infrastructure and proactive monitoring
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3x</div>
              <div className="text-sm text-gray-600">Faster Loading</div>
              <p className="text-sm text-gray-500 mt-2">
                ThunderStack optimization delivers superior performance compared to traditional hosting
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
              <div className="text-sm text-gray-600">Customer Retention</div>
              <p className="text-sm text-gray-500 mt-2">
                High satisfaction rate proves the quality and reliability of our hosting services
              </p>
            </div>
          </div>
        </div>

        <article>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Comprehensive Managed Hosting Services That Save Time and Money
          </h3>
          <p className="text-gray-700 mb-4">
            Cloudways goes beyond basic hosting by providing comprehensive managed services that eliminate the need 
            for dedicated server administrators. Server maintenance, security updates, performance optimization, 
            and monitoring are all handled automatically, freeing your team to focus on growing your business.
          </p>
          <p className="text-gray-700 mb-4">
            The 24/7 expert support team consists of server administrators and hosting specialists who understand 
            the complexities of cloud infrastructure. Whether you need help with migration, optimization, or 
            troubleshooting, you have access to knowledgeable professionals who can resolve issues quickly.
          </p>
          <p className="text-gray-700 mb-6">
            Advanced features like the Cloudways Bot provide proactive monitoring and instant alerts about server 
            health, performance issues, or security concerns. This AI-powered assistant helps prevent problems 
            before they impact your website, ensuring optimal performance around the clock.
          </p>
          
          <div className="text-center">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg"
              onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
            >
              Experience the Cloudways Difference - Start Free Trial
            </button>
            <p className="text-sm text-gray-500 mt-2">
              No credit card required • Free migration included • 24/7 expert support
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
