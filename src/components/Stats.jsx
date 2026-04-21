import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Globe2, Heart } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '10+', icon: <Rocket size={20} className="text-primary" /> },
  { label: 'Technical Skills', value: '15+', icon: <ShieldCheck size={20} className="text-secondary" /> },
  { label: 'Languages Spoken', value: '3+', icon: <Globe2 size={20} className="text-primary" /> },
  { label: 'Coding Passion', value: '100%', icon: <Heart size={20} className="text-red-500" /> }
];

const Stats = () => {
  return (
    <div className="relative z-20 py-8 -mt-16 mb-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center justify-center group transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="p-2.5 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-all">
                   {stat.icon}
                </span>
                <span className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {stat.value}
                </span>
              </div>
              <div className="text-[10px] md:text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] text-center">
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
