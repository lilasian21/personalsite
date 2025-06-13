import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = ['Home', 'About', 'HTB Profile', 'Experience', 'Skills', 'Certifications', 'Contact'];

  const getSectionId = (item) => {
    if (item === 'HTB Profile') {
      return 'htb';
    }
    return item.toLowerCase();
  };

  const handleLinkClick = (item) => {
    scrollToSection(getSectionId(item));
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-2xl font-bold cursor-pointer"
            onClick={() => handleLinkClick('Home')}
          >
            <ShieldCheck className="text-cyan-400"/>
            <span className="gradient-text">CyberSec</span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleLinkClick(item)}
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleLinkClick(item)}
                className="block w-full text-left py-2 text-white hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;