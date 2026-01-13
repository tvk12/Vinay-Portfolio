import { Outlet } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';

export default function Layout() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen flex flex-col bg-primary text-light font-sans selection:bg-accent selection:text-white relative">
            <motion.div className="scroll-progress" style={{ scaleX }} />
            <Background />
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 pt-24 relative z-10">
                <Outlet />
            </main>

            {/* Signature Bottom Right */}
            <div className="fixed bottom-6 right-8 z-[60] pointer-events-none select-none">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex flex-col items-end"
                >
                    <span className="font-signature text-3xl text-white/40 hover:text-accent/60 transition-colors duration-500 cursor-default">
                        Vinay.T
                    </span>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent/30 mt-1" />
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}
