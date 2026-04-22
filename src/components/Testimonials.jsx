import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, BadgeCheck, Hexagon, Triangle, Circle, Square, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Manager',
    company: 'TechFlow',
    content: 'Samuel is an incredibly talented engineer. He translated our complex business requirements into a beautiful, lightning-fast web application. His attention to detail for both UI/UX and backend performance is rare to find.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: 2,
    name: 'David Okafor',
    role: 'CTO',
    company: 'Innovate IO',
    content: 'Working with Samuel was a breeze. He took ownership of the entire frontend architecture and delivered a responsive, polished product way ahead of schedule. Highly recommended if you want high-quality code and a premium feel.',
    avatar: 'https://i.pravatar.cc/150?u=david',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Lead Designer',
    company: 'Creative Studio',
    content: 'As a designer, I am very picky about implementation. Samuel nailed every single animation, hover state, and padding requirement I had. The intersection of design and engineering is where he truly shines!',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
  {
    id: 4,
    name: 'Michael Chang',
    role: 'CEO',
    company: 'NextGen Systems',
    content: 'Bringing Samuel onboard was the best decision we made for our platform upgrade. He wrote pristine code, scaled our databases efficiently, and always communicated complexities in a way everyone could understand.',
    avatar: 'https://i.pravatar.cc/150?u=michael',
  }
];

const brands = [
  { name: 'TechFlow', icon: <Hexagon size={24} className="mr-2" /> },
  { name: 'Innovate IO', icon: <Triangle size={24} className="mr-2" /> },
  { name: 'Creative Studio', icon: <Circle size={24} className="mr-2" /> },
  { name: 'Global Tech', icon: <Square size={24} className="mr-2" /> },
  { name: 'NextGen', icon: <Triangle size={24} className="mr-2" /> },
];

const scrollableBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-dark-900/50 transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full mb-16 md:mb-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-1 w-12 bg-primary"></div>
              <span className="text-primary font-mono font-bold uppercase tracking-widest text-sm">05. Client Reviews</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Feedback from <br className="hidden md:block" /> Industry Partners.
            </h2>
          </div>
        </div>
      </div>

      {/* Grid Testimonials Layout */}
      <div className="w-full relative z-10 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <div className="bg-white dark:bg-dark-800 p-8 md:p-10 rounded-2xl flex flex-col relative h-full border border-gray-100 dark:border-dark-700 shadow-xl shadow-gray-200/40 dark:shadow-none hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                
                {/* Minimalist Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Quote Layout */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className="text-primary/90" />
                    ))}
                  </div>
                  <Quote size={28} className="text-gray-200 dark:text-dark-600" />
                </div>

                {/* Text Content */}
                <p className="text-gray-600 dark:text-gray-300 mb-8 relative z-10 font-medium leading-relaxed text-lg flex-grow">
                  "{testimonial.content}"
                </p>
                
                {/* Author Profile */}
                <div className="mt-auto flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-500 ring-2 ring-gray-100 dark:ring-dark-700 group-hover:ring-primary/30"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-bold text-base flex items-center gap-2">
                      {testimonial.name}
                      <BadgeCheck size={16} className="text-primary" />
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.role} <span className="text-gray-300 dark:text-dark-600 mx-1">•</span> <span className="font-semibold text-gray-700 dark:text-gray-300">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Auto-scrolling Brand Bar Marquee */}
      <div className="mt-24 pt-12 border-t border-gray-200 dark:border-dark-700 container mx-auto px-6 overflow-hidden relative">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold mb-8">Trusted by growing companies and startups</p>
        
        <div className="w-full relative overflow-hidden flex items-center">
          <div className="flex w-max animate-marquee-reverse pointer-events-auto">
            {scrollableBrands.map((brand, idx) => (
              <div 
                key={idx}
                className="flex items-center text-gray-500 dark:text-gray-400 font-bold text-xl md:text-2xl hover:text-gray-900 dark:hover:text-white transition-colors opacity-60 grayscale hover:grayscale-0 mx-8 md:mx-16 whitespace-nowrap"
              >
                {brand.icon} {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
