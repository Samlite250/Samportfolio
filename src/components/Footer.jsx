import React from 'react';
import { Github, Linkedin, Mail, ChevronUp, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Summarized Info */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-black text-gray-900 mb-1 block">
              Sam<span className="text-primary">.dev</span>
            </a>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 text-[11px] font-bold uppercase tracking-wider">
              <MapPin size={12} className="text-primary" />
              Kigali, Rwanda — Software Engineer
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a href="https://github.com/Samlite250" target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-lg text-gray-700 hover:text-primary hover:bg-white hover:shadow-md transition-all">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/SamuelNdayambaje" target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-lg text-gray-700 hover:text-primary hover:bg-white hover:shadow-md transition-all">
              <Linkedin size={18} />
            </a>
            <a href="mailto:samlite250@gmail.com" className="p-2 bg-gray-50 rounded-lg text-gray-700 hover:text-primary hover:bg-white hover:shadow-md transition-all">
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright & Top */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-gray-800 text-[11px] font-black uppercase tracking-widest">
              &copy; 2026 Samcodings
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-primary font-mono text-[9px] font-black uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
            >
              Top <ChevronUp size={12} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
