
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Reviews</h3>
            <p className="text-gray-400">
              Your trusted source for honest, detailed product reviews and recommendations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#products" className="hover:text-white">Top Products</a></li>
              <li><a href="#" className="hover:text-white">Latest Reviews</a></li>
              <li><a href="#" className="hover:text-white">Buyer's Guide</a></li>
              <li><a href="#" className="hover:text-white">Deals & Discounts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Electronics</a></li>
              <li><a href="#" className="hover:text-white">Home & Garden</a></li>
              <li><a href="#" className="hover:text-white">Health & Beauty</a></li>
              <li><a href="#" className="hover:text-white">Sports & Outdoors</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Product Reviews. All rights reserved. | Affiliate Disclosure: We may earn commissions from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  );
};
