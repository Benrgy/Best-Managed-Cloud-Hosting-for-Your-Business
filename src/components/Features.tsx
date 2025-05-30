
export const Features = () => {
  const features = [
    {
      icon: "🔍",
      title: "Thorough Testing",
      description: "Every product undergoes rigorous testing to ensure we provide accurate, unbiased reviews."
    },
    {
      icon: "⭐",
      title: "Expert Reviews",
      description: "Our team of experts evaluates each product based on performance, quality, and value."
    },
    {
      icon: "💰",
      title: "Best Deals",
      description: "We track prices and alert you to the best deals and discounts available."
    },
    {
      icon: "📊",
      title: "Data-Driven",
      description: "Our recommendations are based on real data, user feedback, and comprehensive analysis."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Trust Our Recommendations?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing honest, thorough reviews that help you make informed decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
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
