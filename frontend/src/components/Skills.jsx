import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL', 'RESTful APIs']
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Redis', 'Prisma', 'Firebase']
    },
    {
      title: 'Tools & Others',
      skills: ['Git & GitHub', 'Docker', 'AWS', 'Vercel', 'Jest', 'Figma']
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mr-6">
            <span className="text-primary font-mono text-xl mr-2">02.</span> 
            My Skills
          </h2>
          <div className="h-px bg-gray-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-secondary mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
