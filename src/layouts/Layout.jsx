import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-primary text-light font-sans selection:bg-accent selection:text-white">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 pt-24">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
