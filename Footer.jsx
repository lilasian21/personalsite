
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-cyan-400"/>
            <span className="text-xl font-bold gradient-text">
              Lance Portfolio
            </span>
          </div>
          <span className="text-gray-400 text-sm">
            © 2025 All rights reserved. Securing the digital world, one line of code at a time.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
