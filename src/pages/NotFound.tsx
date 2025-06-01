
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="Page Not Found - Best Managed Cloud Hosting | Cloudways Review"
        description="The page you're looking for doesn't exist. Discover the best managed cloud hosting solutions with Cloudways - enterprise performance starting at $11/month."
        canonicalUrl="https://yoursite.lovable.app/404"
      />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <header>
            <h1 className="text-9xl font-bold text-gray-200">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist. Let's get you back to discovering 
              the best managed cloud hosting solutions.
            </p>
          </header>
          
          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/')} 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Back to Home
            </Button>
            <div className="text-sm text-gray-500">
              <p>Looking for hosting solutions?</p>
              <Button 
                variant="link" 
                onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
                className="text-blue-600 p-0 h-auto"
              >
                Try Cloudways Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
