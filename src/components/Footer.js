import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart, Code2, Sparkles } from "lucide-react";

export const Footer = React.memo(() => {
    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/Ajay-pal0",
            icon: Github,
            color: "hover:text-white"
        },
        {
            name: "LinkedIn", 
            href: "https://www.linkedin.com/in/ajay-pal0",
            icon: Linkedin,
            color: "hover:text-blue-400"
        },
        {
            name: "Twitter",
            href: "https://x.com/Shinchan_1432", 
            icon: Twitter,
            color: "hover:text-sky-400"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <footer className="relative py-14 bg-gradient-to-br from-gray-900 via-gray-950 to-black border-t border-gray-800 overflow-hidden text-gray-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.04]">
                <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[length:28px_28px]" />
            </div>

            {/* Floating Decorative Dots */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-6 left-1/4 w-2 h-2 bg-blue-500 rounded-full"
                    animate={{ y: [-5, 5, -5], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-8 right-1/3 w-1 h-1 bg-purple-500 rounded-full"
                    animate={{ y: [3, -3, 3], opacity: [0.4, 0.9, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="max-w-2xl mx-auto text-center space-y-10"
                >
                    {/* Brand */}
                    <motion.div variants={itemVariants}>
                        <motion.h3 
                            className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-3 inline-flex items-center gap-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            Ajay Pal
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Sparkles className="w-5 h-5 text-yellow-400" />
                            </motion.div>
                        </motion.h3>
                        <p className="text-gray-400 text-lg">Software Developer & Creative Thinker</p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants}>
                        <div className="flex justify-center space-x-2">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group relative p-3 text-gray-400 ${social.color} transition-all duration-300 rounded-xl`}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        variants={itemVariants}
                                    >
                                        {/* Glass Background */}
                                        <div className="absolute inset-0 rounded-xl backdrop-blur-md bg-white/10 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                                        {/* Icon */}
                                        <IconComponent className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />

                                        {/* Tooltip */}
                                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                                            {social.name}
                                        </div>

                                        {/* Glow */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm scale-110"></div>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Divider */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent max-w-xs animate-pulse"></div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="mx-4 p-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-gray-700 shadow-md"
                        >
                            <Code2 className="w-4 h-4 text-gray-400" />
                        </motion.div>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent max-w-xs animate-pulse"></div>
                    </motion.div>

                    {/* Copyright */}
                    <motion.div variants={itemVariants} className="space-y-3">
                        <p className="text-gray-400 font-medium">© {new Date().getFullYear()} Ajay Pal. All rights reserved.</p>
                        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
                            <span>Built with</span>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Heart className="w-4 h-4 text-red-400" />
                            </motion.div>
                            <span>React</span>·<span>Tailwind CSS</span>·<span>Framer Motion</span>
                        </div>
                    </motion.div>

                    {/* Status Badge */}
                    <motion.div 
                        variants={itemVariants}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-green-900/30 border border-green-700 rounded-full text-sm text-green-400 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => window.open("https://www.linkedin.com/in/ajay-pal0", "_blank")}
                    >
                        <motion.div
                            className="w-2 h-2 bg-green-400 rounded-full"
                            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="font-medium animate-pulse">Available for new opportunities</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Accent Line */}
            <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
        </footer>
    );
});
