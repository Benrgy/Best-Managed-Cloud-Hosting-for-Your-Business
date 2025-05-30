
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Comparison = () => {
  const comparisonData = [
    {
      feature: "Starting Price",
      cloudways: "$11/month",
      traditional: "$3-8/month", 
      enterprise: "$100+/month"
    },
    {
      feature: "Server Management",
      cloudways: "Fully Managed",
      traditional: "Self-Managed",
      enterprise: "Fully Managed"
    },
    {
      feature: "Cloud Providers",
      cloudways: "6 Options (AWS, GCP, DO, etc.)",
      traditional: "Limited/None",
      enterprise: "Limited"
    },
    {
      feature: "Performance Optimization", 
      cloudways: "ThunderStack Technology",
      traditional: "Basic/None",
      enterprise: "Custom Solutions"
    },
    {
      feature: "Free Migration",
      cloudways: "✓ Included",
      traditional: "❌ Usually Paid",
      enterprise: "✓ Included"
    },
    {
      feature: "24/7 Support",
      cloudways: "✓ Live Chat & Phone",
      traditional: "Limited",
      enterprise: "✓ Dedicated Manager"
    },
    {
      feature: "Staging Environment",
      cloudways: "✓ One-Click",
      traditional: "❌ Not Available",
      enterprise: "✓ Available"
    },
    {
      feature: "Auto-Scaling",
      cloudways: "✓ Vertical Scaling",
      traditional: "❌ Manual Upgrade",
      enterprise: "✓ Advanced Options"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cloudways vs Traditional Hosting vs Enterprise Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Cloudways provides enterprise-level features at affordable prices, 
            without the complexity of traditional hosting or high costs of enterprise solutions.
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
                    <th className="text-center py-3 px-4 font-semibold text-blue-600">Cloudways</th>
                    <th className="text-center py-3 px-4 font-semibold">Traditional Hosting</th>
                    <th className="text-center py-3 px-4 font-semibold">Enterprise Hosting</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{row.feature}</td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">{row.cloudways}</td>
                      <td className="py-3 px-4 text-center">{row.traditional}</td>
                      <td className="py-3 px-4 text-center">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Get enterprise-level features without enterprise-level complexity or costs
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
