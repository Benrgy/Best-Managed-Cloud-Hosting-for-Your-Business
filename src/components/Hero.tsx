
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-xl"></div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="secondary" className="px-4 py-2 bg-white/80 text-gray-700">
            <Star className="h-4 w-4 mr-2 text-yellow-500" />
            4.8/5 Beoordeling
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 bg-white/80 text-gray-700">
            <Users className="h-4 w-4 mr-2 text-blue-500" />
            250.000+ Websites
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 bg-white/80 text-gray-700">
            <Shield className="h-4 w-4 mr-2 text-green-500" />
            Enterprise Beveiliging
          </Badge>
        </div>

        <header>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Beste <span className="text-blue-600 relative">
              Beheerde Cloud Hosting
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200 rounded"></div>
            </span><br />
            voor Uw Bedrijf in 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Krijg <strong>enterprise-niveau prestaties</strong> met Cloudways beheerde cloud hosting. 
            Vanaf <strong className="text-blue-600">€10/maand</strong> met 24/7 expert ondersteuning, 
            gratis migratie en <strong>99.99% uptime garantie</strong>.
          </p>
        </header>

        {/* Urgency banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Beperkte Tijd: 20% KORTING eerste 3 maanden met code "G2Saveme20"</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            onClick={() => window.open('https://www.cloudways.com/en/?id=1384181', '_blank')}
            aria-label="Start Cloudways gratis proefperiode"
          >
            🚀 Start GRATIS 3-Dagen Proefperiode
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg font-semibold shadow-md hover:shadow-lg transition-all"
            onClick={() => document.getElementById('product-showcase')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Bekijk hosting plannen en prijzen"
          >
            Bekijk Plannen & Prijzen
          </Button>
        </div>

        {/* Value props */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-center">
            <span className="text-green-500 mr-2 font-bold">✓</span>
            <span>Gratis SSL Certificaat</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-green-500 mr-2 font-bold">✓</span>
            <span>Gratis Website Migratie</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-green-500 mr-2 font-bold">✓</span>
            <span>24/7 Expert Ondersteuning</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-green-500 mr-2 font-bold">✓</span>
            <span>Geen Setup Kosten</span>
          </div>
        </div>

        {/* Social proof */}
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-3">
            <div className="flex text-yellow-400 mr-3">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <span className="font-semibold text-gray-900">Vertrouwd door Nederlandse Bedrijven</span>
          </div>
          <p className="text-gray-700 italic mb-2">
            "Overgestapt naar Cloudways en onze site snelheid verbeterde met 3x. De migratie was naadloos en ondersteuning is uitstekend!"
          </p>
          <p className="text-gray-600 text-sm">- Michael Chen, Tech Startup Oprichter</p>
        </div>
      </div>
    </section>
  );
};
