import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, BookOpen, Layers, Database, ShieldCheck, Lightbulb } from 'lucide-react';
import { useState } from 'react';

export default function Card({ title, description, tags = [], metrics = [], links = {}, details = {} }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            className={`glass-card group p-8 flex flex-col relative overflow-hidden transition-all duration-500 border border-white/5 hover:border-accent/20 ${isExpanded ? 'md:col-span-2 lg:col-span-2' : ''}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        {description}
                    </p>
                </div>

                {/* Metrics Grid */}
                {metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/5 rounded-2xl border border-white/5">
                        {metrics.map((m, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">{m.label}</span>
                                <span className="text-accent font-mono text-lg font-bold">{m.value}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] uppercase tracking-widest font-bold text-white/40 px-2.5 py-1 bg-white/5 rounded-full border border-white/5 hover:border-accent/30 hover:text-white transition-all">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Primary Actions */}
                <div className="flex flex-wrap gap-3 mt-auto">
                    {links.github && links.github !== "#" && (
                        <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl text-gray-400 hover:text-white hover:border-accent/30 transition-all font-semibold text-xs uppercase tracking-wider" title="GitHub Repository">
                            <Github size={16} />
                            Source
                        </a>
                    )}
                    {links.demo && links.demo !== "#" && (
                        <a href={links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl text-accent hover:bg-accent/10 hover:border-accent/30 transition-all font-semibold text-xs uppercase tracking-wider" title="Live Demo">
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xl ${isExpanded ? 'bg-accent text-black' : 'glass text-white/70 hover:text-white hover:border-white/20'}`}
                    >
                        <BookOpen size={16} />
                        {isExpanded ? 'Close Case Study' : 'Case Study'}
                    </button>
                </div>

                {/* Detailed Case Study Section */}
                <AnimatePresence mode="wait">
                    {isExpanded && details && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="pt-8 border-t border-white/10 space-y-8"
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-accent">
                                        <Database size={18} />
                                        <h4 className="font-bold text-sm uppercase tracking-widest">Dataset & Problem</h4>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed pl-6 border-l-2 border-accent/20">
                                        <span className="text-white font-medium block mb-1">Impact:</span> {details.problem}
                                    </p>
                                    <p className="text-gray-400 text-sm leading-relaxed pl-6 border-l-2 border-white/5">
                                        <span className="text-white/60 font-medium block mb-1 uppercase text-[10px]">Sources:</span> {details.dataset || "Curated research dataset"}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-accent">
                                        <ShieldCheck size={18} />
                                        <h4 className="font-bold text-sm uppercase tracking-widest">Approach & Methods</h4>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed pl-6 border-l-2 border-accent/20">
                                        {details.approach}
                                    </p>
                                    <div className="pl-6 border-l-2 border-white/5">
                                        <span className="text-white/60 font-medium block mb-2 uppercase text-[10px]">Tools:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {(details.tools || tags).slice(0, 4).map((tool, ti) => (
                                                <span key={ti} className="text-[9px] font-mono text-gray-500 italic bg-white/5 px-1.5 py-0.5 rounded italic">#{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-accent">
                                        <Layers size={18} />
                                        <h4 className="font-bold text-sm uppercase tracking-widest">Architecture</h4>
                                    </div>
                                    <div className="relative aspect-video rounded-2xl bg-black/60 border border-white/5 flex items-center justify-center group/arch overflow-hidden">
                                        <div className="absolute inset-0 bg-accent/5 opacity-40 group-hover/arch:opacity-60 transition-opacity" />
                                        <p className="text-[10px] text-gray-500 font-mono text-center px-6 leading-relaxed">
                                            {details.architecture_desc || "Deployment pipeline featuring API layer, model inference, and real-time processing."}
                                        </p>
                                        <div className="absolute bottom-2 right-2 flex gap-1 items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[8px] uppercase tracking-tighter text-gray-600 font-bold">Inference Active</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-accent">
                                        <Lightbulb size={18} />
                                        <h4 className="font-bold text-sm uppercase tracking-widest">Learnings & Results</h4>
                                    </div>
                                    <div className="bg-accent/5 p-6 rounded-2xl border border-accent/10 relative">
                                        <p className="text-gray-300 text-sm italic relative z-10 leading-relaxed">
                                            "{details.learnings}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
