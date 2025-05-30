
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Cloudways Hosting</h3>
            <p className="text-gray-400">
              Your trusted source for honest reviews and expert insights on Cloudways managed cloud hosting. 
              Find the perfect hosting solution for your business needs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Hosting Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hosting-plans" className="hover:text-white">Cloud Hosting Plans</a></li>
              <li><a href="#" className="hover:text-white">WordPress Hosting</a></li>
              <li><a href="#" className="hover:text-white">E-commerce Hosting</a></li>
              <li><a href="#" className="hover:text-white">Agency Hosting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Cloud Providers</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">DigitalOcean Hosting</a></li>
              <li><a href="#" className="hover:text-white">AWS Hosting</a></li>
              <li><a href="#" className="hover:text-white">Google Cloud Hosting</a></li>
              <li><a href="#" className="hover:text-white">Linode Hosting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Hosting Comparison</a></li>
              <li><a href="#" className="hover:text-white">Migration Guide</a></li>
              <li><a href="#" className="hover:text-white">Performance Tips</a></li>
              <li><a href="#" className="hover:text-white">Support Center</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Cloudways Hosting Reviews. All rights reserved. | Affiliate Disclosure: We may earn commissions from qualifying purchases through our Cloudways affiliate links.</p>
          <p className="mt-2 text-sm">This website is not affiliated with Cloudways Ltd. We are independent reviewers and affiliates.</p>
        </div>
      </div>
    </footer>
  );
};
