
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const BlogSearch = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Search Articles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input 
            placeholder="Search hosting topics..." 
            className="flex-1"
          />
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Search size={16} />
          </Button>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {["Performance", "Security", "Migration", "Pricing"].map((term) => (
              <span 
                key={term}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-200"
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
