import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail, MapPin } from 'lucide-react';

const REAL_EMAIL = 'nsengafabrice4@gmail.com';
const REAL_WHATSAPP = '+250786776967';

const Contact = () => {
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [status, setStatus]   = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${REAL_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Hey Fab — message from ${form.name}` }),
      });
      if (res.ok) {
        setStatus({ type: 'ok', text: "Got it — I'll reply within a day or two. Might be sooner if I'm not elbow-deep in a routing table." });
        setForm({ name: '', email: '', message: '' });
      } else throw new Error();
    } catch {
      setStatus({ type: 'err', text: `Form didn't go through. Email me directly at ${REAL_EMAIL}` });
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all";

  const waLink = `https://wa.me/${REAL_WHATSAPP.replace(/\D/g, '')}?text=Hey%20Fab!%20Saw%20your%20portfolio%20and%20wanted%20to%20chat.`;

  return (
    <section id="contact" className="py-24 bg-[#f0f7ff]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="mb-6">
          <p className="section-label"><span className="w-8 h-px bg-primary inline-block" />06 — Contact</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Let's <span className="text-gradient">talk</span>
          </h2>
        </div>
        <p className="text-gray-500 text-sm mb-12 max-w-lg leading-relaxed">
          Whether you have a network that's misbehaving, a project coming up, or just want to
          nerd out about BGP — drop me a message. I read everything and reply to everything
          (eventually).
        </p>

        <div className="grid md:grid-cols-5 gap-8">

          <div className="md:col-span-2 space-y-4">
            <a href={`mailto:${REAL_EMAIL}`} className="glass-card p-5 flex items-center gap-4 hover:border-primary/25 group transition-all block">
              <div className="w-9 h-9 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider">Email</p>
                <p className="text-gray-700 text-sm group-hover:text-primary transition-colors break-all">{REAL_EMAIL}</p>
              </div>
            </a>

            <div className="glass-card p-5 flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-gray-400" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider">Based in</p>
                <p className="text-gray-700 text-sm">Kigali, Rwanda 🇷🇼</p>
              </div>
            </div>

            <a href={waLink} target="_blank" rel="noreferrer"
              className="glass-card p-5 flex items-center gap-4 hover:border-orange-200 group transition-all block">
              <div className="w-9 h-9 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                <MessageCircle size={16} className="text-green-600" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] font-mono uppercase tracking-wider">WhatsApp</p>
                <p className="text-gray-700 text-sm group-hover:text-green-600 transition-colors">{REAL_WHATSAPP}</p>
              </div>
            </a>

            <p className="text-gray-400 text-xs italic leading-relaxed px-1">
              Best time to reach me is evenings (EAT). I'm usually around unless there's a network on fire somewhere.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass-card p-7"
          >
            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-500 text-[10px] font-mono uppercase tracking-wider mb-1.5">Your name</label>
                  <input type="text" name="name" value={form.name} onChange={handle} required placeholder="e.g. John" className={inputCls} />
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] font-mono uppercase tracking-wider mb-1.5">Your email</label>
                  <input type="email" name="email" value={form.email} onChange={handle} required placeholder="john@company.com" className={inputCls} />
                </div>
              </div>

              <div>
                <label className="block text-gray-500 text-[10px] font-mono uppercase tracking-wider mb-1.5">What's up?</label>
                <textarea name="message" rows={5} value={form.message} onChange={handle} required
                  placeholder="Tell me about your project, what's broken, or anything else..."
                  className={`${inputCls} resize-none`} />
              </div>

              {status.text && (
                <p className={`text-sm px-4 py-3 rounded-xl border ${
                  status.type === 'ok'
                    ? 'text-primary bg-primary/5 border-primary/15'
                    : 'text-red-500 bg-red-50 border-red-100'
                }`}>
                  {status.text}
                </p>
              )}

              <button type="submit" disabled={loading}
                className="w-full py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary/90 neon-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                {loading
                  ? <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  : <><Send size={14} /> Send it</>
                }
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
