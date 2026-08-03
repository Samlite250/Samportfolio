import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Layers, Github, Mail, Briefcase, ChevronUp } from 'lucide-react';

const dockItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'github', label: 'GitHub', icon: Github },
    { id: 'contact', label: 'Contact', icon: Mail },
];

const FloatingDock = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [visible, setVisible] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);

            // Determine active section
            const sections = dockItems.map(d => document.getElementById(d.id)).filter(Boolean);
            let current = 'home';
            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 120) current = section.id;
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[800] flex items-center gap-1 px-3 py-2 rounded-2xl 
            bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl 
            border border-gray-200/80 dark:border-white/10 
            shadow-2xl shadow-black/10 dark:shadow-black/40"
                >
                    {dockItems.map(({ id, label, icon: Icon }) => {
                        const isActive = activeSection === id;
                        return (
                            <div
                                key={id}
                                className="relative flex flex-col items-center"
                                onMouseEnter={() => setHoveredId(id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Tooltip */}
                                <AnimatePresence>
                                    {hoveredId === id && (
                                        <motion.span
                                            initial={{ opacity: 0, y: 4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 4 }}
                                            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold
                        bg-gray-900 dark:bg-white text-white dark:text-gray-900 whitespace-nowrap pointer-events-none"
                                        >
                                            {label}
                                        </motion.span>
                                    )}
                                </AnimatePresence>

                                <motion.button
                                    onClick={() => scrollToSection(id)}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`relative p-2.5 rounded-xl transition-all duration-200 ${isActive
                                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                            : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10'
                                        }`}
                                    aria-label={label}
                                >
                                    <Icon size={16} />
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeDot"
                                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                                        />
                                    )}
                                </motion.button>
                            </div>
                        );
                    })}

                    {/* Divider */}
                    <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-1" />

                    {/* Scroll to Top */}
                    <div
                        className="relative flex flex-col items-center"
                        onMouseEnter={() => setHoveredId('top')}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <AnimatePresence>
                            {hoveredId === 'top' && (
                                <motion.span
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 4 }}
                                    className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold
                    bg-gray-900 dark:bg-white text-white dark:text-gray-900 whitespace-nowrap pointer-events-none"
                                >
                                    Top
                                </motion.span>
                            )}
                        </AnimatePresence>
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10 transition-all duration-200"
                            aria-label="Scroll to top"
                        >
                            <ChevronUp size={16} />
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingDock;
