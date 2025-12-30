import { motion } from 'framer-motion';

export default function Card({ title, description, tags = [] }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-card group p-8 min-h-[280px] flex flex-col justify-between"
        >
            <div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                    {description}
                </p>
            </div>

            {tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] uppercase tracking-widest font-bold text-accent px-2 py-1 bg-accent/10 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
