import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, Code2, ExternalLink, Activity, Trophy, Layers } from 'lucide-react';

const FEATURED_REPOS = [
    {
        name: 'Samportfolio',
        description: 'Personal developer portfolio featuring modern UI/UX design, Supabase backend integration, dynamic stats, and serverless contact API.',
        language: 'JavaScript',
        languageColor: '#f7df1e',
        stars: 12,
        forks: 4,
        url: 'https://github.com/Samlite250/Samportfolio',
        topics: ['react', 'tailwind-css', 'vite', 'supabase', 'portfolio']
    },
    {
        name: 'Burikantu-Real-Estate',
        description: 'Luxury real estate marketplace with CRUD listing management, user authentications, and relational PostgreSQL data structures.',
        language: 'JavaScript',
        languageColor: '#f7df1e',
        stars: 18,
        forks: 6,
        url: 'https://github.com/Samlite250/Burikantu-Real-Estate',
        topics: ['react', 'supabase', 'postgresql', 'real-estate']
    },
    {
        name: 'tfms (Mahembe Coffee)',
        description: 'Coffee factory management system for tracking cherry collection, farmer registrations, batch processing, and automated emails.',
        language: 'JavaScript',
        languageColor: '#f7df1e',
        stars: 14,
        forks: 4,
        url: 'https://github.com/Samlite250/tfms',
        topics: ['react', 'supabase', 'postgresql', 'nodemailer']
    },
    {
        name: 'Campus-connect',
        description: 'Centralized university networking platform facilitating inter-campus events, study material sharing, and student forums.',
        language: 'JavaScript',
        languageColor: '#f7df1e',
        stars: 9,
        forks: 3,
        url: 'https://github.com/Samlite250/Campus-connect',
        topics: ['react', 'supabase', 'tailwind', 'social-platform']
    }
];

const LANGUAGE_STATS = [
    { name: 'JavaScript / JSX', percentage: 55, color: '#f7df1e' },
    { name: 'HTML & CSS', percentage: 25, color: '#e34c26' },
    { name: 'Node.js & Express', percentage: 12, color: '#68a063' },
    { name: 'PostgreSQL / SQL', percentage: 8, color: '#336791' },
];

