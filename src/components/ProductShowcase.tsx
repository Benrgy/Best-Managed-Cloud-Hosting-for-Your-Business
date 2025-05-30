
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Premium Product #1",
      rating: 4.8,
      reviews: 1250,
      price: "$99.99",
      originalPrice: "$149.99",
      badge: "Editor's Choice",
      image: "/placeholder.svg",
      features: ["Feature 1", "Feature 2", "Feature 3"]
    },
    {
      id: 2,
      name: "Best Value Product #2",
      rating: 4.6,
      reviews: 890,
      price: "$49.99",
      originalPrice: "$79.99",
      badge: "Best Value",
      image: "/placeholder.svg",
      features: ["Feature A", "Feature B", "Feature C"]
    },
    {
      id: 3,
      name: "Budget Option #3",
      rating: 4.4,
      reviews: 650,
      price: "$29.99",
      originalPrice: "$49.99",
      badge: "Budget Pick",
      image: "/placeholder.svg",
      features: ["Basic Feature 1", "Basic Feature 2", "Basic Feature 3"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white" id="products">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top Recommended Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            After extensive testing and analysis, these are our top picks for 2024. 
            Each product has been carefully evaluated for quality, value, and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="relative hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {product.badge}
              </div>
              <CardContent className="p-6">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? "★" : "☆"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <span className="text-lg text-gray-400 line-through ml-2">{product.originalPrice}</span>
                </div>

                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Check Current Price
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
