import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 mt-12 bg-light-700 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="flex gap-6 mb-6">
          <a href="https://github.com/SamuelNdayambaje" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/SamuelNdayambaje" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-500 hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <p className="text-gray-500 text-sm font-mono flex items-center gap-2">
          Designed & Built with <Heart size={14} className="text-primary" /> by Samuel Ndayambaje
        </p>
        <p className="text-gray-600 text-xs font-mono mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>

      </div>
    </footer>
  );
};

export default Footer;
