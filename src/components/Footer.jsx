import React from 'react';
import { Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-ocean border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
             <div className="mb-6 flex items-center gap-2">
                 <span className="text-2xl font-light tracking-tight text-white">SPORTS<span className="font-bold text-pool-blue">FUSION</span></span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed mb-6">
              Premier provider of integrated IT solutions designed to streamline every aspect of swimming meet management. Bringing precision to the pool deck.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80 mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-white/60">
                <Mail className="h-5 w-5 text-pool-blue mt-1 flex-shrink-0" />
                <a href="mailto:sportsfusionlk2025@gmail.com" className="hover:text-white transition-colors">
                  sportsfusionlk2025@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-white/60">
                 <MapPin className="h-5 w-5 text-pool-blue mt-1 flex-shrink-0" />
                 <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Sports Fusion. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a href="#" className="h-10 w-10 bg-white/5 hover:bg-white/10 rounded-sm flex items-center justify-center text-white transition-colors duration-200 border border-white/10 hover:border-pool-blue/40">
    {icon}
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-white/60 hover:text-white transition-colors flex items-center">
      <span className="transition-transform duration-200 inline-block group-hover:translate-x-1">{children}</span>
    </a>
  </li>
);

export default Footer;