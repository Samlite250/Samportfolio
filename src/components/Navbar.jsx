import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Layers, Briefcase, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-[999] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-sans text-gray-900 hover:text-primary transition-colors duration-500">
          Sam<span className="text-primary animate-pulse">.dev</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.name} 
                href={link.href}
                className="group flex items-center gap-1.5 text-gray-800 hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider relative py-1"
              >
                <Icon size={16} />
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
          <a 
            href="#contact" 
            className="px-5 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-bold tracking-wide"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-900 hover:text-primary transition-colors z-[1001] relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[1000] bg-white flex flex-col md:hidden"
          >
            {/* Top bar of overlay */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-gray-900">
                Sam<span className="text-primary">.dev</span>
              </a>
              <button onClick={() => setMobileMenuOpen(false)} className="text-gray-900 hover:text-primary transition-colors">
                <X size={30} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col items-start justify-center flex-1 px-10 space-y-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className="group flex items-center gap-4 text-gray-800 hover:text-primary text-2xl font-bold uppercase tracking-widest py-4 w-full border-b border-gray-100 relative"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon size={18} />
                    </span>
                    <span>{link.name}</span>
                    <span className="ml-auto text-gray-300 group-hover:text-primary transition-colors">→</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Footer of overlay */}
            <div className="px-10 pb-10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-4 text-center bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
