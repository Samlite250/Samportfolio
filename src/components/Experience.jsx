import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Full-Stack Developer Intern',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2023 - Present',
      description: [
        'Developed and maintained scalable web applications using React and Node.js.',
        'Collaborated with cross-functional teams to design and implement new features.',
        'Optimized database queries in PostgreSQL, reducing load times by 30%.'
      ]
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'Jun 2021 - Dec 2022',
      description: [
        'Built custom portfolio and e-commerce websites for small businesses.',
        'Implemented responsive designs and modern UI/UX principles.',
        'Integrated third-party APIs and payment gateways (Stripe, PayPal).'
      ]
    }
  ];

  return (
    <section id="experience" aria-label="Work Experience" className="py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mr-6">
            <span className="text-primary font-mono text-xl mr-2">04.</span> 
            Where I've Worked
          </h2>
          <div className="h-px bg-gray-300 dark:bg-dark-700 flex-grow max-w-xs"></div>
        </div>

        <div className="space-y-12 pl-4 md:pl-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0 md:flex gap-8 group"
            >
              {/* Timeline dot and line for mobile */}
              <div className="md:hidden absolute left-0 top-2 w-3 h-3 bg-primary rounded-full border-2 border-dark-900 dark:border-dark-700 z-10"></div>
              <div className="md:hidden absolute left-1.5 top-5 bottom-[-3rem] w-px bg-gray-300 dark:bg-dark-700 group-last:bg-transparent"></div>

              {/* Period for Desktop */}
              <div className="hidden md:block w-1/4 pt-1 text-right text-gray-500 dark:text-gray-400 font-mono text-sm">
                {exp.period}
              </div>

              {/* Timeline line for Desktop */}
              <div className="hidden md:flex flex-col items-center relative">
                <div className="w-3 h-3 bg-primary rounded-full border-2 border-dark-900 dark:border-dark-700 z-10 mt-1.5"></div>
                <div className="absolute top-4 bottom-[-3rem] w-px bg-gray-300 dark:bg-dark-700 group-last:bg-transparent left-1.5"></div>
              </div>

              {/* Content */}
              <div className="md:w-3/4 glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  {exp.role} 
                  <span className="text-primary hidden sm:inline">@</span> 
                  <span className="text-primary block sm:inline">{exp.company}</span>
                </h3>
                <p className="md:hidden text-gray-500 dark:text-gray-400 font-mono text-xs mb-4 mt-1">{exp.period}</p>
                
                <ul className="mt-6 space-y-3">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="text-gray-700 dark:text-gray-300 flex items-start text-sm sm:text-base">
                      <span className="text-primary mr-3 mt-1.5 opacity-70">▹</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
