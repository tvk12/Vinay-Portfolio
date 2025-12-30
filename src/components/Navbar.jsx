import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="fixed w-full top-6 z-50 px-4">
            <nav className="max-w-fit mx-auto glass-island flex items-center gap-2 p-1.5 backdrop-blur-2xl">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full
                            ${location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        {location.pathname === link.path && (
                            <motion.div
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-white/10 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{link.name}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
