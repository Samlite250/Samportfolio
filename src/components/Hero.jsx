import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const TypewriterText = ({ texts }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = texts[currentIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, 90);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, 160);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
      {currentText}
      <span className="animate-pulse text-gray-900 dark:text-white">|</span>
    </span>
  );
};


const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center pt-16 pb-10">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <p className="text-primary font-medium tracking-widest mb-4 uppercase">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            Sam <span className="text-primary">Dev</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-widest min-h-[3rem] md:min-h-[4rem]">
            I'm a <TypewriterText texts={['Front-End Developer', 'Back-End Developer', 'Web Designer', 'Database Manager']} />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            I'm a Full-Stack Developer based in Kigali, Rwanda, specializing in building exceptional digital experiences and scalable web platforms. Welcome to my portfolio.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#projects" className="px-8 py-3 bg-primary text-white font-bold rounded hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="px-8 py-3 border border-gray-400 text-gray-700 dark:text-gray-300 rounded hover:border-secondary hover:text-secondary hover:-translate-y-1 transition-all flex items-center gap-2">
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="flex gap-6 mt-12">
            <a href="https://github.com/Samlite250" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-secondary transition-colors hover:-translate-y-1">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/SamuelNdayambaje" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-secondary transition-colors hover:-translate-y-1">
              <Linkedin size={24} />
            </a>
            <a href="mailto:samlite250@gmail.com" className="text-gray-500 hover:text-secondary transition-colors hover:-translate-y-1">
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
            {/* Background decoration */}
            <div className="absolute inset-x-0 inset-y-0 translate-x-4 translate-y-4 border-2 border-primary rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

            {/* Image container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src="/images/profile-opt.jpg"
                alt="Samuel Ndayambaje - Full-Stack Software Engineer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 relative z-20"
              />
              <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
