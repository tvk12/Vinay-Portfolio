import { motion } from 'framer-motion';
import Card from '../components/Card';

export default function Projects() {
    const projects = [
        {
            title: "SPAM SMS DETECTION USING BERT",
            description: "Enterprise-grade spam classification system leveraging transformer models for high-precision filtering.",
            tags: ["PyTorch", "BERT", "FastAPI", "NLP", "Docker"],
            metrics: [
                { label: "Accuracy", value: "98.2%" },
                { label: "Inference", value: "<100ms" }
            ],
            links: {
                github: "https://github.com/tvk12/SMS-Spam-Detection",
                demo: "https://vinay-sms-spam.vercel.app"
            },
            details: {
                problem: "SMS spam poses security risks and reduces user trust. Traditional keyword filters fail against evolving adversarial attacks.",
                dataset: "UCI SMS Spam Collection (5.5k+ messages) + custom targeted spam samples.",
                approach: "Fine-tuned 'bert-base-uncased' using a custom classification head. Implemented weighted loss to handle class imbalance.",
                tools: ["PyTorch", "HuggingFace", "FastAPI", "Docker", "AWS"],
                architecture_desc: "Client -> FastAPI (Gunicorn) -> BERT Inference (ONNX Optimized) -> Result Wrapper",
                architecture: ["SMS Input", "Tokenization", "BERT Model", "Classification Head", "FastAPI Response"],
                model_metrics: {
                    accuracy: "98.2%",
                    precision: "97.5%",
                    recall: "96.8%",
                    f1: "97.1%",
                    confusion_matrix: true
                },
                ethics: [
                    "Bias Awareness: Monitored for false positives in legitimate promotional messages.",
                    "Privacy: ensuring no PII is logged during inference.",
                    "Misuse Prevention: Rate limiting API to prevent spamming the detector itself."
                ],
                learnings: "Transformer models significantly outperform LSTMs in capturing semantic context for short-text classification."
            }
        },
        {
            title: "BRAIN STROKE PREDICTION",
            description: "Machine Learning pipeline for early detection of stroke risks based on patient clinical data.",
            tags: ["Scikit-Learn", "Streamlit", "MLOps", "Pandas"],
            metrics: [
                { label: "Recall", value: "94.0%" },
                { label: "F1 Score", value: "0.91" }
            ],
            links: {
                github: "https://github.com/tvk12/Brain-Stroke-Detection"
            },
            details: {
                problem: "Stroke is a leading cause of disability. Early identification of high-risk patients can save lives but clinical data is often imbalanced.",
                dataset: "Kaggle Stroke Prediction Dataset (Clinical features: BMI, Hypertension, etc.)",
                approach: "Comprehensive pipeline: SMOTE for oversampling, Feature Engineering (polynomial features), and ensemble of XGBoost & Random Forest.",
                tools: ["Scikit-Learn", "XGBoost", "Streamlit", "Joblib", "Plotly"],
                architecture_desc: "Data Ingestion -> SMOTE Pipeline -> Cross-Validation Filter -> Frontend Dashboard",
                architecture: ["Patient Data", "Preprocessing (SMOTE)", "Ensemble Model", "Risk Scorer", "Streamlit UI"],
                model_metrics: {
                    accuracy: "95.1%",
                    precision: "89.0%",
                    recall: "94.0%",
                    f1: "0.91",
                    confusion_matrix: true
                },
                ethics: [
                    "Medical Disclaimer: Tool is for assistance only, not diagnosis.",
                    "Data Bias: Addressed class imbalance to prevent under-diagnosing strokes.",
                    "Transparency: Feature importance plots explain 'why' a risk score was given."
                ],
                learnings: "Feature engineering (Age, Hypertension, BMI) proved more critical than model complexity in this diagnostic task."
            }
        },
        {
            title: "NEWS LEGITIMACY VERIFIER",
            description: "Automated fact-checking system designed to classify news articles as legitimate or fraudulent.",
            tags: ["Python", "NLP", "Scikit-Learn", "TF-IDF"],
            metrics: [
                { label: "Dataset", value: "40k articles" },
                { label: "Precision", value: "92.5%" }
            ],
            links: {
                github: "https://github.com/tvk12/News-Legitimacy"
            },
            details: {
                problem: "Misinformation spreads rapidly online. Scalable tool needed to verify large volumes of text in real-time.",
                dataset: "ISOT Fake News Dataset + Real-world news scraping from reliable API sources.",
                approach: "Implemented a modular NLP pipeline: tokenization, stop-word removal, and TF-IDF vectorization. Trained a PassiveAggressiveClassifier for online learning.",
                tools: ["NLTK", "Scikit-Learn", "Flask", "Pandas", "WordCloud"],
                architecture_desc: "Text Source -> NLP Preprocessor -> Multi-Vectorization -> PA Classifier -> Legitimacy Score",
                architecture: ["News Text", "NLP Pipeline", "TF-IDF Vectorizer", "PA Classifier", "Verdict"],
                model_metrics: {
                    accuracy: "93.4%",
                    precision: "92.5%",
                    recall: "94.1%",
                    f1: "93.3%",
                    confusion_matrix: true
                },
                ethics: [
                    "Source Bias: Training data balanced between liberal and conservative sources.",
                    "Limitation: System detects style/patterns, not factual truth of novel events.",
                    "Misuse: Preventing use for generating convincing fake news (reverse engineering)."
                ],
                learnings: "Real-time verification requires a balance between model depth and computational latency."
            }
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4"
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <Card
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            metrics={project.metrics}
                            links={project.links}
                            details={project.details}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
