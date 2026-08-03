import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo & Copyright (Matched) */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="text-lg font-black text-gray-900 leading-none mb-1">
              Sam<span className="text-primary">.dev</span>
            </a>
            <p className="text-gray-900 text-[9px] font-bold uppercase tracking-[0.15em] leading-none">
              &copy; 2026 All rights reserved by Sam Dev.
            </p>
          </div>

          {/* Social Links (Smaller) */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/Samlite250" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com/in/SamuelNdayambaje" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all">
              <Linkedin size={16} />
            </a>
            <a href="mailto:samcodings@gmail.com" className="text-gray-400 hover:text-primary transition-all">
              <Mail size={16} />
            </a>
          </div>

          {/* Location & Top */}
          <div className="flex flex-col items-center md:items-end">
             <span className="text-gray-500 text-[9px] font-bold uppercase tracking-tight mb-1">Kigali, Rwanda</span>
             <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-primary font-mono text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-1"
              >
                Top <ChevronUp size={10} />
              </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
