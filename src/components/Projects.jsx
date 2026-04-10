import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Hammer } from 'lucide-react';

const realProjects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description:
      'A modern, fully responsive developer portfolio built with React and Tailwind CSS. Features an animated hero section, Supabase-powered projects API, contact form with email integration, and smooth Framer Motion animations throughout.',
    tech_stack: ['React.js', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Node.js'],
    image_url: '/images/projects/portfolio_new.png',
    live_url: 'https://samportfolio-beta.vercel.app',
    github_url: 'https://github.com/Samlite250/Samportfolio.git',
  },
  {
    id: 2,
    title: 'Burikantu Real Estate',
    description:
      'A full-featured real estate platform where users can browse, filter, and inquire about properties. Features an admin dashboard for managing listings, user authentication, CRUD operations via Supabase, and a polished premium UI with gold accents.',
    tech_stack: ['React.js', 'Supabase', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    image_url: '/images/projects/burikantu.jpeg',
    live_url: 'https://burikantu-real-estate.vercel.app',
    github_url: 'https://github.com/Samlite250/Burikantu-Real-Estate.git',
  },
  {
    id: 3,
    title: 'Market Pro — E-Commerce',
    description:
      'A professional-grade e-commerce solution featuring real-time product management, advanced filtering, and integrated payment gateways. Built with performance in mind to deliver a high-speed shopping experience.',
    tech_stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image_url: '/images/projects/marketpro.png',
    live_url: 'https://marketplace-app-livid-three.vercel.app/',
    github_url: 'https://github.com/Samlite250/Marketplace',
  },
  {
    id: 4,
    title: 'Campus Connect',
    description:
      'A university and campus social platform that connects students, facilitates campus event discovery, resource sharing, and inter-campus networking. Features university listings, event management, and a clean intuitive dashboard for students.',
    tech_stack: ['React.js', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL'],
    image_url: '/images/projects/campus-connect.webp',
    live_url: '#',
    github_url: 'https://github.com/Samlite250/Campus-connect',
    status: 'In Development'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mr-6">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Featured Projects
          </h2>
          <div className="h-px bg-gray-300 flex-grow max-w-xs"></div>
        </div>

        <div className="space-y-24">
          {realProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Project Image */}
              <div className="w-full md:w-3/5 aspect-video relative group overflow-hidden rounded-xl shadow-2xl shadow-gray-200 border border-gray-100">
                <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                  <span className="text-gray-300 font-mono text-sm">{project.title}</span>
                </div>
                {project.image_url && (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover filter grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 z-0"
                    style={{ contrast: '1.2', brightness: '1.05' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                )}
                {project.status && (
                  <div className="absolute top-4 left-4 z-30">
                    <span className="px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/10 shadow-lg flex items-center gap-2">
                      <Hammer size={12} className="text-primary" />
                      {project.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className={`w-full md:w-2/5 flex flex-col ${idx % 2 !== 0 ? 'md:items-start text-left' : 'md:items-end md:text-right'}`}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 hover:text-primary transition-colors">
                  <a href={project.github_url} target="_blank" rel="noreferrer">{project.title}</a>
                </h3>

                <div className={`glass-card p-6 rounded-xl mb-6 text-gray-600 z-20 ${idx % 2 !== 0 ? 'md:-mr-12' : 'md:-ml-12'}`}>
                  <p>{project.description}</p>
                </div>

                <ul className={`flex flex-wrap gap-4 text-sm font-mono text-gray-500 mb-8 ${idx % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                  {project.tech_stack.map((tech, tIdx) => (
                    <li key={tIdx} className="bg-primary/10 text-primary px-2 py-0.5 rounded">{tech}</li>
                  ))}
                </ul>

                <div className={`flex flex-wrap gap-4 ${idx % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                  {project.github_url !== '#' && (
                    <a href={project.github_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-lg hover:bg-primary hover:text-white transition-all duration-300" aria-label="View Code">
                      <Github size={18} />
                      <span className="font-medium">Source</span>
                    </a>
                  )}
                  {project.live_url !== '#' && (
                    <a href={project.live_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300" aria-label="View Website">
                      <ExternalLink size={18} />
                      <span className="font-medium">View Website</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
