import React from 'react';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a href="#home" className="text-3xl font-extrabold mb-6 block">
              Sam<span className="text-primary">.dev</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Based in Kigali, Rwanda. Specializing in high-performance web applications and mobile-first digital solutions. Building the future, one line of code at a time.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Samlite250" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all group">
                <Github size={18} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="https://linkedin.com/in/SamuelNdayambaje" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all group">
                <Linkedin size={18} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="mailto:samlite250@gmail.com" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all group">
                <Mail size={18} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Me</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Work Experience</a></li>
            </ul>
          </div>

          {/* Support/Links */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-8 h-1 bg-secondary rounded-full"></span>
            </h4>
            <p className="text-gray-400 mb-6">Have a project in mind? Let's build something extraordinary together.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all">
              Start a Conversation
            </a>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Samuel Ndayambaje. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest"
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
