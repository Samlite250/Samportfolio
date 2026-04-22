import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, BadgeCheck, Hexagon, Triangle, Circle, Square, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Nsengimana Fabrice',
    role: 'Networking Eng. & Graphic Designer',
    company: 'Independent',
    content: "As a networking engineer and graphic designer building my own portfolio, I am extremely particular about aesthetics and underlying architecture. Seeing Samuel's touch in web development completely excited me. He truly elevates digital interactions.",
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 2,
    name: 'Burikantu Representative',
    role: 'Founder',
    company: 'Burikantu Real Estate',
    content: "Samuel delivered an outstanding, lightning-fast platform for our agency here in Rwanda. He entirely modernized our property management approach. Finding an engineer with his level of precision and luxurious design capability has been incredible.",
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
  {
    id: 3,
    name: 'Operations Director',
    role: 'Project Lead',
    company: 'Market Pro Systems',
    content: 'We needed a highly scalable e-commerce infrastructure that could handle real-time inventory seamlessly. Samuel architected a full-stack solution from scratch that essentially eliminated our logistical overhead and modernized our digital storefront.',
    avatar: 'https://i.pravatar.cc/150?img=60',
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
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 480 : 320;
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

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

      {/* Sliding Testimonials Layout */}
      <div className="w-full relative group z-10">
        
        {/* Floating Scroll Navigation */}
        <div className="absolute inset-y-0 left-0 md:left-4 flex items-center z-20 pointer-events-none">
          <button 
            onClick={() => scroll('left')}
            className="pointer-events-auto ml-2 w-10 h-10 md:w-14 md:h-14 bg-white/90 dark:bg-dark-800/90 backdrop-blur-md border border-gray-200 dark:border-dark-700 rounded-full flex items-center justify-center text-gray-900 dark:text-white shadow-xl hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-0 md:right-4 flex items-center z-20 pointer-events-none">
          <button 
            onClick={() => scroll('right')}
            className="pointer-events-auto mr-2 w-10 h-10 md:w-14 md:h-14 bg-white/90 dark:bg-dark-800/90 backdrop-blur-md border border-gray-200 dark:border-dark-700 rounded-full flex items-center justify-center text-gray-900 dark:text-white shadow-xl hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth py-8 px-6 md:px-12 items-stretch"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            #testimonials .flex::-webkit-scrollbar { display: none; }
          `}</style>
          
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="w-[85vw] md:w-[450px] shrink-0 mx-4 snap-center"
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
