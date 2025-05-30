
export const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "ThunderStack Performance",
      description: "Proprietary caching technology combining Apache, NGINX, Varnish, Redis, and Memcached for blazing-fast speeds."
    },
    {
      icon: "🛡️",
      title: "Enterprise Security", 
      description: "2FA, firewalls, automatic backups, free SSL certificates, and IP whitelisting for complete protection."
    },
    {
      icon: "🤖",
      title: "Cloudways Bot Assistant",
      description: "World's first smart hosting assistant that monitors your site health via email, Slack, or API notifications."
    },
    {
      icon: "📈",
      title: "Easy Scaling",
      description: "Vertical scaling with just clicks - upgrade or downgrade server resources instantly without downtime."
    },
    {
      icon: "🌍",
      title: "Global Data Centers",
      description: "Choose from 65+ server locations across DigitalOcean, AWS, Google Cloud, Linode, Vultr, and KYUP."
    },
    {
      icon: "🎯",
      title: "Staging Environments",
      description: "Test changes safely with one-click staging environments and cloning capabilities."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Cloudways Managed Cloud Hosting?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by 250,000+ websites worldwide with only 3% customer churn rate. 
            Experience the perfect balance of performance, simplicity, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
