
import { useParams, Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SemanticLayout } from "@/components/SemanticLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, Clock, ArrowLeft } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blogData";
import { useNavigate } from "react-router-dom";
import { BlogPostRenderer } from "@/components/blog/BlogPostRenderer";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const category = blogCategories.find(c => c.id === post.category);

  return (
    <>
      <SEO 
        title={post.seoTitle || `${post.title} | CloudHost Pro Blog`}
        description={post.metaDescription}
        keywords={post.keywords}
        canonicalUrl={post.canonicalUrl || `https://best-managed-cloud-hosting-for-business.lovable.app/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.metaDescription,
          "image": post.image,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "CloudHost Pro",
            "logo": {
              "@type": "ImageObject",
              "url": "https://best-managed-cloud-hosting-for-business.lovable.app/favicon.ico"
            }
          },
          "datePublished": post.publishDate,
          "dateModified": post.publishDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": post.canonicalUrl || `https://best-managed-cloud-hosting-for-business.lovable.app/blog/${post.slug}`
          }
        }}
      />
      <SemanticLayout>
        <article className="min-h-screen bg-white">
          <div className="bg-gray-50 border-b">
            <div className="max-w-4xl mx-auto px-4 py-8">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/blog')}
                className="mb-6 text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Button>
              
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  {category?.name || post.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 py-12">
            <BlogPostRenderer content={post.content} />
            
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm text-gray-600 mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to get started?</h3>
                <p className="text-gray-600 mb-4">
                  Experience the power of managed cloud hosting with Cloudways. Start your free trial today.
                </p>
                <Button 
                  onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </article>
      </SemanticLayout>
    </>
  );
};

export default BlogPost;
