import React, { useState, useEffect } from 'react';
import { Menu, X, Network } from 'lucide-react';

const navLinks = [
  { name: 'Home',       href: '#home'       },
  { name: 'About',      href: '#about'      },
  { name: 'Skills',     href: '#skills'     },
  { name: 'Services',   href: '#services'   },
  { name: 'Projects',   href: '#projects'   },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact',    href: '#contact'    },
];

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('#home');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded">
        Skip to main content
      </a>

      <header className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-200 ${
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(14,99,189,0.1)', border: '1px solid rgba(14,99,189,0.2)' }}>
              <Network size={15} style={{ color: '#0e63bd' }} />
            </div>
            <span className="font-mono font-bold text-gray-900 text-sm">
              fab<span style={{ color: '#0e63bd' }}>.cisco</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ name, href }) => (
              <a key={name} href={href} onClick={() => setActive(href)}
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider font-mono rounded-lg transition-colors duration-150"
                style={{
                  color: active === href ? '#0e63bd' : '#6b7280',
                  background: active === href ? 'rgba(14,99,189,0.08)' : 'transparent',
                }}
              >
                {name}
              </a>
            ))}
            <a href="#contact" className="ml-3 btn-primary text-xs font-mono uppercase tracking-wider"
              style={{ padding: '0.5rem 1.25rem', borderRadius: '0.5rem' }}>
              Hire Me
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-500" aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            {navLinks.map(({ name, href }) => (
              <a key={name} href={href} onClick={() => { setMenuOpen(false); setActive(href); }}
                className="flex items-center px-6 py-3.5 text-sm font-semibold font-mono text-gray-600 hover:text-primary border-b border-gray-50 transition-colors"
                style={active === href ? { color: '#0e63bd', background: 'rgba(14,99,189,0.05)' } : {}}>
                <span className="mr-3 text-xs" style={{ color: '#0e63bd' }}>▸</span>{name}
              </a>
            ))}
            <div className="px-6 py-4">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="block w-full py-3 text-center btn-primary font-mono text-sm">
                Hire Me
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
