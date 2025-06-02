
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Beste Beheerde Cloud Hosting Nederland</h3>
            <p className="text-gray-300 text-sm mb-4">
              Expert reviews en vergelijkingen van Cloudways beheerde cloud hosting. 
              Vind de perfecte hosting oplossing voor uw Nederlandse bedrijf.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.cloudways.com/en/?id=1384181" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
                aria-label="Bezoek Cloudways website"
              >
                Officiële Site
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hosting Oplossingen</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-gray-300 hover:text-white">WordPress Hosting</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white">E-commerce Hosting</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white">Zakelijke Hosting</a></li>
              <li><a href="#comparison" className="text-gray-300 hover:text-white">Enterprise Oplossingen</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white">Beheerde Cloud Hosting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Cloud Providers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#product-showcase" className="text-gray-300 hover:text-white">DigitalOcean Hosting</a></li>
              <li><a href="#product-showcase" className="text-gray-300 hover:text-white">AWS Hosting Nederland</a></li>
              <li><a href="#product-showcase" className="text-gray-300 hover:text-white">Google Cloud Hosting</a></li>
              <li><a href="#product-showcase" className="text-gray-300 hover:text-white">Linode Hosting</a></li>
              <li><a href="#product-showcase" className="text-gray-300 hover:text-white">Vultr Hosting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="text-gray-300 hover:text-white">Veelgestelde Vragen</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-white">Klantbeoordelingen</a></li>
              <li><a href="#comparison" className="text-gray-300 hover:text-white">Hosting Vergelijking</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">Over Ons</a></li>
              <li>
                <a 
                  href="https://www.cloudways.com/en/?id=1384181" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  Start Gratis Proefperiode
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            <p>&copy; {currentYear} Cloudways Hosting Reviews Nederland. Alle rechten voorbehouden.</p>
            <p className="mt-1">
              Expert reviews van beheerde cloud hosting oplossingen voor Nederlandse bedrijven.
            </p>
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacybeleid</a>
            <a href="/algemene-voorwaarden" className="text-gray-400 hover:text-white">Algemene Voorwaarden</a>
            <a href="/affiliate-verklaring" className="text-gray-400 hover:text-white">Affiliate Verklaring</a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>
            Disclaimer: Deze site bevat affiliate links. Wij kunnen een commissie verdienen als u koopt via onze links zonder extra kosten voor u.
          </p>
          <p className="mt-2">
            GDPR Compliant | Nederlandse Wetgeving | Data Sovereignty in EU
          </p>
        </div>
      </div>
    </footer>
  );
};
