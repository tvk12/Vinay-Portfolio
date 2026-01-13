import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

const blogPosts = [
    {
        title: "How I built a Spam SMS detector using BERT",
        excerpt: "Deep dive into fine-tuning transformer models for real-time text classification with high precision.",
        date: "Jan 2024",
        readTime: "6 min read",
        tags: ["BERT", "NLP", "PyTorch"],
        content: `
            Building a real-time spam detector requires balancing model complexity with inference speed. 
            In this post, I detail the process of fine-tuning a 'bert-base-uncased' model on over 5,500 messages.
            
            Key highlights:
            • Data Preprocessing: Handling emojis and non-standard text in SMS.
            • Fine-Tuning: Leveraging HuggingFace Transformers with a custom PyTorch classification head.
            • Optimization: Using ONNX Runtime to reduce inference latency to sub-100ms.
            • Deployment: API creation with FastAPI and containerization with Docker.
        `
    },
    {
        title: "Deploying ML models with FastAPI + AWS",
        excerpt: "Step-by-step guide to containerizing and deploying production-ready inference APIs.",
        date: "Dec 2023",
        readTime: "8 min read",
        tags: ["FastAPI", "Docker", "MLOps"],
        content: `
            Taking a model from a Jupyter Notebook to production is a critical skill for any ML Engineer. 
            This guide covers the deployment of a Scikit-Learn model via an AWS EC2 instance.
            
            Topics covered:
            • API Structure: Designing robust endpoints with FastAPI.
            • Containerization: Writing efficient Dockerfiles for ML environments.
            • Cloud Infrastructure: Setting up Security Groups and VPCs on AWS.
            • Monitoring: Implementing Prometheus and Grafana for health checks.
        `
    },
    {
        title: "Lessons from building reusable ML pipelines",
        excerpt: "Strategies for creating modular, scalable, and maintainable data science workflows.",
        date: "Nov 2023",
        readTime: "5 min read",
        tags: ["Python", "Architecture", "Best Practices"],
        content: `
            Scalability in machine learning isn't just about data size; it's about the developer's ability to reuse logic. 
            I share the design patterns that helped me scale from one to ten simultaneous experiments.
            
            Key takeaways:
            • Modularity: Separating feature engineering from model training.
            • Versioning: Utilizing DVC for dataset and model tracking.
            • Configurations: Moving from hardcoded parameters to YAML-based systems.
            • Automation: Setting up CI/CD with GitHub Actions for automated testing.
        `
    }
];

export default function Blog() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const togglePost = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

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
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`glass-card group p-8 hover:border-accent/20 transition-all relative overflow-hidden ${expandedIndex === index ? 'border-accent/30' : ''}`}
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

                        <button
                            onClick={() => togglePost(index)}
                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-colors"
                        >
                            {expandedIndex === index ? (
                                <>Close Post <X size={14} /></>
                            ) : (
                                <>Read Full Post <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>

                        <AnimatePresence>
                            {expandedIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-8 pt-8 border-t border-white/10"
                                >
                                    <div className="prose prose-invert max-w-none">
                                        <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                                            {post.content}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
