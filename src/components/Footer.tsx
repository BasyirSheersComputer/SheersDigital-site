import React from 'react';
import { Server, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <Server className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Sheers Digital</span>
            </div>
            <p className="mt-4 text-gray-400">
              Providing innovative IT solutions and system integration services to businesses worldwide since 2018.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">Network Infrastructure</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">Cloud Integration</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">Cybersecurity</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">Data Management</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">Custom Software</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">IT Consulting</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="text-gray-400 hover:text-white"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('partner')}
                  className="text-gray-400 hover:text-white"
                >
                  Partner With Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="text-gray-400 hover:text-white"
                >
                  About the Firm
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('careers')}
                  className="text-gray-400 hover:text-white"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">
                Villa Putra Condominium<br />
                Chow Kit<br />
                Kuala Lumpur, 50480
              </li>
              <li className="text-gray-400">
                +6 (011) 6326-3808
              </li>
              <li className="text-gray-400">
                sales@sheerscomputer.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex items-center justify-center">
            <Server className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">Sheers Digital</span>
          </div>
          <nav className="mt-4 flex justify-center space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-gray-400 hover:text-white"
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('partner')}
              className="text-gray-400 hover:text-white"
            >
              Partner With Us
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className="text-gray-400 hover:text-white"
            >
              About the Firm
            </button>
            <button 
              onClick={() => setCurrentPage('careers')}
              className="text-gray-400 hover:text-white"
            >
              Careers
            </button>
          </nav>
          
          <div className="mt-8 text-center text-sm text-gray-400 max-w-4xl mx-auto">
            <p className="mb-4">
              Ahmad Basyir's results are not typical and are not a guarantee of your success. Ahmad is an experienced business owner and IT professional, and your results will vary depending on education, effort, application, experience, and background. Ahmad does not personally manage every IT project at Sheers Digital. Due to the sensitivity of client information, we do not know or track the typical results of our clients. We cannot guarantee that you will make money or that you will be successful if you employ our business strategies specifically or generally. Consequently, your results may significantly vary from ours. We do not give investment, tax, or other professional advice. Specific transactions and experiences are mentioned for informational purposes only.
            </p>
            <p>
              The information contained within this website is the property of Sheers Digital. Any use of the images, content, or ideas expressed herein without the express written consent of Sheers Digital is prohibited. Copyright © 2025 Sheers Digital. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;