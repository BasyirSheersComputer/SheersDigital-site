import React from 'react';
import { Zap, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sheers Software Sdn Bhd</h3>
                <p className="text-sm text-slate-400">High-Energy F&B Solutions</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              We're a dynamic new entrant revolutionizing how Malaysian F&B operators 
              manage inventory, reduce waste, and maximize profitability through cutting-edge technology.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+60 3-2110 5555</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>solutions@sheers.my</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/inventory-integration" className="hover:text-white transition-colors">Inventory Integration</a></li>
              <li><a href="/waste-logging-automation" className="hover:text-white transition-colors">Waste Logging Automation</a></li>
              <li><a href="/supplier-integration" className="hover:text-white transition-colors">Supplier Integration</a></li>
              <li><a href="/ai-forecasting" className="hover:text-white transition-colors">AI Forecasting</a></li>
              <li><a href="/compliance-automation" className="hover:text-white transition-colors">Compliance Automation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/wastewise-platform" className="hover:text-white transition-colors">WasteWise Platform</a></li>
              <li><a href="/roi-calculator" className="hover:text-white transition-colors">Free ROI Calculator</a></li>
              <li><a href="/industry-reports" className="hover:text-white transition-colors">Industry Reports</a></li>
              <li><a href="/implementation-guide" className="hover:text-white transition-colors">Implementation Guide</a></li>
              <li><a href="/support-center" className="hover:text-white transition-colors">Support Center</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Sheers Software Sdn Bhd. All rights reserved. Transforming Malaysian F&B operations one outlet at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;