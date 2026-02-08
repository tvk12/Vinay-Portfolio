import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile.webp';

export default function AboutSection() {
    const skills = [
        "Python", "SQL", "Java", "C",
        "Machine Learning", "Deep Learning", "Data Preprocessing", "Feature Engineering",
        "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "PyTorch",
        "AWS (EC2, S3, IAM, EKS)", "GCP", "Azure", "Cloud Architecture",
        "Kubernetes", "Docker", "Terraform", "Jenkins", "Kafka",
        "Distributed Systems", "Serverless Architectures", "MLOps",
        "MySQL", "Git", "GitHub", "Linux"
    ];

    const education = [
        {
            degree: "Master of Science in Computer Science",
            institution: "University of Dayton, Dayton, OH",
            period: "December 2024",
            gpa: "3.64/4.0",
            honors: "Dean's List",
            description: "Relevant Coursework: Machine Learning, Artificial Intelligence, Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Vision, Natural Language Processing, Cloud Computing Frameworks."
        },
        {
            degree: "Bachelors of Science in Computer Science",
            institution: "Sri Vasavi Engineering College, Andhra Pradesh, India",
            period: "2023",
            description: "Strong foundation in core computer science principles and engineering fundamentals."
        }
    ];

    const certifications = [
        "National Level Project Expo 2022",
        "APSSDC Certified AWS Cloud Computing 2021"
    ];

    return (
        <div className="max-w-5xl mx-auto py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-16 items-center mb-32"
            >
                <div>
                    <h2 className="text-4xl font-bold mb-8 text-white tracking-tight">Professional <span className="text-accent">Summary</span></h2>
                    <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                        <p>
                            Recent Master's graduate in Computer Science from the <span className="text-white font-medium">University of Dayton</span> (Dec 2024, GPA 3.64/4.0). Currently <span className="text-white font-medium">Co-Founder & Founding ML Engineer at Neuralyn LLC</span>, building scalable AI/ML solutions from the ground up. I bridge the gap between cutting-edge research and production-ready applications.
                        </p>
                        <ul className="space-y-3 list-none">
                            {[
                                "Expertise in NLP, Deep Learning, and Predictive Modeling with production deployments.",
                                "Proven track record in building and deploying scalable MLOps pipelines at startup and enterprise scale.",
                                "Multi-cloud expertise across AWS, GCP, and Azure with hands-on DevOps experience.",
                                "Strong foundation in Distributed Systems, Kubernetes, Terraform, and event-driven architectures.",
                                "Focus on Secure AI, model ethics, performance optimization, and engineering best practices."
                            ].map((strength, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <span className="text-accent mt-1.5">•</span>
                                    <span>{strength}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-4 mt-8">
                        {[
                            { icon: Github, href: "https://github.com/repos?q=owner%3A%40me", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/vinaykumartanneeru/", label: "LinkedIn" },
                            { icon: Mail, href: "mailto:vinaykumartanneeru@gmail.com", label: "Email" }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 glass rounded-xl text-gray-400 hover:text-accent hover:border-accent/30 transition-all duration-300 border border-white/5"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>
                <div className="relative group p-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-accent to-orange-400 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                    <div className="relative glass rounded-3xl overflow-hidden aspect-square border border-white/10 p-2">
                        <img
                            src={profileImage}
                            alt="Vinay Kumar Tanneeru"
                            className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-12 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-4"
                >
                    <h3 className="text-2xl font-bold mb-8 text-white sticky top-32">Technical <span className="text-accent">Skills</span></h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="px-4 py-1.5 glass text-xs font-bold uppercase tracking-wider text-gray-300 rounded-full border border-white/5 hover:border-accent/40 hover:text-accent transition-all duration-300">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <div className="md:col-span-8 space-y-24">
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-widest text-sm text-accent">Education</h3>
                        <div className="grid gap-8">
                            {education.map((edu, index) => (
                                <div key={index} className="glass-card group p-8">
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-gray-400 font-medium">{edu.institution}</p>
                                            {edu.gpa && (
                                                <div className="flex gap-4 mt-2 text-sm">
                                                    <span className="text-gray-500">GPA: <span className="text-accent font-semibold">{edu.gpa}</span></span>
                                                    {edu.honors && <span className="text-gray-500">• <span className="text-white font-medium">{edu.honors}</span></span>}
                                                </div>
                                            )}
                                        </div>
                                        <span className="text-accent font-mono text-xs px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed border-l border-white/10 pl-4">
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-widest text-sm text-accent">Certifications</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {certifications.map((cert, index) => (
                                <div key={index} className="glass p-6 rounded-2xl flex items-start gap-4 hover:bg-white/[0.05] transition-all border border-white/5 group">
                                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shadow-[0_0_10px_rgba(255,77,0,0.5)] group-hover:scale-150 transition-transform"></div>
                                    <span className="text-gray-300 font-medium leading-tight">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
}
