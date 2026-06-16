import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layout, Server, Database, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Custom Web Apps',
    description: 'Building high-performance, scalable web applications with React and Node.js tailored to your business needs.',
    icon: <Layout className="text-primary" size={32} />,
    tags: ['E-Commerce', 'Dashboards', 'Portfolios']
  },
  {
    title: 'Mobile App Design',
    description: 'Crafting intuitive and responsive mobile experiences with a focus on App Development and user engagement.',
    icon: <Smartphone className="text-secondary" size={32} />,
    tags: ['React Native', 'UI/UX', 'Cross-Platform']
  },
  {
    title: 'Backend & APIs',
    description: 'Architecting secure and efficient RESTful APIs that power seamless data communication across platforms.',
    icon: <Server className="text-primary" size={32} />,
    tags: ['Node.js', 'Express', 'Auth Systems']
  },
  {
    title: 'Database Design',
    description: 'Expertise in designing robust MySQL and PostgreSQL schemas to ensure data integrity and high-speed retrieval.',
    icon: <Database className="text-secondary" size={32} />,
    tags: ['SQL', 'Supabase', 'Data Modeling']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white/50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-1 w-12 bg-primary"></div>
            <span className="text-primary font-mono font-bold uppercase tracking-widest text-sm">Services I Offer</span>
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Comprehensive Digital <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Solutions & Engineering</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-100/50 hover:border-primary/40 transition-all hover:translate-y-[-8px] group"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle size={14} /> Solutions
                </span>
                <ArrowRight className="text-gray-300 group-hover:text-primary transition-colors" size={18} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
