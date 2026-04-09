import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real scenario, this would fetch from the backend. 
    // Fallback data is implemented directly in case API fails
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          throw new Error('API failed');
        }
      } catch (error) {
        // Fallback placeholder data
        setProjects([
          {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with user authentication, payment processing, and a comprehensive admin dashboard.',
            tech_stack: ['React', 'Node.js', 'Express', 'MongoDB'],
            image_url: '/images/projects/project1.jpg',
            live_url: '#',
            github_url: '#'
          },
          {
            id: 2,
            title: 'Task Management App',
            description: 'A beautifully designed Kanban board style task manager with drag-and-drop functionality and real-time updates.',
            tech_stack: ['Next.js', 'Tailwind', 'Supabase', 'Framer Motion'],
            image_url: '/images/projects/project2.jpg',
            live_url: '#',
            github_url: '#'
          },
          {
            id: 3,
            title: 'AI Content Generator',
            description: 'SaaS application that leverages OpenAI to generate blog posts, social media content, and marketing copy.',
            tech_stack: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
            image_url: '/images/projects/project3.jpg',
            live_url: '#',
            github_url: '#'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mr-6">
            <span className="text-primary font-mono text-xl mr-2">03.</span> 
            Featured Projects
          </h2>
          <div className="h-px bg-gray-700 flex-grow max-w-xs"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="space-y-24">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Project Image */}
                <div className="w-full md:w-3/5 h-64 sm:h-80 md:h-[400px] relative group overflow-hidden rounded-xl">
                  {/* Fallback pattern if image is missing */}
                  <div className="absolute inset-0 bg-light-700 flex items-center justify-center">
                    <span className="text-gray-600 font-mono text-xl">{project.title} Image Placeholder</span>
                  </div>
                  {project.image_url && (
                    <>
                      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                      <img 
                        src={project.image_url} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 z-0"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </>
                  )}
                </div>

                {/* Project Info */}
                <div className={`w-full md:w-2/5 flex flex-col ${idx % 2 !== 0 ? 'md:items-start text-left' : 'md:items-end md:text-right'}`}>
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 hover:text-primary transition-colors">
                    <a href={project.live_url} target="_blank" rel="noreferrer">{project.title}</a>
                  </h3>
                  
                  <div className={`glass-card p-6 rounded-xl mb-6 text-gray-600 z-20 ${idx % 2 !== 0 ? 'md:-mr-12' : 'md:-ml-12'}`}>
                    <p>{project.description}</p>
                  </div>

                  <ul className={`flex flex-wrap gap-4 text-sm font-mono text-gray-600 mb-8 ${idx % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                    {project.tech_stack.map((tech, tIdx) => (
                      <li key={tIdx}>{tech}</li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <a href={project.github_url} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                      <Github size={22} />
                    </a>
                    <a href={project.live_url} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
