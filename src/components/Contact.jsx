import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus({ type: 'success', message: 'Thank you for your message! I will get back to you shortly.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again or email me directly.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Could not reach the server. Please email me directly at samlite250@gmail.com.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'samlite250@gmail.com', href: 'mailto:samlite250@gmail.com' },
    { icon: Phone, label: 'WhatsApp', value: '+250 790 268 691', href: 'https://wa.me/250790268691' },
    { icon: MapPin, label: 'Location', value: 'Kigali, Rwanda', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 relative bg-gray-50 dark:bg-dark-950 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        <div className="section-label justify-center">
          <span className="w-8 h-px bg-primary"></span>
          05 — Contact
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-16 text-gray-900 dark:text-white text-center">
          Let's Start a <span className="text-primary italic">Conversation.</span>
        </h2>

        <div className="grid lg:grid-cols-5 gap-16 items-start">

          <div className="lg:col-span-2 space-y-10">
            <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-6 p-6 bg-white dark:bg-dark-900 rounded-2xl group hover:border-primary/50 transition-all border border-gray-100 dark:border-white/5 shadow-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon size={26} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold mb-1">{item.label}</p>
                    <p className="text-lg text-gray-900 dark:text-white font-bold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white dark:bg-dark-900 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 dark:bg-dark-950 border border-gray-100 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full bg-gray-50 dark:bg-dark-950 border border-gray-100 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors text-lg"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Project Details</label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full bg-gray-50 dark:bg-dark-950 border border-gray-100 dark:border-white/10 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors text-lg resize-none"
                ></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-bold flex items-center gap-3 ${status.type === 'success' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full group px-8 py-5 bg-primary text-white font-black rounded-xl hover:scale-[1.02] active:scale-100 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs shadow-lg shadow-primary/20"
              >
                {loading ? (
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white animate-spin rounded-full"></span>
                ) : (
                  <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
