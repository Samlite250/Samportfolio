import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, GraduationCap, Laptop, Monitor, Zap, Layers, Languages, Heart, Smartphone, Car, Music } from 'lucide-react';

const skills = [
  { name: 'JavaScript (ES6+)', icon: <Code2 size={16} /> },
  { name: 'React.js', icon: <Cpu size={16} /> },
  { name: 'Node.js & PHP', icon: <Laptop size={16} /> },
  { name: 'Tailwind CSS', icon: <Monitor size={16} /> },
  { name: 'Figma', icon: <Layers size={16} /> },
  { name: 'MySQL / PostgreSQL', icon: <Layers size={16} /> },
  { name: 'Git & GitHub', icon: <Code2 size={16} /> },
  { name: 'AI Skills', icon: <Monitor size={16} /> },
  { name: 'Microsoft Office', icon: <Monitor size={16} /> }
];

const education = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    school: 'Kigali Independent University (ULK)',
    period: '2023 – Present',
    description:
      'Currently mastering advanced software engineering principles, distributed systems, and scalable cloud architectures.',
    tags: ['Full-Stack', 'Cloud', 'Architecture']
  },
  {
    degree: 'Software Development — Level 3, 4 & 5',
    school: 'Secondary School (TVET/Vocational)',
    period: '2020 – 2023',
    description:
      'Gained deep technical roots in programming and logic via an intensive 3-year vocational software development track.',
    tags: ['Fundamentals', 'Databases', 'Algorithms']
  },
];

const personalInterests = {
  languages: [
    { name: 'English', level: 'Professional' },
    { name: 'Kinyarwanda', level: 'Native' },
    { name: 'Swahili', level: 'Conversational' }
  ],
  hobbies: [
    { name: 'Mobile App Dev', icon: <Smartphone size={14} /> },
    { name: 'New Tech', icon: <Zap size={14} /> },
    { name: 'Car Driving', icon: <Car size={14} /> },
    { name: 'Music & Coding', icon: <Music size={14} /> }
  ]
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-6"
            >
              <div className="h-1.5 w-32 bg-primary rounded-full"></div>
              <span className="text-primary font-mono font-black tracking-[0.3em] text-xl md:text-2xl uppercase">01. My Professional Bio</span>
            </motion.div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Crafting Digital Solutions <br />
              <span className="text-gradient underline decoration-primary/20 underline-offset-8">With Purpose & Precision</span>
            </h2>
          </div>
          <div className="hidden lg:block h-24 w-px bg-gray-200"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Detailed Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="prose prose-lg text-gray-600 leading-relaxed font-medium">
              <p className="text-xl text-gray-800 leading-snug">
                I am a Software Engineer focused on turning technical complexity into elegant, user-friendly solutions.
              </p>
              <p>
                My journey began early in secondary school. Mastering Software Development from Level 3 to Level 5 gave me a solid technical foundation in languages like <span className="text-primary font-semibold">PHP</span> and JavaScript.
              </p>
              <p>
                Currently at <span className="text-primary font-semibold">Kigali Independent University (ULK)</span>, I architect scalable platforms. My next big step is going deeper into <span className="text-secondary font-bold underline decoration-secondary/30">Mobile App Development</span> to build powerful cross-platform experiences.
              </p>
            </div>

            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                    <Code2 size={24} />
                </div>
                <h4 className="font-bold text-gray-900">Clean Code</h4>
                <p className="text-sm text-gray-500 mt-1">SOLID & Maintainable</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-3 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                </div>
                <h4 className="font-bold text-gray-900">Performance</h4>
                <p className="text-sm text-gray-500 mt-1">SEO & Speed Focused</p>
              </div>
            </div>
          </motion.div>

          {/* Core Expertise Side Panel */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <div className="absolute top-4 right-4 text-primary/10"><Cpu size={48} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                 Technological Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-full text-sm font-semibold text-gray-700 shadow-sm hover:border-primary/30 hover:shadow-md transition-all cursor-default"
                  >
                    <span className="text-primary">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quick Experience Link Card */}
            <div className="p-8 bg-primary rounded-2xl text-white shadow-xl shadow-primary/20 flex items-center justify-between">
                <div>
                   <h4 className="text-xl font-bold mb-1">Passionate about UI?</h4>
                   <p className="opacity-80 text-sm">Check my latest web designs</p>
                </div>
                <a href="#projects" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                    <Monitor size={24} />
                </a>
            </div>
          </div>

        </div>

        {/* Education Reimagined */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold text-gray-900">Education Journey</h3>
            <div className="h-px bg-gray-100 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
             {education.map((item, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/40 transition-all hover:translate-y-[-4px] relative group"
               >
                 <div className="absolute top-8 right-8 text-gray-200 group-hover:text-primary/10 transition-colors">
                    <GraduationCap size={40} />
                 </div>
                 <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg mb-4">
                    {item.period}
                 </div>
                 <h4 className="text-xl font-extrabold text-gray-900">{item.degree}</h4>
                 <p className="text-primary font-semibold text-sm mt-1 mb-6">{item.school}</p>
                 <p className="text-gray-500 font-medium mb-6">{item.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-tighter font-bold text-gray-400 bg-white px-2 py-1 rounded border border-gray-100">{tag}</span>
                    ))}
                 </div>
               </motion.div>
             ))}
          </div>
        </div>

        {/* Languages & Hobbies Section */}
        <div className="mt-16 lg:mt-24 grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-2xl shadow-gray-100 hover:border-primary/40 transition-all hover:translate-y-[-4px] relative group"
          >
            <div className="absolute top-8 right-8 text-gray-200 group-hover:text-primary/20 transition-colors">
              <Languages size={48} />
            </div>
            <h4 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
               Spoken Languages
            </h4>
            <div className="space-y-4">
              {personalInterests.languages.map(lang => (
                <div key={lang.name} className="flex items-center justify-between">
                  <span className="font-bold text-gray-800 text-base">{lang.name}</span>
                  <span className="text-xs uppercase tracking-wider font-black text-primary bg-primary/10 px-4 py-1.5 rounded-lg border border-primary/20">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-2xl shadow-gray-100 hover:border-primary/40 transition-all hover:translate-y-[-4px] relative group"
          >
            <div className="absolute top-8 right-8 text-gray-200 group-hover:text-secondary/20 transition-colors">
              <Heart size={48} />
            </div>
            <h4 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
               Passions & Hobbies
            </h4>
            <div className="flex flex-wrap gap-3">
              {personalInterests.hobbies.map(hobby => (
                <span key={hobby.name} className="flex items-center gap-2.5 text-xs uppercase tracking-wider font-black text-gray-700 bg-white px-4 py-2.5 rounded-xl border-2 border-gray-100 group-hover:border-primary/40 transition-all hover:text-primary hover:shadow-md">
                  <span className="text-primary">{hobby.icon}</span>
                  {hobby.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
