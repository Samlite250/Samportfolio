import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mr-6">
            <span className="text-primary font-mono text-xl mr-2">01.</span> 
            About Me
          </h2>
          <div className="h-px bg-gray-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              Hello! My name is Samuel and I enjoy creating things that live on the internet. My interest in web development started back in high school when I decided to try editing custom Tumblr themes &mdash; turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at a start-up, a huge corporation, and a student-led design agency. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
            <p>
              I recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
            </p>
          </motion.div>

          {/* Additional visual element or image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-2xl relative z-10">
              <h3 className="text-2xl font-semibold mb-4 text-white">Education</h3>
              <ul className="space-y-6">
                <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  <h4 className="font-medium text-white">Bachelor of Science in Software Engineering</h4>
                  <p className="text-primary text-sm mt-1">University Name &bullet; 2021 - Present</p>
                  <p className="text-gray-400 text-sm mt-2">Final year undergraduate focusing on full-stack development, distributed systems, and modern web architectures.</p>
                </li>
              </ul>
            </div>
            
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[80px] rounded-full z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
