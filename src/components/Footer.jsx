import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-ocean text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sports Fusion</h3>
            <p className="text-blue-100 max-w-xs">
              Premier provider of integrated IT solutions designed to streamline every aspect of swimming meet management.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-100 hover:text-white">Home</a></li>
              <li><a href="/services" className="text-blue-100 hover:text-white">Services</a></li>
              <li><a href="/about" className="text-blue-100 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-blue-100 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pool-blue" />
                <a href="mailto:sportsfusionlk2025@gmail.com" className="text-blue-100 hover:text-white">
                  sportsfusionlk2025@gmail.com
                </a>
              </div>
              {/* Add more contact info if available */}
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-4 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Sports Fusion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;