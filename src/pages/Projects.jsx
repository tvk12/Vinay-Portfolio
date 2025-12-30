import { motion } from 'framer-motion';
import Card from '../components/Card';

export default function Projects() {
    const projects = [
        {
            title: "SPAM SMS DETECTION USING BERT",
            description: "Fine-tuned a BERT-based classifier using PyTorch, achieving 98% global accuracy. Features a FastAPI backend with sub-100ms inference times.",
            tags: ["PyTorch", "BERT", "FastAPI", "NLP"]
        },
        {
            title: "BRAIN STROKE ANALYSIS",
            description: "Production-grade ML pipeline evaluating 5 algorithms to predict stroke risk. Includes an interactive Streamlit web app for real-time risk assessment.",
            tags: ["Scikit-Learn", "Streamlit", "MLOps", "Healthcare"]
        },
        {
            title: "NEWS LEGITIMACY VERIFICATION",
            description: "Fake News Detection System (~92% accuracy) using Python and Scikit-Learn with a modular NLP pipeline and dedicated inference API.",
            tags: ["Python", "NLP", "Scikit-Learn", "Data Science"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Featured <span className="text-accent">Projects</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A selection of my machine learning and data science projects, focusing on real-world impact and production-ready code.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <Card
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
