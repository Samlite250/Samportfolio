import { supabase } from './config/supabase.js';

const fallbackProjects = [
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
];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: true });
        
      if (error) throw error;
      
      if (data && data.length > 0) {
        return res.status(200).json(data);
      }
    }
    
    return res.status(200).json(fallbackProjects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return res.status(200).json(fallbackProjects);
  }
}
