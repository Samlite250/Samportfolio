import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'There was an error sending your message. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-lg mb-4">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Get In Touch</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <form onSubmit={handleSubmit} className="text-left max-w-xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-gray-900 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-gray-900 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message} 
                onChange={handleChange} 
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-gray-900 transition-colors resize-none"
              ></textarea>
            </div>

            {status.message && (
              <p className={`text-sm ${status.type === 'success' ? 'text-primary' : 'text-red-500'}`}>
                {status.message}
              </p>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full px-8 py-4 bg-primary/10 text-primary border border-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white flex justify-center items-center"
            >
              {loading ? (
                <span className="w-6 h-6 border-2 border-primary border-t-transparent flex-shrink-0 animate-spin rounded-full"></span>
              ) : (
                'Say Hello'
              )}
            </button>
            <div className="pt-4 flex justify-center">
               <a 
                  href="https://wa.me/250790268691?text=Hello%20Sam!%20I%20saw%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20potential%20project%20with%20you." 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-medium text-primary hover:text-secondary flex items-center transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 2.17.68 4.18 1.83 5.82L3 21l3.35-.83A9.957 9.957 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.07 13.56c-.19.53-.9 1.05-1.55 1.15-.55.08-1.28.25-3.66-.73-2.88-1.18-4.73-4.13-4.88-4.33-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.13.99-2.43.23-.26.5-.32.67-.32.17 0 .34.01.49.01.17 0 .4-.06.6.43.22.53.75 1.83.82 1.96.06.13.1.28.02.43-.08.15-.12.25-.24.4-.12.14-.25.32-.35.42-.12.13-.26.27-.12.51.14.25.64 1.06 1.38 1.71.95.83 1.74 1.09 2 1.22.25.13.4.11.55-.06.16-.18.68-.8.86-1.07.18-.28.36-.23.59-.14.23.08 1.48.7 1.74.83.25.13.42.19.49.3.06.11.06.66-.13 1.19z" clipRule="evenodd"></path></svg>
                  Connect on WhatsApp
               </a>
            </div>
          </form>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
