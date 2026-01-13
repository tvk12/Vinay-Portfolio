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
                            className="pt-8 border-t border-white/10 space-y-12"
                        >
                            {/* Problem & Approach */}
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

                            {/* Architecture Diagram */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 text-accent">
                                    <Layers size={18} />
                                    <h4 className="font-bold text-sm uppercase tracking-widest">System Architecture</h4>
                                </div>
                                <div className="relative w-full rounded-2xl bg-black/40 border border-white/5 p-6 overflow-hidden">
                                    {/* Simple SVG Flow Diagram - Horizontal Scroll */}
                                    {details.architecture ? (
                                        <div className="overflow-x-auto pb-4 -mb-4 scrollbar-hide">
                                            <div className="flex items-center justify-between min-w-max gap-4 relative z-10 px-2">
                                                {details.architecture.map((step, idx) => (
                                                    <div key={idx} className="flex items-center">
                                                        <div className="min-w-[100px] px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-center backdrop-blur-sm hover:border-accent/40 hover:bg-white/10 transition-all duration-300 group/step">
                                                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300 group-hover/step:text-white transition-colors whitespace-nowrap">
                                                                {step}
                                                            </span>
                                                        </div>
                                                        {idx < details.architecture.length - 1 && (
                                                            <div className="flex items-center justify-center w-8 text-accent mx-2">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                    <path d="M5 12h14m-7-7l7 7-7 7" />
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center text-gray-500 py-8">Architecture diagram not available</div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-20 pointer-events-none" />
                                </div>
                                <p className="text-[10px] text-gray-500 font-mono text-center">
                                    {details.architecture_desc}
                                </p>
                            </div>

                            {/* Model Metrics & Evaluation */}
                            {details.model_metrics && (
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-accent">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                        <h4 className="font-bold text-sm uppercase tracking-widest">Model Evaluation</h4>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Metrics Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            {Object.entries(details.model_metrics).map(([key, value]) => {
                                                if (key === 'confusion_matrix') return null;
                                                return (
                                                    <div key={key} className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{key}</span>
                                                        <span className="text-xl font-mono font-bold text-white">{value}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        {/* Confusion Matrix Placeholder */}
                                        {details.model_metrics.confusion_matrix && (
                                            <div className="relative aspect-video bg-black/40 border border-white/10 rounded-xl flex flex-col items-center justify-center p-4 group/matrix overflow-hidden">
                                                <div className="grid grid-cols-2 gap-1 w-24 h-24 mb-2 opacity-50 group-hover/matrix:opacity-100 transition-opacity duration-500">
                                                    <div className="bg-accent/80 rounded color-burn" /> <div className="bg-accent/20 rounded" />
                                                    <div className="bg-accent/20 rounded" /> <div className="bg-accent/90 rounded" />
                                                </div>
                                                <span className="text-[10px] uppercase tracking-widest text-gray-500 group-hover/matrix:text-accent transition-colors">Confusion Matrix</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Responsible AI / Ethics */}
                            {details.ethics && (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-green-400">
                                        <ShieldCheck size={18} />
                                        <h4 className="font-bold text-sm uppercase tracking-widest">Responsible AI & Ethics</h4>
                                    </div>
                                    <ul className="grid md:grid-cols-1 gap-3">
                                        {details.ethics.map((note, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400 pl-4 border-l border-green-500/20">
                                                <span className="text-green-500/60 mt-0.5">•</span>
                                                <span>{note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Learnings */}
                            <div className="bg-accent/5 p-6 rounded-2xl border border-accent/10">
                                <div className="flex items-center gap-2 mb-3 text-accent">
                                    <Lightbulb size={16} />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">Key Takeaway</span>
                                </div>
                                <p className="text-gray-300 text-sm italic leading-relaxed">
                                    "{details.learnings}"
                                </p>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div >
    );
}
