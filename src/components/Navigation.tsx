
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      // If not on home page, navigate home first then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If on home page, just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-xl font-bold text-blue-600 hover:text-blue-700"
            >
              CloudHost Pro
            </Button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-gray-700 hover:text-blue-600"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600"
            >
              Features
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('product-showcase')}
              className="text-gray-700 hover:text-blue-600"
            >
              Pricing
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')}
              className="text-gray-700 hover:text-blue-600"
            >
              Blog
            </Button>
            <Button 
              onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
