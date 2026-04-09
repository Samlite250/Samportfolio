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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-300 bg-white ${scrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
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
              <Icon size={14} />
              {name}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary rounded transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 rounded-lg border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
          >
            Hire Me
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown — sits directly under the navbar, solid white */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          {navLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-6 py-4 text-gray-800 hover:text-primary hover:bg-gray-50 font-semibold text-base border-b border-gray-100 transition-colors"
            >
              <Icon size={18} className="text-primary" />
              {name}
            </a>
          ))}
          <div className="px-6 py-4">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full py-3 text-center bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
