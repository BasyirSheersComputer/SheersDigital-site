import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sheers Digital</h3>
                <p className="text-gray-400 text-sm">IT Project Management Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Kuala Lumpur's leading IT project management company. We solve the top 3 IT problems 
              that cost businesses thousands monthly - guaranteed results in 90 days or less.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Process Automation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">IT Consulting</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support & Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">Level 1, Villa Putra<br/>1, Jalan Sultan Ismail<br/>Kuala Lumpur 50480</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">+60 11-6326 3808</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">sales@sheerscomputer.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sheers Digital. All rights reserved. | SSM: MA0256368-X
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
              <a href="/data-protection" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Data Protection</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}