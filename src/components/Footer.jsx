import React from 'react';
import { Github, Linkedin, Mail, Network, ArrowUp } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-900 text-gray-400">

    {/* Stats bar */}
    <div className="border-b border-white/10">
      <div className="container mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          { val: '5+',   label: 'years on Cisco gear'  },
          { val: '50+',  label: 'networks deployed'    },
          { val: 'CCNA', label: 'certified, CCNP next' },
          { val: '∞',    label: 'routing tables read'  },
        ].map(({ val, label }) => (
          <div key={label}>
            <p className="text-primary font-mono font-black text-2xl">{val}</p>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest font-semibold mt-0.5">{label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

      <div className="flex flex-col items-center md:items-start gap-1">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-primary/15 border border-primary/25 rounded-lg flex items-center justify-center">
            <Network size={13} className="text-primary" />
          </div>
          <span className="font-mono font-bold text-gray-300 group-hover:text-white transition-colors">
            fab<span className="text-primary">.cisco</span>
          </span>
        </a>
        <p className="text-gray-600 text-[10px] font-mono italic">
          built by hand, not a template — {new Date().getFullYear()}
        </p>
      </div>

      <div className="flex items-center gap-2">
        {[
          { href: 'https://github.com/',             icon: Github,   label: 'GitHub'   },
          { href: 'https://linkedin.com/',           icon: Linkedin, label: 'LinkedIn' },
          { href: 'mailto:nsengafabrice4@gmail.com', icon: Mail,     label: 'Email'    },
        ].map(({ href, icon: Icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
            className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-lg text-gray-600 hover:text-primary hover:border-primary/30 transition-all">
            <Icon size={14} />
          </a>
        ))}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-lg text-gray-600 hover:text-primary hover:border-primary/30 transition-all ml-1"
        >
          <ArrowUp size={14} />
        </button>
      </div>

    </div>
  </footer>
);

export default Footer;
