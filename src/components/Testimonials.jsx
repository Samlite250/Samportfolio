import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, BadgeCheck, Hexagon, Triangle, Circle, Square } from 'lucide-react';

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
  }
];

const brands = [
  { name: 'TechFlow', icon: <Hexagon size={24} className="mr-2" /> },
  { name: 'Innovate IO', icon: <Triangle size={24} className="mr-2" /> },
  { name: 'Creative Studio', icon: <Circle size={24} className="mr-2" /> },
  { name: 'Global Tech', icon: <Square size={24} className="mr-2" /> },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-dark-900/50 transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
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
          <div className="hidden md:flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-primary' : 'bg-gray-200 dark:bg-dark-700'}`}></div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative items-stretch">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card p-8 md:p-10 rounded-3xl flex flex-col relative group overflow-hidden border border-gray-200 dark:border-dark-700 bg-white/80 dark:bg-dark-800/80 hover:-translate-y-2 hover:shadow-2xl shadow-gray-200 dark:shadow-none transition-all duration-500"
            >
              {/* Subtle top border accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Quote Icon Backdrop */}
              <Quote className="absolute top-8 right-8 text-gray-100 dark:text-dark-700/50 group-hover:text-primary/10 transition-colors duration-500 -z-10" size={80} />
              
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>

              {/* Text Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-10 relative z-10 font-medium leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              {/* Author Profile */}
              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-dark-700 flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-transparent group-hover:border-primary transition-colors duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white dark:bg-dark-800 rounded-full">
                    <BadgeCheck size={16} className="text-blue-500" />
                  </div>
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-extrabold text-lg flex items-center gap-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    {testimonial.role} <span className="text-primary font-bold">@ {testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Bar */}
        <div className="mt-24 pt-12 border-t border-gray-200 dark:border-dark-700">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold mb-8">Trusted by growing companies and startups</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map((brand, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="flex items-center text-gray-500 dark:text-gray-400 font-bold text-xl md:text-2xl hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {brand.icon} {brand.name}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
