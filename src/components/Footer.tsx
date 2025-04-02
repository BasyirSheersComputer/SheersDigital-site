import React from 'react';
import { Server, Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
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
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">sales@sheerscomputer.com</span>
              </li>
              <li className="text-gray-400">
                Villa Putra Condominium<br />
                Chow Kit<br />
                Kuala Lumpur, 50480
              </li>
              <li className="text-gray-400">
                +6 (011) 6326-3808
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sheers Computer. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;