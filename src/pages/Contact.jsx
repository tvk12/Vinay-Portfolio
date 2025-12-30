import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Button from '../components/Button';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const mailtoLink = `mailto:vinaykumartanneeru@gmail.com?subject=Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="max-w-4xl mx-auto py-32 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Let's <span className="text-accent">Connect</span></h2>
                <p className="text-gray-400 text-lg max-w-xl mx-auto">
                    Have a question or want to discuss a project? My inbox is always open.
                </p>

                <div className="flex justify-center gap-6 mt-10">
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
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 glass-card rounded-2xl text-gray-400 hover:text-accent hover:border-accent/30 transition-all duration-300"
                            aria-label={social.label}
                        >
                            <social.icon size={24} />
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mx-auto"
            >
                <form
                    className="glass-card p-10 space-y-8"
                    onSubmit={handleSubmit}
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-accent">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors placeholder:text-gray-600"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-accent">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors placeholder:text-gray-600"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-accent">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors placeholder:text-gray-600 resize-none"
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>

                    <Button variant="primary" type="submit" className="w-full py-4 text-base">
                        Send Message
                    </Button>
                </form>
            </motion.div>
        </div>
    );
}
