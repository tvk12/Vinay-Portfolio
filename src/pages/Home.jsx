import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, Cloud, Code2, BrainCircuit, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';

export default function Home() {
    const techStack = [
        {
            category: "AI / ML",
            icon: BrainCircuit,
            skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "NLP", "LLMs", "MLOps"]
        },
        {
            category: "Cloud / DevOps",
            icon: Cloud,
            skills: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform", "Jenkins"]
        },
        {
            category: "Data",
            icon: Database,
            skills: ["SQL", "Pandas", "NoSQL", "Kafka", "ETL", "Distributed Systems"]
        },
        {
            category: "Languages / API",
            icon: Code2,
            skills: ["Python", "Java", "C++", "FastAPI", "React", "Serverless"]
        }
    ];

    return (
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background Decorative Element - Subtly enhanced */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10"
            />

            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6">
                        Available for Opportunities
                    </span>
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">
                        VINAY KUMAR <br />
                        <span className="text-gradient text-glow">TANNEERU</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-sans"
                >
                    Recent Master's graduate from the University of Dayton, currently
                    <span className="text-white font-semibold"> Co-Founder & Founding ML Engineer at Neuralyn LLC</span>. Specializing in
                    <span className="text-white font-semibold"> Artificial Intelligence</span>,
                    <span className="text-white font-semibold"> Machine Learning</span>, and
                    <span className="text-white font-semibold"> Multi-Cloud Architecture</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-wrap gap-4 justify-center items-center"
                >
                    <Link to="/projects">
                        <Button variant="primary" className="min-w-[180px]">Explore Projects</Button>
                    </Link>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" className="min-w-[180px]">View Resume</Button>
                    </a>
                    <a href="/resume.pdf" download="Vinay_Kumar_Tanneeru_Resume.pdf">
                        <Button variant="outline" className="min-w-[180px]">Download Resume</Button>
                    </a>
                </motion.div>
            </div>

            {/* Tech Stack Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-32 w-full max-w-6xl px-4"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Tech <span className="text-accent">Stack</span></h2>
                    <p className="text-gray-400">Specialized tools and technologies I use to build intelligent systems.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techStack.map((group, i) => (
                        <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all group">
                            <div className="flex items-center gap-3 mb-4">
                                <group.icon className="text-accent group-hover:scale-110 transition-transform" size={24} />
                                <h3 className="font-bold text-white/90">{group.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, si) => (
                                    <span key={si} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 py-1 bg-white/5 rounded border border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-32 w-full max-w-6xl px-4"
            >
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />
                <AboutSection />
            </motion.div>

            {/* Experience Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-32 w-full max-w-6xl px-4"
            >
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />
                <ExperienceSection />
            </motion.div>


            {/* Final CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="my-32 w-full max-w-4xl mx-auto text-center px-4"
            >
                <div className="glass-card p-12 rounded-[2.5rem] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <h2 className="text-4xl font-bold mb-6">Ready to collaborate?</h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Reach out for <span className="text-white">AI/ML</span>, <span className="text-white">Cloud</span>, or <span className="text-white">MLOps</span> opportunities.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: Mail, href: "mailto:vinaykumartanneeru@gmail.com", label: "Email Me" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/vinaykumartanneeru/", label: "LinkedIn" },
                            { icon: Github, href: "https://github.com/repos?q=owner%3A%40me", label: "GitHub" }
                        ].map((cta, i) => (
                            <a
                                key={i}
                                href={cta.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 py-3 glass rounded-full hover:border-accent/40 hover:text-white transition-all group/cta"
                            >
                                <cta.icon size={20} className="text-accent group-hover/cta:scale-110 transition-transform" />
                                <span className="font-semibold text-sm">{cta.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div >
    );
}
