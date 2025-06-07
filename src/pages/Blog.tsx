
import { SEO } from "@/components/SEO";
import { SemanticLayout } from "@/components/SemanticLayout";
import { BlogList } from "@/components/blog/BlogList";
import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogSearch } from "@/components/blog/BlogSearch";

const Blog = () => {
  return (
    <>
      <SEO 
        title="Cloud Hosting Blog | Expert Tips & Reviews | CloudHost Pro"
        description="Latest insights on managed cloud hosting for business, performance optimization, security tips, and expert reviews. Stay updated with hosting trends and best practices."
        keywords="best managed cloud hosting for business, cloud hosting blog, managed hosting tips, web hosting tutorials, cloudways guides, hosting performance, website optimization, hosting security"
        canonicalUrl="https://best-managed-cloud-hosting-for-business.lovable.app/blog"
      />
      <SemanticLayout>
        <div className="min-h-screen bg-gray-50">
          <div className="bg-white border-b">
            <div className="max-w-6xl mx-auto px-4 py-16">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Cloud Hosting Blog
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Expert insights, tutorials, and reviews to help you make the best managed cloud hosting decisions for your business
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <BlogList />
              </div>
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <BlogSearch />
                  <BlogCategories />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SemanticLayout>
    </>
  );
};

export default Blog;
