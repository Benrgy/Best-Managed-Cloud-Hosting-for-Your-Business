
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Comparison = () => {
  const comparisonData = [
    {
      feature: "Price",
      product1: "$99.99",
      product2: "$49.99",
      product3: "$29.99"
    },
    {
      feature: "Rating",
      product1: "4.8/5",
      product2: "4.6/5",
      product3: "4.4/5"
    },
    {
      feature: "Warranty",
      product1: "2 Years",
      product2: "1 Year",
      product3: "6 Months"
    },
    {
      feature: "Key Feature",
      product1: "Premium Build",
      product2: "Great Value",
      product3: "Budget-Friendly"
    },
    {
      feature: "Best For",
      product1: "Professionals",
      product2: "Most Users",
      product3: "Basic Needs"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Product Comparison
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare our top picks side-by-side to find the perfect match for your needs and budget.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold">Premium Product</th>
                    <th className="text-center py-3 px-4 font-semibold">Best Value</th>
                    <th className="text-center py-3 px-4 font-semibold">Budget Option</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{row.feature}</td>
                      <td className="py-3 px-4 text-center">{row.product1}</td>
                      <td className="py-3 px-4 text-center">{row.product2}</td>
                      <td className="py-3 px-4 text-center">{row.product3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
