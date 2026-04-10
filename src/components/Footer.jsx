import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* Brand & Mission */}
        <div className="mb-6">
          <a href="#home" className="text-2xl font-extrabold text-gray-900 block">
            Sam<span className="text-primary">.dev</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/Samlite250" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/SamuelNdayambaje" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
            <Linkedin size={20} />
          </a>
          <a href="mailto:samlite250@gmail.com" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
            <Mail size={20} />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs font-medium">
            &copy; {currentYear} Samuel Ndayambaje. Based in Kigali, Rwanda.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-mono text-[10px] uppercase tracking-[0.2em] font-bold"
          >
            Back to Top
            <ChevronUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
