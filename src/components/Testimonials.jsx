import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Manager at TechFlow',
    content: 'Samuel is an incredibly talented engineer. He translated our complex business requirements into a beautiful, lightning-fast web application. His attention to detail for both UI/UX and backend performance is rare to find.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: 2,
    name: 'David Okafor',
    role: 'CTO at Innovate IO',
    content: 'Working with Samuel was a breeze. He took ownership of the entire frontend architecture and delivered a responsive, polished product way ahead of schedule. Highly recommended if you want high-quality code and a premium feel.',
    avatar: 'https://i.pravatar.cc/150?u=david',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Lead Designer',
    content: 'As a designer, I am very picky about implementation. Samuel nailed every single animation, hover state, and padding requirement I had. The intersection of design and engineering is where he truly shines!',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-gray-50 dark:bg-dark-800/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-primary font-mono text-xl mr-2">05.</span>
            Client Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here is what past clients and colleagues have to say about my work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card p-8 rounded-2xl flex flex-col relative bg-white dark:bg-dark-800 border border-gray-100 dark:border-dark-700 shadow-xl shadow-gray-200/50 dark:shadow-none"
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
              <p className="text-gray-600 dark:text-gray-300 mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold">{testimonial.name}</h4>
                  <p className="text-primary text-sm font-mono">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
