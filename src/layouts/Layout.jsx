import { Outlet } from 'react-router-dom';
import { motion as Motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import ScrollToTop from '../components/ScrollToTop';

export default function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="relative flex min-h-screen flex-col bg-canvas text-ink font-sans">
      <ScrollToTop />
      <Motion.div className="scroll-progress" style={{ scaleX }} />
      <Background />
      <Navbar />
      <div aria-hidden="true" className="h-[84px] md:h-[96px]" />
      <main className="relative z-10 flex-grow px-4 pb-16 pt-3 md:px-8 md:pt-4">
        <div className="mx-auto max-w-[1400px]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
