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
      // 1. Send to FormSubmit (Direct to samlite250@gmail.com)
      const emailResponse = await fetch('https://formsubmit.co/ajax/samlite250@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact: ${formData.name}`
        })
      });

      // 2. Background attempt for local Supabase logging
      fetch(`/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(err => console.error("Backup log failed", err));

      if (emailResponse.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! Check your email inbox (samlite250@gmail.com) to see it.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Email service delay');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({ type: 'error', message: 'There was a tiny hiccup. Please use the WhatsApp link below for immediate contact!' });
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

          <div className="max-w-2xl mx-auto p-8 md:p-12 bg-white border-2 border-gray-100 rounded-3xl shadow-xl shadow-primary/5">
            <form onSubmit={handleSubmit} className="text-left space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 font-mono uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 text-gray-900 transition-all font-medium"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-mono uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 text-gray-900 transition-all font-medium"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 font-mono uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 text-gray-900 transition-all font-medium resize-none"
                ></textarea>
              </div>

              {status.message && (
                <p className={`text-sm font-bold ${status.type === 'success' ? 'text-primary' : 'text-red-500'}`}>
                  {status.message}
                </p>
              )}

              <div className="pt-2 space-y-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-primary/20 flex justify-center items-center gap-2"
                >
                  {loading ? (
                    <span className="w-6 h-6 border-2 border-white border-t-transparent flex-shrink-0 animate-spin rounded-full"></span>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                <div className="flex items-center gap-4 py-2">
                  <div className="h-px bg-gray-200 flex-grow"></div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">or</span>
                  <div className="h-px bg-gray-200 flex-grow"></div>
                </div>

                <a 
                  href="https://wa.me/250790268691?text=Hello%20Sam!%20I%20saw%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20potential%20project%20with%20you." 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-white border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Connect on WhatsApp
                </a>
              </div>
            </form>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
