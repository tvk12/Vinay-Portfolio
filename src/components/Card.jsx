import { motion } from 'framer-motion';

export default function Card({ title, description, tags = [] }) {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="glass-card group p-8 min-h-[280px] flex flex-col justify-between relative overflow-hidden"
        >
            {/* Inner Glow Detail */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                    {description}
                </p>
            </div>

            {tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] uppercase tracking-widest font-bold text-accent px-2 py-1 bg-accent/10 rounded border border-accent/20">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
