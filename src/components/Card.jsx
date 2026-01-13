import { motion } from 'framer-motion';
import { Github, ExternalLink, BookOpen, BarChart3 } from 'lucide-react';
import { useState } from 'react';

export default function Card({ title, description, tags = [], metrics = [], links = {}, details = "" }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            whileHover={{ y: -5 }}
            className={`glass-card group p-8 flex flex-col relative overflow-hidden transition-all duration-500 ${isExpanded ? 'md:col-span-2 lg:col-span-2' : ''}`}
        >
            {/* Inner Glow Detail */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                        {title}
                    </h3>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm mb-6">
                    {description}
                </p>

                {/* Metrics */}
                {metrics.length > 0 && (
                    <div className="flex gap-4 mb-6 border-y border-white/5 py-3">
                        {metrics.map((m, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">{m.label}</span>
                                <span className="text-accent font-mono text-sm font-bold">{m.value}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] uppercase tracking-widest font-bold text-white/50 px-2 py-0.5 bg-white/5 rounded border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                    {links.github && (
                        <a href={links.github} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-gray-400 hover:text-white hover:border-accent/30 transition-all" title="GitHub Source">
                            <Github size={18} />
                        </a>
                    )}
                    {links.demo && (
                        <a href={links.demo} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg text-gray-400 hover:text-white hover:border-accent/30 transition-all" title="Live Demo">
                            <ExternalLink size={18} />
                        </a>
                    )}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-xs font-bold uppercase tracking-wider text-accent hover:bg-accent/10 transition-all"
                    >
                        <BookOpen size={14} />
                        {isExpanded ? 'Close Detail' : 'Case Study'}
                    </button>
                </div>

                {/* Expanded Details Section */}
                {isExpanded && details && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-8 pt-8 border-t border-white/10 space-y-4"
                    >
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div>
                                <h4 className="font-bold text-white mb-2 underline decoration-accent/50">Problem & Dataset</h4>
                                <p className="text-gray-400 line-clamp-3 hover:line-clamp-none transition-all">{details.problem}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-2 underline decoration-accent/50">Approach</h4>
                                <p className="text-gray-400 line-clamp-3 hover:line-clamp-none transition-all">{details.approach}</p>
                            </div>
                        </div>
                        <div className="bg-accent/5 p-4 rounded-xl border border-accent/10">
                            <h4 className="font-bold text-xs text-accent uppercase tracking-widest mb-2">Key Learnings</h4>
                            <p className="text-gray-300 text-xs italic">{details.learnings}</p>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
