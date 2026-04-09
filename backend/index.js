const express = require('express');
const cors = require('cors');
const { supabase } = require('./config/supabase');

const app = express();

// Middleware
app.use(cors({
  origin: '*', // Adjust this to your specific frontend URL in production
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Fallback data if Supabase is not configured
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

// Routes
app.get('/api/projects', async (req, res) => {
  try {
    // If Supabase keys are provided, fetch from DB
    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: true });
        
      if (error) throw error;
      
      // If table is empty, return fallback data for demonstration
      if (data && data.length > 0) {
        return res.json(data);
      }
    }
    
    // Fallback if Supabase is not configured or table is empty
    return res.json(fallbackProjects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Return fallback data on error
    return res.json(fallbackProjects);
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message' });
    }

    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      const { data, error } = await supabase
        .from('contacts')
        .insert([{ name, email, message }]);

      if (error) throw error;
    }

    // Whether it saved to DB or not (if Supabase isn't setup yet), respond success for UX
    res.status(200).json({ success: true, message: 'Message received' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export for serverless environments (like Vercel)
module.exports = app;
