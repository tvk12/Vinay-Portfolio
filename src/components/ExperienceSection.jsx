import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function ExperienceSection() {
    const experiences = [
        {
            company: "Neuralyn LLC",
            role: "Co-Founder & Founding Machine Learning Engineer",
            period: "Feb 2026 – Present",
            location: "Chicago, Illinois, United States",
            type: "Startup",
            description: "Leading the development of machine learning and NLP solutions to support healthcare workflow automation for clinics and diagnostic centers.",
            highlights: [
                "Designed and developed end-to-end machine learning and NLP solutions for healthcare workflow automation",
                "Built scalable AI pipelines including data preprocessing, model experimentation, evaluation, and deployment into real-world applications",
                "Collaborated with founding team to define product and technical strategy, translating healthcare business needs into production-ready AI features",
                "Integrated AI capabilities into backend systems, enabling patient engagement workflows such as reminders, summaries, and decision support via WhatsApp/SMS-first channels",
                "Applied MLOps and DevOps best practices to ensure reliable model performance, monitoring, and continuous improvement in fast-paced startup environment",
                "Documented system architecture, model design decisions, and operational processes to support long-term scalability and product adoption"
            ],
            technologies: ["Machine Learning", "NLP", "Healthcare AI", "MLOps", "Python", "WhatsApp/SMS Integration", "Patient Engagement", "AI Pipelines", "Backend Systems"]
        },
        {
            company: "Wipro",
            role: "Java Software Engineer (Apprenticeship)",
            period: "Apr 2022 – May 2023",
            location: "India",
            type: "Enterprise",
            description: "Completed structured apprenticeship program focused on Java-based software development and enterprise application fundamentals.",
            highlights: [
                "Developed and tested core Java applications using object-oriented programming principles, data structures, and debugging practices",
                "Assisted in building backend components and supporting application development tasks within an agile team environment",
                "Gained exposure to software development lifecycle (SDLC), version control, and collaborative engineering workflows",
                "Strengthened foundational skills in Java, SQL, and problem-solving through real-world project simulations and hands-on training"
            ],
            technologies: ["Java", "Object-Oriented Programming", "SQL", "Backend Development", "SDLC", "Agile", "Version Control", "Data Structures"]
        }
    ];

    return (
        <div className="max-w-5xl mx-auto py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h2 className="text-4xl font-bold mb-4 text-white tracking-tight text-center">
                    Professional <span className="text-accent">Experience</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto">
                    Building production-grade AI/ML systems from startup innovation to enterprise scale.
                </p>
            </motion.div>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="glass-card group p-8 relative overflow-hidden"
                    >
                        {/* Decorative gradient */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-orange-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

                        <div className="relative">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Briefcase className="text-accent" size={24} />
                                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                            {exp.role}
                                        </h3>
                                    </div>
                                    <p className="text-xl text-gray-300 font-semibold mb-3">{exp.company}</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-accent/70" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-accent/70" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${exp.type === 'Startup'
                                    ? 'bg-accent/10 text-accent border border-accent/20'
                                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                    }`}>
                                    {exp.type}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            {/* Highlights */}
                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Key Contributions</h4>
                                <ul className="space-y-2">
                                    {exp.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex gap-3 items-start text-gray-400 text-sm">
                                            <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-400 bg-white/5 rounded-full border border-white/5 hover:border-accent/40 hover:text-accent transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
