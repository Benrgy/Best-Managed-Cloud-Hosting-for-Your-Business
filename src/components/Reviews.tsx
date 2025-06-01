
import { Card, CardContent } from "@/components/ui/card";

export const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      company: "E-commerce Store Owner",
      rating: 5,
      comment: "Migrated from shared hosting to Cloudways and my site is 3x faster! The ThunderStack optimization is incredible. Customer support helped with the entire migration for free.",
      plan: "DigitalOcean 2GB Plan"
    },
    {
      name: "Mike R.",
      company: "Web Development Agency", 
      rating: 5,
      comment: "Managing 20+ client websites on Cloudways. The staging environments and easy scaling make our workflow so much smoother. Best managed hosting we've used.",
      plan: "AWS Multi-site Setup"
    },
    {
      name: "Jennifer L.",
      company: "WordPress Developer",
      rating: 5,
      comment: "The Cloudways Bot is a game-changer! It alerts me about any issues before my clients even notice. Plus the pay-as-you-go pricing saves me money compared to fixed plans.",
      plan: "Google Cloud Platform"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real Customer Reviews: Why Businesses Choose Cloudways
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join 250,000+ satisfied customers who chose Cloudways for their managed cloud hosting needs. 
            See why we maintain a 97% customer retention rate.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <article key={index} itemScope itemType="https://schema.org/Review">
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={review.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? "★" : "☆"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic" itemProp="reviewBody">
                    "{review.comment}"
                  </p>
                  <div className="border-t pt-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <p className="font-semibold text-gray-900" itemProp="name">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.company}</p>
                    <p className="text-xs text-blue-600">Using: {review.plan}</p>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        <aside className="text-center mt-12">
          <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Trusted by Industry Leaders</h3>
            <p className="text-gray-600 mb-4">Over 250,000 websites hosted • 99.99% uptime • 24/7 expert support</p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <span>⭐ 4.7/5 on Trustpilot</span>
              <span>•</span>
              <span>⭐ 4.8/5 on G2</span>
              <span>•</span> 
              <span>⭐ 4.6/5 on Capterra</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
