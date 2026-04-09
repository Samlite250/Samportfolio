import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <p className="text-primary font-medium tracking-widest mb-4 uppercase">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Samuel <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Ndayambaje.
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mb-6 uppercase tracking-widest">
            Full Stack Developer
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            I specialize in building exceptional digital experiences and scalable web platforms. Welcome to my portfolio.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#projects" className="px-8 py-3 bg-primary text-dark-900 font-bold rounded hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="px-8 py-3 border border-gray-600 text-white rounded hover:border-primary hover:text-primary hover:-translate-y-1 transition-all flex items-center gap-2">
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="flex gap-6 mt-12">
            <a href="https://github.com/SamuelNdayambaje" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:-translate-y-1">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/SamuelNdayambaje" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:-translate-y-1">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-primary transition-colors hover:-translate-y-1">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative group w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
            <div className="absolute inset-0 rounded-2xl border-2 border-primary translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-primary/20 rounded-2xl group-hover:bg-transparent transition-colors duration-300 z-10"></div>
            <img 
              src="/images/profile.jpg" 
              alt="Samuel Ndayambaje" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
