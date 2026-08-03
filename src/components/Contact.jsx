import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, User, MessageSquare, Check, Copy, ChevronRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [honey, setHoney] = useState('');
  const [copied, setCopied] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (formData.name.trim().length < 2) next.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = 'Please enter a valid email address.';
    if (formData.message.trim().length < 10) next.message = 'Message must be at least 10 characters.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const copyToClipboard = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (honey) return;

    if (!validate()) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://formsubmit.co/ajax/samcodings@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name} via portfolio`,
          _template: 'table',
          _captcha: 'false',
          _honey: honey
        })
      });
      const data = await res.json().catch(() => ({}));
      const ok = res.ok && (data.success === true || data.success === 'true');

      if (ok) {
        setStatus({ type: 'success', message: 'Thank you for your message! I will get back to you shortly.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly at samcodings@gmail.com.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Could not reach the server. Please email me directly at samcodings@gmail.com.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'samcodings@gmail.com', href: 'mailto:samcodings@gmail.com', copy: true },
    { icon: Phone, label: 'WhatsApp', value: '+250 790 268 691', href: 'https://wa.me/250790268691', copy: true },
    { icon: MapPin, label: 'Location', value: 'Kigali, Rwanda', href: 'https://maps.google.com/?q=Kigali,+Rwanda' },
  ];

  const inputClass = (hasError) =>
    `w-full bg-white/60 dark:bg-dark-950/40 backdrop-blur-md border rounded-xl pl-12 pr-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-lg placeholder:text-gray-400 dark:placeholder:text-gray-500 ${
      hasError ? 'border-red-500/60' : 'border-gray-200 dark:border-white/10 focus:border-primary'
    }`;

  return (
    <section id="contact" className="py-24 relative bg-gray-50 dark:bg-dark-950 overflow-hidden transition-colors duration-300">
      <div className="absolute -top-24 left-1/3 w-96 h-96 bg-primary/15 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-24 w-[28rem] h-[28rem] bg-secondary/15 dark:bg-secondary/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">

        <div className="section-label justify-center">
          <span className="w-8 h-px bg-primary"></span>
          05 — Contact
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-16 text-gray-900 dark:text-white text-center">
          Let's Start a <span className="text-primary italic">Conversation.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-2 space-y-10">
            <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-white/60 dark:bg-dark-900/50 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-lg shadow-gray-200/50 dark:shadow-black/30 hover:border-primary/60 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 md:gap-6 flex-1 min-w-0"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                      <item.icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold mb-1">
                        {item.label}
                      </p>
                      <p className="text-base md:text-lg text-gray-900 dark:text-white font-bold truncate">{item.value}</p>
                    </div>
                  </a>

                  {item.copy ? (
                    <button
                      onClick={() => copyToClipboard(item.value, item.label)}
                      className="p-2.5 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors shrink-0"
                      aria-label={`Copy ${item.label}`}
                    >
                      {copied === item.label ? (
                        <Check size={18} className="text-primary" />
                      ) : (
                        <Copy size={18} />
                      )}
                    </button>
                  ) : (
                    <ChevronRight
                      size={18}
                      className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative rounded-3xl bg-white/60 dark:bg-dark-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-xl shadow-gray-200/60 dark:shadow-black/40 p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={inputClass(errors.name)}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={inputClass(errors.email)}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  Project Details
                </label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-4 top-5 text-gray-400 pointer-events-none" />
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    className={`${inputClass(errors.message)} resize-none`}
                  ></textarea>
                </div>
                {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message}</p>}
              </div>

              <input
                type="text"
                name="_honey"
                value={honey}
                onChange={(e) => setHoney(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {status.message && (
                <div className={`p-4 rounded-xl text-sm font-bold flex items-center gap-3 ${status.type === 'success' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full group px-8 py-5 bg-primary text-white font-black rounded-xl hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs shadow-lg shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-6 h-6 border-2 border-white/30 border-t-white animate-spin rounded-full"></span>
                    Sending...
                  </>
                ) : (
                  <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>

              <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                Prefer email? Write to me directly at{' '}
                <a href="mailto:samcodings@gmail.com" className="text-primary font-semibold hover:underline">
                  samcodings@gmail.com
                </a>
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
