
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const BlogCategories = () => {
  const categories = [
    { name: "Comparisons", count: 12, color: "bg-blue-100 text-blue-800" },
    { name: "Performance", count: 8, color: "bg-green-100 text-green-800" },
    { name: "Security", count: 6, color: "bg-red-100 text-red-800" },
    { name: "Tutorials", count: 15, color: "bg-purple-100 text-purple-800" },
    { name: "Reviews", count: 10, color: "bg-orange-100 text-orange-800" },
    { name: "Tips", count: 9, color: "bg-yellow-100 text-yellow-800" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                {category.name}
              </span>
              <Badge className={category.color}>
                {category.count}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
