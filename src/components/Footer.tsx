import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">WasteWise</h3>
                <p className="text-gray-400 text-sm">AI-Powered Restaurant Waste Management</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The leading AI platform for restaurant waste management. Help 500+ restaurants reduce waste by 30% 
              and save thousands annually through intelligent demand forecasting and inventory optimization.
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
            <h4 className="font-bold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-green-400 transition-colors">AI Demand Forecasting</a></li>
              <li><a href="#features" className="hover:text-green-400 transition-colors">Waste Tracking</a></li>
              <li><a href="#features" className="hover:text-green-400 transition-colors">Inventory Management</a></li>
              <li><a href="#features" className="hover:text-green-400 transition-colors">Staff Training</a></li>
              <li><a href="#features" className="hover:text-green-400 transition-colors">Analytics & Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Globe size={16} className="text-green-400" />
                <span className="text-sm">Serving restaurants worldwide<br/>Headquarters: San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-400" />
                <span className="text-sm">+1 (855) WASTEWISE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-green-400" />
                <span className="text-sm">hello@wastewise.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 WasteWise. All rights reserved. | Making sustainability profitable.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Terms of Service</a>
              <a href="/data-protection" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Data Protection</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}