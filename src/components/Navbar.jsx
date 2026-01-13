import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="fixed w-full top-6 z-50 px-4">
            <nav className="max-w-fit mx-auto bg-black/40 backdrop-blur-2xl border border-white/[0.08] rounded-full p-1.5 shadow-2xl transition-all duration-500 hover:border-white/20">
                <div className="flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`relative px-6 py-2.5 text-sm font-medium transition-all duration-500 rounded-full group
                                ${location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>

                            {/* Hover underline detail */}
                            {location.pathname !== link.path && (
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-accent transition-all duration-300 group-hover:w-1/3 opacity-50" />
                            )}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-6 py-2.5 text-sm font-medium transition-all duration-500 rounded-full text-gray-400 hover:text-white group"
                    >
                        <span className="relative z-10">Resume</span>
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-accent transition-all duration-300 group-hover:w-1/3 opacity-50" />
                    </a>
                </div>
            </nav>
        </div>
    );
}
