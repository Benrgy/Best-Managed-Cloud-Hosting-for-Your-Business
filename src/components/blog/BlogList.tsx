
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blogData";
import { useNavigate } from "react-router-dom";
import { OptimizedImage } from "@/components/OptimizedImage";

export const BlogList = () => {
  const navigate = useNavigate();
  const publishedPosts = blogPosts.filter(post => post.published);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
      
      {publishedPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="md:flex">
            <div className="md:w-1/3">
              <OptimizedImage
                src={post.image}
                alt={post.imageAlt || post.title}
                className="w-full h-48 md:h-full object-cover"
                width={400}
                height={200}
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">
                    {blogCategories.find(c => c.id === post.category)?.name || post.category}
                  </Badge>
                  {post.featured && <Badge variant="outline">Featured</Badge>}
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
      
      <div className="text-center mt-12">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Load More Articles
        </Button>
      </div>
    </div>
  );
};
