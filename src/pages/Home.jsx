import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import AboutSection from '../components/AboutSection';

export default function Home() {
    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" />

            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6">
                        Available for Opportunities
                    </span>
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">
                        VINAY KUMAR <br />
                        <span className="text-gradient text-glow">TANNEERU</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-sans"
                >
                    A Master's student at the University of Dayton, pushing boundaries in
                    <span className="text-white font-semibold"> Artificial Intelligence</span>,
                    <span className="text-white font-semibold"> Machine Learning</span>, and
                    <span className="text-white font-semibold"> Cloud Architecture</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link to="/projects">
                        <Button variant="primary" className="min-w-[200px]">Explore Projects</Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="secondary" className="min-w-[200px]">Get in Touch</Button>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-32 w-full max-w-6xl px-4"
            >
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />
                <AboutSection />
            </motion.div>
        </div >
    );
}
