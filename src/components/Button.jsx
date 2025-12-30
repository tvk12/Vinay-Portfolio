import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
    const variants = {
        primary: "bg-sunset-gradient text-white shadow-[0_0_20px_rgba(255,77,0,0.2)] hover:shadow-[0_0_30px_rgba(255,77,0,0.4)]",
        secondary: "glass text-white border border-white/10 hover:bg-white/10",
        outline: "border border-accent text-accent hover:bg-accent hover:text-white"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-3 rounded-full font-display font-semibold transition-all duration-300 relative overflow-hidden group ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            )}
        </motion.button>
    );
}
