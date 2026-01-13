import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        title: "How I built a Spam SMS detector using BERT",
        excerpt: "Deep dive into fine-tuning transformer models for real-time text classification with high precision.",
        date: "Jan 2024",
        readTime: "6 min read",
        tags: ["BERT", "NLP", "PyTorch"]
    },
    {
        title: "Deploying ML models with FastAPI + AWS",
        excerpt: "Step-by-step guide to containerizing and deploying production-ready inference APIs.",
        date: "Dec 2023",
        readTime: "8 min read",
        tags: ["FastAPI", "Docker", "MLOps"]
    },
    {
        title: "Lessons from building reusable ML pipelines",
        excerpt: "Strategies for creating modular, scalable, and maintainable data science workflows.",
        date: "Nov 2023",
        readTime: "5 min read",
        tags: ["Python", "Architecture", "Best Practices"]
    }
];

export default function Blog() {
    return (
        <div className="pt-32 pb-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Insights & <span className="text-accent">Writeups</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto italic">
                    Exploring the intersection of Machine Learning, Cloud Systems, and Data Engineering.
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card group p-8 hover:border-accent/20 transition-all cursor-pointer relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -z-10 group-hover:bg-accent/10 transition-colors" />

                        <div className="flex flex-wrap items-center gap-4 mb-4 text-[10px] uppercase tracking-widest font-bold text-gray-500">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                            <div className="flex gap-2">
                                {post.tags.map((tag, i) => (
                                    <span key={i} className="text-accent/60">#{tag}</span>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm mb-6">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                            Read Full Post <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
