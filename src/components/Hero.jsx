import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Terminal } from 'lucide-react';

const roles = [
  'I fix broken networks at 2am',
  'Cisco routing & switching nerd',
  'I make BGP do what I want',
  'Infrastructure architect',
];

const TypewriterText = ({ texts }) => {
  const [current,  setCurrent]  = useState('');
  const [idx,      setIdx]      = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = texts[idx];
    let t;
    if (deleting) t = setTimeout(() => setCurrent(full.slice(0, current.length - 1)), 45);
    else          t = setTimeout(() => setCurrent(full.slice(0, current.length + 1)), 90);
    if (!deleting && current === full)  t = setTimeout(() => setDeleting(true), 2600);
    if (deleting  && current === '')   { setDeleting(false); setIdx(p => (p + 1) % texts.length); }
    return () => clearTimeout(t);
  }, [current, deleting, idx, texts]);

  return (
    <span className="font-mono" style={{ color: '#0e63bd' }}>
      {current}<span className="animate-blink" style={{ color: '#0e63bd', opacity: 0.6 }}>█</span>
    </span>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center pt-[60px] bg-white">
    <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-16 items-center py-20">

      {/* Left */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

        {/* Cisco CLI snippet */}
        <div className="terminal-box p-4 mb-8 inline-block">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="ml-2 font-mono text-gray-500 text-xs">fab@R1#</span>
          </div>
          <p className="font-mono text-xs text-gray-500"><span className="text-blue-400">R1#</span> show ip route summary</p>
          <p className="font-mono text-xs text-green-400 mt-0.5">Routes: 847 | BGP: 312 | OSPF: 421 | Connected: 114</p>
        </div>

        <p className="section-label">
          <span className="w-8 h-px inline-block" style={{ background: '#0e63bd' }} />
          Network Engineer · CCNA · Kigali, Rwanda
        </p>

        <h1 className="text-5xl md:text-6xl xl:text-[4.5rem] font-extrabold leading-none mb-3" style={{ color: '#111827' }}>
          Engineer<br />
          <span className="text-gradient">Fab.</span>
        </h1>

        <div className="font-mono text-base text-gray-400 mb-1 h-6">
          <TypewriterText texts={roles} />
        </div>
        <p className="font-mono text-xs text-gray-400 italic mb-8">— yes, I actually enjoy reading routing tables</p>

        <p className="text-base text-gray-500 max-w-md mb-10 leading-relaxed">
          5+ years designing networks that quietly do their job 24/7.
          Cisco routing & switching is my core — BGP, OSPF, VLANs,
          firewalls. I've built them from scratch and kept them running.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <a href="#projects" className="btn-primary flex items-center gap-2">
            See my work <ArrowRight size={14} />
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
            Download CV
          </a>
        </div>

        <div className="flex gap-2">
          {[
            { href: 'https://github.com/',             icon: Github,   label: 'GitHub'   },
            { href: 'https://linkedin.com/',           icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:nsengafabrice4@gmail.com', icon: Mail,     label: 'Email'    },
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-colors hover:text-primary"
              style={{ transition: 'border-color 0.15s, color 0.15s' }}>
              <Icon size={16} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="hidden md:flex justify-center"
      >
        <div className="relative animate-float">
          {/* Outer decorative rings */}
          <div className="absolute -inset-5 rounded-3xl" style={{ border: '1px solid rgba(14,99,189,0.07)' }} />
          <div className="absolute -inset-2.5 rounded-3xl" style={{ border: '1px solid rgba(14,99,189,0.12)' }} />

          {/* Photo frame */}
          <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-2xl bg-gray-50 overflow-hidden relative"
            style={{ border: '1px solid #e5e7eb', boxShadow: '0 20px 48px rgba(14,99,189,0.1)' }}>
            <img src="/images/profile.png" alt="Engineer Fab — Network Engineer"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            {/* Fallback */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
              <Terminal size={36} className="text-gray-300 mb-3" />
              <span className="font-mono font-black text-4xl tracking-widest" style={{ color: 'rgba(14,99,189,0.2)' }}>EF</span>
              <span className="font-mono text-gray-400 text-xs mt-2">place profile.png here</span>
            </div>
          </div>

          {/* Floating chips */}
          <div className="absolute -left-12 top-10 terminal-box px-3 py-2 shadow-lg" style={{ transform: 'rotate(-1.5deg)' }}>
            <p className="font-mono text-xs font-bold text-blue-400">CCNA ✓</p>
            <p className="font-mono text-gray-500" style={{ fontSize: '10px' }}>Routing & Switching</p>
          </div>
          <div className="absolute -right-10 bottom-12 terminal-box px-3 py-2 shadow-lg" style={{ transform: 'rotate(1.5deg)' }}>
            <p className="font-mono text-xs font-bold text-orange-400">5+ yrs</p>
            <p className="font-mono text-gray-500" style={{ fontSize: '10px' }}>on Cisco gear</p>
          </div>
        </div>
      </motion.div>

    </div>

    {/* Scroll nudge */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
      <span className="font-mono text-gray-400" style={{ fontSize: '9px', letterSpacing: '0.2em' }}>SCROLL</span>
      <div className="w-px h-6" style={{ background: 'linear-gradient(to bottom, #0e63bd, transparent)' }} />
    </div>
  </section>
);

export default Hero;
