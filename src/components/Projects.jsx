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
    live_url: 'https://samdeveloper.vercel.app',
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
  {
    id: 5,
    title: 'Traveliumgrobal — Global Travel Agency',
    description:
      'A modern, high-conversion travel agency and tour booking platform offering destination discovery, interactive booking workflows, and responsive itinerary showcases.',
    tech_stack: ['React.js', 'Tailwind CSS', 'Vercel', 'Framer Motion', 'Node.js'],
    image_url: '/images/projects/travelium.png',
    live_url: 'https://traveliumgrobal.vercel.app',
    github_url: 'https://github.com/Samlite250/Traveliumgrobal.git',
    caseStudy: {
      problem: "Travel agencies needed an elegant, fast-loading digital portal to present global tour packages without confusing multi-step booking bottlenecks.",
      solution: "Designed a lightweight, visually striking single-page React app with interactive destination filtering and clean inquiry forms.",
      challenges: "Optimizing high-resolution imagery and maintaining silky navigation transitions across desktop and mobile devices.",
      impact: "Elevated brand presence and simplified customer travel booking inquiries."
    }
  },
  {
    id: 6,
    title: 'Mahembe Coffee Industry — Factory Management',
    description:
      'An end-to-end coffee factory management platform (TFMS) for tracking cherry collection, farmer registrations, batch processing, and automated transactional email notifications.',
    tech_stack: ['React.js', 'Supabase', 'Nodemailer', 'Tailwind CSS', 'PostgreSQL'],
    image_url: '/images/projects/mahembe.png',
    live_url: 'https://mahembefactory.vercel.app',
    github_url: 'https://github.com/Samlite250/tfms.git',
    caseStudy: {
      problem: "Coffee factories relied on manual paper logs for tracking cherry deliveries from hundreds of registered farmers, creating accounting delays.",
      solution: "Built a centralized web portal backed by Supabase and serverless Nodemailer notifications to log harvests, verify farmer profiles, and trigger instant payout alerts.",
      challenges: "Implementing real-time data sync for high-volume harvest arrivals and ensuring serverless email delivery reliability via Vercel.",
      impact: "Streamlined daily factory operations, reduced processing errors, and improved financial transparency for local farmers."
    }
  },
  {
    id: 7,
    title: 'Digital+ — Mobile Services & App',
    description:
      'A cross-platform React Native / Expo mobile application built for Digital+ to handle digital services, user onboarding, account wallet balances, and rapid mobile transactions.',
    tech_stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Tailwind'],
    image_url: '/images/projects/digitalplus.png',
    live_url: '#',
    github_url: 'https://github.com/Samlite250/samora_app.git',
    status: 'Mobile App',
    caseStudy: {
      problem: "Users needed a dedicated, secure mobile interface to access digital utility services and manage account transactions on Android and iOS.",
      solution: "Architected a native mobile experience using React Native, Expo, and TypeScript, featuring smooth UI transitions and secure API state handlers.",
      challenges: "Resolving native Hermes engine startup lifecycles and ensuring cross-platform component stability across various Android device SDKs.",
      impact: "Delivered a production-ready mobile application APK foundation with robust offline guards and instant user authentication."
    }
  },
  {
    id: 8,
    title: 'Gisenyi Gadgets — Electronics Marketplace',
    description:
      'An e-commerce mobile & web platform designed for tech enthusiasts in Gisenyi to explore, order, and track orders for smartphones, laptops, and gadget accessories.',
    tech_stack: ['React.js', 'React Native', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    image_url: '/images/projects/gisenyi_gadgets.png',
    live_url: '#',
    github_url: 'https://github.com/Samlite250/Gisenyi-Gadgets.git',
    status: 'In Development',
    caseStudy: {
      problem: "Local electronics buyers lacked a trusted, localized mobile marketplace to order genuine gadgets with transparent local delivery options.",
      solution: "Building a hybrid mobile and web e-commerce storefront allowing customers to browse device specifications, place direct orders, and contact support.",
      challenges: "Structuring dynamic product catalog filters for diverse gadget categories and crafting responsive cart management hooks.",
      impact: "Positioned to launch as the primary digital tech store serving the Gisenyi region with seamless order placement."
    }
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  React.useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeProject]);

  return (
    <section id="projects" className="py-24 relative bg-gray-50 dark:bg-dark-950 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mr-6 text-gray-900 dark:text-white">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Featured Projects
          </h2>
          <div className="h-px bg-gray-200 dark:bg-dark-700 flex-grow max-w-xs"></div>
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
              <div
                className="w-full md:w-3/5 aspect-video relative group overflow-hidden rounded-xl border border-gray-100 dark:border-white/5 cursor-pointer shadow-xl"
                onClick={() => setActiveProject(project)}
              >
                <div className="absolute inset-0 bg-gray-100 dark:bg-dark-800 flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-600 font-mono text-sm">{project.title}</span>
                </div>
                {project.image_url && (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 z-0"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                )}
                {project.status && (
                  <div className="absolute top-4 left-4 z-30">
                    <span className="px-3 py-1.5 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm text-gray-900 dark:text-white text-[10px] font-bold uppercase tracking-widest rounded-lg border border-gray-100 dark:border-white/10 shadow-lg flex items-center gap-2">
                      <Hammer size={12} className="text-primary" />
                      {project.status}
                    </span>
                  </div>
                )}

                {/* View Case Study Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
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

                <div className={`glass-card p-6 rounded-xl mb-6 text-gray-600 dark:text-gray-300 z-20 shadow-lg border border-gray-100 dark:border-white/5 ${idx % 2 !== 0 ? 'md:-mr-12' : 'md:-ml-12'}`}>
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
                    className="flex items-center gap-2 px-6 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-xs"
                  >
                    <BookOpen size={18} />
                    <span>Case Study</span>
                  </button>

                  <div className="flex gap-4 items-center pl-2">
                    <a href={project.github_url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="View Code">
                      <Github size={22} />
                    </a>
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
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-gray-900/60 dark:bg-dark-950/90 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 100 }}
              className="relative w-full max-w-5xl bg-white dark:bg-dark-900 border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 z-50 p-2 bg-white/80 dark:bg-dark-800/80 hover:bg-primary/20 text-gray-900 dark:text-white rounded-full backdrop-blur-md border border-gray-200 dark:border-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Image Header */}
              <div className="h-[300px] md:h-[450px] relative">
                <img src={activeProject.image_url} alt={activeProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {activeProject.tech_stack.slice(0, 3).map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/30">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white">{activeProject.title}</h3>
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-0.5 w-12 bg-primary"></div>
                      <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Challenge</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">The Problem</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{activeProject.caseStudy.problem}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-0.5 w-12 bg-primary"></div>
                      <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Architecture</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">The Solution</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{activeProject.caseStudy.solution}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-12 border-t border-gray-100 dark:border-white/5 pt-12">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-700 dark:text-gray-200">Technical Hurdles</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{activeProject.caseStudy.challenges}</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-700 dark:text-gray-200">Outcome & Impact</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{activeProject.caseStudy.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-gray-100 dark:border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech_stack.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono text-gray-400 bg-gray-50 dark:bg-white/5 px-3 py-1 rounded border border-gray-100 dark:border-white/5">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={activeProject.github_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-white/10 transition-all font-bold tracking-widest text-xs uppercase">
                      <Github size={18} /> Code
                    </a>
                    {activeProject.live_url !== '#' && (
                      <a href={activeProject.live_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all font-bold tracking-widest text-xs uppercase">
                        <ExternalLink size={18} /> Live Site
                      </a>
                    )}
                  </div>
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
