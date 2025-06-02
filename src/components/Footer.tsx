
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Best Managed Cloud Hosting</h3>
            <p className="text-gray-300 text-sm mb-4">
              Expert reviews and comparisons of Cloudways managed cloud hosting. 
              Find the perfect hosting solution for your business needs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.cloudways.com/en/?id=1384181" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
                aria-label="Visit Cloudways website"
              >
                Official Site
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hosting Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-gray-300 hover:text-white">WordPress Hosting</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white">E-commerce Hosting</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white">Business Hosting</a></li>
              <li><a href="#comparison" className="text-gray-300 hover:text-white">Enterprise Solutions</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white">Managed Cloud Hosting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Cloud Providers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#product-showcase" className="text-gray-300 hover:text-white">DigitalOcean Hosting</a></li>
              <li><a href="#product-showcase" className="text-gray-300 hover:text-white">AWS Hosting</a></li>
              <li><a href="#product-showcase" className="text-gray-300 hover:text-white">Google Cloud Hosting</a></li>
              <li><a href="#product-showcase" className="text-gray-300 hover:text-white">Linode Hosting</a></li>
              <li><a href="#product-showcase" className="text-gray-300 hover:text-white">Vultr Hosting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-white">Customer Reviews</a></li>
              <li><a href="#comparison" className="text-gray-300 hover:text-white">Hosting Comparison</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li>
                <a 
                  href="https://www.cloudways.com/en/?id=1384181" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  Start Free Trial
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            <p>&copy; {currentYear} Cloudways Hosting Reviews. All rights reserved.</p>
            <p className="mt-1">
              Expert reviews of managed cloud hosting solutions for businesses.
            </p>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="/affiliate-disclosure" className="text-gray-400 hover:text-white">Affiliate Disclosure</a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>
            Disclaimer: This site contains affiliate links. We may earn a commission when you purchase through our links at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
};
