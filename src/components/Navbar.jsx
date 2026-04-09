import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Layers, Briefcase, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home',       href: '#home',       icon: Home },
  { name: 'About',      href: '#about',      icon: User },
  { name: 'Skills',     href: '#skills',     icon: Code },
  { name: 'Projects',   href: '#projects',   icon: Layers },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Contact',    href: '#contact',    icon: Mail },
];

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* lock body scroll while menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ───── Main nav bar ───── */}
      <header
        style={{ backgroundColor: scrolled ? '#ffffff' : 'rgba(255,255,255,0.95)' }}
        className={`fixed top-0 left-0 right-0 z-[900] transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="text-2xl font-extrabold text-gray-900">
            Sam<span className="text-primary">.dev</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                className="group flex items-center gap-1.5 text-gray-700 hover:text-primary font-semibold text-sm uppercase tracking-wide transition-colors relative"
              >
                <Icon size={15} />
                {name}
                {/* underline bar */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary rounded transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 rounded-lg border-2 border-primary text-primary font-bold text-sm uppercase tracking-wide hover:bg-primary hover:text-white transition-all"
            >
              Hire Me
            </a>
          </nav>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-gray-900 hover:text-primary transition-colors"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* ───── Mobile full-screen menu ───── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[1000] flex flex-col md:hidden"
          style={{ backgroundColor: '#ffffff' }}
        >
          {/* Top strip */}
          <div
            className="flex items-center justify-between px-6 h-16 border-b border-gray-200 flex-shrink-0"
            style={{ backgroundColor: '#ffffff' }}
          >
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-extrabold text-gray-900"
            >
              Sam<span className="text-primary">.dev</span>
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-8 py-6 gap-1 flex-1 overflow-y-auto" style={{ backgroundColor: '#ffffff' }}>
            {navLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 py-4 border-b border-gray-100 text-gray-800 hover:text-primary font-bold text-xl uppercase tracking-wide transition-colors group"
              >
                <span className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-primary/30 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  <Icon size={18} />
                </span>
                {name}
                <span className="ml-auto text-gray-300 group-hover:text-primary text-2xl">›</span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-8 py-8 flex-shrink-0" style={{ backgroundColor: '#ffffff' }}>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full py-4 text-center bg-primary text-white font-extrabold text-lg rounded-xl hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
