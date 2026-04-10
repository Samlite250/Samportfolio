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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-100 rounded-[2rem] shadow-2xl shadow-gray-200/50 p-6 md:p-0 flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-100 overflow-hidden"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex-1 px-8 py-10 flex flex-col items-center justify-center group hover:bg-gray-50/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-md transition-all">
                   {stat.icon}
                </span>
                <span className="text-3xl md:text-4xl font-extrabold text-gray-900 group-hover:text-primary transition-colors">
                  {stat.value}
                </span>
              </div>
              <div className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em] text-center">
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
