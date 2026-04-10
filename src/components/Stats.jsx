import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'Technical Skills', value: '15+' },
  { label: 'Languages Spoken', value: '3+' },
  { label: 'Coding Passion', value: '100%' }
];

const Stats = () => {
  return (
    <div className="relative z-20 py-10 -mt-12 mb-12">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl md:text-5xl font-black text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-mono font-bold text-gray-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
