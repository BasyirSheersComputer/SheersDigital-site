import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-accent-2 font-montserrat">
      <div className="max-w-7xl mx-auto px-layout-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent-1 rounded-layout flex items-center justify-center">
                <span className="text-secondary font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary">SERVORA AI</h3>
                <p className="text-accent-2 text-sm">Premium F&B Intelligence</p>
              </div>
            </div>
            <p className="text-accent-2 mb-6 max-w-md">
              Premium AI-powered waste management platform for Malaysia's top F&B revenue generators. 
              Achieve 35-45% waste reduction with guaranteed ROI in 30 days.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-accent-2 hover:text-accent-1 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-2 hover:text-accent-1 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-2 hover:text-accent-1 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent-2 hover:text-accent-1 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-6">FEATURES</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#features" className="text-accent-2 hover:text-accent-1 transition-colors">
                  AI Demand Forecasting
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-accent-2 hover:text-accent-1 transition-colors">
                  Waste Tracking
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-accent-2 hover:text-accent-1 transition-colors">
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-accent-2 hover:text-accent-1 transition-colors">
                  Operational Dashboard
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-accent-2 hover:text-accent-1 transition-colors">
                  Staff Training
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-accent-2 hover:text-accent-1 transition-colors">
                  Compliance Reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-6">COMPANY</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#about" className="text-accent-2 hover:text-accent-1 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-accent-2 hover:text-accent-1 transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-accent-2 hover:text-accent-1 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-accent-2 hover:text-accent-1 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/data-protection" className="text-accent-2 hover:text-accent-1 transition-colors">
                  Data Protection
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-accent-2/20 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-accent-1" />
              <div>
                <p className="text-accent-2 text-sm">Email</p>
                <p className="text-secondary">hello@servora-ai.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-accent-1" />
              <div>
                <p className="text-accent-2 text-sm">Phone</p>
                <p className="text-secondary">+60 3-1234 5678</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-accent-1" />
              <div>
                <p className="text-accent-2 text-sm">Address</p>
                <p className="text-secondary">123 Chow Kit Road, Kuala Lumpur, Malaysia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-2/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent-2 text-sm">
            © 2024 Sheers Software Sdn. Bhd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-accent-2 hover:text-accent-1 transition-colors text-sm">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="text-accent-2 hover:text-accent-1 transition-colors text-sm">
              Terms
            </Link>
            <Link to="/data-protection" className="text-accent-2 hover:text-accent-1 transition-colors text-sm">
              Data Protection
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;