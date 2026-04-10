import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript (ES6+)', 'React.js', 'Node.js',
  'Tailwind CSS', 'Supabase', 'PostgreSQL',
  'Git & GitHub', 'RESTful APIs', 'UI/UX Design'
];

const education = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    school: 'Kigali Independent University (ULK)',
    period: '2023 – Present',
    description:
      'Currently pursuing a degree in Software Engineering with a deep focus on full-stack web development, distributed systems, and scalable modern architectures.',
  },
  {
    degree: 'Software Development — Level 3, 4 & 5',
    school: 'Secondary School (TVET/Vocational)',
    period: '2020 – 2023',
    description:
      'Successfully completed Level 3 through Level 5 in Software Development. Gained early expertise in coding fundamentals, database management, and system analysis.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">

        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mr-6">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-gray-300 flex-grow max-w-xs"></div>
        </div>

        <div className="space-y-16">
          
          {/* Main Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div className="md:col-span-2 space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Hello! I'm a passionate full-stack software developer whose journey
                into tech began in secondary school. Studying Software Development 
                from Level 3 through Level 5 at an early age gave me a rock-solid 
                foundation before pursuing my formal university degree.
              </p>
              <p>
                Today, I specialize in building scalable web platforms—ranging from 
                complex real estate systems and e-commerce marketplaces to 
                interactive campus social networks. I am committed to writing clean, 
                maintainable code and creating seamless user experiences.
              </p>
            </div>

            {/* Skills Highlight */}
            <div className="space-y-4">
              <h3 className="text-gray-900 font-bold text-xl mb-4">Core Skills</h3>
              <ul className="grid grid-cols-1 gap-3">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-700 text-base font-medium"
                  >
                    <span className="text-primary text-sm">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-10 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-semibold mb-10 text-gray-900 flex items-center gap-3">
              <span className="text-2xl">🎓</span> Education Journey
            </h3>

            <div className="relative border-l-2 border-primary/20 pl-8 space-y-12 ml-2">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[2.65rem] top-1.5 w-4.5 h-4.5 rounded-full bg-primary border-4 border-white shadow-sm transition-transform hover:scale-125"></span>

                  <p className="text-primary font-mono text-sm mb-1 uppercase tracking-widest">{item.period}</p>
                  <h4 className="font-bold text-gray-900 text-xl">{item.degree}</h4>
                  <p className="text-primary/90 font-semibold mt-1">{item.school}</p>
                  <p className="text-gray-500 text-base mt-4 max-w-3xl italic">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
