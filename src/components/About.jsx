import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript (ES6+)', 'React.js', 'Node.js',
  'Tailwind CSS', 'Supabase', 'PostgreSQL',
];

const education = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    school: 'University  (Name)',
    period: '2023 – Present',
    description:
      'Pursuing a degree in Software Engineering with focus on full-stack web development, distributed systems, databases, and modern software architectures.',
  },
  {
    degree: 'Software Development — Level 3, 4 & 5',
    school: 'Secondary School (TVET/Vocational)',
    period: '2020 – 2023',
    description:
      'Studied Software Development from Level 3 through Level 5. Built a strong foundation in programming fundamentals, web technologies, databases, and software engineering principles.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 md:px-12">

        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mr-6">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-gray-300 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text + Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-600 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm a passionate full-stack software developer whose journey
              into tech began in secondary school, where I studied Software
              Development from Level 3 all the way through Level 5. That early
              start gave me a rock-solid foundation before pursuing my university degree.
            </p>
            <p>
              Today I build scalable web platforms — from real estate systems and
              e-commerce marketplaces to campus social networks. I bring both
              precision and creativity to every line of code I write.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-2">
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
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group w-64 h-64 md:w-80 md:h-80">
              {/* Offset border frame */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              {/* Color overlay */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              {/* Your photo */}
              <img
                src="/images/profile.jpeg"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 glass-card p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold mb-8 text-gray-900">🎓 Education</h3>

          <div className="relative border-l-2 border-primary/30 pl-8 space-y-10 ml-2">
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
                <span className="absolute -left-[2.65rem] top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-white shadow"></span>

                <p className="text-primary font-mono text-xs mb-1 uppercase tracking-widest">{item.period}</p>
                <h4 className="font-semibold text-gray-900 text-lg">{item.degree}</h4>
                <p className="text-primary/80 text-sm font-medium mt-0.5">{item.school}</p>
                <p className="text-gray-500 text-sm mt-2 max-w-2xl">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
