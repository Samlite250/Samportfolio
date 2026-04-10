import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript (ES6+)', 'React.js', 'Node.js',
  'Tailwind CSS', 'Supabase', 'PostgreSQL',
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
              Hello! I'm a passionate full-stack developer who loves crafting
              elegant digital experiences. My journey into tech started with
              curiosity about how websites work &mdash; and I've never stopped
              exploring since.
            </p>
            <p>
              I specialize in building scalable web platforms with clean,
              maintainable code. Whether it's a sleek UI or a robust backend
              API, I bring both precision and creativity to every project.
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

        {/* Education Card below */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass-card p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Education</h3>
          <ul className="space-y-6">
            <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
              <h4 className="font-medium text-gray-900 text-lg">Bachelor of Science in Software Engineering</h4>
              <p className="text-primary text-sm mt-1">University Name &bull; 2021 – Present</p>
              <p className="text-gray-600 text-sm mt-2 max-w-2xl">
                Final year undergraduate focusing on full-stack development,
                distributed systems, and modern web architectures.
              </p>
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