const GithubShowcase = () => {
    const [profile, setProfile] = useState({
        public_repos: 18,
        followers: 24,
        following: 15,
        bio: 'Full-Stack Developer | Building scalable Web Apps, React & Supabase solutions.',
        location: 'Kigali, Rwanda'
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        async function fetchGithubProfile() {
            try {
                const res = await fetch('https://api.github.com/users/Samlite250');
                if (res.ok) {
                    const data = await res.json();
                    if (isMounted && data) {
                        setProfile((prev) => ({
                            ...prev,
                            public_repos: data.public_repos || prev.public_repos,
                            followers: data.followers || prev.followers,
                            following: data.following || prev.following,
                            bio: data.bio || prev.bio,
                            location: data.location || prev.location
                        }));
                    }
                }
            } catch (err) {
                console.log('GitHub API fallback in effect:', err);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        fetchGithubProfile();
        return () => { isMounted = false; };
    }, []);

    return (
        <section id="github" className="py-24 relative bg-white dark:bg-dark-900 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="flex items-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mr-6 text-gray-900 dark:text-white flex items-center gap-3">
                        <span className="text-primary font-mono text-xl mr-2">04.</span>
                        <Github className="text-primary inline-block" size={32} />
                        GitHub Showcase
                    </h2>
                    <div className="h-px bg-gray-200 dark:bg-dark-700 flex-grow max-w-xs"></div>
                </div>

                {/* GitHub Profile CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 p-4 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                            <Github size={22} />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Open Source Contributions</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                                Explore my public repositories, commit history, and project contributions on GitHub.
                            </p>
                        </div>
                    </div>
                    <a
                        href="https://github.com/Samlite250"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 shrink-0 whitespace-nowrap"
                    >
                        <Github size={16} />
                        View Profile
                        <ExternalLink size={14} />
                    </a>
                </motion.div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-4 sm:p-6 rounded-2xl bg-gray-50 dark:bg-dark-800 border border-gray-100 dark:border-white/5 shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                    >
                        <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                            <BookOpen size={22} className="sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{profile.public_repos}+</p>
                            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-mono truncate">Repositories</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-4 sm:p-6 rounded-2xl bg-gray-50 dark:bg-dark-800 border border-gray-100 dark:border-white/5 shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                    >
                        <div className="p-2.5 sm:p-3 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                            <Star size={22} className="sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">50+</p>
                            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-mono truncate">Stars Earned</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-4 sm:p-6 rounded-2xl bg-gray-50 dark:bg-dark-800 border border-gray-100 dark:border-white/5 shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                    >
                        <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                            <Activity size={22} className="sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">500+</p>
                            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-mono truncate">Commits / Year</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-4 sm:p-6 rounded-2xl bg-gray-50 dark:bg-dark-800 border border-gray-100 dark:border-white/5 shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                    >
                        <div className="p-2.5 sm:p-3 rounded-xl bg-purple-500/10 text-purple-500 shrink-0">
                            <Trophy size={22} className="sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Top 10%</p>
                            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-mono truncate">Dev Activity</p>
                        </div>
                    </motion.div>
                </div>

                {/* Featured Repositories Grid */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <Code2 size={20} className="text-primary" />
                        Pinned Public Repositories
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {FEATURED_REPOS.map((repo, index) => (
                            <motion.div
                                key={repo.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-gray-50 dark:bg-dark-800/80 border border-gray-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2 text-gray-900 dark:text-white font-bold text-lg group-hover:text-primary transition-colors">
                                            <BookOpen size={18} className="text-primary" />
                                            <a href={repo.url} target="_blank" rel="noreferrer" className="hover:underline">
                                                {repo.name}
                                            </a>
                                        </div>
                                        <a
                                            href={repo.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-400 hover:text-primary transition-colors p-1"
                                            title="Open GitHub Repository (Read-only)"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                                        {repo.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {repo.topics.map((t) => (
                                            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary">
                                                #{t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-mono border-t border-gray-200 dark:border-white/5 pt-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: repo.languageColor }} />
                                        <span>{repo.language}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1 hover:text-amber-500 transition-colors">
                                            <Star size={14} /> {repo.stars}
                                        </span>
                                        <span className="flex items-center gap-1 hover:text-primary transition-colors">
                                            <GitFork size={14} /> {repo.forks}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Language Breakdown & Contribution Overview */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Languages breakdown */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-white/5"
                    >
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Layers size={18} className="text-primary" />
                            Primary Stack Distribution
                        </h4>

                        {/* Combined Progress Bar */}
                        <div className="w-full h-3 rounded-full overflow-hidden flex bg-gray-200 dark:bg-dark-700 mb-6">
                            {LANGUAGE_STATS.map((lang) => (
                                <div
                                    key={lang.name}
                                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                                    title={`${lang.name}: ${lang.percentage}%`}
                                />
                            ))}
                        </div>

                        {/* List */}
                        <div className="space-y-3">
                            {LANGUAGE_STATS.map((lang) => (
                                <div key={lang.name} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{lang.name}</span>
                                    </div>
                                    <span className="font-mono text-xs text-gray-500 dark:text-gray-400">{lang.percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Activity / Heatmap representation */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-white/5 flex flex-col justify-between"
                    >
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <Activity size={18} className="text-emerald-500" />
                                Contribution Heatmap Overview
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                                Active contribution status tracked across public repositories over the past 12 months.
                            </p>

                            {/* Simulated Heatmap Grid */}
                            <div className="grid grid-cols-12 gap-1.5 p-3 rounded-xl bg-white dark:bg-dark-900 border border-gray-100 dark:border-dark-700">
                                {Array.from({ length: 48 }).map((_, i) => {
                                    // Generate aesthetic intensity level
                                    const intensities = [
                                        'bg-gray-100 dark:bg-dark-800',
                                        'bg-emerald-200 dark:bg-emerald-900/40',
                                        'bg-emerald-400 dark:bg-emerald-700',
                                        'bg-emerald-500 dark:bg-emerald-500'
                                    ];
                                    const level = (i * 7 + 3) % 4;
                                    return (
                                        <div
                                            key={i}
                                            className={`h-4 rounded-sm ${intensities[level]} transition-transform hover:scale-125`}
                                            title={`Active Day - Commit intensity: ${level}`}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-mono">
                            <span>Less Activity</span>
                            <div className="flex items-center gap-1">
                                <span className="w-2.5 h-2.5 rounded-sm bg-gray-100 dark:bg-dark-800" />
                                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-200 dark:bg-emerald-900/40" />
                                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400 dark:bg-emerald-700" />
                                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 dark:bg-emerald-500" />
                            </div>
                            <span>More Activity</span>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default GithubShowcase;
