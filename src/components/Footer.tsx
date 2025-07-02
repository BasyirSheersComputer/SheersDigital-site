import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Award, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mr-3">
                <Zap className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Sheers Technologies</h3>
                <p className="text-gray-400 text-sm">Digital Transformation | AI Automation | Malaysia</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Malaysia's #1 digital transformation company. We turn traditional businesses into 
              digital money machines using AI automation and cloud technology.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 bg-yellow-500/20 px-3 py-1 rounded-full">
                <Award size={16} className="text-yellow-400" />
                <span className="text-yellow-300 text-sm">Malaysia's #1 Rated</span>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-500/20 px-3 py-1 rounded-full">
                <Shield size={16} className="text-emerald-400" />
                <span className="text-emerald-300 text-sm">PDPA Compliant</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Digital Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services/cloud-migration" className="hover:text-yellow-400 transition-colors">AI Automation Revolution</Link></li>
              <li><Link to="/services/cybersecurity" className="hover:text-yellow-400 transition-colors">Cybersecurity & Data Protection</Link></li>
              <li><Link to="/services/mobile-app-development" className="hover:text-yellow-400 transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services/web-application-development" className="hover:text-yellow-400 transition-colors">Web Application Development</Link></li>
              <li><Link to="/services/process-automation" className="hover:text-yellow-400 transition-colors">Business Process Automation</Link></li>
              <li><Link to="/services/it-consulting" className="hover:text-yellow-400 transition-colors">Digital Transformation Consulting</Link></li>
              <li><Link to="/services/support-maintenance" className="hover:text-yellow-400 transition-colors">24/7 Digital Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Digital Experts</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-yellow-400 mt-1" />
                <div>
                  <span className="text-sm">Level 1, Villa Putra<br/>Jalan Sultan Ismail<br/>Kuala Lumpur 50480, Malaysia</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-yellow-400" />
                <span className="text-sm">+60 11-6326 3808</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-yellow-400" />
                <span className="text-sm">sales@sheerscomputer.com</span>
              </div>
              
              <div className="mt-4 p-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-lg border border-purple-500/30">
                <p className="text-yellow-300 text-sm font-medium">🚀 24/7 Digital Transformation Support</p>
                <p className="text-blue-200 text-xs">Emergency AI automation & cloud support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sheers Technologies Sdn. Bhd. All rights reserved. | SSM: MA0256368-X | Digital Transformation Malaysia
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</Link>
              <Link to="/data-protection" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">PDPA Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}