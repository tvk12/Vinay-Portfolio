export default function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto text-center">
                <p className="text-gray-500 font-display text-sm tracking-widest uppercase">
                    © {new Date().getFullYear()} <span className="text-white font-bold">Vinay Kumar Tanneeru</span>
                </p>
            </div>
        </footer>
    );
}
