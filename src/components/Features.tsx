
export const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "ThunderStack Performance Technology",
      description: "Proprietary caching technology combining Apache, NGINX, Varnish, Redis, and Memcached for blazing-fast speeds that outperform traditional hosting."
    },
    {
      icon: "🛡️",
      title: "Enterprise-Grade Security", 
      description: "2FA, advanced firewalls, automatic backups, free SSL certificates, and IP whitelisting for complete protection of your business data."
    },
    {
      icon: "🤖",
      title: "Cloudways Bot Smart Assistant",
      description: "World's first AI-powered hosting assistant that monitors your site health 24/7 via email, Slack, or API notifications."
    },
    {
      icon: "📈",
      title: "Instant Vertical Scaling",
      description: "Scale server resources up or down instantly without downtime. Perfect for handling traffic spikes and business growth."
    },
    {
      icon: "🌍",
      title: "Global Data Center Network",
      description: "Choose from 65+ server locations across DigitalOcean, AWS, Google Cloud, Linode, Vultr, and KYUP for optimal performance."
    },
    {
      icon: "🎯",
      title: "One-Click Staging Environments",
      description: "Test changes safely with instant staging environments and cloning capabilities. Deploy with confidence."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Cloudways is the Best Managed Cloud Hosting for Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by 250,000+ websites worldwide with only 3% customer churn rate. 
            Experience the perfect balance of performance, simplicity, and reliability for your business.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article key={index} className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4" role="img" aria-label={feature.title}>{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
