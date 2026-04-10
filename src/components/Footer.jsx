import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Info & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <p className="text-gray-900 text-[10px] font-black uppercase tracking-widest">
            &copy; 2026 Samcodings
          </p>
          <div className="hidden md:block w-px h-3 bg-gray-200"></div>
          <div className="flex items-center gap-2 text-gray-500 text-[9px] font-bold uppercase tracking-wider">
            <MapPin size={10} className="text-primary" />
            Kigali, Rwanda — Software Engineer
          </div>
        </div>

        {/* Minimal Socials */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/Samlite250" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/SamuelNdayambaje" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="mailto:samlite250@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
            <Mail size={16} />
          </a>
          <div className="w-px h-3 bg-gray-200 mx-1"></div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-primary font-black text-[9px] uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            TOP
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
