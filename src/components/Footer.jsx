import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 pt-16 pb-10 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* Brand & Mission */}
        <div className="mb-10">
          <a href="#home" className="text-3xl font-extrabold mb-4 block">
            Sam<span className="text-primary">.dev</span>
          </a>
          <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
            Kigali-based Software Engineer specializing in scalable web platforms and 
            digital experiences. Let's work together to build something great.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/Samlite250" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/SamuelNdayambaje" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1">
            <Linkedin size={24} />
          </a>
          <a href="mailto:samlite250@gmail.com" className="text-gray-400 hover:text-primary transition-all hover:-translate-y-1">
            <Mail size={24} />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Samuel Ndayambaje.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest"
          >
            Back to Top
            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:-translate-y-1 transition-all">
              <ChevronUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
