import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, ShieldCheck, Globe2, Heart } from 'lucide-react';

const stats = [
  {
    label: 'Projects Completed',
    value: 10,
    suffix: '+',
    icon: <Rocket size={20} />,
    gradient: 'from-primary to-secondary'
  },
  {
    label: 'Technical Skills',
    value: 15,
    suffix: '+',
    icon: <ShieldCheck size={20} />,
    gradient: 'from-secondary to-primary'
  },
  {
    label: 'Languages Spoken',
    value: 3,
    suffix: '+',
    icon: <Globe2 size={20} />,
    gradient: 'from-primary to-secondary'
  },
  {
    label: 'Coding Passion',
    value: 100,
    suffix: '%',
    icon: <Heart size={20} />,
    gradient: 'from-secondary to-primary'
  }
];

const Counter = ({ value, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setCount(value);
      return;
    }

    let start = null;
    const duration = 1600;
    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="relative z-20 py-8 -mt-16 mb-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 dark:bg-dark-800 border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-gray-100/60 dark:shadow-black/40"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-dark-900 px-6 py-10 flex flex-col items-center justify-center text-center group hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} text-white flex items-center justify-center mb-4 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tabular-nums tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-[10px] md:text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.25em] mt-2">
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
