
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag } from "lucide-react";

export const BlogList = () => {
  const blogPosts = [
    {
      id: "cloudways-vs-competitors-2025",
      title: "Cloudways vs Competitors: Complete Hosting Comparison 2025",
      slug: "cloudways-vs-competitors-2025",
      excerpt: "Comprehensive comparison of Cloudways against top managed hosting providers. Discover performance benchmarks, pricing analysis, and feature comparisons to make an informed decision.",
      content: "In the competitive landscape of managed cloud hosting, choosing the right provider can make or break your website's success. This comprehensive guide compares Cloudways against leading competitors including WP Engine, Kinsta, and SiteGround. We'll examine performance metrics, pricing structures, customer support quality, and unique features to help you make an informed decision for your business hosting needs.",
      author: "Sarah Mitchell",
      publishDate: "2025-06-06",
      category: "Comparisons",
      tags: ["cloudways", "hosting comparison", "managed hosting", "performance"],
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      metaDescription: "Compare Cloudways vs top hosting providers in 2025. Performance benchmarks, pricing analysis, and feature comparison guide for business hosting decisions.",
      keywords: "cloudways vs competitors, best managed hosting, hosting comparison 2025, cloudways review"
    },
    {
      id: "optimize-website-performance-cloudways",
      title: "How to Optimize Website Performance on Cloudways: Complete Guide",
      slug: "optimize-website-performance-cloudways",
      excerpt: "Learn proven strategies to maximize your website's speed and performance on Cloudways hosting. From caching optimization to CDN setup, boost your site's loading times.",
      content: "Website performance directly impacts user experience, search rankings, and conversion rates. This comprehensive guide reveals advanced optimization techniques specifically for Cloudways hosting platform. Learn how to leverage ThunderStack technology, configure advanced caching, optimize your database, and implement CDN strategies for maximum performance gains.",
      author: "Mike Chen",
      publishDate: "2025-06-05",
      category: "Performance",
      tags: ["website optimization", "performance", "caching", "CDN"],
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      metaDescription: "Complete guide to optimize website performance on Cloudways. Learn caching, CDN setup, and performance optimization techniques for faster loading times.",
      keywords: "cloudways performance optimization, website speed, caching optimization, thunderstack performance"
    },
    {
      id: "cloudways-security-best-practices",
      title: "Cloudways Security: Essential Best Practices for Business Websites",
      slug: "cloudways-security-best-practices",
      excerpt: "Protect your business website with comprehensive Cloudways security measures. Learn about firewalls, SSL, malware protection, and security monitoring best practices.",
      content: "Security is paramount for business websites, and Cloudways provides robust security features to protect your online presence. This guide covers essential security best practices including firewall configuration, SSL certificate management, malware scanning, security monitoring, and incident response procedures to keep your website secure.",
      author: "Lisa Rodriguez",
      publishDate: "2025-06-04",
      category: "Security",
      tags: ["security", "SSL", "firewall", "malware protection"],
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      metaDescription: "Essential Cloudways security best practices for business websites. Learn firewall setup, SSL management, and malware protection strategies.",
      keywords: "cloudways security, website security, SSL certificate, firewall protection, malware scanning"
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
      
      {blogPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
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
                  <Button variant="outline" size="sm">
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
