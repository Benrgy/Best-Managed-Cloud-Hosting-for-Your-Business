
import { Card, CardContent } from "@/components/ui/card";

export const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      comment: "Exactly what I was looking for! The recommendations were spot-on and saved me hours of research.",
      product: "Premium Product #1"
    },
    {
      name: "Mike R.",
      rating: 5,
      comment: "Great value for money. The detailed reviews helped me make an informed decision.",
      product: "Best Value Product #2"
    },
    {
      name: "Jennifer L.",
      rating: 4,
      comment: "Very helpful comparison tables. Made it easy to see the differences between products.",
      product: "Budget Option #3"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Readers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about our recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? "★" : "☆"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{review.comment}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">Purchased: {review.product}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
