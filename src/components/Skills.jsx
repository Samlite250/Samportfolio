import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5 & CSS3', 'JavaScript (ES6+)']
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'RESTful APIs', 'PHP', 'Python', 'Firebase']
    },
    {
      title: 'Database Management',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase']
    },
    {
      title: 'Professional Tools',
      skills: ['Git & GitHub', 'Figma', 'AI Skills', 'Microsoft Office 365']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50/10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mr-6">
            <span className="text-primary font-mono text-xl mr-2">02.</span> 
            Technical Expertise
          </h2>
          <div className="h-px bg-gray-300 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-gray-600 font-medium">
                    <span className="text-primary mr-2">▹</span>
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
