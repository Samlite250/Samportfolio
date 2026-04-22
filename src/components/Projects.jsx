import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Hammer, X, BookOpen } from 'lucide-react';

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
    caseStudy: {
      problem: "I needed a professional, highly-performant space to showcase my work that moved beyond traditional template designs and stood out to recruiters.",
      solution: "Designed a dark/light mode capable interface using Tailwind CSS and Framer Motion, implementing smooth transitions and a clean component architecture in React.",
      challenges: "Balancing complex animations with top-tier performance speeds and ensuring mobile responsiveness across all devices without losing the premium feel.",
      impact: "Significantly increased engagement from profile viewers and created a maintainable codebase for adding future projects effortlessly."
    }
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
    caseStudy: {
      problem: "The client needed a platform that felt luxurious and exclusive, moving away from standard, cluttered property listing sites.",
      solution: "Architected a headless solution using React and Supabase, allowing for extremely fast page loads and real-time updates for property availability.",
      challenges: "Handling complex relational data structures in PostgreSQL for properties, users, and inquiries, while keeping the UI snappy.",
      impact: "Delivered a high-converting platform that modernizes the agency's digital footprint and streamlines the inquiry process for luxury buyers."
    }
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
    caseStudy: {
      problem: "Existing solutions lacked real-time inventory updates, leading to double-purchases and frustrated end-users.",
      solution: "Built a custom full-stack architecture utilizing MongoDB and Express to manage high-throughput transactions with a React frontend.",
      challenges: "Synchronizing state across multiple client sessions during peak traffic and dealing with complex search algorithms for products.",
      impact: "Reduced checkout friction and provided administrators with real-time analytics for inventory, drastically cutting down out-of-stock complaints."
    }
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
    status: 'In Development',
    caseStudy: {
      problem: "Students frequently missed out on critical cross-campus events and study resources due to fragmented communication channels (WhatsApp, Email, Notice boards).",
      solution: "Developing a centralized hub where students can filter events by university/faculty, share notes securely, and build professional networks early.",
      challenges: "Designing an authentication and permission framework that strictly bounds users to their verified academic institutions while still allowing controlled cross-campus interaction.",
      impact: "Anticipated to launch next semester to an initial beta testing group of 500 students, focusing first on high-engagement features like event discovery."
    }
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeProject]);

  return (
    <section id="projects" className="py-24 relative bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mr-6 text-gray-900 dark:text-white">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Featured Projects
          </h2>
          <div className="h-px bg-gray-300 dark:bg-dark-700 flex-grow max-w-xs"></div>
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
              <div className="w-full md:w-3/5 aspect-video relative group overflow-hidden rounded-xl shadow-2xl shadow-gray-200 dark:shadow-none border border-gray-100 dark:border-dark-700 cursor-pointer" onClick={() => setActiveProject(project)}>
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
                
                {/* View Case Study Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <span className="text-white font-bold text-lg flex items-center gap-2">
                    <BookOpen size={24} /> View Case Study
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className={`w-full md:w-2/5 flex flex-col ${idx % 2 !== 0 ? 'md:items-start text-left' : 'md:items-end md:text-right'}`}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 hover:text-primary transition-colors cursor-pointer" onClick={() => setActiveProject(project)}>
                  {project.title}
                </h3>

                <div className={`glass-card p-6 rounded-xl mb-6 text-gray-600 dark:text-gray-300 bg-white dark:bg-dark-800 z-20 shadow-lg border border-gray-100 dark:border-dark-700 ${idx % 2 !== 0 ? 'md:-mr-12' : 'md:-ml-12'}`}>
                  <p>{project.description}</p>
                </div>

                <ul className={`flex flex-wrap gap-4 text-sm font-mono text-gray-500 dark:text-gray-400 mb-8 ${idx % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                  {project.tech_stack.map((tech, tIdx) => (
                    <li key={tIdx} className="bg-primary/10 text-primary px-2 py-0.5 rounded">{tech}</li>
                  ))}
                </ul>

                <div className={`flex flex-wrap gap-4 ${idx % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                  <button 
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <BookOpen size={18} />
                    <span className="font-medium">Case Study</span>
                  </button>

                  <div className="flex gap-4 items-center pl-2">
                    {project.github_url !== '#' && (
                      <a href={project.github_url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="View Code">
                        <Github size={22} />
                      </a>
                    )}
                    {project.live_url !== '#' && (
                      <a href={project.live_url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="View Website">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[1000] flex items-start justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white dark:bg-dark-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-dark-700 overflow-hidden my-8 md:my-12"
            >
              <button 
                onClick={() => setActiveProject(null)}
                className="fixed top-4 right-4 md:absolute md:top-4 md:right-4 z-[1050] p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-colors border border-white/10 shadow-lg"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="h-64 md:h-80 relative">
                <img src={activeProject.image_url} alt={activeProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-900 to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:left-10 z-10">
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">{activeProject.title}</h3>
                  <div className="flex gap-3">
                    {activeProject.live_url !== '#' && (
                      <a href={activeProject.live_url} target="_blank" rel="noreferrer" className="text-sm font-bold text-primary hover:text-white bg-primary/10 hover:bg-primary px-3 py-1 rounded transition-colors">Live Site</a>
                    )}
                    {activeProject.github_url !== '#' && (
                      <a href={activeProject.github_url} target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600 px-3 py-1 rounded transition-colors">Source Code</a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                       <span className="text-primary font-mono text-sm leading-none mt-1">01.</span> The Problem
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{activeProject.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                       <span className="text-primary font-mono text-sm leading-none mt-1">02.</span> Solution & Architecture
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{activeProject.caseStudy.solution}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                       <span className="text-primary font-mono text-sm leading-none mt-1">03.</span> Challenges Faced
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{activeProject.caseStudy.challenges}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                       <span className="text-primary font-mono text-sm leading-none mt-1">04.</span> Impact & Results
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{activeProject.caseStudy.impact}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Technologies Used</h4>
                  <ul className="flex flex-wrap gap-3">
                    {activeProject.tech_stack.map((tech, i) => (
                      <li key={i} className="px-4 py-2 bg-gray-50 dark:bg-dark-800 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-dark-700 rounded-lg text-sm font-mono">{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
